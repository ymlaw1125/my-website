"use client";
import Image from "next/image";
import { ABOUT, PERSON } from "../lib/content";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const ref = useReveal(100);

  return (
    <section id="about" className="section" style={{ background: "var(--bg-elevated)" }}>
      <div className="container" ref={ref}>
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              {ABOUT.heading[0]}
              <br />
              <span className="gradient-text">{ABOUT.heading[1]}</span>
            </>
          }
        />

        <div className="about-grid">
          {/* Narrative + optional portrait */}
          <div className="reveal">
            {PERSON.photo && (
              <div
                style={{
                  position: "relative",
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid var(--border-strong)",
                  marginBottom: "1.75rem",
                }}
              >
                <Image src={PERSON.photo} alt={PERSON.name} fill sizes="120px" style={{ objectFit: "cover" }} />
              </div>
            )}
            {ABOUT.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-muted"
                style={{ marginBottom: i === ABOUT.paragraphs.length - 1 ? 0 : "1.1rem" }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Fact list */}
          <dl className="reveal about-facts">
            {ABOUT.facts.map((f) => (
              <div key={f.label} style={{ borderLeft: "1px solid var(--border-strong)", paddingLeft: "1.1rem" }}>
                <dt className="mono text-faint" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {f.label}
                </dt>
                <dd style={{ marginTop: 5, fontSize: "var(--step--1)" }}>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: clamp(2.5rem, 6vw, 5rem);
          align-items: start;
        }
        .about-facts { display: flex; flex-direction: column; gap: 1.5rem; }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
