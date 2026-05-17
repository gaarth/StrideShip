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

export function Article8() {
  return (
    <div>
      <P>
        ICEGATE — the Indian Customs Electronic Gateway — is the backbone of every import and export clearance operation in India. Every Bill of Entry, every Shipping Bill, every duty payment, and every compliance certificate flows through this system. Yet most CHAs and freight forwarders interact with ICEGATE through painfully manual processes: typing data into ERP fields, copying values from invoices, and manually validating format requirements before submission.
      </P>
      <P>
        This article breaks down how ICEGATE filing actually works, where the manual bottlenecks are, and how automation creates a seamless pipeline from source document to filed Bill of Entry — without changing your existing ERP.
      </P>

      <H2>How ICEGATE Filing Works: The Technical Stack</H2>
      <P>
        ICEGATE accepts Bill of Entry filings in EDI (Electronic Data Interchange) format through licensed customs software. The filing process involves several technical components:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>EDI Message Format:</strong> BOE filings follow a specific message structure with defined segments for header information, consignment details, item-level data, duty calculations, and declarations</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Digital Signature:</strong> Every filing must be digitally signed using a Class 3 DSC (Digital Signature Certificate) issued by a CCA-authorized Certifying Authority</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Port-specific codes:</strong> ICEGATE uses standardized codes for ports (INNSA for Nhava Sheva, INMAA for Chennai), CFS locations, and warehouse codes</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>CBIC exchange rates:</strong> Assessable values must use the exchange rate notified by CBIC, which is updated fortnightly. Using market rates or invoice-date rates is a common filing error</Li>
      </ul>

      <H2>The Five Manual Bottlenecks in ICEGATE Filing</H2>

      <H3>1. Data Entry from Source Documents</H3>
      <P>
        The most obvious bottleneck. Your operator receives a PDF commercial invoice and manually types every field — importer details, consignment details, and 20–60 line items with descriptions, quantities, values, and HSN codes — into the ERP&apos;s BOE module. At 2 minutes per line item, a 40-item invoice consumes 80 minutes of typing time. This is pure <Link href="/blog/manual-entry-trap-logistics-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>Manual Entry Trap</Link> territory.
      </P>

      <H3>2. HSN-to-Duty Mapping</H3>
      <P>
        After entering the product data, the operator must look up the correct duty rates for each HSN code. This involves checking the current Customs Tariff notification (which changes with every Budget), any applicable exemption notifications, anti-dumping duty orders, and FTA preferential rates. For a multi-item shipment with products across different chapters, this research takes 30–60 additional minutes.
      </P>

      <H3>3. Value Calculation</H3>
      <P>
        Assessable value calculation under the Customs Valuation Rules is more complex than adding up invoice values. It includes freight charges (actual or 20% of FOB for sea cargo), insurance (actual or 1.125% of CIF), landing charges (1% of CIF), and adjustments for buying commissions, royalties, or assists. Each component must be calculated correctly and in the right currency using the CBIC-notified exchange rate.
      </P>

      <H3>4. Compliance Declarations</H3>
      <P>
        The BOE filing includes multiple declaration sections: compliance with Section 46 of the Customs Act, Anti-dumping duty applicability declarations, BIS/LMPC/FSSAI compliance confirmations, and origin-based preferential duty claims. Missing or incorrect declarations trigger immediate queries at the assessment stage.
      </P>

      <H3>5. Pre-Submission Validation</H3>
      <P>
        Before filing, the operator must verify that all fields meet ICEGATE&apos;s format requirements: correct port codes, valid CHA license numbers, proper IGM reference numbers, and consistent value calculations across header and item levels. A single format error causes a filing rejection, requiring correction and re-submission.
      </P>

      <H2>How Automation Eliminates Each Bottleneck</H2>
      <div style={{ overflowX: "auto", margin: "0 0 32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(13px, 1.1vw, 15px)" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Bottleneck</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Manual Time</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Automated Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Data entry from invoice", "60–90 min", "30 seconds (AI extraction)"],
              ["HSN-to-duty mapping", "30–60 min", "Instant (live tariff database)"],
              ["Value calculation", "15–20 min", "Instant (rule-based engine)"],
              ["Compliance declarations", "10–15 min", "Auto-populated from product data"],
              ["Pre-submission validation", "10–15 min", "Auto-validated before output"],
              ["Total per shipment", "2–4 hours", "10–15 minutes (review only)"],
            ].map(([bottleneck, manual, auto], i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={{ padding: "12px 16px", color: "#CBD5E1" }}>{bottleneck}</td>
                <td style={{ padding: "12px 16px", color: "#94A3B8" }}>{manual}</td>
                <td style={{ padding: "12px 16px", color: "#6B8FA8" }}>{auto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>ERP Integration Patterns for Indian Logistics</H2>
      <P>
        The key design principle is that automation enhances your existing ERP — it does not replace it. Here are the common integration patterns for major Indian logistics ERPs:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>Softlink Global:</strong> API-based data push into the BOE preparation module. Extracted and validated data flows directly into Softlink&apos;s ICEGATE filing queue</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Logi-Sys:</strong> Structured data export matching Logi-Sys import format specifications. Supports bulk import for multi-item BOEs</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>SAP GTS:</strong> Integration via SAP IDocs or RFC for enterprise customs operations. Supports multi-country tariff configurations</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>CargoWise:</strong> API integration for multinational freight forwarders with Indian operations</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Google Sheets / Excel:</strong> For firms without ERP APIs, structured output formatted to your specific template for manual import</Li>
      </ul>

      <P>
        ICEGATE filing automation is not about bypassing the customs system — it is about eliminating the manual data entry that sits between your source documents and the filing portal. Your operators stop being typists and become auditors. The result: faster filing, fewer queries, and more shipments processed per day.
      </P>
      <P>
        Read our <Link href="/blog/automate-bill-of-entry-processing-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>complete BOE automation guide</Link> or learn how <Link href="/blog/ai-for-customs-brokers-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>AI is changing customs brokerage in India</Link>.
      </P>
    </div>
  );
}
