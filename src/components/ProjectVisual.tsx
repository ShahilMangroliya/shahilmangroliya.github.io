type VisualKind =
  | "pointz"
  | "moodme"
  | "trace-bust"
  | "prank-caller"
  | "stormglass"
  | "madina"
  | "surf-club";

type Props = {
  kind: VisualKind;
  className?: string;
  size?: "card" | "feature";
};

const baseClass = "relative w-full overflow-hidden rounded-2xl border border-border/60 bg-background/60";

const IconCanvas = ({
  src,
  alt,
  background,
  padding = "p-6 md:p-8",
}: {
  src: string;
  alt: string;
  background: string;
  padding?: string;
}) => (
  <div className="absolute inset-0" style={{ background }}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`absolute inset-0 h-full w-full object-contain ${padding} drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]`}
    />
  </div>
);

const Pointz = () => (
  <IconCanvas
    src="/screenshots/pointz-icon.webp"
    alt="Pointz app icon"
    background="rgb(2, 73, 182)"
  />
);

const MoodMe = () => (
  <IconCanvas
    src="/screenshots/moodme-icon.webp"
    alt="MoodMe app icon"
    background="#ffffff"
  />
);

const PrankCaller = () => (
  <IconCanvas
    src="/screenshots/prank-caller-icon.webp"
    alt="Prank Caller app icon"
    background="rgb(146, 215, 244)"
  />
);

const TraceBust = () => (
  <IconCanvas
    src="/screenshots/trace-bust.png"
    alt="Trace Bust / FakeCallerID logo"
    background="rgb(24, 118, 254)"
    padding="p-10 md:p-14"
  />
);

const Stormglass = () => (
  <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full">
    <defs>
      <radialGradient id="sg-radar" cx="50%" cy="50%" r="55%">
        <stop offset="0" stopColor="hsl(75 88% 58% / 0.4)" />
        <stop offset="1" stopColor="hsl(75 88% 58% / 0)" />
      </radialGradient>
    </defs>
    <rect width="400" height="220" fill="hsl(30 8% 8%)" />
    <g transform="translate(200,110)">
      <circle r="100" fill="url(#sg-radar)" />
      {[30, 55, 80, 100].map((r) => (
        <circle key={r} r={r} fill="none" stroke="hsl(75 88% 58% / 0.25)" strokeWidth="1" />
      ))}
      <line x1="-100" y1="0" x2="100" y2="0" stroke="hsl(75 88% 58% / 0.2)" strokeWidth="1" />
      <line x1="0" y1="-100" x2="0" y2="100" stroke="hsl(75 88% 58% / 0.2)" strokeWidth="1" />
      <g>
        <line x1="0" y1="0" x2="90" y2="-45" stroke="hsl(75 88% 58%)" strokeWidth="2" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite" />
        </line>
      </g>
      {/* cloud */}
      <g transform="translate(-40,-30)" opacity="0.9">
        <circle cx="0" cy="0" r="14" fill="hsl(38 22% 92% / 0.9)" />
        <circle cx="14" cy="-4" r="12" fill="hsl(38 22% 92% / 0.9)" />
        <circle cx="28" cy="2" r="14" fill="hsl(38 22% 92% / 0.9)" />
        <rect x="-2" y="-2" width="32" height="14" fill="hsl(38 22% 92% / 0.9)" />
      </g>
      {/* raindrops */}
      {[
        [-30, 0], [-15, 4], [0, 0], [18, 2],
      ].map(([x, y], i) => (
        <line key={i} x1={x} y1={y + 18} x2={x} y2={y + 30} stroke="hsl(75 88% 58%)" strokeWidth="2" strokeLinecap="round" />
      ))}
    </g>
  </svg>
);

