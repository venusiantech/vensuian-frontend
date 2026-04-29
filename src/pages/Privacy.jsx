import useDocumentTitle from "@/lib/useDocumentTitle";

export default function Privacy() {
  useDocumentTitle("Privacy", "How Venusian collects, uses, and protects your personal data — GDPR compliant.");
  return (
    <div data-testid="privacy-page" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">Privacy policy</h1>
        <div className="prose-venusian mt-10">
          <p>Venusian Technologies FZ-LLC ("Venusian", "we") respects your privacy and is committed to protecting your personal data in compliance with GDPR and applicable global laws.</p>
          <h2>What we collect</h2>
          <p>We collect data you submit through forms (name, email, company, message), and minimal analytics with your consent.</p>
          <h2>How we use it</h2>
          <p>To respond to enquiries, send the newsletter you subscribed to, and improve our website. We never sell your data.</p>
          <h2>Your rights</h2>
          <p>You can request access, correction, export, or deletion of your data by emailing <a href="mailto:privacy@venusian.tech">privacy@venusian.tech</a>.</p>
          <h2>Data retention</h2>
          <p>We retain leads and newsletter subscriptions only as long as needed for legitimate business purposes or until you request deletion.</p>
          <h2>Cookies</h2>
          <p>Essential cookies enable core functionality. Optional analytics cookies are loaded only after explicit consent via our banner.</p>
        </div>
      </div>
    </div>
  );
}
