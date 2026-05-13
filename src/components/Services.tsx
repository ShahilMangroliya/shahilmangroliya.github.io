import { Rocket, Wrench, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    eyebrow: "4–6 week sprint · fixed scope",
    title: "Ship your AI-native MVP",
    body: "From Figma or napkin to a real product in users' hands — RN + Node + LLM/agent layer, auth, payments, the works. Built the way I ship my own stealth AI startup, not the way an agency ships yours.",
    proof: "Daily driver: Claude Code, subagents, custom skill stacks.",
  },
  {
    icon: Rocket,
    eyebrow: "Retainer · fractional CTO",
    title: "Sole engineer for one founder",
    body: "Own the product end-to-end — mobile, backend, infra, security, payments — while you raise, sell, hire. Same model I ran as Head of Engineering at Pointz, now offered to one founder at a time.",
    proof: "At Pointz: 1 engineer, 3 roles, 65% AWS cost cut.",
  },
  {
    icon: Wrench,
    eyebrow: "4–8 weeks · take-over",
    title: "Rescue a stalled React Native build",
    body: "Inherit a half-finished RN or Spring Boot codebase, stabilise it, and ship the next milestone in weeks — not quarters. No ramp-up tax.",
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
    <section id="hire" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px hairline" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(75_88%_30%/0.08),transparent_55%)]" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="label-mono mb-4">§ 00 — Hire me for</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
              What I do <span className="text-primary">for teams</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-border/60">
            <p className="text-foreground/75 leading-relaxed">
              Plain English: here are the four shapes of engagement I'm great at. If any of them sound like your situation, the contact form is below — I'll usually reply within four hours.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {services.map((s, idx) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />

              <div className="relative flex items-start justify-between gap-4 mb-5">
                <div className="grid place-items-center h-11 w-11 rounded-xl border border-border/80 bg-card/70 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  <s.icon className="h-[18px] w-[18px]" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.eyebrow}
                </span>
              </div>

              <h3 className="relative font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] leading-tight mb-3">
                {s.title}
              </h3>

              <p className="relative text-foreground/80 leading-relaxed mb-5">{s.body}</p>

              <p className="relative font-mono text-[11px] uppercase tracking-[0.16em] text-primary border-t border-border/60 pt-4">
                {s.proof}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm px-6 py-5">
          <div>
            <p className="label-mono mb-1">How we'd work together</p>
            <p className="text-foreground/85 text-base md:text-lg">
              Fixed-scope sprint, monthly retainer, or hourly via Upwork (Top Rated Plus). US, EU &amp; APAC overlap.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-glow"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
