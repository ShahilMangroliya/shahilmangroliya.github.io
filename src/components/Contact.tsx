import { Mail, Github, Linkedin, MapPin, Send, ArrowUpRight, Copy, BadgeCheck } from "lucide-react";
import { toast } from "sonner";

const EMAIL = "shahil.mangroliya@outlook.com";

const Contact = () => {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied to clipboard", {
        description: EMAIL,
      });
    } catch {
      toast.error("Couldn't copy — try selecting it instead");
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px hairline" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_80%)]" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[820px] rounded-full bg-primary/10 blur-[160px]" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="label-mono mb-4">§ 04 — Open a thread</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
              Let's build <span className="text-primary">something</span>
              <br />
              worth shipping.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-border/60">
            <p className="text-foreground/75 leading-relaxed">
              I'm happiest as a single engineer owning a hard product end-to-end. If that sounds like what you're after — or you just want to talk shop —
              <span className="text-primary"> drop a line.</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Email card — primary CTA */}
          <div className="lg:col-span-7 rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" aria-hidden />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70">
                  $ ./contact — responding within 24h
                </p>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-3">
                The fastest path is <span className="text-primary">email</span>.
              </h3>

              <div className="mt-6 rounded-xl border border-border/70 bg-background/60 backdrop-blur p-4 md:p-5 flex flex-wrap items-center justify-between gap-3">
                <code className="font-mono text-base md:text-lg text-foreground/90 break-all">
                  {EMAIL}
                </code>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-all hover:border-primary/60 hover:text-primary"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </button>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-glow"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Compose
                  </a>
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/shahil-mangroliya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 transition-all hover:bg-primary/15"
                >
                  <span className="flex items-center gap-2.5">
                    <Linkedin className="h-[18px] w-[18px] text-primary" />
                    <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-primary">LinkedIn</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-primary transition-colors" />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~014ca1b42c6232598c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border/70 bg-card/40 px-4 py-3 transition-all hover:border-primary/60"
                >
                  <span className="flex items-center gap-2.5">
                    <BadgeCheck className="h-[18px] w-[18px] text-primary" />
                    <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/85">Upwork</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/ShahilMangroliya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border/70 bg-card/40 px-4 py-3 transition-all hover:border-primary/60"
                >
                  <span className="flex items-center gap-2.5">
                    <Github className="h-[18px] w-[18px] text-primary" />
                    <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/85">GitHub</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Side details */}
          <aside className="lg:col-span-5 grid grid-rows-2 gap-6">
            <div className="rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-7 flex flex-col justify-between">
              <div className="space-y-3">
                <p className="label-mono">Based in</p>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h4 className="font-display text-2xl font-semibold tracking-tight">Surat, Gujarat · India</h4>
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                  GMT+05:30. Comfortable working across US, EU, and APAC timezones.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                Available
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-7">
              <p className="label-mono mb-4">Good fits</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>Founders shipping an <span className="text-foreground">AI-native MVP</span> in 4–6 weeks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span><span className="text-foreground">Fractional CTO</span> retainer — one founder, full ownership.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>Stalled <span className="text-foreground">React Native</span> or backend codebases that need a rescue.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>Pre-scale <span className="text-foreground">security &amp; cloud audits</span> — 2-week fixed scope.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
