"use client";

import { motion } from "framer-motion";
import { JV_MODEL_STEPS } from "@/lib/exports-data";

export function ExportsModel() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "clamp(80px, 10vh, 120px) 0",
        backgroundColor: "#F5F4F0", // Raft warm cream off-white
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1140px",
          margin: "0 auto",
        }}
      >
        {/* Section Header — Asymmetric Raft Layout (Left Headline, Right Narrative) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "flex-end",
            marginBottom: "clamp(48px, 6vh, 64px)",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "Space Grotesk, monospace",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#64748B",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "12px",
              }}
            >
              OUR JV MODEL
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#0F172A",
                letterSpacing: "-0.03em",
              }}
            >
              How StrideShip Exports Works
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                color: "#475569",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              One structured execution partner designed to deliver lasting export growth to your business. We centralize buyer access, trade documentation, customs clearance, and global sales workflows so your team can focus on production excellence.
            </p>

            <a
              href="#for-manufacturers"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "9999px",
                backgroundColor: "#E2E8F0",
                color: "#0F172A",
                fontSize: "0.88rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#CBD5E1")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E2E8F0")}
            >
              Explore Manufacturer JV &rarr;
            </a>
          </div>
        </div>

        {/* 4-Step Process Grid in Bright White Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {JV_MODEL_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              style={{
                backgroundColor: "#FFFFFF", // Pure bright white card box
                borderRadius: "20px",
                padding: "36px 28px",
                boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "Space Grotesk, monospace",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "#2563EB",
                    marginBottom: "16px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {step.number}
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#0F172A",
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#475569",
                    lineHeight: 1.6,
                  }}
                >
                  {step.summary}
                </p>
              </div>

              <div
                style={{
                  marginTop: "24px",
                  height: "2px",
                  width: "36px",
                  backgroundColor: "#2563EB",
                  borderRadius: "2px",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
