import { useEffect } from "react";

type PageMeta = {
  title: string;
  description?: string;
  canonical?: string;
};

const setMetaContent = (selector: string, content: string) => {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute("content", content);
};

const setLinkHref = (selector: string, href: string) => {
  const el = document.head.querySelector<HTMLLinkElement>(selector);
  if (el) el.setAttribute("href", href);
};

/**
 * Per-route title + description + canonical updater for the SPA.
 * Reverts to the index.html defaults on unmount so a soft route back works.
 */
export function usePageMeta({ title, description, canonical }: PageMeta) {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDescription =
      document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.getAttribute("content") ?? "";
    const prevCanonical =
      document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.getAttribute("href") ?? "";

    document.title = title;
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[name="twitter:title"]', title);

    if (description) {
      setMetaContent('meta[name="description"]', description);
      setMetaContent('meta[property="og:description"]', description);
      setMetaContent('meta[name="twitter:description"]', description);
    }

    if (canonical) {
      setLinkHref('link[rel="canonical"]', canonical);
      setMetaContent('meta[property="og:url"]', canonical);
      setMetaContent('meta[name="twitter:url"]', canonical);
    }

    return () => {
      document.title = prevTitle;
      if (prevDescription) setMetaContent('meta[name="description"]', prevDescription);
      if (prevCanonical) setLinkHref('link[rel="canonical"]', prevCanonical);
    };
  }, [title, description, canonical]);
}
