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
  title: "StrideShip | AI for Customs Brokers and Freight Forwarders in India",
  description:
    "StrideShip builds custom AI automation for Indian customs house agents and freight forwarders — automate Bill of Entry processing, RFQs, and documentation workflows. Based in Mumbai.",
  metadataBase: new URL("https://strideship.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "StrideShip | AI for Customs Brokers and Freight Forwarders in India",
    description:
      "StrideShip builds custom AI automation for Indian customs house agents and freight forwarders — automate Bill of Entry processing, RFQs, and documentation workflows. Based in Mumbai.",
    url: "https://strideship.dev",
    siteName: "StrideShip",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StrideShip — AI Automation for Indian Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StrideShip | AI for Customs Brokers and Freight Forwarders in India",
    description:
      "StrideShip builds custom AI automation for Indian customs house agents and freight forwarders — automate Bill of Entry processing, RFQs, and documentation workflows. Based in Mumbai.",
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070A" },
    { media: "(prefers-color-scheme: light)", color: "#05070A" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StrideShip",
  url: "https://strideship.dev",
  logo: "https://strideship.dev/og-image.png",
  description:
    "StrideShip builds custom AI automation systems for logistics operations — customs documentation, freight forwarding workflows, and operational intelligence for CHAs, freight forwarders, and 3PL providers in India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "ceo@strideship.dev",
    contactType: "sales",
  },
  sameAs: ["https://www.linkedin.com/company/strideship/"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
