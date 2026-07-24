import { Rocket, Wrench, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Sparkles,
    eyebrow: "4–6 week sprint · fixed scope",
    title: "Ship your AI-native MVP",
    body: "From Figma or napkin to a real product in users' hands — React Native + Node + LLM/agent layer, auth, payments, the works. Built the way I shipped my own AI-native MVP as founding engineer, not the way an agency ships yours.",
    proof: "Shipped a stealth AI MVP solo with Claude Code (Dec 2025 → Apr 2026).",
  },
  {
    icon: Rocket,
    eyebrow: "Retainer · sole engineer",
    title: "Sole engineer for one founder",
    body: "Own the product end-to-end — mobile, backend, infra, security, payments — while you raise, sell, hire. Same model I ran as Head of Engineering at Pointz, now offered to one founder at a time.",
    proof: "At Pointz: 1 engineer, 3 roles, 65% AWS cost cut.",
  },
  {
    icon: Wrench,
    eyebrow: "4–8 weeks · take-over",
    title: "Rescue a stalled React Native build",
    body: "Inherit a half-finished React Native or Spring Boot codebase, stabilise it, and ship the next milestone in weeks — not quarters. No ramp-up tax.",
    proof: "Took over Stormglass & MoodMe codebases cold and shipped.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "2-week audit · fixed price",
    title: "Pre-scale security & cloud audit",
    body: "PKCE, SSL pinning, encryption, nonce validation, AWS right-sizing, API hot paths. Done before you go viral or close a round — not after the first incident report.",
    proof: "Same baseline protects every Pointz user today.",
  },
];

const Services = () => {
  return (
    <section id="hire" className="relative section-top-rule py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <p className="section-tag mb-5">
              <span className="section-tag__num">01</span>
              <span className="section-tag__bar" />
              <span>What I build</span>
            </p>
            <h2 className="font-display h-section">
              Four shapes of
              <br />
              <span className="text-primary">engagement</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border/60">
            <p className="text-ink-soft leading-[1.65] text-[15.5px]">
              Plain English: here are the four ways I work with founders and teams. If any of them sound like
              your situation, the contact section is below — I usually reply within four hours.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60">
          {services.map((s, idx) => (
            <Reveal
              as="article"
              key={s.title}
              delay={idx * 80}
              className="group relative bg-background p-8 md:p-10 transition-colors duration-500 hover:bg-card/50"
            >
              <div className="flex items-start justify-between gap-5 mb-6">
                <div className="grid place-items-center h-11 w-11 rounded-xl border border-border/80 bg-card/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500">
                  <s.icon className="h-[18px] w-[18px]" />
                </div>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground text-right">
                  {s.eyebrow}
                </span>
              </div>

              <h3 className="font-display text-[26px] md:text-[30px] leading-[1.08] tracking-[-0.025em] mb-4">
                {s.title}
              </h3>

              <p className="text-ink-soft leading-[1.62] mb-6 text-[15px]">{s.body}</p>

              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-primary border-t border-border/60 pt-5">
                {s.proof}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Bottom rail */}
        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-border/70 bg-card/30 px-7 py-6">
          <div>
            <p className="eyebrow mb-1.5">How we'd work together</p>
            <p className="text-foreground/90 text-[15.5px] md:text-[17px] font-display tracking-[-0.01em]">
              Fixed-scope sprint, monthly retainer, or hourly via Upwork. US, EU & APAC overlap.
            </p>
          </div>
          <a href="#contact" className="btn-primary group">
            <span>Start a conversation</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
