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
    <section id="cta" style={{ padding: "clamp(64px, 8vw, 96px) 0" }}>
      <div className="section-container" style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div
          className="cta-glass"
          style={{
            ...lightCardStyle,
            padding: "clamp(48px, 6vw, 84px) clamp(32px, 5vw, 64px)",
            textAlign: "center", position: "relative", overflow: "hidden",
            zIndex: 1,
          }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}
        >
          {/* Subtle warm center glow */}
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "800px", height: "500px",
            background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.04), transparent 70%)",
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
            fontSize: "clamp(10rem, 18vw, 24rem)",
            fontFamily: '"Eurostile", "Microgramma", "Arial Black", sans-serif',
            fontStyle: "italic",
            textTransform: "uppercase",
            WebkitTextStroke: "4px #0F172A",
            WebkitTextFillColor: "transparent",
            transform: "translate(-50%, -50%) scaleX(1.2)",
          }}>
            StrideShip
          </div>

          <motion.h2 variants={fadeUp} style={{ position: "relative", zIndex: 1, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: "clamp(14px, 1.8vw, 20px)" }}>
            Let&rsquo;s look at{" "}<br />
            <span style={{ fontWeight: 300, fontStyle: "italic", color: "#64748B" }}>your operations.</span>
          </motion.h2>

          <motion.p variants={fadeUp} style={{
            position: "relative",
            zIndex: 1,
            fontSize: "clamp(16px, 1.5vw, 22px)",
            color: "#334155",
            maxWidth: "680px",
            margin: "0 auto clamp(20px, 2.5vw, 30px)",
            lineHeight: 1.6,
          }}>
            If your team is losing weekends to customs queries, chasing carriers for updates, or living in spreadsheets — that&rsquo;s the conversation.
          </motion.p>

          <motion.p variants={fadeUp} style={{
            position: "relative",
            zIndex: 1,
            fontSize: "clamp(16px, 1.4vw, 20px)",
            color: "#2563EB",
            fontWeight: 600,
            marginBottom: "clamp(24px, 3vw, 34px)",
            letterSpacing: "0.02em",
          }}>
            15-minute call · No commitment · Honest assessment
          </motion.p>

          <motion.div variants={fadeUp} style={{ position: "relative", zIndex: 1, display: "inline-block" }}>
            <StarButton href="https://cal.com/gaarth-godbole/audit-call" height={70} paddingX={60} fontSize="clamp(1rem, 1.5vw, 1.125rem)">
              Book a Demo
            </StarButton>
          </motion.div>

          <motion.p variants={fadeUp} style={{
            position: "relative",
            zIndex: 1,
            fontSize: "clamp(15px, 1.3vw, 18px)",
            color: "#64748B",
            maxWidth: "520px",
            margin: "clamp(20px, 2.5vw, 30px) auto 0",
          }}>
            If there&rsquo;s nothing to fix, we&rsquo;ll tell you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
