# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev        # Vite dev server on http://localhost:8080 (host "::")
npm run build      # Production build to dist/
npm run build:dev  # Build with development mode (sourcemaps, no minification)
npm run preview    # Serve the production build locally
npm run lint       # ESLint over the whole project
```

There is no test framework configured — do not invent test commands.

Both `bun.lockb` and `package-lock.json` exist; the GitHub Actions deploy uses `npm ci`, so prefer npm for dependency changes to keep the lockfiles in sync.

## Architecture

Single-page portfolio site (Vite + React 19 + TypeScript). The "app" is one scrollable page composed of section components.

- **Entry**: `src/main.tsx` → `src/App.tsx` wraps the tree in `QueryClientProvider`, `TooltipProvider`, two toaster providers (shadcn `Toaster` and `sonner`), and `BrowserRouter`.
- **Routing**: Only two routes — `/` → `src/pages/Index.tsx` and `*` → `src/pages/NotFound.tsx`. The comment in `App.tsx` notes that any new custom routes must be added **above** the catch-all `*` route.
- **Page composition**: `Index.tsx` is just a vertical stack of section components from `src/components/` (`Navigation`, `Hero`, `Experience`, `Skills`, `Education`, `Contact`, `Footer`). Each section is a single self-contained file — there is no shared section framework. To add a new section, create a component in `src/components/` and import it into `Index.tsx` in the desired order.
- **UI primitives**: `src/components/ui/` holds shadcn/ui components (button, card, sonner, toast, toaster, tooltip). Configured via `components.json` with baseColor `slate`, CSS variables, alias `@/components/ui`. Add new shadcn components via the shadcn CLI rather than hand-rolling.
- **Path alias**: `@/*` → `src/*` (configured in both `vite.config.ts` and `tsconfig.json`). Always import via `@/...` rather than relative paths.

## Styling

- Tailwind CSS with custom theme tokens defined as HSL CSS variables (see `tailwind.config.ts` + `src/index.css`). Colors are referenced via semantic names (`bg-background`, `text-primary`, `bg-card`, etc.), not raw palette values.
- Custom gradients (`bg-gradient-primary`, `bg-gradient-glow`, `bg-gradient-card`) and shadows (`shadow-glow`, `shadow-glow-secondary`, `shadow-card`) are driven by CSS variables — don't replace them with arbitrary Tailwind utilities.
- Custom animations available: `animate-fade-in`, `animate-fade-in-left`, `animate-fade-in-right`, `animate-glow-pulse`, `animate-float`, `animate-slide-up` (defined in `tailwind.config.ts`).
- Dark mode is class-based (`darkMode: ["class"]`).

## Deployment

`.github/workflows/deploy.yml` deploys to GitHub Pages on every push to `main` (and via manual `workflow_dispatch`). The job runs `npm ci` → `npm run build` → uploads `dist/` as the Pages artifact. Vite `base` is `/` (root domain deploy at https://shahilmangroliya.github.io/), so do not change `base` to a subpath without updating the deploy target.

## Conventions

- React 19 + functional components only. No class components.
- TanStack Query's `QueryClient` is mounted but the portfolio is currently static — no queries are issued. If adding data fetching, reuse the existing `queryClient` from `App.tsx` rather than creating a new one.
- Toasts: two systems are wired up simultaneously — shadcn's `useToast` hook (`@/hooks/use-toast`) and `sonner`. Prefer `sonner` for new code unless you specifically need the shadcn toast API.
