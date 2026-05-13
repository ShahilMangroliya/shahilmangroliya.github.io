import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const serverDir = path.join(dist, "server");

const SITE = "https://shahilmangroliya.github.io";

const routes = [
  {
    path: "/",
    title: "Shahil Mangroliya · Fractional CTO & AI MVP Engineer for Founders",
    description:
      "Fractional CTO and founding engineer. I help founders ship AI-native MVPs in 4–6 weeks and rescue stalled React Native builds. Ex Head of Engineering at Pointz. Top Rated Plus on Upwork (100% JSS).",
    canonical: `${SITE}/`,
  },
  {
    path: "/projects",
    title: "Selected Projects · Shahil Mangroliya — AI MVP & React Native Builds",
    description:
      "Seven builds by Shahil Mangroliya — Pointz (Head of Engineering), an AI-native MVP shipped as founding engineer, and five client/studio apps. React Native, Spring Boot, AWS, Claude Code.",
    canonical: `${SITE}/projects`,
  },
];

const serverEntry = path.join(serverDir, "entry-server.js");
if (!fs.existsSync(serverEntry)) {
  console.error(`✗ SSR bundle missing at ${serverEntry}`);
  console.error("  Run `vite build --ssr src/entry-server.tsx --outDir dist/server` first.");
  process.exit(1);
}

const { render } = await import(pathToFileURL(serverEntry).href);

const templatePath = path.join(dist, "index.html");
const template = fs.readFileSync(templatePath, "utf-8");

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const patchHead = ({ html, title, description, canonical }) => {
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="title" content="[^"]*" \/>/, `<meta name="title" content="${t}" />`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${d}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${t}" />`)
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${d}" />`,
    )
    .replace(/<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${t}" />`)
    .replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${d}" />`,
    );
};

for (const route of routes) {
  let appHtml;
  try {
    appHtml = render(route.path);
  } catch (err) {
    console.error(`✗ Render failed for ${route.path}:`, err);
    process.exit(1);
  }

  const withApp = template.replace('<div id="root">', `<div id="root">${appHtml}`);
  const withMeta = patchHead({
    html: withApp,
    title: route.title,
    description: route.description,
    canonical: route.canonical,
  });

  const outDir = route.path === "/" ? dist : path.join(dist, route.path.replace(/^\//, ""));
  if (route.path !== "/") fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), withMeta);
  console.log(`✓ Prerendered ${route.path} (${(withMeta.length / 1024).toFixed(1)} kB)`);
}

// Strip the SSR bundle from the deploy artifact.
fs.rmSync(serverDir, { recursive: true, force: true });
console.log("✓ Removed dist/server (not shipped to GitHub Pages)");
