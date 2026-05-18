import { Mail, Github, Linkedin, MapPin, Send, ArrowUpRight, Copy } from "lucide-react";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";

const EMAIL = "shahil.mangroliya@outlook.com";
const UPWORK_URL = "https://www.upwork.com/freelancers/~014ca1b42c6232598c";

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
    <section id="contact" className="relative section-top-rule py-24 md:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, hsl(38 92% 45% / 0.08), transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <Reveal className="grid lg:grid-cols-12 gap-8 items-end mb-14 md:mb-16">
          <div className="lg:col-span-7">
            <p className="section-tag mb-5">
              <span className="section-tag__num">06</span>
              <span className="section-tag__bar" />
              <span>Open a thread</span>
            </p>
            <h2 className="font-display h-section">
              Let's build <span className="text-primary">something</span>
              <br />
              worth shipping.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border/60">
            <p className="text-ink-soft leading-[1.65] text-[15.5px]">
              I'm happiest as a single engineer owning a hard product end-to-end. If that sounds like what
              you're after — or you just want to talk shop —{" "}
              <span className="text-foreground">drop a line.</span>
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60">
          {/* Email card — primary */}
          <Reveal as="div" className="lg:col-span-7 bg-background p-8 md:p-12">
            <div className="flex items-center gap-3 mb-7">
              <span className="status-dot" />
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/70">
                Responding within 24h
              </p>
            </div>

            <h3 className="font-display text-[30px] md:text-[42px] tracking-[-0.03em] leading-[1.05] mb-7">
              The fastest path is <span className="text-primary">email</span>.
            </h3>

            <div className="rounded-xl border border-border/70 bg-card/30 p-4 md:p-5 flex flex-wrap items-center justify-between gap-3">
              <code className="font-mono text-[15px] md:text-[17px] text-foreground/95 break-all">
                {EMAIL}
              </code>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/80 transition-all hover:border-primary/60 hover:text-primary"
                >
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </button>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-glow"
                >
                  <Send className="h-3.5 w-3.5" />
                  Compose
                </a>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-px overflow-hidden rounded-xl border border-border/70 bg-border/60">
              <a
                href="https://www.linkedin.com/in/shahil-mangroliya/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-background px-4 py-4 transition-colors hover:bg-card/40"
              >
                <span className="flex items-center gap-2.5">
                  <Linkedin className="h-[17px] w-[17px] text-primary" />
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.2em] text-foreground/85">
                    LinkedIn
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-background px-4 py-4 transition-colors hover:bg-card/40"
              >
                <span className="flex items-center gap-2.5">
                  <span className="grid place-items-center h-[17px] w-[17px] text-primary font-mono text-[13px] font-bold">
                    U
                  </span>
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.2em] text-foreground/85">
                    Upwork
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
              <a
                href="https://github.com/ShahilMangroliya"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-background px-4 py-4 transition-colors hover:bg-card/40"
              >
                <span className="flex items-center gap-2.5">
                  <Github className="h-[17px] w-[17px] text-primary" />
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.2em] text-foreground/85">
                    GitHub
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </div>
          </Reveal>

          {/* Side details */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-px bg-border/60">
            <Reveal as="div" delay={100} className="bg-background p-7 md:p-8 flex flex-col justify-between">
              <div className="space-y-3.5">
                <p className="eyebrow">Based in</p>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h4 className="font-display text-[22px] md:text-[24px] tracking-[-0.025em]">
                    Surat, Gujarat · India
                  </h4>
                </div>
                <p className="text-[14.5px] text-ink-soft leading-[1.6]">
                  GMT+05:30. Comfortable working across US, EU, and APAC timezones.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2.5">
                <span className="status-dot" />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/70">
                  Available
                </span>
              </div>
            </Reveal>

            <Reveal as="div" delay={180} className="bg-background p-7 md:p-8">
              <p className="eyebrow mb-4">Good fits</p>
              <ul className="space-y-2.5 text-ink-soft text-[14.5px]">
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] inline-block h-[2px] w-[10px] bg-primary/80 shrink-0 rounded-sm" />
                  <span>
                    Founders shipping an{" "}
                    <span className="text-foreground">AI-native MVP</span> in 4–6 weeks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] inline-block h-[2px] w-[10px] bg-primary/80 shrink-0 rounded-sm" />
                  <span>
                    <span className="text-foreground">Fractional CTO</span> retainer — one founder, full
                    ownership.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] inline-block h-[2px] w-[10px] bg-primary/80 shrink-0 rounded-sm" />
                  <span>
                    Stalled <span className="text-foreground">React Native</span> or backend codebases that
                    need a rescue.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] inline-block h-[2px] w-[10px] bg-primary/80 shrink-0 rounded-sm" />
                  <span>
                    Pre-scale <span className="text-foreground">security &amp; cloud audits</span> — 2-week
                    fixed scope.
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
