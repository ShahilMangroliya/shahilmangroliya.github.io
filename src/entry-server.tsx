import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import AppRoutes from "./AppRoutes";

export function render(url: string): string {
  return renderToString(
    <App>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </App>,
  );
}
