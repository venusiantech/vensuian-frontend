import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

export default function AdminNewsletter() {
  const [items, setItems] = useState([]);
  const load = () => api.get("/newsletter").then((r) => setItems(r.data.items));
  useEffect(() => { load(); }, []);
  const del = async (id) => { if (!window.confirm("Remove?")) return; await api.delete(`/newsletter/${id}`); toast.success("Removed"); load(); };

  return (
    <div data-testid="admin-newsletter-page" className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow">Newsletter</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Subscribers</h1>
          <p className="mt-2 text-sm text-white/60">{items.length} active subscriber{items.length === 1 ? "" : "s"}</p>
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase tracking-[0.18em] text-white/50 border-b border-white/10">
            <tr><th className="text-left px-5 py-4">Email</th><th className="text-left px-5 py-4">Consent</th><th className="text-left px-5 py-4">Joined</th><th></th></tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {items.length === 0 ? (
              <tr><td colSpan={4} className="px-5 py-8 text-white/50">No subscribers yet.</td></tr>
            ) : items.map((s) => (
              <tr key={s.id}>
                <td className="px-5 py-4 text-white">{s.email}</td>
                <td className="px-5 py-4 text-white/60">{s.consent ? "Yes" : "No"}</td>
                <td className="px-5 py-4 text-white/60">{(s.created_at || "").slice(0, 10)}</td>
                <td className="px-5 py-4 text-right"><button onClick={() => del(s.id)} className="text-white/60 hover:text-red-400"><Trash2 className="h-4 w-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
