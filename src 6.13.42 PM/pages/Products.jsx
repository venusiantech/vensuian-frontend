import { useEffect, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { api } from "@/lib/api";
import useDocumentTitle from "@/lib/useDocumentTitle";

export default function Products() {
  useDocumentTitle("Products", "The Venusian product portfolio — Fastofy, Qwipto, TrafficBoxes.");
  const [items, setItems] = useState([]);
  useEffect(() => { api.get("/products").then((r) => setItems(r.data.items)); }, []);

  return (
    <div data-testid="products-page">
      <section className="relative py-20 lg:py-28 border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-radial-emerald opacity-60" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="eyebrow">Products</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            The Venusian product portfolio.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Three flagship platforms — AI automation, payments, and traffic — built on a shared engineering core.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-6">
          {items.map((p, idx) => (
            <div
              key={p.slug}
              className="card-surface p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-center"
              data-testid={`product-row-${p.slug}`}
            >
              <div className="lg:col-span-5">
                <div className="h-2 w-20 rounded-full mb-6" style={{ background: `linear-gradient(90deg, ${p.logo_color}, transparent)` }} />
                <h2 className="font-display text-4xl lg:text-5xl font-bold">{p.name}</h2>
                <p className="mt-2 text-xs uppercase tracking-[0.22em]" style={{ color: p.logo_color }}>
                  {p.tagline}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/50">{p.category}</p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg text-white/70">{p.description}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="h-4 w-4 text-emerald-400" /> {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 btn-primary"
                  data-testid={`product-visit-${p.slug}`}
                >
                  Visit {p.name} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
