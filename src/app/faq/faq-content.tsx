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
              borderRadius: "20px",
              backgroundColor: "#FFFFFF", // Pure bright white card matching Raft design
              border: isOpen ? "1px solid rgba(37, 99, 235, 0.3)" : "1px solid rgba(0, 0, 0, 0.05)",
              boxShadow: isOpen
                ? "0 12px 36px rgba(0, 0, 0, 0.08)"
                : "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              overflow: "hidden",
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
                fontSize: "clamp(1.05rem, 1.3vw, 1.25rem)",
                fontWeight: 700,
                color: "#0F172A",
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
                backgroundColor: isOpen ? "#EFF6FF" : "#F8FAFC",
                border: isOpen ? "1px solid #BFDBFE" : "1px solid #E2E8F0",
                color: isOpen ? "#2563EB" : "#0F172A",
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
                    <div style={{ height: "1px", backgroundColor: "#E2E8F0", marginBottom: "20px" }} />
                    <p style={{
                      fontSize: "clamp(14px, 1.2vw, 16px)",
                      color: "#475569",
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
