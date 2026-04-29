import { useEffect, useState } from "react";
import { Activity, RefreshCw, Cpu, Database, Mail, Rss, Check, X } from "lucide-react";
import { api } from "@/lib/api";

export default function AdminHealth() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    api.get("/admin/health").then((r) => setData(r.data)).finally(() => setLoading(false));
  };
  useEffect(load, []);

  return (
    <div data-testid="admin-health-page" className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow"><Activity className="inline h-3.5 w-3.5 mr-1" /> Status</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Provider health</h1>
        </div>
        <button onClick={load} disabled={loading} className="btn-ghost text-sm" data-testid="health-refresh">
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Refresh
        </button>
      </div>

      {!data ? <p className="text-white/60">Loading…</p> : (
        <div className="grid lg:grid-cols-2 gap-5">
          {/* LLM */}
          <div className="card-surface p-6 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-4 w-4 text-emerald-400" />
              <h2 className="font-display text-xl font-semibold">LLM providers</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {data.llm.map((p) => (
                <div key={p.name} className="rounded-xl border border-white/10 p-4" data-testid={`health-llm-${p.name}`}>
                  <div className="flex items-center justify-between">
                    <p className="font-display text-base font-semibold capitalize">{p.name}</p>
                    <Pill ok={p.ok} disabled={!p.enabled} />
                  </div>
                  <p className="mt-1 text-[11px] text-white/50 truncate">{p.model}</p>
                  {p.reason && <p className="mt-2 text-[11px] text-white/40 line-clamp-2">{p.reason}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Storage */}
          <div className="card-surface p-6">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-4 w-4 text-emerald-400" />
              <h2 className="font-display text-xl font-semibold">Object storage</h2>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/70">{data.storage.service || "Emergent"}</p>
              <Pill ok={data.storage.ok} />
            </div>
            {data.storage.reason && <p className="mt-2 text-xs text-white/50">{data.storage.reason}</p>}
            {data.storage.key_prefix && <p className="mt-2 text-xs text-white/40 font-mono">key: {data.storage.key_prefix}</p>}
          </div>

          {/* Email */}
          <div className="card-surface p-6">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-4 w-4 text-emerald-400" />
              <h2 className="font-display text-xl font-semibold">Email engine</h2>
            </div>
            <div className="space-y-2">
              {[
                { k: "resend", label: "Resend (primary)" },
                { k: "sendgrid", label: "SendGrid (fallback)" },
                { k: "smtp", label: "SMTP (fallback)" },
              ].map((p) => (
                <div key={p.k} className="flex items-center justify-between text-sm" data-testid={`health-email-${p.k}`}>
                  <span className="text-white/70">{p.label}</span>
                  <Pill ok={data.email[p.k]} />
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-white/40">
              Sender: {data.email.sender_name} &lt;{data.email.sender_email}&gt;
            </p>
          </div>

          {/* RSS */}
          <div className="card-surface p-6 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Rss className="h-4 w-4 text-emerald-400" />
              <h2 className="font-display text-xl font-semibold">RSS engine</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <Stat label="Enabled sources" value={data.rss.enabled_sources} />
              <Stat label="Total sources" value={data.rss.total_sources} />
              <Stat label="Last run" value={data.rss.last_run ? data.rss.last_run.ran_at?.slice(0, 16).replace("T", " ") : "—"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Pill({ ok, disabled }) {
  if (disabled) return <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.18em] text-white/50">Disabled</span>;
  return ok ? (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.18em] text-emerald-300">
      <Check className="h-3 w-3" /> OK
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-full border border-red-500/30 bg-red-500/15 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.18em] text-red-300">
      <X className="h-3 w-3" /> Down
    </span>
  );
}
function Stat({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-white/50">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold">{value}</p>
    </div>
  );
}
