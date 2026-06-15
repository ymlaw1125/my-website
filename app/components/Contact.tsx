"use client";
import { PERSON, SOCIALS } from "../lib/content";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const ref = useReveal(100);

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build <span className="gradient-text">something.</span>
            </>
          }
        />

        <div className="contact-grid">
          <div className="reveal">
            <p className="text-muted" style={{ maxWidth: "44ch", fontSize: "var(--step-1)" }}>
              I&apos;m open to internships, research, and collaboration. The fastest
              way to reach me is email — I read everything and reply.
            </p>

            <a
              href={`mailto:${PERSON.email}`}
              className="display"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "var(--step-2)",
                marginTop: "2rem",
                color: "var(--text)",
                borderBottom: "2px solid var(--accent)",
                paddingBottom: 4,
              }}
            >
              {PERSON.email}
              <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <span className="mono text-faint" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Elsewhere
            </span>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.25rem",
                }}
              >
                <span>{s.label}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M10 2h4v4M14 2L7 9M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: clamp(2.5rem, 6vw, 5rem);
          align-items: start;
        }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
