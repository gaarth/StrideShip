import Link from "next/link";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F1F5F9", letterSpacing: "-0.02em", marginTop: "48px", marginBottom: "16px", lineHeight: 1.2 }}>{children}</h2>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)", color: "#CBD5E1", marginTop: "36px", marginBottom: "12px", lineHeight: 1.3 }}>{children}</h3>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: "clamp(15px, 1.2vw, 17px)", color: "#94A3B8", lineHeight: 1.8, marginBottom: "20px" }}>{children}</p>
);
const Li = ({ children }: { children: React.ReactNode }) => (
  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "clamp(15px, 1.2vw, 17px)", color: "#94A3B8", lineHeight: 1.7, marginBottom: "12px" }}>
    <span style={{ color: "#6B8FA8", flexShrink: 0, marginTop: "2px" }}>▸</span>
    <span>{children}</span>
  </li>
);

export function Article5() {
  return (
    <div>
      <P>
        If you are a customs house agent in India evaluating software for your operations, this guide is for you. The market is cluttered with tools that promise &ldquo;automation&rdquo; but deliver glorified data entry forms. This article cuts through the noise — what categories of CHA software exist in India, what features actually matter, what questions to ask vendors, and what red flags should make you walk away.
      </P>

      <H2>The Landscape of CHA Software in India</H2>
      <P>
        Custom house agent software in India falls into four categories, each with different capabilities, price points, and limitations:
      </P>

      <H3>1. Traditional ERP Systems</H3>
      <P>
        Tools like Softlink Global, Logi-Sys, and Acutech have been the backbone of Indian CHA operations for years. They provide structured data storage, ICEGATE filing integration, job costing, and accounting modules. Their strength is structured data management. Their weakness: they still require manual data entry. Every invoice, every packing list, every BOE field must be typed in by a human operator.
      </P>

      <H3>2. Generic OCR / Document Scanning Tools</H3>
      <P>
        Tools like ABBYY FineReader, Adobe Acrobat, and various &ldquo;AI document extraction&rdquo; startups offer template-based document scanning. They can extract text from PDFs, but they lack the domain knowledge to understand logistics documents. They do not know that &ldquo;7318.15.00&rdquo; is an HSN code, that &ldquo;CIF Mumbai&rdquo; is an incoterm, or that &ldquo;BIS certification required&rdquo; is a compliance flag. Result: high extraction rates on clean documents, poor accuracy on the messy, non-standard documents that actual Indian logistics operations produce.
      </P>

      <H3>3. Off-the-Shelf Customs Automation Platforms</H3>
      <P>
        A newer category of cloud-based tools specifically targeting customs documentation. These offer pre-built workflows for BOE preparation, duty calculation, and compliance checking. The advantage: faster time-to-value than building from scratch. The disadvantage: they are designed for a generic customs workflow, not your specific workflow. If your document formats, ERP requirements, or compliance checks differ from the platform&apos;s assumptions, you are stuck with workarounds.
      </P>

      <H3>4. Custom-Built Automation Systems</H3>
      <P>
        Systems engineered specifically for your operations — your document formats, your ERP output requirements, your compliance workflows, your team&apos;s review process. This is what <Link href="/" style={{ color: "#6B8FA8", textDecoration: "underline" }}>StrideShip</Link> builds. Higher upfront investment in discovery and design, but the system handles your exact edge cases and integrates precisely with your existing infrastructure.
      </P>

      <H2>Off-the-Shelf vs. Custom-Built: The Real Trade-offs</H2>
      <div style={{ overflowX: "auto", margin: "0 0 32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(13px, 1.1vw, 15px)" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Factor</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Off-the-Shelf</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Custom-Built</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Time to deploy", "1–2 weeks", "3–6 weeks"],
              ["Handles your specific formats", "Partially (workarounds needed)", "Fully (built for your docs)"],
              ["ERP integration", "Limited to supported ERPs", "Any ERP with API or import"],
              ["Accuracy on messy documents", "70–85%", "95–99%+"],
              ["Ongoing customization", "Feature requests to vendor", "Direct modifications"],
              ["Data privacy", "Shared cloud infrastructure", "Isolated or on-premise"],
              ["Pricing model", "Per-user or per-transaction", "Monthly retainer"],
              ["Scales with your growth", "Platform limitations apply", "Built to scale with you"],
            ].map(([factor, shelf, custom], i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={{ padding: "12px 16px", color: "#CBD5E1" }}>{factor}</td>
                <td style={{ padding: "12px 16px", color: "#94A3B8" }}>{shelf}</td>
                <td style={{ padding: "12px 16px", color: "#6B8FA8" }}>{custom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>Key Features to Evaluate in CHA Software</H2>
      <P>
        Regardless of whether you choose off-the-shelf or custom-built, here are the features that actually move the needle for Indian CHA operations:
      </P>

      <H3>Must-Have Features</H3>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>AI-based document extraction:</strong> The system should read your actual commercial invoices — not clean templates — and extract line-item data with 95%+ accuracy</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Indian Customs Tariff HSN validation:</strong> Extracted HSN codes should be validated against the current Indian tariff schedule, not just passed through</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Duty calculation engine:</strong> BCD, IGST, SWS, compensation cess, anti-dumping duties, and FTA benefit calculations based on current rates</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Compliance prerequisite checking:</strong> Automatic flagging of BIS, LMPC, FSSAI, CDSCO, and WPC requirements per product</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>ERP integration:</strong> Output formatted for your specific ERP (Softlink, Logi-Sys, SAP) — not a generic CSV that requires further manual formatting</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Review-only workflow:</strong> Your operators should audit and approve extracted data, not type it from scratch</Li>
      </ul>

      <H3>Nice-to-Have Features</H3>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li>DGFT filing preparation and duty credit scrip tracking</Li>
        <Li>Multi-carrier shipment tracking integration</Li>
        <Li>Automated client communication (email/WhatsApp milestone updates)</Li>
        <Li>Operational dashboards with KPIs and team performance metrics</Li>
        <Li>Historical analytics for customs query rates, clearance times, and duty trends</Li>
      </ul>

      <H2>Questions to Ask Every Vendor</H2>
      <P>
        Before signing with any CHA software vendor, ask these questions. The answers will tell you whether you are getting a real automation system or a fancy data entry form:
      </P>
      <ol style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        {[
          "Can I test the system with my actual invoices — not your demo documents?",
          "What is the field-level accuracy rate on non-standard invoice formats from Chinese and Southeast Asian suppliers?",
          "Does the system validate HSN codes against the Indian Customs Tariff, or just extract whatever the supplier printed?",
          "How does the system handle multi-currency invoices with different exchange rate dates?",
          "Where is my trade data processed and stored? Is it on shared cloud infrastructure or isolated?",
          "Do you use my client data to train your AI models?",
          "What happens if I need a custom output format for my ERP that your system does not currently support?",
          "What is the total cost at 50 shipments per month? At 150? At 300? (This reveals whether per-transaction pricing will punish your growth.)",
        ].map((q, i) => (
          <li key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", fontSize: "clamp(15px, 1.2vw, 17px)", color: "#94A3B8", lineHeight: 1.7, marginBottom: "16px" }}>
            <span style={{ color: "#6B8FA8", flexShrink: 0, fontWeight: 600, minWidth: "24px" }}>{i + 1}.</span>
            <span>{q}</span>
          </li>
        ))}
      </ol>

      <H2>Red Flags When Evaluating CHA Software</H2>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>Demo-only accuracy:</strong> If the vendor only demos with clean, pre-formatted invoices and avoids testing with your actual messy documents, the accuracy claims are marketing, not engineering</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>No India-specific customs logic:</strong> If the system does not validate HSN codes against the Indian Customs Tariff or calculate Indian-specific duties (BCD, IGST, SWS), it was not built for Indian customs</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Per-transaction pricing:</strong> Pricing that charges per document or per shipment punishes growth. The more successful you become, the more you pay — the exact opposite of what automation should deliver</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Requires replacing your ERP:</strong> Any vendor that requires you to abandon your existing ERP does not understand Indian logistics operations. Your team has years of institutional knowledge embedded in your current system</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Vague data privacy terms:</strong> If the vendor cannot clearly explain where your trade data is processed, how long it is retained, and whether it is used for AI training, your client&apos;s confidential commercial information is at risk</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Long-term lock-in contracts:</strong> Demanding 12–24 month commitments before you have validated the system on your actual workflows is a red flag. Confident vendors offer pilot programs</Li>
      </ul>

      <H2>Where StrideShip Fits</H2>
      <P>
        StrideShip builds custom automation systems for Indian CHAs — not off-the-shelf software. We study your actual documents, your specific ERP format requirements, and your team&apos;s workflow before building anything. Every system is engineered for your edge cases, integrated with your existing infrastructure, and deployed with zero disruption to running operations.
      </P>
      <P>
        We operate on a monthly retainer model — no per-transaction pricing, no long-term lock-in. We follow an Ephemeral Processing Model — your trade data is not retained after processing and is never used for AI training. And every engagement starts with a free 15-minute audit call where we assess whether automation makes sense for your specific operation.
      </P>
      <P>
        Explore our <Link href="/faq" style={{ color: "#6B8FA8", textDecoration: "underline" }}>FAQ</Link> for detailed answers to common questions, or read about the <Link href="/blog/manual-entry-trap-logistics-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>Manual Entry Trap</Link> that prevents logistics firms from scaling.
      </P>
    </div>
  );
}
