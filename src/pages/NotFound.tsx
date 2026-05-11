import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center px-4">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_85%)]" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[820px] rounded-full bg-primary/15 blur-[140px] animate-glow-pulse" aria-hidden />

      <div className="relative z-10 max-w-2xl text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-card/40 backdrop-blur-md pl-1.5 pr-3 py-1.5 mx-auto">
          <Compass className="h-3.5 w-3.5 text-primary" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/80">
            Off the map · 404
          </span>
        </div>

        <h1 className="font-display text-[28vw] sm:text-[200px] font-bold leading-[0.85] tracking-[-0.05em]">
          <span className="text-foreground">4</span>
          <span className="font-serif-italic font-normal text-primary">0</span>
          <span className="text-foreground">4</span>
        </h1>

        <p className="pull-quote text-2xl text-foreground/85 text-left max-w-md mx-auto">
          This page took a turn that wasn't on the route.
        </p>

        <p className="text-foreground/70 max-w-md mx-auto">
          The path <code className="font-mono text-primary">{location.pathname}</code> isn't part of this portfolio. Head back to the index.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-glow"
        >
          <ArrowLeft className="h-4 w-4" />
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
