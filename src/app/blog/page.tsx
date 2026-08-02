import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { blogPosts } from "@/lib/blog-data";
import { BlogCard } from "./blog-card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | StrideShip - Logistics Automation Insights",
  description:
    "Articles on AI for customs brokers, Bill of Entry automation, freight forwarding AI, and logistics automation in India. By Gaarth Godbole, StrideShip.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | StrideShip - Logistics Automation Insights",
    description:
      "Articles on AI for customs brokers, Bill of Entry automation, freight forwarding AI, and logistics automation in India.",
    url: "https://strideship.dev/blog",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | StrideShip - Logistics Automation Insights",
    description:
      "Articles on AI for customs brokers, Bill of Entry automation, freight forwarding AI, and logistics automation in India.",
    images: ["/og.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://strideship.dev" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://strideship.dev/blog" },
  ],
};

export default function BlogIndex() {
  return (
    <main style={{ position: "relative" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Background */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -2, backgroundColor: "#F5F4F0" }} />

      <Navbar />

      <section style={{ padding: "clamp(107px, 11.73vw, 140px) 0 clamp(54px, 7.82vw, 78px)", position: "relative" }}>
        <div style={{ width: "92%", margin: "0 auto", padding: "0 clamp(21px, 3.91vw, 49px)", maxWidth: "1200px" }}>
          <header style={{ textAlign: "center", marginBottom: "clamp(43px, 4.692vw, 56px)" }}>
            <h1 style={{ fontSize: "clamp(2.677rem, 4.692vw, 3.514rem)", color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
              Blog &{" "}<br />
              <span style={{ fontStyle: "italic", color: "#64748B" }}>Insights</span>
            </h1>
            <p style={{ fontSize: "clamp(1.004rem, 1.168vw, 1.099rem)", color: "#475569", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              Deep dives into logistics automation, customs AI, and the future of Indian EXIM operations.
            </p>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(15px, 1.564vw, 18px)", maxWidth: "800px", margin: "0 auto" }}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <BlogCard
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  readTime={post.readTime}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
