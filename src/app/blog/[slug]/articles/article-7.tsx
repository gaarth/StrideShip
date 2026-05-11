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

export function Article7() {
  return (
    <div>
      <P>
        HSN code misclassification is the single most expensive error in Indian customs clearance. A wrong code does not just trigger a customs query — it can result in excess duty payment, penalty proceedings under Section 28 of the Customs Act, and in extreme cases, allegations of willful misdeclaration under Section 114A. For CHAs processing dozens of shipments per month, HSN classification errors are a ticking time bomb.
      </P>
      <P>
        This article explains how the Indian HSN system works, why misclassification is so common, the real financial cost of errors, and how AI-based classification systems prevent them.
      </P>

      <H2>How the Indian HSN System Works</H2>
      <P>
        India uses the Harmonized System Nomenclature (HSN) — an internationally standardized system maintained by the World Customs Organization (WCO). The Indian Customs Tariff extends the international 6-digit HS code to 8 digits with India-specific sub-headings:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>Digits 1–2:</strong> Chapter (e.g., 73 = Articles of iron or steel)</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Digits 3–4:</strong> Heading (e.g., 7318 = Screws, bolts, nuts, washers)</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Digits 5–6:</strong> Sub-heading (e.g., 7318.15 = Other screws and bolts)</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Digits 7–8:</strong> Indian tariff item (e.g., 7318.15.00 = specific Indian classification)</Li>
      </ul>
      <P>
        The 8-digit Indian HSN determines the applicable BCD (Basic Customs Duty) rate, IGST rate, and any product-specific duties (anti-dumping, safeguard, compensation cess). A single digit difference can mean a BCD rate of 0% versus 15% — on a ₹50 lakh shipment, that is ₹7.5 lakh in duty difference.
      </P>

      <H2>Why Misclassification Is So Common</H2>

      <H3>The Supplier Code Problem</H3>
      <P>
        Foreign suppliers print HS codes on their commercial invoices based on their home country&apos;s tariff schedule. A Chinese supplier&apos;s 10-digit HS code does not directly map to the Indian 8-digit HSN. The first 6 digits are usually compatible (both follow WCO nomenclature), but the India-specific 7th and 8th digits may differ. CHAs who simply copy the supplier&apos;s code without verification risk filing with an incorrect Indian HSN.
      </P>

      <H3>Product Complexity</H3>
      <P>
        Many products do not fit neatly into a single HSN heading. A &ldquo;stainless steel kitchen organizer with plastic compartments&rdquo; could be classified under Chapter 73 (iron/steel articles), Chapter 39 (plastic articles), or Chapter 94 (furniture). The correct classification depends on the &ldquo;essential character&rdquo; of the product under the General Rules of Interpretation (GRI) — a judgment call that even experienced customs officers disagree on.
      </P>

      <H3>Tariff Amendments</H3>
      <P>
        The Indian Customs Tariff is amended multiple times per year through Budget notifications, Trade Facilitation notifications, and anti-dumping duty orders. A CHAs using outdated tariff data may classify correctly based on last quarter&apos;s rates but incorrectly under current notifications.
      </P>

      <H2>The Real Cost of HSN Errors at Indian Ports</H2>
      <div style={{ overflowX: "auto", margin: "0 0 32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(13px, 1.1vw, 15px)" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Consequence</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Typical Cost</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Timeline Impact</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Customs query on classification", "₹5,000–₹15,000 in staff time", "+2–5 working days"],
              ["Port detention during query", "₹3,000–₹15,000/day per container", "Duration of query"],
              ["Differential duty demand", "Varies — can be lakhs on high-value goods", "+5–15 working days"],
              ["Section 28 demand notice", "Duty + interest (15% p.a.) + penalty (25–100%)", "+3–12 months"],
              ["Section 114A misdeclaration", "Penalty equal to short-levied duty", "Legal proceedings"],
              ["SVB investigation (value-related)", "Provisional assessment + Extra Duty Deposit", "+30–90 days"],
            ].map(([consequence, cost, timeline], i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={{ padding: "12px 16px", color: "#CBD5E1" }}>{consequence}</td>
                <td style={{ padding: "12px 16px", color: "#94A3B8" }}>{cost}</td>
                <td style={{ padding: "12px 16px", color: "#6B8FA8" }}>{timeline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>How AI Validates HSN Codes</H2>
      <P>
        AI-based HSN validation works in three layers — and each layer catches errors that the previous one misses:
      </P>

      <H3>Layer 1: Supplier Code Cross-Reference</H3>
      <P>
        The system extracts the HS code printed on the supplier&apos;s invoice and maps it to the equivalent Indian 8-digit HSN. If the first 6 digits match a valid Indian heading but the 7th–8th digits do not correspond to an active tariff item, the system flags it for review.
      </P>

      <H3>Layer 2: Description-Based Classification</H3>
      <P>
        The AI reads the product description from the commercial invoice and independently classifies the product using the Indian Customs Tariff schedule. If this classification differs from the supplier-stated code, the system flags the discrepancy and presents both options to the operator with reasoning.
      </P>

      <H3>Layer 3: Historical Pattern Matching</H3>
      <P>
        For products that the CHA has imported previously, the system compares the current classification against historical filings. If the same product was classified differently in a previous shipment, the system flags the inconsistency — preventing the scenario where the same product is filed under different HSN codes in different BOEs (a pattern that triggers RMS alerts).
      </P>

      <H2>FTA Benefits: The Hidden Cost of Wrong HSN Codes</H2>
      <P>
        Incorrect HSN classification does not just increase duty liability — it can also prevent claiming legitimate FTA (Free Trade Agreement) preferences. India has preferential trade agreements with ASEAN, Japan (CEPA), South Korea (CEPA), and several other trading partners. FTA benefits are claimed at the 8-digit HSN level, and an incorrect classification can mean:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li>Missing a preferential BCD rate (e.g., 0% instead of 10%) because the filed HSN is not covered by the FTA notification</Li>
        <Li>Having FTA benefits rejected at assessment because the HSN does not match the product description in the Certificate of Origin</Li>
        <Li>Overpaying duty on hundreds of shipments before the error is discovered</Li>
      </ul>
      <P>
        AI systems check FTA eligibility for every line item based on the validated HSN code, country of origin, and applicable trade agreement — ensuring your clients claim every legitimate duty reduction they are entitled to.
      </P>

      <P>
        HSN classification accuracy is not a minor operational detail — it is the foundation of correct customs clearance in India. Every duty calculation, every compliance check, every FTA benefit claim depends on having the right HSN code. AI validation eliminates the classification errors that cost Indian CHAs lakhs in penalties, detention charges, and lost client trust.
      </P>
      <P>
        Read more about how <Link href="/blog/ai-for-customs-clearance-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>AI is transforming customs clearance</Link> or see our <Link href="/blog/automate-bill-of-entry-processing-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>complete BOE automation guide</Link>.
      </P>
    </div>
  );
}
