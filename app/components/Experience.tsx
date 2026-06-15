"use client";
import { EXPERIENCE } from "../lib/content";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

/** Work + leadership history rendered as a clean two-column timeline. */
export default function Experience() {
  const ref = useReveal(120);

  return (
    <section id="experience" className="section" style={{ background: "var(--bg-elevated)" }}>
      <div className="container" ref={ref}>
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title={<>Where I&apos;ve worked and led.</>}
        />

        <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
          {EXPERIENCE.map((role) => (
            <li
              key={`${role.org}-${role.title}`}
              className="reveal exp-row"
            >
              {/* Left rail: period + location */}
              <div className="exp-meta">
                <span className="mono" style={{ fontSize: "0.78rem", color: "var(--accent)" }}>
                  {role.period}
                </span>
                <span className="mono text-faint" style={{ fontSize: "0.72rem" }}>
                  {role.location}
                </span>
              </div>

              {/* Right: role details */}
              <div>
                <h3 className="display" style={{ fontSize: "var(--step-1)" }}>{role.title}</h3>
                <p className="text-muted" style={{ marginTop: 2, fontSize: "var(--step--1)" }}>
                  {role.org}
                </p>
                <ul style={{ marginTop: "0.75rem", paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {role.points.map((p, i) => (
                    <li key={i} className="text-muted" style={{ fontSize: "var(--step--1)" }}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .exp-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: clamp(1.5rem, 4vw, 3rem);
          padding-block: 2rem;
          border-top: 1px solid var(--border);
        }
        .exp-row:last-child { border-bottom: 1px solid var(--border); }
        .exp-meta { display: flex; flex-direction: column; gap: 0.35rem; }
        @media (max-width: 768px) {
          .exp-row { grid-template-columns: 1fr; gap: 0.75rem; padding-block: 1.75rem; }
        }
      `}</style>
    </section>
  );
}
