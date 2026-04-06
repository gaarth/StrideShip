import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "About Us | Strideship",
  description: "The leadership, story, and core philosophy behind StrideShip.",
};

export default function AboutPage() {
  return (
    <main style={{ position: "relative" }}>
      {/* Locked screen background matching Home layout */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -1, background: "radial-gradient(ellipse at 50% 40%, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%)" }} />
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -2, backgroundColor: "#05070A" }} />

      <Navbar />

      <section style={{ padding: "clamp(120px, 15vw, 180px) 0 clamp(60px, 10vw, 100px)", position: "relative" }}>
        <div style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)", maxWidth: "1200px" }}>

          {/* Page Header */}
          <header style={{ textAlign: "center", marginBottom: "clamp(64px, 8vw, 96px)" }}>
            <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "#F1F5F9", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
              The Engine Behind <br />
              <span style={{ fontStyle: "italic", color: "#94A3B8" }}>Global Trade</span>
            </h1>
            <p style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", color: "#64748B", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              We're taking logistics off paper and transforming it into a high-precision, tech-first sector.
            </p>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(64px, 8vw, 96px)", maxWidth: "800px", margin: "0 auto" }}>

            {/* Leadership Section — single column, no cards, separated by a rule */}
            <section>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", color: "#E2E8F0", marginBottom: "48px", letterSpacing: "-0.02em" }}>
                The Leadership Team
              </h2>

              {/* Gaarth */}
              <div style={{ paddingBottom: "48px" }}>
                <h3 style={{ fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)", color: "#F1F5F9", marginBottom: "6px" }}>
                  Gaarth Godbole
                </h3>
                <p style={{ color: "#fefefeff", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "24px" }}>
                  Co-Founder & Chief Executive Officer
                </p>
                <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem" }}>
                  As the driving force behind StrideShip's mission, Gaarth Godbole leads the company's strategic vision and global client operations. Based in the heart of Mumbai's logistics hub, he specializes in identifying the systemic inefficiencies that prevent high-growth agencies and Customs House Agents from reaching their full scale.
                </p>
                <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginTop: "16px" }}>
                  Gaarth focuses on the macro-economic challenges of the supply chain, working closely with industry veterans to ensure StrideShip delivers a business engine that decouples a firm's revenue potential from its back-office headcount. His leadership is centered on transforming logistics from a labor-heavy industry into a high-precision, tech-first sector.
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(148,163,184,0.1)", marginBottom: "48px" }} />

              {/* Siddhant */}
              <div>
                <h3 style={{ fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)", color: "#F1F5F9", marginBottom: "6px" }}>
                  Siddhant Vaidya
                </h3>
                <p style={{ color: "#ffffffff", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "24px" }}>
                  Co-Founder & Chief Technical Officer
                </p>
                <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem" }}>
                  The architect of the StrideShip technical ecosystem, Siddhant Vaidya leads the development of the proprietary "Logic Layer" and automation infrastructure. He is responsible for the end-to-end technical roadmap, focusing on high-performance data extraction, secure multi-tenant architecture, and server-side reliability.
                </p>
                <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginTop: "16px" }}>
                  Siddhant's work ensures that the inherent chaos of global trade documentation—ranging from non-standardized PDFs to cluttered spreadsheets—is converted into 99.9% accurate, system-ready data. His mission is to build robust, scalable infrastructure that allows logistics firms to automate their most complex data pipelines without compromising on security or accuracy.
                </p>
              </div>
            </section>

            {/* The Story Section */}
            <section style={{ borderTop: "1px solid rgba(148,163,184,0.1)", paddingTop: "clamp(48px, 6vw, 72px)" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#F1F5F9", marginBottom: "24px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                The StrideShip Story <br />
                <span style={{ fontStyle: "italic", color: "#94A3B8" }}>Solving the Data Crisis</span>
              </h2>

              <h3 style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)", color: "#CBD5E1", margin: "40px 0 16px" }}>
                The Infrastructure of Information
              </h3>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "20px" }}>
                Logistics is the lifeblood of global commerce, yet the internal nervous system of the industry is often paralyzed by an overwhelming volume of unstructured data. While ships and aircraft move goods with increasing speed, the administrative backbone remains slowed down by a blizzard of Gmail threads, messy Excel attachments, and inconsistent documentation.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem" }}>
                StrideShip was established in Mumbai to solve the most persistent bottleneck in the supply chain: The Manual Entry Trap. We recognized that even the most successful freight forwarders and CHAs are forced to use their most talented operations experts as data entry clerks. When elite logistics professionals spend the majority of their day re-typing packing lists and invoices into an ERP, the business loses its ability to scale, innovate, and respond to market shifts.
              </p>

              <h3 style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)", color: "#CBD5E1", margin: "48px 0 16px" }}>
                Building for the Reality of Trade
              </h3>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "20px" }}>
                Most automation platforms fail because they are built for "clean" data environments that simply do not exist in international trade. They assume every invoice is formatted perfectly and every spreadsheet is standardized. In the real-world environment of Mumbai logistics—from the ports of Nhava Sheva to the offices of Ballard Estate—data is inherently messy.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem" }}>
                StrideShip is engineered specifically for this reality. We don't just "scrape" text; we understand the underlying logic of logistics. Our platform is designed to handle the "Khich-Khich"—the diverse global document formats, the project-specific packing lists, and the fragmented communication channels that define daily operations.
              </p>
            </section>

            {/* Core Philosophy */}
            <section style={{ borderTop: "1px solid rgba(148,163,184,0.1)", paddingTop: "clamp(48px, 6vw, 72px)" }}>
              <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", color: "#E2E8F0", marginBottom: "8px", letterSpacing: "-0.02em" }}>
                Our Core Philosophy
              </h2>
              <h3 style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)", color: "#94A3B8", marginBottom: "32px", fontStyle: "italic" }}>
                The "Review-Only" Workflow
              </h3>

              <h4 style={{ fontSize: "1rem", color: "#CBD5E1", marginBottom: "12px" }}>From Manual Input to Strategic Audit</h4>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "40px" }}>
                The core mission of StrideShip is to fundamentally redefine the role of the logistics operator. We are moving the industry toward a Review-Only Standard. In a traditional workflow, an operator receives a document and begins a grueling, multi-hour process of manual data entry. In a StrideShip-powered environment, that data is already waiting in the system.
              </p>

              <h4 style={{ fontSize: "1rem", color: "#CBD5E1", marginBottom: "24px" }}>Our Logic Layer handles the intensive heavy lifting:</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: "20px" }}>
                <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60A5FA", fontSize: "11px", marginTop: "3px" }}>✓</div>
                  <p style={{ margin: 0, color: "#94A3B8", lineHeight: 1.7 }}>
                    Ingestion & Extraction — Pulling precise line-item data from any unstructured source, whether it's a PDF invoice, a body-of-email text, or a cluttered Excel file.
                  </p>
                </li>
                <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60A5FA", fontSize: "11px", marginTop: "3px" }}>✓</div>
                  <p style={{ margin: 0, color: "#94A3B8", lineHeight: 1.7 }}>
                    Normalization — Automatically cleaning, re-formatting, and standardizing that data to match the specific requirements of your internal ERP or filing system.
                  </p>
                </li>
                <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60A5FA", fontSize: "11px", marginTop: "3px" }}>✓</div>
                  <p style={{ margin: 0, color: "#94A3B8", lineHeight: 1.7 }}>
                    Intelligent Validation — Running background checks on compliance prerequisites, HSN codes, and regulatory lists to ensure the data is accurate before it is ever filed.
                  </p>
                </li>
              </ul>

              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "1.05rem", fontStyle: "italic" }}>
                By shifting your team's responsibility from "Typing" to "Auditing," we reduce processing times from hours to mere seconds. This allows a lean, focused team to manage the shipment volume of a global enterprise without the typical operational drag.
              </p>
            </section>

            {/* The Advantage */}
            <section style={{ borderTop: "1px solid rgba(148,163,184,0.1)", paddingTop: "clamp(48px, 6vw, 72px)" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", color: "#F1F5F9", marginBottom: "48px", letterSpacing: "-0.02em" }}>
                The StrideShip Advantage
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Scalability Without Friction
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Our infrastructure is built to let your firm grow. You can double your tonnage and increase your shipment throughput without the need to hire, train, or manage additional staff for manual data entry.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Legacy System Preservation
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    We believe in enhancing what works. StrideShip does not require you to replace your trusted ERPs or abandon your decades of established expertise. We provide the "Logic Bridge" that makes your existing systems 10x more powerful.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "#CBD5E1", marginBottom: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#60A5FA" }}>✦</span> Risk Mitigation & Accuracy
                  </h4>
                  <p style={{ color: "#94A3B8", lineHeight: 1.7, fontSize: "1.05rem", paddingLeft: "30px" }}>
                    Manual entry is the single largest source of expensive errors—the typos and mismatches that lead to customs queries, port detention, and lost client trust. StrideShip removes human fatigue from the equation, ensuring your data is right the first time, every time.
                  </p>
                </div>
              </div>
            </section>

            {/* Closing statement */}
            <div style={{ textAlign: "center", padding: "clamp(40px, 6vw, 80px) 0" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F1F5F9", letterSpacing: "-0.02em", fontStyle: "italic" }}>
                Stop reading, start scaling.
              </h2>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