const Madina = () => (
  <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full">
    <rect width="400" height="220" fill="hsl(30 8% 8%)" />
    {/* network graph */}
    <g stroke="hsl(38 22% 92% / 0.18)" strokeWidth="1">
      <line x1="80" y1="60" x2="180" y2="110" />
      <line x1="80" y1="60" x2="140" y2="170" />
      <line x1="180" y1="110" x2="320" y2="60" />
      <line x1="180" y1="110" x2="280" y2="160" />
      <line x1="320" y1="60" x2="360" y2="130" />
      <line x1="280" y1="160" x2="360" y2="130" />
      <line x1="140" y1="170" x2="280" y2="160" />
      <line x1="80" y1="60" x2="40" y2="140" />
      <line x1="40" y1="140" x2="140" y2="170" />
    </g>
    <g stroke="hsl(75 88% 58%)" strokeWidth="1.5" opacity="0.7">
      <line x1="80" y1="60" x2="180" y2="110" />
      <line x1="180" y1="110" x2="280" y2="160" />
      <line x1="280" y1="160" x2="360" y2="130" />
    </g>
    {[
      [80, 60, 7], [40, 140, 5], [140, 170, 6], [180, 110, 10],
      [280, 160, 7], [320, 60, 6], [360, 130, 5],
    ].map(([x, y, r], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r={r as number} fill="hsl(75 88% 58%)" />
        <circle cx={x} cy={y} r={(r as number) + 5} fill="none" stroke="hsl(75 88% 58% / 0.25)" />
      </g>
    ))}
    {/* highlight node */}
    <g>
      <circle cx="180" cy="110" r="14" fill="none" stroke="hsl(24 92% 62%)" strokeWidth="2">
        <animate attributeName="r" values="10;18;10" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

const SurfClub = () => (
  <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full">
    <defs>
      <linearGradient id="sc-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="hsl(24 92% 62%)" />
        <stop offset="1" stopColor="hsl(340 90% 60%)" />
      </linearGradient>
      <linearGradient id="sc-sea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="hsl(75 88% 58% / 0.7)" />
        <stop offset="1" stopColor="hsl(75 88% 30%)" />
      </linearGradient>
    </defs>
    <rect width="400" height="120" fill="url(#sc-sky)" />
    <rect y="120" width="400" height="100" fill="url(#sc-sea)" />
    {/* sun */}
    <circle cx="300" cy="90" r="28" fill="hsl(38 22% 92%)" opacity="0.92" />
    {/* waves */}
    <path d="M 0 150 Q 50 140 100 150 T 200 150 T 300 150 T 400 150" stroke="hsl(38 22% 92% / 0.7)" strokeWidth="2" fill="none" />
    <path d="M 0 175 Q 50 165 100 175 T 200 175 T 300 175 T 400 175" stroke="hsl(38 22% 92% / 0.5)" strokeWidth="2" fill="none" />
    <path d="M 0 200 Q 50 190 100 200 T 200 200 T 300 200 T 400 200" stroke="hsl(38 22% 92% / 0.3)" strokeWidth="2" fill="none" />
    {/* board */}
    <g transform="translate(70,140) rotate(-12)">
      <ellipse cx="0" cy="0" rx="48" ry="9" fill="hsl(30 10% 5%)" />
      <ellipse cx="0" cy="-1" rx="48" ry="8" fill="hsl(38 22% 92%)" />
      <line x1="-30" y1="-1" x2="30" y2="-1" stroke="hsl(75 88% 58%)" strokeWidth="2" />
    </g>
  </svg>
);

const renderers: Record<VisualKind, () => JSX.Element> = {
  pointz: Pointz,
  moodme: MoodMe,
  "trace-bust": TraceBust,
  "prank-caller": PrankCaller,
  stormglass: Stormglass,
  madina: Madina,
  "surf-club": SurfClub,
};

const ProjectVisual = ({ kind, className = "", size = "card" }: Props) => {
  const Renderer = renderers[kind];
  const aspect = size === "feature" ? "aspect-[16/9]" : "aspect-[16/9]";
  return (
    <div className={`${baseClass} ${aspect} ${className}`}>
      <Renderer />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px hairline" />
    </div>
  );
};

export default ProjectVisual;
