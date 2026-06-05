/**
 * Vendor-agnostic analytics contract.
 *
 * Every component and hook in the app talks to the `analytics` facade, which
 * delegates to whichever provider implements this interface. To replace
 * Firebase, write a new class implementing `AnalyticsProvider` and swap it in
 * `analytics.ts` — no app code changes.
 */
export type AnalyticsParams = Record<string, unknown>;

export interface AnalyticsProvider {
  /** Human-readable name, for debugging and to make the active provider obvious. */
  readonly name: string;

  /** Initialise the provider. Browser-only; may be async. */
  init(): Promise<void> | void;

  /** Record a page / route view. */
  trackPageView(path: string, params?: AnalyticsParams): void;

  /** Record an arbitrary named event. */
  trackEvent(name: string, params?: AnalyticsParams): void;

  /** Attach properties to the current user (e.g. GA4 user properties). */
  setUserProperties(props: AnalyticsParams): void;

  /** Record an error / "crash" (mapped to the GA4 `exception` event). */
  logError(error: unknown, context?: AnalyticsParams): void;
}
