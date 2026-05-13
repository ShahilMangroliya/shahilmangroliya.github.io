import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AppRoutes from "./AppRoutes.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const tree = (
  <App>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </App>
);

// Hydrate on top of prerendered HTML when present; otherwise mount fresh.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
