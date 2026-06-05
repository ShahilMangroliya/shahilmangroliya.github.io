/**
 * Firebase web config, sourced entirely from `VITE_FIREBASE_*` environment vars
 * so no Firebase config lives in the repo.
 *
 *  - Local dev: put the values in `.env.local` (gitignored). See `.env.example`.
 *  - CI / GitHub Pages: injected at build time from GitHub Actions secrets
 *    (see `.github/workflows/deploy.yml`).
 *
 * When the vars are absent the app falls back to the no-op analytics provider,
 * so a build never fails for missing config. (The Firebase web apiKey is a
 * public identifier rather than a true secret, but sourcing it from env keeps
 * configuration out of source control and lets each environment point at its
 * own project.)
 */
const env = import.meta.env as unknown as Record<string, string | boolean | undefined>;

const read = (key: string): string => {
  const value = env[key];
  return typeof value === "string" ? value.trim() : "";
};

export const firebaseConfig = {
  apiKey: read("VITE_FIREBASE_API_KEY"),
  authDomain: read("VITE_FIREBASE_AUTH_DOMAIN"),
  projectId: read("VITE_FIREBASE_PROJECT_ID"),
  storageBucket: read("VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: read("VITE_FIREBASE_MESSAGING_SENDER_ID"),
  appId: read("VITE_FIREBASE_APP_ID"),
  measurementId: read("VITE_FIREBASE_MEASUREMENT_ID"),
} as const;

/** Whether we have enough config to initialise Firebase Analytics at all. */
export const hasValidFirebaseConfig =
  firebaseConfig.apiKey.length > 0 &&
  firebaseConfig.appId.length > 0 &&
  firebaseConfig.measurementId.length > 0;

/** Verbose console logging of every tracked event. On in dev or via env flag. */
export const analyticsDebug =
  env.VITE_ANALYTICS_DEBUG === "true" || import.meta.env.DEV === true;
