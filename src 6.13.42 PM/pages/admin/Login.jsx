import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { BRAND } from "@/lib/brand";
import { Lock, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function AdminLogin() {
  const { user, login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("admin@venusian.tech");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to="/admin" replace />;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Welcome back.");
      nav("/admin");
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="admin-login-page" className="min-h-screen grid lg:grid-cols-2 bg-[#050505] text-white">
      <div
        className="hidden lg:block relative"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(5,5,5,0.5), rgba(5,5,5,0.85)), url(${BRAND.hero_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 grain" />
        <div className="relative h-full p-16 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <img src={BRAND.favicon} alt="" className="h-10 w-10 rounded-lg" />
            <span className="font-display text-2xl font-bold">VENUSIAN</span>
          </div>
          <div>
            <p className="eyebrow">CMS · v1.0</p>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight">
              The control room for the AI-first decade.
            </h1>
            <p className="mt-6 max-w-md text-white/60">
              Multi-LLM blog engine, scheduler, RSS automation, lead ops — all from one premium dashboard.
            </p>
          </div>
        </div>
      </div>

      <div className="grid place-items-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <img src={BRAND.favicon} alt="" className="h-8 w-8 rounded-md" />
            <span className="font-display text-lg font-bold">VENUSIAN CMS</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold">Sign in</h2>
          <p className="mt-2 text-white/60 text-sm">Restricted to authorized administrators.</p>

          <form onSubmit={submit} className="mt-10 space-y-5">
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-white/50">Email</label>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 focus-within:border-emerald-500/60">
                <Mail className="h-4 w-4 text-white/50" />
                <input
                  data-testid="admin-login-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-white/50">Password</label>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 focus-within:border-emerald-500/60">
                <Lock className="h-4 w-4 text-white/50" />
                <input
                  data-testid="admin-login-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm"
                />
              </div>
            </div>
            <button
              data-testid="admin-login-submit"
              disabled={loading}
              className="btn-primary w-full text-sm disabled:opacity-60"
            >
              {loading ? "Signing in…" : <>Sign in <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>

          <p className="mt-6 text-xs text-white/40">
            Default seed: admin@venusian.tech / Venusian@2026 — change after first login.
          </p>
        </div>
      </div>
    </div>
  );
}
