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
              width: "90%",
              maxWidth: "520px",
              padding: "0 24px",
              position: "relative",
              zIndex: 5,
            }}
          >
            {/* Logo / Brand */}
            <span
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                fontWeight: 700,
                color: "#0F172A",
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              StrideShip
            </span>

            {/* Tagline */}
            <p
              style={{
                fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                color: "#475569",
                lineHeight: 1.6,
                marginBottom: "clamp(48px, 8vh, 80px)",
                maxWidth: "360px",
              }}
            >
              Automating the manual infrastructure of global trade.
            </p>

            {/* Buttons — stacked vertically */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(20px, 4vh, 32px)",
                width: "100%",
              }}
            >
              {/* Explore Website — primary StarButton */}
              <Link href="/" style={{ textDecoration: "none" }}>
                <StarButton
                  height={56}
                  paddingX={48}
                  fontSize="clamp(0.9rem, 1.5vw, 1.05rem)"
                >
                  Explore Website
                </StarButton>
              </Link>

              {/* StrideShip: LinkedIn — Raft light pill style */}
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
                  fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
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
