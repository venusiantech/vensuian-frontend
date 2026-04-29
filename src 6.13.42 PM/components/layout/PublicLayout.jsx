import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
