"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

// Pure text, stripped of all SVG icons.
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

// Expanded the array size to ensure the CSS -50% marquee 
// animation always has enough offscreen DOM elements to loop endlessly.
const doubled = [...items, ...items, ...items, ...items];

export function WhoWeHelp() {
  
  // This ultra-clean hardware accelerated hook binds into the standard DOM
  // completely bypassing React's render loop so it can fire at 120hz smoothly.
  useAnimationFrame(() => {
    // Collect purely the anchors to measure so bounding rect transforms don't cause oscillation layout jitter
    const anchors = document.querySelectorAll(".marquee-item-anchor");
    if (!anchors.length) return;
    
    const screenCenter = window.innerWidth / 2;
    // The concave intensity configs
    const DEPTH = 120; 
    const ANGLE = 38; 
    const MAX_SCALE = 0.15; 
    
    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i] as HTMLElement;
        const target = anchor.querySelector(".marquee-item-content") as HTMLElement;
        if (!target) continue;
        
        const rect = anchor.getBoundingClientRect();
        // Skip heavy transform calculations if entirely offscreen
        if (rect.right < -500 || rect.left > window.innerWidth + 500) continue;
        
        const childCenter = rect.left + rect.width / 2;
        let d = (childCenter - screenCenter) / screenCenter;
        
        // Hard clamp limits the edge curve
        d = Math.max(-1.5, Math.min(1.5, d));

        // Exponential power mapping traps the "dead center" so elements face 
        // completely flat forward for a wide radius before curving abruptly at the edges
        const curveStrength = Math.sign(d) * Math.pow(Math.abs(d), 2);
        
        // rotateY positive = right-side goes away, left comes near.
        // Therefore left screen items (curveStrength < 0) get positive rotations.
        const rotateY = curveStrength * -ANGLE; 
        const translateZ = Math.abs(curveStrength) * DEPTH; 
        const scale = 1 + Math.pow(Math.abs(d), 2) * MAX_SCALE;
        
        // Deeply fade outer edges down into the shadow map
        const edgeFade = 1 - (Math.abs(d) * 0.45);
        
        target.style.transform = `translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        target.style.opacity = Math.max(0, Math.min(1, edgeFade)).toString();
    }
  });

  return (
    <section id="who-we-help" style={{ padding: "clamp(80px, 12vw, 140px) 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 72px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#F1F5F9", marginBottom: "20px" }}>
            Built for the teams<br />
            <span style={{ fontWeight: 300, fontStyle: "italic" }}>running global trade.</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "clamp(16px, 1.4vw, 20px)", color: "#94A3B8", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            From customs clearance to last-mile delivery, we work with every node in the logistics chain.
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee Wrapper forced into a 3D perspective context */}
      <div style={{ position: "relative", perspective: "1200px", transformStyle: "preserve-3d" }}>
        
        {/* Deep ambient shadow gradients blocking the edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "15vw", background: "linear-gradient(to right, #060B14 0%, transparent 100%)", zIndex: 10, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "15vw", background: "linear-gradient(to left, #060B14 0%, transparent 100%)", zIndex: 10, pointerEvents: "none" }} />

        <div className="animate-marquee" style={{ display: "flex", gap: "clamp(16px, 2vw, 24px)", width: "max-content", transformStyle: "preserve-3d", padding: "40px 0" }}>
          {doubled.map((item, i) => (
            <div key={i} className="marquee-item-anchor" style={{ flexShrink: 0, perspective: "800px", transformStyle: "preserve-3d" }}>
              <div className="marquee-item-content" style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "clamp(20px, 2.5vw, 28px) clamp(32px, 3.5vw, 48px)",
                borderRadius: "20px", 
                backgroundColor: "rgba(10, 15, 30, 0.4)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.06)",
                whiteSpace: "nowrap", flexShrink: 0,
                transformOrigin: "center center",
                willChange: "transform, opacity", // Signals GPU to prep memory layers
                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}>
                <span style={{ fontSize: "clamp(18px, 1.8vw, 22px)", fontWeight: 600, color: "#F1F5F9", letterSpacing: "-0.01em" }}>
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
