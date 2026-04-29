import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight, Sparkles, Globe, Smartphone, Gauge, Layers, TrendingUp,
  ShieldCheck, Zap, Cpu, ArrowRight, Check, Newspaper, Bot, Brain,
  Code2, Boxes, Activity, Network, Rss, Database, Lock
} from "lucide-react";
import { BRAND } from "@/lib/brand";
import { api } from "@/lib/api";
import useDocumentTitle from "@/lib/useDocumentTitle";

const ICONS = { Sparkles, Globe, Smartphone, Gauge, Layers, TrendingUp };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TECH_STACK = [
  "Python", "FastAPI", "MongoDB", "React", "Next.js", "TypeScript",
  "Kubernetes", "AWS", "GCP", "Redis", "Postgres", "ClickHouse",
  "LangChain", "Pinecone", "Pulumi", "Terraform", "OpenAI", "Anthropic",
  "Gemini", "Stripe", "Cloudflare", "Vercel",
];

export default function Home() {
  useDocumentTitle(null, "Venusian — premium AI automation, mobile, and web engineering. UAE · EU · US.");
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [cases, setCases] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get("/services").then((r) => setServices(r.data.items));
    api.get("/products").then((r) => setProducts(r.data.items));
    api.get("/case-studies").then((r) => setCases(r.data.items));
    api.get("/blogs?limit=6").then((r) => {
      const all = r.data.items;
      // First 3: editorial. Rest filtered for industry insight tone.
      setBlogs(all.slice(0, 3));
      setNews(all.slice(0, 6));
    });
  }, []);

  return (
    <div data-testid="home-page">
      <Hero />
      <TickerStrip />
      <ServicesSection services={services} />
      <CodeShowcase />
      <EcosystemSection products={products} />
      <CapabilitiesSection />
      <CaseStudiesSection cases={cases} />
      <NewsSection news={news} />
      <WhyVenusianSection />
      <BlogTeaser blogs={blogs} />
      <CtaBand />
    </div>
  );
}

