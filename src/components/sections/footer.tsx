"use client";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "clamp(36px, 5vw, 56px) 0" }}>
      <div className="flex flex-col md:flex-row items-center justify-between" style={{ maxWidth: "100%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)", gap: "20px" }}>
        <span style={{ fontSize: "clamp(15px, 1.3vw, 18px)", fontWeight: 500, color: "#F1F5F9", letterSpacing: "-0.01em" }}>Strideship</span>
        <p style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#475569" }}>&copy; 2026 Strideship. All rights reserved.</p>
      </div>
    </footer>
  );
}
