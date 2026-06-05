import type { Analytics } from "firebase/analytics";
import type { AnalyticsParams, AnalyticsProvider } from "../types";
import { firebaseConfig } from "../config";

const truncate = (value: string, max: number): string =>
  value.length > max ? `${value.slice(0, max)}…` : value;

/**
 * Firebase Analytics (GA4) + Performance Monitoring provider.
 *
 * Firebase is pulled in via dynamic `import()` inside `init()` so the module
 * never evaluates during the Node SSR/prerender build — it only loads in the
 * browser, after the page mounts.
 */
export class FirebaseProvider implements AnalyticsProvider {
  readonly name = "firebase";

  private analytics: Analytics | null = null;
  private emit: ((name: string, params?: AnalyticsParams) => void) | null = null;
  private setProps: ((props: AnalyticsParams) => void) | null = null;

  async init(): Promise<void> {
    const [{ initializeApp }, analyticsMod] = await Promise.all([
      import("firebase/app"),
      import("firebase/analytics"),
    ]);
    const { initializeAnalytics, isSupported, logEvent, setUserProperties } = analyticsMod;

    // Bails out in environments where GA isn't available (e.g. some privacy modes).
    if (!(await isSupported())) return;

    const app = initializeApp(firebaseConfig);
    // `send_page_view: false` disables gtag's automatic page_view so our own
    // route-aware usePageTracking is the single source of truth (no double count).
    const ga = initializeAnalytics(app, { config: { send_page_view: false } });
    this.analytics = ga;
    this.emit = (name, params) => logEvent(ga, name, params);
    this.setProps = (props) => setUserProperties(ga, props);

    // Performance Monitoring (auto page-load + network traces). Best-effort:
    // never let it block or break analytics.
    import("firebase/performance")
      .then(({ getPerformance }) => getPerformance(app))
      .catch(() => undefined);
  }

  trackPageView(path: string, params?: AnalyticsParams): void {
    this.emit?.("page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
      ...params,
    });
  }

  trackEvent(name: string, params?: AnalyticsParams): void {
    this.emit?.(name, params);
  }

  setUserProperties(props: AnalyticsParams): void {
    this.setProps?.(props);
  }

  logError(error: unknown, context?: AnalyticsParams): void {
    const isError = error instanceof Error;
    const description = isError ? `${error.name}: ${error.message}` : String(error);
    const stack = isError ? error.stack : undefined;
    this.emit?.("exception", {
      description: truncate(description, 150),
      fatal: Boolean(context?.fatal),
      ...(stack ? { error_stack: truncate(stack, 500) } : {}),
      ...context,
    });
  }
}
