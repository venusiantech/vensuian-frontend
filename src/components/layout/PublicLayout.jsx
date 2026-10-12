import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";

export default function PublicLayout({ children }) {
  const { pathname, hash } = useLocation();

  // React Router doesn't scroll to #anchors on navigation (e.g. /services#security-audit).
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
