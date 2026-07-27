"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeUp, slideL, slideR, stagger, VP } from "@/lib/motion-variants";

/* ─────────────── Animated counter hook ─────────────── */
function useCountUp(target: number, inView: boolean, duration = 1400) {
  const [val, setVal] = useState(target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    if (!inView) {
      setVal(0);
      return;
    }

    setVal(0);
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, target, duration]);

  return val;
}

/* ─────────────── SVG Icons ─────────────── */
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconAlert = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconLink = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const IconEye = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const IconZap = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const IconChart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

/* ─────────────── Stock graph ─────────────── */
function StockGraph({ trend }: { trend: "up" | "down" }) {
  const points = trend === "down"
    ? "M 10 30 Q 80 40 140 90 T 300 130 T 450 160 T 600 180"
    : "M 10 170 Q 100 150 200 110 T 350 70 T 500 40 T 600 20";

  const strokeColor = trend === "down" ? "#EF4444" : "#10B981";
  const gradId = trend === "down" ? "gradDown" : "gradUp";

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity: 0.15 }}>
      <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d={`${points} L 600 200 L 10 200 Z`} fill={`url(#${gradId})`} />
        <path d={points} fill="none" stroke={strokeColor} strokeWidth="3" />
      </svg>
    </div>
  );
}

const beforeItems = [
  { icon: IconClock,  text: "6–8 hrs/day on manual coordination", highlight: "6–8 hrs/day" },
  { icon: IconAlert,  text: "Workflows depend on people, not systems", highlight: "people, not systems" },
  { icon: IconLink,   text: "Errors from fragmented tool stacks", highlight: "fragmented tool stacks" },
  { icon: IconEye,    text: "Zero visibility until something breaks", highlight: "Zero visibility" },
];

const afterItems = [
  { icon: IconClock,  text: "Save 3–5 hrs daily across operations", highlight: "3–5 hrs daily" },
  { icon: IconZap,    text: "RFQ & shipment processing on autopilot", highlight: "autopilot" },
  { icon: IconCheck,  text: "Systems run end-to-end, minimal oversight", highlight: "minimal oversight" },
  { icon: IconChart,  text: "Live dashboards, instant visibility", highlight: "Live dashboards" },
];

const beforeStats = [
  { label: "hrs wasted/day", value: 7 },
  { label: "manual steps", value: 12 },
];
const afterStats = [
  { label: "hrs saved/day", value: 4, prefix: "+" },
  { label: "faster turnaround", value: 40, suffix: "%" },
];

function StatBadge({
  item, inView, color, bg,
}: {
  item: { label: string; value: number; prefix?: string; suffix?: string };
  inView: boolean;
  color: string;
  bg: string;
}) {
  const count = useCountUp(item.value, inView);
  return (
    <div style={{
      background: bg,
      borderRadius: "10px",
      padding: "10px 16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: "90px",
    }}>
      <span style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)", fontWeight: 800, color, letterSpacing: "-0.02em", lineHeight: 1 }}>
        {item.prefix}{count}{item.suffix}
      </span>
      <span style={{ fontSize: "clamp(10px, 0.9vw, 12px)", color, opacity: 0.8, marginTop: "4px", textAlign: "center", fontWeight: 600 }}>
        {item.label}
      </span>
    </div>
  );
}

