import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight, Sparkles, Globe, Smartphone, Gauge, Layers, TrendingUp, ShieldAlert, Check
} from "lucide-react";
import { api } from "@/lib/api";
import useDocumentTitle from "@/lib/useDocumentTitle";
import { SECURITY_SERVICE } from "@/components/sections/SecurityAudit";

const ICONS = { Sparkles, Globe, Smartphone, Gauge, Layers, TrendingUp, ShieldAlert };

/* Roadmap animation: the node morphs from an emerald dot into an icon tile,
   the card morphs from a pill at its centre into the full card, then its content rises in. */
const node = {
  hidden: { scale: 0.35, rotate: -90, borderRadius: "22px", backgroundColor: "rgba(16,185,129,1)" },
  show: {
    scale: 1, rotate: 0, borderRadius: "14px", backgroundColor: "rgba(10,10,10,1)",
    transition: { type: "spring", stiffness: 170, damping: 18 },
  },
};
const nodeIcon = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.25 } } };
const card = {
  hidden: { clipPath: "inset(42% 40% 42% 40% round 999px)", backgroundColor: "rgba(16,185,129,0.4)", opacity: 0 },
  show: {
    // Ends past the card edges so the hover glow isn't clipped; ends on --bg-paper
    clipPath: "inset(-25% -25% -25% -25% round 32px)", backgroundColor: "rgba(10,10,10,1)", opacity: 1,
    transition: {
      clipPath: { duration: 1, ease: [0.65, 0, 0.35, 1] },
      backgroundColor: { duration: 0.9, ease: "easeInOut" },
      opacity: { duration: 0.2 },
      delayChildren: 0.55, staggerChildren: 0.07,
    },
  },
};
const rise = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const ghost = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } } };

export default function Services() {
  useDocumentTitle("Services", "Specialist teams for AI automation, web, mobile, performance engineering, and forensic security audits.");
  const [items, setItems] = useState(null);
  const { hash } = useLocation();

  useEffect(() => {
    api.get("/services")
      .then((r) => setItems(r.data.items || []))
      .catch(() => setItems([]));
  }, []);

  // The roadmap only renders once services load, so re-run the #anchor scroll then
  useEffect(() => {
    if (hash && items) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [items, hash]);

  const services = items && [...items.filter((s) => s.slug !== SECURITY_SERVICE.slug), SECURITY_SERVICE];

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
            Engage Venusian for outcomes — not headcount. Each service is delivered by a senior pod with shared playbooks across AI, web, mobile, infra, and security.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          {services && <Roadmap services={services} />}
        </div>
      </section>
    </div>
  );
}

function Roadmap({ services }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 65%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className="relative" data-testid="services-roadmap">
      {/* Track + scroll-linked fill, centred on the nodes (left on mobile, middle on desktop) */}
      <div className="absolute top-[46px] bottom-0 left-[22px] lg:left-1/2 w-px bg-gradient-to-b from-white/10 via-white/10 to-transparent" />
      <div className="absolute top-[46px] bottom-0 left-[22px] lg:left-1/2 w-px [mask-image:linear-gradient(to_bottom,black_85%,transparent)]">
        <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top bg-gradient-to-b from-emerald-300 via-emerald-500 to-emerald-700" />
      </div>

      <ol className="space-y-14 lg:space-y-24">
        {services.map((s, i) => <RoadmapItem key={s.slug} s={s} i={i} />)}
      </ol>
    </div>
  );
}

function RoadmapItem({ s, i }) {
  const Icon = ICONS[s.icon] || Sparkles;
  const right = i % 2 === 1;
  const n = String(i + 1).padStart(2, "0");

  return (
    <motion.li
      id={s.slug}
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
      className="relative pl-16 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-x-24 scroll-mt-24 lg:scroll-mt-28"
      data-testid={`services-item-${s.slug}`}
    >
      {/* Positioned wrapper: the motion child owns transform, so centring lives here */}
      <div className="absolute top-6 left-0 lg:left-1/2 lg:-translate-x-1/2 z-10">
        <motion.div variants={node} className="h-11 w-11 grid place-items-center border border-emerald-500/40 shadow-[0_0_0_8px_#050505]">
          <motion.span variants={nodeIcon}><Icon className="h-5 w-5 text-emerald-400" /></motion.span>
        </motion.div>
      </div>

      <motion.div
        variants={ghost}
        aria-hidden="true"
        className={`hidden lg:flex lg:row-start-1 pt-3 ${right ? "lg:col-start-1 justify-end" : "lg:col-start-2"}`}
      >
        <span className="font-display text-8xl font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.14)]">{n}</span>
      </motion.div>

      <motion.div
        variants={card}
        // card-surface transitions `all`, which would smear framer's per-frame clip-path updates
        style={{ transitionProperty: "border-color, box-shadow, transform" }}
        className={`card-surface p-7 lg:p-8 lg:row-start-1 ${right ? "lg:col-start-2" : "lg:col-start-1"}`}
      >
        <motion.p variants={rise} className="text-xs uppercase tracking-[0.22em] text-emerald-400 tabular-nums">{n}</motion.p>
        <motion.h2 variants={rise} className="mt-3 font-display text-2xl lg:text-3xl font-bold">{s.title}</motion.h2>
        <motion.p variants={rise} className="mt-3 text-white/60">{s.summary}</motion.p>
        <motion.ul variants={rise} className="mt-6 grid sm:grid-cols-2 gap-2">
          {s.deliverables?.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-white/70">
              <Check className="h-3.5 w-3.5 mt-0.5 text-emerald-400 shrink-0" /> {d}
            </li>
          ))}
        </motion.ul>
        <motion.div variants={rise}>
          <Link to={s.cta || "/contact"} className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300">
            {s.ctaLabel || "Discuss this service"} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.li>
  );
}
