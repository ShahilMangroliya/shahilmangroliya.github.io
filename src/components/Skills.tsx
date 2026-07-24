import { Code2, Server, Shield, Cloud, Puzzle, Languages, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

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
    <section id="skills" className="relative section-top-rule py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <Reveal className="grid lg:grid-cols-12 gap-8 items-end mb-14 md:mb-16">
          <div className="lg:col-span-7">
            <p className="section-tag mb-5">
              <span className="section-tag__num">04</span>
              <span className="section-tag__bar" />
              <span>The stack I reach for</span>
            </p>
            <h2 className="font-display h-section">
              Pragmatic, <span className="text-primary">secure</span>,
              <br />
              shippable.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border/60">
            <p className="text-ink-soft leading-[1.65] text-[15.5px]">
              I optimise for tools that let one engineer carry a product end-to-end. Anything below has
              shipped in production — most of it under my ownership today.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60">
          {categories.map((c, idx) => (
            <Reveal
              as="article"
              key={c.title}
              delay={idx * 60}
              className="group relative bg-background p-7 transition-colors duration-500 hover:bg-card/50"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-10 w-10 rounded-lg border border-border/80 bg-card/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500">
                    <c.icon className="h-[17px] w-[17px]" />
                  </div>
                  <div>
                    <h3 className="font-display text-[20px] tracking-[-0.02em] leading-tight">{c.title}</h3>
                    <p className="text-[12.5px] text-muted-foreground leading-tight mt-0.5">{c.caption}</p>
                  </div>
                </div>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <span key={s} className="tag-chip">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
