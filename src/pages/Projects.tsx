import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";
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
  Star,
  Briefcase,
  FileText,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectVisual from "@/components/ProjectVisual";

const EMAIL = "shahil.mangroliya@outlook.com";
const UPWORK_URL = "https://www.upwork.com/freelancers/~014ca1b42c6232598c";

type Stat = { value: string; label: string };

type VisualKind =
  | "pointz"
  | "moodme"
  | "trace-bust"
  | "prank-caller"
  | "stormglass"
  | "madina";

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
  links?: { href: string; label: string }[];
  github?: string;
  visual: VisualKind;
  screenshot?: { src: string; alt: string };
  review?: Review;
};

const featured: Project = {
  id: "pointz",
  index: "00",
  name: "Pointz — Safer Bike Mapping",
  tagline: "Navigation for cyclists, led end-to-end as Head of Engineering.",
  blurb:
    "Pointz is a community-powered navigation app for cyclists — a turn-by-turn GPS with a \"safety slider\" that lets riders trade speed for safer streets, plus crowdsourced hazards, ride tracking, Strava + GPX, and 24/7 US roadside assistance. I joined a year after launch and grew into the lead role across three titles — frontend → full-stack → Head of Engineering — re-architecting the navigation core, designing the security baseline, hardening the API tier, and slashing infrastructure spend.",
  role: "Former Head of Engineering · now on ad-hoc maintenance retainer",
  status: "Shipped",
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
  links: [
    { href: "https://www.bikepointz.com", label: "bikepointz.com" },
    { href: "https://apps.apple.com/us/app/pointz-plan-safer-on-bikes/id1580218237", label: "App Store" },
    { href: "https://play.google.com/store/apps/details?id=com.pointzofficialapp", label: "Google Play" },
  ],
  visual: "pointz",
  screenshot: {
    src: "/screenshots/pointz.webp",
    alt: "Pointz app on iPhone — turn-by-turn cycling navigation with step-by-step directions on a map.",
  },
  review: {
    rating: 5,
    quote:
      "Shahil is one of the most talented engineers and people I have met in my life. We have increased our output for our mobile app by 10x solely because of his work.",
    attribution: "Trisha B. — CTO, Pointz (Verified on Upwork, Jul 2023)",
  },
};

