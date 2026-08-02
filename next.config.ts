import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Fix workspace root detection (must be absolute)
  turbopack: {
    root: path.resolve(__dirname),
  },
  compress: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Security and performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security headers
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // OG / social preview images — shorter cache so Google/LinkedIn can refresh
      {
        source: "/og.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
      // Long-term caching for static assets (incl. JS/CSS chunks)
      {
        source: "/(.*)\\.(ico|svg|png|jpg|jpeg|webp|avif|woff|woff2|js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/hero-frames/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache LLM files aggressively
      {
        source: "/(llms\\.txt|llms-full\\.txt)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect common SEO entry points
      {
        source: "/resources",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/connect",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/connect",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
