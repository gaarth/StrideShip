import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Demo with StrideShip",
  description:
    "Contact StrideShip to book a logistics automation demo. Reach our Mumbai team for customs broker AI, freight forwarding automation, and export partnership inquiries.",
  alternates: {
    canonical: "/connect",
  },
  openGraph: {
    title: "Contact Us | Book a Demo with StrideShip",
    description:
      "Contact StrideShip to book a logistics automation demo. Customs broker AI, freight forwarding automation, and export partnership inquiries.",
    url: "https://strideship.dev/connect",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Contact StrideShip",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Book a Demo with StrideShip",
    description:
      "Contact StrideShip to book a logistics automation demo for Indian customs and freight operations.",
    images: ["/og.png"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://strideship.dev/connect#contactpage",
  name: "Contact Us | StrideShip",
  url: "https://strideship.dev/connect",
  description:
    "Contact StrideShip to book a logistics automation demo for Indian customs brokers and freight forwarders.",
  isPartOf: { "@id": "https://strideship.dev/#website" },
  about: { "@id": "https://strideship.dev/#organization" },
  mainEntity: {
    "@type": "Organization",
    "@id": "https://strideship.dev/#organization",
    name: "StrideShip",
    email: "ceo@strideship.dev",
    url: "https://strideship.dev",
  },
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
