"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeUp, slideL, slideR, stagger, VP } from "@/lib/motion-variants";

/* ─────────────── Animated counter hook ─────────────── */
function useCountUp(target: number, inView: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return val;
}

/* ─────────────── SVG Icons (no emoji) ─────────────── */
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
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconZap = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconChart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const IconArrowRight = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const StockGraph = ({ trend }: { trend: "up" | "down" }) => {
  const isDown = trend === "down";
  const color = isDown ? "rgba(239, 68, 68, 0.85)" : "rgba(34, 197, 94, 0.85)";

  const linePath = isDown
    ? "M 10,30 L 40,50 L 70,35 L 100,80 L 130,60 L 170,120"
    : "M 10,120 L 40,100 L 70,115 L 100,70 L 130,90 L 170,30";
    
  const arrowHead = isDown
    ? "M 145,120 L 170,120 L 170,95" 
    : "M 145,30 L 170,30 L 170,55";

  return (
    <svg
      viewBox="0 0 200 150"
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "-20px",
        width: "min(380px, 65%)",
        height: "auto",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.45,
        filter: "drop-shadow(0px 0px 8px rgba(0,0,0,0.5))",
      }}
    >
      {/* Background grid */}
      <g opacity="0.25" stroke={color} strokeWidth="1" strokeDasharray="4 4">
         <line x1="10" y1="30" x2="190" y2="30" />
         <line x1="10" y1="75" x2="190" y2="75" />
         <line x1="10" y1="120" x2="190" y2="120" />
         <line x1="40" y1="10" x2="40" y2="140" />
         <line x1="100" y1="10" x2="100" y2="140" />
         <line x1="170" y1="10" x2="170" y2="140" />
      </g>

      {/* The main line curve */}
      <motion.path
        d={linePath}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: "easeInOut", delay: 0.1 }}
      />
      
      {/* The arrow head (appears near end of animation) */}
      <motion.path
        d={arrowHead}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          pathLength: { duration: 0.5, ease: "easeOut", delay: 2.1 },
          opacity: { duration: 0.01, delay: 2.1 }
        }}
      />
      
      {/* Gradient fill below the line */}
      <motion.path
        d={isDown 
          ? "M 10,30 L 40,50 L 70,35 L 100,80 L 130,60 L 170,120 L 170,150 L 10,150 Z" 
          : "M 10,120 L 40,100 L 70,115 L 100,70 L 130,90 L 170,30 L 170,150 L 10,150 Z"}
        fill={`url(#gradient-${trend})`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: "easeInOut", delay: 0.1 }}
      />

      <defs>
        <linearGradient id={`gradient-${trend}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

/* ─────────────── Data ─────────────── */
const beforeItems = [
  { icon: IconClock,  text: "6–8 hrs/day on manual coordination",       highlight: "6–8 hrs/day" },
  { icon: IconAlert,  text: "Workflows depend on people, not systems",   highlight: "people, not systems" },
  { icon: IconLink,   text: "Errors from fragmented tool stacks",        highlight: "fragmented tool stacks" },
  { icon: IconEye,    text: "Zero visibility until something breaks",    highlight: "Zero visibility" },
];

const afterItems = [
  { icon: IconClock,  text: "Save 3–5 hrs daily across operations",     highlight: "3–5 hrs daily" },
  { icon: IconZap,    text: "RFQ & shipment processing on autopilot",    highlight: "autopilot" },
  { icon: IconCheck,  text: "Systems run end-to-end, minimal oversight", highlight: "minimal oversight" },
  { icon: IconChart,  text: "Live dashboards, instant visibility",       highlight: "Live dashboards" },
];

const beforeStats = [
  { label: "hrs wasted/day", value: 7 },
  { label: "manual steps", value: 12 },
];
const afterStats = [
  { label: "hrs saved/day", value: 4, prefix: "+" },
  { label: "faster turnaround", value: 40, suffix: "%" },
];

/* ─────────────── Stat badge ─────────────── */
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
      <span style={{ fontSize: "clamp(10px, 0.9vw, 12px)", color: color, opacity: 0.65, marginTop: "4px", textAlign: "center", fontWeight: 500 }}>
        {item.label}
      </span>
    </div>
  );
}

/* ─────────────── Main component ─────────────── */
export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="before-after" style={{ padding: "clamp(80px, 12vw, 140px) 0", position: "relative" }}>
      <div style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>

        {/* ── Section header ── */}
        <motion.div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 72px)" }}
          initial="hidden" whileInView="show" viewport={VP} variants={stagger}>
          <motion.p variants={fadeUp} style={{
            fontSize: "clamp(0.75rem, 1vw, 0.875rem)", fontWeight: 600, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#6B8FA8", marginBottom: "16px",
          }}>
            The Transformation
          </motion.p>
          <motion.h2 variants={fadeUp} style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 0.95,
            letterSpacing: "-0.03em", color: "#F1F5F9",
          }}>
            Before<br />
            <span style={{ fontWeight: 300, fontStyle: "italic" }}>vs After</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{
            marginTop: "clamp(16px, 2vw, 24px)", fontSize: "clamp(15px, 1.3vw, 18px)",
            color: "#64748B", maxWidth: "480px", margin: "clamp(16px, 2vw, 24px) auto 0", lineHeight: 1.6,
          }}>
            Logistics teams using StrideShip reclaim 2–3 hours every single day.
          </motion.p>
        </motion.div>

        {/* ── Two cards + arrow ── */}
        <div ref={ref} style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "clamp(16px, 2vw, 24px)",
          alignItems: "stretch",
        }}>

          {/* ── BEFORE card ── */}
          <motion.div variants={slideL} initial="hidden" whileInView="show" viewport={VP}
            style={{
              position: "relative",
              borderRadius: "24px",
              border: "1px solid rgba(148,163,184,0.2)",
              background: "linear-gradient(135deg, rgba(148,163,184,0.06) 0%, rgba(10,15,30,0.55) 60%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 10px 40px -10px rgba(0,0,0,0.6), 0 0 60px -20px rgba(148,163,184,0.12), inset 0 1px 0 0 rgba(148,163,184,0.08)",
              padding: "clamp(32px, 4vw, 52px)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}>
            {/* Animated Stock Graph */}
            <StockGraph trend="down" />

            {/* Foreground Content Wrapper */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flexGrow: 1 }}>
              {/* Header */}
              <div style={{ marginBottom: "clamp(24px, 3vw, 36px)" }}>
              <span style={{
                display: "inline-block", fontSize: "clamp(10px, 0.85vw, 12px)", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8",
                background: "rgba(148,163,184,0.1)", borderRadius: "6px", padding: "4px 10px",
                marginBottom: "14px",
              }}>Before StrideShip</span>
              <h3 style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)", fontWeight: 800,
                color: "#F1F5F9", letterSpacing: "-0.02em", lineHeight: 1.2,
              }}>
                Manual. Slow.<br />
                <span style={{ fontWeight: 300, fontStyle: "italic", color: "#94A3B8" }}>Always reactive.</span>
              </h3>
            </div>

            {/* Stat badges */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "clamp(24px, 3vw, 32px)", flexWrap: "wrap" }}>
              {beforeStats.map((s) => (
                <StatBadge key={s.label} item={s} inView={inView} color="#94A3B8" bg="rgba(148,163,184,0.08)" />
              ))}
            </div>

            {/* Bullets */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {beforeItems.map(({ icon: Icon, text, highlight }, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "12px",
                  marginBottom: i < beforeItems.length - 1 ? "clamp(14px, 1.5vw, 20px)" : 0,
                }}>
                  <span style={{
                    marginTop: "2px", color: "rgba(148,163,184,0.6)", flexShrink: 0,
                    width: "20px", height: "20px",
                  }}>
                    <Icon />
                  </span>
                  <span style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#64748B", lineHeight: 1.65 }}>
                    {text.split(highlight).flatMap((part, pi, arr) =>
                      pi < arr.length - 1
                        ? [part, <span key={pi} style={{ color: "#94A3B8", fontWeight: 600 }}>{highlight}</span>]
                        : [part]
                    )}
                  </span>
                </li>
              ))}
            </ul>
            </div>
          </motion.div>

          {/* ── Arrow divider ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
              color: "#334155",
            }}>
            <div style={{
              width: "1px", height: "40px",
              background: "linear-gradient(to bottom, transparent, rgba(107,143,168,0.3))",
            }} />
            <div style={{
              width: "42px", height: "42px", borderRadius: "50%",
              border: "1px solid rgba(107,143,168,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#6B8FA8",
              background: "rgba(107,143,168,0.05)",
            }}>
              <IconArrowRight />
            </div>
            <div style={{
              width: "1px", height: "40px",
              background: "linear-gradient(to bottom, rgba(107,143,168,0.3), transparent)",
            }} />
          </motion.div>

          {/* ── AFTER card ── */}
          <motion.div variants={slideR} initial="hidden" whileInView="show" viewport={VP}
            style={{
              position: "relative",
              borderRadius: "24px",
              border: "1px solid rgba(148,163,184,0.2)",
              background: "linear-gradient(135deg, rgba(148,163,184,0.06) 0%, rgba(10,15,30,0.55) 60%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 10px 40px -10px rgba(0,0,0,0.6), 0 0 60px -20px rgba(148,163,184,0.12), inset 0 1px 0 0 rgba(148,163,184,0.08)",
              padding: "clamp(32px, 4vw, 52px)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}>
            {/* Animated Stock Graph */}
            <StockGraph trend="up" />

            {/* Foreground Content Wrapper */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flexGrow: 1 }}>
              {/* Header */}
              <div style={{ marginBottom: "clamp(24px, 3vw, 36px)" }}>
              <span style={{
                display: "inline-block", fontSize: "clamp(10px, 0.85vw, 12px)", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8",
                background: "rgba(148,163,184,0.1)", borderRadius: "6px", padding: "4px 10px",
                marginBottom: "14px",
              }}>After StrideShip</span>
              <h3 style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)", fontWeight: 800,
                color: "#F1F5F9", letterSpacing: "-0.02em", lineHeight: 1.2,
              }}>
                Automated. Fast.<br />
                <span style={{ fontWeight: 300, fontStyle: "italic", color: "#94A3B8" }}>Always in control.</span>
              </h3>
            </div>

            {/* Stat badges */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "clamp(24px, 3vw, 32px)", flexWrap: "wrap" }}>
              {afterStats.map((s) => (
                <StatBadge key={s.label} item={s} inView={inView} color="#94A3B8" bg="rgba(148,163,184,0.09)" />
              ))}
            </div>

            {/* Bullets */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {afterItems.map(({ icon: Icon, text, highlight }, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "12px",
                  marginBottom: i < afterItems.length - 1 ? "clamp(14px, 1.5vw, 20px)" : 0,
                }}>
                  <span style={{
                    marginTop: "2px", color: "#94A3B8", flexShrink: 0,
                    width: "20px", height: "20px",
                  }}>
                    <Icon />
                  </span>
                  <span style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#94A3B8", lineHeight: 1.65 }}>
                    {text.split(highlight).flatMap((part, pi, arr) =>
                      pi < arr.length - 1
                        ? [part, <span key={pi} style={{ color: "#F1F5F9", fontWeight: 700 }}>{highlight}</span>]
                        : [part]
                    )}
                  </span>
                </li>
              ))}
            </ul>
            </div>
          </motion.div>
        </div>

        {/* ── Closing quote ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP}
          style={{ textAlign: "center", marginTop: "clamp(64px, 7vw, 96px)" }}>
          <div style={{
            width: "60px", height: "1px",
            background: "linear-gradient(to right, transparent, rgba(107,143,168,0.4), transparent)",
            margin: "0 auto clamp(24px, 3vw, 36px)",
          }} />
          <p style={{
            fontSize: "clamp(1rem, 1.6vw, 1.25rem)", color: "#6B8FA8", fontStyle: "italic",
            fontWeight: 400, maxWidth: "640px", margin: "0 auto", lineHeight: 1.7,
            letterSpacing: "-0.01em",
          }}>
            &ldquo;We don&rsquo;t aim to remove people.&nbsp;
            <span style={{ color: "#94A3B8", fontWeight: 600 }}>We remove the friction slowing them down.</span>&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
