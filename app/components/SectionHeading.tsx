/**
 * Consistent section heading: small mono index + eyebrow label, then a large
 * display title. Purely presentational (server component).
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <header style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
      <div
        className="eyebrow"
        style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
      >
        <span className="mono text-faint">{index}</span>
        <span aria-hidden style={{ width: 28, height: 1, background: "var(--border-strong)" }} />
        <span>{eyebrow}</span>
      </div>
      <h2
        className="display"
        style={{ fontSize: "var(--step-3)", marginTop: "1rem", maxWidth: "20ch" }}
      >
        {title}
      </h2>
    </header>
  );
}
