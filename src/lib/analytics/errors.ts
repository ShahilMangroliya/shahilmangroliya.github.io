import { analytics } from "./analytics";

/**
 * Installs global browser error handlers that funnel uncaught errors and
 * unhandled promise rejections into the analytics facade as `exception` events.
 * React render errors are captured separately via React 19's root error
 * callbacks in `main.tsx`. Returns a cleanup function.
 */
export function installErrorHandlers(): () => void {
  const onError = (event: ErrorEvent) => {
    analytics.logError(event.error ?? event.message, {
      fatal: false,
      kind: "window.onerror",
      source: event.filename,
      line: event.lineno,
      column: event.colno,
    });
  };

  const onRejection = (event: PromiseRejectionEvent) => {
    analytics.logError(event.reason, {
      fatal: false,
      kind: "unhandledrejection",
    });
  };

  window.addEventListener("error", onError);
  window.addEventListener("unhandledrejection", onRejection);

  return () => {
    window.removeEventListener("error", onError);
    window.removeEventListener("unhandledrejection", onRejection);
  };
}
