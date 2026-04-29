import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const c = localStorage.getItem("venusian_cookie_consent");
    if (!c) setTimeout(() => setShow(true), 800);
  }, []);

  const decide = (value) => {
    localStorage.setItem("venusian_cookie_consent", value);
    localStorage.setItem("venusian_cookie_consent_at", new Date().toISOString());
    setShow(false);
  };

  if (!show) return null;
  return (
    <div data-testid="cookie-consent" className="fixed bottom-4 left-4 right-4 z-[60] sm:left-auto sm:right-4 sm:max-w-md">
      <div className="rounded-2xl border border-white/10 bg-black/85 backdrop-blur-xl p-5 shadow-2xl">
        <div className="flex items-start gap-3">
          <Cookie className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-semibold">We respect your privacy</p>
            <p className="mt-1 text-xs text-white/60">
              We use essential cookies to run venusian.tech. With your consent we add analytics to improve our site. See our{" "}
              <a href="/privacy" className="text-emerald-400 underline">Privacy policy</a>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                data-testid="cookie-consent-accept"
                onClick={() => decide("accept-all")}
                className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-medium text-white hover:bg-emerald-400"
              >
                Accept all
              </button>
              <button
                data-testid="cookie-consent-essential"
                onClick={() => decide("essential")}
                className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 hover:text-white"
              >
                Essential only
              </button>
            </div>
          </div>
          <button
            data-testid="cookie-consent-close"
            onClick={() => decide("dismissed")}
            className="text-white/40 hover:text-white"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
