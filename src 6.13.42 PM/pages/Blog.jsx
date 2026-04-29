import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { api } from "@/lib/api";
import useDocumentTitle from "@/lib/useDocumentTitle";

export default function Blog() {
  useDocumentTitle("Blog", "Field notes from the AI-first decade — by Venusian.");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/blogs?limit=50")
      .then((r) => setItems(r.data.items))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div data-testid="blog-page">
      <section className="relative py-20 lg:py-28 border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-radial-emerald opacity-60" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="eyebrow">Blog · Field notes</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Writing from the AI-first decade.
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {loading ? (
            <p className="text-white/60">Loading…</p>
          ) : items.length === 0 ? (
            <p className="text-white/60">No articles yet. Stay tuned.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((b) => (
                <Link key={b.id} to={`/blog/${b.slug}`} className="card-surface p-7 group" data-testid={`blog-card-${b.slug}`}>
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">{b.category || "Insights"}</span>
                  <h2 className="mt-4 font-display text-xl font-semibold leading-snug group-hover:text-emerald-100">{b.title}</h2>
                  <p className="mt-3 text-sm text-white/60 line-clamp-3">{b.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-xs text-white/50">
                    <span>{b.author}</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:text-emerald-400 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
