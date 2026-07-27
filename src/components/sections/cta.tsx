"use client";

import { motion } from "framer-motion";
import { StarButton } from "@/components/ui/star-button";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

const lightCardStyle = {
  borderRadius: "32px",
  backgroundColor: "#FFFFFF",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  boxShadow: "0 4px 24px -4px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)",
};

export function CTA() {
  return (
    <section id="cta" style={{ padding: "clamp(57px, 6.256vw, 76px) 0" }}>
      <div className="section-container" style={{ width: "92%", margin: "0 auto", padding: "0 clamp(21px, 3.91vw, 49px)" }}>
        <motion.div
          className="cta-glass"
          style={{
            ...lightCardStyle,
            padding: "clamp(43px, 4.692vw, 66px) clamp(28px, 3.91vw, 49px)",
            textAlign: "center", position: "relative", overflow: "hidden",
            zIndex: 1,
          }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}
        >
          {/* Subtle warm center glow */}
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "800px", height: "500px",
            background: "radial-gradient(ellipse, rgba(15, 23, 42, 0.03), transparent 70%)",
            pointerEvents: "none", zIndex: 0
          }} />

          {/* LARGE DECORATIVE WATERMARK */}
          <div className="cta-watermark" style={{
            position: "absolute",
            top: "50%", left: "50%",
            opacity: 0.03,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#0F172A",
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
            zIndex: 0,
            fontSize: "clamp(8.925rem, 14.076vw, 18.768rem)",
            fontFamily: '"Eurostile", "Microgramma", "Arial Black", sans-serif',
            fontStyle: "italic",
            textTransform: "uppercase",
            WebkitTextStroke: "4px #0F172A",
            WebkitTextFillColor: "transparent",
            transform: "translate(-50%, -50%) scaleX(1.2)",
          }}>
            StrideShip
          </div>

          <motion.h2 variants={fadeUp} style={{ position: "relative", zIndex: 1, fontSize: "clamp(2.231rem, 4.692vw, 3.514rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: "clamp(13px, 1.408vw, 16px)" }}>
            Let&rsquo;s look at{" "}<br />
            <span style={{ fontWeight: 300, fontStyle: "italic", color: "#64748B" }}>your operations.</span>
          </motion.h2>

          <motion.p variants={fadeUp} style={{
            position: "relative",
            zIndex: 1,
            fontSize: "clamp(15px, 1.168vw, 17px)",
            color: "#334155",
            maxWidth: "680px",
            margin: "0 auto clamp(18px, 1.96vw, 24px)",
            lineHeight: 1.6,
          }}>
            If your team is losing weekends to customs queries, chasing carriers for updates, or living in spreadsheets - that&rsquo;s the conversation.
          </motion.p>

          <motion.p variants={fadeUp} style={{
            position: "relative",
            zIndex: 1,
            fontSize: "clamp(15px, 1.095vw, 16px)",
            color: "#0F172A",
            fontWeight: 600,
            marginBottom: "clamp(21px, 2.346vw, 26px)",
            letterSpacing: "0.02em",
          }}>
            15-minute call · No commitment · Honest assessment
          </motion.p>

          <motion.div variants={fadeUp} style={{ position: "relative", zIndex: 1, display: "inline-block" }}>
            <a
              href="https://cal.com/gaarth-godbole/audit-call"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-demo-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "64px",
                padding: "0 48px",
                borderRadius: "9999px",
                border: "1.5px solid #0F172A",
                background: "transparent",
                color: "#0F172A",
                fontSize: "clamp(0.892rem, 1.168vw, 0.977rem)",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0F172A";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#0F172A";
              }}
            >
              Book a Demo
            </a>
          </motion.div>

          <motion.p variants={fadeUp} style={{
            position: "relative",
            zIndex: 1,
            fontSize: "clamp(14px, 1.012vw, 15px)",
            color: "#64748B",
            maxWidth: "520px",
            margin: "clamp(18px, 1.96vw, 24px) auto 0",
          }}>
            If there&rsquo;s nothing to fix, we&rsquo;ll tell you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
