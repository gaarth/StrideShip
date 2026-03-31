"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const items = [
  { text: "We work with a limited number of clients.", sub: "Quality over volume. Always." },
  { text: "Every system is custom-built.", sub: "No templates. No shortcuts." },
  { text: "Built for scale, not just speed.", sub: "Infrastructure that compounds over time." },
];

export function Positioning() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Track the active sentence via pure React state
  const [activeIndex, setActiveIndex] = useState(0);

  // Drive the state strictly based on scroll position bounds.
  // This physically destroys the old text from the DOM before rendering the next,
  // making overlapping bugs 100% mechanically impossible.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.30) {
      setActiveIndex(0);
    } else if (latest >= 0.30 && latest < 0.60) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2); // Last sentence gets a huge 40% of the timeline to sit firmly on screen
    }
  });

  return (
    <section ref={sectionRef} id="positioning" style={{ height: "450vh", position: "relative" }}>
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
        
        {/* The label is part of the standard vertical flex layout, so it can never mathematically overlap with the text below it. */}
        <p style={{
          fontSize: "clamp(13px, 1.1vw, 16px)",
          fontWeight: 500,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#60a5fa",
          whiteSpace: "nowrap",
          marginBottom: "clamp(48px, 6vw, 72px)", 
        }}>
          — Our Position —
        </p>

        {/* The Text Container acts as a fixed-height stage so the layout doesn't collapse during swaps */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "220px", 
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
                width: "100%",
                maxWidth: "1100px",
              }}
            >
              <h3 style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 600,
                color: "#F1F5F9",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "clamp(16px, 2vw, 24px)",
              }}>
                {items[activeIndex].text}
              </h3>
              <p style={{
                fontSize: "clamp(18px, 1.6vw, 22px)",
                color: "#64748B",
                lineHeight: 1.5,
              }}>
                {items[activeIndex].sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
