import { useEffect, useState } from "react";
import { Globe, MapPin } from "lucide-react";
import { api } from "@/lib/api";
import { BRAND } from "@/lib/brand";
import useDocumentTitle from "@/lib/useDocumentTitle";

export default function About() {
  useDocumentTitle("About", "A premium, AI-first engineering company headquartered in the UAE.");
  const [locations, setLocations] = useState([]);
  useEffect(() => { api.get("/locations").then((r) => setLocations(r.data.items)); }, []);

  return (
    <div data-testid="about-page">
      <section className="relative py-20 lg:py-28 border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-radial-emerald opacity-60" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="eyebrow">About Venusian</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            A premium, AI-first engineering company headquartered in the UAE.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            We partner with founders and enterprises building category-defining products — across AI, fintech, adtech, mobile, and web.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <img src={BRAND.office} alt="Venusian global offices" className="rounded-2xl border border-white/10" />
          <div>
            <p className="eyebrow"><Globe className="inline h-3.5 w-3.5 mr-1" /> Global presence</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">
              UAE · EU · US — engineering teams in three time zones.
            </h2>
            <div className="mt-10 space-y-5">
              {locations.map((l) => (
                <div key={l.city} className="flex items-start gap-4 pb-5 border-b border-white/10">
                  <MapPin className="h-5 w-5 mt-1 text-emerald-400" />
                  <div>
                    <p className="font-display text-xl font-semibold">{l.city} <span className="ml-2 text-xs uppercase tracking-[0.22em] text-emerald-400">{l.region}</span></p>
                    <p className="text-sm text-white/60">{l.role} — {l.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 lg:px-12 grid sm:grid-cols-3 gap-5">
          {[
            { k: "Premium", v: "Quality is the brand" },
            { k: "AI-first", v: "Intelligence in every layer" },
            { k: "Global", v: "Built for cross-border scale" },
          ].map((p) => (
            <div key={p.k} className="card-surface p-7">
              <p className="font-display text-3xl font-bold">{p.k}</p>
              <p className="mt-2 text-sm text-white/60">{p.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
