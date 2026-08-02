"use client";

import { BeamsBackground } from "@/components/ui/beams-background";
import { StarButton } from "@/components/ui/star-button";
import Link from "next/link";

export default function ConnectPage() {
  return (
    <main style={{ position: "relative" }}>
      {/* Locked screen background matching Raft theme */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: -2,
          backgroundColor: "#F5F4F0",
        }}
      />

      <BeamsBackground intensity="strong">
        <div
          style={{
            height: "100vh",
            minHeight: "600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "94%",
              maxWidth: "520px",
              padding: "0 24px",
              position: "relative",
              zIndex: 5,
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#64748B",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              StrideShip
            </p>

            <h1
              style={{
                fontSize: "clamp(1.6rem, 3.2vw, 2.1rem)",
                fontWeight: 700,
                color: "#0F172A",
                letterSpacing: "-0.03em",
                marginBottom: "12px",
                lineHeight: 1.15,
              }}
            >
              Contact Us
            </h1>

            <p
              style={{
                fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
                color: "#475569",
                lineHeight: 1.6,
                marginBottom: "clamp(28px, 4vh, 40px)",
                maxWidth: "380px",
              }}
            >
              Book a demo or reach our Mumbai team for customs automation,
              freight forwarding AI, and export partnership inquiries.
            </p>

            <a
              href="mailto:ceo@strideship.dev"
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#0F172A",
                textDecoration: "none",
                marginBottom: "clamp(28px, 4vh, 40px)",
                borderBottom: "1px solid rgba(15,23,42,0.25)",
                paddingBottom: "2px",
              }}
            >
              ceo@strideship.dev
            </a>

            {/* Buttons - stacked vertically */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(18px, 3.128vh, 25px)",
                width: "100%",
              }}
            >
              <a
                href="https://cal.com/gaarth-godbole/audit-call"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <StarButton
                  height={56}
                  paddingX={48}
                  fontSize="clamp(0.803rem, 1.168vw, 0.88rem)"
                >
                  Book a Demo
                </StarButton>
              </a>

              <Link href="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#475569",
                  }}
                >
                  Explore Website
                </span>
              </Link>

              {/* StrideShip: LinkedIn - Raft light pill style */}
              <a
                href="https://www.linkedin.com/company/strideship/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  height: "56px",
                  padding: "0 48px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(15, 23, 42, 0.15)",
                  background: "#FFFFFF",
                  color: "#0F172A",
                  fontSize: "clamp(0.803rem, 1.168vw, 0.88rem)",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F8FAFC";
                  e.currentTarget.style.borderColor = "#0F172A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.15)";
                }}
              >
                {/* LinkedIn icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ flexShrink: 0, color: "#0A66C2" }}
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                StrideShip: LinkedIn
              </a>
            </div>
          </div>
        </div>
      </BeamsBackground>
    </main>
  );
}
