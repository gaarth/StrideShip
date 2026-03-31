import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Strideship — Custom Operational Systems for Global Trade",
  description:
    "We automate the manual infrastructure of global trade. From RFQs to shipment workflows, custom-built systems that eliminate operational friction.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} antialiased dark`}>
      <body>{children}</body>
    </html>
  );
}
