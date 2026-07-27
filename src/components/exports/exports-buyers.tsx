"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES, TESTIMONIALS } from "@/lib/exports-data";

interface ExportsBuyersProps {
  initialCategory?: string;
}

export function ExportsBuyers({ initialCategory }: ExportsBuyersProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    country: "",
    productsOfInterest: initialCategory || PRODUCT_CATEGORIES[0]?.title || "",
    orderVolume: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, productsOfInterest: initialCategory }));
    }
  }, [initialCategory]);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const recipients = "siddhantvaidya70@gmail.com,gaarth.godbole07@gmail.com";
    const subject = `[StrideShip Exports] Buyer Sourcing Inquiry - ${formData.companyName}`;
    const bodyText = `New International Buyer Sourcing Inquiry for StrideShip Exports:

• Company Name: ${formData.companyName}
• Country / Region: ${formData.country}
• Product(s) of Interest: ${formData.productsOfInterest}
• Estimated Order Volume / Frequency: ${formData.orderVolume || "Not specified"}
• Contact Person: ${formData.contactPerson}
• Work Email: ${formData.email}
• Phone / WhatsApp: ${formData.phone || "Not specified"}

Submitted via StrideShip Exports (/exports)`;

    const mailtoUrl = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

    try {
      const res = await fetch("/api/exports/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryType: "buyer",
          recipients: ["siddhantvaidya70@gmail.com", "gaarth.godbole07@gmail.com"],
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        window.location.href = mailtoUrl;
      } else {
        setErrorMsg(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    } finally {
      setLoading(false);
    }
  };

  const buyerTestimonial = TESTIMONIALS.find((t) => t.type === "buyer");

  return (
    <section
      id="for-buyers"
      style={{
        padding: "clamp(80px, 10vh, 120px) 0",
        backgroundColor: "#F5F4F0",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1140px",
          margin: "0 auto",
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: "clamp(40px, 6vh, 60px)" }}>
          <span
            style={{
              fontFamily: "Space Grotesk, monospace",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#2563EB",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "12px",
            }}
          >
            FOR INTERNATIONAL BUYERS
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              maxWidth: "840px",
            }}
          >
            Direct Indian Manufacturer Sourcing with Institutional Quality & Logistics Execution
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              color: "#475569",
              lineHeight: 1.6,
              marginTop: "12px",
              maxWidth: "740px",
            }}
          >
            Bypass broker markup layers. We connect you directly with pre-audited Indian factories, manage single-point communication, and guarantee transparent EXIM documentation.
          </p>
        </div>

        {/* Split Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Left Column: Inquiry Form (Pure Bright White Box) */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              padding: "36px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "#0F172A",
                marginBottom: "8px",
                letterSpacing: "-0.01em",
              }}
            >
              Request Sourcing Specification & Quote
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "28px", lineHeight: 1.5 }}>
              Receive direct factory pricing breakdowns, Certificate of Analysis (COA) specs, and trial order terms.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  backgroundColor: "#F0FDF4",
                  border: "1px solid #BBF7D0",
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>&check;</div>
                <h4 style={{ color: "#166534", fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>
                  Sourcing Inquiry Received
                </h4>
                <p style={{ color: "#15803D", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "16px" }}>
                  An email draft addressed to <strong>siddhantvaidya70@gmail.com</strong> &amp; <strong>gaarth.godbole07@gmail.com</strong> has been opened with your sourcing request details.
                </p>
                <a
                  href={`mailto:siddhantvaidya70@gmail.com,gaarth.godbole07@gmail.com?subject=${encodeURIComponent(`[StrideShip Exports] Buyer Sourcing Inquiry - ${formData.companyName}`)}&body=${encodeURIComponent(`New International Buyer Sourcing Inquiry for StrideShip Exports:

• Company Name: ${formData.companyName}
• Country / Region: ${formData.country}
• Product(s) of Interest: ${formData.productsOfInterest}
• Estimated Order Volume / Frequency: ${formData.orderVolume || "Not specified"}
• Contact Person: ${formData.contactPerson}
• Work Email: ${formData.email}
• Phone / WhatsApp: ${formData.phone || "Not specified"}

Submitted via StrideShip Exports (/exports)`)}`}
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    borderRadius: "9999px",
                    backgroundColor: "#166534",
                    color: "#FFFFFF",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Click Here to Open / Send Email &rarr;
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {errorMsg && (
                  <div
                    style={{
                      backgroundColor: "#FEF2F2",
                      border: "1px solid #FCA5A5",
                      color: "#991B1B",
                      padding: "12px",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                {/* Company & Country */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "14px" }}>
                  <div>
                    <label
                      htmlFor="buyer-company"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontFamily: "Space Grotesk, monospace",
                        fontWeight: 600,
                        color: "#475569",
                        marginBottom: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      Company Name *
                    </label>
                    <input
                      id="buyer-company"
                      type="text"
                      required
                      placeholder="e.g. Apex Botanical LLC"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        border: "1px solid #E2E8F0",
                        backgroundColor: "#F8FAFC",
                        color: "#0F172A",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="buyer-country"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontFamily: "Space Grotesk, monospace",
                        fontWeight: 600,
                        color: "#475569",
                        marginBottom: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      Country / Region *
                    </label>
                    <input
                      id="buyer-country"
                      type="text"
                      required
                      placeholder="e.g. Germany / USA"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        border: "1px solid #E2E8F0",
                        backgroundColor: "#F8FAFC",
                        color: "#0F172A",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Product of Interest */}
                <div>
                  <label
                    htmlFor="buyer-products"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontFamily: "Space Grotesk, monospace",
                      fontWeight: 600,
                      color: "#475569",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    Product(s) of Interest *
                  </label>
                  <input
                    id="buyer-products"
                    type="text"
                    required
                    placeholder="e.g. Organic Turmeric, Lemongrass Oil"
                    value={formData.productsOfInterest}
                    onChange={(e) => setFormData({ ...formData, productsOfInterest: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      border: "1px solid #E2E8F0",
                      backgroundColor: "#F8FAFC",
                      color: "#0F172A",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Order Volume */}
                <div>
                  <label
                    htmlFor="buyer-volume"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontFamily: "Space Grotesk, monospace",
                      fontWeight: 600,
                      color: "#475569",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    Estimated Volume / Frequency
                  </label>
                  <input
                    id="buyer-volume"
                    type="text"
                    placeholder="e.g. 1x 20ft FCL quarterly"
                    value={formData.orderVolume}
                    onChange={(e) => setFormData({ ...formData, orderVolume: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      border: "1px solid #E2E8F0",
                      backgroundColor: "#F8FAFC",
                      color: "#0F172A",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Person & Email */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "14px" }}>
                  <div>
                    <label
                      htmlFor="buyer-person"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontFamily: "Space Grotesk, monospace",
                        fontWeight: 600,
                        color: "#475569",
                        marginBottom: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="buyer-person"
                      type="text"
                      required
                      placeholder="Contact Name"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        border: "1px solid #E2E8F0",
                        backgroundColor: "#F8FAFC",
                        color: "#0F172A",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="buyer-email"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontFamily: "Space Grotesk, monospace",
                        fontWeight: 600,
                        color: "#475569",
                        marginBottom: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      Work Email *
                    </label>
                    <input
                      id="buyer-email"
                      type="email"
                      required
                      placeholder="sourcing@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        border: "1px solid #E2E8F0",
                        backgroundColor: "#F8FAFC",
                        color: "#0F172A",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="buyer-phone"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontFamily: "Space Grotesk, monospace",
                      fontWeight: 600,
                      color: "#475569",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    id="buyer-phone"
                    type="tel"
                    placeholder="+1 555 019 2831"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      border: "1px solid #E2E8F0",
                      backgroundColor: "#F8FAFC",
                      color: "#0F172A",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Submit button (Transparent Glass Pill) */}
                <button
                  type="submit"
                  disabled={loading}
                  className="navbar-glass-hover"
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255, 255, 255, 0.28)",
                    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(10, 15, 30, 0.4) 100%)",
                    backdropFilter: "blur(20px) saturate(1.8)",
                    WebkitBackdropFilter: "blur(20px) saturate(1.8)",
                    color: "#FFFFFF",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.35)",
                    textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                    marginTop: "8px",
                  }}
                >
                  {loading ? "Sending Inquiry..." : "Submit Buyer Sourcing Inquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Value Props & Raft Testimonial Card */}
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#0F172A",
                marginBottom: "24px",
                letterSpacing: "-0.01em",
              }}
            >
              The StrideShip Buyer Commitment
            </h3>

            {/* Buyer Value Props */}
            <div style={{ display: "grid", gap: "20px", marginBottom: "36px" }}>
              {[
                {
                  title: "Consistent Supply & Pre-Audited Quality",
                  desc: "Every manufacturer in our portfolio undergoes rigorous plant audits, raw material testing, and ISO/HACCP compliance verification.",
                },
                {
                  title: "Single Point of Contact for All EXIM Steps",
                  desc: "One dedicated trade manager handles contract negotiations, sample dispatch, phytosanitary certs, customs filing, and sea/air freight booking.",
                },
                {
                  title: "Sample & Trial Order Friendly",
                  desc: "We encourage initial air-freight trial orders and batch sample testing before committing to full FCL container commitments.",
                },
                {
                  title: "Fast Response & Audit Transparency",
                  desc: "Guaranteed 24-hour response turnaround on product inquiries, technical datasheets (TDS), and Certificate of Analysis (COA) requests.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "#EFF6FF",
                      border: "1px solid #BFDBFE",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563EB",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    &#10003;
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F172A", marginBottom: "4px" }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Gateway Box (Pure Bright White Card) */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "24px 28px",
                boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                marginBottom: "32px",
              }}
            >
              <span
                style={{
                  fontFamily: "Space Grotesk, monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#64748B",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                3-STAGE QUALITY & COMPLIANCE GATEWAY
              </span>

              <div style={{ display: "grid", gap: "12px" }}>
                {[
                  { step: "Stage 1", text: "Raw material farm/origin testing (Pesticide, Heavy Metals)" },
                  { step: "Stage 2", text: "In-line production monitoring & Moisture/Mesh size control" },
                  { step: "Stage 3", text: "Pre-shipment port audit & APEDA / Spices Board COA sign-off" },
                ].map((s) => (
                  <div key={s.step} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <span
                      style={{
                        fontFamily: "Space Grotesk, monospace",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#2563EB",
                        backgroundColor: "#EFF6FF",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.step}
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "#334155", fontWeight: 500 }}>{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Raft-Style Testimonial Card */}
            {buyerTestimonial && (
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "220px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "Space Grotesk, monospace",
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      color: "#0F172A",
                      letterSpacing: "-0.01em",
                      marginBottom: "16px",
                      textTransform: "uppercase",
                    }}
                  >
                    {buyerTestimonial.company}
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#334155",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    "{buyerTestimonial.quote}"
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0F172A" }}>
                    {buyerTestimonial.author}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#64748B" }}>
                    {buyerTestimonial.title} &bull; {buyerTestimonial.countryOrCity}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
