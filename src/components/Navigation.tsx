import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const homeLinks = [
  { href: "#contact", label: "Hire me" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onProjects = location.pathname.startsWith("/projects");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-background/75 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label="Shahil Mangroliya - Home"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-md border border-border bg-card text-foreground transition-colors group-hover:border-primary">
              <span className="font-display text-base font-bold leading-none">S</span>
              <span className="absolute inset-y-0 left-0 w-px bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
                Shahil Mangroliya
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
                Senior Engineer · Surat → ∞
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {onProjects ? (
              <Link
                to="/"
                className="group relative px-3 py-2 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/70 hover:text-foreground transition-colors"
              >
                ← Index
              </Link>
            ) : (
              homeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative px-3 py-2 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.label}
                  <span className="absolute left-3 right-3 -bottom-px h-px scale-x-0 origin-left bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))
            )}
            <Link
              to={onProjects ? "/" : "/projects"}
              className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.16em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              {onProjects ? "Back home" : "Projects"}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 animate-fade-down" role="navigation" aria-label="Mobile navigation menu">
            <div className="flex flex-col gap-1">
              {!onProjects &&
                homeLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-3 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/80 hover:bg-muted/50 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              <Link
                to={onProjects ? "/" : "/projects"}
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-between rounded-md border border-primary/40 bg-primary/10 px-3 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-primary"
              >
                {onProjects ? "Back home" : "View Projects"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
