"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCT_CATEGORIES } from "@/lib/exports-data";

type InquiryType = "manufacturer" | "buyer" | null;

interface FormData {
  inquiryType: InquiryType;
  name: string;
  email: string;
  companyName: string;
  profileLink: string;
  address: string;
  yearsInBusiness: string;
  productOfInterest: string;
  customProduct: string;
}

export function ExportsInquiryForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    inquiryType: null,
    name: "",
    email: "",
    companyName: "",
    profileLink: "",
    address: "",
    yearsInBusiness: "",
    productOfInterest: "",
    customProduct: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const productOptions = PRODUCT_CATEGORIES.map((c) => c.title);
  productOptions.push("Other");

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/exports/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form.");
    }
    setIsSubmitting(false);
  };

  const getStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col gap-6">
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>
              Are you an Indian Manufacturer or an International Buyer?
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              <button
                onClick={() => {
                  setFormData({ ...formData, inquiryType: "manufacturer" });
                  handleNext();
                }}
                style={{
                  flex: 1,
                  padding: "24px",
                  borderRadius: "16px",
                  border: "2px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  color: "#0F172A",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textAlign: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0F172A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                }}
              >
                I'm an Indian Manufacturer
              </button>
              <button
                onClick={() => {
                  setFormData({ ...formData, inquiryType: "buyer" });
                  handleNext();
                }}
                style={{
                  flex: 1,
                  padding: "24px",
                  borderRadius: "16px",
                  border: "2px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  color: "#0F172A",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textAlign: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0F172A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                }}
              >
                I'm an International Buyer
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-6">
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>
              {formData.inquiryType === "manufacturer"
                ? "What products do you manufacture?"
                : "What products are you interested in buying?"}
            </h3>
            <select
              value={formData.productOfInterest}
              onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #CBD5E1",
                backgroundColor: "#FFFFFF",
                fontSize: "1rem",
                color: "#0F172A",
                outline: "none",
              }}
            >
              <option value="" disabled>Select a product category</option>
              {productOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {formData.productOfInterest === "Other" && (
              <input
                type="text"
                placeholder="Please specify"
                value={formData.customProduct}
                onChange={(e) => setFormData({ ...formData, customProduct: e.target.value })}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid #CBD5E1",
                  backgroundColor: "#FFFFFF",
                  fontSize: "1rem",
                  color: "#0F172A",
                  outline: "none",
                }}
              />
            )}
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-6">
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>
              Your Contact Information
            </h3>
            <input
              type="text"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #CBD5E1",
                backgroundColor: "#FFFFFF",
                fontSize: "1rem",
                color: "#0F172A",
                outline: "none",
              }}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #CBD5E1",
                backgroundColor: "#FFFFFF",
                fontSize: "1rem",
                color: "#0F172A",
                outline: "none",
              }}
            />
            <input
              type="text"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #CBD5E1",
                backgroundColor: "#FFFFFF",
                fontSize: "1rem",
                color: "#0F172A",
                outline: "none",
              }}
            />
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-6">
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>
              Company Details
            </h3>
            <input
              type="url"
              placeholder="Company Website or LinkedIn Profile"
              value={formData.profileLink}
              onChange={(e) => setFormData({ ...formData, profileLink: e.target.value })}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #CBD5E1",
                backgroundColor: "#FFFFFF",
                fontSize: "1rem",
                color: "#0F172A",
                outline: "none",
              }}
            />
            {formData.inquiryType === "manufacturer" && (
              <>
                <textarea
                  placeholder="Company Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "1px solid #CBD5E1",
                    backgroundColor: "#FFFFFF",
                    fontSize: "1rem",
                    color: "#0F172A",
                    outline: "none",
                    resize: "none"
                  }}
                />
                <input
                  type="number"
                  placeholder="Years in Business"
                  value={formData.yearsInBusiness}
                  onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "1px solid #CBD5E1",
                    backgroundColor: "#FFFFFF",
                    fontSize: "1rem",
                    color: "#0F172A",
                    outline: "none",
                  }}
                />
              </>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <section
      id="inquiry-form"
      style={{
        padding: "clamp(60px, 8vh, 100px) 0",
        backgroundColor: "#F5F4F0",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        scrollMarginTop: "100px",
      }}
    >
      <div style={{ width: "94%", maxWidth: "800px", margin: "0 auto" }}>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              padding: "60px 40px",
              textAlign: "center",
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{
              width: "64px", height: "64px", borderRadius: "50%",
              backgroundColor: "#10B981", color: "white",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px auto"
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>
              Form successfully submitted
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#475569" }}>
              We will get back to you as soon as possible.
            </p>
          </motion.div>
        ) : (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              padding: "40px",
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05)",
              minHeight: "450px",
              display: "flex",
              flexDirection: "column"
            }}
          >
            {/* Progress Bar */}
            <div style={{ width: "100%", height: "4px", backgroundColor: "#F1F5F9", borderRadius: "2px", marginBottom: "40px", overflow: "hidden" }}>
              <div style={{ height: "100%", backgroundColor: "#0F172A", width: `${progress}%`, transition: "width 0.3s ease" }} />
            </div>

            <div style={{ flex: 1 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {getStepContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
              {step > 0 ? (
                <button
                  onClick={handleBack}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "10px",
                    border: "1px solid #E2E8F0",
                    backgroundColor: "transparent",
                    color: "#475569",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step > 0 && (
                <button
                  onClick={() => {
                    if (step === totalSteps - 1) submitForm();
                    else handleNext();
                  }}
                  disabled={
                    (step === 1 && !formData.productOfInterest) ||
                    (step === 2 && (!formData.name || !formData.email || !formData.companyName)) ||
                    (step === 3 && formData.inquiryType === "manufacturer" && (!formData.profileLink || !formData.address || !formData.yearsInBusiness)) ||
                    (step === 3 && formData.inquiryType === "buyer" && !formData.profileLink) ||
                    isSubmitting
                  }
                  style={{
                    padding: "12px 32px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#0F172A",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    cursor: "pointer",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {step === totalSteps - 1 ? (isSubmitting ? "Submitting..." : "Submit") : "Next"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
