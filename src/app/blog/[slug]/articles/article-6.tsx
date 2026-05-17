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

export function Article6() {
  return (
    <div>
      <P>
        Customs clearance in India is a multi-step regulatory process that sits at the intersection of trade compliance, document accuracy, and operational speed. For every import shipment clearing through ICEGATE, there are dozens of data points that must be extracted, validated, and filed correctly — or the shipment sits at port accumulating detention charges while your team scrambles to fix errors.
      </P>
      <P>
        This guide covers the complete customs clearance workflow in India, identifies exactly where AI automation eliminates bottlenecks, and explains what &ldquo;AI for customs clearance&rdquo; actually means in practice — not in a vendor pitch deck.
      </P>

      <H2>The Anatomy of Indian Customs Clearance</H2>
      <P>
        Indian customs clearance for imports follows a defined workflow mandated by the Central Board of Indirect Taxes and Customs (CBIC). Understanding each step is essential for identifying automation opportunities:
      </P>
      <ol style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
        {[
          { title: "IGM Filing", desc: "The shipping line files the Import General Manifest (IGM) with customs before the vessel arrives. This creates the master record against which all Bills of Entry will be filed." },
          { title: "Document Collection", desc: "The CHA collects all required documents from the importer: commercial invoice, packing list, bill of lading, certificate of origin, insurance certificate, and any product-specific compliance certificates (BIS, LMPC, FSSAI, etc.)." },
          { title: "Bill of Entry Preparation", desc: "The most time-intensive manual step. Every line item from the commercial invoice is typed into the BOE format — description, quantity, value, HSN code, country of origin — along with duty calculations and compliance declarations." },
          { title: "BOE Filing via ICEGATE", desc: "The prepared Bill of Entry is filed electronically through ICEGATE. The system validates the filing against the IGM and assigns a BOE number." },
          { title: "Risk Management System (RMS)", desc: "ICEGATE's Risk Management System evaluates the filing and assigns a clearance channel — Green (auto-cleared), Yellow (document examination), or Red (physical examination)." },
          { title: "Assessment", desc: "The assessing officer reviews the BOE, verifies HSN classifications, checks declared values against reference databases, and confirms applicable duty rates. Any discrepancy triggers a customs query." },
          { title: "Duty Payment", desc: "Once assessed, the importer pays applicable duties through e-payment. The duty challan is linked to the BOE." },
          { title: "Examination (if applicable)", desc: "Yellow channel shipments undergo document verification. Red channel shipments undergo physical examination at the CFS or port warehouse." },
          { title: "Out of Charge", desc: "After assessment, duty payment, and examination (if required), the assessing officer issues an Out of Charge order, allowing the goods to be released from customs control." },
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

      <H2>Where AI Eliminates Bottlenecks in Customs Clearance</H2>
      <P>
        Not every step benefits equally from automation. The highest-impact automation targets are Steps 2, 3, 5, and 6 — the steps where data accuracy and processing speed directly determine clearance timelines.
      </P>

      <H3>Document Collection and Verification (Step 2)</H3>
      <P>
        AI systems can automatically parse incoming emails from importers, identify attached documents by type (invoice, packing list, BL, COO), and flag missing documents before the CHA begins BOE preparation. This eliminates the back-and-forth email chains that often delay the start of clearance processing by 24–48 hours.
      </P>

      <H3>Bill of Entry Preparation (Step 3)</H3>
      <P>
        This is where AI delivers the largest time savings. Instead of 2–4 hours of manual data entry per shipment, AI vision models extract line-item data from commercial invoices in under 60 seconds. The extracted data is normalized, HSN codes are validated against the Indian Customs Tariff, and duties are calculated automatically. Read our detailed guide on <Link href="/blog/automate-bill-of-entry-processing-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>automating Bill of Entry processing</Link>.
      </P>

      <H3>RMS Channel Prediction (Step 5)</H3>
      <P>
        While the RMS algorithm is proprietary to Indian Customs, experienced CHAs develop intuition about which filings trigger examination. AI systems can analyze historical filing data to identify patterns — specific product categories, importers, or trade lanes that consistently trigger Red or Yellow channels. This allows proactive preparation: having compliance certificates ready before assessment, or scheduling examination slots to minimize wait times.
      </P>

      <H3>Query Prevention (Step 6)</H3>
      <P>
        The most expensive bottleneck in customs clearance is not processing time — it is customs queries. A single query can delay clearance by 2–5 working days, costing ₹10,000–₹75,000 in detention and demurrage charges per container at Nhava Sheva. AI automation prevents queries by:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li>Validating HSN codes against the Indian Customs Tariff before filing</Li>
        <Li>Cross-checking declared values against NIDB (National Import Database) reference prices</Li>
        <Li>Ensuring all compliance certificates are attached and valid</Li>
        <Li>Flagging products subject to anti-dumping or safeguard duties</Li>
        <Li>Verifying FTA eligibility and correct preferential duty claims</Li>
      </ul>

      <H2>ICEGATE Integration: The Technical Reality</H2>
      <P>
        ICEGATE is India&apos;s customs electronic gateway, and any AI clearance system must work within its constraints. Key technical considerations:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>EDI format requirements:</strong> ICEGATE accepts BOE filings in specific EDI (Electronic Data Interchange) format with precise field lengths, numeric precision, and code structures</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Exchange rate compliance:</strong> Assessable values must use CBIC-notified exchange rates, not market rates. The applicable rate depends on the date of filing, not the invoice date</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Digital signatures:</strong> BOE filings require digital signature certificates (DSC) issued by authorized CAs. Automation systems must integrate with DSC hardware tokens</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Real-time status tracking:</strong> ICEGATE provides real-time BOE status updates that can be programmatically monitored for assessment completion, query generation, and Out of Charge status</Li>
      </ul>

      <H2>Green vs. Yellow vs. Red Channel: What AI Changes</H2>
      <P>
        Indian Customs uses a three-channel risk management system:
      </P>
      <div style={{ overflowX: "auto", margin: "0 0 32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(13px, 1.1vw, 15px)" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Channel</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Action</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Impact of AI Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Green", "Auto-cleared, no examination", "Accurate filing increases Green channel probability"],
              ["Yellow", "Document examination only", "Complete, pre-validated documentation speeds examination"],
              ["Red", "Physical + document examination", "Pre-prepared compliance certificates reduce examination time"],
            ].map(([ch, action, impact], i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={{ padding: "12px 16px", color: "#CBD5E1", fontWeight: 600 }}>{ch}</td>
                <td style={{ padding: "12px 16px", color: "#94A3B8" }}>{action}</td>
                <td style={{ padding: "12px 16px", color: "#6B8FA8" }}>{impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>Port-Specific Considerations Across India</H2>
      <P>
        Customs clearance timelines and procedures vary significantly across Indian ports:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>Nhava Sheva (JNPT):</strong> India&apos;s busiest container port. High volume means higher RMS scrutiny. Average clearance time: 3–5 days for Green channel, 5–8 days for Yellow/Red</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Mundra:</strong> Growing rapidly as an alternative to JNPT. Generally faster clearance but fewer CFS options</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Chennai:</strong> Key port for automotive and electronics imports. BIS certification checks are particularly stringent</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Air Cargo (Mumbai/Delhi):</strong> Faster clearance cycles but tighter documentation windows. Time-sensitive commodities require same-day BOE filing</Li>
      </ul>

      <P>
        AI customs clearance automation is not about replacing customs brokers — it is about removing the data entry burden that prevents them from applying their expertise where it matters most: classification decisions, compliance strategy, and client advisory. The firms that automate their clearance infrastructure now will process more shipments, generate fewer queries, and deliver faster clearance times than manual-first competitors.
      </P>
      <P>
        Learn more about <Link href="/blog/ai-for-customs-brokers-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>how AI is transforming customs brokerage in India</Link> or read the <Link href="/faq" style={{ color: "#6B8FA8", textDecoration: "underline" }}>FAQ</Link> for answers to common questions.
      </P>
    </div>
  );
}
