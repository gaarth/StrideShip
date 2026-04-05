"use client";

import { motion } from "framer-motion";
import { fadeUp, slideL, slideR, stagger, VP } from "@/lib/motion-variants";

const glassStyle = {
  borderRadius: "24px",
  backgroundColor: "rgba(10, 15, 30, 0.25)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.06)",
  transform: "translateZ(0)",
};

const before = [
  "6–8 hours daily on manual coordination across teams",
  "Critical workflows dependent on specific people, not systems",
  "Errors and delays from fragmented tool stacks",
  "Zero visibility until something breaks or a client escalates",
];

const after = [
  "2–3 hours reclaimed daily across core operations",
  "Faster RFQ turnaround and shipment processing",
  "Systems that run on their own with minimal intervention",
  "Real-time dashboards with live operational visibility",
];

export function BeforeAfter() {
  return (
    <section id="before-after" style={{ padding: "clamp(80px, 12vw, 140px) 0" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 72px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#F1F5F9" }}>
            Before<br />
            <span style={{ fontWeight: 300, fontStyle: "italic" }}>vs After</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(24px, 3vw, 32px)" }}>
          {/* Before */}
          <motion.div variants={slideL} initial="hidden" whileInView="show" viewport={VP}
            style={{ ...glassStyle, border: "1px solid rgba(255,255,255,0.06)", padding: "clamp(40px, 4.5vw, 64px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "clamp(32px, 4vw, 48px)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                backgroundColor: "rgba(239,68,68,0.08)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" opacity="0.3" />
                  <path d="M15 9l-6 6M9 9l6 6" />
                </svg>
              </div>
              <span style={{ fontSize: "clamp(18px, 1.6vw, 22px)", fontWeight: 600, color: "#F1F5F9", letterSpacing: "-0.01em" }}>Before StrideShip</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {before.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", fontSize: "clamp(15px, 1.3vw, 18px)", color: "#94A3B8", lineHeight: 1.7, marginBottom: i < before.length - 1 ? "clamp(16px, 1.8vw, 22px)" : 0 }}>
                  <span style={{ marginTop: "11px", width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#64748B", flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div variants={slideR} initial="hidden" whileInView="show" viewport={VP}
            style={{ ...glassStyle, border: "1px solid rgba(255,255,255,0.06)", padding: "clamp(40px, 4.5vw, 64px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "clamp(32px, 4vw, 48px)" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                backgroundColor: "rgba(107,143,168,0.08)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B8FA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" opacity="0.3" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span style={{ fontSize: "clamp(18px, 1.6vw, 22px)", fontWeight: 600, color: "#F1F5F9", letterSpacing: "-0.01em" }}>After StrideShip</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {after.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", fontSize: "clamp(15px, 1.3vw, 18px)", color: "#94A3B8", lineHeight: 1.7, marginBottom: i < after.length - 1 ? "clamp(16px, 1.8vw, 22px)" : 0 }}>
                  <span style={{ marginTop: "11px", width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#6B8FA8", flexShrink: 0, boxShadow: "0 0 8px rgba(107,143,168,0.5)" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={VP}
          style={{ textAlign: "center", marginTop: "clamp(56px, 6vw, 80px)", fontSize: "clamp(17px, 1.5vw, 20px)", color: "#64748B", fontStyle: "italic" }}>
          &ldquo;We don&rsquo;t aim to remove people. We remove the friction slowing them down.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
