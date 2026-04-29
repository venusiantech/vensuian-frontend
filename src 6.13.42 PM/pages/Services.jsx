import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, Sparkles, Globe, Smartphone, Gauge, Layers, TrendingUp, Check
} from "lucide-react";
import { api } from "@/lib/api";
import useDocumentTitle from "@/lib/useDocumentTitle";

const ICONS = { Sparkles, Globe, Smartphone, Gauge, Layers, TrendingUp };

export default function Services() {
  useDocumentTitle("Services", "Specialist teams for AI automation, web, mobile, and performance engineering.");
  const [items, setItems] = useState([]);
  useEffect(() => { api.get("/services").then((r) => setItems(r.data.items)); }, []);

  return (
    <div data-testid="services-page">
      <section className="relative py-20 lg:py-28 border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-radial-emerald opacity-60" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Specialist teams for the entire product surface.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Engage Venusian for outcomes — not headcount. Each service is delivered by a senior pod with shared playbooks across AI, web, mobile, and infra.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-5">
          {items.map((s) => {
            const Icon = ICONS[s.icon] || Sparkles;
            return (
              <div key={s.slug} className="card-surface p-8" data-testid={`services-item-${s.slug}`}>
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 grid place-items-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <Icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                    <p className="mt-2 text-white/60">{s.summary}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-white/70">
                          <Check className="h-3.5 w-3.5 text-emerald-400" /> {d}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300">
                      Discuss this service <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
