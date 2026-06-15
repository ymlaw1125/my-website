"use client";
import Image from "next/image";
import { PROJECTS, type Project } from "../lib/content";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12C24 5.37 18.63 0 12 0z" />
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M10 2h4v4M14 2L7 9M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Visual: project screenshot if present, otherwise a branded monogram panel. */
function Thumb({ project }: { project: Project }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 200,
        background:
          "linear-gradient(135deg, rgba(106,169,255,0.12), rgba(154,140,255,0.1))",
        overflow: "hidden",
      }}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
          }}
        >
          <span
            className="display"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "rgba(255,255,255,0.08)" }}
          >
            {project.title.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div style={{ display: "flex", gap: "1.25rem", marginTop: "1.25rem" }}>
      {project.github && (
        <a className="link-arrow" href={project.github} target="_blank" rel="noreferrer">
          <GithubIcon /> Code
        </a>
      )}
      {project.live && (
        <a className="link-arrow" href={project.live} target="_blank" rel="noreferrer">
          <ExternalIcon /> Live
        </a>
      )}
    </div>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span className="mono text-faint" style={{ fontSize: "0.72rem" }}>{project.year}</span>
        <span className="tag tag-accent">{project.role}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
        {project.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </>
  );
}

export default function Work() {
  const ref = useReveal(120);
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="work" className="section">
      <div className="container" ref={ref}>
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title={<>Projects I&apos;ve designed, built, and shipped.</>}
        />

        {/* Featured project — full-width split layout */}
        {featured && (
          <article className="card reveal feature-card">
            <div className="feature-media">
              <Thumb project={featured} />
            </div>
            <div className="feature-body">
              <h3 className="display" style={{ fontSize: "var(--step-2)" }}>{featured.title}</h3>
              <p className="text-muted" style={{ marginTop: "0.9rem", maxWidth: "46ch" }}>
                {featured.description}
              </p>
              <div style={{ marginTop: "1.25rem" }}>
                <Meta project={featured} />
              </div>
              <Links project={featured} />
            </div>
          </article>
        )}

        {/* Remaining projects — responsive grid */}
        <div className="work-grid">
          {rest.map((p) => (
            <article key={p.title} className="card reveal" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "16 / 10" }}>
                <Thumb project={p} />
              </div>
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 className="display" style={{ fontSize: "var(--step-1)" }}>{p.title}</h3>
                <p className="text-muted" style={{ marginTop: "0.6rem", fontSize: "var(--step--1)", flexGrow: 1 }}>
                  {p.description}
                </p>
                <div style={{ marginTop: "1.1rem" }}>
                  <Meta project={p} />
                </div>
                <Links project={p} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .feature-card {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          align-items: stretch;
          margin-bottom: 1.5rem;
        }
        .feature-media { min-height: 320px; }
        .feature-body { padding: clamp(1.75rem, 4vw, 3rem); display: flex; flex-direction: column; justify-content: center; }
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .feature-card { grid-template-columns: 1fr; }
          .feature-media { min-height: 220px; aspect-ratio: 16 / 10; }
          .work-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
