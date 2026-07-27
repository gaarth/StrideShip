"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

const items = [
  "LCL Consolidators",
  "3PL Providers",
  "Logistics Firms",
  "Importers & Exporters",
  "NVOCC Operators",
  "Clearance Agents",
  "Freight Forwarders",
  "Custom House Agents",
];

// Doubled so the -50% CSS loop is always seamless
const doubled = [...items, ...items];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" style={{ padding: "clamp(64px, 8vw, 96px) 0", overflow: "hidden" }}>
      <div className="section-container" style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div style={{ textAlign: "center", marginBottom: "clamp(28px, 3.5vw, 42px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>

          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: "20px" }}>
            Built for the teams{" "}<br />
            <span style={{ fontStyle: "italic", color: "#64748B" }}>running global trade.</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: "#475569", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            From customs house agents and freight forwarders to last-mile delivery, we work with every node in the logistics chain.
          </motion.p>
        </motion.div>
      </div>

      {/* Simple flat marquee in Raft bright white cards */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Left fade */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "15vw", background: "linear-gradient(to right, #F5F4F0 0%, transparent 100%)", zIndex: 10, pointerEvents: "none" }} />
        {/* Right fade */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "15vw", background: "linear-gradient(to left, #F5F4F0 0%, transparent 100%)", zIndex: 10, pointerEvents: "none" }} />

        <div className="animate-marquee" style={{ display: "flex", gap: "clamp(16px, 2vw, 24px)", width: "max-content", padding: "24px 0" }}>
          {doubled.map((item, i) => (
            <div key={i} style={{
              flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "clamp(18px, 2.2vw, 24px) clamp(28px, 3vw, 40px)",
              borderRadius: "20px",
              backgroundColor: "#FFFFFF", // Pure bright white card box matching Raft
              border: "1px solid rgba(0, 0, 0, 0.05)",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
            }}>
              <span style={{ fontSize: "clamp(17px, 1.6vw, 20px)", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.01em" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
