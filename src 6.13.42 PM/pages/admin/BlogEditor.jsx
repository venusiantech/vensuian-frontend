import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Save, Trash2, Upload, Sparkles } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

const BLANK = {
  title: "", slug: "", excerpt: "", content: "", cover_image: "",
  tags: [], category: "Insights", author: "Venusian Editorial",
  status: "draft", seo_title: "", seo_description: "", scheduled_at: null,
};

export default function BlogEditor() {
  const { id } = useParams();
  const isNew = !id || id === "new";
  const nav = useNavigate();
  const [data, setData] = useState(BLANK);
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [genCover, setGenCover] = useState(false);
  const fileRef = useRef(null);

  useEffect(() => {
    if (!isNew) {
      api.get(`/blogs/admin/${id}`).then((r) => {
        setData({ ...BLANK, ...r.data, tags: r.data.tags || [] });
      }).finally(() => setLoading(false));
    }
  }, [id, isNew]);

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const save = async () => {
    if (!data.title) { toast.error("Title is required"); return; }
    setSaving(true);
    try {
      const body = { ...data };
      if (isNew) {
        const r = await api.post("/blogs", body);
        toast.success("Blog created");
        nav(`/admin/blogs/${r.data.id}`);
      } else {
        await api.put(`/blogs/${id}`, body);
        toast.success("Saved");
      }
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!window.confirm("Delete this blog?")) return;
    await api.delete(`/blogs/${id}`);
    toast.success("Deleted");
    nav("/admin/blogs");
  };

  const addTag = () => {
    const t = tagInput.trim().toLowerCase();
    if (!t) return;
    if (!data.tags.includes(t)) set("tags", [...data.tags, t]);
    setTagInput("");
  };

  const uploadCover = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const r = await api.post("/upload", fd, { headers: { "Content-Type": "multipart/form-data" } });
      set("cover_image", r.data.url);
      toast.success("Cover uploaded");
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Upload failed");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const aiCover = async () => {
    if (!data.title) { toast.error("Add a title first"); return; }
    setGenCover(true);
    const t = toast.loading("Generating cover with Nano Banana…");
    try {
      const r = await api.post("/blogs/cover-preview", { title: data.title, category: data.category });
      set("cover_image", r.data.cover_image);
      toast.success("Cover ready", { id: t });
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Cover gen failed", { id: t });
    } finally { setGenCover(false); }
  };

  if (loading) return <div className="text-white/60">Loading…</div>;

  return (
    <div data-testid="admin-blog-editor" className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <Link to="/admin/blogs" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to blogs
        </Link>
        <div className="flex gap-2">
          {!isNew && (
            <button onClick={remove} className="btn-ghost text-sm text-red-300 hover:text-red-400" data-testid="blog-editor-delete">
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          )}
          <button onClick={save} disabled={saving} className="btn-primary text-sm disabled:opacity-60" data-testid="blog-editor-save">
            <Save className="h-4 w-4" /> {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card-surface p-6 space-y-4">
            <Field label="Title">
              <input data-testid="editor-title" value={data.title} onChange={(e) => set("title", e.target.value)} className="ven-input" />
            </Field>
            <Field label="Slug (auto if empty)">
              <input data-testid="editor-slug" value={data.slug} onChange={(e) => set("slug", e.target.value)} className="ven-input" />
            </Field>
            <Field label="Excerpt">
              <textarea data-testid="editor-excerpt" rows={3} value={data.excerpt} onChange={(e) => set("excerpt", e.target.value)} className="ven-input resize-none" />
            </Field>
            <Field label="Cover image">
              <div className="flex flex-wrap gap-2 mb-2">
                <label className="btn-ghost text-xs cursor-pointer" data-testid="cover-upload-label">
                  <Upload className="h-3.5 w-3.5" /> {uploading ? "Uploading…" : "Upload"}
                  <input ref={fileRef} type="file" accept="image/*" onChange={uploadCover} className="hidden" data-testid="cover-upload-input" />
                </label>
                <button type="button" onClick={aiCover} disabled={genCover} className="btn-ghost text-xs disabled:opacity-60" data-testid="cover-ai-btn">
                  <Sparkles className="h-3.5 w-3.5" /> {genCover ? "Generating…" : "AI generate (Nano Banana)"}
                </button>
              </div>
              <input data-testid="editor-cover" value={data.cover_image} onChange={(e) => set("cover_image", e.target.value)} className="ven-input" placeholder="https:// or upload above" />
              {data.cover_image && <img src={data.cover_image} alt="" className="mt-3 rounded-lg max-h-48" />}
            </Field>
            <Field label="Body (Markdown)">
              <textarea data-testid="editor-content" rows={20} value={data.content} onChange={(e) => set("content", e.target.value)} className="ven-input font-mono text-xs leading-6" />
            </Field>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-surface p-6 space-y-4">
            <Field label="Status">
              <select data-testid="editor-status" value={data.status} onChange={(e) => set("status", e.target.value)} className="ven-input">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </Field>
            {data.status === "scheduled" && (
              <Field label="Schedule at">
                <input data-testid="editor-schedule" type="datetime-local" value={data.scheduled_at || ""} onChange={(e) => set("scheduled_at", e.target.value)} className="ven-input" />
              </Field>
            )}
            <Field label="Category">
              <input data-testid="editor-category" value={data.category} onChange={(e) => set("category", e.target.value)} className="ven-input" />
            </Field>
            <Field label="Author">
              <input data-testid="editor-author" value={data.author} onChange={(e) => set("author", e.target.value)} className="ven-input" />
            </Field>
          </div>

          <div className="card-surface p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">Tags</p>
            <div className="flex gap-2">
              <input
                data-testid="editor-tag-input"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }}
                placeholder="add tag, press Enter"
                className="ven-input flex-1"
              />
              <button onClick={addTag} className="btn-ghost text-xs">Add</button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {data.tags.map((t) => (
                <button key={t} onClick={() => set("tags", data.tags.filter((x) => x !== t))}
                  className="rounded-full border border-white/10 hover:border-red-500/40 px-3 py-1 text-[11px] text-white/70">
                  #{t} ✕
                </button>
              ))}
            </div>
          </div>

          <div className="card-surface p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">SEO</p>
            <Field label="SEO title">
              <input data-testid="editor-seo-title" value={data.seo_title} onChange={(e) => set("seo_title", e.target.value)} className="ven-input" />
            </Field>
            <Field label="SEO description">
              <textarea data-testid="editor-seo-desc" rows={3} value={data.seo_description} onChange={(e) => set("seo_description", e.target.value)} className="ven-input resize-none" />
            </Field>
          </div>
        </div>
      </div>

      <style>{`
        .ven-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 10px 14px;
          color: #fff;
          font-size: 14px;
          outline: none;
        }
        .ven-input:focus { border-color: rgba(16,185,129,0.55); box-shadow: 0 0 0 3px rgba(16,185,129,0.12); }
      `}</style>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-2">{label}</span>
      {children}
    </label>
  );
}
