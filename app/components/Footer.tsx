import { PERSON, SOCIALS } from "../lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid var(--border)", paddingBlock: "2.5rem" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="mono text-faint" style={{ fontSize: "0.75rem" }}>
          © {year} {PERSON.name}
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="link-arrow">
              {s.label}
            </a>
          ))}
        </div>
        <span className="mono text-faint" style={{ fontSize: "0.75rem" }}>
          Built with Next.js
        </span>
      </div>
    </footer>
  );
}
