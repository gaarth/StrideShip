"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ── Smooth Counting Up Animation Component ────────────────────── */
function AnimatedCountUp({ target, suffix = "", duration = 1600 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Easing function (cubic ease-out)
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function ExportsHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const statCards = [
    { target: 250, suffix: "+", label: "Audited Indian Processing Plants" },
    { target: 30, suffix: "+", label: "Active Global Target Markets" },
    { target: 24, suffix: " Hours", label: "Technical Sourcing Response Commitment" },
    { target: 100, suffix: "%", label: "Production & Quality Control Retained" },
  ];

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "clamp(117px, 12.512vh, 140px)",
        paddingBottom: "clamp(57px, 6.256vh, 76px)",
        backgroundColor: "#F5F4F0", // Raft warm off-white
      }}
    >
      <div
        style={{
          width: "94%",
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: "clamp(2.1rem, 4.37vw, 4.83rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "#0F172A",
              maxWidth: "1120px",
              marginBottom: "24px",
            }}
          >
            Connecting Indian manufacturers with vetted international buyers through{" "}
            <span style={{ color: "#0F172A" }}>structured joint ventures</span>.
          </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: "clamp(0.937rem, 1.408vw, 1.026rem)",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#475569",
            maxWidth: "760px",
            marginBottom: "40px",
          }}
        >
          Not a trading middleman. An execution and growth partner handling international sales,
          compliance, documentation, and trade logistics while manufacturers retain full production authority.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          {/* CTA 1: Solid Dark Pill */}
          <button
            onClick={() => scrollTo("inquiry-form")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              height: "52px",
              padding: "0 32px",
              borderRadius: "9999px",
              border: "1.5px solid #0F172A",
              background: "#0F172A",
              color: "#FFFFFF",
              fontSize: "0.95rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,23,42,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            I&apos;m an Indian Manufacturer
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          {/* CTA 2: Outline Transparent Pill */}
          <button
            onClick={() => scrollTo("inquiry-form")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              height: "52px",
              padding: "0 32px",
              borderRadius: "9999px",
              border: "1.5px solid #0F172A",
              background: "transparent",
              color: "#0F172A",
              fontSize: "0.95rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,23,42,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            I&apos;m an International Buyer
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </motion.div>

        {/* STAT CARDS ROW - Counting Up & Stopping Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            transformOrigin: "top center",
          }}
        >
          {statCards.map((c, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#FFFFFF", // Pure bright white card box
                borderRadius: "16px",
                padding: "36px 28px",
                textAlign: "center",
                boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(1.964rem, 2.742vw, 2.346rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#0F172A",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                <AnimatedCountUp target={c.target} suffix={c.suffix} />
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "#64748B",
                  lineHeight: 1.4,
                  maxWidth: "180px",
                }}
              >
                {c.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
