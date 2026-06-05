import { useEffect } from "react";
import { analytics } from "@/lib/analytics";
import { AnalyticsEvent } from "@/lib/analytics/events";

/**
 * Wires every "maximum" auto-instrumentation listener once, on mount:
 *  - clicks on any link/button (outbound links flagged)
 *  - scroll-depth milestones (25/50/75/100%)
 *  - section-in-view (once per section)
 *  - engagement time (visible time on page)
 *  - Web Vitals (LCP, CLS, INP, FCP, TTFB)
 * All listeners are cleaned up on unmount.
 */
export function useAutoInstrument(): void {
  useEffect(() => {
    const cleanups = [
      trackClicks(),
      trackScrollDepth(),
      trackSectionViews(),
      trackEngagementTime(),
    ];
    trackWebVitals();
    return () => cleanups.forEach((dispose) => dispose());
  }, []);
}

function isExternal(href: string): boolean {
  try {
    const url = new URL(href, window.location.href);
    if (url.protocol === "mailto:" || url.protocol === "tel:") return true;
    return url.host !== window.location.host;
  } catch {
    return false;
  }
}

function trackClicks(): () => void {
  const handler = (event: MouseEvent) => {
    const start = event.target as Element | null;
    const el = start?.closest("a, button, [data-analytics]") as HTMLElement | null;
    if (!el) return;

    const link = el.closest("a") as HTMLAnchorElement | null;
    const href = link?.href || undefined;
    const label =
      el.dataset.analytics ||
      el.getAttribute("aria-label") ||
      el.textContent?.trim().slice(0, 80) ||
      (link ? "link" : "button");
    const outbound = Boolean(href) && isExternal(href as string);

    analytics.trackEvent(outbound ? AnalyticsEvent.OutboundClick : AnalyticsEvent.Click, {
      label,
      href,
      outbound,
      element: el.tagName.toLowerCase(),
    });
  };

  document.addEventListener("click", handler, true);
  return () => document.removeEventListener("click", handler, true);
}

function trackScrollDepth(): () => void {
  const milestones = [25, 50, 75, 100];
  const fired = new Set<number>();
  let ticking = false;

  const measure = () => {
    ticking = false;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
    for (const milestone of milestones) {
      if (percent >= milestone && !fired.has(milestone)) {
        fired.add(milestone);
        analytics.trackEvent(AnalyticsEvent.ScrollDepth, { percent: milestone });
      }
    }
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(measure);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

function trackSectionViews(): () => void {
  if (typeof IntersectionObserver === "undefined") return () => {};

  const seen = new Set<string>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const id = el.id || el.dataset.analyticsSection || "section";
        if (seen.has(id)) continue;
        seen.add(id);
        analytics.trackEvent(AnalyticsEvent.SectionView, { section: id });
        observer.unobserve(el);
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
  );

  document
    .querySelectorAll<HTMLElement>("section[id], main[id], [data-analytics-section]")
    .forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}

function trackEngagementTime(): () => void {
  let total = 0;
  let activeSince: number | null = document.visibilityState === "visible" ? performance.now() : null;
  let lastReported = 0;

  const accumulate = () => {
    if (activeSince !== null) {
      total += performance.now() - activeSince;
      activeSince = null;
    }
  };

  const report = () => {
    accumulate();
    const seconds = Math.round((total - lastReported) / 1000);
    if (seconds <= 0) return;
    lastReported = total;
    analytics.trackEvent(AnalyticsEvent.EngagementTime, { seconds });
  };

  const onVisibility = () => {
    if (document.visibilityState === "visible") {
      activeSince = performance.now();
    } else {
      report();
    }
  };

  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("pagehide", report);
  return () => {
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("pagehide", report);
  };
}

function trackWebVitals(): void {
  import("web-vitals")
    .then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
      const send = (metric: { name: string; value: number; rating?: string; id: string }) => {
        // CLS is unitless and small; scale so GA4's integer-friendly reports keep precision.
        const value = Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value);
        analytics.trackEvent(AnalyticsEvent.WebVital, {
          metric: metric.name,
          value,
          rating: metric.rating,
          metric_id: metric.id,
        });
      };
      onCLS(send);
      onINP(send);
      onLCP(send);
      onFCP(send);
      onTTFB(send);
    })
    .catch(() => undefined);
}
