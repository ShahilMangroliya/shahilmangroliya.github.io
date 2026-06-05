import type { AnalyticsProvider } from "../types";

/**
 * No-op provider used during SSR/prerender and whenever Firebase config is
 * missing. Implements the full contract but does nothing, so the rest of the
 * app can call analytics unconditionally without guards. (Methods omit their
 * parameters — a narrower signature still satisfies the interface.)
 */
export class NoopProvider implements AnalyticsProvider {
  readonly name = "noop";

  init(): void {}
  trackPageView(): void {}
  trackEvent(): void {}
  setUserProperties(): void {}
  logError(): void {}
}