const projects: Project[] = [
  {
    id: "prank-caller",
    index: "01",
    name: "Prank Caller — Phone Dial App",
    tagline: "Playful phone-dial app, now an AI voice prankster.",
    blurb:
      "Users pick a voice character, run a live prank scenario, and share the recording to a community feed. When I was on the build, the brief came down to one thing: make it feel buttery. I shipped a custom drawer animation holding a steady 60 fps, plus the prank-chat messaging surface underneath it.",
    role: "React Native Developer · Artistry Solutions",
    status: "Shipped",
    year: "2021",
    stack: ["React Native", "Reanimated", "Gesture Handler"],
    highlights: [
      "Custom drawer animation with sustained 60-fps smoothness.",
      "Built a prank-chat messaging UI with playful micro-interactions.",
      "Foundation that later evolved into an AI voice + community-sharing product.",
    ],
    icon: PhoneCall,
    accent: "secondary",
    visual: "prank-caller",
    screenshot: {
      src: "/screenshots/prank-caller.webp",
      alt: "Prank Caller app on iPhone — voice-character prank calling interface.",
    },
    links: [
      { href: "https://apps.apple.com/us/app/prank-caller-phone-dial-app/id1142839494", label: "App Store" },
      { href: "https://play.google.com/store/apps/details?id=prank.caller.funny.dial.fake.id.app", label: "Google Play" },
    ],
  },
  {
    id: "moodme",
    index: "02",
    name: "MoodMe — Relationship Tracker",
    tagline: "Daily mood check-ins, journaling, and games for couples.",
    blurb:
      "A relationship app where couples log how they feel from 400+ selectable moods, run weekly check-ins, play connection games, share a journal, and stay aware of each other via home-screen widgets. I led the Firebase messaging + deep-linking work and stabilised the app across a long tail of devices. It crossed 100K downloads across iOS and Android.",
    role: "React Native Developer · Artistry Solutions",
    status: "Shipped",
    year: "2020 — 2022",
    stack: ["React Native", "Firebase", "Firebase Messaging", "Deep Links"],
    highlights: [
      "Wired Firebase messaging with deep links into the right in-app surfaces.",
      "Bug-bashed the long tail of device-specific crashes — meaningful stability lift.",
      "Helped the app cross 100K+ downloads across iOS and Android.",
    ],
    stats: [
      { value: "100K+", label: "downloads" },
      { value: "400+", label: "selectable moods" },
      { value: "iOS + Android", label: "shipped on both" },
    ],
    icon: Heart,
    accent: "secondary",
    visual: "moodme",
    screenshot: {
      src: "/screenshots/moodme.webp",
      alt: "MoodMe app on iPhone — posting a mood with the couples relationship-tracking interface.",
    },
    links: [
      { href: "https://apps.apple.com/us/app/moodme-relationship-tracker/id1586093391", label: "App Store" },
      { href: "https://play.google.com/store/apps/details?id=com.tepia.moodme&hl=en_IN", label: "Google Play" },
    ],
  },
  {
    id: "trace-bust",
    index: "03",
    name: "Trace Bust — Fake Caller ID",
    tagline: "Spoof caller ID instantly — refreshed in light & dark.",
    blurb:
      "Fake Caller ID is TraceBust, Inc.'s flagship mobile app — mask your real number behind a premium caller ID, shift your voice masculine or feminine mid-call, and record the conversation for later. The hard part wasn't the features: I inherited a React Native codebase that had drifted years behind its native toolchain, and had to bring it back to shippable without breaking the paying subscriber base.",
    role: "React Native Developer · Artistry Solutions",
    status: "Shipped",
    year: "2021 — 2022",
    stack: ["React Native", "react-native-iap", "Dark Mode", "iOS / Android"],
    highlights: [
      "Redesigned the UI around the spoof-call core flow — caller-ID picker, voice changer, recordings.",
      "Introduced robust light/dark theme switching across every screen.",
      "Rebuilt subscription monetization on react-native-iap as the primary revenue path.",
      "Lifted React Native and the native dependencies to versions that cleared current App Store and Play review.",
    ],
    icon: PhoneCall,
    accent: "primary",
    visual: "trace-bust",
    links: [
      { href: "https://fakecallerid.io/", label: "fakecallerid.io" },
    ],
  },
  {
    id: "stealth-ai",
    index: "04",
    name: "Stealth — AI-native startup",
    tagline: "Founding engineer. Shipped an AI-native MVP with Claude Code.",
    blurb:
      "I joined as founding engineer and shipped the MVP solo, with Claude Code, custom skills, and subagent workflows sitting at the center of the engineering loop — not bolted on. Exited April 2026 after MVP delivery. Architecture, naming, and details remain private.",
    role: "Founding Engineer · stealth — Dec 2025 → Apr 2026",
    status: "Shipped",
    year: "Dec 2025 → Apr 2026",
    stack: ["Claude Code", "Custom skills", "Subagent workflows", "AI orchestration", "TypeScript", "Python"],
    highlights: [
      "Founding engineer: owned product, engineering, and AI workflow design from zero.",
      "Composed Claude Code skills and subagents into a daily engineering loop that compressed cycle time.",
      "Designed the product so AI was a first-class collaborator, not a fallback.",
      "MVP shipped; exited April 2026.",
    ],
    stats: [
      { value: "MVP", label: "shipped solo" },
      { value: "AI-native", label: "core loop" },
    ],
    icon: Sparkles,
    accent: "primary",
    visual: "madina",
  },
  {
    id: "madina",
    index: "05",
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
    id: "stormglass",
    index: "06",
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
      id={project.id}
      className={`group relative scroll-mt-28 overflow-hidden rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-7 md:p-8 transition-all duration-500 ${accentBorder} hover:shadow-card`}
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
        {project.screenshot ? (
          <figure className="mx-auto w-fit max-w-full overflow-hidden rounded-xl border border-border/70 bg-background/60">
            <img
              src={project.screenshot.src}
              alt={project.screenshot.alt}
              loading="lazy"
              decoding="async"
              className="block h-56 md:h-64 w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </figure>
        ) : (
          <ProjectVisual kind={project.visual} />
        )}
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

        {(project.links?.length || project.link) && (
          <div className="pt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            {(project.links ?? (project.link ? [project.link] : [])).map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-primary hover:underline underline-offset-4"
              >
                {l.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  usePageMeta({
    title: "Selected Projects · Shahil Mangroliya — AI MVP & React Native Builds",
    description:
      "Seven builds by Shahil Mangroliya — Pointz (Head of Engineering), an AI-native MVP shipped as founding engineer, and five client/studio apps. React Native, Spring Boot, AWS, Claude Code.",
    canonical: "https://shahilmangroliya.github.io/projects",
  });

  const location = useLocation();

  // Deep links (/projects#pointz) land on the matching entry; a plain visit starts at the top.
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
        return () => clearTimeout(t);
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

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
                  <span className="text-primary">work</span>
                  <span className="text-primary animate-blink">.</span>
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-foreground/85 leading-snug">
                  Seven builds — the platform I led as Head of Engineering, an AI-native MVP I shipped as founding engineer, and five for clients and studios.
                  Each one taught me something concrete about <span className="text-primary">how to ship under constraints.</span>
                </p>
              </div>

              <aside className="lg:col-span-3 lg:pl-6 lg:border-l lg:border-border/60 space-y-5 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <div className="space-y-1.5">
                  <p className="label-mono">Counts</p>
                  <ul className="space-y-1 font-mono text-[13px] text-foreground/80">
                    <li className="flex justify-between gap-3"><span>Shipped apps</span><span className="text-primary">4</span></li>
                    <li className="flex justify-between gap-3"><span>Platforms led</span><span className="text-primary">1</span></li>
                    <li className="flex justify-between gap-3"><span>AI MVPs shipped</span><span className="text-primary">1</span></li>
                    <li className="flex justify-between gap-3"><span>5★ Upwork reviews</span><span className="text-primary">3×</span></li>
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

            <article
              id={featured.id}
              className="relative scroll-mt-28 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card backdrop-blur-sm animate-fade-in"
            >
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
                        <span className="text-primary">safer bike mapping.</span>
                      </h2>
                    </div>
                  </div>

                  <p className="pull-quote text-xl md:text-2xl text-foreground/85">
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

                  <div className="flex flex-wrap items-center gap-3">
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
                    {featured.links
                      ?.filter((l) => l.href !== featured.link?.href)
                      .map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                        >
                          {l.label}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ))}
                  </div>
                </div>

                <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border/60 space-y-7">
                  {featured.screenshot && (
                    <figure className="mx-auto w-fit max-w-full overflow-hidden rounded-2xl border border-border/70 bg-background/60">
                      <img
                        src={featured.screenshot.src}
                        alt={featured.screenshot.alt}
                        loading="lazy"
                        decoding="async"
                        className="block h-72 md:h-80 w-auto max-w-full object-contain"
                      />
                    </figure>
                  )}

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
                  Four things I <span className="text-primary">refuse</span> to compromise on.
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
                    Have a hard product <span className="text-primary">waiting</span> for an owner?
                  </h2>
                  <p className="text-foreground/80 leading-relaxed max-w-2xl">
                    I'm best at being the single engineer who carries a product end-to-end —
                    on a team as a senior/staff engineer, or solo for a founder. Open to
                    full-time remote roles and select contract work.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <a
                    href={`mailto:${EMAIL}?subject=Full-time%20role%20%E2%80%94%20Senior%20Software%20Engineer`}
                    className="group inline-flex items-center justify-between gap-3 rounded-full bg-primary px-6 py-4 font-mono text-[12px] uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-glow"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Briefcase className="h-4 w-4" />
                      Hiring full-time
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Shahil-Mangroliya-Resume.pdf"
                    className="group inline-flex items-center justify-between gap-3 rounded-full border border-primary/40 bg-primary/10 px-6 py-4 font-mono text-[12px] uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <span className="inline-flex items-center gap-3">
                      <FileText className="h-4 w-4" />
                      Download résumé
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <Link
                    to="/#contact"
                    className="group inline-flex items-center justify-between gap-3 rounded-full border border-border/70 bg-card/40 px-6 py-4 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/85 transition-all hover:border-primary/60 hover:text-primary"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Mail className="h-4 w-4" />
                      MVP / fractional CTO
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <a
                    href={UPWORK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between gap-3 rounded-full border border-border/70 bg-card/40 px-6 py-4 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/85 transition-all hover:border-primary/60 hover:text-primary"
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
