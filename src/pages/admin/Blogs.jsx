import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Sparkles } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

export default function AdminBlogs() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiKw, setAiKw] = useState("");
  const [aiTone, setAiTone] = useState("professional");
  const [aiLength, setAiLength] = useState("medium");
  const [aiCover, setAiCover] = useState(true);
  const [generating, setGenerating] = useState(false);

  const load = () => {
    setLoading(true);
    api.get(`/blogs/admin/list${filter ? `?status=${filter}` : ""}`)
      .then((r) => setItems(r.data.items))
      .finally(() => setLoading(false));
  };
  useEffect(load, [filter]); // eslint-disable-line

  const del = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    await api.delete(`/blogs/${id}`);
    toast.success("Deleted");
    load();
  };

  const generate = async (e) => {
    e.preventDefault();
    if (!aiKw.trim()) return;
    setGenerating(true);
    try {
      const { data } = await api.post("/blogs/generate", {
        keyword: aiKw, tone: aiTone, length: aiLength, generate_cover: aiCover,
      });
      toast.success(`Generated draft via ${data.ai_provider}${data.cover_image ? " + cover" : ""}`);
      setAiOpen(false);
      setAiKw("");
      load();
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Generation failed");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div data-testid="admin-blogs-page" className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="eyebrow">Content</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Blogs</h1>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => setAiOpen(true)} className="btn-ghost text-sm" data-testid="blogs-ai-generate-btn">
            <Sparkles className="h-4 w-4" /> AI generate
          </button>
          <Link to="/admin/blogs/new" className="btn-primary text-sm" data-testid="blogs-new-btn">
            <Plus className="h-4 w-4" /> New blog
          </Link>
        </div>
      </div>

      <div className="flex gap-2">
        {["", "draft", "published", "scheduled"].map((s) => (
          <button
            key={s || "all"}
            onClick={() => setFilter(s)}
            data-testid={`blogs-filter-${s || "all"}`}
            className={`rounded-full px-4 py-1.5 text-xs border transition-colors ${
              filter === s ? "border-emerald-500 bg-emerald-500/15 text-white" : "border-white/15 text-white/60 hover:text-white"
            }`}
          >
            {s || "All"}
          </button>
        ))}
      </div>

      <div className="card-surface overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase tracking-[0.18em] text-white/50 border-b border-white/10">
            <tr>
              <th className="text-left px-5 py-4">Title</th>
              <th className="text-left px-5 py-4">Status</th>
              <th className="text-left px-5 py-4">Category</th>
              <th className="text-left px-5 py-4">AI</th>
              <th className="text-left px-5 py-4">Updated</th>
              <th className="text-right px-5 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? (
              <tr><td colSpan={6} className="px-5 py-8 text-white/50">Loading…</td></tr>
            ) : items.length === 0 ? (
              <tr><td colSpan={6} className="px-5 py-8 text-white/50">No blogs yet.</td></tr>
            ) : items.map((b) => (
              <tr key={b.id} className="hover:bg-white/[0.02]">
                <td className="px-5 py-4 max-w-md truncate">
                  <Link to={`/admin/blogs/${b.id}`} className="hover:text-emerald-400">{b.title}</Link>
                </td>
                <td className="px-5 py-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] uppercase tracking-[0.16em] ${
                    b.status === "published" ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30" :
                    b.status === "scheduled" ? "bg-amber-500/15 text-amber-300 border border-amber-500/30" :
                    "bg-white/5 text-white/60 border border-white/10"
                  }`}>{b.status}</span>
                </td>
                <td className="px-5 py-4 text-white/70">{b.category || "—"}</td>
                <td className="px-5 py-4 text-emerald-400 text-xs">{b.ai_provider || "—"}</td>
                <td className="px-5 py-4 text-white/60">{(b.updated_at || "").slice(0, 10)}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 justify-end">
                    <Link to={`/admin/blogs/${b.id}`} className="text-white/60 hover:text-white" data-testid={`blog-edit-${b.id}`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <button onClick={() => del(b.id)} className="text-white/60 hover:text-red-400" data-testid={`blog-del-${b.id}`}>
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {aiOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm p-4">
          <form onSubmit={generate} className="w-full max-w-lg card-surface p-8 space-y-5" data-testid="ai-generate-modal">
            <div>
              <p className="eyebrow"><Sparkles className="inline h-3.5 w-3.5 mr-1" /> AI blog engine</p>
              <h2 className="mt-3 font-display text-2xl font-bold">Generate a draft</h2>
              <p className="mt-2 text-sm text-white/60">Waterfall providers (Claude → OpenAI → Gemini) will write a draft for your review.</p>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-white/50">Keyword / topic</label>
              <input data-testid="ai-keyword-input" required value={aiKw} onChange={(e) => setAiKw(e.target.value)} placeholder="e.g. multi-agent LLM orchestration"
                className="mt-2 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-emerald-500/60" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-white/50">Tone</label>
                <select data-testid="ai-tone-select" value={aiTone} onChange={(e) => setAiTone(e.target.value)}
                  className="mt-2 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none">
                  <option value="professional">Professional</option>
                  <option value="bold">Bold</option>
                  <option value="technical">Technical</option>
                  <option value="conversational">Conversational</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-white/50">Length</label>
                <select data-testid="ai-length-select" value={aiLength} onChange={(e) => setAiLength(e.target.value)}
                  className="mt-2 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none">
                  <option value="short">Short (~500w)</option>
                  <option value="medium">Medium (~900w)</option>
                  <option value="long">Long (~1500w)</option>
                </select>
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm text-white/80 cursor-pointer">
              <input type="checkbox" checked={aiCover} onChange={(e) => setAiCover(e.target.checked)} className="accent-emerald-500" data-testid="ai-cover-toggle" />
              Also generate cover image with Nano Banana
            </label>
            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setAiOpen(false)} className="btn-ghost text-sm">Cancel</button>
              <button type="submit" disabled={generating} className="btn-primary text-sm disabled:opacity-60" data-testid="ai-generate-submit">
                {generating ? "Generating…" : <>Generate <Sparkles className="h-4 w-4" /></>}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
