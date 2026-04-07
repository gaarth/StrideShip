"use client";

import { motion } from "framer-motion";
import { StarButton } from "@/components/ui/star-button";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

const glassStyle = {
  borderRadius: "32px",
  backgroundColor: "rgba(13, 19, 33, 0.8)",
  border: "1px solid rgba(255,255,255,0.06)",
  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.2), inset 0 1px 0 0 rgba(255,255,255,0.05)",
};

export function CTA() {
  return (
    <section id="cta" style={{ padding: "clamp(48px, 7vw, 84px) 0" }}>
      <div style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div
          style={{
            ...glassStyle,
            padding: "clamp(48px, 6vw, 84px) clamp(32px, 5vw, 64px)",
            textAlign: "center", position: "relative", overflow: "hidden",
            zIndex: 1, // ensure the glass box sits properly Context
          }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}
        >
          {/* Intense center glow behind glass block */}
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "800px", height: "500px",
            background: "radial-gradient(ellipse, rgba(107,143,168,0.1), transparent 70%)",
            pointerEvents: "none", zIndex: 0
          }} />

          {/* LARGE DECORATIVE WATERMARK */}
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            opacity: 0.035,
            fontWeight: 900, // pushed to 900 for extra geometric thickness
            letterSpacing: "-0.04em",
            color: "white", 
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
            zIndex: 0,
            fontSize: "clamp(10rem, 18vw, 24rem)", 
            fontFamily: '"Eurostile", "Microgramma", "Arial Black", sans-serif',
            fontStyle: "italic",
            textTransform: "uppercase",
            // Implementing the hollow/acrylic glass bevel look from the reference image
            WebkitTextStroke: "4px white",
            WebkitTextFillColor: "transparent",
            // Stretch the text slightly to give it that ultra-wide industrial aesthetic
            transform: "translate(-50%, -50%) scaleX(1.2)", 
          }}>
            StrideShip
          </div>

          <motion.h2 variants={fadeUp} style={{ position: "relative", zIndex: 1, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#F1F5F9", marginBottom: "clamp(14px, 1.8vw, 20px)" }}>
            Let&rsquo;s look at<br />
            <span style={{ fontWeight: 300, fontStyle: "italic" }}>your operations.</span>
          </motion.h2>

          <motion.p variants={fadeUp} style={{
            position: "relative",
            zIndex: 1,
            fontSize: "clamp(16px, 1.5vw, 22px)",
            color: "#CBD5E1",
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
            color: "#94A3B8",
            fontWeight: 500,
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
