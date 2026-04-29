import useDocumentTitle from "@/lib/useDocumentTitle";

export default function Terms() {
  useDocumentTitle("Terms", "Terms of service for venusian.tech.");
  return (
    <div data-testid="terms-page" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">Terms of service</h1>
        <div className="prose-venusian mt-10">
          <p>By accessing venusian.tech, you agree to use the site lawfully and acknowledge that all content is the intellectual property of Venusian Technologies FZ-LLC.</p>
          <h2>Engagement</h2>
          <p>Project engagements are governed by signed Master Services Agreements (MSA) and Statements of Work (SOW). The website does not constitute a service contract.</p>
          <h2>Liability</h2>
          <p>Information on this site is provided "as is" without warranties of any kind. Venusian shall not be liable for indirect or consequential damages arising from website use.</p>
          <h2>Changes</h2>
          <p>We may update these terms at any time. Continued use of the site implies acceptance of the updated terms.</p>
        </div>
      </div>
    </div>
  );
}
