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

export function Article2() {
  return (
    <div>
      <P>
        Every import shipment entering India requires a Bill of Entry filed through ICEGATE. For customs house agents processing dozens of shipments per month, BOE preparation is the single most time-consuming manual process in their operation. This guide covers what a Bill of Entry is, the step-by-step manual process, how automation handles each step, and what to consider when implementing BOE automation at your firm.
      </P>

      <H2>What Is a Bill of Entry?</H2>
      <P>
        A Bill of Entry (BOE) is the primary customs declaration document filed by an importer or their authorized customs house agent for clearing imported goods through Indian customs. It contains a complete declaration of the goods being imported — descriptions, quantities, values, HSN classifications, applicable duties, and compliance certifications. The BOE is filed electronically through ICEGATE (Indian Customs Electronic Gateway) and forms the basis for customs assessment, duty payment, and clearance.
      </P>
      <P>
        There are three types of Bill of Entry in India: Bill of Entry for Home Consumption (for goods cleared directly into the domestic market), Bill of Entry for Warehousing (for goods stored in a bonded warehouse before clearance), and Bill of Entry for Ex-Bond Clearance (for goods previously warehoused now being cleared for consumption). The vast majority of import shipments use the Home Consumption BOE.
      </P>

      <H2>The 7 Steps of Manual BOE Preparation</H2>
      <P>
        Here is how most Indian CHAs prepare a Bill of Entry manually — and where the hours disappear:
      </P>
      <ol style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
        {[
          { title: "Receive and review source documents", desc: "The CHA receives the commercial invoice, packing list, bill of lading, and any additional documents (certificate of origin, test reports, import licenses) from the importer. The operator reviews each document to understand the shipment contents." },
          { title: "Extract line-item data manually", desc: "The operator opens the commercial invoice PDF and begins typing each line item into a spreadsheet or ERP — product description, quantity, unit price, total value, unit of measurement, and country of origin. For a 40-item invoice, this takes 60–90 minutes." },
          { title: "Classify HSN codes", desc: "For each line item, the operator determines the correct 8-digit HSN code from the Indian Customs Tariff. This requires understanding the product characteristics and navigating the tariff schedule. Incorrect classification is the #1 cause of customs queries at Indian ports." },
          { title: "Calculate applicable duties", desc: "Based on the HSN classification, the operator calculates Basic Customs Duty (BCD), Integrated GST (IGST), Social Welfare Surcharge (SWS), and any applicable anti-dumping or safeguard duties. Duty rates vary by product, country of origin, and applicable trade agreements." },
          { title: "Check compliance prerequisites", desc: "The operator checks each product against applicable compliance requirements — BIS certification for electronics and steel, LMPC for legal metrology items, FSSAI registration for food products, CDSCO approval for medical devices, and WPC approval for wireless equipment." },
          { title: "Format data for ICEGATE filing", desc: "The prepared data is formatted according to ICEGATE's filing requirements — specific field lengths, code formats, and declaration structures. Many CHAs use ERP systems like Softlink that have ICEGATE integration, but the data still needs to be entered into the ERP manually." },
          { title: "Review, correct, and submit", desc: "A senior operator or the CHA license holder reviews the prepared BOE for accuracy, corrects any errors, and authorizes submission through ICEGATE. Any post-submission queries from customs require additional response time." },
        ].map((step, i) => (
          <li key={i} style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <span style={{ color: "#6B8FA8", flexShrink: 0, fontWeight: 600, fontSize: "clamp(15px, 1.2vw, 17px)", minWidth: "32px" }}>{String(i + 1).padStart(2, "0")}.</span>
              <div>
                <strong style={{ color: "#F1F5F9", display: "block", marginBottom: "6px", fontSize: "clamp(15px, 1.2vw, 17px)" }}>{step.title}</strong>
                <span style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "clamp(15px, 1.2vw, 17px)" }}>{step.desc}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <H2>How Automation Handles Each Step</H2>
      <P>
        BOE automation does not skip any of these steps — it replaces the manual execution of each one with intelligent processing:
      </P>

      <H3>Steps 1–2: Document Ingestion and Data Extraction</H3>
      <P>
        AI vision models read the commercial invoice PDF and extract all line-item data automatically. This works regardless of invoice format, layout, language, or scan quality. The system handles multi-page invoices, invoices with handwritten annotations, and invoices that combine packing list information. Processing time: 15–30 seconds per document, compared to 60–90 minutes of manual typing.
      </P>

      <H3>Step 3: HSN Classification</H3>
      <P>
        The extracted product descriptions are matched against the Indian Customs Tariff database. The system validates the HSN code printed on the supplier&apos;s invoice against the product description and flags mismatches. For products where the supplier has printed an incorrect or foreign HS code, the system suggests the correct Indian 8-digit HSN based on the product characteristics. This is the step where <Link href="/blog/ai-for-customs-brokers-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>AI for customs brokers</Link> delivers the highest ROI — preventing the customs queries that cost thousands in detention charges.
      </P>

      <H3>Step 4: Duty Calculation</H3>
      <P>
        Based on the validated HSN code and country of origin, the system automatically calculates all applicable duties — BCD, IGST, SWS, compensation cess, anti-dumping duties, and safeguard duties. It also checks for applicable FTA (Free Trade Agreement) benefits under ASEAN, Japan CEPA, Korea CEPA, SAFTA, and other trade agreements that could reduce the effective duty rate.
      </P>

      <H3>Step 5: Compliance Checking</H3>
      <P>
        Each line item is checked against compliance databases — BIS mandatory certification list, LMPC requirements, FSSAI registration requirements, CDSCO medical device classifications, and WPC equipment approval lists. Products requiring compliance certificates are flagged before the BOE is finalized, preventing rejection at the assessment stage.
      </P>

      <H3>Steps 6–7: Output and Review</H3>
      <P>
        The complete draft BOE is output in your ERP&apos;s required format — whether that is Softlink, Logi-Sys, SAP, or a structured Excel file for manual ICEGATE filing. Your operator receives a complete, pre-filled BOE and reviews it for accuracy. This review typically takes 5–10 minutes compared to the 2–3 hours of manual preparation it replaces.
      </P>

      <H2>Common Error Types and How AI Prevents Them</H2>
      <P>
        The errors that cause the most damage in BOE preparation are systematic, not random. AI automation prevents each category:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>Transcription errors:</strong> Typing "1,250" as "12,500" or swapping two digits in a quantity. AI extraction eliminates manual typing entirely.</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>HSN misclassification:</strong> Using the supplier&apos;s HS code without verifying against Indian tariff. AI validates every code against the current Indian Customs Tariff.</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Missing compliance flags:</strong> Overlooking that a product requires BIS certification. AI checks every line item against all applicable compliance databases.</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Duty calculation errors:</strong> Using outdated duty rates or missing applicable FTA benefits. AI uses current tariff rates and checks trade agreement eligibility.</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Currency conversion errors:</strong> Applying the wrong exchange rate or conversion date. AI applies the ICEGATE-notified exchange rate for the relevant shipping bill date.</Li>
      </ul>

      <H2>ICEGATE Integration Considerations</H2>
      <P>
        ICEGATE filing in India follows specific technical requirements that your BOE automation system must handle:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li>Field-level formatting requirements (character limits, numeric precision, code formats)</Li>
        <Li>ICEGATE-notified exchange rates applied per the correct date</Li>
        <Li>Proper BE type coding (home consumption, warehousing, ex-bond)</Li>
        <Li>License and exemption notification references when applicable</Li>
        <Li>Correct port codes and CHA license number formatting</Li>
      </ul>
      <P>
        StrideShip&apos;s systems output data formatted for your specific filing pathway — whether direct ICEGATE submission, ERP-integrated filing through Softlink or Logi-Sys, or structured Excel exports for manual upload.
      </P>

      <H2>Getting Started with BOE Automation</H2>
      <P>
        BOE automation is not an all-or-nothing decision. Most CHAs start by automating the highest-volume, most error-prone document type — typically commercial invoice extraction and HSN validation — and expand from there. The implementation timeline for a single-process automation is 3–4 weeks from initial audit to production deployment.
      </P>
      <P>
        The first step is understanding your current workflow in detail. How many shipments per month? What is your average line item count? Which ERP do you use? What are your most common customs query types? These answers determine the system architecture. <Link href="/faq" style={{ color: "#6B8FA8", textDecoration: "underline" }}>Read our FAQ</Link> for more details, or explore how <Link href="/blog/ai-for-customs-brokers-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>Indian CHAs are already automating</Link>.
      </P>
    </div>
  );
}
