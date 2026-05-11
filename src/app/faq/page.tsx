import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import type { Metadata } from "next";
import { FAQContent } from "./faq-content";

export const metadata: Metadata = {
  title: "FAQ | StrideShip — Logistics Automation Questions Answered",
  description:
    "Answers to common questions about customs house agent automation, Bill of Entry processing, freight forwarding AI, and logistics automation in India. By StrideShip, Mumbai.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | StrideShip — Logistics Automation Questions Answered",
    description:
      "Answers to common questions about customs house agent automation, Bill of Entry processing, freight forwarding AI, and logistics automation in India.",
    url: "https://strideship.dev/faq",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | StrideShip — Logistics Automation Questions Answered",
    description:
      "Answers to common questions about customs house agent automation, Bill of Entry processing, freight forwarding AI, and logistics automation in India.",
    images: ["/og-image.png"],
  },
};

const faqItems = [
  {
    q: "What is customs house agent automation?",
    a: "Customs house agent automation is the use of AI and software systems to replace the manual data entry, document processing, and workflow coordination that CHAs perform daily. In practice, this means automatically extracting line-item data from commercial invoices and packing lists, preparing Bill of Entry drafts, validating HSN codes against the Indian Customs Tariff, and formatting outputs for ICEGATE filing — all without a human typing a single value into a spreadsheet. For Indian CHAs processing 30–100+ shipments per month through ports like Nhava Sheva (JNPT), Mundra, or Chennai, automation eliminates the 2–4 hours of manual data entry per shipment that creates a hard ceiling on growth. StrideShip builds these systems as custom infrastructure — not generic software — designed specifically for the document formats, ERP systems, and compliance requirements that Indian customs operations deal with daily.",
  },
  {
    q: "How does AI help customs brokers process Bills of Entry?",
    a: "AI helps customs brokers process Bills of Entry by automating the extraction of structured data from unstructured commercial documents. When a customs broker receives a commercial invoice PDF, AI vision models (like Google Gemini) read the document and extract every line item — description, quantity, unit price, total value, country of origin, and HSN code — into a structured format. The system then normalizes this data, maps it to the correct BOE fields, validates HSN codes against the Indian Customs Tariff schedule, calculates applicable duties (BCD, IGST, SWS, CVD), and flags any compliance prerequisites like BIS certification or LMPC requirements. The result is a draft Bill of Entry that the broker reviews and approves rather than manually typing from scratch. StrideShip's systems achieve 99%+ extraction accuracy on standard commercial invoices and can process a complete BOE draft in under 60 seconds — compared to the 2–3 hours of manual preparation that most CHAs currently spend.",
  },
  {
    q: "What is BOE automation and how does it work in India?",
    a: "BOE automation refers to the end-to-end automation of Bill of Entry preparation for Indian customs clearance. In India, every import shipment requires a Bill of Entry filed through ICEGATE — the Indian Customs Electronic Gateway. Manual BOE preparation involves receiving a commercial invoice, manually typing each line item into a spreadsheet or ERP, looking up HSN codes, calculating duty rates, checking for compliance prerequisites, and formatting the data for ICEGATE submission. BOE automation replaces this entire chain. The system ingests the commercial invoice (PDF, email, or scanned document), uses AI to extract all line-item data, automatically maps HSN codes using the Indian Customs Tariff database, calculates BCD, IGST, compensation cess, and Social Welfare Surcharge, checks for applicable FTA benefits or duty exemptions, and outputs a complete, ICEGATE-ready Bill of Entry. For CHAs operating at Nhava Sheva, this reduces per-shipment processing time from hours to minutes while eliminating the human errors that cause customs queries and port detention charges.",
  },
  {
    q: "How does StrideShip automate freight forwarding documentation?",
    a: "StrideShip automates freight forwarding documentation by building custom systems that handle the entire document lifecycle — from the moment an email with a PDF attachment lands in your inbox to the moment structured data is in your ERP. For freight forwarders, this covers commercial invoices, packing lists, bills of lading, shipping instructions, cargo manifests, and house/master airway bills. Our systems parse these documents using AI vision models, extract every relevant field, normalize the data into your specific format requirements, and push it directly into your operational systems (Softlink, Logi-Sys, SAP, or Google Sheets). We also automate the creation of shipping instructions from booking confirmations, generate container-level packing summaries from multi-page packing lists, and build automated reconciliation between purchase orders and actual shipments. Each system is custom-built for your specific document formats and workflow requirements — not a template you have to adapt to.",
  },
  {
    q: "What manual processes in logistics can be automated with AI?",
    a: "Nearly every documentation and data-entry process in logistics can be automated with AI. The highest-impact processes include: commercial invoice data extraction and BOE preparation, packing list parsing and container-level summarization, RFQ processing and quote generation from unstructured email requests, shipping instruction creation from booking confirmations, HSN code classification and duty calculation, compliance prerequisite checking (BIS, LMPC, FSSAI, CDSCO), multi-carrier shipment tracking and milestone alerts, client communication workflows (automated WhatsApp and email updates), DGFT filing preparation and duty credit scrip tracking (RoDTEP, MEIS, DFIA), and operational dashboards with real-time KPIs. The key insight is that most logistics \"software\" on the market digitizes forms — it still requires humans to type data into fields. AI automation eliminates the typing entirely. Your team shifts from data entry to data review. At StrideShip, we typically start with the highest-volume, most error-prone process in your operation and expand from there.",
  },
  {
    q: "How long does it take to implement logistics automation?",
    a: "StrideShip's implementation follows a five-phase engagement: Audit Call (Week 1), Bottleneck Mapping (Weeks 1–2), System Design (Weeks 2–3), Deployment (Weeks 3–6), and Optimization (ongoing). A single-process automation — like commercial invoice extraction to BOE draft — typically goes live within 3–4 weeks from the initial audit call. More complex, multi-process systems involving ERP integration, compliance validation, and multi-carrier tracking take 6–8 weeks. The critical factor is not development time — it is understanding your specific document formats, edge cases, and workflow requirements. That is why we spend the first two weeks mapping your operations before writing any code. Every system is deployed with zero disruption to your running operations. Your team continues working normally while we build and test in parallel, then we cut over when the system is proven accurate on your actual documents.",
  },
  {
    q: "Does StrideShip work with existing ERP systems like Softlink or SAP?",
    a: "Yes. StrideShip is designed to integrate with your existing ERP and operational systems, not replace them. We work with Softlink Global, Logi-Sys, SAP, CargoWise, and any system that exposes an API or accepts structured data imports. Our typical integration pattern is: AI extracts and normalizes data from source documents, pushes it into a review layer (usually Google Sheets or a custom dashboard), and once approved by your team, automatically pushes the validated data into your ERP via API. This means your team continues using the ERP they know and trust — they just stop typing data into it manually. For systems without APIs, we use structured Excel/CSV exports formatted exactly to your ERP's import specification. The key principle is that StrideShip enhances your existing infrastructure. We provide the \"Logic Bridge\" between unstructured documents and your structured systems.",
  },
  {
    q: "What Indian ports and customs regulations does StrideShip support?",
    a: "StrideShip supports customs operations at every major Indian port — Nhava Sheva (JNPT), Mundra, Chennai, Kolkata, Visakhapatnam, Cochin, Tuticorin, ICD Tughlakabad, and air cargo complexes at Mumbai, Delhi, Bangalore, and Hyderabad. Our systems are built for the Indian regulatory environment: ICEGATE filing formats, Indian Customs Tariff HSN code classification, BCD/IGST/CVD/SWS duty calculations, DGFT licensing requirements, BIS certification prerequisites, LMPC compliance, FSSAI food import requirements, and CDSCO pharmaceutical import regulations. We also handle FTA benefit calculations under India's trade agreements (ASEAN, Japan CEPA, Korea CEPA, SAFTA) and duty credit scrip tracking under RoDTEP, SEIS, and DFIA schemes. Our founders are based in Mumbai and have direct operational knowledge of how customs clearance actually works at Indian ports — not theoretical knowledge from a manual.",
  },
  {
    q: "How accurate is AI-based document extraction for customs documents?",
    a: "StrideShip's extraction systems achieve 99%+ accuracy on standard commercial invoices and packing lists — measured by field-level correctness across description, quantity, unit price, total value, HSN code, and country of origin. For non-standard or heavily formatted documents (handwritten annotations, multi-currency invoices, combined invoice-packing-list formats), accuracy typically ranges from 95–98% on first pass, with the system flagging low-confidence fields for human review. The critical design principle is the Review-Only Workflow: our systems are built so that your team audits and approves extracted data rather than entering it from scratch. A 99% accurate extraction that takes 30 seconds to verify is dramatically more efficient than 100% manual entry that takes 2 hours and introduces human fatigue errors. We continuously train extraction models on your specific document formats, so accuracy improves over time as the system learns your suppliers' invoice layouts.",
  },
  {
    q: "What is the difference between a customs automation tool and a custom-built system?",
    a: "Off-the-shelf customs automation tools (like generic OCR software or template-based document processors) provide a fixed set of features designed for a broad audience. They work well for standardized documents but struggle with the messy reality of Indian logistics — non-standard invoice formats, mixed-language documents, complex multi-item packing lists, and ERP-specific output requirements. A custom-built system (what StrideShip delivers) is engineered specifically for your operations. We study your actual documents, your specific ERP format requirements, your compliance workflows, and your team's review process — then build a system that handles your exact edge cases. The practical difference: a generic tool might extract 80% of fields correctly and require manual correction for the rest. A custom-built system handles the formats you actually encounter, outputs data in your exact ERP format, and routes exceptions to the right person automatically. Custom-built does not mean expensive or slow. StrideShip delivers production-ready systems in 3–6 weeks.",
  },
  {
    q: "How does StrideShip handle data security for sensitive trade documents?",
    a: "StrideShip follows an Ephemeral Processing Model — we do not retain your trade documents or extracted data after processing is complete. Your commercial invoices, packing lists, and customs documents are processed in real-time and the structured output is delivered to your systems. Source documents are then flagged for deletion. We do not use your proprietary trade data, pricing, or client lists to train our AI models. Technically, our infrastructure is built on self-hosted servers (not shared cloud), with each client's data processed in isolated Docker containers. All data transfer uses SSL/TLS encryption. We use Cloudflare Tunnels for secure connectivity between your systems and our processing infrastructure. We comply with India's DPDP Act 2023 data protection requirements and our standard service agreement includes explicit data handling, retention, and deletion terms. For clients with heightened security requirements, we can deploy processing infrastructure within your own network.",
  },
  {
    q: "What is RFQ automation and how does it help freight forwarders?",
    a: "RFQ (Request for Quote) automation is a system that extracts data from incoming rate request emails, structures the requirements (origin, destination, commodity, weight, volume, service type, incoterms), matches them against your rate databases, and generates formatted quote responses — all without manual data entry. For freight forwarders handling 20–50+ RFQ emails per day, each requiring 15–30 minutes of manual processing, automation reduces response time from hours to minutes while eliminating transcription errors. StrideShip's RFQ automation systems handle unstructured email text (not just forms), multi-commodity requests, multi-modal quotes (sea + road, air + last-mile), and generate outputs formatted to your specific quote templates. The system also maintains a dynamic pricing engine with full audit trail, tracks win/loss rates per trade lane, and provides automated follow-up workflows. The result: your sales team responds faster, quotes more accurately, and spends time on relationship building instead of spreadsheet formatting.",
  },
  {
    q: "Can StrideShip automate DGFT filings and duty credit scrip tracking?",
    a: "Yes. StrideShip builds automation systems for DGFT (Directorate General of Foreign Trade) filing preparation and duty credit scrip portfolio management. This includes tracking your RoDTEP (Remission of Duties and Taxes on Exported Products) credit balances, DFIA (Duty Free Import Authorisation) utilization, and SEIS (Service Exports from India Scheme) scrip management. Our systems pull shipping bill data from ICEGATE, calculate applicable duty credits based on current rates and product-level eligibility, track scrip generation and utilization timelines, flag approaching expiry dates, and generate DGFT application-ready documentation. For exporters managing a portfolio of duty credit scrips across multiple product categories and trade partners, this replaces the manual tracking spreadsheets that frequently lead to missed deadlines and underutilized benefits. We also automate the reconciliation between shipping bills, bank realisation certificates, and DGFT applications — the most time-consuming part of the process.",
  },
  {
    q: "What does it cost to automate customs documentation in India?",
    a: "StrideShip operates on a monthly retainer model, not per-transaction pricing. The cost depends on the scope of automation — a single-process system (like commercial invoice extraction to BOE draft) has a different price point than a comprehensive multi-process automation covering invoices, packing lists, RFQs, tracking, and ERP integration. We structure pricing so that the monthly cost is always less than the salary of the manual data entry staff the automation replaces. For most CHAs and freight forwarders processing 30–100 shipments per month, automation pays for itself within the first month through reduced labor costs, eliminated error-related penalties (customs queries, port detention charges), and faster processing turnaround. Every engagement starts with a free 15-minute audit call where we assess your current workflow, estimate the hours of manual work that can be eliminated, and provide a transparent cost breakdown. No hidden fees, no long-term lock-in. If there is nothing meaningful to automate, we will tell you directly.",
  },
  {
    q: "How do I know if my logistics operations are ready for automation?",
    a: "Your operations are ready for automation if your team spends more than 2 hours per day on manual data entry — typing invoice data into spreadsheets, copying values between systems, or reformatting documents for ERP import. Specific indicators: you process more than 20 shipments per month, your team handles Bill of Entry preparation by manually typing from commercial invoices, you receive RFQ requests via email that require manual data extraction, your operators switch between more than 3 software tools to process a single shipment, or you have experienced customs queries or port detention charges caused by data entry errors. You do not need technical readiness — StrideShip handles all technical infrastructure. You do not need standardized documents — our systems are built specifically for the messy, non-standard formats that real logistics operations produce. The first step is a 15-minute audit call where we map your current workflow and identify the highest-impact automation opportunity. Book a call at cal.com/gaarth-godbole/audit-call.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <main style={{ position: "relative" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -1, background: "radial-gradient(ellipse at 50% 40%, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%)" }} />
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -2, backgroundColor: "#05070A" }} />

      <Navbar />

      <section style={{ padding: "clamp(120px, 15vw, 180px) 0 clamp(60px, 10vw, 100px)", position: "relative" }}>
        <div style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)", maxWidth: "1200px" }}>
          <header style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 72px)" }}>
            <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "#F1F5F9", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
              Frequently Asked{" "}<br />
              <span style={{ fontStyle: "italic", color: "#94A3B8" }}>Questions</span>
            </h1>
            <p style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", color: "#64748B", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              Everything you need to know about automating customs documentation, freight forwarding workflows, and logistics operations in India.
            </p>
          </header>

          <FAQContent items={faqItems} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
