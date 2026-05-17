"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  q: string;
  a: string;
}

export function FAQContent({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 1.5vw, 16px)", maxWidth: "800px", margin: "0 auto" }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderRadius: "14px",
              backgroundColor: "rgba(10, 15, 30, 0.75)",
              border: isOpen ? "1px solid rgba(107,143,168,0.3)" : "1px solid rgba(255,255,255,0.06)",
              boxShadow: isOpen
                ? "0 10px 40px rgba(107,143,168,0.1), inset 0 1px 0 rgba(255,255,255,0.1)"
                : "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              overflow: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                padding: "clamp(20px, 2.5vw, 28px)",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <h2 style={{
                fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                color: "#F1F5F9",
                letterSpacing: "-0.01em",
                lineHeight: 1.4,
                margin: 0,
              }}>
                {item.q}
              </h2>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isOpen ? "rgba(107,143,168,0.15)" : "rgba(255,255,255,0.03)",
                border: isOpen ? "1px solid rgba(107,143,168,0.3)" : "1px solid rgba(255,255,255,0.1)",
                color: isOpen ? "#6B8FA8" : "#F1F5F9",
                transition: "all 0.3s ease",
                flexShrink: 0,
              }}>
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={false}
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </motion.svg>
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{
                    padding: "0 clamp(20px, 2.5vw, 28px) clamp(20px, 2.5vw, 28px)",
                  }}>
                    <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.05)", marginBottom: "20px" }} />
                    <p style={{
                      fontSize: "clamp(14px, 1.2vw, 16px)",
                      color: "#94A3B8",
                      lineHeight: 1.8,
                      margin: 0,
                    }}>
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
