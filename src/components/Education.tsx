import { GraduationCap, Calendar, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

const Education = () => {
  return (
    <section id="education" className="relative section-top-rule py-24 md:py-28 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <Reveal className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="section-tag mb-5">
              <span className="section-tag__num">06</span>
              <span className="section-tag__bar" />
              <span>Education</span>
            </p>
            <h2 className="font-display h-section">
              The <span className="text-primary">paper</span> trail.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border/60">
            <p className="text-ink-soft leading-[1.65] text-[15.5px]">
              Trained as a computer engineer at GTU. Most of what I use day-to-day, though, I learned in
              production — debugging at 2&nbsp;AM, refactoring legacy modules, and watching dashboards.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60">
          <Reveal as="article" className="lg:col-span-8 bg-background p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start gap-7">
              <div className="grid place-items-center h-14 w-14 rounded-xl border border-border/80 bg-card/60 text-primary shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1 space-y-3.5">
                <p className="eyebrow">Bachelor of Engineering</p>
                <h3 className="font-display text-[30px] md:text-[40px] tracking-[-0.03em] leading-[1.05]">
                  Gujarat Technological University
                </h3>
                <p className="text-ink-soft leading-[1.65] text-[15px]">
                  Computer Engineering — focus on systems, data structures, and software design. Capstone
                  work in mobile + cloud-connected products.
                </p>
                <div className="pt-3 flex flex-wrap gap-4 font-mono text-[11.5px] text-muted-foreground">
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
          </Reveal>

          <Reveal as="aside" delay={120} className="lg:col-span-4 bg-background p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="eyebrow">Continuous learning</p>
              <p className="pull-quote text-[22px] md:text-[24px] text-foreground/95">
                “Ship it. Then improve the ship.”
              </p>
              <p className="text-[13.5px] text-ink-soft leading-[1.6]">
                Daily driver for AI-native engineering — Claude Code, custom skills, subagent workflows.
                Shipped the MVP of an AI-native app as founding engineer (Dec 2025 → Apr 2026).
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-foreground/70">
                Actively studying
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
