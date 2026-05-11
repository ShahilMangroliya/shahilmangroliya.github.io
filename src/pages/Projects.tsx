import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowLeft,
  Mail,
  Bike,
  Heart,
  Search,
  PhoneCall,
  CloudSun,
  Network,
  Sparkles,
  Shield,
  Zap,
  TrendingDown,
  Users,
  Waves,
  Star,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectVisual from "@/components/ProjectVisual";

type Stat = { value: string; label: string };

type VisualKind =
  | "pointz"
  | "moodme"
  | "trace-bust"
  | "prank-caller"
  | "stormglass"
  | "madina"
  | "surf-club";

type Review = {
  rating: number;
  quote: string;
  attribution: string;
};

type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  blurb: string;
  role: string;
  status: "Shipping" | "Side build" | "Shipped" | "Archived";
  year: string;
  stack: string[];
  highlights: string[];
  stats?: Stat[];
  icon: typeof Bike;
  accent: "primary" | "secondary";
  link?: { href: string; label: string };
  github?: string;
  visual: VisualKind;
  review?: Review;
};

const featured: Project = {
  id: "pointz",
  index: "00",
  name: "Pointz — Safer Bike Mapping",
  tagline: "Navigation for cyclists, owned end-to-end.",
  blurb:
    "Pointz is a community-powered navigation app for cyclists. I've owned its stack across three roles — frontend → full-stack → Head of Engineering — re-architecting the navigation core, designing the security baseline, hardening the API tier, and slashing infrastructure spend.",
  role: "Former Head of Engineering · now on ad-hoc maintenance retainer",
  status: "Shipping",
  year: "2022 → now",
  stack: [
    "React Native", "Java Spring Boot", "PostgreSQL", "AWS (EC2, RDS, S3)",
    "Mapbox", "Firebase", "Stripe", "RevenueCat", "PKCE", "SSL pinning", "CodePush",
  ],
  highlights: [
    "Re-architected the on-device navigation system — better TTS, smarter re-routing, smoother turn-by-turn UX.",
    "Designed crowdsourcing primitives for hazards, shortcuts, and amenities (client + server).",
    "Migrated payments to In-App Purchases via RevenueCat + Stripe for web — boosting profit per active subscriber.",
    "Built the platform's security baseline: auth/session tokens, PKCE, SSL pinning, nonce validation, encryption at rest & in flight.",
    "Reduced AWS spend 65% through EC2/RDS right-sizing and aggressive resource management.",
  ],
  stats: [
    { value: "65%", label: "AWS cost reduction" },
    { value: "3 roles", label: "FE → FS → Head of Eng" },
    { value: "Retainer", label: "ad-hoc maintenance today" },
  ],
  icon: Bike,
  accent: "primary",
  link: { href: "https://www.bikepointz.com", label: "bikepointz.com" },
  visual: "pointz",
  review: {
    rating: 5,
    quote:
      "Shahil is one of the most talented engineers and people I have met in my life. We have increased our output for our mobile app by 10x solely because of his work.",
    attribution: "Trisha B. — CTO, Pointz (Verified on Upwork, Jul 2023)",
  },
};

