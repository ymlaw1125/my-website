"use client";
import { SKILLS } from "../lib/content";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

/**
 * Honest skills: grouped tag lists derived from real project experience.
 * No fabricated proficiency percentages.
 */
export default function Skills() {
  const ref = useReveal(80);

  return (
    <section id="skills" className="section">
      <div className="container" ref={ref}>
        <SectionHeading index="05" eyebrow="Toolkit" title={<>Tools I build with.</>} />

        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div key={group.label} className="reveal">
              <h3 className="mono text-faint" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                {group.label}
              </h3>
              <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", listStyle: "none" }}>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="tag" style={{ fontSize: "0.8rem", padding: "0.4rem 0.85rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: clamp(2rem, 5vw, 3.5rem);
        }
        @media (max-width: 560px) { .skills-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
      `}</style>
    </section>
  );
}
