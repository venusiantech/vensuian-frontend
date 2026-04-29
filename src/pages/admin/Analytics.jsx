import { useEffect, useState } from "react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid,
} from "recharts";
import { api } from "@/lib/api";
import { BarChart3 } from "lucide-react";

const COLORS = ["#10b981", "#0d6b4f", "#3b82f6", "#f59e0b", "#a78bfa", "#ec4899", "#06b6d4", "#84cc16"];
const GRID = "rgba(255,255,255,0.06)";

const TT = { contentStyle: { background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 } };

export default function AdminAnalytics() {
  const [days, setDays] = useState(30);
  const [d, setD] = useState(null);
  useEffect(() => { api.get(`/admin/analytics?days=${days}`).then((r) => setD(r.data)); }, [days]);

  if (!d) return <div className="text-white/60">Loading…</div>;

  return (
    <div data-testid="admin-analytics-page" className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="eyebrow"><BarChart3 className="inline h-3.5 w-3.5 mr-1" /> MIS</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Analytics</h1>
        </div>
        <div className="flex gap-2">
          {[7, 14, 30, 90].map((n) => (
            <button key={n} onClick={() => setDays(n)} data-testid={`analytics-range-${n}`}
              className={`rounded-full px-4 py-1.5 text-xs border transition-colors ${days === n ? "border-emerald-500 bg-emerald-500/15 text-white" : "border-white/15 text-white/60 hover:text-white"}`}>
              {n}d
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Leads" value={d.totals.leads} accent="#10b981" />
        <Stat label="Blogs published" value={d.totals.published_blogs} sub={`${d.totals.blogs} total`} accent="#3b82f6" />
        <Stat label="Subscribers" value={d.totals.subscribers} accent="#f59e0b" />
        <Stat label="Won deals" value={d.funnel.won} sub={`Funnel: ${d.funnel.qualified} qualified`} accent="#a78bfa" />
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <Panel title="Leads over time">
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={d.leads_series}>
              <CartesianGrid stroke={GRID} strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#71717a" tick={{ fontSize: 10 }} tickFormatter={(s) => s.slice(5)} />
              <YAxis stroke="#71717a" tick={{ fontSize: 10 }} allowDecimals={false} />
              <Tooltip {...TT} />
              <Line type="monotone" dataKey="count" stroke="#10b981" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Panel>

        <Panel title="Content velocity (published)">
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={d.blogs_series}>
              <CartesianGrid stroke={GRID} strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#71717a" tick={{ fontSize: 10 }} tickFormatter={(s) => s.slice(5)} />
              <YAxis stroke="#71717a" tick={{ fontSize: 10 }} allowDecimals={false} />
              <Tooltip {...TT} />
              <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Panel>

        <Panel title="Lead status breakdown">
          {d.lead_status.length === 0 ? <Empty /> : (
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie data={d.lead_status} dataKey="value" nameKey="name" outerRadius={90} stroke="#050505">
                  {d.lead_status.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip {...TT} />
                <Legend wrapperStyle={{ fontSize: 11, color: "#a1a1aa" }} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </Panel>

        <Panel title="Services requested">
          {d.lead_services.length === 0 ? <Empty /> : (
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={d.lead_services}>
                <CartesianGrid stroke={GRID} strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#71717a" tick={{ fontSize: 10 }} />
                <YAxis stroke="#71717a" tick={{ fontSize: 10 }} allowDecimals={false} />
                <Tooltip {...TT} />
                <Bar dataKey="value" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </Panel>

        <Panel title="Budget distribution">
          {d.lead_budget.length === 0 ? <Empty /> : (
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={d.lead_budget}>
                <CartesianGrid stroke={GRID} strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#71717a" tick={{ fontSize: 10 }} />
                <YAxis stroke="#71717a" tick={{ fontSize: 10 }} allowDecimals={false} />
                <Tooltip {...TT} />
                <Bar dataKey="value" fill="#f59e0b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </Panel>

        <Panel title="AI provider usage (blogs)">
          {d.ai_providers.length === 0 ? <Empty /> : (
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie data={d.ai_providers} dataKey="value" nameKey="name" outerRadius={90} stroke="#050505">
                  {d.ai_providers.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip {...TT} />
                <Legend wrapperStyle={{ fontSize: 11, color: "#a1a1aa" }} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </Panel>

        <Panel title="Top blog categories" full>
          {d.blog_categories.length === 0 ? <Empty /> : (
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={d.blog_categories} layout="vertical">
                <CartesianGrid stroke={GRID} strokeDasharray="3 3" />
                <XAxis type="number" stroke="#71717a" tick={{ fontSize: 10 }} allowDecimals={false} />
                <YAxis type="category" dataKey="name" stroke="#71717a" tick={{ fontSize: 10 }} width={120} />
                <Tooltip {...TT} />
                <Bar dataKey="value" fill="#3b82f6" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </Panel>
      </div>
    </div>
  );
}

function Stat({ label, value, sub, accent }) {
  return (
    <div className="card-surface p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50">{label}</p>
      <p className="mt-3 font-display text-3xl font-bold" style={{ color: accent }}>{value}</p>
      {sub && <p className="mt-1 text-xs text-white/50">{sub}</p>}
    </div>
  );
}
function Panel({ title, children, full }) {
  return (
    <div className={`card-surface p-6 ${full ? "lg:col-span-2" : ""}`}>
      <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5">{title}</p>
      {children}
    </div>
  );
}
function Empty() {
  return <div className="h-[240px] grid place-items-center text-white/40 text-sm">No data yet</div>;
}
