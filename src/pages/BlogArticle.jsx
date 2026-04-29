import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { api } from "@/lib/api";

// Tiny markdown → HTML (headings, bold, italic, links, lists, paragraphs).
function renderMarkdown(md = "") {
  const esc = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  const lines = md.split(/\r?\n/);
  let out = "";
  let inUl = false;
  const flushUl = () => { if (inUl) { out += "</ul>"; inUl = false; } };
  for (let line of lines) {
    if (/^### (.*)/.test(line)) { flushUl(); out += `<h3>${inline(esc(line.replace(/^### /, "")))}</h3>`; continue; }
    if (/^## (.*)/.test(line))  { flushUl(); out += `<h2>${inline(esc(line.replace(/^## /, "")))}</h2>`; continue; }
    if (/^# (.*)/.test(line))   { flushUl(); out += `<h2>${inline(esc(line.replace(/^# /, "")))}</h2>`; continue; }
    if (/^[-*] (.*)/.test(line)) {
      if (!inUl) { out += "<ul>"; inUl = true; }
      out += `<li>${inline(esc(line.replace(/^[-*] /, "")))}</li>`;
      continue;
    }
    flushUl();
    if (line.trim() === "") { out += ""; continue; }
    out += `<p>${inline(esc(line))}</p>`;
  }
  flushUl();
  return out;

  function inline(s) {
    return s
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  }
}

export default function BlogArticle() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(`/blogs/by-slug/${slug}`)
      .then((r) => setPost(r.data))
      .catch(() => setError("Not found"));
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.seo_title || post.title} — Venusian`;
      const desc = post.seo_description || post.excerpt || "";
      let m = document.querySelector('meta[name="description"]');
      if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
      m.content = desc;
    }
    return () => { document.title = "Venusian — Engineering the AI-first decade"; };
  }, [post]);

  if (error) return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center">
        <h1 className="font-display text-3xl">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-emerald-400">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
      </div>
    </div>
  );
  if (!post) return <div className="py-32 text-center text-white/60">Loading…</div>;

  return (
    <div data-testid="blog-article-page">
      <section className="relative py-20 lg:py-28 border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-radial-emerald opacity-60" />
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <p className="eyebrow mt-12 block">{post.category || "Insights"}</p>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{post.title}</h1>
          <p className="mt-6 text-lg text-white/60">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/50">
            <span>{post.author}</span>
            <span>·</span>
            <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
            {post.ai_provider && (<><span>·</span><span className="text-emerald-400">Co-written with {post.ai_provider}</span></>)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          {post.cover_image && (
            <img src={post.cover_image} alt={post.title} className="mb-12 rounded-2xl border border-white/10" />
          )}
          <article className="prose-venusian" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
          {post.tags?.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">#{t}</span>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
