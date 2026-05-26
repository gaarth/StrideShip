import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect with StrideShip | AI Customs & Logistics Automation",
  description:
    "Get in touch with StrideShip — explore our AI automation platform for Indian customs brokers and freight forwarders, or connect with us on LinkedIn.",
  alternates: {
    canonical: "/connect",
  },
  openGraph: {
    title: "Connect with StrideShip",
    description:
      "Explore StrideShip's AI automation for Indian customs and logistics, or connect with us on LinkedIn.",
    url: "https://strideship.dev/connect",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect with StrideShip",
    description:
      "AI automation for Indian customs brokers and freight forwarders.",
  },
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
