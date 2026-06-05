import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AppRoutes from "./AppRoutes.tsx";
import { analytics } from "./lib/analytics";
import "./index.css";

const container = document.getElementById("root")!;
const tree = (
  <App>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </App>
);

// Capture React render-phase errors (React 19 root callbacks) as `exception`
// events — the web-app equivalent of "crash" reporting.
const reportReactError = (
  error: unknown,
  errorInfo: { componentStack?: string | null },
) => {
  analytics.logError(error, {
    fatal: true,
    kind: "react",
    component_stack: errorInfo.componentStack?.slice(0, 500),
  });
};

const errorOptions = {
  onUncaughtError: reportReactError,
  onCaughtError: reportReactError,
};

// Hydrate on top of prerendered HTML when present; otherwise mount fresh.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree, errorOptions);
} else {
  createRoot(container, errorOptions).render(tree);
}
