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

export function Article3() {
  return (
    <div>
      <P>
        Freight forwarding in India is a volume game with razor-thin margins. Your profitability depends on processing more shipments with fewer errors and faster turnaround. Yet most freight forwarders run their operations on the same infrastructure they used ten years ago: email threads, Excel spreadsheets, and manual data re-entry between disconnected systems.
      </P>
      <P>
        This article covers how AI automation addresses the three biggest operational bottlenecks in Indian freight forwarding: RFQ processing, documentation workflows, and shipment tracking. Each section includes a direct comparison between manual and automated approaches.
      </P>

      <H2>The Volume Problem in Freight Forwarding Ops</H2>
      <P>
        A typical mid-sized Indian freight forwarder handles 100–300 shipments per month across sea, air, and multimodal transport. Each shipment generates 8–15 documents that must be processed, cross-referenced, and filed. That is 800–4,500 documents per month flowing through your operations team.
      </P>
      <P>
        The operational reality at firms in Mumbai, Chennai, and Delhi looks the same: operators spend 60–70% of their working hours on data entry and document formatting. The remaining 30–40% is spent on the actual high-value work — negotiating rates, solving routing problems, managing exceptions, and building client relationships. This ratio is inverted from what it should be.
      </P>
      <P>
        The consequence is a growth ceiling. You cannot process more shipments without hiring more operators. You cannot hire fast enough to keep up with business development. And every new hire takes 3–6 months to train on your specific workflows. This is the <Link href="/blog/manual-entry-trap-logistics-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>Manual Entry Trap</Link> — and it caps your firm&apos;s growth regardless of market opportunity.
      </P>

      <H2>RFQ Processing Automation</H2>
      <P>
        Rate requests arrive as unstructured emails. A client sends: &ldquo;Need rates for 20 CBM general cargo, Shanghai to Nhava Sheva, CIF, need it by Friday.&rdquo; Your sales team opens the email, extracts the key parameters (origin, destination, volume, commodity, incoterms, deadline), checks their rate database, calculates the quote, formats it into your quote template, and sends the response. Time per RFQ: 15–30 minutes.
      </P>
      <P>
        When you receive 20–50 RFQs per day, that is 5–25 hours of daily sales team bandwidth consumed by data extraction and formatting — not selling.
      </P>

      <H3>How AI Automates RFQ Processing</H3>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li>Email parsing extracts key parameters from unstructured text — origin, destination, commodity type, weight, volume, service level, incoterms</Li>
        <Li>Structured parameters are matched against your rate database automatically</Li>
        <Li>Quote templates are populated with accurate pricing, transit times, and terms</Li>
        <Li>Multi-commodity and multi-modal requests are handled without splitting into separate workflows</Li>
        <Li>Response time drops from 15–30 minutes to under 2 minutes</Li>
        <Li>Win/loss tracking provides data on which trade lanes and price points convert</Li>
      </ul>

      <H2>Documentation Workflow Automation</H2>
      <P>
        The documentation chain in freight forwarding is long and interconnected. A single shipment requires coordination across commercial invoices, packing lists, bills of lading, shipping instructions, cargo manifests, dangerous goods declarations, certificates of origin, and insurance certificates. Each document must be consistent with the others — a mismatch between the invoice and the bill of lading triggers carrier disputes and customs delays.
      </P>

      <H3>Manual Process vs. Automated Process</H3>
      <div style={{ overflowX: "auto", margin: "0 0 32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(13px, 1.1vw, 15px)" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Workflow</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Manual Process</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Automated Process</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Invoice parsing", "60–90 min per invoice, typed manually", "30 seconds, AI extraction"],
              ["Packing list summary", "45–60 min for multi-page lists", "15 seconds, container-level auto-summary"],
              ["Shipping instruction creation", "30 min from booking confirmation", "Auto-generated from booking data"],
              ["BL verification", "20 min cross-checking against SI", "Auto-validated, discrepancies flagged"],
              ["Client status updates", "Manual email/WhatsApp per shipment", "Automated milestone notifications"],
              ["Exception handling", "Discovered when client calls", "Proactive alerts before client notices"],
              ["RFQ response", "15–30 min per request", "Under 2 minutes, auto-matched rates"],
            ].map(([workflow, manual, automated], i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={{ padding: "12px 16px", color: "#CBD5E1" }}>{workflow}</td>
                <td style={{ padding: "12px 16px", color: "#94A3B8" }}>{manual}</td>
                <td style={{ padding: "12px 16px", color: "#6B8FA8" }}>{automated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>Shipment Tracking Integration</H2>
      <P>
        Most freight forwarders track shipments across 5–15 different carrier platforms. Each carrier has its own tracking portal, its own milestone definitions, and its own notification system. Your operations team logs into each carrier portal individually, copies tracking updates, and pastes them into your internal system. For 100+ active shipments, this is a daily 2–3 hour task.
      </P>

      <H3>What Automated Tracking Looks Like</H3>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li>Multi-carrier tracking consolidated into a single dashboard — Maersk, MSC, CMA CGM, Hapag-Lloyd, ONE, Evergreen, and regional carriers</Li>
        <Li>Automated milestone extraction from carrier APIs and vessel tracking services</Li>
        <Li>Exception-based alerting: the system only surfaces shipments that need attention (delays, route changes, customs holds)</Li>
        <Li>Automated client notifications via email or WhatsApp when key milestones are reached</Li>
        <Li>Historical transit time analytics per trade lane for future quote accuracy</Li>
      </ul>

      <H2>Client Communication Automation</H2>
      <P>
        The most underappreciated time sink in freight forwarding is client communication. Your operations team spends 1–2 hours per day sending status updates, responding to &ldquo;where is my shipment?&rdquo; emails, and formatting weekly reports. This is pure overhead that automation eliminates entirely.
      </P>
      <P>
        StrideShip builds automated communication workflows that trigger milestone-based updates via email and WhatsApp. When a container is loaded, the client gets notified. When the vessel departs, the client gets notified. When the shipment arrives at the destination port, the client gets notified — with ETA, container number, and any action items. Your team only communicates when there is an exception to manage, not for routine updates.
      </P>

      <H2>The ROI Calculation for Freight Forwarding Automation</H2>
      <P>
        For a freight forwarder processing 150 shipments per month with a 4-person operations team:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>Hours saved on data entry:</strong> 120–180 hours/month</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Hours saved on tracking:</strong> 40–60 hours/month</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Hours saved on client communication:</strong> 30–40 hours/month</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Total hours recovered:</strong> 190–280 hours/month (equivalent to 1.2–1.8 full-time employees)</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Error reduction:</strong> 80–95% fewer data entry errors, directly reducing customs queries and carrier disputes</Li>
      </ul>
      <P>
        Those recovered hours do not disappear — they become available for revenue-generating activities: developing new trade lanes, onboarding new clients, and negotiating better carrier rates.
      </P>
      <P>
        Ready to see what automation looks like for your specific operation? Explore our <Link href="/faq" style={{ color: "#6B8FA8", textDecoration: "underline" }}>FAQ</Link> or read about <Link href="/blog/custom-house-agent-software-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>what to look for in logistics automation software</Link>.
      </P>
    </div>
  );
}
