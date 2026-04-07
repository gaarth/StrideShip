import type { Metadata } from "next";
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
  title: "Strideship — Custom Operational Systems for Global Trade",
  description:
    "We automate the manual infrastructure of global trade. From RFQs to shipment workflows, custom-built systems that eliminate operational friction.",
};

import { SmoothScroll } from "@/components/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${workSans.variable} ${libreBaskerville.variable} antialiased dark`} style={{ fontFamily: "var(--font-worksans)" }}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
