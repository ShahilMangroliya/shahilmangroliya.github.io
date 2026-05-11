import { useEffect, useRef } from "react";

const INTERACTIVE_SEL =
  'a, button, [role="button"], [data-cursor], summary, label[for], select';
const TEXT_SEL =
  'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="submit"]):not([type="button"]), textarea, [contenteditable="true"]';

type Phase = "idle" | "hover" | "text" | "press";

const CursorEffects = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    document.documentElement.classList.add("cursor-custom");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dot = { x: target.x, y: target.y };
    const ring = { x: target.x, y: target.y };
    let phase: Phase = "idle";
    let pressed = false;
    let rafId = 0;
    let visible = false;

    const dotEl = dotRef.current!;
    const ringEl = ringRef.current!;
    const labelEl = labelRef.current!;

    const setPhase = (next: Phase) => {
      if (next === phase) return;
      phase = next;
      dotEl.dataset.phase = next;
      ringEl.dataset.phase = next;
    };

    const setLabel = (text: string | null) => {
      if (!text) {
        if (labelEl.dataset.show !== "false") labelEl.dataset.show = "false";
        return;
      }
      if (labelEl.textContent !== text) labelEl.textContent = text;
      labelEl.dataset.show = "true";
    };

    const resolvePhase = (el: HTMLElement | null) => {
      if (!el) return;
      if (el.closest(TEXT_SEL)) {
        setPhase("text");
        setLabel(null);
        return;
      }
      const interactive = el.closest(INTERACTIVE_SEL) as HTMLElement | null;
      if (interactive) {
        setPhase(pressed ? "press" : "hover");
        setLabel(interactive.getAttribute("data-cursor"));
        return;
      }
      setPhase(pressed ? "press" : "idle");
      setLabel(null);
    };

    const handleMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        document.documentElement.dataset.cursorReady = "true";
      }
      resolvePhase(e.target as HTMLElement | null);
    };

    const handleDown = (e: MouseEvent) => {
      pressed = true;
      resolvePhase(e.target as HTMLElement | null);
    };
    const handleUp = (e: MouseEvent) => {
      pressed = false;
      resolvePhase(e.target as HTMLElement | null);
    };
    const handleLeave = () => {
      document.documentElement.dataset.cursorReady = "false";
      visible = false;
    };
    const handleEnter = () => {
      document.documentElement.dataset.cursorReady = "true";
      visible = true;
    };

    const tick = () => {
      dot.x += (target.x - dot.x) * 0.42;
      dot.y += (target.y - dot.y) * 0.42;
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;

      dotEl.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0)`;
      ringEl.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      document.documentElement.classList.remove("cursor-custom");
      delete document.documentElement.dataset.cursorReady;
    };
  }, []);

  return (
    <div className="cursor-effects" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring" data-phase="idle">
        <span ref={labelRef} className="cursor-ring__label" data-show="false" />
      </div>
      <div ref={dotRef} className="cursor-dot" data-phase="idle" />
    </div>
  );
};

export default CursorEffects;
