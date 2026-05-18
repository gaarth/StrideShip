import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { blogPosts } from "@/lib/blog-data";
import { BlogCard } from "./blog-card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | StrideShip — Logistics Automation Insights",
  description:
    "Articles on AI for customs brokers, Bill of Entry automation, freight forwarding AI, and logistics automation in India. By Gaarth Godbole, StrideShip.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | StrideShip — Logistics Automation Insights",
    description:
      "Articles on AI for customs brokers, Bill of Entry automation, freight forwarding AI, and logistics automation in India.",
    url: "https://strideship.dev/blog",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | StrideShip — Logistics Automation Insights",
    description:
      "Articles on AI for customs brokers, Bill of Entry automation, freight forwarding AI, and logistics automation in India.",
    images: ["/og-image.png"],
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
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -1, background: "radial-gradient(ellipse at 50% 40%, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%)" }} />
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -2, backgroundColor: "#05070A" }} />

      <Navbar />

      <section style={{ padding: "clamp(120px, 15vw, 180px) 0 clamp(60px, 10vw, 100px)", position: "relative" }}>
        <div style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)", maxWidth: "1200px" }}>
          <header style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 72px)" }}>
            <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "#F1F5F9", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px" }}>
              Blog &{" "}<br />
              <span style={{ fontStyle: "italic", color: "#94A3B8" }}>Insights</span>
            </h1>
            <p style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", color: "#64748B", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
              Deep dives into logistics automation, customs AI, and the future of Indian EXIM operations.
            </p>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2vw, 24px)", maxWidth: "800px", margin: "0 auto" }}>
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
