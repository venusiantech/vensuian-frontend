import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import useDocumentTitle from "@/lib/useDocumentTitle";

export default function CaseStudies() {
  useDocumentTitle("Case Studies", "Real outcomes Venusian delivered for global clients.");
  const [items, setItems] = useState([]);
  useEffect(() => { api.get("/case-studies").then((r) => setItems(r.data.items)); }, []);

  return (
    <div data-testid="cases-page">
      <section className="relative py-20 lg:py-28 border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-radial-emerald opacity-60" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="eyebrow">Case studies</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Real outcomes. Receipts attached.
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid md:grid-cols-2 gap-5">
          {items.map((c) => (
            <div key={c.id} className="card-surface p-8" data-testid={`case-${c.slug}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.22em] text-emerald-400">{c.industry}</span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {c.metric}
                </span>
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold">{c.title}</h2>
              <p className="mt-3 text-white/60">{c.summary}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {c.tags?.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/60">{t}</span>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/50">Client: {c.client}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
