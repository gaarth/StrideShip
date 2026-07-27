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
        borderRadius: "20px",
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
        padding: "clamp(24px, 3vw, 36px)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(37, 99, 235, 0.3)";
        e.currentTarget.style.boxShadow = "0 12px 36px rgba(0, 0, 0, 0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.05)";
        e.currentTarget.style.boxShadow = "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)";
      }}
    >
      <div style={{ display: "flex", gap: "16px", marginBottom: "12px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "clamp(12px, 1vw, 14px)", fontWeight: 700, color: "#2563EB" }}>{date}</span>
        <span style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#CBD5E1" }}>·</span>
        <span style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#64748B" }}>{readTime}</span>
      </div>
      <h2 style={{
        fontSize: "clamp(1.1rem, 1.5vw, 1.375rem)",
        fontWeight: 700,
        color: "#0F172A",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
        marginBottom: "12px",
      }}>
        {title}
      </h2>
      <p style={{
        fontSize: "clamp(14px, 1.2vw, 16px)",
        color: "#475569",
        lineHeight: 1.7,
        margin: 0,
      }}>
        {description}
      </p>
    </article>
  );
}
