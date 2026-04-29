import { useEffect } from "react";

/**
 * Sets document.title and a description meta tag for the current route.
 * Cleans up to a sensible default when the page unmounts.
 */
export default function useDocumentTitle(title, description) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — Venusian`
      : "Venusian — Engineering the AI-first decade";
    document.title = fullTitle;

    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) {
        m = document.createElement("meta");
        m.name = "description";
        document.head.appendChild(m);
      }
      m.content = description;
    }
    return () => {
      document.title = "Venusian — Engineering the AI-first decade";
    };
  }, [title, description]);
}
