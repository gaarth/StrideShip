"use client";

import { motion } from "framer-motion";
import { StarButton } from "@/components/ui/star-button";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

const glassStyle = {
  borderRadius: "32px",
  backgroundColor: "rgba(13, 19, 33, 0.45)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.06)",
  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.2), inset 0 1px 0 0 rgba(255,255,255,0.05)",
};

export function CTA() {
  return (
    <section id="cta" style={{ padding: "clamp(80px, 12vw, 140px) 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div
          style={{
            ...glassStyle,
            padding: "clamp(80px, 10vw, 140px) clamp(32px, 5vw, 64px)",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}
        >
          {/* Intense center glow behind glass block */}
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "800px", height: "500px",
            background: "radial-gradient(ellipse, rgba(59,130,246,0.1), transparent 70%)",
            pointerEvents: "none", zIndex: -1
          }} />

          <motion.p variants={fadeUp} style={{ position: "relative", fontSize: "clamp(13px, 1.1vw, 16px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#60a5fa", marginBottom: "clamp(24px, 3vw, 32px)" }}>
            Get Started
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ position: "relative", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.04em", color: "#F1F5F9", marginBottom: "clamp(24px, 3vw, 32px)" }}>
            Let&rsquo;s look at your operations.
          </motion.h2>

          <motion.p variants={fadeUp} style={{
            position: "relative",
            fontSize: "clamp(16px, 1.4vw, 20px)",
            color: "#94A3B8",
            fontWeight: 500,
            marginBottom: "clamp(40px, 5vw, 56px)",
            letterSpacing: "0.02em",
          }}>
            15-minute call · No commitment · Honest assessment
          </motion.p>

          <motion.div variants={fadeUp} style={{ position: "relative", display: "inline-block" }}>
            <StarButton href="https://cal.com/gaarth-godbole/audit-call" height={70} paddingX={60} fontSize={18}>
              Book a Demo
            </StarButton>
          </motion.div>

          <motion.p variants={fadeUp} style={{
            position: "relative",
            fontSize: "clamp(15px, 1.3vw, 18px)",
            color: "#64748B",
            maxWidth: "520px",
            margin: "clamp(32px, 4vw, 48px) auto 0",
          }}>
            If there&rsquo;s nothing to fix, we&rsquo;ll tell you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
