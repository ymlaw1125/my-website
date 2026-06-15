import { HERO } from "../lib/content";

/** Arrow glyph reused across CTAs/links. */
function Arrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Landing section. Server component — the only motion is a pure-CSS aurora
 * (two slow-drifting blobs) defined inline below, which the global
 * reduced-motion rule freezes automatically.
 */
export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Decorative animated backdrop */}
      <div aria-hidden className="hero-aurora">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="hero-grid" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 96 }}>
        <p className="eyebrow hero-fade" style={{ marginBottom: "1.75rem" }}>
          {HERO.eyebrow}
        </p>

        <h1
          className="display hero-fade"
          style={{ fontSize: "var(--step-4)", animationDelay: "0.08s", maxWidth: "16ch" }}
        >
          {HERO.headline[0]}{" "}
          <span className="gradient-text">{HERO.headline[1]}.</span>
        </h1>

        <p
          className="hero-fade text-muted"
          style={{
            marginTop: "1.75rem",
            maxWidth: "52ch",
            fontSize: "var(--step-1)",
            animationDelay: "0.16s",
          }}
        >
          {HERO.tagline}
        </p>

        <div
          className="hero-fade"
          style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", marginTop: "2.5rem", animationDelay: "0.24s" }}
        >
          <a href="#work" className="btn btn-primary">
            View work <Arrow />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#work"
        aria-label="Scroll to work"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 1,
        }}
      >
        <span className="mono text-faint" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <span className="scroll-cue" />
      </a>

      <style>{`
        .hero-aurora { position: absolute; inset: 0; z-index: 0; }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(80% 60% at 50% 30%, #000 0%, transparent 75%);
          -webkit-mask-image: radial-gradient(80% 60% at 50% 30%, #000 0%, transparent 75%);
          opacity: 0.5;
        }
        .blob {
          position: absolute; border-radius: 50%; filter: blur(90px);
          opacity: 0.5; will-change: transform;
        }
        .blob-1 {
          width: 42vw; height: 42vw; top: -10%; left: -5%;
          background: radial-gradient(circle, rgba(106,169,255,0.5), transparent 65%);
          animation: drift1 18s ease-in-out infinite;
        }
        .blob-2 {
          width: 38vw; height: 38vw; top: 20%; right: -8%;
          background: radial-gradient(circle, rgba(154,140,255,0.4), transparent 65%);
          animation: drift2 22s ease-in-out infinite;
        }
        @keyframes drift1 {
          50% { transform: translate(8%, 12%) scale(1.1); }
        }
        @keyframes drift2 {
          50% { transform: translate(-10%, 8%) scale(1.08); }
        }
        .hero-fade { opacity: 0; animation: heroUp 0.8s var(--ease) forwards; }
        @keyframes heroUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        .scroll-cue {
          width: 1px; height: 42px;
          background: linear-gradient(var(--text-faint), transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade { opacity: 1; animation: none; }
        }
      `}</style>
    </section>
  );
}
