import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { analytics } from "@/lib/analytics";

/**
 * Fires a `page_view` on every route change — path + search + hash — so SPA
 * navigations and in-page anchor jumps are both captured. De-dupes identical
 * consecutive paths.
 */
export function usePageTracking(): void {
  const location = useLocation();
  const lastPath = useRef<string>("");

  useEffect(() => {
    const path = `${location.pathname}${location.search}${location.hash}`;
    if (path === lastPath.current) return;
    lastPath.current = path;
    analytics.trackPageView(path);
  }, [location]);
}
