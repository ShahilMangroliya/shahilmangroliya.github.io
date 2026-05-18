import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const UPWORK_URL = "https://www.upwork.com/freelancers/~014ca1b42c6232598c";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="container mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Mark */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              to="/"
              className="font-display text-[44px] md:text-[56px] tracking-[-0.04em] leading-none inline-block"
            >
              Shahil<span className="text-primary">.</span>
            </Link>
            <p className="text-[15px] text-ink-soft max-w-md leading-[1.65]">
              Senior software engineer. Founding engineer of a stealth AI app — shipped the MVP with Claude
              Code (Dec 2025 → Apr 2026). Pointz on retainer. Comfortable owning a hard product end-to-end.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork profile"
                className="inline-flex items-center gap-2 h-10 rounded-full border border-border/80 bg-card/30 px-3.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-foreground/85 transition-all hover:border-primary/60 hover:text-primary"
              >
                Upwork
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com/ShahilMangroliya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid place-items-center h-10 w-10 rounded-full border border-border/80 bg-card/30 text-foreground/85 transition-all hover:border-primary/60 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shahil-mangroliya/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid place-items-center h-10 w-10 rounded-full border border-border/80 bg-card/30 text-foreground/85 transition-all hover:border-primary/60 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:shahil.mangroliya@outlook.com"
                aria-label="Email"
                className="grid place-items-center h-10 w-10 rounded-full border border-border/80 bg-card/30 text-foreground/85 transition-all hover:border-primary/60 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Index */}
          <div className="lg:col-span-3 space-y-4">
            <p className="eyebrow">Index</p>
            <ul className="space-y-2.5 font-mono text-[12.5px] text-foreground/80">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  Projects <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <a href="/#hire" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#work" className="hover:text-primary transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Elsewhere */}
          <div className="lg:col-span-4 space-y-4">
            <p className="eyebrow">Elsewhere</p>
            <ul className="space-y-2.5 font-mono text-[12.5px] text-foreground/80">
              <li>
                <a
                  href={UPWORK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full hover:text-primary transition-colors"
                >
                  upwork.com/freelancers/~shahil <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ShahilMangroliya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full hover:text-primary transition-colors"
                >
                  github.com/ShahilMangroliya <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shahil-mangroliya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full hover:text-primary transition-colors"
                >
                  linkedin.com/in/shahil-mangroliya <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:shahil.mangroliya@outlook.com"
                  className="inline-flex items-center justify-between w-full hover:text-primary transition-colors"
                >
                  shahil.mangroliya@outlook.com <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-muted-foreground">
            © {year} Shahil Mangroliya · All rights reserved
          </p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-muted-foreground inline-flex items-center gap-2.5">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
            Built with React 19 · Vite · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
