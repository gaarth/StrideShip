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
    <section id="who-we-help" style={{ padding: "clamp(48px, 7vw, 84px) 0", overflow: "hidden" }}>
      <div style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div style={{ textAlign: "center", marginBottom: "clamp(28px, 3.5vw, 42px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#F1F5F9", marginBottom: "20px" }}>
            Built for the teams<br />
            <span style={{ fontStyle: "italic" }}>running global trade.</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: "#94A3B8", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            From customs clearance to last-mile delivery, we work with every node in the logistics chain.
          </motion.p>
        </motion.div>
      </div>

      {/* Simple flat marquee — no 3D warp */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Left fade */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "15vw", background: "linear-gradient(to right, #060B14 0%, transparent 100%)", zIndex: 10, pointerEvents: "none" }} />
        {/* Right fade */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "15vw", background: "linear-gradient(to left, #060B14 0%, transparent 100%)", zIndex: 10, pointerEvents: "none" }} />

        <div className="animate-marquee" style={{ display: "flex", gap: "clamp(16px, 2vw, 24px)", width: "max-content", padding: "40px 0" }}>
          {doubled.map((item, i) => (
            <div key={i} style={{
              flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "clamp(20px, 2.5vw, 28px) clamp(32px, 3.5vw, 48px)",
              borderRadius: "20px",
              backgroundColor: "rgba(10, 15, 30, 0.75)",
              border: "1px solid rgba(255,255,255,0.06)",
              whiteSpace: "nowrap",
              boxShadow: "0 20px 40px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}>
              <span style={{ fontSize: "clamp(18px, 1.8vw, 22px)", color: "#F1F5F9", letterSpacing: "-0.01em" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
