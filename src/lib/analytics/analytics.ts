import { analyticsDebug, hasValidFirebaseConfig } from "./config";
import { FirebaseProvider } from "./providers/firebase";
import { NoopProvider } from "./providers/noop";
import type { AnalyticsParams, AnalyticsProvider } from "./types";

const isBrowser = typeof window !== "undefined";

// ---------------------------------------------------------------------------
// SWAP POINT
// To replace Firebase, implement AnalyticsProvider in providers/ and return it
// here. Nothing else in the app needs to change.
// ---------------------------------------------------------------------------
function createProvider(): AnalyticsProvider {
  if (!isBrowser || !hasValidFirebaseConfig) return new NoopProvider();
  return new FirebaseProvider();
}

/**
 * Singleton facade every component/hook imports. It is SSR-safe (no-ops on the
 * server), boots the real provider asynchronously, and queues any events fired
 * before init finishes, flushing them once the provider is ready.
 */
class Analytics {
  private provider: AnalyticsProvider = new NoopProvider();
  private ready = false;
  private initStarted = false;
  private queue: Array<() => void> = [];

  async init(): Promise<void> {
    if (this.initStarted || !isBrowser) return;
    this.initStarted = true;

    const provider = createProvider();
    try {
      await provider.init();
      this.provider = provider;
    } catch (error) {
      // Analytics must never break the site — fall back to the no-op provider.
      this.debug("init failed, using noop", error);
      this.provider = new NoopProvider();
    }

    this.ready = true;
    const queued = this.queue;
    this.queue = [];
    for (const call of queued) call();
  }

  trackPageView(path: string, params?: AnalyticsParams): void {
    this.debug("page_view", path, params);
    this.run((p) => p.trackPageView(path, params));
  }

  trackEvent(name: string, params?: AnalyticsParams): void {
    this.debug("event", name, params);
    this.run((p) => p.trackEvent(name, params));
  }

  setUserProperties(props: AnalyticsParams): void {
    this.run((p) => p.setUserProperties(props));
  }

  logError(error: unknown, context?: AnalyticsParams): void {
    this.debug("error", error, context);
    this.run((p) => p.logError(error, context));
  }

  /** Active provider name — handy for debugging which backend is live. */
  get activeProvider(): string {
    return this.provider.name;
  }

  private run(call: (provider: AnalyticsProvider) => void): void {
    if (!isBrowser) return;
    const exec = () => {
      try {
        call(this.provider);
      } catch (error) {
        this.debug("call failed", error);
      }
    };
    if (this.ready) exec();
    else this.queue.push(exec);
  }

  private debug(...args: unknown[]): void {
    if (analyticsDebug) console.debug("[analytics]", ...args);
  }
}

export const analytics = new Analytics();
