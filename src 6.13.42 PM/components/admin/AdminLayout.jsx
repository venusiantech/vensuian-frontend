import { useState } from "react";
import { Link, NavLink, Navigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard, FileText, Package, Users, Mail, Settings as SettingsIcon,
  CalendarRange, Rss, LogOut, Menu, X,
  Activity, BarChart3, Send, Search, User, Cloud
} from "lucide-react";
import { BRAND } from "@/lib/brand";
import { useAuth } from "@/lib/auth";

const NAV = [
  { to: "/admin", end: true, label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/admin/health", label: "Health", icon: Activity },
  { to: "/admin/blogs", label: "Blogs", icon: FileText },
  { to: "/admin/scheduled", label: "Calendar", icon: CalendarRange },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/leads", label: "Leads", icon: Users },
  { to: "/admin/newsletter", label: "Subscribers", icon: Mail },
  { to: "/admin/newsletter/campaigns", label: "Campaigns", icon: Send },
  { to: "/admin/rss", label: "RSS", icon: Rss },
  { to: "/admin/seo", label: "SEO", icon: Search },
  { to: "/admin/storage", label: "Storage", icon: Cloud },
  { to: "/admin/email", label: "Email", icon: Mail },
  { to: "/admin/settings", label: "AI Providers", icon: SettingsIcon },
  { to: "/admin/profile", label: "Profile", icon: User },
];

export default function AdminLayout({ children }) {
  const { user, loading, logout } = useAuth();
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  if (loading) return <div className="min-h-screen grid place-items-center bg-[#050505] text-white/60">Loading…</div>;
  if (!user || user.role !== "admin") return <Navigate to="/admin/login" state={{ from: loc }} replace />;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 z-40 h-screen w-64 shrink-0 border-r border-white/10 bg-[#050505] transition-transform flex flex-col ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="h-16 px-5 flex items-center justify-between border-b border-white/10 shrink-0">
          <Link to="/admin" className="flex items-center gap-2.5">
            <img src={BRAND.favicon} alt="" className="h-7 w-7 rounded-md" />
            <span className="font-display text-base font-bold">VENUSIAN</span>
            <span className="ml-1 text-[10px] uppercase tracking-[0.2em] text-emerald-400">CMS</span>
          </Link>
          <button className="lg:hidden text-white/60" onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
        </div>
        <nav className="p-3 space-y-1 overflow-y-auto flex-1 no-scrollbar">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              data-testid={`admin-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-emerald-500/10 text-white border border-emerald-500/30"
                    : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                }`
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10 shrink-0">
          <div className="px-3 py-2 text-xs text-white/50">
            <div className="text-white/80">{user.name}</div>
            <div className="truncate">{user.email}</div>
          </div>
          <button
            data-testid="admin-logout-btn"
            onClick={() => { logout(); window.location.href = "/admin/login"; }}
            className="mt-2 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        <div className="h-16 border-b border-white/10 flex items-center justify-between px-5 sticky top-0 z-30 bg-[#050505]/85 backdrop-blur-xl">
          <button className="lg:hidden text-white/70" onClick={() => setOpen(true)}><Menu className="h-5 w-5" /></button>
          <div className="text-sm text-white/60">Custom CMS</div>
          <Link to="/" className="text-xs text-white/50 hover:text-white">View site →</Link>
        </div>
        <div className="p-6 lg:p-10">{children}</div>
      </div>
    </div>
  );
}