/* ============ HERO ============ */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[92vh] grid items-center">
      {/* Layered backgrounds */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-radial-emerald" />
        <NetworkOrb />
      </motion.div>

      <FloatingCards />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-28 pb-20 lg:pt-36 lg:pb-32 w-full">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            UAE · EU · US — engineering teams
          </span>
        </motion.div>

        <motion.h1
          initial="hidden" animate="show" custom={1} variants={fadeUp}
          className="mt-6 max-w-5xl font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
        >
          Engineering the{" "}
          <span className="text-gradient-emerald">AI-first</span> decade
          <br className="hidden sm:block" />
          for ambitious companies.
        </motion.h1>

        <motion.p
          initial="hidden" animate="show" custom={2} variants={fadeUp}
          className="mt-8 max-w-2xl text-lg sm:text-xl text-white/70"
        >
          Venusian builds the AI automation, mobile, and web platforms that scale globally — from our HQ in the UAE to teams across Europe and the Americas.
        </motion.p>

        <motion.div initial="hidden" animate="show" custom={3} variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" data-testid="hero-cta-start" className="btn-primary">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/ecosystem" data-testid="hero-cta-ecosystem" className="btn-ghost">
            Explore the ecosystem
          </Link>
        </motion.div>

        {/* metric strip with tilted glass */}
        <motion.div initial="hidden" animate="show" custom={4} variants={fadeUp}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 glass">
          {[
            { k: "120+", v: "Products shipped" },
            { k: "3", v: "Continents" },
            { k: "99.98%", v: "Platform uptime" },
            { k: "<50ms", v: "API latency p95" },
          ].map((m) => (
            <div key={m.v} className="bg-[#070707]/80 px-6 py-7 relative group">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">{m.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">{m.v}</div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Animated SVG orb that suggests a network */
function NetworkOrb() {
  const nodes = [
    { x: 78, y: 22 }, { x: 86, y: 36 }, { x: 92, y: 56 }, { x: 84, y: 72 },
    { x: 70, y: 80 }, { x: 60, y: 64 }, { x: 64, y: 44 }, { x: 74, y: 32 },
  ];
  return (
    <svg className="absolute right-[-10%] top-[8%] w-[60%] h-[80%] opacity-50 hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="xMaxYMid meet">
      <defs>
        <radialGradient id="g" cx="78%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#0d6b4f" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="78" cy="50" r="36" fill="url(#g)" />
      <g stroke="rgba(16,185,129,0.35)" strokeWidth="0.18" fill="none">
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => (
            <line key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          ))
        )}
      </g>
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="0.8" fill="#10b981">
            <animate attributeName="r" values="0.8;1.6;0.8" dur={`${2 + (i % 4) * 0.5}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur={`${2 + (i % 4) * 0.5}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

/* Three glassy floating tags */
function FloatingCards() {
  const items = [
    { Icon: Bot, text: "Agent v2.4 deployed", x: "8%", y: "32%", delay: 0 },
    { Icon: Activity, text: "p95 41ms · OK", x: "12%", y: "65%", delay: 0.5 },
    { Icon: Lock, text: "GDPR · ISO 27001", x: "82%", y: "78%", delay: 1.0 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -8, 20] }}
          transition={{ duration: 6, delay: it.delay, repeat: Infinity, ease: "easeInOut" }}
          className="absolute glass rounded-full px-4 py-2 text-xs flex items-center gap-2 text-white/80"
          style={{ left: it.x, top: it.y }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <it.Icon className="h-3.5 w-3.5 text-emerald-400" />
          <span>{it.text}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ============ TECH MARQUEE ============ */
function TickerStrip() {
  return (
    <section data-testid="tech-marquee" className="border-y border-white/10 bg-[#080808] py-7 overflow-hidden">
      <div className="flex items-center gap-6 lg:gap-12 animate-marquee whitespace-nowrap">
        {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
          <span key={i} className="text-sm font-display font-semibold tracking-wide text-white/50 hover:text-white transition-colors">
            <span className="text-emerald-500/60 mr-3">◆</span>{t}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 50s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}

/* ============ SERVICES ============ */
function ServicesSection({ services }) {
  return (
    <section data-testid="home-services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
              Specialist teams for AI, product, and performance.
            </h2>
          </div>
          <Link to="/services" className="btn-ghost text-sm self-start lg:self-end">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] || Sparkles;
            return (
              <motion.div
                key={s.slug}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
                custom={i} variants={fadeUp}
                className="card-surface p-7 group relative overflow-hidden"
                data-testid={`service-card-${s.slug}`}
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between relative">
                  <div className="h-11 w-11 grid place-items-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <Icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold relative">{s.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed relative">{s.summary}</p>
                <div className="mt-6 flex flex-wrap gap-1.5 relative">
                  {s.deliverables?.slice(0, 3).map((d) => (
                    <span key={d} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/60">{d}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ CODE TERMINAL ============ */
function CodeShowcase() {
  const lines = [
    { t: "$ ", c: "venusian deploy --target prod --region uae", k: "" },
    { t: "✓ ", c: "claude-sonnet-4.5 → primary  · gpt-5.1 → fallback", k: "ok" },
    { t: "✓ ", c: "vector store synced  · 1,284,302 docs indexed", k: "ok" },
    { t: "→ ", c: "agent fleet scaling … 12 → 38 instances (auto)", k: "info" },
    { t: "✓ ", c: "p95 latency  41ms · uptime 99.98%", k: "ok" },
    { t: "✓ ", c: "shipped — venusian.tech v3.2.1", k: "ok" },
  ];

  return (
    <section className="relative py-20 lg:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <p className="eyebrow"><Code2 className="inline h-3.5 w-3.5 mr-1" /> Engineering velocity</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Code the future. Ship it Monday.
          </h2>
          <p className="mt-6 text-white/60">
            We don't sell process. We ship product — typed, tested, observable, and deployed across multi-region edges before competitors finish writing the spec.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              { Icon: Brain, t: "Multi-LLM orchestration with cost-aware routing" },
              { Icon: Boxes, t: "Modular monorepo · Pulumi infra-as-code" },
              { Icon: Database, t: "Event-sourced data with CDC replication" },
              { Icon: Network, t: "Edge rendering · sub-50ms in 3 continents" },
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                <b.Icon className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" /> {b.t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="relative rounded-2xl border border-white/10 bg-[#070707] p-1 brand-glow overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/40">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-[11px] uppercase tracking-[0.22em] text-white/50">venusian@hq · ~/deploy</span>
              <span className="ml-auto text-[11px] text-emerald-400/80 inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> live
              </span>
            </div>
            <div className="font-mono text-[13px] leading-7 p-6 text-white/85">
              {lines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.18 }}
                >
                  <span className={l.k === "ok" ? "text-emerald-400" : l.k === "info" ? "text-blue-400" : "text-white/40"}>{l.t}</span>
                  <span>{l.c}</span>
                </motion.div>
              ))}
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.1 }}
                className="inline-block ml-1 h-4 w-2 align-middle bg-emerald-400/80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ ECOSYSTEM ============ */
function EcosystemSection({ products }) {
  return (
    <section data-testid="home-ecosystem" className="relative py-24 lg:py-32 border-t border-white/10">
      <div className="absolute inset-0 -z-10 bg-radial-emerald opacity-40" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow">Product ecosystem</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Three platforms. One shared engineering core.
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Our flagship products power AI automation, payments, and traffic for thousands of teams worldwide.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <motion.a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              data-testid={`ecosystem-card-${p.slug}`}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
              custom={i} variants={fadeUp}
              className="card-surface p-8 group relative overflow-hidden block"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `radial-gradient(400px 200px at 80% 0%, ${p.logo_color}25, transparent 60%)` }} />
              <div className="h-2 w-16 rounded-full relative" style={{ background: `linear-gradient(90deg, ${p.logo_color}, transparent)` }} />
              <h3 className="mt-6 font-display text-3xl font-bold relative">{p.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] relative" style={{ color: p.logo_color }}>{p.tagline}</p>
              <p className="mt-5 text-sm text-white/60 leading-relaxed relative">{p.description}</p>
              <ul className="mt-6 space-y-2 relative">
                {p.highlights?.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="h-3.5 w-3.5 text-emerald-400" /> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-emerald-400 transition-colors relative">
                Visit {p.name} <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CAPABILITIES STRIP ============ */
function CapabilitiesSection() {
  const caps = [
    { Icon: Brain, k: "AI", t: "Multi-LLM orchestration", n: "Claude · OpenAI · Gemini" },
    { Icon: ShieldCheck, k: "Sec", t: "GDPR · ISO 27001", n: "Compliance from day one" },
    { Icon: Zap, k: "Perf", t: "Sub-50ms p95 APIs", n: "Edge-rendered, multi-region" },
    { Icon: Cpu, k: "Infra", t: "Auto-scaling agents", n: "Cost-aware routing" },
    { Icon: Activity, k: "SRE", t: "99.98% uptime SLO", n: "On-call, runbooks, playbooks" },
    { Icon: Boxes, k: "Stack", t: "Typed end-to-end", n: "Python · TypeScript" },
  ];
  return (
    <section className="relative py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="eyebrow">Capabilities</p>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight max-w-3xl">
          Everything you need to ship a production AI product.
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          {caps.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#070707] p-6 group hover:bg-[#0a0a0a] transition-colors"
            >
              <div className="flex items-center justify-between">
                <c.Icon className="h-5 w-5 text-emerald-400" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/30 group-hover:text-emerald-400/80 transition-colors">{c.k}</span>
              </div>
              <p className="mt-5 font-display text-xl font-semibold">{c.t}</p>
              <p className="mt-1 text-sm text-white/50">{c.n}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CASE STUDIES ============ */
function CaseStudiesSection({ cases }) {
  return (
    <section className="relative py-24 lg:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">Case studies</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
              Outcomes our clients put on the wall.
            </h2>
          </div>
          <Link to="/case-studies" className="btn-ghost text-sm self-start lg:self-end">
            All case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
              custom={i} variants={fadeUp}
              className="card-surface p-7"
              data-testid={`case-card-${c.slug}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">{c.industry}</span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  {c.metric}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm text-white/60">{c.summary}</p>
              <p className="mt-5 text-xs text-white/50">Client: {c.client}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ NEWS / INDUSTRY INSIGHTS ============ */
function NewsSection({ news }) {
  if (!news || news.length === 0) return null;
  return (
    <section data-testid="home-news" className="relative py-24 lg:py-32 border-t border-white/10">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow"><Newspaper className="inline h-3.5 w-3.5 mr-1" /> Latest industry insight</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
              Signal, curated by Venusian.
            </h2>
            <p className="mt-4 text-white/60 max-w-xl">
              AI-summarised industry news from across the global tech press — refined, recontextualised, and published by our editorial AI engine.
            </p>
          </div>
          <Link to="/blog" className="btn-ghost text-sm self-start lg:self-end" data-testid="home-news-all">
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          {/* Featured */}
          {news[0] && (
            <Link to={`/blog/${news[0].slug}`} className="lg:col-span-7 card-surface overflow-hidden group flex flex-col" data-testid={`news-featured-${news[0].slug}`}>
              <div className="aspect-[16/9] bg-gradient-to-br from-emerald-500/20 via-emerald-700/10 to-black overflow-hidden">
                {news[0].cover_image ? (
                  <img src={news[0].cover_image} alt={news[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full grid place-items-center bg-grid">
                    <Rss className="h-14 w-14 text-emerald-400/40" />
                  </div>
                )}
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-emerald-400">
                  <span>{news[0].category || "Industry"}</span>
                  {news[0].rss_source && <><span className="text-white/30">·</span><span className="text-white/50">via {news[0].rss_source}</span></>}
                </div>
                <h3 className="mt-3 font-display text-2xl lg:text-3xl font-bold leading-snug group-hover:text-emerald-100 transition-colors">{news[0].title}</h3>
                <p className="mt-4 text-sm text-white/60 line-clamp-3">{news[0].excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-white">
                  Read insight <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          )}

          {/* List */}
          <div className="lg:col-span-5 space-y-3">
            {news.slice(1, 5).map((n) => (
              <Link key={n.id} to={`/blog/${n.slug}`} className="card-surface p-5 block group" data-testid={`news-item-${n.slug}`}>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-emerald-400">
                  <span>{n.category || "Industry"}</span>
                  {n.rss_source && <><span className="text-white/30">·</span><span className="text-white/50">via {n.rss_source}</span></>}
                </div>
                <h4 className="mt-2 font-display text-base font-semibold leading-snug line-clamp-2 group-hover:text-emerald-100 transition-colors">{n.title}</h4>
                <p className="mt-2 text-xs text-white/50 line-clamp-2">{n.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ WHY VENUSIAN ============ */
function WhyVenusianSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={BRAND.data_center} alt="Venusian engineering" className="rounded-2xl border border-white/10 brand-glow" />
          <div className="absolute -bottom-6 -right-6 hidden lg:block">
            <div className="glass rounded-2xl p-4 w-56">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-400">Live</p>
              <p className="mt-1 font-display text-xl font-bold">+18.4% MoM</p>
              <p className="text-xs text-white/60">Active deployments</p>
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow">Why Venusian</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Built like a product company. Operated like a research lab.
          </h2>
          <div className="mt-10 space-y-6">
            {[
              { Icon: Cpu, title: "Multi-LLM orchestration",
                desc: "Waterfall providers, evaluation harnesses, and cost-aware routing across Claude, OpenAI, and Gemini." },
              { Icon: ShieldCheck, title: "GDPR + global compliance",
                desc: "Consent logging, data export/delete, and EU/UAE/US data residency from day one." },
              { Icon: Zap, title: "Performance engineering",
                desc: "Sub-100ms backends, edge rendering, and observability you can trust at 3am." },
            ].map((b, i) => (
              <div key={i} className="flex gap-5">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                  <b.Icon className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{b.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ BLOG TEASER ============ */
function BlogTeaser({ blogs }) {
  if (!blogs || blogs.length === 0) return null;
  return (
    <section className="relative py-24 lg:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">From the blog</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl">
              Field notes from the AI-first decade.
            </h2>
          </div>
          <Link to="/blog" className="btn-ghost text-sm self-start lg:self-end">
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {blogs.map((b) => (
            <Link key={b.id} to={`/blog/${b.slug}`} className="card-surface p-7 block" data-testid={`home-blog-${b.slug}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">{b.category || "Insights"}</span>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{b.title}</h3>
              <p className="mt-3 text-sm text-white/60 line-clamp-3">{b.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-white">
                Read article <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CTA BAND ============ */
function CtaBand() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-[#0a0a0a] p-10 lg:p-16 grain">
          <div className="absolute inset-0 -z-10 opacity-40"
            style={{ background: "radial-gradient(600px 300px at 100% 0%, rgba(16,185,129,0.25), transparent 60%)" }} />
          <p className="eyebrow">Let's build</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
            Bring us your hardest engineering problem.
          </h2>
          <p className="mt-6 max-w-xl text-white/70">
            From AI strategy to production ship — we partner with founders and enterprises who refuse to compromise on quality.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" data-testid="cta-band-start" className="btn-primary">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/case-studies" className="btn-ghost">See proof of work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
