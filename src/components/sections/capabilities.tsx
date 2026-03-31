"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

// Extremely heavy, translucent fluid glass look
export const glassStyle = {
  backgroundColor: "rgba(10, 15, 30, 0.25)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "none",
  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.06)",
  transform: "translateZ(0)", // Force GPU acceleration for smooth scrolling
};

export function Capabilities() {
  return (
    <section id="capabilities" style={{ padding: "clamp(80px, 12vw, 140px) 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div style={{ marginBottom: "clamp(56px, 7vw, 80px)" }} initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.p variants={fadeUp} style={{ fontSize: "clamp(13px, 1.1vw, 16px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#60a5fa", marginBottom: "20px" }}>
            Capabilities
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.04em", color: "#F1F5F9" }}>
            We don&rsquo;t add tools.<br /> We replace manual systems.
          </motion.h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "clamp(20px, 2.5vw, 24px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          {/* Large */}
          <motion.div variants={fadeUp} className="md:col-span-2" style={{
            ...glassStyle,
            borderRadius: "24px",
            padding: "clamp(40px, 5vw, 64px)", minHeight: "clamp(340px, 32vw, 440px)",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              <span style={{ fontSize: "14px", fontFamily: "monospace", color: "#64748B", display: "block", marginBottom: "24px", letterSpacing: "0.05em" }}>01</span>
              <h3 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 500, color: "#F1F5F9", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Workflow Automation
              </h3>
              <p style={{ fontSize: "clamp(16px, 1.4vw, 19px)", color: "#94A3B8", lineHeight: 1.7, maxWidth: "680px" }}>
                Replace repetitive processes with intelligent automation. From RFQ pipelines to shipment coordination — custom systems that run end-to-end without manual intervention.
              </p>
            </div>
          </motion.div>

          {/* Small */}
          <motion.div variants={fadeUp} style={{
            ...glassStyle,
            borderRadius: "24px",
            padding: "clamp(32px, 4vw, 48px)", minHeight: "clamp(340px, 32vw, 440px)",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              <span style={{ fontSize: "14px", fontFamily: "monospace", color: "#64748B", display: "block", marginBottom: "24px", letterSpacing: "0.05em" }}>02</span>
              <h3 style={{ fontSize: "clamp(1.5rem, 2vw, 1.875rem)", fontWeight: 500, color: "#F1F5F9", letterSpacing: "-0.02em", marginBottom: "16px" }}>
                System Integration
              </h3>
              <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", color: "#94A3B8", lineHeight: 1.7 }}>
                Connect your existing tools into a unified operational layer. CRM, ERP, carrier APIs — one system of record.
              </p>
            </div>
            <div style={{ marginTop: "36px" }}>
              {["CRM / ERP", "Carrier APIs", "Internal Tools"].map((label) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(59,130,246,0.5)", boxShadow: "0 0 10px rgba(59,130,246,0.5)" }} />
                  <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
                  <span style={{ fontSize: "clamp(13px, 1.1vw, 15px)", fontFamily: "monospace", color: "#94A3B8" }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Small 2 */}
          <motion.div variants={fadeUp} style={{
            ...glassStyle,
            borderRadius: "24px",
            padding: "clamp(32px, 4vw, 48px)", minHeight: "clamp(280px, 26vw, 360px)",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              <span style={{ fontSize: "14px", fontFamily: "monospace", color: "#64748B", display: "block", marginBottom: "24px", letterSpacing: "0.05em" }}>03</span>
              <h3 style={{ fontSize: "clamp(1.5rem, 2vw, 1.875rem)", fontWeight: 500, color: "#F1F5F9", letterSpacing: "-0.02em", marginBottom: "16px" }}>
                Operational Dashboards
              </h3>
              <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", color: "#94A3B8", lineHeight: 1.7 }}>
                Real-time visibility into every operation. No more chasing updates or waiting for reports.
              </p>
            </div>
          </motion.div>

          {/* Large 2 */}
          <motion.div variants={fadeUp} className="md:col-span-2" style={{
            ...glassStyle,
            borderRadius: "24px",
            padding: "clamp(40px, 5vw, 64px)", display: "flex", flexDirection: "column",
          }}>
            <span style={{ fontSize: "14px", fontFamily: "monospace", color: "#64748B", display: "block", marginBottom: "24px", letterSpacing: "0.05em" }}>04</span>
            <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 500, color: "#F1F5F9", letterSpacing: "-0.02em", marginBottom: "20px" }}>
              Every system is custom-built
            </h3>
            <p style={{ fontSize: "clamp(16px, 1.4vw, 19px)", color: "#94A3B8", lineHeight: 1.7, maxWidth: "700px" }}>
              No templates. No off-the-shelf automations. We study your operations and architect systems that fit precisely — built for your workflows, your data, your scale.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
