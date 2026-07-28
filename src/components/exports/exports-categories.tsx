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
    const buyersForm = document.getElementById("inquiry-form");
    if (buyersForm) {
      buyersForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="sectors"
      style={{
        padding: "clamp(60px, 8vh, 100px) 0",
        backgroundColor: "#F5F4F0",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        style={{
          width: "92%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "clamp(32px, 5vh, 48px)" }}>
          <span
            style={{
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
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#0F172A",
              letterSpacing: "-0.04em",
              maxWidth: "600px",
            }}
          >
            Sourcing & Export Portfolios
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#475569",
              lineHeight: 1.6,
              marginTop: "16px",
              maxWidth: "600px",
            }}
          >
            High-value Indian export sectors backed by audited processing facilities, compliant documentation, and direct farm/factory traceability.
          </p>
        </div>

        {/* Asymmetric Bento Grid (Desktop) / Horizontal Scroll (Mobile) */}
        <div className="bento-grid">
          <style dangerouslySetInnerHTML={{__html: `
            .bento-grid {
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              gap: 16px;
            }
            .bento-card-large { grid-column: span 7; }
            .bento-card-small { grid-column: span 5; }
            .bento-card-medium { grid-column: span 4; }
            
            @media (max-width: 1024px) {
              .bento-card-large { grid-column: span 12; }
              .bento-card-small { grid-column: span 6; }
              .bento-card-medium { grid-column: span 6; }
            }

            @media (max-width: 768px) {
              .bento-grid {
                display: flex;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                scrollbar-width: none;
                -ms-overflow-style: none;
                padding-bottom: 16px;
                margin-right: -4vw;
                padding-right: 4vw;
              }
              .bento-grid::-webkit-scrollbar {
                display: none;
              }
              .bento-card-large, .bento-card-small, .bento-card-medium {
                min-width: 300px;
                width: 85vw;
                flex-shrink: 0;
                scroll-snap-align: start;
              }
            }
          `}} />

          {PRODUCT_CATEGORIES.map((cat, idx) => {
            // Asymmetric sizing based on index
            let cardClass = "bento-card-medium";
            if (idx === 0) cardClass = "bento-card-large";
            if (idx === 1) cardClass = "bento-card-small";
            
            return (
              <motion.div
                key={cat.id}
                className={cardClass}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "32px",
                  border: "1px solid rgba(0, 0, 0, 0.08)", // Replaced generic shadow with crisp border
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  {/* Title & HS Code Group */}
                  <div style={{ marginBottom: "20px" }}>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: "#0F172A",
                        letterSpacing: "-0.03em",
                        marginBottom: "8px",
                        lineHeight: 1.2,
                      }}
                    >
                      {cat.title}
                    </h3>
                    {cat.hsCodes && cat.hsCodes.length > 0 && (
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "#64748B",
                          fontFamily: "var(--font-worksans), monospace",
                        }}
                      >
                        HS CODES: {cat.hsCodes.join(", ")}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#475569",
                      lineHeight: 1.6,
                      marginBottom: "28px",
                      flexGrow: 1,
                    }}
                  >
                    {cat.description}
                  </p>

                  {/* Refined "Why India" Callout - Minimalist editorial style */}
                  <div
                    style={{
                      borderLeft: "2px solid #0F172A",
                      paddingLeft: "16px",
                      marginBottom: "28px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#0F172A",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      The India Advantage
                    </span>
                    <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.5 }}>
                      {cat.whyIndia}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Target Markets */}
                  <div style={{ marginBottom: "24px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {cat.targetMarkets.map((market) => (
                        <span
                          key={market}
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "#334155",
                            background: "transparent",
                            padding: "4px 12px",
                            borderRadius: "9999px",
                            border: "1px solid rgba(0,0,0,0.1)",
                          }}
                        >
                          {market}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button - Sleek, no generic shadow */}
                  <button
                    onClick={() => handleSelect(cat)}
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: "12px",
                      border: "1px solid rgba(0,0,0,0.1)",
                      backgroundColor: "transparent",
                      color: "#0F172A",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0F172A";
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#0F172A";
                    }}
                  >
                    <span>Inquire about {cat.title.split(' ')[0]}</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
