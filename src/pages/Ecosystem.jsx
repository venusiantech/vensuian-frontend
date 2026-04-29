import { useEffect, useState } from "react";
import { ArrowUpRight, Network } from "lucide-react";
import { api } from "@/lib/api";
import { BRAND } from "@/lib/brand";
import useDocumentTitle from "@/lib/useDocumentTitle";

export default function Ecosystem() {
  useDocumentTitle("Ecosystem", "One operating layer powering Fastofy, Qwipto, and TrafficBoxes.");
  const [items, setItems] = useState([]);
  useEffect(() => { api.get("/products").then((r) => setItems(r.data.items)); }, []);

  return (
    <div data-testid="ecosystem-page">
      <section className="relative py-20 lg:py-28 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="absolute inset-0 -z-10 bg-radial-emerald" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-emerald-300">
            <Network className="h-3.5 w-3.5" /> Ecosystem
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            One operating layer. Three category-defining products.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Fastofy, Qwipto, and TrafficBoxes share infrastructure, identity, and observability — engineered by Venusian.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-5">
            {items.map((p) => (
              <a
                key={p.slug}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="card-surface p-8 group"
                data-testid={`eco-card-${p.slug}`}
              >
                <div className="h-2 w-16 rounded-full" style={{ background: `linear-gradient(90deg, ${p.logo_color}, transparent)` }} />
                <h2 className="mt-6 font-display text-3xl font-bold">{p.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.2em]" style={{ color: p.logo_color }}>{p.tagline}</p>
                <p className="mt-4 text-sm text-white/60">{p.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-emerald-400">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
            <img src={BRAND.network} alt="ecosystem" className="rounded-2xl border border-white/10" />
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
                A unified narrative across AI, payments, and traffic.
              </h2>
              <p className="mt-6 text-white/70">
                Customers of one Venusian product unlock unique advantages across the others — shared identity, shared compliance, shared engineering velocity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
