import { Code2, Server, Shield, Cloud, Puzzle, Languages, Sparkles } from "lucide-react";

type Category = {
  icon: typeof Code2;
  title: string;
  caption: string;
  skills: string[];
};

const categories: Category[] = [
  {
    icon: Code2,
    title: "Frontend",
    caption: "App + web surface",
    skills: ["React Native", "React", "Next.js", "Redux", "TypeScript", "JavaScript", "Android Studio", "Xcode", "RESTful APIs"],
  },
  {
    icon: Server,
    title: "Backend & Data",
    caption: "Services and persistence",
    skills: ["Node.js", "Python", "Spring Boot", "Firebase", "PostgreSQL", "MongoDB", "SQL", "Turbo"],
  },
  {
    icon: Sparkles,
    title: "AI Tooling",
    caption: "How I move 2× faster",
    skills: ["Claude Code", "Cursor", "Claude Code skills + subagents", "Workflow design"],
  },
  {
    icon: Shield,
    title: "Security",
    caption: "Baseline for everything I ship",
    skills: ["Auth / Session tokens", "PKCE", "SSL Pinning", "Encryption", "Nonce Validation"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    caption: "Cheap, observable, deployable",
    skills: ["AWS (EC2, RDS, S3)", "Google Cloud", "CI/CD", "Docker"],
  },
  {
    icon: Puzzle,
    title: "Integrations",
    caption: "Payments & location",
    skills: ["Stripe", "RevenueCat", "Razorpay", "Braintree", "In-App Purchases", "Google Maps", "Mapbox", "GPS", "OSM"],
  },
  {
    icon: Languages,
    title: "Languages",
    caption: "Spoken, not compiled",
    skills: ["English — Fluent", "Hindi — Fluent", "Gujarati — Native"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px hairline" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,hsl(24_92%_40%/0.07),transparent_60%)]" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="label-mono mb-4">§ 02 — The stack I reach for</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
              Pragmatic, <span className="text-primary">secure</span>,
              <br />
              shippable.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-border/60">
            <p className="text-foreground/75 leading-relaxed">
              I optimise for tools that let one engineer carry a product end-to-end. Anything below has shipped in production — most of it under my ownership today.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
          {categories.map((c, idx) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-6 md:p-7 transition-all duration-500 hover:border-primary/40 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden>
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
              </div>

              <div className="relative flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-10 w-10 rounded-xl border border-border/80 bg-card/70 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500">
                    <c.icon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight leading-tight">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-tight">{c.caption}</p>
                  </div>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <span key={s} className="tag-chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
