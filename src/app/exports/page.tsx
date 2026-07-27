import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ExportsHero } from "@/components/exports/exports-hero";
import { ExportsModel } from "@/components/exports/exports-model";
import { ExportsCategories } from "@/components/exports/exports-categories";
import { ExportsInquiryForm } from "@/components/exports/exports-inquiry-form";

export const metadata: Metadata = {
  title: "StrideShip Exports | Indian Manufacturer Joint Venture & Sourcing Partner",
  description:
    "StrideShip Exports connects vetted Indian manufacturers with international buyers through structured joint-venture partnerships. Dedicated export sales execution, compliance, FSSAI/APEDA certification, and trade logistics.",
  keywords: [
    "India export joint venture partner",
    "Indian manufacturer export partnership",
    "sourcing partner India",
    "Indian spices exporter JV",
    "superfoods sourcing India",
    "essential oils export India",
    "APEDA certified exporter",
    "FSSAI food export partner",
    "Indian trade execution company",
    "B2B export JV India",
  ],
  alternates: {
    canonical: "https://strideship.dev/exports",
  },
  openGraph: {
    title: "StrideShip Exports | Joint-Venture Export & Sourcing Partner India",
    description:
      "Connecting Indian manufacturers with vetted international buyers through execution-focused joint ventures. Export sales, compliance, and logistics.",
    url: "https://strideship.dev/exports",
    siteName: "StrideShip Exports",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StrideShip Exports - Indian Manufacturer JV & Sourcing Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StrideShip Exports | Indian Export JV & Sourcing Partner",
    description:
      "Structured joint-venture export partnerships connecting Indian manufacturers with international buyers. Fully managed sales, compliance, and logistics.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Service Schema for StrideShip Exports
const exportsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://strideship.dev/exports#service",
  name: "StrideShip Joint Venture Export Partnerships",
  provider: {
    "@type": "Organization",
    name: "StrideShip Exports",
    url: "https://strideship.dev/exports",
    parentOrganization: {
      "@type": "Organization",
      name: "StrideShip",
      url: "https://strideship.dev",
    },
  },
  description:
    "Structured joint-venture export partnerships connecting vetted Indian manufacturers in Superfoods, Spices, Essential Oils, and Leather Goods with international importers. End-to-end sales execution, APEDA/Spices Board compliance, and trade logistics.",
  areaServed: ["Worldwide", "India", "United States", "European Union", "UAE", "United Kingdom"],
  serviceType: "Joint Venture Export Execution & International Sourcing",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Export Categories Portfolio",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Superfoods & Health Ingredients Sourcing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spices & Agri Export Partnerships" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Essential Oils & Botanical Extracts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Natural Sweeteners Sourcing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leather Goods & Industrial Wear Export" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://strideship.dev",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Exports JV",
      item: "https://strideship.dev/exports",
    },
  ],
};

export default function ExportsPage() {
  return (
    <main
      style={{
        position: "relative",
        backgroundColor: "#F5F4F0", // Raft warm off-white cream background
        color: "#0F172A",
        minHeight: "100vh",
      }}
    >
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(exportsServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="StrideShip Exports | Indian Manufacturer JV & Sourcing Partner" />
        <meta
          itemProp="description"
          content="Structured export joint-venture partnerships connecting Indian manufacturers with international buyers."
        />
        <meta itemProp="url" content="https://strideship.dev/exports" />

        <ExportsHero />
        <ExportsModel />
        <ExportsCategories />
        <ExportsInquiryForm />
      </article>

      <Footer />
    </main>
  );
}
