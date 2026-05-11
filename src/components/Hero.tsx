import { Github, Linkedin, Mail, ArrowDownRight, Sparkles, Compass, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const UPWORK_URL = "https://www.upwork.com/freelancers/~014ca1b42c6232598c";

const stack = [
  "React Native", "TypeScript", "Node.js", "Python", "Spring Boot",
  "AWS", "PostgreSQL", "MongoDB", "Stripe", "RevenueCat",
  "Mapbox", "Firebase", "Docker", "Next.js", "Redux",
  "Claude Code", "PKCE", "SSL Pinning",
];

const stats = [
  { label: "Years shipping", value: "5+", note: "since 2020" },
  { label: "Upwork JSS", value: "100%", note: "Top Rated Plus · top 3%" },
  { label: "AWS cost cut", value: "65%", note: "while at Pointz" },
  { label: "App downloads", value: "100K+", note: "MoodMe — iOS + Android" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24 pb-16 md:pt-28">
      {/* Layered background */}
      <div className="absolute inset-0 grid-bg opacity-[0.45]" aria-hidden />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_30%,transparent_80%)]" aria-hidden>
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-primary/20 blur-[140px] animate-glow-pulse" />
        <div className="absolute top-[55%] left-[18%] h-[300px] w-[300px] rounded-full bg-secondary/15 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.2s" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Status row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10 md:mb-14 animate-fade-down">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-card/40 backdrop-blur-md pl-1.5 pr-3 py-1.5">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-glow-pulse" />
                <span className="absolute inset-0 rounded-full bg-primary blur-[3px] opacity-70" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/80">
                Building · AI-native stealth startup · Pointz on retainer
              </span>
            </div>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              aria-label="Upwork — Top Rated Plus profile"
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              Top Rated Plus · 100% JSS
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>Surat · GMT+05:30</span>
            <span className="h-px w-8 bg-border" />
            <span>Open to work</span>
          </div>
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-9 space-y-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-3 animate-fade-down" style={{ animationDelay: "0.05s" }}>
              <span className="text-primary">⌘</span>
              <span>Portfolio / 2026 / v1</span>
            </div>

            <h1 className="font-display font-bold leading-[0.92] tracking-[-0.045em] text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.2vw] xl:text-[8.4vw] animate-fade-in">
              <span className="block text-foreground">Shahil</span>
              <span className="block">
                <span className="text-foreground">Mangroliya</span>
                <span className="text-primary animate-blink">.</span>
              </span>
            </h1>

            <p className="max-w-2xl text-lg md:text-2xl leading-snug text-foreground/85 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="text-foreground">Senior Software Engineer</span>{" "}
              <span className="text-muted-foreground">·</span>{" "}
              <span className="text-primary">ex Head of Engineering</span>{" "}
              building secure, scalable systems across mobile, backend, and cloud. Currently building an AI-native stealth startup; previously owned <span className="underline decoration-primary/60 underline-offset-4">Pointz</span>, the safer-bike-mapping platform, end-to-end.
            </p>
          </div>

          {/* Right meta column */}
          <aside className="lg:col-span-3 lg:pl-6 lg:border-l lg:border-border/60 space-y-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="space-y-1.5">
              <p className="label-mono">Index</p>
              <ul className="space-y-1 font-mono text-[12px] text-foreground/80">
                <li className="flex justify-between gap-3"><a href="#work" className="hover:text-primary transition-colors">01 — Work</a><span className="text-muted-foreground">timeline</span></li>
                <li className="flex justify-between gap-3"><a href="#skills" className="hover:text-primary transition-colors">02 — Stack</a><span className="text-muted-foreground">tools</span></li>
                <li className="flex justify-between gap-3"><Link to="/projects" className="hover:text-primary transition-colors">03 — Projects</Link><span className="text-muted-foreground">six builds</span></li>
                <li className="flex justify-between gap-3"><a href="#contact" className="hover:text-primary transition-colors">04 — Contact</a><span className="text-muted-foreground">say hi</span></li>
              </ul>
            </div>
            <div className="space-y-1.5">
              <p className="label-mono">Now</p>
              <p className="text-sm text-foreground/85 leading-relaxed">
                Building an AI-native stealth startup full-time — Claude Code, custom skills, subagent workflows. Pointz on retainer for ad-hoc fixes and maintenance.
              </p>
            </div>
          </aside>
        </div>

        {/* CTA + Social */}
        <div className="mt-14 flex flex-wrap items-center gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: "0.45s" }}>
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:shadow-glow"
          >
            <span>See selected projects</span>
            <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-border/80 bg-card/40 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/85 backdrop-blur-md transition-all duration-300 hover:border-primary/60 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            <span>hi@shahil — open a thread</span>
          </a>
          <div className="ml-auto flex items-center gap-2">
            <a
              href="https://github.com/ShahilMangroliya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid place-items-center h-11 w-11 rounded-full border border-border/70 bg-card/40 backdrop-blur-md text-foreground/85 transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-glow"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahil-mangroliya/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center h-11 w-11 rounded-full border border-border/70 bg-card/40 backdrop-blur-md text-foreground/85 transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-glow"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork profile (Top Rated Plus)"
              className="grid place-items-center h-11 px-3.5 rounded-full border border-border/70 bg-card/40 backdrop-blur-md text-foreground/85 transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-glow"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold">Upwork</span>
            </a>
          </div>
        </div>

        {/* Stat strip */}
        <div className="corner-frame relative mt-16 p-3 md:p-4 animate-fade-in" style={{ animationDelay: "0.55s" }}>
          <span className="corner-frame__b1" aria-hidden />
          <span className="corner-frame__b2" aria-hidden />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="relative bg-background/95 backdrop-blur px-5 py-6 md:py-7 group hover:bg-card/70 transition-colors"
            >
              <p className="label-mono mb-2 flex items-center gap-2">
                <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>{s.label}</span>
              </p>
              <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-none tracking-[-0.04em]">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
              <Sparkles className="absolute right-4 top-4 h-3.5 w-3.5 text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
          </div>
        </div>

        {/* Stack marquee */}
        <div className="mt-14 relative">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="h-3.5 w-3.5 text-primary" />
            <p className="label-mono">Daily stack</p>
            <div className="hairline h-px flex-1" />
          </div>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            <div className="flex w-max marquee-track gap-3">
              {[...stack, ...stack].map((s, i) => (
                <span
                  key={`${s}-${i}`}
                  className="tag-chip whitespace-nowrap"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
