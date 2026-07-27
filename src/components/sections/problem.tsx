"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

const lightCardStyle = {
  backgroundColor: "#FFFFFF",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
};

const cards = [
  {
    num: "01",
    title: "Manual Coordination Gaps",
    desc: "Operations held together by people, not systems.",
    items: [
      "Every workflow depends on someone manually passing information along",
      "Critical updates trapped in email threads and chat groups",
      "No single source of truth across departments or stakeholders",
      "Teams spending 6-8 hours daily on coordination that should be automated",
    ],
  },
  {
    num: "02",
    title: "Legacy Infrastructure",
    desc: "Old tools patched together, not built to scale.",
    items: [
      "Disconnected ERPs, CRMs, and tracking portals with no integration layer",
      "Data re-entered manually across 3-6 systems per transaction",
      "Documentation errors causing compliance delays and demurrage charges",
      "Custom workarounds that break every time the team changes",
    ],
  },
  {
    num: "03",
    title: "Zero Operational Visibility",
    desc: "You're flying blind until something goes wrong.",
    items: [
      "Shipment status only known when someone checks manually",
      "No real-time dashboard for RFQ pipeline, freight status, or revenue",
      "Bottlenecks invisible until they cause client escalations",
      "Reporting built from spreadsheets the night before a review",
    ],
  },
];

export function Problem() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="problem" style={{ padding: "clamp(57px, 6.256vw, 76px) 0" }}>
      <div className="section-container" style={{ width: "92%", margin: "0 auto", padding: "0 clamp(21px, 3.91vw, 49px)" }}>
        <motion.div style={{ marginBottom: "clamp(28px, 3.128vw, 38px)" }} initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.h2 variants={fadeUp}
            style={{ fontSize: "clamp(2.231rem, 4.692vw, 3.514rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: "16px" }}>
            Where logistics{" "}<br />
            operations{" "}<br />
            <span style={{ fontWeight: 300, fontStyle: "italic", color: "#64748B" }}>break down.</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "clamp(15px, 1.095vw, 16px)", color: "#475569", maxWidth: "600px", lineHeight: 1.6 }}>
            Growing logistics businesses hit the same ceiling. Manual processes that were manageable at small scale become the constraint at every level of growth.
          </motion.p>
        </motion.div>

        <motion.div style={{ display: "flex", flexDirection: "column", gap: "clamp(15px, 1.564vw, 18px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          {cards.map((c, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.div key={c.num} variants={fadeUp}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  ...lightCardStyle,
                  borderRadius: "20px",
                  border: isHovered ? "1px solid rgba(15, 23, 42, 0.3)" : "1px solid rgba(0,0,0,0.05)",
                  boxShadow: isHovered ? "0 12px 36px rgba(0, 0, 0, 0.08)" : lightCardStyle.boxShadow,
                  padding: "clamp(25px, 3.128vw, 31px)",
                  cursor: "default",
                  transition: "border-color 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1)",
                  position: "relative",
                  overflow: "hidden",
                }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
                  <div>
                    <span style={{ display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F172A", marginBottom: "10px" }}>{c.num}</span>
                    <h3 style={{ fontSize: "clamp(1.116rem, 1.408vw, 1.251rem)", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.01em", marginBottom: "8px" }}>{c.title}</h3>
                    <p style={{ fontSize: "clamp(13px, 0.938vw, 14px)", color: "#475569" }}>{c.desc}</p>
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
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        {c.items.map((item, idx) => (
                          <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "16px", fontSize: "clamp(13px, 0.938vw, 14px)", color: "#334155", lineHeight: 1.6, marginBottom: "16px" }}>
                            <span style={{ marginTop: "10px", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#0F172A", flexShrink: 0 }} />
                            {item}
                          </li>
                        ))}
                      </ul>
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
