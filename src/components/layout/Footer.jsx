import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { api } from "@/lib/api";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await api.post("/newsletter/subscribe", { email, consent: true });
      toast.success("Subscribed. Welcome aboard.");
      setEmail("");
    } catch {
      toast.error("Could not subscribe. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer data-testid="public-footer" className="relative border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <img src={BRAND.favicon} alt="Venusian" className="h-9 w-9 rounded-md" />
              <span className="font-display text-2xl font-bold">VENUSIAN</span>
            </Link>
            <p className="mt-6 max-w-md text-base text-white/60">
              Premium AI-first technology company building automation, fintech, and adtech platforms across UAE, EU, and US.
            </p>
            <form onSubmit={subscribe} className="mt-8 flex max-w-md gap-2">
              <input
                data-testid="footer-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm placeholder-white/40 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              />
              <button
                data-testid="footer-newsletter-submit"
                disabled={loading}
                className="btn-primary text-sm disabled:opacity-60"
              >
                {loading ? "..." : <>Join <ArrowRight className="h-4 w-4" /></>}
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="eyebrow mb-4">Company</p>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/case-studies" className="hover:text-white">Case studies</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Ecosystem</p>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="https://fastofy.com" target="_blank" rel="noreferrer" className="hover:text-white">Fastofy</a></li>
                <li><a href="https://qwipto.com" target="_blank" rel="noreferrer" className="hover:text-white">Qwipto</a></li>
                <li><a href="https://trafficboxes.com" target="_blank" rel="noreferrer" className="hover:text-white">TrafficBoxes</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Legal</p>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
                <li><a href="/sitemap.xml" className="hover:text-white">Sitemap</a></li>
                <li><a href="/llms.txt" className="hover:text-white">llms.txt</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {[
            { city: "Dubai", region: "UAE — Headquarters" },
            { city: "Amsterdam", region: "EU" },
            { city: "New York", region: "US" },
          ].map((l) => (
            <div key={l.city} className="flex items-start gap-3 text-sm text-white/70">
              <MapPin className="h-4 w-4 mt-0.5 text-emerald-400" />
              <div>
                <div className="text-white">{l.city}</div>
                <div>{l.region}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
          <p>© {year} Venusian Technologies FZ-LLC. All rights reserved.</p>
          <a href="mailto:hello@venusian.tech" className="inline-flex items-center gap-2 hover:text-white">
            <Mail className="h-3.5 w-3.5" /> hello@venusian.tech
          </a>
        </div>
      </div>
    </footer>
  );
}
