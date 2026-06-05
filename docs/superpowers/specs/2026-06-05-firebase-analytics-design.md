# Firebase Analytics + Error Tracking — Design

**Date:** 2026-06-05
**Status:** Approved, implementing
**Project:** ShahilPortfolio (Vite + React 19 + TS, SSR-prerendered, GitHub Pages)

## Goal

Capture maximum user/event data on the portfolio site, behind a **provider-agnostic
abstraction** so the underlying vendor (Firebase) can be swapped without touching any
component code.

## Decisions (locked)

- **Error tracking:** Firebase-only. Crashlytics has **no web SDK** — it is iOS/Android/
  Flutter/Unity only. "Crash" capture on web = uncaught JS errors logged as the GA4
  reserved `exception` event. No second vendor.
- **Consent:** Fire immediately on load. **No consent/cookie banner.**
- **Event coverage:** Maximum auto-instrumentation.
- **Firebase project:** `shahil-portfolio-1c990`, measurement ID `G-E4NDZYW6DG`.
  The web `apiKey` is a public identifier (not a secret) and is safe in the client bundle.

## Architecture — one interface, one facade

```
AnalyticsProvider (interface)   ← the contract every vendor implements
   ├─ FirebaseProvider           ← the only real impl now (Analytics + Performance)
   └─ NoopProvider               ← server (SSR) + missing-config fallback
analytics (singleton facade)    ← the ONLY thing app code imports
```

- Components/hooks call the `analytics` facade only — never Firebase directly.
- **Swapping vendors** = write a new `XProvider` implementing `AnalyticsProvider` and
  change one line in the facade. Components are untouched.
- **SSR-safe:** facade no-ops when `typeof window === "undefined"`. Firebase is loaded via
  **dynamic `import()` inside the provider**, so the Node SSR/prerender build never pulls it.
- **Init queue:** events fired before async Firebase init completes are queued, then flushed.

### Interface surface

`init()`, `trackPageView(path, params?)`, `trackEvent(name, params?)`,
`setUserProperties(props)`, `logError(error, context?)`.

## File layout

```
src/lib/analytics/
  types.ts            AnalyticsProvider interface + shared types
  config.ts           reads VITE_FIREBASE_* (pasted values as defaults)
  events.ts           central catalog of event-name constants
  analytics.ts        singleton facade: SSR guard, init queue, swap point
  errors.ts           global window error / unhandledrejection handlers
  index.ts            public barrel
  providers/
    firebase.ts       Firebase Analytics + Performance (dynamic import)
    noop.ts           server / missing-config fallback
src/hooks/
  use-page-tracking.ts    route change -> page_view
  use-auto-instrument.ts  delegated clicks, scroll depth, section views, engagement, vitals
src/components/
  AnalyticsProvider.tsx   mounts init + hooks once; dropped into AppRoutes (inside router)
```

React render errors are captured via **React 19's `onUncaughtError` / `onCaughtError`
root callbacks in `main.tsx`** (no class error boundary — keeps the "functional
components only" convention). Firebase's automatic `page_view` is disabled
(`send_page_view: false`) so `usePageTracking` is the single source of truth.

## What gets captured

| Event | Source |
|-------|--------|
| `page_view` | route change (`/`, `/projects`, hash sections) |
| `click` | one delegated `document` listener over every `<a>`/`<button>` — outbound links (GitHub, LinkedIn, Upwork, `mailto:`), CTAs; captures text + href + optional `data-analytics` name |
| `scroll_depth` | 25 / 50 / 75 / 100 % milestones |
| `section_view` | IntersectionObserver over `<section>`/`[id]` blocks |
| `engagement_time` | `visibilitychange` / `pagehide` |
| Web Vitals (LCP, CLS, INP, FCP, TTFB) | `web-vitals` lib -> `trackEvent` |
| page-load + network timings | Firebase Performance Monitoring (auto) |
| `exception` | `window.onerror`, `unhandledrejection`, React error boundary — message, stack, route, `fatal` flag |

## Config & deploy

- `config.ts` reads `import.meta.env.VITE_FIREBASE_*` with **no committed fallback values** —
  config never lives in source.
- **Local dev:** values in `.env.local` (gitignored via `*.local`). `.env.example` documents them.
- **CI / GitHub Pages:** the 7 `VITE_FIREBASE_*` values are stored as **GitHub Actions secrets**
  and injected into the `npm run build` step's `env:` in `.github/workflows/deploy.yml`. Vite
  bakes the prefixed vars into the client bundle at build time.
- Missing config → `hasValidFirebaseConfig` is false → no-op provider; the build still succeeds.

## Dependencies

- `firebase` (Analytics + Performance)
- `web-vitals` (~2 KB) for the vitals events

Both are isolated behind the facade; everything else is hand-rolled to stay replaceable.

## Non-goals (YAGNI)

- No consent banner / cookie UI.
- No second error vendor (Sentry) — can be added later as another `AnalyticsProvider`.
- No backend; static GitHub Pages only.
