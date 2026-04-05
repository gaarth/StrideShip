"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

// Extremely heavy, translucent fluid glass look
export const glassStyle = {
  backgroundColor: "rgba(10, 15, 30, 0.4)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.06)",
  transform: "translateZ(0)", 
};

// Reusable SVG Defs for 3D Matte aesthetic
const SvgDefs = () => (
  <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true">
    <defs>
      <linearGradient id="matte1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="matte2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="accentMatte" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6B8FA8" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <filter id="heavyShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="15" dy="20" stdDeviation="20" floodOpacity="0.6" floodColor="#000" />
      </filter>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="5" dy="10" stdDeviation="10" floodOpacity="0.4" floodColor="#000" />
      </filter>
    </defs>
  </svg>
);

export function Capabilities() {
  return (
    <section id="capabilities" style={{ padding: "clamp(80px, 12vw, 140px) 0", position: 'relative' }}>
      <SvgDefs />
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div style={{ marginBottom: "clamp(56px, 7vw, 80px)" }} initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#F1F5F9" }}>
            We don&rsquo;t add tools.<br />
            <span style={{ fontWeight: 300, fontStyle: "italic" }}>We replace manual systems.</span>
          </motion.h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "clamp(20px, 2.5vw, 24px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          
          {/* Card 1: Large (Workflow Automation) - SVG on Right */}
          <motion.div variants={fadeUp} className="md:col-span-2" style={{
            ...glassStyle,
            borderRadius: "24px",
            minHeight: "clamp(340px, 32vw, 440px)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
          }}>
            <div style={{ padding: "clamp(40px, 5vw, 64px)", flex: "1 1 60%", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 10 }}>
              <h3 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 500, color: "#F1F5F9", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Workflow Automation
              </h3>
              <p style={{ fontSize: "clamp(16px, 1.4vw, 19px)", color: "#94A3B8", lineHeight: 1.7, maxWidth: "680px" }}>
                Replace repetitive processes with intelligent automation. From RFQ pipelines to shipment coordination — custom systems that run end-to-end without manual intervention.
              </p>
            </div>
            {/* Massive abstracted gear/pipeline object */}
            <div style={{ position: "absolute", top: "50%", right: "-10%", transform: "translateY(-50%)", width: "60%", height: "150%", pointerEvents: "none", zIndex: 1, display: "flex", alignItems: "center" }}>
              <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="100" r="80" fill="none" stroke="url(#matte1)" strokeWidth="40" filter="url(#heavyShadow)" />
                <circle cx="120" cy="100" r="30" fill="none" stroke="url(#matte2)" strokeWidth="15" filter="url(#heavyShadow)" />
                <rect x="0" y="80" width="140" height="40" rx="20" fill="url(#matte1)" filter="url(#heavyShadow)" />
                <circle cx="140" cy="100" r="12" fill="url(#accentMatte)" filter="url(#softShadow)" />
              </svg>
            </div>
          </motion.div>

          {/* Card 2: Small (System Integration) - SVG at Bottom */}
          <motion.div variants={fadeUp} style={{
            ...glassStyle,
            borderRadius: "24px",
            minHeight: "clamp(340px, 32vw, 440px)",
            position: "relative",
            overflow: "hidden",
            display: "flex", flexDirection: "column",
          }}>
            <div style={{ padding: "clamp(32px, 4vw, 48px)", position: "relative", zIndex: 10 }}>
              <h3 style={{ fontSize: "clamp(1.5rem, 2vw, 1.875rem)", fontWeight: 500, color: "#F1F5F9", letterSpacing: "-0.02em", marginBottom: "16px" }}>
                System Integration
              </h3>
              <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", color: "#94A3B8", lineHeight: 1.7 }}>
                Connect your existing tools into a unified operational layer. CRM, ERP, carrier APIs — one system of record.
              </p>
              <div style={{ marginTop: "24px" }}>
                {["CRM / ERP", "Carrier APIs", "Internal Tools"].map((label) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "rgba(107,143,168,0.5)", boxShadow: "0 0 10px rgba(107,143,168,0.5)" }} />
                    <span style={{ fontSize: "clamp(13px, 1.1vw, 15px)", fontFamily: "monospace", color: "#F1F5F9" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Abstract intersecting rings/blocks */}
            <div style={{ position: "absolute", bottom: "-15%", right: "-10%", width: "80%", height: "80%", pointerEvents: "none", zIndex: 1 }}>
              <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="40" width="110" height="110" rx="30" fill="url(#matte1)" filter="url(#heavyShadow)" transform="rotate(15 100 100)" />
                <rect x="70" y="70" width="110" height="110" rx="30" fill="url(#matte2)" filter="url(#heavyShadow)" transform="rotate(-15 100 100)" />
                <circle cx="120" cy="120" r="20" fill="url(#accentMatte)" filter="url(#softShadow)" />
              </svg>
            </div>
          </motion.div>

          {/* Card 3: Small 2 (Operational Dashboards) - SVG Background, Text Overlaid at Bottom */}
          <motion.div variants={fadeUp} style={{
            ...glassStyle,
            borderRadius: "24px",
            minHeight: "clamp(340px, 32vw, 440px)",
            position: "relative",
            overflow: "hidden",
            display: "flex", alignItems: "flex-end", // Push text to bottom
          }}>
            {/* Matte Pie Chart Graphic */}
            <div style={{ position: "absolute", top: "0", right: "-10%", width: "90%", height: "90%", pointerEvents: "none", zIndex: 1 }}>
              <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* Base large circle */}
                <circle cx="100" cy="100" r="80" fill="url(#matte1)" filter="url(#heavyShadow)" />
                {/* Overlay half slice */}
                <path d="M 100 100 L 100 20 A 80 80 0 0 1 180 100 Z" fill="url(#matte2)" filter="url(#heavyShadow)" />
                {/* Popped out accent slice */}
                <path d="M 100 100 L 20 100 A 80 80 0 0 1 100 20 Z" fill="url(#accentMatte)" filter="url(#heavyShadow)" transform="translate(-15, -15)" />
              </svg>
            </div>
            
            <div style={{ padding: "clamp(32px, 4vw, 48px)", position: "relative", zIndex: 10, width: "100%", background: "linear-gradient(to top, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.4) 70%, transparent 100%)" }}>
              <h3 style={{ fontSize: "clamp(1.5rem, 2vw, 1.875rem)", fontWeight: 500, color: "#F1F5F9", letterSpacing: "-0.02em", marginBottom: "16px" }}>
                Operational Dashboards
              </h3>
              <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", color: "#94A3B8", lineHeight: 1.7 }}>
                Real-time visibility into every operation. No more chasing updates or waiting for reports.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Large 2 (Custom Built) - SVG on Left */}
          <motion.div variants={fadeUp} className="md:col-span-2" style={{
            ...glassStyle,
            borderRadius: "24px",
            minHeight: "clamp(340px, 32vw, 440px)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row-reverse", 
          }}>
            <div style={{ padding: "clamp(40px, 5vw, 64px)", flex: "1 1 50%", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 10 }}>
              <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 500, color: "#F1F5F9", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Every system is custom-built
              </h3>
              <p style={{ fontSize: "clamp(16px, 1.4vw, 19px)", color: "#94A3B8", lineHeight: 1.7, maxWidth: "700px" }}>
                No templates. No off-the-shelf automations. We study your operations and architect systems that fit precisely — built for your workflows, your data, your scale.
              </p>
            </div>
            {/* Abstract Geometric drafting overlay  */}
            <div style={{ position: "absolute", top: "0", left: "-5%", bottom: "0", width: "60%", pointerEvents: "none", zIndex: 1, display: "flex", alignItems: "center" }}>
              <svg width="100%" height="150%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(15deg)' }}>
                <polygon points="10,100 90,20 170,100 90,180" fill="url(#matte1)" filter="url(#heavyShadow)" />
                <polygon points="10,130 90,50 170,130 90,210" fill="url(#matte2)" filter="url(#heavyShadow)" />
                <circle cx="90" cy="115" r="30" fill="url(#accentMatte)" filter="url(#heavyShadow)" />
                <circle cx="90" cy="115" r="10" fill="#0f172a" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
