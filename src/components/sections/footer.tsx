"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "clamp(22px, 3vw, 34px) 0" }}>
      <div className="footer-content flex flex-col md:flex-row items-center justify-between" style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)", gap: "20px" }}>
        <div className="footer-brand" style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{ fontSize: "clamp(15px, 1.3vw, 18px)", fontWeight: 500, color: "#F1F5F9", letterSpacing: "-0.01em" }}>Strideship</span>
          <div className="footer-links" style={{ display: "flex", gap: "24px" }}>
            <Link href="/about" style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = "#F1F5F9"} onMouseOut={(e) => e.currentTarget.style.color = "#94A3B8"}>
              About Us
            </Link>
            <Link href="/privacy" style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = "#F1F5F9"} onMouseOut={(e) => e.currentTarget.style.color = "#94A3B8"}>
              Privacy Policy
            </Link>
            <a href="https://www.linkedin.com/company/strideship/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = "#F1F5F9"} onMouseOut={(e) => e.currentTarget.style.color = "#94A3B8"}>
              Socials
            </a>
          </div>
        </div>
        <p style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#475569" }}>&copy; 2026 Strideship. All rights reserved.</p>
      </div>
    </footer>
  );
}
