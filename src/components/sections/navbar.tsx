"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { StarButton } from "@/components/ui/star-button";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#who-we-help" },
  { label: "Blog", href: "/blog" },
];

/* ── Brand SVG icon extracted for reuse ────────────────────────── */
function BrandIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="397 94 611 522" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path fill="#F1F5F9" d="M 492.39 603.75 C485.75,597.01 469.56,580.23 456.41,566.46 C443.26,552.69 424.45,532.99 414.61,522.69 C404.76,512.39 396.93,503.74 397.19,503.48 C397.45,503.21 533.51,503.11 699.54,503.25 L 1001.41 503.50 L 942.96 559.75 L 884.50 615.99 L 694.48 616.00 L 504.47 616.00 L 492.39 603.75 ZM 848.00 598.77 C844.97,597.02 812.35,578.07 775.50,556.66 C738.65,535.25 708.05,517.74 707.50,517.75 C706.31,517.77 654.44,543.26 586.21,577.37 L 536.93 602.00 L 695.21 601.98 L 853.50 601.96 L 848.00 598.77 ZM 593.10 559.07 L 677.50 517.15 L 552.53 517.07 L 427.56 517.00 L 433.60 523.25 C436.92,526.69 455.06,545.59 473.91,565.25 C492.76,584.91 508.30,601.00 508.44,601.00 C508.58,601.00 546.68,582.13 593.10,559.07 ZM 923.55 559.90 C947.17,537.30 966.93,518.40 967.45,517.90 C968.02,517.36 921.03,517.00 851.02,517.00 L 733.65 517.00 L 767.57 536.68 C853.96,586.78 878.58,600.92 879.55,600.96 C880.12,600.98 899.92,582.51 923.55,559.90 ZM 486.00 490.45 C486.00,490.14 488.65,485.31 491.88,479.70 C503.79,459.05 688.81,126.73 702.58,101.26 C704.74,97.27 706.82,94.01 707.21,94.01 C708.10,94.00 706.09,90.43 749.24,168.50 C769.31,204.80 803.57,266.57 825.36,305.77 C847.16,344.97 865.00,377.26 865.00,377.51 C865.00,377.77 844.89,378.10 820.31,378.24 L 775.63 378.50 L 822.06 408.22 C847.60,424.56 877.50,443.73 888.50,450.82 L 908.50 463.71 L 915.00 474.29 C918.58,480.11 922.31,486.25 923.31,487.94 L 925.11 491.00 L 705.56 491.00 C584.80,491.00 486.00,490.75 486.00,490.45 ZM 701.00 430.00 C701.00,404.15 700.77,383.00 700.50,383.00 C700.22,383.00 685.26,391.03 667.25,400.84 C635.63,418.06 540.72,469.07 530.50,474.33 L 525.50 476.91 L 613.25 476.95 L 701.00 477.00 L 701.00 430.00 ZM 899.97 476.25 C899.95,475.84 899.39,474.81 898.72,473.97 C898.05,473.12 859.70,448.15 813.50,418.47 L 729.50 364.50 L 785.83 364.24 C816.81,364.10 842.01,363.62 841.83,363.18 C841.12,361.46 803.73,294.45 803.09,293.75 C802.72,293.34 797.92,297.17 792.43,302.25 C786.94,307.34 768.28,324.51 750.97,340.41 C733.66,356.31 719.39,369.59 719.25,369.91 C719.12,370.23 722.54,372.75 726.85,375.50 C731.17,378.25 760.62,397.38 792.30,418.00 C834.67,445.59 849.45,455.69 848.20,456.22 C847.26,456.61 829.17,461.28 808.00,466.59 C786.83,471.89 769.31,476.41 769.08,476.62 C768.85,476.83 798.22,477.00 834.33,477.00 C870.45,477.00 899.99,476.66 899.97,476.25 ZM 767.75 462.88 C794.84,456.19 817.00,450.38 817.00,449.96 C817.00,449.55 816.41,448.99 815.70,448.71 C814.98,448.44 793.64,434.69 768.27,418.17 C742.91,401.64 720.32,386.96 718.08,385.55 L 714.00 382.97 L 714.00 429.60 L 714.00 476.23 L 716.25 475.64 C717.49,475.32 740.66,469.57 767.75,462.88 ZM 575.50 435.22 C619.30,411.60 692.91,371.71 695.26,370.32 C695.68,370.07 693.45,367.54 690.31,364.69 C666.08,342.70 634.44,313.74 624.22,304.20 C617.46,297.89 611.80,292.90 611.63,293.12 C611.46,293.33 609.95,295.98 608.27,299.00 C601.76,310.72 515.02,466.05 514.28,467.32 C513.57,468.53 519.60,465.37 575.50,435.22 ZM 700.76 188.94 L 700.50 132.73 L 659.60 206.51 C630.59,258.82 618.95,280.69 619.60,281.66 C620.09,282.42 638.50,299.49 660.50,319.60 L 700.50 356.17 L 700.76 300.66 C700.90,270.13 700.90,219.86 700.76,188.94 ZM 758.67 315.19 C778.56,296.98 795.07,281.70 795.35,281.24 C795.63,280.79 781.46,254.56 763.87,222.96 C746.28,191.36 728.04,158.41 723.34,149.75 C718.65,141.09 714.62,134.00 714.40,134.00 C714.18,134.00 714.00,184.04 714.00,245.21 L 714.00 356.42 L 718.25 352.36 C720.59,350.14 738.78,333.41 758.67,315.19 Z"/>
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const menu = mobileMenuRef.current;
      const trigger = document.getElementById("mobile-nav-trigger");
      if (menu && !menu.contains(target) && trigger && !trigger.contains(target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  // Close on scroll
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = () => setMobileOpen(false);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [mobileOpen]);

  const go = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  /* ─── Glassmorphism style tokens ─────────────────────────────── */
  const glassBase: React.CSSProperties = {
    background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
    backdropFilter: "blur(24px) saturate(1.4)",
    WebkitBackdropFilter: "blur(24px) saturate(1.4)",
    border: "1px solid rgba(255,255,255,0.14)",
    boxShadow: `
      0 8px 32px rgba(0,0,0,0.25),
      inset 0 1px 0 rgba(255,255,255,0.18),
      inset 0 -1px 0 rgba(255,255,255,0.04)
    `,
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          DESKTOP NAVBAR — transparent at top, glassmorphism when scrolled
         ═══════════════════════════════════════════════════════════ */}
      <header className="navbar-desktop" style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        pointerEvents: "none",
        padding: "clamp(16px, 2vw, 24px) clamp(24px, 5vw, 64px)",
      }}>
        <motion.nav
          layout
          initial={false}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: scrolled ? "flex-start" : "space-between",
            width: scrolled ? "max-content" : "100%",
            gap: scrolled ? "32px" : "0",
            padding: scrolled ? "8px 8px 8px 24px" : "0",
            borderRadius: scrolled ? "9999px" : "0",
            border: scrolled ? "1px solid rgba(255,255,255,0.14)" : "1px solid transparent",
            background: scrolled
              ? "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)"
              : "transparent",
            backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.04)"
              : "none",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <motion.button layout
              style={{ background: "none", border: "none", color: "#F1F5F9", fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)", letterSpacing: "-0.02em", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", gap: "10px" }}>
              <BrandIcon />
              StrideShip
            </motion.button>
          </Link>

          <motion.div layout className="hidden md:flex items-center" style={{ gap: "6px" }}>
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                style={{ background: "none", border: "none", color: "#94A3B8", fontSize: "clamp(0.875rem, 1.5vw, 1rem)", padding: "12px 22px", borderRadius: "9999px", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F1F5F9")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                {l.label}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="hidden md:block">
            <StarButton href="https://cal.com/gaarth-godbole/audit-call" height={scrolled ? 48 : 52} paddingX={scrolled ? 32 : 36} fontSize="clamp(0.875rem, 1.5vw, 1rem)">
              Book a Call
            </StarButton>
          </motion.div>
        </motion.nav>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE NAVBAR — floating glass icon that expands
         ═══════════════════════════════════════════════════════════ */}
      <div className="navbar-mobile" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, pointerEvents: "none" }}>
        {/* Floating icon trigger — top-right */}
        <motion.button
          id="mobile-nav-trigger"
          className="navbar-glass-hover"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          initial={false}
          animate={{
            rotate: mobileOpen ? 90 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            pointerEvents: "auto",
            position: "fixed",
            top: "16px",
            right: "16px",
            width: "52px",
            height: "52px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            ...glassBase,
            zIndex: 52,
          }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.svg
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                width="20" height="20" viewBox="0 0 20 20" fill="none"
              >
                <line x1="4" y1="4" x2="16" y2="16" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" />
                <line x1="16" y1="4" x2="4" y2="16" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" />
              </motion.svg>
            ) : (
              <motion.div
                key="icon"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <BrandIcon size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Expanded mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                pointerEvents: "auto",
                position: "fixed",
                top: "76px",
                right: "16px",
                width: "min(280px, calc(100vw - 32px))",
                borderRadius: "20px",
                padding: "8px",
                ...glassBase,
                background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)",
                boxShadow: `
                  0 16px 48px rgba(0,0,0,0.35),
                  inset 0 1px 0 rgba(255,255,255,0.22),
                  inset 0 -1px 0 rgba(255,255,255,0.04)
                `,
                zIndex: 51,
              }}
            >
              {/* Brand row */}
              <div style={{
                padding: "12px 16px 8px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                marginBottom: "4px",
              }}>
                <BrandIcon size={18} />
                <span style={{ color: "#F1F5F9", fontSize: "1.1rem", letterSpacing: "-0.02em" }}>StrideShip</span>
              </div>

              {/* Nav links */}
              {links.map((l) => (
                <motion.button
                  key={l.href}
                  onClick={() => go(l.href)}
                  whileTap={{ scale: 0.98, backgroundColor: "rgba(255,255,255,0.08)" }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    color: "#CBD5E1",
                    fontSize: "0.95rem",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "#F1F5F9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "none";
                    e.currentTarget.style.color = "#CBD5E1";
                  }}
                >
                  {l.label}
                </motion.button>
              ))}

              {/* CTA */}
              <div style={{ padding: "8px 8px 4px" }}>
                <StarButton href="https://cal.com/gaarth-godbole/audit-call" height={44} paddingX={28} fontSize="0.9rem">
                  Book a Call
                </StarButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