export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="before-after" style={{ padding: "clamp(64px, 8vw, 96px) 0", position: "relative" }}>
      <div className="ba-wrapper" style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div style={{ textAlign: "center", marginBottom: "clamp(28px, 3.5vw, 42px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>

          <motion.h2 variants={fadeUp} style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 0.95,
            letterSpacing: "-0.03em", color: "#0F172A",
          }}>
            Before{" "}<br />
            <span style={{ fontWeight: 300, fontStyle: "italic", color: "#64748B" }}>vs After</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{
            marginTop: "clamp(16px, 2vw, 24px)", fontSize: "clamp(15px, 1.3vw, 18px)",
            color: "#475569", maxWidth: "480px", margin: "clamp(16px, 2vw, 24px) auto 0", lineHeight: 1.6,
          }}>
            Logistics teams using StrideShip reclaim 2–3 hours every single day.
          </motion.p>
        </motion.div>

        <div ref={ref} className="ba-grid" style={{ gap: "clamp(16px, 2vw, 24px)" }}>
          {/* BEFORE card (Bright White Raft Box) */}
          <motion.div variants={slideL} initial="hidden" whileInView="show" viewport={VP}
            style={{
              position: "relative",
              borderRadius: "24px",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
              padding: "clamp(32px, 4vw, 52px)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}>
            <StockGraph trend="down" />

            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <div style={{ marginBottom: "clamp(14px, 1.8vw, 22px)" }}>
                <span style={{
                  display: "inline-block", fontSize: "clamp(10px, 0.85vw, 12px)", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase", color: "#DC2626",
                  background: "#FEF2F2", borderRadius: "6px", padding: "4px 10px",
                  marginBottom: "14px",
                  border: "1px solid #FCA5A5",
                }}>Before StrideShip</span>
                <h3 style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)", fontWeight: 800,
                  color: "#0F172A", letterSpacing: "-0.02em", lineHeight: 1.2,
                }}>
                  Manual. Slow.{" "}<br />
                  <span style={{ fontWeight: 300, fontStyle: "italic", color: "#64748B" }}>Always reactive.</span>
                </h3>
              </div>

              <div style={{ display: "flex", gap: "10px", marginBottom: "clamp(14px, 1.8vw, 20px)", flexWrap: "wrap" }}>
                {beforeStats.map((s) => (
                  <StatBadge key={s.label} item={s} inView={inView} color="#DC2626" bg="#FEF2F2" />
                ))}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {beforeItems.map(({ icon: Icon, text, highlight }, i) => (
                  <li key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: "12px",
                    marginBottom: i < beforeItems.length - 1 ? "clamp(14px, 1.5vw, 20px)" : 0,
                  }}>
                    <span style={{ marginTop: "2px", color: "#DC2626", flexShrink: 0, width: "20px", height: "20px" }}>
                      <Icon />
                    </span>
                    <span style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#475569", lineHeight: 1.65 }}>
                      {text.split(highlight).flatMap((part, pi, arr) =>
                        pi < arr.length - 1
                          ? [part, <span key={pi} style={{ color: "#0F172A", fontWeight: 700 }}>{highlight}</span>]
                          : [part]
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Arrow divider */}
          <motion.div
            className="ba-arrow"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ color: "#64748B" }}>
            <div className="ba-line-v" style={{
              width: "1px", height: "40px",
              background: "linear-gradient(to bottom, transparent, #CBD5E1)",
            }} />
            <div style={{
              width: "42px", height: "42px", borderRadius: "50%",
              border: "1px solid #CBD5E1",
              backgroundColor: "#FFFFFF",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#2563EB",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <div className="ba-line-v" style={{
              width: "1px", height: "40px",
              background: "linear-gradient(to bottom, #CBD5E1, transparent)",
            }} />
          </motion.div>

          {/* AFTER card (Bright White Raft Box) */}
          <motion.div variants={slideR} initial="hidden" whileInView="show" viewport={VP}
            style={{
              position: "relative",
              borderRadius: "24px",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 8px 30px rgba(37, 99, 235, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)",
              padding: "clamp(32px, 4vw, 52px)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}>
            <StockGraph trend="up" />

            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <div style={{ marginBottom: "clamp(14px, 1.8vw, 22px)" }}>
                <span style={{
                  display: "inline-block", fontSize: "clamp(10px, 0.85vw, 12px)", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase", color: "#166534",
                  background: "#F0FDF4", borderRadius: "6px", padding: "4px 10px",
                  marginBottom: "14px",
                  border: "1px solid #BBF7D0",
                }}>With StrideShip</span>
                <h3 style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)", fontWeight: 800,
                  color: "#0F172A", letterSpacing: "-0.02em", lineHeight: 1.2,
                }}>
                  Automated. Fast.{" "}<br />
                  <span style={{ fontWeight: 300, fontStyle: "italic", color: "#2563EB" }}>Always in control.</span>
                </h3>
              </div>

              <div style={{ display: "flex", gap: "10px", marginBottom: "clamp(14px, 1.8vw, 20px)", flexWrap: "wrap" }}>
                {afterStats.map((s) => (
                  <StatBadge key={s.label} item={s} inView={inView} color="#166534" bg="#F0FDF4" />
                ))}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {afterItems.map(({ icon: Icon, text, highlight }, i) => (
                  <li key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: "12px",
                    marginBottom: i < afterItems.length - 1 ? "clamp(14px, 1.5vw, 20px)" : 0,
                  }}>
                    <span style={{ marginTop: "2px", color: "#166534", flexShrink: 0, width: "20px", height: "20px" }}>
                      <Icon />
                    </span>
                    <span style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#334155", lineHeight: 1.65 }}>
                      {text.split(highlight).flatMap((part, pi, arr) =>
                        pi < arr.length - 1
                          ? [part, <span key={pi} style={{ color: "#0F172A", fontWeight: 700 }}>{highlight}</span>]
                          : [part]
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
