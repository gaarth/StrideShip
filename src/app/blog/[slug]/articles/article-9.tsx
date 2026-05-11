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

export function Article9() {
  return (
    <div>
      <P>
        Every logistics firm considering automation asks the same question: &ldquo;What is the ROI?&rdquo; But most ROI calculations for logistics automation are incomplete. They count the obvious savings — reduced data entry time — and miss the compound effects: eliminated error costs, increased capacity without hiring, faster client turnaround, and the strategic value of operational data.
      </P>
      <P>
        This article provides a complete framework for calculating the true ROI of logistics automation in Indian operations, with real numbers from the industry.
      </P>

      <H2>The Four ROI Categories Most Firms Miss</H2>
      <P>
        A proper automation ROI calculation covers four categories, not one:
      </P>

      <H3>Category 1: Direct Labor Savings</H3>
      <P>
        This is the obvious number — hours of manual data entry eliminated, converted to salary equivalent. But even this simple calculation is often done wrong. You should not just count the hours saved on data entry. Count the total loaded cost of an operator:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>Base salary:</strong> ₹25,000–₹45,000/month for an experienced customs operator</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Benefits and overhead:</strong> PF, ESI, office space, equipment — typically adds 30–40% to base salary</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Training cost:</strong> 3–6 months at reduced productivity per new hire, plus senior staff time for mentoring</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Attrition replacement cost:</strong> Indian logistics has 15–25% annual attrition. Each departure costs 2–3 months of recruitment and training</Li>
      </ul>
      <P>
        Loaded cost per operator: ₹35,000–₹65,000/month. If automation replaces the data entry component of 2 operators, the direct saving is ₹70,000–₹1,30,000/month.
      </P>

      <H3>Category 2: Error Cost Elimination</H3>
      <P>
        This is the category that transforms the ROI from &ldquo;decent&rdquo; to &ldquo;obvious.&rdquo; Manual data entry errors at Indian ports have direct financial consequences:
      </P>
      <div style={{ overflowX: "auto", margin: "0 0 32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(13px, 1.1vw, 15px)" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Error Type</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Frequency (Manual)</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Cost Per Incident</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Monthly Cost (50 shipments)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["HSN misclassification", "3–5% of shipments", "₹15,000–₹50,000", "₹22,500–₹1,25,000"],
              ["Value declaration error", "2–3% of shipments", "₹10,000–₹30,000", "₹10,000–₹45,000"],
              ["Missing compliance cert", "1–2% of shipments", "₹5,000–₹25,000", "₹2,500–₹25,000"],
              ["Data transcription error", "5–8% of fields", "₹2,000–₹10,000", "₹5,000–₹40,000"],
            ].map(([error, freq, cost, monthly], i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={{ padding: "12px 16px", color: "#CBD5E1" }}>{error}</td>
                <td style={{ padding: "12px 16px", color: "#94A3B8" }}>{freq}</td>
                <td style={{ padding: "12px 16px", color: "#94A3B8" }}>{cost}</td>
                <td style={{ padding: "12px 16px", color: "#6B8FA8" }}>{monthly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <P>
        Total error cost for a CHA processing 50 shipments/month: ₹40,000–₹2,35,000/month. Automation reduces this by 80–95%.
      </P>

      <H3>Category 3: Capacity Expansion Without Hiring</H3>
      <P>
        This is the strategic ROI that most calculations miss entirely. When automation eliminates 5–6 hours of daily data entry per operator, those operators do not sit idle — they process more shipments. The capacity math:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li><strong style={{ color: "#CBD5E1" }}>Before automation:</strong> 1 operator = 10–15 shipments/month (data entry + review + coordination)</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>After automation:</strong> 1 operator = 40–60 shipments/month (review + coordination only)</Li>
        <Li><strong style={{ color: "#CBD5E1" }}>Team of 4:</strong> Capacity jumps from 50 shipments to 200+ without a single new hire</Li>
      </ul>
      <P>
        If each additional shipment generates ₹3,000–₹8,000 in CHA revenue, the capacity to process 150 additional shipments per month represents ₹4,50,000–₹12,00,000 in potential monthly revenue — using your existing team.
      </P>

      <H3>Category 4: Client Retention and Quality Premium</H3>
      <P>
        The hardest ROI to quantify, but often the largest. Faster clearance times and zero-error processing directly impact client satisfaction:
      </P>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
        <Li>Clients whose shipments clear on time, every time, do not seek alternative CHAs</Li>
        <Li>Zero-query processing builds a reputation that commands premium pricing</Li>
        <Li>Automated tracking and proactive communication reduces client support burden</Li>
        <Li>Operational data (clearance times, error rates, duty analytics) becomes a selling point for new client acquisition</Li>
      </ul>

      <H2>The Complete ROI Framework for Indian Logistics</H2>
      <P>
        Here is the complete monthly ROI calculation for a mid-sized Indian CHA processing 50 shipments per month with 4 operators:
      </P>
      <div style={{ overflowX: "auto", margin: "0 0 32px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(13px, 1.1vw, 15px)" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>ROI Category</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Conservative Estimate</th>
              <th style={{ textAlign: "left", padding: "12px 16px", color: "#F1F5F9" }}>Aggressive Estimate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Direct labor savings", "₹70,000", "₹1,30,000"],
              ["Error cost elimination", "₹32,000", "₹1,88,000"],
              ["Capacity expansion revenue", "₹4,50,000", "₹12,00,000"],
              ["Client retention value", "₹50,000", "₹2,00,000"],
              ["Total monthly ROI", "₹6,02,000", "₹17,18,000"],
            ].map(([cat, conservative, aggressive], i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", fontWeight: i === 4 ? 600 : 400 }}>
                <td style={{ padding: "12px 16px", color: i === 4 ? "#F1F5F9" : "#CBD5E1" }}>{cat}</td>
                <td style={{ padding: "12px 16px", color: i === 4 ? "#6B8FA8" : "#94A3B8" }}>{conservative}</td>
                <td style={{ padding: "12px 16px", color: "#6B8FA8" }}>{aggressive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>Common Objections and Reality Checks</H2>

      <H3>&ldquo;We are too small to automate&rdquo;</H3>
      <P>
        If you process more than 20 shipments per month, you are losing 40+ hours to manual data entry. That is a full-time employee&apos;s worth of productive capacity being consumed by typing. Automation does not require you to be a large firm — it requires you to have a repeatable process with enough volume to justify the investment.
      </P>

      <H3>&ldquo;Our documents are too messy for AI&rdquo;</H3>
      <P>
        This is the opposite of the truth. Messy, non-standard documents are exactly where AI delivers the highest ROI. A clean, standardized invoice can be processed quickly even by a junior operator. A non-standard invoice with mixed languages, handwritten notes, and unusual formatting is what causes manual processing to take 3+ hours. AI handles both with the same speed.
      </P>

      <H3>&ldquo;We tried OCR before and it did not work&rdquo;</H3>
      <P>
        Template-based OCR and modern AI extraction are fundamentally different technologies. OCR matches text patterns against predefined templates — it fails when the layout changes. AI vision models understand the semantic meaning of document content regardless of layout. If you tested OCR in 2020 and gave up, the technology has changed completely.
      </P>

      <P>
        The ROI of logistics automation is not speculative — it is calculable with your own operational data. The numbers above use industry benchmarks, but your specific ROI depends on your shipment volume, error rates, and current staffing costs. A 15-minute audit call with StrideShip will give you a specific, honest assessment for your operation.
      </P>
      <P>
        Understand the underlying problem: read about the <Link href="/blog/manual-entry-trap-logistics-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>Manual Entry Trap</Link> or see how <Link href="/blog/ai-for-customs-brokers-india" style={{ color: "#6B8FA8", textDecoration: "underline" }}>Indian CHAs are already automating</Link>.
      </P>
    </div>
  );
}
