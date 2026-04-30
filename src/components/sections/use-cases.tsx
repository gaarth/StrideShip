"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

const cases = [
  {
    id: "docs", num: "01",
    title: "Document Processing & Automation",
    desc: "From messy emails to structured data in seconds. We parse PDF invoices, packing lists, and quote requests — instantly formatting them into clean Excel sheets with zero errors.",
    details: [
      "Parse PDF invoices, bills of lading, and packing lists instantly",
      "Auto-structure messy email content into organized spreadsheets",
      "Eliminate repetitive copy-paste across Excel files completely",
      "Cross-validate documents against bookings automatically",
    ],
  },
  {
    id: "rfq", num: "02",
    title: "RFQ & Quote Automation",
    desc: "Turn unstructured emails and quote requests into instant, accurate responses. No more manual data extraction or spreadsheet formatting — the system handles it end-to-end.",
    details: [
      "Extract data from raw, unstructured email requests automatically",
      "Generate accurate quotes from messy inputs in seconds",
      "Structure raw email data into formatted Excel outputs",
      "Dynamic pricing engine with full audit trail on every decision",
    ],
  },
  {
    id: "tracking", num: "03",
    title: "Shipment Tracking Systems",
    desc: "End-to-end visibility across the shipment lifecycle. One unified view, updated in real time — no more chasing carriers or manually updating spreadsheets.",
    details: [
      "Multi-carrier tracking in a single dashboard",
      "Automated milestone alerts and notifications",
      "Exception-based delay alerting before clients notice",
      "Full shipment history with searchable audit logs",
    ],
  },
  {
    id: "dash", num: "04",
    title: "Operations Dashboards",
    desc: "Real-time operational monitoring. Leadership gets clear visibility without asking for reports — KPIs, team performance, and pipeline status at a glance.",
    details: [
      "Live KPIs and operational metrics",
      "Team performance visibility across departments",
      "Automated daily and weekly reporting",
      "Custom views for leadership, ops, and client teams",
    ],
  },
];

const glassStyle = {
  borderRadius: "24px",
  backgroundColor: "rgba(10, 15, 30, 0.75)",
  border: "none" as const,
  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.06)",
  transform: "translateZ(0)",
};

export function UseCases() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="use-cases" style={{ padding: "clamp(48px, 7vw, 84px) 0" }}>
      <div className="section-container" style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div style={{ marginBottom: "clamp(32px, 4vw, 48px)" }} initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "#F1F5F9" }}>
            Systems{" "}<br />
            <span style={{ fontWeight: 300, fontStyle: "italic" }}>we build.</span>
          </motion.h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(20px, 2.5vw, 32px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          {cases.map((c) => {
            const isOpen = open === c.id;
            return (
              <motion.div key={c.id} variants={fadeUp} style={{
                ...glassStyle,
                padding: "clamp(36px, 4vw, 56px)", transition: "border-color 0.2s",
              }}>
                <h3 style={{ fontSize: "clamp(1.5rem, 2vw, 1.875rem)", fontWeight: 500, color: "#F1F5F9", letterSpacing: "-0.02em", marginBottom: "16px" }}>{c.title}</h3>
                <p style={{ fontSize: "clamp(16px, 1.4vw, 19px)", color: "#94A3B8", lineHeight: 1.7, marginBottom: "32px" }}>{c.desc}</p>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}>
                      <ul style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "24px", paddingBottom: "16px", listStyle: "none" }}>
                        {c.details.map((d, i) => (
                          <li key={i} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "clamp(15px, 1.3vw, 17px)", color: "#94A3B8", marginBottom: "16px" }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B8FA8" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button onClick={() => setOpen(isOpen ? null : c.id)}
                  style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "clamp(14px, 1.1vw, 16px)", color: "#64748B", background: "none", border: "none", cursor: "pointer", padding: "8px 0", transition: "color 0.2s", fontWeight: 500 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#6B8FA8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}>
                  <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <path d="M19 9l-7 7-7-7" />
                  </motion.svg>
                  {isOpen ? "Less details" : "View details"}
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={VP}
          style={{ textAlign: "center", marginTop: "clamp(28px, 3vw, 40px)", fontSize: "clamp(17px, 1.5vw, 21px)", color: "#64748B", lineHeight: 1.6 }}>
          ....and many more, depending on <span style={{ color: "#F1F5F9", fontWeight: 600 }}>YOUR</span> needs.
        </motion.p>
      </div>
    </section>
  );
}
