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

const Pointz = () => (
  <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full">
    <defs>
      <linearGradient id="pz-grad" x1="0" x2="1">
        <stop offset="0" stopColor="hsl(75 88% 58%)" />
        <stop offset="1" stopColor="hsl(24 92% 62%)" />
      </linearGradient>
      <radialGradient id="pz-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="hsl(75 88% 60% / 0.45)" />
        <stop offset="1" stopColor="hsl(75 88% 60% / 0)" />
      </radialGradient>
      <pattern id="pz-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(38 22% 92% / 0.05)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="400" height="220" fill="url(#pz-grid)" />
    <circle cx="120" cy="110" r="120" fill="url(#pz-glow)" opacity="0.5" />
    {/* roads */}
    <path d="M 20 180 Q 90 160 130 130 T 240 90 T 380 60" stroke="hsl(38 22% 92% / 0.12)" strokeWidth="14" fill="none" strokeLinecap="round" />
    <path d="M 20 180 Q 90 160 130 130 T 240 90 T 380 60" stroke="url(#pz-grad)" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 4" />
    <path d="M 30 40 Q 100 70 150 60 T 280 95 T 380 130" stroke="hsl(38 22% 92% / 0.08)" strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d="M 30 40 Q 100 70 150 60 T 280 95 T 380 130" stroke="hsl(75 88% 58% / 0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* pins */}
    <g>
      <circle cx="130" cy="130" r="10" fill="hsl(75 88% 58%)" />
      <circle cx="130" cy="130" r="18" fill="hsl(75 88% 58% / 0.2)" />
      <circle cx="130" cy="130" r="3" fill="hsl(30 10% 5%)" />
    </g>
    <g>
      <circle cx="280" cy="90" r="7" fill="hsl(24 92% 62%)" />
      <circle cx="280" cy="90" r="14" fill="hsl(24 92% 62% / 0.2)" />
    </g>
    {/* bike marker */}
    <g transform="translate(48,170)">
      <circle r="6" fill="hsl(75 88% 58%)">
        <animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle r="14" fill="hsl(75 88% 58% / 0)" stroke="hsl(75 88% 58% / 0.6)" strokeWidth="1.5">
        <animate attributeName="r" values="6;28;6" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

const MoodMe = () => (
  <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full">
    <defs>
      <linearGradient id="mm-grad" x1="0" x2="1">
        <stop offset="0" stopColor="hsl(24 92% 62%)" />
        <stop offset="1" stopColor="hsl(340 90% 60%)" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="hsl(30 8% 8%)" />
    {/* heart */}
    <g transform="translate(200,110)">
      <path
        d="M 0 30 C -50 0 -60 -40 -30 -50 C -10 -55 0 -40 0 -25 C 0 -40 10 -55 30 -50 C 60 -40 50 0 0 30 Z"
        fill="url(#mm-grad)"
        opacity="0.9"
      />
      <path
        d="M 0 30 C -50 0 -60 -40 -30 -50 C -10 -55 0 -40 0 -25 C 0 -40 10 -55 30 -50 C 60 -40 50 0 0 30 Z"
        fill="none"
        stroke="hsl(38 22% 92% / 0.3)"
        strokeWidth="1"
      />
    </g>
    {/* waveform */}
    <path
      d="M 20 110 L 60 110 L 75 80 L 95 140 L 115 60 L 135 160 L 155 90 L 175 110 L 380 110"
      stroke="hsl(24 92% 62%)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M 20 110 L 60 110 L 75 80 L 95 140 L 115 60 L 135 160 L 155 90 L 175 110 L 380 110"
      stroke="hsl(24 92% 62%)"
      strokeWidth="0.5"
      fill="none"
      strokeLinecap="round"
      strokeDasharray="2 4"
    />
    {/* tiny dots */}
    {[40, 80, 120, 160, 240, 290, 340].map((x, i) => (
      <circle key={i} cx={x} cy={110} r="1.5" fill="hsl(38 22% 92% / 0.5)" />
    ))}
  </svg>
);

const TraceBust = () => (
  <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full">
    <defs>
      <linearGradient id="tb-split" x1="0" x2="1">
        <stop offset="0.5" stopColor="hsl(30 10% 5%)" />
        <stop offset="0.5" stopColor="hsl(38 22% 92%)" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#tb-split)" />
    {/* split horizon */}
    <line x1="200" y1="0" x2="200" y2="220" stroke="hsl(75 88% 58%)" strokeWidth="1.5" />
    {/* dark side magnifier */}
    <g transform="translate(110,110)">
      <circle r="40" fill="none" stroke="hsl(75 88% 58%)" strokeWidth="2.5" />
      <line x1="28" y1="28" x2="55" y2="55" stroke="hsl(75 88% 58%)" strokeWidth="3" strokeLinecap="round" />
      <circle r="40" fill="hsl(75 88% 58% / 0.05)" />
    </g>
    {/* light side magnifier */}
    <g transform="translate(290,110)">
      <circle r="40" fill="none" stroke="hsl(30 10% 5%)" strokeWidth="2.5" />
      <line x1="28" y1="28" x2="55" y2="55" stroke="hsl(30 10% 5%)" strokeWidth="3" strokeLinecap="round" />
      <circle r="40" fill="hsl(30 10% 10% / 0.06)" />
    </g>
    {/* sun/moon */}
    <circle cx="50" cy="50" r="14" fill="hsl(75 88% 58%)" opacity="0.7" />
    <circle cx="350" cy="50" r="14" fill="hsl(30 10% 5%)" opacity="0.7" />
  </svg>
);

const PrankCaller = () => (
  <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full">
    <rect width="400" height="220" fill="hsl(30 8% 8%)" />
    {/* dial pad */}
    {Array.from({ length: 12 }).map((_, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 130 + col * 50;
      const y = 30 + row * 45;
      return (
        <g key={i}>
          <circle cx={x} cy={y} r={18} fill="none" stroke="hsl(38 22% 92% / 0.2)" strokeWidth="1" />
          <circle cx={x} cy={y} r={3} fill="hsl(75 88% 58% / 0.7)" />
        </g>
      );
    })}
    {/* call wave bands */}
    <g transform="translate(40,110)">
      {[6, 14, 22, 30, 38].map((r, i) => (
        <path
          key={r}
          d={`M 0 -${r} A ${r} ${r} 0 0 1 0 ${r}`}
          fill="none"
          stroke="hsl(24 92% 62%)"
          strokeWidth="2"
          opacity={1 - i * 0.18}
          strokeLinecap="round"
        />
      ))}
    </g>
    <g transform="translate(360,110)">
      {[6, 14, 22, 30, 38].map((r, i) => (
        <path
          key={r}
          d={`M 0 -${r} A ${r} ${r} 0 0 0 0 ${r}`}
          fill="none"
          stroke="hsl(75 88% 58%)"
          strokeWidth="2"
          opacity={1 - i * 0.18}
          strokeLinecap="round"
        />
      ))}
    </g>
  </svg>
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
