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

export function Article10() {
  return (
    <div>
      <P>
        Nhava Sheva (JNPT) handles over 50% of India&apos;s containerized cargo. If you are a customs house agent or freight forwarder operating at JNPT, your operational challenges are different from CHAs at other Indian ports — higher volumes, stricter RMS scrutiny, more complex CFS logistics, and tighter clearance windows driven by shipping line free-time policies.
      </P>
      <P>
        This guide covers the specific operational realities of customs clearance at Nhava Sheva and how automation addresses port-specific challenges that generic customs software does not account for.
      </P>

      <H2>Nhava Sheva by the Numbers</H2>
      <div style={{ overflowX: "auto", margin: "0 0 32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(13px, 1.1vw, 15px)" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Metric</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Annual TEU throughput", "~5.5 million TEUs"],
              ["Share of India's container cargo", "~52%"],
              ["Number of active CFS facilities", "50+"],
              ["Average import clearance time (Green)", "3–4 days"],
              ["Average import clearance time (Red)", "6–10 days"],
              ["Container detention charges", "₹3,000–₹15,000/day"],
              ["CFS ground rent", "₹1,500–₹5,000/day"],
              ["Shipping line free time (import)", "3–7 days from vessel discharge"],
              ["Active registered CHAs", "2,500+"],
            ].map(([metric, value], i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={{ padding: "12px 16px", color: "#CBD5E1" }}>{metric}</td>
                <td style={{ padding: "12px 16px", color: "#6B8FA8" }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>JNPT-Specific Challenges for CHAs</H2>

      <H3>1. Volume Pressure and Free-Time Windows</H3>
      <P>
        Shipping lines at JNPT offer 3–7 days of free time from vessel discharge. After free time expires, detention charges begin accumulating at ₹3,000–₹15,000 per day per container (depending on the line and container type). For a CHA clearing 50+ shipments per month, even a 1-day average delay across all shipments costs ₹1,50,000–₹7,50,000 per month in detention charges that eat into client margins and CHA reputation.
      </P>
      <P>
        The operational implication: BOE preparation cannot wait. Every hour spent on manual data entry is an hour closer to detention charges. Automation that reduces BOE preparation from 3 hours to 15 minutes creates a 2.75-hour buffer per shipment — the difference between clearing within free time and paying detention.
      </P>

      <H3>2. CFS Complexity</H3>
      <P>
        JNPT has 50+ Container Freight Stations, each with different operating hours, examination procedures, and ground rent structures. A CHA operating across multiple CFS facilities must coordinate document submission, examination scheduling, and cargo movement across different locations. Automated tracking systems that monitor container status across multiple CFS facilities and alert operators to examination schedules are not a luxury at JNPT — they are operational necessities.
      </P>

      <H3>3. Higher RMS Scrutiny</H3>
      <P>
        JNPT&apos;s high volume means the Risk Management System processes a larger dataset of filings, resulting in more refined risk profiling. Products that clear Green channel at smaller ports may trigger Yellow or Red at JNPT due to higher baseline risk scores. This makes filing accuracy even more critical — a single classification error is more likely to trigger examination at JNPT than at a lower-volume port.
      </P>

      <H3>4. Multi-Consignment Operations</H3>
      <P>
        JNPT handles a high proportion of LCL (Less than Container Load) shipments, which means a single container may contain cargo for 5–15 different consignees, each requiring their own Bill of Entry. Manual processing of multi-consignment containers is extremely time-intensive — the CHA must prepare separate BOEs for each consignee from the same container&apos;s documentation. AI automation that parses a master packing list and automatically splits data by consignee transforms a day-long task into a one-hour review.
      </P>

      <H2>Common Commodities at JNPT and Their Automation Challenges</H2>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>Electronics and IT hardware:</strong> BIS certification mandatory for a growing list of products. The BIS list is updated frequently — manual compliance checking risks missing newly-added products</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Textiles and garments:</strong> Complex HSN classification with multiple sub-headings for different fiber compositions. Duty rates vary significantly between natural and synthetic fibers</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Machinery and capital goods:</strong> Often imported under EPCG (Export Promotion Capital Goods) scheme with conditional duty exemptions that require specific declaration formats</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Chemicals and plastics:</strong> Subject to anti-dumping duties that change frequently. Also requires chemical-specific import permits and hazmat documentation</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Food products:</strong> FSSAI registration mandatory. Import permits required for specific categories. Shelf life requirements must be verified at CFS</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Auto components:</strong> Complex HSN classification based on vehicle application. BIS certification increasingly required for safety-critical components</Li>
      </ul>

      <H2>What JNPT-Specific Automation Looks Like</H2>
      <P>
        Generic customs automation tools are built for a &ldquo;standard&rdquo; customs workflow. JNPT operations require automation that accounts for port-specific realities:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>Free-time countdown alerts:</strong> Automated tracking of vessel discharge date against shipping line free-time policies, with escalation alerts as the deadline approaches</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Multi-CFS coordination:</strong> Dashboard view of container status across all active CFS facilities with examination scheduling integration</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>LCL consignment splitting:</strong> Automatic parsing of master documentation into consignee-specific BOE datasets</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>BIS/LMPC live-list checking:</strong> Automated verification against the current BIS mandatory certification list (which is updated frequently and catches CHAs who rely on outdated reference lists)</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Detention cost forecasting:</strong> Real-time calculation of projected detention charges based on current clearance status and estimated remaining processing time</Li>
      </ul>

      <H2>Case Pattern: The Cost of 1 Day at JNPT</H2>
      <P>
        For a mid-sized CHA processing 60 import shipments per month at JNPT, consider the impact of saving just 1 day of average clearance time across all shipments:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li>Detention savings: 60 containers × ₹8,000/day average = ₹4,80,000/month</Li>
        <Li>CFS ground rent savings: 60 containers × ₹3,000/day = ₹1,80,000/month</Li>
        <Li>Total savings from 1-day improvement: ₹6,60,000/month</Li>
      </ul>
      <P>
        That single-day improvement — achieved through faster BOE preparation, fewer customs queries, and proactive CFS coordination — pays for a comprehensive automation system many times over.
      </P>

      <P>
        Nhava Sheva is the most demanding operating environment in Indian customs clearance. The firms that automate their JNPT operations will process more containers within free-time windows, generate fewer queries from the high-scrutiny RMS, and handle multi-consignment LCL shipments without proportional headcount increases.
      </P>
      <P>
        Read how <Link href="/blog/ai-for-customs-clearance-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>AI is automating customs clearance across India</Link> or see the <Link href="/blog/logistics-automation-roi-calculator" style={{ color: "#6B8FA8", textDecoration: "underline" }}>complete ROI framework</Link> for logistics automation.
      </P>
    </div>
  );
}
