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
    <span ref={ref} style={{ fontFamily: "var(--font-worksans), Space Grotesk, monospace", fontVariantNumeric: "tabular-nums" }}>
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
    { target: 250, suffix: "+", label: "Audited Processing Plants" },
    { target: 30, suffix: "+", label: "Active Global Markets" },
    { target: 24, suffix: "h", label: "Sourcing Response Time" },
    { target: 100, suffix: "%", label: "Production Authority Retained" },
  ];

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "clamp(100px, 12vh, 140px)",
        paddingBottom: "clamp(40px, 6vh, 60px)",
        backgroundColor: "#F5F4F0", // Kept original cream theme
      }}
    >
      <div
        style={{
          width: "92%",
          maxWidth: "1200px", // Reduced from 1320px for a tighter, more readable block
          margin: "0 auto",
        }}
      >
        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(2rem, 4.5vw, 4.2rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#0F172A",
            maxWidth: "960px",
            marginBottom: "20px",
          }}
        >
          Connecting Indian manufacturers with vetted buyers through{" "}
          <span style={{ color: "#0F172A" }}>structured joint ventures</span>.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#475569",
            maxWidth: "680px",
            marginBottom: "48px",
          }}
        >
          Not a trading middleman. An execution and growth partner handling international sales,
          compliance, documentation, and trade logistics while manufacturers retain full production authority.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
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
              gap: "10px",
              height: "48px",
              padding: "0 28px",
              borderRadius: "9999px",
              border: "1px solid #0F172A",
              background: "#0F172A",
              color: "#FFFFFF",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1E293B";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0F172A";
            }}
          >
            I'm an Indian Manufacturer
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              gap: "10px",
              height: "48px",
              padding: "0 28px",
              borderRadius: "9999px",
              border: "1px solid rgba(15, 23, 42, 0.2)",
              background: "transparent",
              color: "#0F172A",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.05)";
              e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.2)";
            }}
          >
            I'm an International Buyer
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </motion.div>

        {/* STAT CARDS ROW - Clean, flat, border-driven, no heavy drop shadows */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="stat-cards-container"
        >
          <style dangerouslySetInnerHTML={{__html: `
            .stat-cards-container {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 16px;
            }
            @media (max-width: 768px) {
              .stat-cards-container {
                display: flex;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                scrollbar-width: none; /* Firefox */
                -ms-overflow-style: none;  /* IE and Edge */
                padding-bottom: 8px; /* For scroll area */
              }
              .stat-cards-container::-webkit-scrollbar {
                display: none;
              }
              .stat-card {
                min-width: 220px;
                scroll-snap-align: start;
              }
            }
          `}} />
          
          {statCards.map((c, i) => (
            <div
              key={i}
              className="stat-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "24px 20px",
                border: "1px solid rgba(0, 0, 0, 0.08)", // Crisp thin border, no shadow
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(1.75rem, 2.5vw, 2.2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#0F172A",
                  lineHeight: 1,
                  marginBottom: "8px",
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
