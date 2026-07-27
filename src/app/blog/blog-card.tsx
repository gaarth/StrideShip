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
        padding: "clamp(21px, 2.346vw, 29px)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.3)";
        e.currentTarget.style.boxShadow = "0 12px 36px rgba(0, 0, 0, 0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.05)";
        e.currentTarget.style.boxShadow = "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)";
      }}
    >
      <div style={{ display: "flex", gap: "16px", marginBottom: "12px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "clamp(10.5px, 0.782vw, 11.5px)", fontWeight: 700, color: "#0F172A" }}>{date}</span>
        <span style={{ fontSize: "clamp(10.5px, 0.782vw, 11.5px)", color: "#CBD5E1" }}>·</span>
        <span style={{ fontSize: "clamp(10.5px, 0.782vw, 11.5px)", color: "#64748B" }}>{readTime}</span>
      </div>
      <h2 style={{
        fontSize: "clamp(0.982rem, 1.168vw, 1.076rem)",
        fontWeight: 700,
        color: "#0F172A",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
        marginBottom: "12px",
      }}>
        {title}
      </h2>
      <p style={{
        fontSize: "clamp(13px, 0.938vw, 14px)",
        color: "#475569",
        lineHeight: 1.7,
        margin: 0,
      }}>
        {description}
      </p>
    </article>
  );
}
