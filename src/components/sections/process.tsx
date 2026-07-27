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
    desc: "We produce a full operational map of your business - every manual touchpoint, every system gap, every handoff delay. You receive a prioritized list of time and cost leakages with estimated impact.",
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
    desc: "We build, test, and integrate the system into your live operations - without interrupting what's already running. Your team keeps moving while we plug in the infrastructure.",
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
    <section id="process" style={{ padding: "clamp(57px, 6.256vw, 76px) 0" }}>
      <div className="section-container" style={{ width: "92%", margin: "0 auto", padding: "0 clamp(21px, 3.91vw, 49px)" }}>
        {/* Header */}
        <motion.div style={{ marginBottom: "clamp(28px, 3.128vw, 38px)" }} initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.231rem, 4.692vw, 3.514rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#0F172A" }}>
            From diagnosis{" "}<br />
            <span style={{ fontWeight: 300, fontStyle: "italic", color: "#64748B" }}>to deployment.</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "clamp(15px, 1.095vw, 16px)", color: "#475569", marginTop: "14px", maxWidth: "600px", lineHeight: 1.7 }}>
            A five-phase engagement designed to deliver precision infrastructure without disrupting what&rsquo;s already running.
          </motion.p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(15px, 1.564vw, 18px)" }}>
          {steps.map((step, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.1, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#FFFFFF", // Pure bright white card box matching Raft
                  border: isHovered ? "1px solid rgba(15, 23, 42, 0.3)" : "1px solid rgba(0, 0, 0, 0.05)",
                  boxShadow: isHovered ? "0 12px 36px rgba(0, 0, 0, 0.08)" : "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                  padding: "clamp(21px, 2.742vw, 25px)",
                  cursor: "default",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
                  <div>
                    <span style={{ fontSize: "clamp(0.781rem, 1.168vw, 0.856rem)", fontWeight: 700, color: "#0F172A", display: "block", marginBottom: "12px", letterSpacing: "0.05em" }}>{step.num}</span>
                    <h3 style={{ fontSize: "clamp(1.004rem, 1.168vw, 1.099rem)", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.01em", marginBottom: "6px" }}>{step.title}</h3>
                    <p style={{ fontSize: "clamp(12px, 0.865vw, 13px)", color: "#475569" }}>{step.sub}</p>
                  </div>

                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backgroundColor: isHovered ? "#F8FAFC" : "#F8FAFC",
                    border: isHovered ? "1px solid #E2E8F0" : "1px solid #E2E8F0",
                    color: isHovered ? "#0F172A" : "#0F172A",
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
                      <div style={{ height: "1px", backgroundColor: "#E2E8F0", margin: "20px 0" }} />
                      <p style={{ fontSize: "clamp(13px, 0.938vw, 14px)", color: "#334155", lineHeight: 1.7 }}>
                        {step.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
