import { useState } from "react";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";
import useDocumentTitle from "@/lib/useDocumentTitle";

const STEPS = ["You", "Project", "Details"];
const SERVICES = ["AI Automation", "Web", "Mobile", "Performance", "Custom Platform", "Growth"];
const BUDGETS = ["< $25k", "$25k–$75k", "$75k–$200k", "$200k+"];

export default function Contact() {
  useDocumentTitle("Contact", "Tell us about your project. Senior partners respond within one business day.");
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "",
    services: [], budget: "", message: "", consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const toggleService = (s) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }));

  const canNext =
    (step === 0 && form.name && form.email) ||
    (step === 1 && form.services.length > 0 && form.budget) ||
    (step === 2 && form.message && form.consent);

  const submit = async () => {
    if (!form.consent) { toast.error("Please agree to the privacy policy."); return; }
    setSubmitting(true);
    try {
      await api.post("/leads", { ...form, source: "contact" });
      toast.success("Thanks. We'll be in touch within one business day.");
      setDone(true);
    } catch {
      toast.error("Could not submit. Email us at hello@venusian.tech.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      <section className="relative py-20 lg:py-28 border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-radial-emerald opacity-60" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-3xl">
            Tell us about the problem.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            We respond to qualified inquiries within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-6">
            <div className="card-surface p-6 flex items-start gap-3">
              <Mail className="h-5 w-5 text-emerald-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Email</p>
                <a href="mailto:hello@venusian.tech" className="text-base text-white hover:text-emerald-400">hello@venusian.tech</a>
              </div>
            </div>
            <div className="card-surface p-6 flex items-start gap-3">
              <Phone className="h-5 w-5 text-emerald-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Call</p>
                <p className="text-base text-white">+971 4 000 0000</p>
              </div>
            </div>
            <div className="card-surface p-6 flex items-start gap-3">
              <MapPin className="h-5 w-5 text-emerald-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Headquarters</p>
                <p className="text-base text-white">Dubai, UAE</p>
                <p className="text-sm text-white/60 mt-1">Offices in Amsterdam & New York</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="card-surface p-8 lg:p-10">
              {done ? (
                <div className="text-center py-12" data-testid="contact-success">
                  <div className="h-14 w-14 mx-auto grid place-items-center rounded-full bg-emerald-500/15 border border-emerald-500/30">
                    <Check className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-bold">Got it.</h2>
                  <p className="mt-3 text-white/60 max-w-md mx-auto">
                    A senior partner will reach out shortly. Meanwhile, feel free to explore our case studies and the ecosystem.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    {STEPS.map((s, i) => (
                      <div key={s} className="flex items-center gap-2">
                        <div className={`h-7 w-7 grid place-items-center rounded-full text-xs font-medium ${i <= step ? "bg-emerald-500 text-white" : "bg-white/5 text-white/50 border border-white/10"}`}>
                          {i + 1}
                        </div>
                        <span className={`text-sm ${i === step ? "text-white" : "text-white/50"}`}>{s}</span>
                        {i < STEPS.length - 1 && <span className="w-6 h-px bg-white/10" />}
                      </div>
                    ))}
                  </div>

                  {step === 0 && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Full name *">
                        <input data-testid="contact-name" value={form.name} onChange={(e) => set("name", e.target.value)} className="ven-input" />
                      </Field>
                      <Field label="Work email *">
                        <input data-testid="contact-email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="ven-input" />
                      </Field>
                      <Field label="Company">
                        <input data-testid="contact-company" value={form.company} onChange={(e) => set("company", e.target.value)} className="ven-input" />
                      </Field>
                      <Field label="Phone">
                        <input data-testid="contact-phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="ven-input" />
                      </Field>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <p className="text-sm text-white/70 mb-3">What do you need help with?</p>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES.map((s) => (
                          <button
                            key={s}
                            type="button"
                            data-testid={`contact-service-${s.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => toggleService(s)}
                            className={`rounded-full px-4 py-2 text-sm border transition-colors ${form.services.includes(s) ? "border-emerald-500 bg-emerald-500/15 text-white" : "border-white/15 text-white/70 hover:text-white"}`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                      <p className="mt-8 text-sm text-white/70 mb-3">Approximate budget</p>
                      <div className="flex flex-wrap gap-2">
                        {BUDGETS.map((b) => (
                          <button
                            key={b}
                            type="button"
                            data-testid={`contact-budget-${b.replace(/[^a-z0-9]/gi, "")}`}
                            onClick={() => set("budget", b)}
                            className={`rounded-full px-4 py-2 text-sm border transition-colors ${form.budget === b ? "border-emerald-500 bg-emerald-500/15 text-white" : "border-white/15 text-white/70 hover:text-white"}`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <Field label="Tell us about the project *">
                        <textarea
                          data-testid="contact-message"
                          rows={6}
                          value={form.message}
                          onChange={(e) => set("message", e.target.value)}
                          className="ven-input resize-none"
                          placeholder="Goals, timeline, current stack, anything we should know."
                        />
                      </Field>
                      <label className="mt-5 flex items-start gap-3 text-sm text-white/70 cursor-pointer">
                        <input
                          data-testid="contact-consent"
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => set("consent", e.target.checked)}
                          className="mt-1 accent-emerald-500"
                        />
                        I agree to the <a className="text-emerald-400 underline ml-1" href="/privacy">Privacy policy</a> and to be contacted about this enquiry.
                      </label>
                    </div>
                  )}

                  <div className="mt-10 flex justify-between">
                    <button
                      type="button"
                      data-testid="contact-back"
                      disabled={step === 0}
                      onClick={() => setStep((s) => Math.max(0, s - 1))}
                      className="btn-ghost text-sm disabled:opacity-40"
                    >
                      Back
                    </button>
                    {step < STEPS.length - 1 ? (
                      <button
                        type="button"
                        data-testid="contact-next"
                        disabled={!canNext}
                        onClick={() => setStep((s) => s + 1)}
                        className="btn-primary text-sm disabled:opacity-40"
                      >
                        Continue <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        data-testid="contact-submit"
                        disabled={!canNext || submitting}
                        onClick={submit}
                        className="btn-primary text-sm disabled:opacity-40"
                      >
                        {submitting ? "Sending…" : "Send enquiry"} <ArrowRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .ven-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 12px 16px;
          color: #fff;
          font-size: 14px;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .ven-input:focus {
          border-color: rgba(16,185,129,0.6);
          box-shadow: 0 0 0 3px rgba(16,185,129,0.15);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-2">{label}</span>
      {children}
    </label>
  );
}
