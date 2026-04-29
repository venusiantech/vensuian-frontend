import { useEffect, useState } from "react";
import { Save, ChevronUp, ChevronDown, Eye, EyeOff } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

export default function AdminSettings() {
  const [data, setData] = useState(null);
  const [showKey, setShowKey] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => { api.get("/settings/ai").then((r) => setData(r.data)); }, []);

  if (!data) return <div className="text-white/60">Loading…</div>;

  const setProvider = (i, k, v) => {
    const next = [...data.providers]; next[i] = { ...next[i], [k]: v };
    setData({ ...data, providers: next });
  };

  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= data.providers.length) return;
    const next = [...data.providers];
    [next[i], next[j]] = [next[j], next[i]];
    next.forEach((p, idx) => (p.priority = idx + 1));
    setData({ ...data, providers: next });
  };

  const save = async () => {
    setSaving(true);
    try {
      await api.put("/settings/ai", {
        providers: data.providers.map((p, idx) => ({ ...p, priority: idx + 1 })),
        use_emergent_key: data.use_emergent_key,
      });
      toast.success("Settings saved");
    } catch {
      toast.error("Save failed");
    } finally { setSaving(false); }
  };

  return (
    <div data-testid="admin-settings-page" className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow">AI Engine</p>
          <h1 className="mt-3 font-display text-4xl font-bold">AI Providers</h1>
          <p className="mt-2 text-sm text-white/60 max-w-xl">Configure the multi-LLM waterfall for blog generation. Top of the list is tried first.</p>
        </div>
        <button onClick={save} disabled={saving} className="btn-primary text-sm disabled:opacity-60" data-testid="settings-save-btn">
          <Save className="h-4 w-4" /> {saving ? "Saving…" : "Save"}
        </button>
      </div>

      <div className="card-surface p-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={data.use_emergent_key} onChange={(e) => setData({ ...data, use_emergent_key: e.target.checked })}
            className="accent-emerald-500" data-testid="settings-emergent-toggle" />
          <div>
            <p className="text-sm">Use Emergent Universal Key as fallback</p>
            <p className="text-xs text-white/50">Recommended. Per-provider keys below override this when set.</p>
          </div>
        </label>
      </div>

      <div className="space-y-3">
        {data.providers.map((p, i) => (
          <div key={p.name} className="card-surface p-5" data-testid={`provider-${p.name}`}>
            <div className="flex items-center gap-4">
              <div className="text-xs uppercase tracking-[0.18em] text-white/40 w-6">#{i + 1}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="font-display text-lg font-semibold capitalize">{p.name}</p>
                  <span className="text-xs text-white/50">{p.model}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => move(i, -1)} className="text-white/60 hover:text-white" data-testid={`provider-up-${p.name}`}><ChevronUp className="h-4 w-4" /></button>
                <button onClick={() => move(i, 1)} className="text-white/60 hover:text-white" data-testid={`provider-down-${p.name}`}><ChevronDown className="h-4 w-4" /></button>
                <label className="ml-3 inline-flex items-center gap-2 text-xs cursor-pointer">
                  <input type="checkbox" checked={p.enabled} onChange={(e) => setProvider(i, "enabled", e.target.checked)}
                    className="accent-emerald-500" data-testid={`provider-toggle-${p.name}`} />
                  Enabled
                </label>
              </div>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-white/50">Model</label>
                <input value={p.model} onChange={(e) => setProvider(i, "model", e.target.value)} className="mt-2 w-full rounded-xl bg-white/[0.03] border border-white/10 px-3 py-2 text-sm outline-none" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-white/50">Custom API key (optional)</label>
                <div className="mt-2 flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/10 px-3">
                  <input type={showKey[p.name] ? "text" : "password"} value={p.api_key || ""} onChange={(e) => setProvider(i, "api_key", e.target.value)}
                    placeholder={data.use_emergent_key ? "Using Emergent key" : "Required"}
                    className="flex-1 bg-transparent text-sm py-2 outline-none" />
                  <button type="button" onClick={() => setShowKey({ ...showKey, [p.name]: !showKey[p.name] })} className="text-white/50 hover:text-white">
                    {showKey[p.name] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
