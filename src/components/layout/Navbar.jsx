import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header
      data-testid="public-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link to="/" data-testid="navbar-logo-link" className="flex items-center gap-3">
            <img src={BRAND.favicon} alt="Venusian" className="h-8 w-8 rounded-md" />
            <span className="font-display text-lg lg:text-xl font-bold tracking-tight">VENUSIAN</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm transition-colors ${
                  loc.pathname.startsWith(l.to) ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" data-testid="navbar-cta-contact" className="btn-primary text-sm">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            data-testid="navbar-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-white/10"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black/85 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-base text-white/80 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" data-testid="mobile-nav-cta" className="btn-primary w-full justify-center text-sm">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
