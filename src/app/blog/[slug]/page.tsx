import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { StarButton } from "@/components/ui/star-button";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getArticleContent } from "./articles";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | StrideShip Blog`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://strideship.dev/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorTitle,
    },
    publisher: {
      "@type": "Organization",
      name: "StrideShip",
      url: "https://strideship.dev",
    },
    description: post.description,
    url: `https://strideship.dev/blog/${post.slug}`,
    mainEntityOfPage: `https://strideship.dev/blog/${post.slug}`,
  };

  const content = getArticleContent(slug);

  return (
    <main style={{ position: "relative" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Background */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -1, background: "radial-gradient(ellipse at 50% 40%, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%)" }} />
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: -2, backgroundColor: "#05070A" }} />

      <Navbar />

      <article style={{ padding: "clamp(120px, 15vw, 180px) 0 clamp(60px, 10vw, 100px)", position: "relative" }}>
        <div style={{ width: "80%", margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)", maxWidth: "800px" }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: "32px" }}>
            <Link href="/blog" style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#6B8FA8", textDecoration: "none" }}>
              ← Back to Blog
            </Link>
          </div>

          {/* Header */}
          <header style={{ marginBottom: "clamp(36px, 4vw, 56px)" }}>
            <div style={{ display: "flex", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#6B8FA8" }}>{post.date}</span>
              <span style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#475569" }}>·</span>
              <span style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#64748B" }}>{post.readTime}</span>
            </div>
            <h1 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#F1F5F9",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}>
              {post.title}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div>
                <p style={{ fontSize: "clamp(14px, 1.1vw, 16px)", color: "#F1F5F9", margin: 0 }}>{post.author}</p>
                <p style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#64748B", margin: 0 }}>{post.authorTitle}</p>
              </div>
            </div>
          </header>

          {/* Article Body */}
          {content}

          {/* CTA */}
          <div style={{
            marginTop: "clamp(48px, 6vw, 72px)",
            padding: "clamp(32px, 4vw, 48px)",
            borderRadius: "14px",
            backgroundColor: "rgba(10, 15, 30, 0.75)",
            border: "1px solid rgba(107,143,168,0.2)",
            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
            textAlign: "center",
          }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F1F5F9", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Ready to automate your operations?
            </h2>
            <p style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#94A3B8", marginBottom: "24px", lineHeight: 1.6 }}>
              15-minute call · No commitment · Honest assessment
            </p>
            <StarButton href="https://cal.com/gaarth-godbole/audit-call" height={54} paddingX={38} fontSize="clamp(0.875rem, 1.5vw, 1rem)">
              Book a Demo
            </StarButton>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
