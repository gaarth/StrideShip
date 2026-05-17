import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { CostOfManual } from "@/components/sections/cost-of-manual";
import { Problem } from "@/components/sections/problem";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { Positioning } from "@/components/sections/positioning";
import { WhoWeHelp } from "@/components/sections/who-we-help";
import { BeforeAfter } from "@/components/sections/before-after";
import { UseCases } from "@/components/sections/use-cases";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Document Processing and Automation",
    provider: { "@type": "Organization", name: "StrideShip" },
    description:
      "Automated parsing of PDF invoices, packing lists, and customs documents into structured Excel and ERP-ready data for Indian customs and logistics operations. Includes AI-powered Bill of Entry automation and BOE processing.",
    areaServed: "IN",
    serviceType: "Logistics Automation",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "RFQ and Quote Automation",
    provider: { "@type": "Organization", name: "StrideShip" },
    description:
      "AI-powered automation of freight forwarding RFQ processing — extract data from unstructured emails, generate accurate quotes, and structure outputs into formatted Excel files.",
    areaServed: "IN",
    serviceType: "Logistics Automation",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Shipment Tracking Systems",
    provider: { "@type": "Organization", name: "StrideShip" },
    description:
      "End-to-end shipment tracking across multiple carriers in a unified dashboard with automated milestone alerts, exception-based delay alerting, and full audit logs.",
    areaServed: "IN",
    serviceType: "Logistics Automation",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Operations Dashboards",
    provider: { "@type": "Organization", name: "StrideShip" },
    description:
      "Real-time operational dashboards with live KPIs, team performance visibility, automated reporting, and custom views for leadership, ops, and client teams.",
    areaServed: "IN",
    serviceType: "Logistics Automation",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How StrideShip Automates Your Logistics Operations",
  description:
    "A five-phase engagement to replace manual logistics workflows with intelligent automation.",
  step: [
    {
      "@type": "HowToStep",
      name: "Audit Call",
      text: "A live breakdown of how your operations actually run.",
    },
    {
      "@type": "HowToStep",
      name: "Bottleneck Mapping",
      text: "Every manual step, every tool switch, quantified.",
    },
    {
      "@type": "HowToStep",
      name: "System Design",
      text: "Custom architecture built for your specific workflows.",
    },
    {
      "@type": "HowToStep",
      name: "Deployment",
      text: "Built and integrated with zero operational disruption.",
    },
    {
      "@type": "HowToStep",
      name: "Optimization",
      text: "Continuous refinement as your scale grows.",
    },
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

      {/* 
        Locked screen gradient for a global blue wash effect.
        By setting fixed, it acts as a permanent ambient light behind the glassy cards.
      */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: -1,
          background: "radial-gradient(ellipse at 50% 40%, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%)",
        }}
      />
      
      {/* Core dark background */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: -2,
          backgroundColor: "#05070A",
        }}
      />
      
      <Navbar />
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
      <Footer />
    </main>
  );
}
