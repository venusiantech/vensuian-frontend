import { useEffect, useState } from "react";
import { Save, Send, Mail } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

export default function AdminEmailSettings() {
  const [data, setData] = useState(null);
  const [test, setTest] = useState({ to: "", subject: "Venusian email test", html: "<p>Hello from your Venusian CMS.</p>" });
  const [saving, setSaving] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => { api.get("/email/settings").then((r) => setData(r.data)); }, []);

  if (!data) return <div className="text-white/60">Loading…</div>;

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const save = async () => {
    setSaving(true);
    try {
      await api.put("/email/settings", data);
      toast.success("Saved");
      const r = await api.get("/email/settings");
      setData(r.data);
    } catch { toast.error("Save failed"); }
    finally { setSaving(false); }
  };

  const sendTest = async () => {
    if (!test.to) { toast.error("Enter a recipient"); return; }
    setSending(true);
    try {
      const r = await api.post("/email/test", test);
      toast.success(`Sent via ${r.data.provider}`);
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Send failed");
    } finally { setSending(false); }
  };

  return (
    <div data-testid="admin-email-page" className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow"><Mail className="inline h-3.5 w-3.5 mr-1" /> Engine</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Email settings</h1>
          <p className="mt-2 text-sm text-white/60">Resend (primary) → SendGrid → SMTP fallback. Configure any one to enable sending.</p>
        </div>
        <button onClick={save} disabled={saving} className="btn-primary text-sm" data-testid="email-save-btn">
          <Save className="h-4 w-4" /> {saving ? "Saving…" : "Save"}
        </button>
      </div>

      <div className="card-surface p-6 grid sm:grid-cols-2 gap-4">
        <Field label="Sender email">
          <input data-testid="email-sender" value={data.sender_email || ""} onChange={(e) => set("sender_email", e.target.value)} className="ven-input" placeholder="hello@venusian.tech" />
        </Field>
        <Field label="Sender name">
          <input data-testid="email-sender-name" value={data.sender_name || ""} onChange={(e) => set("sender_name", e.target.value)} className="ven-input" placeholder="Venusian" />
        </Field>
      </div>

      <div className="card-surface p-6 space-y-4">
        <h2 className="font-display text-lg font-semibold">Resend <span className="ml-2 text-xs text-emerald-400">primary</span></h2>
        <Field label="Resend API key (re_…)">
          <input data-testid="email-resend-key" type="password" value={data.resend_api_key || ""} onChange={(e) => set("resend_api_key", e.target.value)}
            placeholder={data._has_resend ? "•••••• stored — paste new to update" : "re_xxxxxxxx"} className="ven-input" />
        </Field>
      </div>

      <div className="card-surface p-6 space-y-4">
        <h2 className="font-display text-lg font-semibold">SendGrid <span className="ml-2 text-xs text-white/50">fallback</span></h2>
        <Field label="SendGrid API key">
          <input data-testid="email-sendgrid-key" type="password" value={data.sendgrid_api_key || ""} onChange={(e) => set("sendgrid_api_key", e.target.value)}
            placeholder={data._has_sendgrid ? "•••••• stored — paste new to update" : "SG.xxxxxxxx"} className="ven-input" />
        </Field>
      </div>

      <div className="card-surface p-6 space-y-4">
        <h2 className="font-display text-lg font-semibold">SMTP <span className="ml-2 text-xs text-white/50">fallback</span></h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Host"><input value={data.smtp_host || ""} onChange={(e) => set("smtp_host", e.target.value)} className="ven-input" placeholder="smtp.example.com" /></Field>
          <Field label="Port"><input type="number" value={data.smtp_port || 587} onChange={(e) => set("smtp_port", parseInt(e.target.value || "587"))} className="ven-input" /></Field>
          <Field label="User"><input value={data.smtp_user || ""} onChange={(e) => set("smtp_user", e.target.value)} className="ven-input" /></Field>
          <Field label="Password"><input type="password" value={data.smtp_password || ""} onChange={(e) => set("smtp_password", e.target.value)} placeholder={data._has_smtp ? "•••••• stored" : ""} className="ven-input" /></Field>
        </div>
      </div>

      <div className="card-surface p-6 space-y-4">
        <h2 className="font-display text-lg font-semibold">Send a test</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="To"><input data-testid="email-test-to" value={test.to} onChange={(e) => setTest({ ...test, to: e.target.value })} className="ven-input" placeholder="you@you.com" /></Field>
          <Field label="Subject"><input value={test.subject} onChange={(e) => setTest({ ...test, subject: e.target.value })} className="ven-input" /></Field>
        </div>
        <Field label="HTML body"><textarea rows={4} value={test.html} onChange={(e) => setTest({ ...test, html: e.target.value })} className="ven-input resize-none font-mono text-xs" /></Field>
        <button onClick={sendTest} disabled={sending} className="btn-primary text-sm" data-testid="email-test-send">
          <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send test"}
        </button>
      </div>

      <style>{`.ven-input{width:100%;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:10px 14px;color:#fff;font-size:14px;outline:none}.ven-input:focus{border-color:rgba(16,185,129,.55);box-shadow:0 0 0 3px rgba(16,185,129,.12)}`}</style>
    </div>
  );
}
function Field({ label, children }) {
  return <label className="block"><span className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-2">{label}</span>{children}</label>;
}