const projects: Project[] = [
  {
    id: "stealth-ai",
    index: "01",
    name: "Stealth — AI-native startup",
    tagline: "My current full-time bet. AI workflows at the core.",
    blurb:
      "The product I'm building right now, full-time. Claude Code, custom skills, and subagent workflows sit at the center of the engineering loop — not bolted on. Architecture, naming, and details intentionally private until launch.",
    role: "Solo founder / engineer · stealth — primary focus",
    status: "Shipping",
    year: "2025 — present",
    stack: ["Claude Code", "Custom skills", "Subagent workflows", "AI orchestration", "TypeScript", "Python"],
    highlights: [
      "Full-time owner of product, engineering, and AI workflow design.",
      "Composing Claude Code skills and subagents into a daily engineering loop that compresses cycle time.",
      "Designing the product so AI is a first-class collaborator, not a fallback.",
      "More details public after launch.",
    ],
    stats: [
      { value: "Full-time", label: "primary work" },
      { value: "AI-native", label: "core loop" },
    ],
    icon: Sparkles,
    accent: "primary",
    visual: "madina",
  },
  {
    id: "madina",
    index: "02",
    name: "Madina Network Analysis",
    tagline: "Surfacing patterns in network data.",
    blurb:
      "A completed Python build using the Madina library to study network behavior and pull out structural patterns — explored applications to streets, cyclists, and route choice.",
    role: "Side build · solo",
    status: "Shipped",
    year: "2024 — 2025",
    stack: ["Python", "Madina", "Jupyter", "NetworkX"],
    highlights: [
      "Pipeline that ingests graph-shaped data and exposes pattern-level views.",
      "Applied the techniques to mobility data — streets, cyclists, route choice.",
      "Closed once the experiment delivered its insights; learnings carried into current work.",
    ],
    icon: Network,
    accent: "secondary",
    visual: "madina",
  },
  {
    id: "surf-club",
    index: "03",
    name: "Global Surf Club — React Native build",
    tagline: "Mobile build for a community surf brand.",
    blurb:
      "A React Native build delivered as a fixed-price engagement on Upwork. Closed at 5.0 stars with a 100% recommendation review.",
    role: "Freelance React Native Developer · Global Surf Club",
    status: "Shipped",
    year: "2022",
    stack: ["React Native", "iOS", "Android", "Mobile UI"],
    highlights: [
      "Delivered a fixed-price mobile build end-to-end inside an Upwork engagement.",
      "Closed the contract at 5.0 stars — \"Lovely guy, 100% recommend\" from the client.",
    ],
    stats: [
      { value: "5.0", label: "Upwork rating" },
      { value: "Fixed price", label: "engagement" },
    ],
    icon: Waves,
    accent: "secondary",
    visual: "surf-club",
    review: {
      rating: 5,
      quote: "Lovely guy, 100% recommend.",
      attribution: "Global Surf Club — Upwork client, Nov 2022",
    },
  },
  {
    id: "moodme",
    index: "04",
    name: "MoodMe — Relationship Mood",
    tagline: "Daily check-ins for couples.",
    blurb:
      "A mood-tracking app for relationships. I led the messaging + deep-linking work and stabilised the app across a long tail of devices. It crossed 100K downloads across iOS and Android.",
    role: "React Native Developer · Artistry Solutions",
    status: "Shipped",
    year: "2020 — 2022",
    stack: ["React Native", "Firebase", "Firebase Messaging", "Deep Links"],
    highlights: [
      "Wired Firebase messaging with deep links into the right surfaces.",
      "Bug-bashed the long tail of device-specific crashes — meaningful stability lift.",
      "Helped the app cross 100K+ downloads across iOS and Android.",
    ],
    stats: [
      { value: "100K+", label: "downloads" },
      { value: "iOS + Android", label: "shipped on both" },
    ],
    icon: Heart,
    accent: "secondary",
    visual: "moodme",
  },
  {
    id: "trace-bust",
    index: "05",
    name: "Trace Bust",
    tagline: "Modernised utility app, light & dark.",
    blurb:
      "Took an aging utility app, refreshed the UI, introduced light/dark theme switching, and rebuilt monetization on react-native-iap. Upgraded the toolchain to support modern devices.",
    role: "React Native Developer · Artistry Solutions",
    status: "Shipped",
    year: "2021 — 2022",
    stack: ["React Native", "react-native-iap", "Dark Mode", "iOS / Android"],
    highlights: [
      "Redesigned the UI and introduced robust light/dark theme switching.",
      "Modernised the toolchain so new devices were supported cleanly.",
      "Wired in In-App Purchase via react-native-iap as the primary monetization path.",
    ],
    icon: Search,
    accent: "primary",
    visual: "trace-bust",
  },
  {
    id: "prank-caller",
    index: "06",
    name: "Prank Caller",
    tagline: "Custom 60-fps drawer + chat.",
    blurb:
      "A playful phone-dial app. The brief: a drawer animation that felt buttery. I built a custom drawer hitting a steady 60 fps and added a prank-chat messaging surface.",
    role: "React Native Developer · Artistry Solutions",
    status: "Shipped",
    year: "2021",
    stack: ["React Native", "Reanimated", "Gesture Handler"],
    highlights: [
      "Custom drawer animation with sustained 60-fps smoothness.",
      "Built a prank-chat messaging UI with playful micro-interactions.",
    ],
    icon: PhoneCall,
    accent: "secondary",
    visual: "prank-caller",
  },
  {
    id: "stormglass",
    index: "07",
    name: "Stormglass Weather Integration",
    tagline: "Took over a stalled mobile build.",
    blurb:
      "Took over the project mid-stream to integrate APIs and design state management. Wired stormglass.io to deliver accurate weather data into a mobile product surface.",
    role: "Sr React Native Developer · Eglaf Technology",
    status: "Shipped",
    year: "2022",
    stack: ["React Native", "Redux", "stormglass.io API"],
    highlights: [
      "Took ownership of a stalled codebase and shipped the integration.",
      "Designed state management from scratch around clean API boundaries.",
    ],
    icon: CloudSun,
    accent: "primary",
    visual: "stormglass",
  },
];

