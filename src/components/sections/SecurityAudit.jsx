import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldAlert, ScanSearch, Bug, Fingerprint, Cloud, KeyRound, FileCheck, ArrowUpRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const CAPABILITIES = [
  { Icon: ScanSearch, t: "Breach & compromise assessment",
    d: "We hunt for indicators of compromise across servers, endpoints, and logs to confirm whether attackers are already inside." },
  { Icon: Bug, t: "Vulnerability scan & pentest",
    d: "Automated scanning plus manual penetration testing of your web apps, APIs, mobile apps, and networks." },
  { Icon: Fingerprint, t: "Digital forensics & incident response",
    d: "Evidence-preserving investigation of how an incident happened, what was accessed, and how to contain it." },
  { Icon: Cloud, t: "Cloud & infrastructure review",
    d: "AWS, GCP, and Kubernetes configuration, IAM permissions, open storage, and exposed secrets." },
  { Icon: KeyRound, t: "Leaked credential checks",
    d: "Breach-dump and dark-web checks for your domains, staff accounts, and API keys." },
  { Icon: FileCheck, t: "Compliance readiness",
    d: "Gap analysis against GDPR, ISO 27001, and SOC 2, with an evidence pack your auditor can use." },
];

// Roadmap entry for the Services page — same shape as /api/services items
export const SECURITY_SERVICE = {
  slug: "security-audit",
  icon: "ShieldAlert",
  title: "Forensic Security Audit",
  summary: "Breach scans, penetration testing, and digital forensics. We find out whether you've been compromised, how it happened, and exactly what to fix.",
  deliverables: CAPABILITIES.map((c) => c.t),
  cta: "/contact?service=security-audit",
  ctaLabel: "Book a security audit",
};

const STEPS = [
  { k: "01", t: "Scope", d: "Agree targets, access, and rules of engagement under NDA." },
  { k: "02", t: "Scan & hunt", d: "Breach scans, vulnerability tests, and threat hunting." },
  { k: "03", t: "Investigate", d: "Trace root causes and confirm what was exposed." },
  { k: "04", t: "Report & retest", d: "Prioritised fixes, an executive summary, and a retest once fixed." },
];

const FINDINGS = [
  { sev: "critical", t: "Admin credentials found in a public breach dump" },
  { sev: "high", t: "Storage bucket readable without authentication" },
  { sev: "high", t: "Unpatched web server with a known remote exploit" },
  { sev: "medium", t: "MFA not enforced on 4 staff accounts" },
  { sev: "low", t: "Missing security headers on 2 domains" },
];

const SEVERITY = {
  critical: "border-red-500/40 bg-red-500/15 text-red-300",
  high: "border-orange-500/40 bg-orange-500/15 text-orange-300",
  medium: "border-amber-400/40 bg-amber-400/10 text-amber-200",
  low: "border-sky-500/40 bg-sky-500/10 text-sky-300",
};

/* Forensic security audit section for the Home page */
export default function SecurityAudit() {
  return (
    <section
      data-testid="security-audit"
      className="relative py-24 lg:py-32 border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow"><ShieldAlert className="inline h-3.5 w-3.5 mr-1" /> Forensic security audit</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Find the breach before someone else does.
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Our security team scans your systems for signs of a breach, tests them the way an attacker would, and investigates anything suspicious — so you get evidence and a clear fix plan, not a wall of alerts.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact?service=security-audit" data-testid="security-audit-cta" className="btn-primary">
                Book a security audit <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ScanReport />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.t}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
              custom={i} variants={fadeUp}
              className="card-surface p-7"
            >
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <c.Icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{c.d}</p>
            </motion.div>
          ))}
        </div>

        <p className="eyebrow mt-16">How an audit runs</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          {STEPS.map((s) => (
            <div key={s.k} className="bg-[#070707] p-6">
              <span className="font-display text-sm font-semibold text-emerald-400 tabular-nums">{s.k}</span>
              <p className="mt-3 font-display text-lg font-semibold">{s.t}</p>
              <p className="mt-1 text-sm text-white/50">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Illustrative breach-scan report panel */
function ScanReport() {
  const counts = FINDINGS.reduce((m, f) => ({ ...m, [f.sev]: (m[f.sev] || 0) + 1 }), {});
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#070707] p-1 brand-glow overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/40">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        <span className="ml-3 text-[11px] uppercase tracking-[0.22em] text-white/50">breach-scan · sample report</span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 text-xs text-white/50">
          <span className="font-mono">target: example.com · 41 hosts</span>
          <span className="inline-flex items-center gap-1 text-emerald-400 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> scan complete
          </span>
        </div>
        <ul className="mt-5 space-y-2">
          {FINDINGS.map((f, i) => (
            <motion.li
              key={f.t}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
            >
              <span className={`mt-0.5 w-[4.75rem] shrink-0 rounded-full border px-2 py-0.5 text-center text-[10px] font-medium uppercase tracking-[0.14em] ${SEVERITY[f.sev]}`}>
                {f.sev}
              </span>
              <span className="text-sm text-white/80">{f.t}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-white/10 pt-4 text-xs text-white/50">
          {Object.keys(SEVERITY).map((s) => (
            <span key={s}><span className="text-white tabular-nums">{counts[s] || 0}</span> {s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
