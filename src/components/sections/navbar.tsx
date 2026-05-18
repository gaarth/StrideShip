"use client";

import { useState, useEffect } from "react";
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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Triggers at 85vh, almost completely past the hero section
    const fn = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", fn, { passive: true });
    // evaluate on mount
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <header style={{ 
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
            border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
            backgroundColor: scrolled ? "rgba(6,11,20,0.92)" : "transparent",
            boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.5)" : "none",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <motion.button layout
              style={{ background: "none", border: "none", color: "#F1F5F9", fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)", letterSpacing: "-0.02em", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Brand mark — inlined favicon path, always white */}
              <svg width="22" height="22" viewBox="397 94 611 522" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path fill="#F1F5F9" d="M 492.39 603.75 C485.75,597.01 469.56,580.23 456.41,566.46 C443.26,552.69 424.45,532.99 414.61,522.69 C404.76,512.39 396.93,503.74 397.19,503.48 C397.45,503.21 533.51,503.11 699.54,503.25 L 1001.41 503.50 L 942.96 559.75 L 884.50 615.99 L 694.48 616.00 L 504.47 616.00 L 492.39 603.75 ZM 848.00 598.77 C844.97,597.02 812.35,578.07 775.50,556.66 C738.65,535.25 708.05,517.74 707.50,517.75 C706.31,517.77 654.44,543.26 586.21,577.37 L 536.93 602.00 L 695.21 601.98 L 853.50 601.96 L 848.00 598.77 ZM 593.10 559.07 L 677.50 517.15 L 552.53 517.07 L 427.56 517.00 L 433.60 523.25 C436.92,526.69 455.06,545.59 473.91,565.25 C492.76,584.91 508.30,601.00 508.44,601.00 C508.58,601.00 546.68,582.13 593.10,559.07 ZM 923.55 559.90 C947.17,537.30 966.93,518.40 967.45,517.90 C968.02,517.36 921.03,517.00 851.02,517.00 L 733.65 517.00 L 767.57 536.68 C853.96,586.78 878.58,600.92 879.55,600.96 C880.12,600.98 899.92,582.51 923.55,559.90 ZM 486.00 490.45 C486.00,490.14 488.65,485.31 491.88,479.70 C503.79,459.05 688.81,126.73 702.58,101.26 C704.74,97.27 706.82,94.01 707.21,94.01 C708.10,94.00 706.09,90.43 749.24,168.50 C769.31,204.80 803.57,266.57 825.36,305.77 C847.16,344.97 865.00,377.26 865.00,377.51 C865.00,377.77 844.89,378.10 820.31,378.24 L 775.63 378.50 L 822.06 408.22 C847.60,424.56 877.50,443.73 888.50,450.82 L 908.50 463.71 L 915.00 474.29 C918.58,480.11 922.31,486.25 923.31,487.94 L 925.11 491.00 L 705.56 491.00 C584.80,491.00 486.00,490.75 486.00,490.45 ZM 701.00 430.00 C701.00,404.15 700.77,383.00 700.50,383.00 C700.22,383.00 685.26,391.03 667.25,400.84 C635.63,418.06 540.72,469.07 530.50,474.33 L 525.50 476.91 L 613.25 476.95 L 701.00 477.00 L 701.00 430.00 ZM 899.97 476.25 C899.95,475.84 899.39,474.81 898.72,473.97 C898.05,473.12 859.70,448.15 813.50,418.47 L 729.50 364.50 L 785.83 364.24 C816.81,364.10 842.01,363.62 841.83,363.18 C841.12,361.46 803.73,294.45 803.09,293.75 C802.72,293.34 797.92,297.17 792.43,302.25 C786.94,307.34 768.28,324.51 750.97,340.41 C733.66,356.31 719.39,369.59 719.25,369.91 C719.12,370.23 722.54,372.75 726.85,375.50 C731.17,378.25 760.62,397.38 792.30,418.00 C834.67,445.59 849.45,455.69 848.20,456.22 C847.26,456.61 829.17,461.28 808.00,466.59 C786.83,471.89 769.31,476.41 769.08,476.62 C768.85,476.83 798.22,477.00 834.33,477.00 C870.45,477.00 899.99,476.66 899.97,476.25 ZM 767.75 462.88 C794.84,456.19 817.00,450.38 817.00,449.96 C817.00,449.55 816.41,448.99 815.70,448.71 C814.98,448.44 793.64,434.69 768.27,418.17 C742.91,401.64 720.32,386.96 718.08,385.55 L 714.00 382.97 L 714.00 429.60 L 714.00 476.23 L 716.25 475.64 C717.49,475.32 740.66,469.57 767.75,462.88 ZM 575.50 435.22 C619.30,411.60 692.91,371.71 695.26,370.32 C695.68,370.07 693.45,367.54 690.31,364.69 C666.08,342.70 634.44,313.74 624.22,304.20 C617.46,297.89 611.80,292.90 611.63,293.12 C611.46,293.33 609.95,295.98 608.27,299.00 C601.76,310.72 515.02,466.05 514.28,467.32 C513.57,468.53 519.60,465.37 575.50,435.22 ZM 700.76 188.94 L 700.50 132.73 L 659.60 206.51 C630.59,258.82 618.95,280.69 619.60,281.66 C620.09,282.42 638.50,299.49 660.50,319.60 L 700.50 356.17 L 700.76 300.66 C700.90,270.13 700.90,219.86 700.76,188.94 ZM 758.67 315.19 C778.56,296.98 795.07,281.70 795.35,281.24 C795.63,280.79 781.46,254.56 763.87,222.96 C746.28,191.36 728.04,158.41 723.34,149.75 C718.65,141.09 714.62,134.00 714.40,134.00 C714.18,134.00 714.00,184.04 714.00,245.21 L 714.00 356.42 L 718.25 352.36 C720.59,350.14 738.78,333.41 758.67,315.19 Z"/>
              </svg>
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

          <motion.button layout onClick={() => setOpen(!open)} className="md:hidden"
            style={{ background: "none", border: "none", padding: "10px", cursor: "pointer" }} aria-label="Menu">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <line x1="0" y1="1" x2="22" y2="1" stroke="#F1F5F9" strokeWidth="2"
                style={{ transform: open ? "rotate(45deg) translate(4px, 0px)" : "none", transition: "0.2s", transformOrigin: "center" }} />
              <line x1="0" y1="15" x2="22" y2="15" stroke="#F1F5F9" strokeWidth="2"
                style={{ transform: open ? "rotate(-45deg) translate(4px, 0px)" : "none", transition: "0.2s", transformOrigin: "center" }} />
            </svg>
          </motion.button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
           <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }} className="md:hidden"
            style={{ position: "fixed", top: "80px", left: "16px", right: "16px", zIndex: 50,
              backgroundColor: "rgba(12,19,34,0.97)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "16px" }}>
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "#94A3B8", fontSize: "clamp(0.875rem, 1.5vw, 1rem)", padding: "14px 16px", borderRadius: "8px", cursor: "pointer" }}>
                {l.label}
              </button>
            ))}
            <div style={{ marginTop: "12px", padding: "0 12px" }}>
              <StarButton href="https://cal.com/gaarth-godbole/audit-call" height={48} paddingX={32} fontSize="clamp(0.875rem, 1.5vw, 1rem)">
                Book a Call
              </StarButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
