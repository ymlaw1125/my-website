"use client";
import { useEffect, useRef } from "react";

/** Thin top-of-page reading-progress bar. Uses transform (cheap to repaint). */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      const pct = max > 0 ? scrollTop / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${pct})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref} className="scroll-progress" aria-hidden />;
}
