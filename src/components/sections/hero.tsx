"use client";

import { BeamsBackground } from "@/components/ui/beams-background";
import { StarButton } from "@/components/ui/star-button";

export function Hero() {
  return (
    <BeamsBackground intensity="strong">
      <div
        id="hero"
        style={{
          height: "100vh",
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Removed internal fade div because BeamsBackground applies a CSS gradient mask for true flow */}

        <div className="hero-inner" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "80%", padding: "0 clamp(24px, 5vw, 64px)", marginTop: "12vh", position: "relative", zIndex: 5 }}>
          {/* Headline */}
          <h1 style={{
            fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
            fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.04em",
            color: "#F1F5F9", margin: "0 0 clamp(20px, 2.5vw, 32px) 0",
          }}>
            Automating the manual<br />infrastructure of global trade.
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)",
            color: "#CBD5E1", maxWidth: "680px", lineHeight: 1.6,
            margin: "0 0 clamp(32px, 3.5vw, 48px) 0",
          }}>
            We build custom automation for the manual side of logistics, making your documentation automated and your workflows faster.
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: "18px", justifyContent: "center" }}>
            <StarButton href="https://cal.com/gaarth-godbole/audit-call" height={54} paddingX={38} fontSize="clamp(0.875rem, 1.5vw, 1rem)">
              Book a Demo
            </StarButton>
            <button
              onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                height: "54px", padding: "0 38px", borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.15)", background: "rgba(10, 15, 30, 0.7)",
                color: "#F1F5F9", fontSize: "clamp(0.875rem, 1.5vw, 1rem)", fontWeight: 500, cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              View Process
            </button>
          </div>
        </div>
      </div>
    </BeamsBackground>
  );
}
