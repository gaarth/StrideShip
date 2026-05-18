import type { Metadata, Viewport } from "next";
import { Work_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-worksans",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: {
    default: "StrideShip | AI Customs Automation & Logistics Software for India",
    template: "%s | StrideShip",
  },
  description:
    "StrideShip builds custom AI automation for Indian customs brokers, freight forwarders, and logistics firms. Automate Bill of Entry processing, RFQ pipelines, shipment tracking, and customs documentation. Based in Mumbai.",
  keywords: [
    "AI for customs brokers",
    "customs automation India",
    "AI customs clearance",
    "customs broker automation",
    "AI for freight forwarding",
    "Bill of Entry automation",
    "ICEGATE automation",
    "customs house agent software",
    "logistics AI India",
    "import export automation software",
    "AI for CHA firms",
    "Indian customs AI platform",
    "customs document automation",
    "freight forwarding software India",
    "AI customs workflow software",
    "DGFT automation",
    "Indian trade compliance AI",
    "customs brokerage AI",
    "BOE automation India",
    "Nhava Sheva customs automation",
  ],
  metadataBase: new URL("https://strideship.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "StrideShip | AI Customs Automation & Logistics Software for India",
    description:
      "Custom AI automation for Indian customs brokers, freight forwarders, and logistics firms. Bill of Entry automation, RFQ processing, and shipment tracking. Mumbai-based.",
    url: "https://strideship.dev",
    siteName: "StrideShip",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StrideShip — AI Automation for Indian Customs & Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StrideShip | AI Customs Automation for India",
    description:
      "Custom AI automation for Indian customs brokers and freight forwarders. Bill of Entry automation, ICEGATE filing, shipment tracking.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification here when ready
    // google: "your-verification-code",
  },
  other: {
    "msvalidate.01": "", // Add Bing Webmaster Tools verification
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060B14" },
    { media: "(prefers-color-scheme: light)", color: "#060B14" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Organization schema — entity extraction for knowledge graph
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://strideship.dev/#organization",
  name: "StrideShip",
  url: "https://strideship.dev",
  logo: "https://strideship.dev/og-image.png",
  description:
    "StrideShip builds custom AI automation systems for logistics operations in India — customs documentation, freight forwarding workflows, Bill of Entry processing, and operational intelligence for CHAs, freight forwarders, and 3PL providers.",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "ceo@strideship.dev",
    contactType: "sales",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/company/strideship/",
  ],
  founder: [
    {
      "@type": "Person",
      name: "Gaarth Godbole",
      jobTitle: "Co-Founder and CEO",
      url: "https://strideship.dev/about",
    },
    {
      "@type": "Person",
      name: "Siddhant Vaidya",
      jobTitle: "Co-Founder and CTO",
      url: "https://strideship.dev/about",
    },
  ],
  knowsAbout: [
    "Customs Automation",
    "Bill of Entry Processing",
    "ICEGATE Filing",
    "Freight Forwarding",
    "Logistics AI",
    "Document Processing",
    "HSN Code Classification",
    "DGFT Compliance",
    "Indian Customs Tariff",
    "RFQ Automation",
  ],
};

// WebSite schema with SearchAction for sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://strideship.dev/#website",
  name: "StrideShip",
  url: "https://strideship.dev",
  description: "AI-powered customs and logistics automation for Indian businesses",
  publisher: { "@id": "https://strideship.dev/#organization" },
  inLanguage: "en-IN",
};

// BreadcrumbList for homepage
const homeBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://strideship.dev",
    },
  ],
};

import { SmoothScroll } from "@/components/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${workSans.variable} ${libreBaskerville.variable} antialiased dark`} style={{ fontFamily: "var(--font-worksans)" }}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cal.com" />
        {/* DNS prefetch for analytics/third-party */}
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        {/* Author and humans.txt reference */}
        <link rel="author" href="/humans.txt" />
        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* WebSite schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* BreadcrumbList schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumb) }}
        />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
