import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px hairline" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="label-mono mb-4">§ 03 — Education</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
              The <span className="font-serif-italic font-normal text-primary">paper</span> trail.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-border/60">
            <p className="text-foreground/75 leading-relaxed">
              Trained as a computer engineer at GTU. Most of what I use day-to-day, though, I learned in production — debugging at 2&nbsp;AM, refactoring legacy modules, and watching dashboards.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 max-w-6xl">
          <article className="lg:col-span-8 group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-8 md:p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-card">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden />

            <div className="relative flex flex-col md:flex-row md:items-start gap-6">
              <div className="grid place-items-center h-14 w-14 rounded-2xl border border-border/80 bg-card/70 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1 space-y-3">
                <p className="label-mono">Bachelor of Engineering</p>
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.03em] leading-tight">
                  Gujarat Technological University
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Computer Engineering — focus on systems, data structures, and software design. Capstone work in mobile + cloud-connected products.
                </p>
                <div className="pt-2 flex flex-wrap gap-3 font-mono text-[12px] text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-primary/80" />
                    Conferred Feb 2023 · coursework Jul 2022
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary/80" />
                    Gujarat, India
                  </span>
                </div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4 rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-8 flex flex-col justify-between">
            <div className="space-y-3">
              <p className="label-mono">Continuous learning</p>
              <p className="pull-quote text-2xl text-foreground/90">
                “Ship it. Then improve the ship.”
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently going deep on AI-native engineering — Claude Code, custom skills, subagent workflows — applied inside the stealth startup I'm building full-time.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70">
                Actively studying
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Education;
