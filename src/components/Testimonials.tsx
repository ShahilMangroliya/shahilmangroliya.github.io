import { Star, BadgeCheck, ArrowUpRight } from "lucide-react";

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
  {
    rating: 5,
    quote: "Lovely guy, 100% recommend.",
    author: "Upwork client",
    role: "Global Surf Club — React Native",
    context: "Fixed-price engagement",
    date: "Aug — Nov 2022",
  },
];

const stats = [
  { value: "100%", label: "Job Success" },
  { value: "$20K+", label: "Total earnings" },
  { value: "1,311", label: "Hours logged" },
  { value: "Top 3%", label: "Top Rated Plus" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px hairline" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,hsl(75_88%_30%/0.10),transparent_60%)]" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="label-mono mb-4">§ — What clients say</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
              <span className="font-serif-italic font-normal text-primary">Verified</span> by
              <br />
              the people who hired me.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-border/60">
            <p className="text-foreground/75 leading-relaxed">
              Every quote below is pulled from a public, verified review on my Upwork profile — including a long-form note from the CTO of Pointz. Nothing here is marketing copy.
            </p>
          </div>
        </div>

        {/* Stat strip */}
        <a
          href={UPWORK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="bg-background/95 backdrop-blur px-5 py-6 group-hover:bg-card/70 transition-colors"
              >
                <p className="label-mono mb-2 flex items-center gap-2">
                  <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                  <span>{s.label}</span>
                </p>
                <p className="font-display text-3xl md:text-4xl font-bold tracking-[-0.04em] leading-none">{s.value}</p>
                {i === stats.length - 1 && (
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground inline-flex items-center gap-1.5">
                    View profile <ArrowUpRight className="h-3 w-3" />
                  </p>
                )}
              </div>
            ))}
          </div>
        </a>

        {/* Featured testimonial */}
        {testimonials.filter((t) => t.highlight).map((t) => (
          <figure
            key={t.author}
            className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card backdrop-blur-sm p-8 md:p-12 mb-6 animate-fade-in"
          >
            <div className="absolute -top-32 -right-20 h-[360px] w-[360px] rounded-full bg-primary/15 blur-3xl" aria-hidden />

            <div className="relative grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                  <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70 inline-flex items-center gap-1.5">
                    <BadgeCheck className="h-3.5 w-3.5 text-primary" /> Verified
                  </span>
                </div>
                <blockquote className="font-display text-2xl md:text-3xl lg:text-[34px] leading-[1.25] tracking-[-0.02em] text-foreground/95">
                  “{t.quote}”
                </blockquote>
              </div>

              <figcaption className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-border/60 space-y-3">
                <p className="font-display text-2xl font-semibold tracking-tight">{t.author}</p>
                <p className="text-foreground/80">{t.role}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{t.context}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{t.date}</p>
              </figcaption>
            </div>
          </figure>
        ))}

        {/* Other testimonials grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.filter((t) => !t.highlight).map((t, idx) => (
            <figure
              key={t.author + idx}
              className="rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-6 transition-all hover:border-primary/40 animate-fade-in flex flex-col"
              style={{ animationDelay: `${idx * 0.07}s` }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground inline-flex items-center gap-1">
                  <BadgeCheck className="h-3 w-3 text-primary" /> Verified
                </span>
              </div>
              <blockquote className="text-foreground/85 leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border/60 space-y-1.5">
                <p className="font-display text-base font-semibold tracking-tight">{t.author}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{t.role}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t.context} · {t.date}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/40 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/85 backdrop-blur transition-all hover:border-primary/60 hover:text-primary"
          >
            Read every review on Upwork
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
