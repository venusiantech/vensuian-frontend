import { useEffect, useState } from "react";
import { Plus, Trash2, Pencil, Save, X } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

const BLANK = { slug: "", name: "", tagline: "", description: "", url: "", category: "", highlights: [], logo_color: "#10b981" };

export default function AdminProducts() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [highlightInput, setHighlightInput] = useState("");

  const load = () => api.get("/products").then((r) => setItems(r.data.items));
  useEffect(() => { load(); }, []);

  const set = (k, v) => setEditing((e) => ({ ...e, [k]: v }));

  const save = async () => {
    try {
      if (editing.id) await api.put(`/products/${editing.id}`, editing);
      else await api.post("/products", editing);
      toast.success("Saved");
      setEditing(null);
      load();
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Save failed");
    }
  };

  const del = async (id) => {
    if (!window.confirm("Delete?")) return;
    await api.delete(`/products/${id}`);
    toast.success("Deleted");
    load();
  };

  return (
    <div data-testid="admin-products-page" className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow">Ecosystem</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Products</h1>
        </div>
        <button onClick={() => setEditing({ ...BLANK })} className="btn-primary text-sm" data-testid="products-new-btn">
          <Plus className="h-4 w-4" /> New product
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((p) => (
          <div key={p.id} className="card-surface p-6" data-testid={`admin-product-${p.slug}`}>
            <div className="flex items-start justify-between">
              <div>
                <div className="h-1.5 w-12 rounded-full mb-3" style={{ background: p.logo_color }} />
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="text-xs text-white/50 mt-1">{p.tagline}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setEditing(p)} className="text-white/60 hover:text-white"><Pencil className="h-4 w-4" /></button>
                <button onClick={() => del(p.id)} className="text-white/60 hover:text-red-400"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/60 line-clamp-3">{p.description}</p>
            <p className="mt-4 text-xs text-emerald-400">{p.url}</p>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="w-full max-w-2xl card-surface p-8 my-8 space-y-4" data-testid="product-editor-modal">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold">{editing.id ? "Edit product" : "New product"}</h2>
              <button onClick={() => setEditing(null)} className="text-white/60 hover:text-white"><X className="h-5 w-5" /></button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Inp label="Name" value={editing.name} onChange={(v) => set("name", v)} />
              <Inp label="Slug" value={editing.slug} onChange={(v) => set("slug", v)} />
              <Inp label="Tagline" value={editing.tagline} onChange={(v) => set("tagline", v)} />
              <Inp label="Category" value={editing.category} onChange={(v) => set("category", v)} />
              <Inp label="URL" value={editing.url} onChange={(v) => set("url", v)} />
              <Inp label="Brand color (hex)" value={editing.logo_color} onChange={(v) => set("logo_color", v)} />
            </div>
            <Field label="Description">
              <textarea rows={4} value={editing.description} onChange={(e) => set("description", e.target.value)} className="ven-input resize-none" />
            </Field>
            <Field label="Highlights">
              <div className="flex gap-2">
                <input value={highlightInput} onChange={(e) => setHighlightInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); if (highlightInput.trim()) { set("highlights", [...editing.highlights, highlightInput.trim()]); setHighlightInput(""); } } }}
                  placeholder="press Enter to add" className="ven-input flex-1" />
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {editing.highlights?.map((h) => (
                  <button key={h} onClick={() => set("highlights", editing.highlights.filter((x) => x !== h))}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 hover:border-red-500/40">
                    {h} ✕
                  </button>
                ))}
              </div>
            </Field>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setEditing(null)} className="btn-ghost text-sm">Cancel</button>
              <button onClick={save} className="btn-primary text-sm" data-testid="product-save-btn">
                <Save className="h-4 w-4" /> Save
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .ven-input{width:100%;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:10px 14px;color:#fff;font-size:14px;outline:none}
        .ven-input:focus{border-color:rgba(16,185,129,.55);box-shadow:0 0 0 3px rgba(16,185,129,.12)}
      `}</style>
    </div>
  );
}

function Field({ label, children }) {
  return <label className="block"><span className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-2">{label}</span>{children}</label>;
}
function Inp({ label, value, onChange }) {
  return <Field label={label}><input value={value || ""} onChange={(e) => onChange(e.target.value)} className="ven-input" /></Field>;
}
