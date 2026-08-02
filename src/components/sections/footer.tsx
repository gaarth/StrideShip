"use client";

import Link from "next/link";

/* Full official wordmark — black for light footer surfaces */
function BrandLogo({ height = 22 }: { height?: number }) {
  const width = Math.round(height * (1220 / 260));
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand-logo-dark.svg"
      alt="StrideShip"
      width={width}
      height={height}
      draggable={false}
      style={{
        height,
        width,
        display: "block",
        flexShrink: 0,
        objectFit: "contain",
      }}
    />
  );
}

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FFFFFF",
        color: "#0F172A",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "92%",
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "clamp(33px, 3.91vh, 38px) clamp(15px, 2.346vw, 31px) clamp(21px, 2.346vh, 25px)",
        }}
      >
        {/* Main Footer Grid - Spreading from Left to Right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "36px clamp(21px, 3.128vw, 49px)",
            alignItems: "start",
          }}
        >
          {/* Column 1: Brand, Tagline & Direct Links (Far Left) */}
          <div style={{ minWidth: "220px" }}>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", marginBottom: "12px" }}>
              <BrandLogo height={28} />
            </Link>

            <p
              style={{
                fontSize: "0.82rem",
                color: "#475569",
                lineHeight: 1.5,
                marginBottom: "16px",
                maxWidth: "260px",
              }}
            >
              Automating the manual infrastructure of global trade.
            </p>

            <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
              <a
                href="https://www.linkedin.com/company/strideship/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.82rem",
                  color: "#475569",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0F172A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
              >
                LinkedIn
              </a>
              <span style={{ color: "rgba(0,0,0,0.2)", fontSize: "0.8rem" }}>•</span>
              <a
                href="mailto:exports@strideship.dev"
                style={{
                  fontSize: "0.82rem",
                  color: "#475569",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0F172A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
              >
                exports@strideship.dev
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#0F172A",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Product
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Platform Overview", href: "/#capabilities" },
                { label: "Our Capabilities", href: "/#capabilities" },
                { label: "5-Phase Process", href: "/#process" },
                { label: "Exports JV", href: "/exports" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "0.82rem",
                      color: "#475569",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0F172A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#0F172A",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Solutions
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Freight Forwarders", href: "/#who-we-help" },
                { label: "Customs Brokers", href: "/#who-we-help" },
                { label: "Indian Manufacturers", href: "/exports#how-it-works" },
                { label: "International Buyers", href: "/exports#inquiry-form" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "0.82rem",
                      color: "#475569",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0F172A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#0F172A",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/connect" },
                { label: "Blog & Insights", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "0.82rem",
                      color: "#475569",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0F172A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar - Spreading Far Left to Far Right */}
        <div
          style={{
            paddingTop: "24px",
            marginTop: "32px",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "#64748B", margin: 0 }}>
            &copy; 2026 StrideShip Inc. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/privacy" },
              { label: "Cookie Notice", href: "/privacy" },
              { label: "Contact Us", href: "/connect" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                style={{
                  fontSize: "0.78rem",
                  color: "#64748B",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0F172A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
