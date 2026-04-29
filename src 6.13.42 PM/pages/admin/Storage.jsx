import { useEffect, useState } from "react";
import { Save, Cloud, Check, X } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

export default function AdminStorage() {
  const [data, setData] = useState(null);
  const [health, setHealth] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const [s, h] = await Promise.all([
      api.get("/settings/cloudinary"),
      api.get("/settings/cloudinary/health"),
    ]);
    setData(s.data);
    setHealth(h.data);
  };
  useEffect(() => { load(); }, []);

  if (!data) return <div className="text-white/60">Loading…</div>;

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const save = async () => {
    setSaving(true);
    try {
      await api.put("/settings/cloudinary", {
        cloud_name: data.cloud_name,
        api_key: data.api_key,
        api_secret: data.api_secret,
      });
      toast.success("Cloudinary settings saved");
      load();
    } catch { toast.error("Save failed"); }
    finally { setSaving(false); }
  };

  return (
    <div data-testid="admin-storage-page" className="space-y-8 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow"><Cloud className="inline h-3.5 w-3.5 mr-1" /> Storage</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Cloudinary</h1>
          <p className="mt-2 text-sm text-white/60">All blog cover uploads + Nano Banana AI images route through Cloudinary when configured.</p>
        </div>
        <button onClick={save} disabled={saving} className="btn-primary text-sm" data-testid="storage-save-btn">
          <Save className="h-4 w-4" /> {saving ? "Saving…" : "Save"}
        </button>
      </div>

      <div className={`card-surface p-5 flex items-start gap-3 ${health?.configured ? "border-emerald-500/40" : ""}`}>
        {health?.configured
          ? <span className="h-8 w-8 grid place-items-center rounded-full bg-emerald-500/15 border border-emerald-500/30"><Check className="h-4 w-4 text-emerald-300" /></span>
          : <span className="h-8 w-8 grid place-items-center rounded-full bg-white/5 border border-white/10"><X className="h-4 w-4 text-white/50" /></span>}
        <div>
          <p className="font-display text-base font-semibold">
            {health?.configured ? "Cloudinary is active" : "Cloudinary not configured"}
          </p>
          <p className="text-sm text-white/60">
            Active provider: <span className="text-emerald-400">{health?.active_provider}</span>
            {health?.cloud_name && <> · cloud: <span className="text-white/80">{health.cloud_name}</span></>}
          </p>
          <p className="mt-2 text-xs text-white/50">Get keys from <a href="https://cloudinary.com/console" target="_blank" rel="noreferrer" className="text-emerald-400 underline">cloudinary.com/console</a></p>
        </div>
      </div>

      <div className="card-surface p-6 space-y-4">
        <Field label="Cloud name">
          <input data-testid="cloud-name" value={data.cloud_name || ""} onChange={(e) => set("cloud_name", e.target.value)} className="ven-input" placeholder="my-cloud" />
        </Field>
        <Field label="API key">
          <input data-testid="cloud-key" value={data.api_key || ""} onChange={(e) => set("api_key", e.target.value)} className="ven-input"
            placeholder={data._has_api_key ? "•••••• stored — paste new to update" : "123456789012345"} />
        </Field>
        <Field label="API secret">
          <input data-testid="cloud-secret" type="password" value={data.api_secret || ""} onChange={(e) => set("api_secret", e.target.value)} className="ven-input"
            placeholder={data._has_api_secret ? "•••••• stored — paste new to update" : "**********"} />
        </Field>
      </div>

      <style>{`.ven-input{width:100%;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:10px 14px;color:#fff;font-size:14px;outline:none}.ven-input:focus{border-color:rgba(16,185,129,.55);box-shadow:0 0 0 3px rgba(16,185,129,.12)}`}</style>
    </div>
  );
}
function Field({ label, children }) { return <label className="block"><span className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-2">{label}</span>{children}</label>; }
