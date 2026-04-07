"use client";

export function PrivacyContact() {
  const linkStyle: React.CSSProperties = {
    color: "#60A5FA",
    textDecoration: "none",
    fontSize: "1.05rem",
    display: "inline-block",
    paddingBottom: "2px",
    borderBottom: "1px solid rgba(96,165,250,0.3)",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
      <div>
        <h3 style={{ fontSize: "1.1rem", color: "#F1F5F9", marginBottom: "6px" }}>
          Gaarth Godbole
        </h3>
        <p style={{ color: "#ffffff", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>
          Co-Founder & CEO
        </p>
        <a
          href="mailto:gaarth.strideship@gmail.com"
          style={linkStyle}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,1)")}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,0.3)")}
        >
          gaarth.strideship@gmail.com
        </a>
      </div>

      <div>
        <h3 style={{ fontSize: "1.1rem", color: "#F1F5F9", marginBottom: "6px" }}>
          Siddhant Vaidya
        </h3>
        <p style={{ color: "#ffffff", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>
          Co-Founder & CTO
        </p>
        <a
          href="mailto:siddhant.strideship@gmail.com"
          style={linkStyle}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,1)")}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,0.3)")}
        >
          siddhant.strideship@gmail.com
        </a>
      </div>
    </div>
  );
}
