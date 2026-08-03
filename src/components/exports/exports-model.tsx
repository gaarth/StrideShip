"use client";

import { motion } from "framer-motion";
import { JV_MODEL_STEPS } from "@/lib/exports-data";

export function ExportsModel() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "clamp(60px, 8vh, 100px) 0",
        backgroundColor: "#F5F4F0", 
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        style={{
          width: "92%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Section Header - Tighter, more editorial layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            alignItems: "flex-end",
            marginBottom: "clamp(32px, 5vh, 48px)",
          }}
        >
          <div>
            <span
              style={{
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
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#0F172A",
                letterSpacing: "-0.04em",
              }}
            >
              How StrideShip Exports Works
            </h2>
          </div>

          <div style={{ maxWidth: "500px" }}>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#475569",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              One structured execution partner designed to deliver lasting export growth to your business. We centralize buyer access, trade documentation, customs clearance, and global sales workflows so your team can focus on production excellence.
            </p>

            <a
              href="#inquiry-form"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "9999px",
                border: "1px solid rgba(15, 23, 42, 0.15)",
                color: "#0F172A",
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Explore Manufacturer JV &rarr;
            </a>
          </div>
        </div>

        {/* Horizontal Staggered Process List (Fixes humungous mobile grids) */}
        <div className="process-scroll-container">
          <style dangerouslySetInnerHTML={{__html: `
            .process-scroll-container {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 16px;
              align-items: stretch;
            }
            .process-card {
              height: 100%;
              box-sizing: border-box;
              background-color: #FFFFFF;
              border-radius: 16px;
              padding: 28px 24px 24px;
              border: 1px solid rgba(0, 0, 0, 0.08);
              display: flex;
              flex-direction: column;
              position: relative;
              overflow: hidden;
            }
            .process-card-label {
              font-size: 0.75rem;
              font-weight: 700;
              color: #0F172A;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              font-family: var(--font-worksans), Space Grotesk, sans-serif;
              height: 1.2em;
              line-height: 1.2;
              margin: 0 0 14px;
              flex-shrink: 0;
            }
            .process-card-title {
              font-size: 1.1rem;
              font-weight: 700;
              color: #0F172A;
              letter-spacing: -0.02em;
              line-height: 1.3;
              margin: 0 0 14px;
              min-height: calc(1.1rem * 1.3 * 2);
              flex-shrink: 0;
            }
            .process-card-body {
              font-size: 0.9rem;
              color: #475569;
              line-height: 1.6;
              margin: 0;
              flex: 1;
            }
            @media (max-width: 900px) {
              .process-scroll-container {
                display: flex;
                align-items: stretch;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                scrollbar-width: none;
                -ms-overflow-style: none;
                padding-bottom: 16px;
                margin-right: -4vw;
                padding-right: 4vw;
              }
              .process-scroll-container::-webkit-scrollbar {
                display: none;
              }
              .process-card {
                min-width: 280px;
                width: 280px;
                height: auto;
                min-height: 280px;
                scroll-snap-align: start;
                flex-shrink: 0;
              }
            }
          `}} />

          {JV_MODEL_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              className="process-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#0F172A",
                  opacity: 0.1,
                }}
              />

              <div className="process-card-label">PHASE {step.number}</div>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-body">{step.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
