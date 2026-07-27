"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS, PRODUCT_CATEGORIES, TESTIMONIALS } from "@/lib/exports-data";

export function ExportsManufacturers() {
  const [formData, setFormData] = useState({
    companyName: "",
    category: PRODUCT_CATEGORIES[0]?.title || "",
    exportStatus: "domestic-only",
    monthlyCapacity: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const recipients = "siddhantvaidya70@gmail.com,gaarth.godbole07@gmail.com";
    const subject = `[StrideShip Exports] Manufacturer Partnership Application - ${formData.companyName}`;
    const bodyText = `New Manufacturer Partnership Application for StrideShip Exports:

• Company / Plant Name: ${formData.companyName}
• Product Category: ${formData.category}
• Current Export Status: ${formData.exportStatus === "domestic-only" ? "Domestic Only (Looking to Export)" : "Active Exporter (Seeking Growth)"}
• Monthly Production Capacity: ${formData.monthlyCapacity || "Not specified"}
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
          inquiryType: "manufacturer",
          recipients: ["siddhantvaidya70@gmail.com", "gaarth.godbole07@gmail.com"],
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        window.location.href = mailtoUrl;
      } else {
        setErrorMsg(data.error || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    } finally {
      setLoading(false);
    }
  };

  const mfgTestimonial = TESTIMONIALS.find((t) => t.type === "manufacturer");

  return (
    <section
      id="for-manufacturers"
      style={{
        padding: "clamp(80px, 10vh, 120px) 0",
        backgroundColor: "#F5F4F0", // Raft warm cream off-white
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
            FOR INDIAN MANUFACTURERS
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
            Expand into Global Markets Without Building an Export Sales Division
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
            We co-invest execution capability, manage foreign buyer relationships, and handle all EXIM documentation while you maintain full manufacturing authority and plant operations.
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
          {/* Left Column: Value Props, Certifications & Testimonial Card */}
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
              Why Manufacturers Partner With Us
            </h3>

            {/* Value prop list */}
            <div style={{ display: "grid", gap: "20px", marginBottom: "36px" }}>
              {[
                {
                  title: "Direct Access to Vetted International Importers",
                  desc: "Skip untrusted brokers and directory spam. Gain access to verified B2B buyers across Europe, US, Middle East, and Asia.",
                },
                {
                  title: "Zero Upfront Sales Infrastructure Cost",
                  desc: "We invest the business development bandwidth, overseas buyer outreach, trade show presence, and deal negotiation resources.",
                },
                {
                  title: "Full EXIM & Compliance Management",
                  desc: "From APEDA/Spices Board certifications to ICEGATE Bill of Lading documentation, our trade team handles end-to-end compliance.",
                },
                {
                  title: "100% Production & Quality Control Retention",
                  desc: "You retain full operational authority over your plant, raw material sourcing, production schedules, and quality standards.",
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

            {/* Certifications Box (Pure Bright White Card) */}
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
                COMPLIANCE & CERTIFICATIONS WE HANDLE
              </span>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "#334155",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#2563EB" }}>&bull;</span>
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Raft-Style Testimonial Card (Pure Bright White Box with Brand Header) */}
            {mfgTestimonial && (
              <div
                style={{
                  backgroundColor: "#FFFFFF", // Pure bright white box matching Raft screenshot
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
                    {mfgTestimonial.company}
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#334155",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    "{mfgTestimonial.quote}"
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0F172A" }}>
                    {mfgTestimonial.author}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#64748B" }}>
                    {mfgTestimonial.title} &bull; {mfgTestimonial.countryOrCity}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Qualifying Form (Pure Bright White Container) */}
          <div
            style={{
              backgroundColor: "#FFFFFF", // Pure bright white form box
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
              Manufacturer Partnership Application
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "28px", lineHeight: 1.5 }}>
              Submit your manufacturing details for immediate joint-venture evaluation.
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
                  Application Received
                </h4>
                <p style={{ color: "#15803D", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "16px" }}>
                  An email draft addressed to <strong>siddhantvaidya70@gmail.com</strong> &amp; <strong>gaarth.godbole07@gmail.com</strong> has been opened with your submission details.
                </p>
                <a
                  href={`mailto:siddhantvaidya70@gmail.com,gaarth.godbole07@gmail.com?subject=${encodeURIComponent(`[StrideShip Exports] Manufacturer Partnership Application - ${formData.companyName}`)}&body=${encodeURIComponent(`New Manufacturer Partnership Application for StrideShip Exports:

• Company / Plant Name: ${formData.companyName}
• Product Category: ${formData.category}
• Current Export Status: ${formData.exportStatus === "domestic-only" ? "Domestic Only (Looking to Export)" : "Active Exporter"}
• Monthly Production Capacity: ${formData.monthlyCapacity || "Not specified"}
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

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="mfg-company"
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
                    Company / Plant Name *
                  </label>
                  <input
                    id="mfg-company"
                    type="text"
                    required
                    placeholder="e.g. Apex Agri Processors Pvt Ltd"
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

                {/* Category & Status */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "14px" }}>
                  <div>
                    <label
                      htmlFor="mfg-category"
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
                      Product Category *
                    </label>
                    <select
                      id="mfg-category"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
                    >
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.title}>
                          {cat.title}
                        </option>
                      ))}
                      <option value="Other Category">Other Industrial / Agri Sector</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mfg-status"
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
                      Export Status *
                    </label>
                    <select
                      id="mfg-status"
                      required
                      value={formData.exportStatus}
                      onChange={(e) => setFormData({ ...formData, exportStatus: e.target.value })}
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
                    >
                      <option value="domestic-only">Domestic Only</option>
                      <option value="active-exporter">Active Exporter</option>
                    </select>
                  </div>
                </div>

                {/* Capacity */}
                <div>
                  <label
                    htmlFor="mfg-capacity"
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
                    Monthly Capacity
                  </label>
                  <input
                    id="mfg-capacity"
                    type="text"
                    placeholder="e.g. 50 Metric Tons / Month"
                    value={formData.monthlyCapacity}
                    onChange={(e) => setFormData({ ...formData, monthlyCapacity: e.target.value })}
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
                      htmlFor="mfg-person"
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
                      id="mfg-person"
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
                      htmlFor="mfg-email"
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
                      id="mfg-email"
                      type="email"
                      required
                      placeholder="name@company.com"
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
                    htmlFor="mfg-phone"
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
                    id="mfg-phone"
                    type="tel"
                    placeholder="+91 98200 00000"
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
                  {loading ? "Submitting Application..." : "Submit Manufacturer Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
