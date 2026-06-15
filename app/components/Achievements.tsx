"use client";
import { ACHIEVEMENTS } from "../lib/content";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

/**
 * Genuine awards/recognition. Renders nothing when the list is empty so we
 * never show an empty or fabricated section. `year` is optional.
 */
export default function Achievements() {
  const ref = useReveal(120);

  if (ACHIEVEMENTS.length === 0) return null;

  return (
    <section id="achievements" className="section">
      <div className="container" ref={ref}>
        <SectionHeading index="02" eyebrow="Recognition" title={<>Awards &amp; honors.</>} />

        <ul className="awards-grid">
          {ACHIEVEMENTS.map((a) => (
            <li key={a.title} className="card reveal" style={{ padding: "1.75rem" }}>
              {a.year && (
                <span className="mono" style={{ fontSize: "0.72rem", color: "var(--accent)" }}>{a.year}</span>
              )}
              <h3 className="display" style={{ fontSize: "var(--step-1)", marginTop: a.year ? 6 : 0 }}>
                {a.title}
              </h3>
              <p className="text-muted" style={{ marginTop: "0.6rem", fontSize: "var(--step--1)" }}>{a.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .awards-grid {
          list-style: none;
          display: grid;
          /* Cap card width so a single award reads as an intentional highlight
             rather than a full-width banner; extra awards wrap to new columns. */
          grid-template-columns: repeat(auto-fit, minmax(280px, 420px));
          gap: 1.5rem;
        }
      `}</style>
    </section>
  );
}
