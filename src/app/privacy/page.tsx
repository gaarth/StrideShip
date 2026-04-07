import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PrivacyContact } from "@/components/sections/privacy-contact";

export const metadata = {
  title: "Privacy Policy | Strideship",
  description: "Privacy Policy for StrideShip, ensuring data security and confidentiality.",
};

export default function PrivacyPage() {
  return (
    <main style={{ position: "relative" }}>
      {/* Locked screen background matching Home layout */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -1, background: "radial-gradient(ellipse at 50% 40%, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%)" }} />
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -2, backgroundColor: "#05070A" }} />

      <Navbar />

      <section style={{ padding: "clamp(100px, 12vw, 140px) 0 clamp(36px, 6vw, 60px)", position: "relative" }}>
        <div style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)", maxWidth: "1200px" }}>

          {/* Page Header */}
          <header style={{ textAlign: "center", marginBottom: "clamp(36px, 5vw, 56px)" }}>
            <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "#F1F5F9", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
              Privacy Policy <br />
              <span style={{ fontStyle: "italic", color: "#94A3B8" }}>for StrideShip</span>
            </h1>
            <p style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", color: "#64748B", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              Last Updated: April 7, 2026
            </p>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px, 3.5vw, 38px)", maxWidth: "800px", margin: "0 auto" }}>

            <section>
              <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", color: "#E2E8F0", marginBottom: "14px", letterSpacing: "-0.02em" }}>
                1. Introduction
              </h2>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "16px" }}>
                StrideShip ("we," "our," or "us"), operated by Gaarth Godbole and Siddhant Vaidya, is a logistics automation infrastructure provider based in Mumbai, India. We are committed to protecting the integrity and confidentiality of the trade data processed through our platform. This Privacy Policy outlines how we handle data as a Data Fiduciary (for your account info) and a Data Processor (for the logistics documents you automate).
              </p>
            </section>

            <section style={{ borderTop: "1px solid rgba(148,163,184,0.1)", paddingTop: "20px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", color: "#E2E8F0", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                2. Information We Collect
              </h2>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "14px" }}>
                We distinguish between the information required to manage our relationship with you and the data you provide for automation.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Account & Contact Information
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Name, professional email address (e.g., Gmail/Outlook), phone number, and company designation.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Operational Trade Data (The "Automation Input")
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    When using our services, you may provide unstructured data in the form of PDF invoices, Excel packing lists, and email text. This data often contains third-party information such as consignee details, HSN codes, and commercial values.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> System Metadata
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    IP addresses, logs of successful extractions, and error reports required for system maintenance and security.
                  </p>
                </div>
              </div>
            </section>

            <section style={{ borderTop: "1px solid rgba(148,163,184,0.1)", paddingTop: "32px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", color: "#E2E8F0", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                3. Purpose of Processing (The "Why")
              </h2>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "24px" }}>
                We process information strictly for the following purposes:
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "20px" }}>
                <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60A5FA", fontSize: "11px", marginTop: "3px" }}>✓</div>
                  <p style={{ margin: 0, color: "#94A3B8", lineHeight: 1.7 }}>
                    <strong style={{ color: "#CBD5E1", fontWeight: 500 }}>Extraction & Normalization:</strong> To convert unstructured logistics documents into structured, ERP-ready data.
                  </p>
                </li>
                <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60A5FA", fontSize: "11px", marginTop: "3px" }}>✓</div>
                  <p style={{ margin: 0, color: "#94A3B8", lineHeight: 1.7 }}>
                    <strong style={{ color: "#CBD5E1", fontWeight: 500 }}>Compliance Validation:</strong> To cross-reference data against government prerequisites (e.g., BIS, LMPC, HSN) as requested by the user.
                  </p>
                </li>
                <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60A5FA", fontSize: "11px", marginTop: "3px" }}>✓</div>
                  <p style={{ margin: 0, color: "#94A3B8", lineHeight: 1.7 }}>
                    <strong style={{ color: "#CBD5E1", fontWeight: 500 }}>The "Review-Only" Workflow:</strong> To present extracted data back to the user for final audit and submission to their internal systems.
                  </p>
                </li>
                <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60A5FA", fontSize: "11px", marginTop: "3px" }}>✓</div>
                  <p style={{ margin: 0, color: "#94A3B8", lineHeight: 1.7 }}>
                    <strong style={{ color: "#CBD5E1", fontWeight: 500 }}>Zero-Training Guarantee:</strong> StrideShip does NOT use your proprietary trade data, pricing, or client lists to train our internal AI models. Your data is used solely to fulfill your specific automation request.
                  </p>
                </li>
              </ul>
            </section>

            <section style={{ borderTop: "1px solid rgba(148,163,184,0.1)", paddingTop: "32px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", color: "#E2E8F0", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                4. Legal Basis for Processing
              </h2>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "24px" }}>
                Under the DPDP Act 2023 (India), we process data based on:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Contractual Necessity
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Processing is required to perform the services outlined in your Pilot or Service Agreement.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Consented Use
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Explicit authorization provided when you connect your data sources (Gmail/Excel) to our Logic Layer.
                  </p>
                </div>
              </div>
            </section>

            <section style={{ borderTop: "1px solid rgba(148,163,184,0.1)", paddingTop: "32px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", color: "#E2E8F0", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                5. Data Retention & Deletion
              </h2>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "24px" }}>
                Unlike general AI apps, StrideShip follows an Ephemeral Processing Model:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Automation Data
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Once a document is processed and successfully ingested into your ERP or downloaded, the source data is flagged for deletion. We do not maintain a permanent archive of your commercial invoices.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Account Data
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Retained as long as your account is active or as required by Indian tax and corporate laws.
                  </p>
                </div>
              </div>
            </section>

            <section style={{ borderTop: "1px solid rgba(148,163,184,0.1)", paddingTop: "32px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", color: "#E2E8F0", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                6. Data Security
              </h2>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "24px" }}>
                Given our infrastructure (Local Hosting + Cloudflare Tunnels), we implement:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Encryption in Transit
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    All data moving between your systems and our server is encrypted via SSL/TLS.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Data Isolation
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Each client’s data is processed in a strictly isolated environment (Docker containers) to ensure no cross-contamination of trade secrets.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Local Sovereignty
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    As we are India-based, your data processing remains within the jurisdiction of Indian law.
                  </p>
                </div>
              </div>
            </section>

            <section style={{ borderTop: "1px solid rgba(148,163,184,0.1)", paddingTop: "32px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", color: "#E2E8F0", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                7. Third-Party Disclosures
              </h2>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "24px" }}>
                We do not sell, rent, or trade your data. Disclosure only occurs with:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Your Internal Systems
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Pushing data to your specified ERP (e.g., Softlink, SAP, etc.).
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Infrastructure Providers
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Specialized hosting (e.g., Heroku for front-end) or security services (e.g., Cloudflare) that assist in delivering the service.
                  </p>
                </div>
              </div>
            </section>

            <section style={{ borderTop: "1px solid rgba(148,163,184,0.1)", paddingTop: "32px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", color: "#E2E8F0", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                8. Your Rights (DPDP Act Compliance)
              </h2>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "24px" }}>
                As a "Data Principal" under Indian law, you have the right to:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Access & Review
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Request a summary of the data we have processed for you.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Correction & Erasure
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Request the update or permanent deletion of your data from our system logs.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Grievance Redressal
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    If you have concerns, you may contact our designated Grievance Officer.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section style={{ borderTop: "1px solid rgba(148,163,184,0.1)", paddingTop: "28px", marginTop: "8px" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", color: "#E2E8F0", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                9. Contact Information
              </h2>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "20px" }}>
                For any privacy-related inquiries or to exercise your data rights, please contact:
              </p>

              <PrivacyContact />

              <div style={{ marginTop: "24px", display: "flex", alignItems: "center", gap: "12px", color: "#94A3B8" }}>

                <span style={{ fontSize: "1.05rem" }}>Mumbai, Maharashtra, India</span>
              </div>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
