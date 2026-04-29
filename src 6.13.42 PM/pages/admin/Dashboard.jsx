import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Users, Mail, Package, ArrowUpRight, Plus, Activity, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { api } from "@/lib/api";

const CHART_GRID = "rgba(255,255,255,0.06)";

export default function AdminDashboard() {
  const [s, setS] = useState(null);
  const [a, setA] = useState(null);
  useEffect(() => {
    api.get("/admin/stats").then((r) => setS(r.data));
    api.get("/admin/analytics?days=14").then((r) => setA(r.data));
  }, []);

  if (!s) return <div className="text-white/60">Loading…</div>;

  const cards = [
    { label: "Published blogs", value: s.blogs.published, sub: `${s.blogs.drafts} drafts`, icon: FileText, to: "/admin/blogs" },
    { label: "New leads", value: s.leads.new, sub: `${s.leads.total} total`, icon: Users, to: "/admin/leads" },
    { label: "Subscribers", value: s.subscribers, sub: "Newsletter list", icon: Mail, to: "/admin/newsletter" },
    { label: "Products", value: s.products, sub: "Ecosystem live", icon: Package, to: "/admin/products" },
  ];

  return (
    <div data-testid="admin-dashboard" className="space-y-10">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="eyebrow">Overview</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Dashboard</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/admin/health" className="btn-ghost text-sm" data-testid="dashboard-health-link">
            <Activity className="h-4 w-4" /> Provider health
          </Link>
          <Link to="/admin/analytics" className="btn-ghost text-sm" data-testid="dashboard-analytics-link">
            <BarChart3 className="h-4 w-4" /> Full analytics
          </Link>
          <Link to="/admin/blogs/new" className="btn-primary text-sm" data-testid="dashboard-new-blog">
            <Plus className="h-4 w-4" /> New blog
          </Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c) => (
          <Link key={c.label} to={c.to} className="card-surface p-6 group" data-testid={`stat-${c.label.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">{c.label}</span>
              <c.icon className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="mt-4 font-display text-4xl font-bold">{c.value}</div>
            <div className="mt-1 text-sm text-white/50">{c.sub}</div>
          </Link>
        ))}
      </div>

      {a && (
        <div className="grid lg:grid-cols-2 gap-5">
          <Sparkline title="Leads — last 14 days" data={a.leads_series} color="#10b981" />
          <Sparkline title="Blogs published — last 14 days" data={a.blogs_series} color="#3b82f6" />
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="card-surface p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold">Recent leads</h2>
            <Link to="/admin/leads" className="text-xs text-emerald-400">View all</Link>
          </div>
          <div className="mt-4 divide-y divide-white/5">
            {s.recent_leads.length === 0 ? (
              <p className="text-sm text-white/50 py-6">No leads yet.</p>
            ) : s.recent_leads.map((l) => (
              <div key={l.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm text-white">{l.name}</p>
                  <p className="text-xs text-white/50">{l.email} · {l.company || "—"}</p>
                </div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-400">{l.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold">Recent blogs</h2>
            <Link to="/admin/blogs" className="text-xs text-emerald-400">View all</Link>
          </div>
          <div className="mt-4 divide-y divide-white/5">
            {s.recent_blogs.length === 0 ? (
              <p className="text-sm text-white/50 py-6">No blogs yet.</p>
            ) : s.recent_blogs.map((b) => (
              <div key={b.id} className="flex items-center justify-between py-3 gap-3">
                <div className="min-w-0">
                  <p className="text-sm text-white truncate">{b.title}</p>
                  <p className="text-xs text-white/50">{b.category} · {b.status}</p>
                </div>
                <Link to={`/admin/blogs/${b.id}`} className="text-xs text-emerald-400 shrink-0">Edit</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkline({ title, data, color }) {
  return (
    <div className="card-surface p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">{title}</p>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke={CHART_GRID} strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#71717a" tick={{ fontSize: 10 }} tickFormatter={(d) => d.slice(5)} />
            <YAxis stroke="#71717a" tick={{ fontSize: 10 }} allowDecimals={false} />
            <Tooltip contentStyle={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }} />
            <Line type="monotone" dataKey="count" stroke={color} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
