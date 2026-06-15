"use client";
import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` to the element (and any `.reveal` descendants) the first
 * time it scrolls into view, driving the CSS scroll-reveal transition.
 *
 * `stagger` adds an incremental transition-delay to nested `.reveal` children
 * so groups animate in sequence rather than all at once.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(stagger = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: show immediately, skip the observer.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      el.querySelectorAll(".reveal").forEach((c) => c.classList.add("is-visible"));
      return;
    }

    if (stagger > 0) {
      el.querySelectorAll<HTMLElement>(".reveal").forEach((child, i) => {
        child.style.transitionDelay = `${i * stagger}ms`;
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-visible");
        el.querySelectorAll(".reveal").forEach((c) => c.classList.add("is-visible"));
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}
