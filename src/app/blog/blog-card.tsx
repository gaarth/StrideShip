"use client";

export function BlogCard({ title, description, date, readTime }: {
  title: string;
  description: string;
  date: string;
  readTime: string;
}) {
  return (
    <article
      style={{
        borderRadius: "14px",
        backgroundColor: "rgba(10, 15, 30, 0.75)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        padding: "clamp(24px, 3vw, 36px)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
        transform: "translateZ(0)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(107,143,168,0.3)";
        e.currentTarget.style.boxShadow = "0 10px 40px rgba(107,143,168,0.1), inset 0 1px 0 rgba(255,255,255,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.boxShadow = "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)";
      }}
    >
      <div style={{ display: "flex", gap: "16px", marginBottom: "12px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#6B8FA8" }}>{date}</span>
        <span style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#475569" }}>·</span>
        <span style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#64748B" }}>{readTime}</span>
      </div>
      <h2 style={{
        fontSize: "clamp(1.1rem, 1.5vw, 1.375rem)",
        color: "#F1F5F9",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
        marginBottom: "12px",
      }}>
        {title}
      </h2>
      <p style={{
        fontSize: "clamp(14px, 1.2vw, 16px)",
        color: "#94A3B8",
        lineHeight: 1.7,
        margin: 0,
      }}>
        {description}
      </p>
    </article>
  );
}
