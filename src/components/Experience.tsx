import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

type Role = {
  title: string;
  period: string;
  achievements: string[];
};

type ExperienceEntry = {
  company: string;
  location: string;
  period: string;
  meta: string;
  link?: string;
  tags: string[];
  roles: Role[];
};

const experiences: ExperienceEntry[] = [
  {
    company: "Pointz Mobility",
    location: "Remote (USA)",
    period: "Aug 2022 → Present",
    meta: "Safer-bike mapping · React Native + Spring Boot + AWS",
    link: "https://www.bikepointz.com",
    tags: ["Head of Engineering (former)", "Maintenance retainer", "Backend", "Mobile", "AWS"],
    roles: [
      {
        title: "Engineering Consultant — ad-hoc maintenance",
        period: "2025 — Present",
        achievements: [
          "On retainer for the platform I built: handling fixes, change requests, and stability work as they come up.",
          "Stayed the trusted owner of the codebase — security, infra, payments, and mobile — without the daily-driver load.",
          "Frees up the bulk of my time for the stealth AI startup I'm building now.",
        ],
      },
      {
        title: "Head of Engineering",
        period: "Sep 2024 — 2025",
        achievements: [
          "Sole technical owner of the platform — backend, frontend, databases, security, infrastructure.",
          "Built a security baseline of auth/session tokens, PKCE, SSL pinning, nonce validation, and at-rest/in-flight encryption.",
          "Reduced AWS infrastructure costs by 65% through EC2/RDS right-sizing and resource management.",
          "Improved backend performance, lowering API response times and tightening time-to-backend reliability.",
        ],
      },
      {
        title: "Full-Stack Developer",
        period: "Sep 2023 — Sep 2024",
        achievements: [
          "Took over the Java Spring Boot backend within one week of joining.",
          "Architected payments — In-App Purchases via RevenueCat and Stripe for web — to migrate profit-share onto IAP.",
          "Designed and shipped Pointz Plus subscription features end-to-end.",
          "Built crowdsourcing primitives for hazards, shortcuts, and amenities — both client and server-side.",
        ],
      },
      {
        title: "Frontend Developer (Pointz: Safer bike mapping)",
        period: "Aug 2022 — Sep 2023",
        achievements: [
          "Re-architected the navigation system, materially improving TTS and re-routing behavior.",
          "Integrated Firebase, CodePush, Facebook SDK, and other partner SDKs.",
          "Upgraded the app to the latest React Native + native toolchains for current device support.",
        ],
      },
    ],
  },
  {
    company: "Eglaf Technology",
    location: "Remote (India)",
    period: "Jun 2022 → Oct 2022",
    meta: "Weather data + state management consult",
    tags: ["Sr React Native", "API integration"],
    roles: [
      {
        title: "Sr React Native Developer",
        period: "Jun 2022 — Oct 2022",
        achievements: [
          "Took over the project to integrate APIs and design state management from scratch.",
          "Integrated stormglass.io to deliver accurate weather data into the product surface.",
        ],
      },
    ],
  },
  {
    company: "Artistry Solutions",
    location: "Surat, India",
    period: "Sep 2020 → Aug 2022",
    meta: "Mobile product team — three shipped apps",
    tags: ["React Native", "Mobile", "IAP", "Animations"],
    roles: [
      {
        title: "React Native Developer",
        period: "Sep 2020 — Aug 2022",
        achievements: [
          "MoodMe (Relationship Mood App) — wired Firebase messaging with deep links into the right pages, hardened device stability. The app crossed 100K+ downloads across iOS and Android.",
          "Trace Bust — UI redesign with light/dark theme switching, modernized device support, and react-native-iap for in-app purchase.",
          "Prank Caller — built a custom drawer animation at a steady 60 fps and shipped a prank-chat messaging surface.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="work" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px hairline" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(75_88%_30%/0.06),transparent_60%)]" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="label-mono mb-4">§ 01 — Work history</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
              Five years of <span className="text-primary">shipping</span>,
              <br />
              owning, refactoring.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-border/60">
            <p className="text-foreground/75 leading-relaxed">
              From bug-fixing a 100K-download mood app to running the platform of a navigation startup — each chapter added a layer to how I build:
              <span className="text-primary"> safer mobile, cheaper cloud, tighter APIs.</span>
            </p>
          </div>
        </div>

        {/* Timeline */}
        <ol className="relative space-y-20">
          {experiences.map((exp, expIdx) => (
            <li
              key={expIdx}
              className="group grid lg:grid-cols-12 gap-6 lg:gap-10 animate-fade-in"
              style={{ animationDelay: `${expIdx * 0.1}s` }}
            >
              {/* Left column: company */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                    {String(expIdx + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-border/60 group-hover:bg-primary/60 transition-colors" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.03em] text-foreground leading-tight">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline gap-2 group/c hover:text-primary transition-colors"
                    >
                      <span>{exp.company}</span>
                      <ArrowUpRight className="h-5 w-5 -translate-y-0.5 opacity-50 group-hover/c:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                <p className="text-base text-foreground/85 leading-relaxed">
                  {exp.meta}
                </p>
                <div className="flex flex-col gap-2 font-mono text-[12px] text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-primary/80" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary/80" />
                    {exp.location}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((t) => (
                    <span key={t} className="tag-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right column: roles */}
              <div className="lg:col-span-8 space-y-8">
                {exp.roles.map((role, rIdx) => (
                  <article
                    key={rIdx}
                    className="relative rounded-2xl border border-border/60 bg-gradient-card backdrop-blur-sm p-7 md:p-9 transition-all duration-500 hover:border-primary/40 hover:shadow-card"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                      <h4 className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                        {role.title}
                      </h4>
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {role.period}
                      </span>
                    </div>
                    <ul className="space-y-3.5">
                      {role.achievements.map((a, aIdx) => (
                        <li
                          key={aIdx}
                          className="flex items-start gap-3 text-foreground/85 leading-relaxed"
                        >
                          <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
