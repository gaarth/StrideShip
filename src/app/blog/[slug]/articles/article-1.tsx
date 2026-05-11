import Link from "next/link";

/* ── shared prose helpers ── */
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F1F5F9", letterSpacing: "-0.02em", marginTop: "48px", marginBottom: "16px", lineHeight: 1.2 }}>
    {children}
  </h2>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)", color: "#CBD5E1", marginTop: "36px", marginBottom: "12px", lineHeight: 1.3 }}>
    {children}
  </h3>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: "clamp(15px, 1.2vw, 17px)", color: "#94A3B8", lineHeight: 1.8, marginBottom: "20px" }}>
    {children}
  </p>
);
const Li = ({ children }: { children: React.ReactNode }) => (
  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "clamp(15px, 1.2vw, 17px)", color: "#94A3B8", lineHeight: 1.7, marginBottom: "12px" }}>
    <span style={{ color: "#6B8FA8", flexShrink: 0, marginTop: "2px" }}>▸</span>
    <span>{children}</span>
  </li>
);

export function Article1() {
  return (
    <div>
      <P>
        If you run a customs house agency in India, you already know the pain. Your best operations staff — the people who understand HS classifications, duty structures, and port-specific compliance inside-out — spend the majority of their day doing something a machine should handle: typing data from one document into another.
      </P>
      <P>
        Commercial invoice arrives as a PDF. Your operator opens it, squints at the line items, and begins the grueling process of manually entering every description, quantity, unit price, total value, HSN code, and country of origin into a spreadsheet or ERP. For a 40-item invoice, this takes 90 minutes to two hours. For a busy CHA processing 50–100 shipments a month through Nhava Sheva or JNPT, that is 100–200 hours per month of pure data entry. That is not operations. That is a data entry factory masquerading as a customs brokerage.
      </P>
      <P>
        This article breaks down exactly how AI is changing this — what it does, how it works at Indian ports, and how to evaluate whether it is right for your firm.
      </P>

      <H2>The Manual Data Entry Problem at Indian Ports</H2>
      <P>
        The Indian customs ecosystem is uniquely documentation-heavy. Every import shipment requires a Bill of Entry filed through ICEGATE. Every Bill of Entry requires accurate extraction of data from commercial invoices, packing lists, and sometimes additional documents like certificates of origin, BIS test reports, or FSSAI import permits. The data must be precise: one wrong HSN code triggers a customs query. One mismatched value triggers an assessment dispute. One missing compliance certificate triggers port detention.
      </P>
      <P>
        At major ports like Nhava Sheva (JNPT), Mumbai, the volume compounds the problem. A mid-sized CHA handles 50–80 import shipments per month. Each shipment averages 20–60 line items. That is 1,000–4,800 individual line items per month that must be manually read from source documents and typed into your system. The math is brutal: at 2 minutes per line item, you are looking at 33–160 hours of pure data entry per month — per operator.
      </P>
      <P>
        The cost is not just time. Manual entry introduces errors at a rate of 2–5% per field, according to industry benchmarks. On customs documents, those errors have real financial consequences:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li>Customs queries that delay clearance by 2–5 days</Li>
        <Li>Port detention and demurrage charges of ₹5,000–₹25,000 per day</Li>
        <Li>Assessment disputes that escalate to Commissioner (Appeals)</Li>
        <Li>Client trust damage that is impossible to quantify</Li>
      </ul>

      <H2>How AI Extracts Data from Commercial Invoices and Packing Lists</H2>
      <P>
        AI-based document extraction for customs works in three layers: ingestion, extraction, and normalization. Understanding each layer helps you evaluate vendor claims versus actual capability.
      </P>

      <H3>Layer 1: Document Ingestion</H3>
      <P>
        The system receives the source document — a PDF invoice attached to an email, a scanned packing list, or even a photograph of a physical document. Modern AI vision models (like Google Gemini Vision) can read these documents regardless of format, layout, or scan quality. This is fundamentally different from old-school OCR that required templates for every document layout.
      </P>

      <H3>Layer 2: Intelligent Extraction</H3>
      <P>
        The AI model reads the entire document and identifies the semantic meaning of each element. It does not just "see text" — it understands that "Description of Goods" is a column header, that "STAINLESS STEEL BOLTS M8x40" is a product description, that "7318.15.00" is an HSN code, and that the number next to it is a quantity, not a price. This contextual understanding is what separates AI extraction from template-based OCR. The model handles multi-format invoices, mixed languages, handwritten annotations, and non-standard layouts.
      </P>

      <H3>Layer 3: Normalization and Validation</H3>
      <P>
        Raw extracted data is normalized to match your specific output requirements. Descriptions are cleaned and standardized. HSN codes are validated against the Indian Customs Tariff. Unit prices and quantities are cross-checked against totals. Country of origin codes are mapped to ISO standards. The output is a structured dataset — typically in Excel, Google Sheets, or direct ERP format — ready for your team to review and approve.
      </P>

      <H2>The BOE Preparation Workflow with AI</H2>
      <P>
        Here is how a typical AI-powered <Link href="/blog/automate-bill-of-entry-processing-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>Bill of Entry preparation</Link> workflow operates at a modern Indian CHA:
      </P>
      <ol style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", counterReset: "step" }}>
        {[
          "Commercial invoice PDF arrives via email from the importer or consignee.",
          "The automation system ingests the PDF and extracts all line-item data — description, quantity, unit price, total, HSN code, country of origin.",
          "Extracted data is normalized and structured into the BOE format required by your ERP or ICEGATE filing system.",
          "HSN codes are validated against the Indian Customs Tariff schedule. Incorrect or ambiguous codes are flagged.",
          "Applicable duties are calculated — BCD, IGST, Social Welfare Surcharge, compensation cess — based on current tariff rates.",
          "Compliance prerequisites are checked — BIS certification, LMPC, FSSAI, CDSCO — and flagged if applicable.",
          "The complete draft BOE is presented to your operator for review and approval. The operator audits the data (a 5–10 minute task) instead of typing it from scratch (a 2-hour task).",
        ].map((text, i) => (
          <li key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", fontSize: "clamp(15px, 1.2vw, 17px)", color: "#94A3B8", lineHeight: 1.7, marginBottom: "16px" }}>
            <span style={{ color: "#6B8FA8", flexShrink: 0, fontWeight: 600, minWidth: "24px" }}>{String(i + 1).padStart(2, "0")}</span>
            <span>{text}</span>
          </li>
        ))}
      </ol>

      <H2>HSN Code Validation: Where Most Tools Fail</H2>
      <P>
        HSN code classification is the single most error-prone step in BOE preparation. India uses an 8-digit HSN system derived from the international HS nomenclature, with India-specific sub-headings. A product like "stainless steel bolts" could fall under multiple headings depending on material grade, thread type, and intended application.
      </P>
      <P>
        Generic OCR tools extract the HSN code printed on the invoice and pass it through unchanged. The problem: suppliers frequently print incorrect or outdated HSN codes. A Chinese supplier's HS code does not always map directly to the Indian customs tariff at the 8-digit level.
      </P>
      <P>
        StrideShip's systems validate extracted HSN codes against the current Indian Customs Tariff database, flag mismatches between the product description and the stated HSN, and suggest corrections based on product characteristics. This single feature prevents the customs queries that cost CHAs thousands of rupees in detention charges and days of clearance delays.
      </P>

      <H2>Specific Examples from Nhava Sheva / JNPT Operations</H2>
      <P>
        At Nhava Sheva — India's busiest container port handling over 50% of the country's containerized cargo — the operational pressure on CHAs is relentless. Here is what AI automation changes in practice:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>Multi-consignment shipments:</strong> A single container from China with 5 different consignees, each with their own invoice, packing list, and BOE. Manual processing: 8–10 hours. AI-assisted: 30 minutes of review time.</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Project cargo imports:</strong> Engineering equipment with 200+ line items across 15-page packing lists. Manual data entry: 2 full working days. AI extraction: 5 minutes of processing, 20 minutes of review.</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>FMCG imports:</strong> Consumer goods with complex BIS/LMPC/FSSAI compliance requirements that vary by product category. AI systems check each line item against the applicable compliance database and flag requirements automatically.</Li>
      </ul>

      <H2>How to Evaluate an Automation Vendor for Your CHA</H2>
      <P>
        Not every "AI for customs" tool delivers what it promises. Here is what to look for and what questions to ask:
      </P>

      <H3>Questions to Ask</H3>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li>Can the system handle my actual invoices — not a demo with clean, formatted samples?</Li>
        <Li>What is the field-level accuracy rate on non-standard invoice formats?</Li>
        <Li>Does it validate HSN codes against the Indian Customs Tariff, or just pass through whatever the supplier printed?</Li>
        <Li>Does it integrate with my existing ERP (Softlink, Logi-Sys, SAP), or does it require me to switch systems?</Li>
        <Li>Is data processing done on shared cloud servers, or is my client data isolated?</Li>
        <Li>What happens to my trade documents after processing — are they retained for AI training?</Li>
      </ul>

      <H3>Red Flags</H3>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li>Vendors who only demo with clean, pre-formatted documents</Li>
        <Li>No clear answer on data retention and privacy</Li>
        <Li>Requires you to replace your existing ERP</Li>
        <Li>Per-transaction pricing that becomes more expensive as your volume grows</Li>
        <Li>No India-specific customs tariff integration</Li>
      </ul>

      <P>
        AI for customs brokers is not a future concept — it is operational today at Indian CHAs that have decided to stop treating their best operators as data entry clerks. The firms that automate now will have a structural cost advantage over those that do not. The question is not whether to automate, but how quickly you can get started.
      </P>
      <P>
        Read more about <Link href="/blog/automate-bill-of-entry-processing-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>how to automate Bill of Entry processing</Link> or explore our <Link href="/faq" style={{ color: "#6B8FA8", textDecoration: "underline" }}>FAQ</Link> for answers to common questions about logistics automation.
      </P>
    </div>
  );
}