const principles = [
  {
    icon: Shield,
    title: "Security as default",
    body: "PKCE, SSL pinning, nonce validation, encryption — baked into every product I own, not bolted on after launch.",
  },
  {
    icon: TrendingDown,
    title: "Cheaper, by design",
    body: "Right-size before you scale. AWS spend dropped 65% at Pointz without sacrificing reliability.",
  },
  {
    icon: Zap,
    title: "Ship the rough draft",
    body: "Working software beats theoretical software. Then sharpen the edges in the next iteration.",
  },
  {
    icon: Users,
    title: "One owner, full stack",
    body: "Best feature velocity comes from one engineer who can move between mobile, backend, and infra without handoff.",
  },
];

const StatusPill = ({ status }: { status: Project["status"] }) => {
  const tone =
    status === "Shipping"
      ? "border-primary/60 bg-primary/10 text-primary"
      : status === "Shipped"
      ? "border-border/70 bg-card/50 text-foreground/80"
      : status === "Side build"
      ? "border-secondary/50 bg-secondary/10 text-secondary"
      : "border-border/70 bg-card/50 text-muted-foreground";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] ${tone}`}>
      {status === "Shipping" && <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />}
      {status}
    </span>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const Icon = project.icon;
  const accentColor = project.accent === "primary" ? "text-primary" : "text-secondary";
  const accentBorder = project.accent === "primary" ? "group-hover:border-primary/50" : "group-hover:border-secondary/50";

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-7 md:p-8 transition-all duration-500 ${accentBorder} hover:shadow-card`}
    >
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden />

      <div className="relative flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {project.index}
          </span>
          <div className={`grid place-items-center h-11 w-11 rounded-xl border border-border/80 bg-card/70 ${accentColor} group-hover:scale-105 transition-transform`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <StatusPill status={project.status} />
      </div>

      <div className="relative mb-6">
        <ProjectVisual kind={project.visual} />
      </div>

      <div className="relative space-y-4">
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-[-0.03em] leading-tight">
            {project.name}
          </h3>
          <p className="text-base text-foreground/80 mt-1">{project.tagline}</p>
        </div>

        <p className="text-foreground/80 leading-relaxed">{project.blurb}</p>

        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{project.year}</span>
          <span className="h-3 w-px bg-border" />
          <span>{project.role}</span>
        </div>

        <ul className="space-y-2 pt-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground/85">
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {project.stats && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 mt-4">
            {project.stats.map((s) => (
              <div key={s.label} className="bg-background/95 px-4 py-3">
                <p className="font-display text-xl font-bold tracking-tight">{s.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.stack.map((t) => (
            <span key={t} className="tag-chip">{t}</span>
          ))}
        </div>

        {project.review && (
          <figure className="mt-2 rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              {Array.from({ length: project.review.rating }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
              ))}
              <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Verified review</span>
            </div>
            <blockquote className="text-foreground/85 leading-relaxed text-[15px]">
              “{project.review.quote}”
            </blockquote>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {project.review.attribution}
            </figcaption>
          </figure>
        )}

        {project.link && (
          <div className="pt-3">
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-primary hover:underline underline-offset-4"
            >
              {project.link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-28 md:pt-32">
        {/* HERO */}
        <section className="relative pb-20 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_30%,transparent_80%)]" aria-hidden />
          <div className="absolute top-32 left-1/2 -translate-x-1/2 h-[380px] w-[820px] rounded-full bg-primary/20 blur-[140px] animate-glow-pulse" aria-hidden />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="mb-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to index
              </Link>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-9 space-y-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <p className="label-mono">Projects / 2020 — now</p>
                </div>
                <h1 className="font-display font-bold leading-[0.92] tracking-[-0.045em] text-[15vw] sm:text-[12vw] md:text-[9.5vw] lg:text-[8vw]">
                  Selected
                  <br />
                  <span className="font-serif-italic font-normal text-primary">work</span>
                  <span className="text-primary animate-blink">.</span>
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-foreground/85 leading-snug">
                  Seven builds — one I own today, one stealth AI product I'm building right now, and five shipped for clients and studios.
                  Each one taught me something concrete about <span className="text-primary">how to ship under constraints.</span>
                </p>
              </div>

              <aside className="lg:col-span-3 lg:pl-6 lg:border-l lg:border-border/60 space-y-5 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <div className="space-y-1.5">
                  <p className="label-mono">Counts</p>
                  <ul className="space-y-1 font-mono text-[13px] text-foreground/80">
                    <li className="flex justify-between gap-3"><span>Shipped apps</span><span className="text-primary">5</span></li>
                    <li className="flex justify-between gap-3"><span>Owned platforms</span><span className="text-primary">1</span></li>
                    <li className="flex justify-between gap-3"><span>Stealth in-flight</span><span className="text-primary">1</span></li>
                    <li className="flex justify-between gap-3"><span>5★ Upwork reviews</span><span className="text-primary">3</span></li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FEATURED — Pointz */}
        <section className="relative pb-20 md:pb-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-8">
              <p className="label-mono">★ Featured</p>
              <div className="hairline h-px flex-1" />
            </div>

            <article className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card backdrop-blur-sm animate-fade-in">
              <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/15 blur-3xl" aria-hidden />
              <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl" aria-hidden />

              <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16">
                <div className="lg:col-span-7 space-y-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{featured.index}</span>
                    <StatusPill status={featured.status} />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{featured.year}</span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="grid place-items-center h-14 w-14 rounded-2xl border border-primary/50 bg-primary/10 text-primary shrink-0">
                      <Bike className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] leading-[0.95]">
                        Pointz —
                        <br />
                        <span className="font-serif-italic font-normal text-primary">safer bike mapping.</span>
                      </h2>
                    </div>
                  </div>

                  <p className="font-serif-italic text-xl md:text-2xl text-foreground/85 leading-snug">
                    {featured.tagline}
                  </p>

                  <p className="text-foreground/80 leading-relaxed max-w-2xl">{featured.blurb}</p>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{featured.role}</span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60">
                    {featured.stats?.map((s) => (
                      <div key={s.label} className="bg-background/95 px-5 py-5">
                        <p className="font-display text-3xl md:text-4xl font-bold tracking-[-0.03em]">{s.value}</p>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {featured.link && (
                    <a
                      href={featured.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-glow"
                    >
                      Open {featured.link.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>

                <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border/60 space-y-7">
                  <ProjectVisual kind="pointz" size="feature" />

                  {featured.review && (
                    <figure className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                      <div className="flex items-center gap-1.5 mb-3">
                        {Array.from({ length: featured.review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">CTO testimonial</span>
                      </div>
                      <blockquote className="text-foreground/85 leading-relaxed text-[15px]">
                        “{featured.review.quote}”
                      </blockquote>
                      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {featured.review.attribution}
                      </figcaption>
                    </figure>
                  )}

                  <div>
                    <p className="label-mono mb-3">What I shipped</p>
                    <ul className="space-y-3">
                      {featured.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/85 leading-relaxed">
                          <span className="font-mono text-[11px] text-primary mt-1.5">{String(i + 1).padStart(2, "0")}</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="label-mono mb-3">Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {featured.stack.map((t) => (
                        <span key={t} className="tag-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* OTHER PROJECTS GRID */}
        <section className="relative pb-20 md:pb-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-8">
              <p className="label-mono">∴ More builds</p>
              <div className="hairline h-px flex-1" />
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6 auto-rows-fr">
              {projects.map((p, i) => (
                <div key={p.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="relative pb-24 md:pb-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
              <div className="lg:col-span-7">
                <p className="label-mono mb-4">∆ The way I work</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em]">
                  Four things I <span className="font-serif-italic font-normal text-primary">refuse</span> to compromise on.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-border/60">
                <p className="text-foreground/75 leading-relaxed">
                  Every project above tested at least one of these. The ones that crossed 100K downloads, ran for years, or cut spend by 65% did so because of them.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {principles.map((p, i) => (
                <div
                  key={p.title}
                  className="group rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-6 transition-all hover:border-primary/40 hover:shadow-card animate-fade-in"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="grid place-items-center h-10 w-10 rounded-xl border border-border/80 bg-card/70 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <p.icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight mt-4">{p.title}</h3>
                  <p className="text-foreground/75 text-sm leading-relaxed mt-2">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative pb-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-card backdrop-blur-sm p-10 md:p-16">
              <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" aria-hidden />
              <div className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-secondary/15 blur-3xl" aria-hidden />

              <div className="relative grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-5">
                  <p className="label-mono">→ Next chapter</p>
                  <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em]">
                    Have a hard product <span className="font-serif-italic font-normal text-primary">waiting</span> for an owner?
                  </h2>
                  <p className="text-foreground/80 leading-relaxed max-w-2xl">
                    I'm best at being the single engineer who carries a product end-to-end. If you have one of those — or just want to swap notes — let's talk.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <Link
                    to="/#contact"
                    className="group inline-flex items-center justify-between gap-3 rounded-full bg-primary px-6 py-4 font-mono text-[12px] uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-glow"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Mail className="h-4 w-4" />
                      Open a thread
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <a
                    href="https://www.upwork.com/freelancers/~014ca1b42c6232598c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between gap-3 rounded-full border border-primary/40 bg-primary/10 px-6 py-4 font-mono text-[12px] uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Star className="h-4 w-4" />
                      Hire on Upwork
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
