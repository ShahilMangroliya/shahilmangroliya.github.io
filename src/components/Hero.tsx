import { Github, Linkedin, Mail, ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import portrait from "@/assets/image/1.jpg";

const UPWORK_URL = "https://www.upwork.com/freelancers/~014ca1b42c6232598c";

const stack = [
  "React Native",
  "TypeScript",
  "Node.js",
  "Python",
  "Spring Boot",
  "AWS",
  "PostgreSQL",
  "Stripe",
  "RevenueCat",
  "Mapbox",
  "Firebase",
  "Docker",
  "Next.js",
  "Claude Code",
];

const stats = [
  { value: "5+", label: "Years shipping", note: "since 2020" },
  { value: "100K+", label: "App downloads", note: "MoodMe · iOS + Android" },
  { value: "65%", label: "AWS cost cut", note: "while at Pointz" },
  { value: "4", label: "Apps shipped", note: "iOS + Android, live today" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-20 md:pb-28">
      {/* Subtle radial atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, hsl(38 92% 50% / 0.08), transparent 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Status row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-12 md:mb-16 animate-fade-down">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="status-pill">
              <span className="status-dot" />
              Available · Full-time (remote) + select contract
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.24em] text-muted-foreground">
            <span>Surat · India</span>
            <span className="h-px w-8 bg-border" />
            <span>GMT +05:30</span>
          </div>
        </div>

        {/* Headline grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          {/* Left — name + tagline */}
          <div className="lg:col-span-8 space-y-7 order-2 lg:order-1">
            <p
              className="section-tag animate-fade-down"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="section-tag__bar" />
              <span>Portfolio · 2026</span>
            </p>

            <h1
              className="font-display h-display animate-fade-up"
              style={{ fontWeight: 600 }}
            >
              <span className="block text-foreground">Shahil</span>
              <span className="block">
                <span className="text-foreground">Mangroliya</span>
                <span className="text-primary">.</span>
              </span>
            </h1>

            {/* Title / employment identity — leads for the recruiter path */}
            <p
              className="font-mono text-[12px] md:text-[13.5px] uppercase tracking-[0.2em] text-foreground/90 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              <span className="block">
                Senior Software Engineer
                <span className="text-muted-foreground"> · Full-Stack · Mobile · Cloud</span>
              </span>
              <span className="block mt-1.5">
                <span className="text-primary">ex-Head of Engineering</span>
                <span className="text-muted-foreground"> @ </span>
                <a
                  href="https://www.bikepointz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-foreground"
                >
                  Pointz
                </a>
              </span>
            </p>

            <p
              className="max-w-2xl text-[17px] md:text-xl leading-[1.5] text-ink-soft animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Senior engineer who owns products{" "}
              <span className="text-foreground font-medium">end-to-end</span> —
              mobile, backend, cloud, and security. Five years shipping in
              production: sole technical owner of a{" "}
              <span className="text-foreground font-medium">
                consumer navigation platform
              </span>
              , and founding engineer on an{" "}
              <span className="text-foreground font-medium">AI-native MVP</span>.
            </p>

            {/* Full-time signal — visually secondary, opens the recruiter door */}
            <div
              className="flex items-start gap-4 max-w-2xl pt-1 animate-fade-up"
              style={{ animationDelay: "0.28s" }}
            >
              <span className="mt-2 h-px w-10 bg-primary/60 shrink-0" aria-hidden />
              <p className="text-[14px] md:text-[15px] text-ink-soft leading-[1.65]">
                <span className="eyebrow eyebrow--accent mr-2">Open to</span>
                Senior/staff full-time roles (remote) — and select fractional &amp;
                MVP engagements.
              </p>
            </div>

            <div
              className="flex items-start gap-4 max-w-2xl pt-1 animate-fade-up"
              style={{ animationDelay: "0.34s" }}
            >
              <span className="mt-2 h-px w-10 bg-border shrink-0" aria-hidden />
              <p className="text-[14px] md:text-[15px] text-ink-soft leading-[1.65]">
                <span className="eyebrow mr-2">Now</span>
                Most recent: founding engineer at a stealth AI startup —
                shipped the MVP solo with Claude Code (Dec 2025 → Apr 2026).
              </p>
            </div>

            {/* CTA row */}
            <div
              className="flex flex-wrap items-center gap-3 pt-4 animate-fade-up"
              style={{ animationDelay: "0.45s" }}
            >
              <Link to="/projects" className="btn-primary group">
                <span>Selected projects</span>
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Shahil-Mangroliya-Resume.pdf"
                className="btn-ghost group"
              >
                <FileText className="h-4 w-4" />
                <span>Download résumé</span>
              </a>
              <a href="#contact" className="btn-ghost group">
                <Mail className="h-4 w-4" />
                <span>Start a conversation</span>
              </a>
            </div>
          </div>

          {/* Right — portrait */}
          <aside
            className="lg:col-span-4 order-1 lg:order-2 animate-fade-up"
            style={{ animationDelay: "0.18s" }}
          >
            <figure className="group/portrait relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] lg:ml-auto">
              <div className="relative rounded-2xl border border-border/70 bg-card/40 p-2.5 transition-transform duration-700 ease-out group-hover/portrait:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <img
                    src={portrait}
                    alt="Shahil Mangroliya — founding engineer and fractional CTO"
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover/portrait:scale-[1.04]"
                  />
                  {/* Bottom gradient for caption legibility */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%]"
                    style={{
                      background:
                        "linear-gradient(to top, hsl(225 14% 4% / 0.92), transparent)",
                    }}
                    aria-hidden
                  />
                  {/* Subtle ring */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"
                    aria-hidden
                  />

                  <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-12">
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-primary/90 mb-2">
                          Senior Software Engineer
                        </p>
                        <p className="font-display text-[22px] leading-[1] tracking-[-0.025em] text-white">
                          Shahil Mangroliya
                        </p>
                        <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.26em] text-white/55">
                          Surat · GMT +5:30
                        </p>
                      </div>
                      <span className="shrink-0 inline-flex items-center rounded-md border border-white/15 bg-white/[0.06] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm">
                        2026
                      </span>
                    </div>
                  </figcaption>
                </div>
              </div>

              {/* Bottom meta line */}
              <div className="mt-3 flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.24em] text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
                  In studio
                </span>
                <span>v · 2026.05</span>
              </div>
            </figure>
          </aside>
        </div>

        {/* Social rail */}
        <div
          className="mt-16 flex flex-wrap items-center gap-2 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="https://github.com/ShahilMangroliya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid place-items-center h-11 w-11 rounded-full border border-border/70 bg-card/40 text-foreground/85 transition-all duration-300 hover:border-primary/60 hover:text-primary"
          >
            <Github className="h-[17px] w-[17px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/shahil-mangroliya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center h-11 w-11 rounded-full border border-border/70 bg-card/40 text-foreground/85 transition-all duration-300 hover:border-primary/60 hover:text-primary"
          >
            <Linkedin className="h-[17px] w-[17px]" />
          </a>
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork profile"
            className="inline-flex items-center gap-2 h-11 px-4 rounded-full border border-border/70 bg-card/40 text-foreground/85 transition-all duration-300 hover:border-primary/60 hover:text-primary"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Upwork</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Stats — refined editorial grid */}
        <div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60 animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="relative bg-background px-6 py-7 md:py-9 transition-colors hover:bg-card/40"
            >
              <p className="eyebrow mb-3 flex items-center gap-2.5">
                <span className="text-primary font-medium">{String(i + 1).padStart(2, "0")}</span>
                <span>{s.label}</span>
              </p>
              <p className="font-display text-4xl md:text-5xl text-foreground leading-none tracking-[-0.04em]">
                {s.value}
              </p>
              <p className="mt-2.5 text-[13px] text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>

        {/* Daily stack — restrained chips, not marquee */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="eyebrow eyebrow--accent">Daily stack</span>
            <div className="hairline h-px flex-1" />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <span key={s} className="tag-chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
