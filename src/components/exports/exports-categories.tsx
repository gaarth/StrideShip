"use client";

import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/lib/exports-data";

interface ExportsCategoriesProps {
  onSelectCategory?: (categoryName: string) => void;
}

export function ExportsCategories({ onSelectCategory }: ExportsCategoriesProps) {
  const handleSelect = (category: ProductCategory) => {
    if (onSelectCategory) {
      onSelectCategory(category.title);
    }
    const buyersForm = document.getElementById("for-buyers");
    if (buyersForm) {
      buyersForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="sectors"
      style={{
        padding: "clamp(80px, 10vh, 120px) 0",
        backgroundColor: "#F5F4F0",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1140px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "clamp(40px, 6vh, 60px)" }}>
          <span
            style={{
              fontFamily: "Space Grotesk, monospace",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#64748B",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "12px",
            }}
          >
            FOCUS SECTORS & CATEGORIES
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              maxWidth: "700px",
            }}
          >
            Sourcing & Export Portfolios
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              color: "#475569",
              lineHeight: 1.6,
              marginTop: "12px",
              maxWidth: "680px",
            }}
          >
            High-value Indian export sectors backed by audited processing facilities, compliant documentation, and direct farm/factory traceability.
          </p>
        </div>

        {/* Categories Grid (Pure Bright White Cards) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              style={{
                backgroundColor: "#FFFFFF", // Pure bright white card box
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 4px 24px -4px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* HS Code tag */}
                {cat.hsCodes && cat.hsCodes.length > 0 && (
                  <div
                    style={{
                      display: "inline-block",
                      fontFamily: "Space Grotesk, monospace",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "#475569",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: "#F1F5F9",
                      marginBottom: "16px",
                      border: "1px solid #E2E8F0",
                    }}
                  >
                    HS {cat.hsCodes.join(" / ")}
                  </div>
                )}

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#0F172A",
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cat.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#475569",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {cat.description}
                </p>

                {/* Why India callout */}
                <div
                  style={{
                    background: "#F8FAFC",
                    borderLeft: "3px solid #2563EB",
                    padding: "12px 14px",
                    borderRadius: "0 8px 8px 0",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Space Grotesk, monospace",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#2563EB",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    WHY INDIA ADVANTAGE
                  </span>
                  <p style={{ fontSize: "0.88rem", color: "#334155", lineHeight: 1.5 }}>
                    {cat.whyIndia}
                  </p>
                </div>
              </div>

              <div>
                {/* Target Markets */}
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontFamily: "Space Grotesk, monospace",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "#64748B",
                      display: "block",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                    }}
                  >
                    PRIMARY TARGET MARKETS
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {cat.targetMarkets.map((market) => (
                      <span
                        key={market}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "#334155",
                          background: "#F1F5F9",
                          padding: "4px 10px",
                          borderRadius: "9999px",
                          border: "1px solid #E2E8F0",
                        }}
                      >
                        {market}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleSelect(cat)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#0F172A",
                    color: "#FFFFFF",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1E293B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0F172A";
                  }}
                >
                  Inquire For This Category &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
