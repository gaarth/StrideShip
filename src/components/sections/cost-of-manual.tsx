"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { fadeUp, stagger, VP } from "@/lib/motion-variants";

function Counter({ from, to, prefix = "", suffix = "" }: { from: number, to: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const count = useMotionValue(from);

  const rounded = useTransform(count, (latest) => {
    const isDone = Math.round(latest) >= to;
    return prefix + Math.round(latest).toLocaleString('en-IN') + (isDone ? suffix : "");
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      animate(count, to, { duration: 2.5, ease: [0.16, 1, 0.3, 1] });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trigger();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, to]);

  return (
    <span ref={ref} style={{ display: "inline-block", minHeight: "1em" }}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
}

const stats = [
  {
    isCurrency: true,
    from: 0,
    to: 50000,
    prefix: "₹",
    suffix: "+",
    value: "₹50,000+",
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
    context: "while paying shipping lines upfront",
    source: "The cash flow trap",
  },
];

export function CostOfManual() {
  return (
    <section id="cost-of-manual" style={{ padding: "clamp(33px, 3.91vw, 49px) 0", position: "relative" }}>
      <div className="section-container" style={{ width: "92%", margin: "0 auto", padding: "0 clamp(21px, 3.91vw, 49px)" }}>
        <h2
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          The cost of manual logistics operations
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VP}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: "clamp(18px, 2.346vw, 22px)",
            position: "relative",
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              style={{
                backgroundColor: "#FFFFFF", // Pure bright white card matching Raft design schema
                borderRadius: "20px",
                padding: "36px 28px",
                boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 30px -4px rgba(0, 0, 0, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)";
              }}
            >
              <div>
                {/* Massive Numeral in Raft crisp dark style */}
                <div style={{
                  fontSize: "clamp(2.008rem, 2.742vw, 2.539rem)",
                  fontWeight: 700,
                  color: "#0F172A",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  marginBottom: "clamp(8.925px, 0.938vw, 11.5px)",
                  fontFamily: "var(--font-worksans), system-ui, sans-serif",
                }}>
                  {stat.isCurrency ? (
                    <Counter from={stat.from!} to={stat.to!} prefix={stat.prefix} suffix={stat.suffix} />
                  ) : (
                    stat.value
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{
                    fontSize: "clamp(15px, 1.012vw, 16px)",
                    fontWeight: 700,
                    color: "#0F172A",
                    letterSpacing: "-0.01em"
                  }}>
                    {stat.label}
                  </span>

                  <p style={{
                    fontSize: "clamp(13px, 0.865vw, 14px)",
                    color: "#475569",
                    lineHeight: 1.5,
                  }}>
                    {stat.context}
                  </p>
                </div>
              </div>

              <span style={{
                marginTop: "20px",
                fontSize: "clamp(9.45px, 0.708vw, 10.35px)",
                color: "#64748B",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#0F172A" }} />
                {stat.source}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
