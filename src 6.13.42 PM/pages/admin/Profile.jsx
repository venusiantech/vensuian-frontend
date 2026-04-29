import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Save, KeyRound, User } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

export default function AdminProfile() {
  const { user } = useAuth();
  const [cur, setCur] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (next.length < 8) { toast.error("New password must be at least 8 chars"); return; }
    if (next !== confirm) { toast.error("Passwords do not match"); return; }
    setLoading(true);
    try {
      await api.post("/auth/change-password", { current_password: cur, new_password: next });
      toast.success("Password updated");
      setCur(""); setNext(""); setConfirm("");
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Update failed");
    } finally { setLoading(false); }
  };

  return (
    <div data-testid="admin-profile-page" className="space-y-8 max-w-2xl">
      <div>
        <p className="eyebrow"><User className="inline h-3.5 w-3.5 mr-1" /> Profile</p>
        <h1 className="mt-3 font-display text-4xl font-bold">Account</h1>
      </div>

      <div className="card-surface p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-white/50">Logged in as</p>
        <p className="mt-2 font-display text-xl">{user?.name}</p>
        <p className="text-sm text-white/60">{user?.email} · {user?.role}</p>
      </div>

      <form onSubmit={submit} className="card-surface p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <KeyRound className="h-4 w-4 text-emerald-400" />
          <h2 className="font-display text-lg font-semibold">Change password</h2>
        </div>
        <Field label="Current password">
          <input data-testid="profile-current-password" type="password" required value={cur} onChange={(e) => setCur(e.target.value)} className="ven-input" />
        </Field>
        <Field label="New password (min 8 chars)">
          <input data-testid="profile-new-password" type="password" required value={next} onChange={(e) => setNext(e.target.value)} className="ven-input" />
        </Field>
        <Field label="Confirm new password">
          <input data-testid="profile-confirm-password" type="password" required value={confirm} onChange={(e) => setConfirm(e.target.value)} className="ven-input" />
        </Field>
        <button type="submit" disabled={loading} className="btn-primary text-sm" data-testid="profile-save-btn">
          <Save className="h-4 w-4" /> {loading ? "Updating…" : "Update password"}
        </button>
      </form>

      <style>{`.ven-input{width:100%;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:10px 14px;color:#fff;font-size:14px;outline:none}.ven-input:focus{border-color:rgba(16,185,129,.55);box-shadow:0 0 0 3px rgba(16,185,129,.12)}`}</style>
    </div>
  );
}
function Field({ label, children }) { return <label className="block"><span className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-2">{label}</span>{children}</label>; }
