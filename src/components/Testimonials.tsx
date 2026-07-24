import { Star, ArrowUpRight, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

const UPWORK_URL = "https://www.upwork.com/freelancers/~014ca1b42c6232598c";

type Testimonial = {
  rating: number;
  quote: string;
  author: string;
  role: string;
  context: string;
  date: string;
  highlight?: boolean;
};

const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote:
      "Shahil is one of the most talented engineers and people I have met in my life. His determination, work ethic, and ingenuity are extremely rare. He is certainly a genius and we have increased our output for our mobile app by 10x solely because of his work. Most importantly, he is such a wonderful person… I cannot recommend him highly enough.",
    author: "Trisha B.",
    role: "CTO of Pointz",
    context: "Long-term engagement",
    date: "Jul 2023",
    highlight: true,
  },
  {
    rating: 5,
    quote:
      "He is not only extremely fast, but understands complexities of front-end, back-end and server management deeply. I highly recommend Shahil M. to anyone who needs any type of development done.",
    author: "Upwork client",
    role: "React Native SWE position",
    context: "1,070 hours · $16,232 earned",
    date: "Apr 2024 — Nov 2025",
  },
  {
    rating: 5,
    quote:
      "Great work ethic. Fast to pick up our entire system. Well-versed in React Native / JS and GIS data handling.",
    author: "Upwork client",
    role: "Opportunity with GIS",
    context: "240 hours · 'Professional' soft-skill tag",
    date: "Feb — Apr 2024",
  },
];

const stats = [
  { value: "5.0★", label: "Average rating" },
  { value: "$20K+", label: "Total earnings" },
  { value: "1,311", label: "Hours logged" },
  { value: "Since '24", label: "Active on Upwork" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative section-top-rule py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <Reveal className="grid lg:grid-cols-12 gap-8 items-end mb-14 md:mb-16">
          <div className="lg:col-span-7">
            <p className="section-tag mb-5">
              <span className="section-tag__num">05</span>
              <span className="section-tag__bar" />
              <span>What clients say</span>
            </p>
            <h2 className="font-display h-section">
              <span className="text-primary">Verified</span> by
              <br />
              the people who hired me.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border/60">
            <p className="text-ink-soft leading-[1.65] text-[15.5px]">
              Every quote below is pulled from a public, verified review on my Upwork profile — including a
              long-form note from the CTO of Pointz. Nothing here is marketing copy.
            </p>
          </div>
        </Reveal>

        {/* Stat strip */}
        <Reveal>
          <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="group block mb-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-background px-6 py-7 group-hover:bg-card/50 transition-colors"
                >
                  <p className="eyebrow mb-3">{s.label}</p>
                  <p className="font-display text-3xl md:text-[40px] tracking-[-0.035em] leading-none">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground group-hover:text-primary transition-colors">
              View Upwork profile <ArrowUpRight className="h-3 w-3" />
            </p>
          </a>
        </Reveal>

        {/* Featured testimonial */}
        {testimonials.filter((t) => t.highlight).map((t) => (
          <Reveal
            as="figure"
            key={t.author}
            className="surface surface--featured relative overflow-hidden p-8 md:p-12 mb-6"
          >
            <Quote
              className="absolute top-8 right-8 h-10 w-10 text-primary/15"
              aria-hidden
              strokeWidth={1.5}
            />

            <div className="relative grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <span className="ml-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/70">
                    Verified review
                  </span>
                </div>
                <blockquote className="font-display text-[22px] md:text-[30px] leading-[1.3] tracking-[-0.022em] text-foreground/95">
                  “{t.quote}”
                </blockquote>
              </div>

              <figcaption className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-border/50 space-y-3">
                <p className="font-display text-[22px] tracking-[-0.02em]">{t.author}</p>
                <p className="text-ink-soft text-[14.5px]">{t.role}</p>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.context}
                </p>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.date}
                </p>
              </figcaption>
            </div>
          </Reveal>
        ))}

        {/* Other testimonials grid */}
        <div className="grid md:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60">
          {testimonials.filter((t) => !t.highlight).map((t, idx) => (
            <Reveal
              as="figure"
              key={t.author + idx}
              delay={idx * 80}
              className="bg-background p-7 md:p-8 flex flex-col transition-colors hover:bg-card/40"
            >
              <div className="flex items-center gap-1.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Verified
                </span>
              </div>
              <blockquote className="text-ink-soft leading-[1.6] flex-1 text-[14.5px]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/60 space-y-1.5">
                <p className="font-display text-[17px] tracking-[-0.02em]">{t.author}</p>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.role}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.context} · {t.date}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group"
          >
            <span>Read every review on Upwork</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
