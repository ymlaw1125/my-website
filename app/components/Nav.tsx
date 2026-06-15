"use client";
import { useEffect, useState } from "react";
import { PERSON, SECTIONS } from "../lib/content";

/**
 * Fixed top navigation. Becomes opaque on scroll, highlights the section in
 * view (scrollspy via IntersectionObserver), and collapses to an accessible
 * disclosure menu on small screens. Anchor links use native smooth scroll
 * (scroll-padding handles the header offset — see globals.css).
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: track which section occupies the upper portion of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        insetInline: 0,
        top: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        background: scrolled ? "rgba(10,11,13,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(1.4)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
      }}
    >
      <nav
        className="container"
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        aria-label="Primary"
      >
        {/* Wordmark */}
        <a href="#top" className="mono" style={{ fontWeight: 500, letterSpacing: "0.04em" }}>
          {PERSON.initials}
          <span className="text-faint">.dev</span>
        </a>

        {/* Desktop links */}
        <ul
          className="nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: "1.6rem", listStyle: "none" }}
        >
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a className="nav-link" href={`#${s.id}`} data-active={active === s.id}>
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary" style={{ padding: "0.5rem 1rem" }}>
              Get in touch
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            width: 40,
            height: 40,
            position: "relative",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                position: "absolute",
                left: 9,
                width: 22,
                height: 1.5,
                background: "var(--text)",
                borderRadius: 2,
                transition: "transform 0.25s var(--ease), opacity 0.2s",
                top: 20 + (i - 1) * 7,
                transform: open
                  ? i === 0
                    ? "translateY(7px) rotate(45deg)"
                    : i === 2
                    ? "translateY(-7px) rotate(-45deg)"
                    : "scaleX(0)"
                  : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="nav-mobile"
        style={{
          display: "none",
          overflow: "hidden",
          maxHeight: open ? 360 : 0,
          transition: "max-height 0.35s var(--ease)",
          background: "rgba(10,11,13,0.95)",
          backdropFilter: "blur(14px)",
          borderBottom: open ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <ul
          className="container"
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            paddingBlock: "1.5rem",
          }}
        >
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                className="nav-link"
                href={`#${s.id}`}
                data-active={active === s.id}
                onClick={() => setOpen(false)}
                style={{ fontSize: "var(--step-0)" }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-toggle  { display: block !important; }
          .nav-mobile  { display: block !important; }
        }
      `}</style>
    </header>
  );
}
