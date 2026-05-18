import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import Reveal from "@/components/Reveal";

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
    company: "Stealth AI Startup",
    location: "Remote",
    period: "Dec 2025 → Apr 2026",
    meta: "AI-native consumer app · Claude Code + LLM stack",
    tags: ["Founding Engineer", "AI-native MVP", "Claude Code", "LLM workflows"],
    roles: [
      {
        title: "Founding Engineer",
        period: "Dec 2025 → Apr 2026",
        achievements: [
          "Shipped the MVP of an AI-native consumer app, using Claude Code + custom subagent workflows as the daily engineering driver.",
          "Owned product, mobile, backend, LLM orchestration, and payments from zero — the full founding-engineer remit.",
          "Exited April 2026 after MVP delivery; back available for sprint and retainer work.",
        ],
      },
    ],
  },
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
          "On retainer for the platform I led as Head of Engineering: handling fixes, change requests, and stability work as they come up.",
          "Stayed the trusted owner of the codebase — security, infra, payments, and mobile — without the daily-driver load.",
          "Frees up the bulk of my time for sprint and retainer engagements.",
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
    <section id="work" className="relative section-top-rule py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <p className="section-tag mb-5">
              <span className="section-tag__num">02</span>
              <span className="section-tag__bar" />
              <span>Work history</span>
            </p>
            <h2 className="font-display h-section">
              Five years of <span className="text-primary">shipping</span>,
              <br />
              owning, refactoring.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border/60">
            <p className="text-ink-soft leading-[1.65] text-[15.5px]">
              From bug-fixing a 100K-download mood app to running the platform of a navigation startup —
              each chapter added a layer to how I build:{" "}
              <span className="text-foreground">safer mobile, cheaper cloud, tighter APIs.</span>
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <ol className="relative space-y-20 md:space-y-24">
          {experiences.map((exp, expIdx) => (
            <Reveal as="li" key={expIdx} className="grid lg:grid-cols-12 gap-7 lg:gap-12">
              {/* Left column: company */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
                    {String(expIdx + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-border/60" />
                </div>

                <h3 className="font-display text-[30px] md:text-[36px] tracking-[-0.03em] text-foreground leading-[1.05]">
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

                <p className="text-[14.5px] text-ink-soft leading-[1.6]">{exp.meta}</p>

                <div className="flex flex-col gap-2 font-mono text-[11.5px] text-muted-foreground">
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
              <div className="lg:col-span-8 space-y-5">
                {exp.roles.map((role, rIdx) => (
                  <article
                    key={rIdx}
                    className="surface group/role p-7 md:p-9"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5 pb-5 border-b border-border/50">
                      <h4 className="font-display text-[20px] md:text-[22px] text-foreground tracking-[-0.02em]">
                        {role.title}
                      </h4>
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                        {role.period}
                      </span>
                    </div>
                    <ul className="space-y-3.5">
                      {role.achievements.map((a, aIdx) => (
                        <li
                          key={aIdx}
                          className="flex items-start gap-3.5 text-ink-soft leading-[1.62] text-[14.5px]"
                        >
                          <span className="mt-[10px] inline-block h-[3px] w-[10px] bg-primary/80 shrink-0 rounded-sm" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
