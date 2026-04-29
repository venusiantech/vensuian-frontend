import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Tag, GitBranch } from "lucide-react";
import { api } from "@/lib/api";

export default function AdminSeo() {
  const [tab, setTab] = useState("clusters");
  const [clusters, setClusters] = useState(null);
  const [links, setLinks] = useState(null);

  useEffect(() => { api.get("/admin/seo/clusters").then((r) => setClusters(r.data)); }, []);
  useEffect(() => { if (tab === "links" && !links) api.get("/admin/seo/internal-links").then((r) => setLinks(r.data)); }, [tab, links]);

  return (
    <div data-testid="admin-seo-page" className="space-y-8">
      <div>
        <p className="eyebrow"><Search className="inline h-3.5 w-3.5 mr-1" /> SEO</p>
        <h1 className="mt-3 font-display text-4xl font-bold">SEO analyzer</h1>
        <p className="mt-2 text-sm text-white/60">Keyword clusters and internal-linking suggestions across your published content.</p>
      </div>

      <div className="flex gap-2">
        {[["clusters", "Keyword clusters", Tag], ["links", "Internal links", GitBranch]].map(([k, label, Icon]) => (
          <button key={k} onClick={() => setTab(k)} data-testid={`seo-tab-${k}`}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs border transition-colors ${tab === k ? "border-emerald-500 bg-emerald-500/15 text-white" : "border-white/15 text-white/60 hover:text-white"}`}>
            <Icon className="h-3.5 w-3.5" /> {label}
          </button>
        ))}
      </div>

      {tab === "clusters" && (
        clusters ? (
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="card-surface p-6">
              <h2 className="font-display text-lg font-semibold mb-4">Top tags</h2>
              <div className="flex flex-wrap gap-1.5">
                {clusters.top_tags.length === 0 ? <p className="text-white/50 text-sm">No tags yet.</p> : clusters.top_tags.map((t) => (
                  <span key={t.name} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs">
                    {t.name} <span className="text-emerald-400">×{t.count}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="card-surface p-6">
              <h2 className="font-display text-lg font-semibold mb-4">Top keywords (titles + excerpts)</h2>
              <div className="flex flex-wrap gap-1.5">
                {clusters.top_keywords.slice(0, 30).map((k) => (
                  <span key={k.name} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
                    {k.name} <span className="text-emerald-400">{k.count}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="card-surface p-6 lg:col-span-2">
              <h2 className="font-display text-lg font-semibold mb-4">Topic clusters</h2>
              {clusters.clusters.length === 0 ? <p className="text-white/50 text-sm">Tag your blogs to start building clusters.</p> : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {clusters.clusters.map((c) => (
                    <div key={c.key} className="rounded-xl border border-white/10 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">{c.key}</p>
                      <ul className="mt-3 space-y-2">
                        {c.blogs.map((b) => (
                          <li key={b.id}>
                            <Link to={`/admin/blogs/${b.id}`} className="text-sm text-white/80 hover:text-white line-clamp-2">{b.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : <p className="text-white/60">Loading…</p>
      )}

      {tab === "links" && (
        links ? (
          <div className="space-y-3">
            {links.items.length === 0 ? <p className="text-white/50 text-sm">Add a few published blogs to see related-link suggestions.</p> :
              links.items.map((b) => (
                <div key={b.id} className="card-surface p-5" data-testid={`seo-link-row-${b.id}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <Link to={`/admin/blogs/${b.id}`} className="font-display text-lg font-semibold hover:text-emerald-400">{b.title}</Link>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {b.tags.map((t) => <span key={t} className="text-[10px] uppercase tracking-[0.18em] text-white/50">#{t}</span>)}
                      </div>
                    </div>
                  </div>
                  {b.related.length === 0 ? <p className="mt-3 text-xs text-white/40">No related posts yet.</p> : (
                    <ul className="mt-4 space-y-1.5">
                      {b.related.map((r) => (
                        <li key={r.id} className="text-sm flex items-center justify-between gap-3">
                          <Link to={`/admin/blogs/${r.id}`} className="text-white/80 hover:text-white truncate">{r.title}</Link>
                          <span className="text-[11px] text-emerald-400 shrink-0">score {r.score} · {r.shared_tags.join(", ") || "—"}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            }
          </div>
        ) : <p className="text-white/60">Loading…</p>
      )}
    </div>
  );
}
