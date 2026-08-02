"use client";

import { useState, useEffect, useRef } from "react";
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
  const [showErrors, setShowErrors] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  // Validation logic
  const validateStep = (currentStep: number) => {
    if (currentStep === 1) {
      if (!formData.productOfInterest) return false;
      if (formData.productOfInterest === "Other" && !formData.customProduct.trim()) return false;
    }
    if (currentStep === 2) {
      if (!formData.name.trim() || !formData.companyName.trim()) return false;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) return false;
    }
    if (currentStep === 3) {
      if (formData.inquiryType === "manufacturer") {
        if (!formData.yearsInBusiness.trim() || !formData.address.trim()) return false;
      }
    }
    return true;
  };

  const handleNextClick = () => {
    if (validateStep(step)) {
      setShowErrors(false);
      setStep((s) => Math.min(s + 1, totalSteps - 1));
    } else {
      setShowErrors(true);
    }
  };

  const handleBack = () => {
    setShowErrors(false);
    setStep((s) => Math.max(s - 1, 0));
  };

  // Focus input automatically on step change
  useEffect(() => {
    if (step > 1 && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [step]);

  // Handle Enter key progression
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && step > 0 && step < totalSteps - 1) {
        e.preventDefault();
        handleNextClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // handleNextClick is stable enough for Enter-to-advance; avoid rebinding each render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, formData, totalSteps]);

  const productOptions = PRODUCT_CATEGORIES.map((c) => c.title);
  productOptions.push("Other");

  const submitForm = async () => {
    if (!validateStep(step)) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
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
    } catch {
      alert("Error submitting the form.");
    }
    setIsSubmitting(false);
  };

  // Helper for rendering inputs with labels and validation
  const renderInput = (
    label: string,
    placeholder: string,
    value: string,
    field: keyof FormData,
    type: "text" | "email" | "number" | "url" = "text",
    required = true,
    isRef = false
  ) => {
    let hasError = false;
    if (showErrors && required && !value.trim()) {
      hasError = true;
    }
    if (showErrors && required && type === "email" && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) hasError = true;
    }

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {label} {required && <span style={{ color: "#EF4444" }}>*</span>}
        </label>
        <input
          ref={isRef ? inputRef : null}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setFormData({ ...formData, [field]: e.target.value });
            if (showErrors) setShowErrors(false);
          }}
          className={`clean-input ${hasError ? "error" : ""}`}
        />
        {hasError && type === "email" && value.trim() && (
          <span style={{ color: "#EF4444", fontSize: "0.8rem", marginTop: "4px" }}>Please enter a valid email address.</span>
        )}
      </div>
    );
  };

  const getStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="form-step">
            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#0F172A", marginBottom: "16px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              What describes your business?
            </h3>
            <p style={{ color: "#475569", marginBottom: "32px", fontSize: "1rem" }}>Select one to customize your inquiry flow.</p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
              <button
                onClick={() => {
                  setFormData({ ...formData, inquiryType: "manufacturer" });
                  // Direct transition for step 0 without checking required
                  setShowErrors(false);
                  setStep((s) => Math.min(s + 1, totalSteps - 1));
                }}
                className="type-select-btn"
                style={{
                  padding: "32px 24px",
                  borderRadius: "16px",
                  border: formData.inquiryType === "manufacturer" ? "2px solid #0F172A" : "1px solid rgba(0,0,0,0.1)",
                  backgroundColor: formData.inquiryType === "manufacturer" ? "rgba(15, 23, 42, 0.03)" : "#FFFFFF",
                  color: "#0F172A",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}
              >
                Indian Manufacturer
                <span style={{ fontSize: "0.85rem", color: "#64748B", fontWeight: 400 }}>I want to export my products globally.</span>
              </button>

              <button
                onClick={() => {
                  setFormData({ ...formData, inquiryType: "buyer" });
                  setShowErrors(false);
                  setStep((s) => Math.min(s + 1, totalSteps - 1));
                }}
                className="type-select-btn"
                style={{
                  padding: "32px 24px",
                  borderRadius: "16px",
                  border: formData.inquiryType === "buyer" ? "2px solid #0F172A" : "1px solid rgba(0,0,0,0.1)",
                  backgroundColor: formData.inquiryType === "buyer" ? "rgba(15, 23, 42, 0.03)" : "#FFFFFF",
                  color: "#0F172A",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}
              >
                International Buyer
                <span style={{ fontSize: "0.85rem", color: "#64748B", fontWeight: 400 }}>I want to source products from India.</span>
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="form-step">
            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#0F172A", marginBottom: "16px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              {formData.inquiryType === "manufacturer"
                ? "Which sector do you operate in?"
                : "What are you looking to source?"}
            </h3>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "32px", marginBottom: "8px" }}>
              {productOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    const next = { ...formData, productOfInterest: opt };
                    setFormData(next);
                    setShowErrors(false);
                    if (opt !== "Other") {
                      setTimeout(() => {
                        setShowErrors(false);
                        setStep((s) => Math.min(s + 1, totalSteps - 1));
                      }, 280);
                    }
                  }}
                  style={{
                    padding: "16px 24px",
                    borderRadius: "9999px",
                    border: formData.productOfInterest === opt ? "2px solid #0F172A" : (showErrors && !formData.productOfInterest ? "1px solid #EF4444" : "1px solid rgba(0,0,0,0.1)"),
                    backgroundColor: formData.productOfInterest === opt ? "#0F172A" : (showErrors && !formData.productOfInterest ? "rgba(239, 68, 68, 0.05)" : "#FFFFFF"),
                    color: formData.productOfInterest === opt ? "#FFFFFF" : "#0F172A",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
            
            {showErrors && !formData.productOfInterest && (
              <span style={{ color: "#EF4444", fontSize: "0.85rem", fontWeight: 500 }}>Please select a category above.</span>
            )}

            {formData.productOfInterest === "Other" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: "24px" }}>
                {renderInput("Specify Product", "Please specify your product...", formData.customProduct, "customProduct", "text", true, true)}
              </motion.div>
            )}
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#0F172A", marginBottom: "32px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Who should we contact?
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {renderInput("Full Name", "Your full name", formData.name, "name", "text", true, true)}
              {renderInput("Email Address", "you@company.com", formData.email, "email", "email", true, false)}
              {renderInput("Company Name", "Company Name", formData.companyName, "companyName", "text", true, false)}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#0F172A", marginBottom: "32px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Final details to prepare your audit.
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {renderInput("Website / Profile", "https://yourcompany.com", formData.profileLink, "profileLink", "url", false, true)}
              
              {formData.inquiryType === "manufacturer" && (
                <>
                  {renderInput("Years in Business", "e.g. 15", formData.yearsInBusiness, "yearsInBusiness", "number", true, false)}
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Company Address / Plant Location <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <textarea
                      placeholder="Full address of processing plant or office"
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });
                        if (showErrors) setShowErrors(false);
                      }}
                      rows={2}
                      className={`clean-input ${showErrors && !formData.address.trim() ? "error" : ""}`}
                      style={{ resize: "none" }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="inquiry-form"
      style={{
        padding: "clamp(60px, 10vh, 120px) 0",
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        scrollMarginTop: "100px",
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .clean-input {
          width: 100%;
          padding: 12px 0;
          border: none;
          border-bottom: 2px solid rgba(0,0,0,0.1);
          background-color: transparent;
          font-size: 1.2rem;
          color: #0F172A;
          outline: none;
          transition: border-color 0.3s ease;
          border-radius: 0;
        }
        .clean-input::placeholder {
          color: #94A3B8;
        }
        .clean-input:focus {
          border-bottom-color: #0F172A;
        }
        .clean-input.error {
          border-bottom-color: #EF4444;
        }
        .type-select-btn:hover {
          border-color: #0F172A !important;
        }
      `}} />

      <div style={{ width: "92%", maxWidth: "760px", margin: "0 auto" }}>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
            style={{ textAlign: "center", padding: "80px 0" }}
          >
            <div style={{
              width: "64px", height: "64px", borderRadius: "50%",
              backgroundColor: "#0F172A", color: "white",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 32px auto"
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px", letterSpacing: "-0.04em" }}>
              Inquiry Received
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#475569", maxWidth: "400px", margin: "0 auto" }}>
              Our trade desk will review your profile and contact you within 24 hours to schedule an initial audit.
            </p>
          </motion.div>
        ) : (
          <div style={{ position: "relative", minHeight: "500px", display: "flex", flexDirection: "column" }}>
            
            {/* Ultra-thin Progress Bar fixed to top */}
            <div style={{ position: "absolute", top: "-40px", left: 0, width: "100%", height: "2px", backgroundColor: "rgba(0,0,0,0.05)" }}>
              <div style={{ height: "100%", backgroundColor: "#0F172A", width: `${progress}%`, transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }} />
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, paddingTop: "20px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {getStepContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Bar */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between", 
              marginTop: "60px",
              paddingTop: "24px",
              borderTop: step > 0 ? "1px solid rgba(0,0,0,0.06)" : "none"
            }}>
              {step > 0 ? (
                <button
                  onClick={handleBack}
                  style={{
                    padding: "12px 0",
                    background: "none",
                    border: "none",
                    color: "#64748B",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>&larr;</span> Back
                </button>
              ) : (
                <div /> // Placeholder for flex space-between
              )}

              {step > 0 && (
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  {step < totalSteps - 1 && (
                    <span style={{ fontSize: "0.75rem", color: "#94A3B8", display: "none" }} className="hidden sm:inline-block">
                      Press <strong>Enter ↵</strong>
                    </span>
                  )}
                  <button
                    onClick={() => {
                      if (step === totalSteps - 1) submitForm();
                      else handleNextClick();
                    }}
                    disabled={isSubmitting}
                    style={{
                      padding: "14px 32px",
                      borderRadius: "9999px",
                      border: "none",
                      backgroundColor: "#0F172A",
                      color: "#FFFFFF",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      opacity: isSubmitting ? 0.7 : 1,
                      transition: "all 0.2s ease"
                    }}
                  >
                    {step === totalSteps - 1 ? (isSubmitting ? "Submitting..." : "Submit Inquiry") : "Continue"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
