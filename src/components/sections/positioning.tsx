"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const highlightedStyle = {
  background: "linear-gradient(135deg, #F8FAFC 20%, #6B8FA8 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
  fontWeight: 800,
};

const items = [
  { text: <>We work with a <span style={highlightedStyle}>limited</span> number of clients.</>, sub: "Quality over volume. Always." },
  { text: <>Every system is <span style={highlightedStyle}>custom-built</span>.</>, sub: "No templates. No shortcuts." },
  { text: <>Built for <span style={highlightedStyle}>scale</span>, not just <span style={highlightedStyle}>speed</span>.</>, sub: "Infrastructure that compounds over time." },
];

export function Positioning() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveIndex(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2); 
    }
  });

  return (
    <section ref={sectionRef} id="positioning" style={{ height: "250vh", position: "relative" }}>
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        
        {/* The Text Container acts as a fixed-height stage so the layout doesn't collapse during swaps */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "320px", 
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                textAlign: "center",
                padding: "0 clamp(24px, 5vw, 64px)",
                width: "80%",
              }}
            >
              <h3 style={{
                fontSize: "clamp(3.5rem, 7vw, 6rem)",
                fontWeight: 600,
                color: "#F1F5F9",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: "clamp(24px, 3vw, 32px)",
              }}>
                {items[activeIndex].text}
              </h3>
              <p style={{
                fontSize: "clamp(20px, 2vw, 26px)",
                color: "#64748B",
                lineHeight: 1.5,
              }}>
                {items[activeIndex].sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small transparent scroll down indicator */}
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: "clamp(40px, 6vh, 80px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            color: "rgba(255,255,255,0.4)",
            pointerEvents: "none",
          }}
        >
          <span style={{ fontSize: "clamp(0.875rem, 1.5vw, 1rem)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>Scroll</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </motion.div>

      </div>
    </section>
  );
}
