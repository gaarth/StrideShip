"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

// Use a highly impactful, modern typeface for the massive numbers
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"] });

function Counter({ from, to, prefix = "", suffix = "" }: { from: number, to: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  
  const rounded = useTransform(count, (latest) => {
    const isDone = Math.round(latest) >= to;
    return prefix + Math.round(latest).toLocaleString('en-IN') + (isDone ? suffix : "");
  });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2.5, ease: [0.16, 1, 0.3, 1] });
    }
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  {
    isCurrency: true,
    from: 0,
    to: 50000,
    prefix: "₹",
    suffix: "+",
    value: "₹50,000+", // Fallback
    label: "lost per container",
    context: "from a single missed customs query",
    source: "Friday at Nhava Sheva",
  },
  {
    isCurrency: false,
    value: "6-8 hours",
    label: "burned daily",
    context: "on coordination that should be automated",
    source: "Per ops team",
  },
  {
    isCurrency: false,
    value: "30-90 days",
    label: "receivables gap",
    context: "while paying lines upfront",
    source: "The cash flow trap",
  },
];

export function CostOfManual() {
  return (
    <section id="cost-of-manual" style={{ padding: "clamp(40px, 6vw, 80px) 0", position: "relative" }}>
      {/* Background ambient glow to anchor the heavy numerals */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: "1000px",
        height: "300px",
        background: "radial-gradient(ellipse at center, rgba(107,143,168,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: -1,
      }} />

      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={VP} 
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: "clamp(48px, 6vw, 80px)",
            position: "relative",
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              {/* Sleek separator line with dynamic gradient */}
              <div style={{
                height: "1px",
                width: "100%",
                background: "linear-gradient(90deg, rgba(107,143,168,0.6) 0%, rgba(255,255,255,0.05) 100%)",
                marginBottom: "clamp(24px, 3vw, 40px)",
                boxShadow: "0 0 12px rgba(107,143,168,0.4)"
              }} />

              {/* Massive Tabular Numeral applying Space Grotesk */}
              <h3 className={spaceGrotesk.className} style={{
                fontSize: "clamp(3.5rem, 5.5vw, 5rem)",
                fontWeight: 700, // Thicker weight for Space Grotesk looks fantastic
                color: "#F8FAFC",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                marginBottom: "clamp(16px, 2vw, 24px)",
                textShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}>
                {stat.isCurrency ? (
                  <Counter from={stat.from!} to={stat.to!} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{
                  fontSize: "clamp(18px, 1.5vw, 22px)",
                  fontWeight: 600,
                  color: "#6B8FA8",
                  letterSpacing: "-0.01em"
                }}>
                  {stat.label}
                </span>
                
                <p style={{
                  fontSize: "clamp(15px, 1.2vw, 17px)",
                  color: "#94A3B8",
                  lineHeight: 1.6,
                  maxWidth: "95%"
                }}>
                  {stat.context}
                </p>
                
                <span style={{
                  marginTop: "16px",
                  fontSize: "clamp(11px, 0.9vw, 12px)",
                  color: "#475569",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#475569" }} />
                  {stat.source}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
