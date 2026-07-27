"use client";

import { motion } from "framer-motion";

export function ExportsContact() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(80px, 12vh, 120px) 0",
        backgroundColor: "#F5F4F0",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1040px",
          margin: "0 auto",
        }}
      >
        {/* Pure Bright White Raft CTA Container */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "28px",
            padding: "clamp(40px, 6vw, 64px) clamp(24px, 5vw, 56px)",
            boxShadow: "0 8px 36px -4px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.02)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Space Grotesk, monospace",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#2563EB",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "16px",
            }}
          >
            GET STARTED WITH STRIDESHIP EXPORTS
          </span>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              marginBottom: "24px",
              maxWidth: "800px",
              margin: "0 auto 24px",
            }}
          >
            Ready to scale your export turnover or source directly from audited Indian plants?
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.18rem)",
              color: "#475569",
              lineHeight: 1.6,
              maxWidth: "680px",
              margin: "0 auto 40px",
            }}
          >
            Our trade specialists respond within 24 hours to schedule an initial joint-venture evaluation or technical sourcing breakdown.
          </p>

          {/* Dual Pathway Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            <button
              onClick={() => scrollTo("for-manufacturers")}
              className="navbar-glass-hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                height: "52px",
                padding: "0 32px",
                borderRadius: "9999px",
                border: "1px solid rgba(255, 255, 255, 0.28)",
                background: "linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(10, 15, 30, 0.4) 100%)",
                backdropFilter: "blur(20px) saturate(1.8)",
                WebkitBackdropFilter: "blur(20px) saturate(1.8)",
                color: "#FFFFFF",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.35)",
                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
              }}
            >
              Manufacturer JV Application &rarr;
            </button>

            <button
              onClick={() => scrollTo("for-buyers")}
              className="navbar-glass-hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                height: "52px",
                padding: "0 32px",
                borderRadius: "9999px",
                border: "1px solid rgba(15, 23, 42, 0.22)",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.2) 100%)",
                backdropFilter: "blur(20px) saturate(1.8)",
                WebkitBackdropFilter: "blur(20px) saturate(1.8)",
                color: "#0F172A",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              Buyer Sourcing Request &rarr;
            </button>
          </div>

          {/* Direct Contact Strip */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "24px",
              padding: "16px 28px",
              borderRadius: "9999px",
              backgroundColor: "#F8FAFC",
              border: "1px solid #E2E8F0",
            }}
          >
            {/* Email */}
            <a
              href="mailto:exports@strideship.dev"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#334155",
                textDecoration: "none",
                fontSize: "0.92rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2563EB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              exports@strideship.dev
            </a>

            <span style={{ color: "#CBD5E1" }}>|</span>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919820000000?text=Hi%20StrideShip%20Exports%20team%2C%20I%20would%20like%20to%20inquire%20about%20export%20partnerships."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#166534",
                textDecoration: "none",
                fontSize: "0.92rem",
                fontWeight: 600,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              WhatsApp Trade Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
