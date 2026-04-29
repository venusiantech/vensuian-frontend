import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Plus, Pencil, Send, Trash2, Save, ArrowLeft, Users } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

const TEMPLATES = {
  blank: { subject: "", preview_text: "", html: "" },
  monthly: {
    subject: "The Venusian dispatch — what we shipped this month",
    preview_text: "AI, fintech, and adtech notes from our team.",
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050505;font-family:Helvetica,Arial,sans-serif;color:#ffffff">
  <tr><td align="center" style="padding:40px 20px">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.1);border-radius:16px">
      <tr><td style="padding:40px">
        <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.2em;color:#10b981;text-transform:uppercase">The Venusian dispatch</p>
        <h1 style="margin:8px 0 16px;font-size:28px;line-height:1.15;color:#ffffff">What we shipped this month</h1>
        <p style="margin:0 0 24px;color:#a1a1aa;font-size:15px;line-height:1.6">
          Hi there — here's a quick recap of new features, articles, and announcements from Venusian and our ecosystem (Fastofy, Qwipto, TrafficBoxes).
        </p>
        <h2 style="margin:24px 0 8px;font-size:18px;color:#ffffff">[Highlight 1]</h2>
        <p style="margin:0 0 16px;color:#a1a1aa;font-size:14px;line-height:1.6">Short paragraph here. Add a link below.</p>
        <a href="https://venusian.tech" style="display:inline-block;background:#10b981;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600;font-size:14px">Read more</a>
        <hr style="border:0;border-top:1px solid rgba(255,255,255,0.08);margin:32px 0">
        <p style="font-size:12px;color:#71717a;margin:0">© Venusian Technologies — Dubai · Amsterdam · New York</p>
      </td></tr>
    </table>
  </td></tr>
</table>`,
  },
  product_update: {
    subject: "Now live — [Product] update",
    preview_text: "What's new in the Venusian ecosystem.",
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050505;font-family:Helvetica,Arial,sans-serif;color:#ffffff">
  <tr><td align="center" style="padding:40px 20px">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.1);border-radius:16px">
      <tr><td style="padding:40px">
        <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.2em;color:#10b981;text-transform:uppercase">Product update</p>
        <h1 style="margin:8px 0 16px;font-size:28px;color:#ffffff">[Product] just got better</h1>
        <p style="margin:0 0 16px;color:#a1a1aa;font-size:15px;line-height:1.6">Brief intro paragraph.</p>
        <ul style="margin:0 0 24px;color:#a1a1aa;font-size:14px;line-height:1.7">
          <li>Feature 1 — short benefit</li><li>Feature 2 — short benefit</li><li>Feature 3 — short benefit</li>
        </ul>
        <a href="https://venusian.tech" style="display:inline-block;background:#10b981;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600;font-size:14px">See what's new</a>
      </td></tr>
    </table>
  </td></tr>
</table>`,
  },
};

