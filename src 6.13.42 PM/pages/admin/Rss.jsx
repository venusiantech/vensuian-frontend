import { useEffect, useState } from "react";
import { Plus, Trash2, Play, RefreshCw, ExternalLink } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

export default function AdminRss() {
  const [items, setItems] = useState([]);
  const [feedItems, setFeedItems] = useState([]);
  const [lastRun, setLastRun] = useState(null);
  const [form, setForm] = useState({ name: "", url: "", enabled: true });
  const [running, setRunning] = useState(false);
  const [autoPublish, setAutoPublish] = useState(false);

  const load = async () => {
    const [s, i, l] = await Promise.all([
      api.get("/admin/rss"),
      api.get("/admin/rss-engine/items"),
      api.get("/admin/rss-engine/last-run"),
    ]);
    setItems(s.data.items);
    setFeedItems(i.data.items);
    setLastRun(l.data && l.data.ran_at ? l.data : null);
  };
  useEffect(() => { load(); }, []);

  const add = async (e) => {
    e.preventDefault();
    if (!form.name || !form.url) return;
    await api.post("/admin/rss", form);
    toast.success("Added");
    setForm({ name: "", url: "", enabled: true });
    load();
  };
  const del = async (id) => { if (!window.confirm("Remove?")) return; await api.delete(`/admin/rss/${id}`); load(); };
  const toggle = async (id) => {
    try {
      await api.patch(`/admin/rss/${id}/toggle`);
      load();
    } catch { toast.error("Toggle failed"); }
  };

  const runNow = async () => {
    setRunning(true);
    const t = toast.loading("RSS fetch queued — drafts will appear in 1-3 minutes…");
    try {
      await api.post(`/admin/rss-engine/run?auto_publish=${autoPublish}&max_per_source=1`);
      toast.success("RSS fetch started in the background. Refresh in a minute.", { id: t });
      // Re-poll after a short delay to surface progress
      setTimeout(load, 5000);
    } catch (err) {
      toast.error(err?.response?.data?.detail || "RSS run failed", { id: t });
    } finally { setRunning(false); }
  };

  return (
    <div data-testid="admin-rss-page" className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="eyebrow">Automation</p>
          <h1 className="mt-3 font-display text-4xl font-bold">RSS engine</h1>
          <p className="mt-2 text-sm text-white/60">Auto-fetch top tech feeds, rewrite via AI, queue or auto-publish. Scheduler runs hourly.</p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <label className="inline-flex items-center gap-2 text-xs text-white/70 cursor-pointer">
            <input type="checkbox" checked={autoPublish} onChange={(e) => setAutoPublish(e.target.checked)} className="accent-emerald-500" data-testid="rss-auto-publish" />
            Auto-publish
          </label>
          <button onClick={runNow} disabled={running} className="btn-primary text-sm disabled:opacity-60" data-testid="rss-run-now">
            {running ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />} Run now
          </button>
        </div>
      </div>

      {lastRun && (
        <div className="card-surface p-4 text-xs text-white/60">
          Last run: <span className="text-white">{lastRun.ran_at?.replace("T", " ").slice(0, 16)}</span>
          · created <span className="text-emerald-400">{lastRun.created || 0}</span>
          · skipped <span className="text-white/80">{lastRun.skipped || 0}</span>
          {(lastRun.errors || []).length > 0 && <span className="text-red-400 ml-2">· {lastRun.errors.length} error{lastRun.errors.length === 1 ? "" : "s"}</span>}
        </div>
      )}

      <form onSubmit={add} className="card-surface p-6 grid sm:grid-cols-3 gap-3">
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Source name" className="ven-input" />
        <input value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} placeholder="https://feed.url/rss" className="ven-input" />
        <button className="btn-primary text-sm" data-testid="rss-add-btn"><Plus className="h-4 w-4" /> Add</button>
      </form>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="card-surface overflow-hidden">
          <p className="px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/50 border-b border-white/10">Sources ({items.length})</p>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-white/5">
              {items.length === 0 ? <tr><td className="px-5 py-8 text-white/50">No sources.</td></tr> : items.map((r) => (
                <tr key={r.id} data-testid={`rss-row-${r.id}`}>
                  <td className="px-5 py-4 text-white">{r.name}</td>
                  <td className="px-5 py-4 text-white/60 truncate max-w-[14rem]"><a href={r.url} target="_blank" rel="noreferrer" className="hover:text-emerald-400">{r.url}</a></td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => toggle(r.id)}
                      data-testid={`rss-toggle-${r.id}`}
                      role="switch"
                      aria-checked={r.enabled}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${r.enabled ? "bg-emerald-500" : "bg-white/10"}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${r.enabled ? "translate-x-4" : "translate-x-0.5"}`} />
                    </button>
                  </td>
                  <td className="px-5 py-4 text-right"><button onClick={() => del(r.id)} className="text-white/60 hover:text-red-400"><Trash2 className="h-4 w-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card-surface overflow-hidden">
          <p className="px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/50 border-b border-white/10">Recent fetches ({feedItems.length})</p>
          <ul className="divide-y divide-white/5 max-h-[480px] overflow-auto">
            {feedItems.length === 0 ? <li className="px-5 py-8 text-white/50 text-sm">No items yet — click "Run now".</li> : feedItems.map((it) => (
              <li key={it.id} className="px-5 py-3 flex items-start justify-between gap-3 text-sm">
                <div className="min-w-0">
                  <p className="text-white truncate">{it.title}</p>
                  <p className="text-xs text-white/50">{it.source_name} · {it.status}</p>
                </div>
                {it.link && <a href={it.link} target="_blank" rel="noreferrer" className="text-white/40 hover:text-emerald-400 shrink-0"><ExternalLink className="h-3.5 w-3.5" /></a>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`.ven-input{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:10px 14px;color:#fff;font-size:14px;outline:none}.ven-input:focus{border-color:rgba(16,185,129,.55)}`}</style>
    </div>
  );
}
