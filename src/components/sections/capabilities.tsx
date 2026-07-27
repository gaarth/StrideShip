"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

// Raft bright white card style
export const lightCardStyle = {
  backgroundColor: "#FFFFFF",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
  transform: "translateZ(0)",
};

// Reusable SVG Defs for 3D Matte aesthetic
const SvgDefs = () => (
  <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true">
    <defs>
      <linearGradient id="matte1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#CBD5E1" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
      <linearGradient id="matte2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#94A3B8" />
        <stop offset="100%" stopColor="#64748B" />
      </linearGradient>
      <linearGradient id="accentMatte" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
  </svg>
);

export function Capabilities() {
  return (
    <section id="capabilities" style={{ padding: "clamp(57px, 6.256vw, 76px) 0", position: 'relative' }}>
      <SvgDefs />
      <div className="section-container" style={{ width: "92%", margin: "0 auto", padding: "0 clamp(21px, 3.91vw, 49px)" }}>
        <motion.div style={{ marginBottom: "clamp(28px, 3.128vw, 38px)" }} initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.231rem, 4.692vw, 3.514rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#0F172A" }}>
            We don&rsquo;t add tools.{" "}<br />
            <span style={{ fontWeight: 300, fontStyle: "italic", color: "#64748B" }}>We replace manual systems.</span>
          </motion.h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "clamp(18px, 1.96vw, 20px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          
          {/* Card 1: Large (Workflow Automation) */}
          <motion.div variants={fadeUp} className="md:col-span-2" style={{
            ...lightCardStyle,
            borderRadius: "24px",
            minHeight: "clamp(161px, 12.512vw, 187px)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
          }}>
            <div style={{ padding: "clamp(21px, 2.346vw, 31px)", flex: "1 1 60%", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 10 }}>
              <h3 style={{ fontSize: "clamp(1.562rem, 2.346vw, 1.96rem)", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Workflow Automation
              </h3>
              <p style={{ fontSize: "clamp(15px, 1.095vw, 16px)", color: "#475569", lineHeight: 1.7, maxWidth: "680px" }}>
                Replace repetitive processes with intelligent automation. From RFQ pipelines to shipment coordination - custom systems that run end-to-end without manual intervention.
              </p>
            </div>
            <div style={{ position: "absolute", top: "50%", right: "-10%", transform: "translateY(-50%)", width: "60%", height: "150%", pointerEvents: "none", zIndex: 1, display: "flex", alignItems: "center", opacity: 0.25 }}>
              <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="100" r="80" fill="none" stroke="url(#matte1)" strokeWidth="40"
                  style={{ transformOrigin: "120px 100px", animation: "cap-float-up 6s ease-in-out infinite" }} />
                <circle cx="120" cy="100" r="30" fill="none" stroke="url(#matte2)" strokeWidth="15"
                  style={{ transformOrigin: "120px 100px", animation: "cap-float-down 6s ease-in-out infinite 0.4s" }} />
                <rect x="0" y="80" width="140" height="40" rx="20" fill="url(#matte1)"
                  style={{ animation: "cap-float-up 6s ease-in-out infinite 0.8s" }} />
                <circle cx="140" cy="100" r="12" fill="url(#accentMatte)"
                  style={{ transformOrigin: "140px 100px", animation: "cap-dot-pulse 3s ease-in-out infinite 1s" }} />
              </svg>
            </div>
          </motion.div>

          {/* Card 2: System Integration */}
          <motion.div variants={fadeUp} style={{
            ...lightCardStyle,
            borderRadius: "24px",
            minHeight: "clamp(161px, 12.512vw, 187px)",
            position: "relative",
            overflow: "hidden",
            display: "flex", flexDirection: "column",
          }}>
            <div style={{ padding: "clamp(21px, 1.96vw, 25px)", position: "relative", zIndex: 10 }}>
              <h3 style={{ fontSize: "clamp(1.339rem, 1.564vw, 1.466rem)", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: "16px" }}>
                System Integration
              </h3>
              <p style={{ fontSize: "clamp(14px, 1.012vw, 15px)", color: "#475569", lineHeight: 1.7 }}>
                Connect your existing tools into a unified operational layer. CRM, ERP, carrier APIs - one system of record.
              </p>
              <div style={{ marginTop: "24px" }}>
                {["CRM / ERP", "Carrier APIs", "Internal Tools"].map((label) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#0F172A" }} />
                    <span style={{ fontSize: "clamp(12px, 0.865vw, 13px)", fontWeight: 600, color: "#0F172A" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "-15%", right: "-10%", width: "92%", height: "80%", pointerEvents: "none", zIndex: 1, opacity: 0.25 }}>
              <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="40" width="110" height="110" rx="30" fill="url(#matte1)"
                  style={{ transformOrigin: "100px 100px", animation: "cap-tilt-cw 7s ease-in-out infinite" }} />
                <rect x="70" y="70" width="110" height="110" rx="30" fill="url(#matte2)"
                  style={{ transformOrigin: "100px 100px", animation: "cap-tilt-ccw 7s ease-in-out infinite 0.6s" }} />
                <circle cx="120" cy="120" r="20" fill="url(#accentMatte)"
                  style={{ transformOrigin: "120px 120px", animation: "cap-dot-pulse 3.5s ease-in-out infinite 1.2s" }} />
              </svg>
            </div>
          </motion.div>

          {/* Card 3: Operational Dashboards */}
          <motion.div variants={fadeUp} style={{
            ...lightCardStyle,
            borderRadius: "24px",
            minHeight: "clamp(161px, 12.512vw, 187px)",
            position: "relative",
            overflow: "hidden",
            display: "flex", alignItems: "flex-end",
          }}>
            <div style={{ position: "absolute", top: "0", right: "-10%", width: "94%", height: "90%", pointerEvents: "none", zIndex: 1, opacity: 0.25 }}>
              <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="url(#matte1)"
                  style={{ transformOrigin: "100px 100px", animation: "cap-circle-pulse 5s ease-in-out infinite" }} />
                <path d="M 100 100 L 100 20 A 80 80 0 0 1 180 100 Z" fill="url(#matte2)"
                  style={{ transformOrigin: "100px 100px", animation: "cap-circle-pulse 5s ease-in-out infinite 0.5s" }} />
                <path d="M 100 100 L 20 100 A 80 80 0 0 1 100 20 Z" fill="url(#accentMatte)"
                  style={{ animation: "cap-slice-breathe 5s ease-in-out infinite 1s" }} />
              </svg>
            </div>
            
            <div style={{ padding: "clamp(21px, 1.96vw, 25px)", position: "relative", zIndex: 10, width: "100%", background: "linear-gradient(to top, #FFFFFF 70%, transparent 100%)" }}>
              <h3 style={{ fontSize: "clamp(1.339rem, 1.564vw, 1.466rem)", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: "16px" }}>
                Operational Dashboards
              </h3>
              <p style={{ fontSize: "clamp(14px, 1.012vw, 15px)", color: "#475569", lineHeight: 1.7 }}>
                Real-time visibility into every operation. No more chasing updates or waiting for reports.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Custom Built */}
          <motion.div variants={fadeUp} className="md:col-span-2" style={{
            ...lightCardStyle,
            borderRadius: "24px",
            minHeight: "clamp(161px, 12.512vw, 187px)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row-reverse", 
          }}>
            <div style={{ padding: "clamp(21px, 2.346vw, 31px)", flex: "1 1 50%", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 10 }}>
              <h3 style={{ fontSize: "clamp(1.339rem, 1.96vw, 1.564rem)", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Every system is custom-built
              </h3>
              <p style={{ fontSize: "clamp(15px, 1.095vw, 16px)", color: "#475569", lineHeight: 1.7, maxWidth: "700px" }}>
                No templates. No off-the-shelf automations. We study your operations and architect systems that fit precisely - built for your workflows, your data, your scale.
              </p>
            </div>
            <div style={{ position: "absolute", top: "0", left: "-5%", bottom: "0", width: "60%", pointerEvents: "none", zIndex: 1, display: "flex", alignItems: "center", opacity: 0.25 }}>
              <svg width="100%" height="150%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                style={{ animation: "cap-diamond-float 8s ease-in-out infinite" }}>
                <polygon points="10,100 90,20 170,100 90,180" fill="url(#matte1)" />
                <polygon points="10,130 90,50 170,130 90,210" fill="url(#matte2)"
                  style={{ animation: "cap-float-down 8s ease-in-out infinite 1s" }} />
                <circle cx="90" cy="115" r="30" fill="url(#accentMatte)"
                  style={{ transformOrigin: "90px 115px", animation: "cap-dot-pulse 4s ease-in-out infinite 0.5s" }} />
                <circle cx="90" cy="115" r="10" fill="#FFFFFF" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
