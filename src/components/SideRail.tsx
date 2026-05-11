import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type SectionDef = { id: string; label: string };

const HOME_SECTIONS: SectionDef[] = [
  { id: "home", label: "Top" },
  { id: "hire", label: "Hire" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Stack" },
  { id: "testimonials", label: "Reviews" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const formatSuratTime = () => {
  // IST = UTC+5:30
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60_000;
  const ist = new Date(utc + 5.5 * 60 * 60_000);
  const hh = String(ist.getHours()).padStart(2, "0");
  const mm = String(ist.getMinutes()).padStart(2, "0");
  return `${hh}:${mm} IST`;
};

const SideRail = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const sections = isHome ? HOME_SECTIONS : [];
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  const [time, setTime] = useState<string>(formatSuratTime());

  // Live clock — tick every 15s
  useEffect(() => {
    const t = window.setInterval(() => setTime(formatSuratTime()), 15_000);
    return () => window.clearInterval(t);
  }, []);

  // Scroll spy — find which section is in view
  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isHome) return null;

  return (
    <aside className="side-rail" aria-label="Section navigation rail">
      <div className="side-rail__clock" aria-label={`Surat time ${time}`}>
        Surat · {time}
      </div>

      <nav className="side-rail__dots" aria-label="Page sections">
        {sections.map((s) => (
          <button
            key={s.id}
            type="button"
            className="side-rail__dot"
            data-active={active === s.id ? "true" : "false"}
            data-label={s.label}
            aria-label={`Jump to ${s.label}`}
            aria-current={active === s.id ? "true" : undefined}
            onClick={() => scrollTo(s.id)}
          />
        ))}
      </nav>

      <button
        type="button"
        className="side-rail__top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </aside>
  );
};

export default SideRail;
