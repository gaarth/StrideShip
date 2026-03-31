"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

/* Professional SVG icons */
const IconBox = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
  </svg>
);
const IconTruck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 9H14" />
    <circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" />
  </svg>
);
const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
  </svg>
);
const IconArrows = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />
  </svg>
);
const IconAnchor = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3" /><path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3" />
  </svg>
);
const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);
const IconPlane = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);
const IconBuilding = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
  </svg>
);

const items = [
  { Icon: IconBox, label: "LCL Consolidators" },
  { Icon: IconTruck, label: "3PL Providers" },
  { Icon: IconGlobe, label: "Logistics Firms" },
  { Icon: IconArrows, label: "Importers & Exporters" },
  { Icon: IconAnchor, label: "NVOCC Operators" },
  { Icon: IconShield, label: "Clearance Agents" },
  { Icon: IconPlane, label: "Freight Forwarders" },
  { Icon: IconBuilding, label: "Custom House Agents" },
];

const doubled = [...items, ...items];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" style={{ padding: "clamp(80px, 12vw, 140px) 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 72px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.p variants={fadeUp} style={{ fontSize: "clamp(13px, 1.1vw, 16px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#60a5fa", marginBottom: "20px" }}>
            — Who We Help —
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.04em", color: "#F1F5F9", marginBottom: "20px" }}>
            Built for the teams running global trade.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: "#94A3B8", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            From customs clearance to last-mile delivery, we work with every node in the logistics chain.
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "160px", background: "linear-gradient(to right, #060B14, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "160px", background: "linear-gradient(to left, #060B14, transparent)", zIndex: 2, pointerEvents: "none" }} />

        <div className="animate-marquee" style={{ display: "flex", gap: "clamp(14px, 1.5vw, 22px)", width: "max-content" }}>
          {doubled.map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: "16px",
              padding: "clamp(16px, 1.8vw, 22px) clamp(22px, 2.5vw, 32px)",
              borderRadius: "16px", backgroundColor: "#0C1322",
              border: "1px solid rgba(255,255,255,0.06)",
              whiteSpace: "nowrap", flexShrink: 0,
            }}>
              <div style={{
                width: "clamp(36px, 3.5vw, 44px)", height: "clamp(36px, 3.5vw, 44px)",
                borderRadius: "12px", backgroundColor: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <item.Icon />
              </div>
              <span style={{ fontSize: "clamp(15px, 1.3vw, 18px)", fontWeight: 500, color: "#F1F5F9" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
