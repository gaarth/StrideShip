"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

const steps = [
  {
    num: "01",
    title: "Audit Call",
    sub: "A live breakdown of how your operations actually run.",
    desc: "We map every manual touchpoint and identify where time and money leak. You walk away with a clear picture of what needs to change.",
  },
  {
    num: "02",
    title: "Bottleneck Mapping",
    sub: "Every manual step, every tool switch, quantified.",
    desc: "We produce a full operational map of your business — every manual touchpoint, every system gap, every handoff delay. You receive a prioritized list of time and cost leakages with estimated impact.",
  },
  {
    num: "03",
    title: "System Design",
    sub: "Custom architecture, no off-the-shelf blueprints.",
    desc: "We design a tailored automation architecture that fits your exact workflows, data flows, and team structure. A complete system blueprint before a single line of code is written.",
  },
  {
    num: "04",
    title: "Deployment",
    sub: "Built and integrated with zero operational disruption.",
    desc: "We build, test, and integrate the system into your live operations — without interrupting what's already running. Your team keeps moving while we plug in the infrastructure.",
  },
  {
    num: "05",
    title: "Optimization",
    sub: "Continuous refinement as your scale grows.",
    desc: "Post-deployment, we monitor KPIs, refine automations, and expand the system as your operation evolves. Your infrastructure improves the longer we work together.",
  },
];

export function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="process" style={{ padding: "clamp(80px, 12vw, 140px) 0" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        {/* Header */}
        <motion.div style={{ marginBottom: "clamp(56px, 7vw, 80px)" }} initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#F1F5F9" }}>
            From diagnosis<br />
            <span style={{ fontWeight: 300, fontStyle: "italic", color: "#64748B" }}>to deployment.</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: "#94A3B8", marginTop: "24px", maxWidth: "600px", lineHeight: 1.7 }}>
            A five-phase engagement designed to deliver precision infrastructure without disrupting what's already running.
          </motion.p>
        </motion.div>

        <motion.div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2vw, 24px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          {steps.map((step, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.div key={step.num} variants={fadeUp}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  borderRadius: "14px", // requested smaller border radius
                  backgroundColor: "rgba(10, 15, 30, 0.25)",
                  backdropFilter: "blur(20px)", // Use highly-optimized 20px blur
                  WebkitBackdropFilter: "blur(20px)",
                  border: isHovered ? "1px solid rgba(107,143,168,0.3)" : "none",
                  boxShadow: isHovered ? "0 10px 40px rgba(107,143,168,0.1), inset 0 1px 0 rgba(255,255,255,0.1)" : "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                  padding: "clamp(24px, 3.5vw, 32px)", // slightly reduced inner padding
                  cursor: "default",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                  transform: "translateZ(0)", // GPU acceleration for lag
                }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#6B8FA8", display: "block", marginBottom: "12px", letterSpacing: "0.05em" }}>{step.num}</span>
                    <h3 style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", fontWeight: 600, color: "#F1F5F9", letterSpacing: "-0.01em", marginBottom: "6px" }}>{step.title}</h3>
                    <p style={{ fontSize: "clamp(13px, 1.1vw, 14px)", color: "#8b9ab0" }}>{step.sub}</p>
                  </div>

                  {/* Icon toggle matching Problem section exactly */}
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backgroundColor: isHovered ? "rgba(107,143,168,0.15)" : "rgba(255,255,255,0.03)",
                    border: isHovered ? "1px solid rgba(107,143,168,0.3)" : "1px solid rgba(255,255,255,0.1)",
                    color: isHovered ? "#6B8FA8" : "#F1F5F9",
                    transition: "all 0.3s ease",
                    flexShrink: 0
                  }}>
                    <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      initial={false} animate={{ rotate: isHovered ? 45 : 0 }} transition={{ duration: 0.2 }}>
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </motion.svg>
                  </div>
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: "hidden" }}>
                      <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.05)", margin: "20px 0" }} />
                      <p style={{ fontSize: "clamp(14px, 1.2vw, 15px)", color: "#cbd5e1", lineHeight: 1.7 }}>
                        {step.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
