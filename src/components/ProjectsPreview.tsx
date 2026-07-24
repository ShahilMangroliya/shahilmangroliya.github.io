import { Bike, Sparkles, Heart, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

type Preview = {
  id: string;
  index: string;
  name: string;
  what: string;
  role: string;
  stack: string[];
  outcome: { value: string; label: string };
  icon: typeof Bike;
};

const featured: Preview[] = [
  {
    id: "pointz",
    index: "01",
    name: "Pointz",
    what: "Community-powered safer-bike navigation platform.",
    role: "Head of Engineering · sole owner",
    stack: ["React Native", "Spring Boot", "AWS"],
    outcome: { value: "−65%", label: "AWS cost, hardened security" },
    icon: Bike,
  },
  {
    id: "stealth-ai",
    index: "02",
    name: "Stealth AI MVP",
    what: "AI-native app: ingests Gmail / Outlook / Sheets → LLM → SMS & email alerts.",
    role: "Founding Engineer",
    stack: ["Claude Code", "LLM orchestration", "TypeScript"],
    outcome: { value: "0 → MVP", label: "shipped solo in ~4 months" },
    icon: Sparkles,
  },
  {
    id: "moodme",
    index: "03",
    name: "MoodMe",
    what: "Relationship mood-tracking app for couples.",
    role: "React Native Developer",
    stack: ["React Native", "Firebase", "Deep Links"],
    outcome: { value: "100K+", label: "downloads · iOS + Android" },
    icon: Heart,
  },
];

const ProjectsPreview = () => {
  return (
    <section id="projects" className="relative section-top-rule py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <p className="section-tag mb-5">
              <span className="section-tag__num">02</span>
              <span className="section-tag__bar" />
              <span>Selected projects</span>
            </p>
            <h2 className="font-display h-section">
              Shipped work,
              <br />
              <span className="text-primary">not slideware</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border/60">
            <p className="text-ink-soft leading-[1.65] text-[15.5px]">
              Three of the highest-signal builds — a platform I led, an AI-native MVP I shipped
              solo, and a 100K-download app. The full case studies live on the projects page.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {featured.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal as="div" key={p.id} delay={idx * 90}>
                <Link
                  to={`/projects#${p.id}`}
                  className="surface group flex h-full flex-col p-7 md:p-8 hover:border-primary/50"
                  aria-label={`${p.name} — view case study`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                        {p.index}
                      </span>
                      <div className="grid place-items-center h-11 w-11 rounded-xl border border-border/80 bg-card/60 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                        <Icon className="h-[18px] w-[18px]" />
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Title + what */}
                  <h3 className="font-display text-[24px] md:text-[26px] leading-[1.1] tracking-[-0.025em] mb-2.5">
                    {p.name}
                  </h3>
                  <p className="text-ink-soft leading-[1.55] text-[14.5px] mb-5">{p.what}</p>

                  {/* Role */}
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
                    {p.role}
                  </p>

                  {/* Stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.stack.map((s) => (
                      <span key={s} className="tag-chip">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Outcome metric — pinned to the bottom */}
                  <div className="mt-auto flex items-baseline gap-3 border-t border-border/60 pt-5">
                    <span className="font-display text-2xl md:text-[28px] tracking-[-0.03em] text-foreground leading-none">
                      {p.outcome.value}
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-primary leading-[1.4]">
                      {p.outcome.label}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* View all */}
        <Reveal className="mt-10 flex justify-center">
          <Link to="/projects" className="btn-ghost group">
            <span>View all projects</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsPreview;
