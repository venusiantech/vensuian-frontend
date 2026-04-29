import { useEffect, useState } from "react";
import { Trash2, Mail } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

const STATUSES = ["new", "contacted", "qualified", "won", "lost"];

export default function AdminLeads() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  const load = () => api.get(`/leads${filter ? `?status=${filter}` : ""}`).then((r) => setItems(r.data.items));
  useEffect(() => { load(); }, [filter]); // eslint-disable-line

  const updateStatus = async (id, status) => {
    await api.put(`/leads/${id}`, { status, notes: "" });
    toast.success("Updated");
    load();
  };
  const del = async (id) => {
    if (!window.confirm("Delete lead?")) return;
    await api.delete(`/leads/${id}`);
    toast.success("Deleted");
    load();
  };

  return (
    <div data-testid="admin-leads-page" className="space-y-8">
      <div>
        <p className="eyebrow">CRM</p>
        <h1 className="mt-3 font-display text-4xl font-bold">Leads</h1>
      </div>

      <div className="flex gap-2 flex-wrap">
        {["", ...STATUSES].map((s) => (
          <button key={s || "all"} onClick={() => setFilter(s)}
            className={`rounded-full px-4 py-1.5 text-xs border transition-colors ${
              filter === s ? "border-emerald-500 bg-emerald-500/15 text-white" : "border-white/15 text-white/60 hover:text-white"
            }`}>
            {s || "All"}
          </button>
        ))}
      </div>

      <div className="card-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase tracking-[0.18em] text-white/50 border-b border-white/10">
            <tr>
              <th className="text-left px-5 py-4">Name</th>
              <th className="text-left px-5 py-4">Email / Company</th>
              <th className="text-left px-5 py-4">Services / Budget</th>
              <th className="text-left px-5 py-4">Status</th>
              <th className="text-left px-5 py-4">Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {items.length === 0 ? (
              <tr><td colSpan={6} className="px-5 py-8 text-white/50">No leads.</td></tr>
            ) : items.map((l) => (
              <tr key={l.id} className="align-top">
                <td className="px-5 py-4 text-white">{l.name}</td>
                <td className="px-5 py-4 text-white/70">
                  <a href={`mailto:${l.email}`} className="text-emerald-400 hover:underline inline-flex items-center gap-1">
                    <Mail className="h-3 w-3" /> {l.email}
                  </a>
                  <div className="text-xs text-white/50">{l.company || "—"}</div>
                </td>
                <td className="px-5 py-4 text-white/70">
                  <div className="text-xs">{(l.services || []).join(", ") || "—"}</div>
                  <div className="text-xs text-white/50">{l.budget || "—"}</div>
                </td>
                <td className="px-5 py-4">
                  <select value={l.status} onChange={(e) => updateStatus(l.id, e.target.value)}
                    data-testid={`lead-status-${l.id}`}
                    className="rounded-md bg-white/[0.03] border border-white/10 px-2 py-1 text-xs">
                    {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
                <td className="px-5 py-4 text-white/60">{(l.created_at || "").slice(0, 10)}</td>
                <td className="px-5 py-4 text-right">
                  <button onClick={() => del(l.id)} className="text-white/60 hover:text-red-400"><Trash2 className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