// LIST PAGE
export function CampaignsList() {
  const [items, setItems] = useState([]);
  const load = () => api.get("/newsletter/campaigns").then((r) => setItems(r.data.items));
  useEffect(() => { load(); }, []);
  const del = async (id) => { if (!window.confirm("Delete?")) return; await api.delete(`/newsletter/campaigns/${id}`); toast.success("Deleted"); load(); };
  const send = async (id) => {
    if (!window.confirm("Send to all active subscribers now?")) return;
    const t = toast.loading("Sending campaign…");
    try {
      const r = await api.post(`/newsletter/campaigns/${id}/send`);
      toast.success(`Delivered ${r.data.stats.delivered} / ${r.data.stats.recipients}`, { id: t });
      load();
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Send failed", { id: t });
    }
  };

  return (
    <div data-testid="campaigns-list-page" className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="eyebrow">Newsletter</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Campaigns</h1>
          <p className="mt-2 text-sm text-white/60">Draft, preview, and send professional emails to your subscribers.</p>
        </div>
        <Link to="/admin/newsletter/campaigns/new" className="btn-primary text-sm" data-testid="campaigns-new-btn">
          <Plus className="h-4 w-4" /> New campaign
        </Link>
      </div>

      <div className="card-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase tracking-[0.18em] text-white/50 border-b border-white/10">
            <tr><th className="text-left px-5 py-4">Subject</th><th className="text-left px-5 py-4">Status</th><th className="text-left px-5 py-4">Stats</th><th className="text-left px-5 py-4">Updated</th><th></th></tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {items.length === 0 ? <tr><td colSpan={5} className="px-5 py-8 text-white/50">No campaigns yet.</td></tr> : items.map((c) => (
              <tr key={c.id} data-testid={`campaign-row-${c.id}`}>
                <td className="px-5 py-4 max-w-md truncate"><Link to={`/admin/newsletter/campaigns/${c.id}`} className="hover:text-emerald-400">{c.subject || "(untitled)"}</Link></td>
                <td className="px-5 py-4"><StatusPill s={c.status} /></td>
                <td className="px-5 py-4 text-xs text-white/60">
                  {c.status === "sent" ? `${c.stats?.delivered || 0}/${c.stats?.recipients || 0} delivered` : "—"}
                </td>
                <td className="px-5 py-4 text-white/60">{(c.updated_at || "").slice(0, 10)}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 justify-end">
                    <Link to={`/admin/newsletter/campaigns/${c.id}`} className="text-white/60 hover:text-white"><Pencil className="h-4 w-4" /></Link>
                    {c.status !== "sent" && <button onClick={() => send(c.id)} className="text-emerald-400 hover:text-emerald-300" data-testid={`campaign-send-${c.id}`}><Send className="h-4 w-4" /></button>}
                    <button onClick={() => del(c.id)} className="text-white/60 hover:text-red-400"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusPill({ s }) {
  const cls = s === "sent" ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" :
              s === "scheduled" ? "bg-amber-500/15 text-amber-300 border-amber-500/30" :
              "bg-white/5 text-white/60 border-white/10";
  return <span className={`rounded-full border px-2.5 py-0.5 text-[11px] uppercase tracking-[0.16em] ${cls}`}>{s}</span>;
}

// EDITOR PAGE
export function CampaignEditor() {
  const { id } = useParams();
  const isNew = !id || id === "new";
  const nav = useNavigate();
  const [data, setData] = useState({ subject: "", preview_text: "", html: TEMPLATES.monthly.html, audience: "active", status: "draft" });
  const [saving, setSaving] = useState(false);
  const [sending, setSending] = useState(false);
  const [subsCount, setSubsCount] = useState(0);

  useEffect(() => {
    if (!isNew) api.get(`/newsletter/campaigns/${id}`).then((r) => setData(r.data));
    api.get("/newsletter").then((r) => setSubsCount(r.data.items.filter((s) => s.status === "active").length));
  }, [id, isNew]);

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const applyTemplate = (key) => {
    const t = TEMPLATES[key]; if (!t) return;
    if (data.html && !window.confirm("Replace current HTML with template?")) return;
    setData((d) => ({ ...d, ...t }));
  };

  const save = async () => {
    if (!data.subject || !data.html) { toast.error("Subject and HTML required"); return; }
    setSaving(true);
    try {
      const body = { subject: data.subject, preview_text: data.preview_text || "", html: data.html, audience: data.audience, status: data.status, scheduled_at: data.scheduled_at || null };
      if (isNew) {
        const r = await api.post("/newsletter/campaigns", body);
        toast.success("Created"); nav(`/admin/newsletter/campaigns/${r.data.id}`);
      } else {
        await api.put(`/newsletter/campaigns/${id}`, body);
        toast.success("Saved");
      }
    } catch (err) { toast.error(err?.response?.data?.detail || "Save failed"); }
    finally { setSaving(false); }
  };

  const send = async () => {
    if (!id || isNew) { toast.error("Save first"); return; }
    if (!window.confirm(`Send to ${subsCount} subscribers now?`)) return;
    setSending(true);
    const t = toast.loading("Sending campaign…");
    try {
      const r = await api.post(`/newsletter/campaigns/${id}/send`);
      toast.success(`Delivered ${r.data.stats.delivered} / ${r.data.stats.recipients}`, { id: t });
      const refresh = await api.get(`/newsletter/campaigns/${id}`); setData(refresh.data);
    } catch (err) { toast.error(err?.response?.data?.detail || "Send failed", { id: t }); }
    finally { setSending(false); }
  };

  return (
    <div data-testid="campaign-editor-page" className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Link to="/admin/newsletter/campaigns" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> All campaigns
        </Link>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs text-white/60"><Users className="h-3.5 w-3.5" /> {subsCount} subscribers</span>
          <button onClick={save} disabled={saving} className="btn-ghost text-sm" data-testid="campaign-save-btn">
            <Save className="h-4 w-4" /> {saving ? "Saving…" : "Save"}
          </button>
          {!isNew && data.status !== "sent" && (
            <button onClick={send} disabled={sending} className="btn-primary text-sm" data-testid="campaign-send-now">
              <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send now"}
            </button>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card-surface p-6 space-y-4">
            <Field label="Subject"><input data-testid="campaign-subject" value={data.subject} onChange={(e) => set("subject", e.target.value)} className="ven-input" /></Field>
            <Field label="Preview text (inbox preview)"><input value={data.preview_text || ""} onChange={(e) => set("preview_text", e.target.value)} className="ven-input" /></Field>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs uppercase tracking-[0.18em] text-white/50 self-center mr-2">Templates:</span>
              <button onClick={() => applyTemplate("blank")} className="rounded-full border border-white/15 px-3 py-1 text-xs hover:border-emerald-500" data-testid="tpl-blank">Blank</button>
              <button onClick={() => applyTemplate("monthly")} className="rounded-full border border-white/15 px-3 py-1 text-xs hover:border-emerald-500" data-testid="tpl-monthly">Monthly dispatch</button>
              <button onClick={() => applyTemplate("product_update")} className="rounded-full border border-white/15 px-3 py-1 text-xs hover:border-emerald-500" data-testid="tpl-product">Product update</button>
            </div>

            <Field label="HTML body">
              <textarea data-testid="campaign-html" rows={20} value={data.html} onChange={(e) => set("html", e.target.value)} className="ven-input font-mono text-xs leading-6 resize-none" />
            </Field>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-surface p-6 space-y-4">
            <Field label="Audience">
              <select value={data.audience} onChange={(e) => set("audience", e.target.value)} className="ven-input">
                <option value="active">Active subscribers</option>
                <option value="all">All subscribers</option>
              </select>
            </Field>
            <Field label="Status">
              <select value={data.status} onChange={(e) => set("status", e.target.value)} className="ven-input">
                <option value="draft">Draft</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </Field>
            {data.status === "scheduled" && (
              <Field label="Schedule at">
                <input type="datetime-local" value={data.scheduled_at || ""} onChange={(e) => set("scheduled_at", e.target.value)} className="ven-input" />
              </Field>
            )}
            {data.status === "sent" && data.stats && (
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs text-emerald-300">
                Sent: {data.stats.delivered}/{data.stats.recipients} delivered · {data.stats.failed} failed
                {(data.stats.failures_sample || []).length > 0 && <p className="mt-2 text-white/50 text-[10px]">{data.stats.failures_sample[0]}</p>}
              </div>
            )}
          </div>

          <div className="card-surface p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-3">Live preview</p>
            <iframe title="preview" srcDoc={data.html} className="w-full h-[480px] rounded-lg border border-white/10 bg-white" />
          </div>
        </div>
      </div>

      <style>{`.ven-input{width:100%;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:10px 14px;color:#fff;font-size:14px;outline:none}.ven-input:focus{border-color:rgba(16,185,129,.55);box-shadow:0 0 0 3px rgba(16,185,129,.12)}`}</style>
    </div>
  );
}
function Field({ label, children }) { return <label className="block"><span className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-2">{label}</span>{children}</label>; }
