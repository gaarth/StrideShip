"use client";

import { motion } from "framer-motion";
import { PROOF_ITEMS } from "@/lib/exports-data";

export function ExportsProofStrip() {
  return (
    <section
      id="proof"
      style={{
        padding: "clamp(80px, 10vh, 120px) 0",
        backgroundColor: "#F5F4F0",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1140px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            marginBottom: "clamp(36px, 5vh, 48px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
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
              EXECUTION LOGS & FIELD AUDITS
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
              Operational Proof Points
            </h2>
          </div>
          <p style={{ fontSize: "0.92rem", color: "#64748B", maxWidth: "340px" }}>
            Live verification records from plant audits, port customs dispatches, and trade delegations.
          </p>
        </div>

        {/* Proof Cards Grid in Pure Bright White Boxes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {PROOF_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              style={{
                backgroundColor: "#FFFFFF", // Pure bright white card box
                borderRadius: "20px",
                padding: "28px 24px",
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Space Grotesk, monospace",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#2563EB",
                      background: "#EFF6FF",
                      border: "1px solid #BFDBFE",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.badge}
                  </span>

                  <span
                    style={{
                      fontFamily: "Space Grotesk, monospace",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "#64748B",
                    }}
                  >
                    {item.locationOrDate}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#0F172A",
                    marginBottom: "8px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#475569",
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "14px",
                  borderTop: "1px solid #F1F5F9",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#166534",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                }}
              >
                <span>&bull;</span> StrideShip Audit Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
