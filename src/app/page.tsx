import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/sections/footer";

/* Below-the-fold sections: split Framer Motion out of the critical path.
   SSR stays on so HTML/content is unchanged — only hydration JS is deferred. */
const CostOfManual = dynamic(
  () => import("@/components/sections/cost-of-manual").then((m) => ({ default: m.CostOfManual }))
);
const Problem = dynamic(
  () => import("@/components/sections/problem").then((m) => ({ default: m.Problem }))
);
const Capabilities = dynamic(
  () => import("@/components/sections/capabilities").then((m) => ({ default: m.Capabilities }))
);
const Process = dynamic(
  () => import("@/components/sections/process").then((m) => ({ default: m.Process }))
);
const Positioning = dynamic(
  () => import("@/components/sections/positioning").then((m) => ({ default: m.Positioning }))
);
const WhoWeHelp = dynamic(
  () => import("@/components/sections/who-we-help").then((m) => ({ default: m.WhoWeHelp }))
);
const BeforeAfter = dynamic(
  () => import("@/components/sections/before-after").then((m) => ({ default: m.BeforeAfter }))
);
const UseCases = dynamic(
  () => import("@/components/sections/use-cases").then((m) => ({ default: m.UseCases }))
);
const CTA = dynamic(
  () => import("@/components/sections/cta").then((m) => ({ default: m.CTA }))
);

export const metadata: Metadata = {
  title: "StrideShip | AI Customs Automation & Logistics Software for India",
  description:
    "StrideShip builds custom AI automation for Indian customs brokers, freight forwarders, and logistics firms. Automate Bill of Entry processing, RFQ pipelines, ICEGATE filing, and customs documentation workflows. Based in Mumbai.",
  alternates: {
    canonical: "/",
  },
};

// Service schemas with @id references for entity linking
const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://strideship.dev/#document-processing",
    name: "AI Document Processing & Customs Automation",
    provider: { "@id": "https://strideship.dev/#organization" },
    description:
      "AI-powered parsing of PDF invoices, packing lists, and customs documents into structured Excel and ERP-ready data. Includes Bill of Entry automation, BOE processing, HSN code validation, and ICEGATE filing preparation for Indian customs operations.",
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Customs Document Automation",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Document Automation Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bill of Entry Automation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Invoice Parsing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "HSN Code Classification" } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://strideship.dev/#rfq-automation",
    name: "RFQ & Quote Automation for Freight Forwarders",
    provider: { "@id": "https://strideship.dev/#organization" },
    description:
      "AI-powered automation of freight forwarding RFQ processing - extract data from unstructured emails, generate accurate quotes instantly, and structure outputs into formatted Excel files with full audit trail.",
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Freight Forwarding Automation",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://strideship.dev/#shipment-tracking",
    name: "AI Shipment Tracking Systems",
    provider: { "@id": "https://strideship.dev/#organization" },
    description:
      "End-to-end multi-carrier shipment tracking in a unified dashboard with automated milestone alerts, exception-based delay detection, and full searchable audit logs for Indian logistics operations.",
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Logistics Technology",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://strideship.dev/#operations-dashboards",
    name: "Real-Time Operations Dashboards",
    provider: { "@id": "https://strideship.dev/#organization" },
    description:
      "Real-time operational dashboards with live KPIs, team performance visibility, automated daily/weekly reporting, and custom views for leadership, ops, and client teams in logistics firms.",
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Business Intelligence for Logistics",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How StrideShip Automates Your Logistics Operations",
  description:
    "A five-phase engagement to replace manual logistics workflows with custom AI automation - from audit call to full deployment in 3–6 weeks.",
  totalTime: "P42D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit Call",
      text: "A 15-minute live breakdown of how your operations actually run. Map every manual touchpoint and identify where time and money leak.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Bottleneck Mapping",
      text: "Full operational map of your business - every manual touchpoint, every system gap, every handoff delay. Prioritized list of time and cost leakages with estimated impact.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "System Design",
      text: "Custom automation architecture built for your exact workflows, data flows, and team structure. Complete system blueprint before any code is written.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Deployment",
      text: "System built, tested, and integrated into live operations with zero disruption. Your team keeps moving while the infrastructure is deployed.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Optimization",
      text: "Continuous KPI monitoring, automation refinement, and system expansion as your operation evolves.",
    },
  ],
};

// SoftwareApplication schema for AI discoverability
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "StrideShip Logistics Automation Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Custom AI-powered automation platform for Indian customs brokers, freight forwarders, and logistics firms. Features Bill of Entry automation, document processing, RFQ automation, and shipment tracking.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free 15-minute audit call. Monthly retainer pricing based on scope.",
  },
  provider: { "@id": "https://strideship.dev/#organization" },
  featureList: [
    "Bill of Entry Automation",
    "ICEGATE Filing Preparation",
    "Commercial Invoice Parsing",
    "HSN Code Classification",
    "RFQ Processing",
    "Multi-Carrier Shipment Tracking",
    "Real-Time Operations Dashboards",
    "ERP Integration (Softlink, SAP, Logi-Sys)",
    "DGFT Filing Automation",
    "Duty Credit Scrip Tracking",
  ],
};

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      {/* JSON-LD: Service schemas */}
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* JSON-LD: HowTo schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {/* JSON-LD: SoftwareApplication schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Core Raft light warm background */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: -2,
          backgroundColor: "#F5F4F0",
        }}
      />
      
      <Navbar />

      {/* Semantic article wrapper for AI crawlers - visible content with entity-rich structure */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="StrideShip - AI Customs Automation & Logistics Software for India" />
        <meta itemProp="description" content="Custom AI automation for Indian customs brokers, freight forwarders, and logistics firms. Bill of Entry automation, ICEGATE filing, RFQ processing, and shipment tracking." />
        <meta itemProp="url" content="https://strideship.dev" />
        
        <Hero />
        <CostOfManual />
        <Problem />
        <Capabilities />
        <Process />
        <Positioning />
        <WhoWeHelp />
        <BeforeAfter />
        <UseCases />
        <CTA />
      </article>

      <Footer />
    </main>
  );
}
