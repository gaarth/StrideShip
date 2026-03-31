"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StarButton } from "@/components/ui/star-button";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#who-we-help" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header style={{ position: "fixed", top: "16px", left: "50%", transform: "translateX(-50%)", zIndex: 50, width: "95%", maxWidth: "1400px" }}>
        <nav style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 16px 16px 36px", borderRadius: "9999px",
          border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          backgroundColor: scrolled ? "rgba(6,11,20,0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          transition: "all 0.3s ease",
        }}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", color: "#F1F5F9", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", cursor: "pointer" }}>
            StrideShip
          </button>

          <div className="hidden md:flex items-center" style={{ gap: "6px" }}>
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                style={{ background: "none", border: "none", color: "#94A3B8", fontSize: "17px", padding: "12px 22px", borderRadius: "9999px", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F1F5F9")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <StarButton href="https://cal.com/gaarth-godbole/audit-call" height={52} paddingX={36} fontSize={17}>
              Book a Call
            </StarButton>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden"
            style={{ background: "none", border: "none", padding: "10px", cursor: "pointer" }} aria-label="Menu">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <line x1="0" y1="1" x2="22" y2="1" stroke="#F1F5F9" strokeWidth="2"
                style={{ transform: open ? "rotate(45deg) translate(4px, 0px)" : "none", transition: "0.2s", transformOrigin: "center" }} />
              <line x1="0" y1="15" x2="22" y2="15" stroke="#F1F5F9" strokeWidth="2"
                style={{ transform: open ? "rotate(-45deg) translate(4px, 0px)" : "none", transition: "0.2s", transformOrigin: "center" }} />
            </svg>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }} className="md:hidden"
            style={{ position: "fixed", top: "80px", left: "16px", right: "16px", zIndex: 50,
              backgroundColor: "rgba(12,19,34,0.97)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "16px" }}>
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "#94A3B8", fontSize: "16px", padding: "14px 16px", borderRadius: "8px", cursor: "pointer" }}>
                {l.label}
              </button>
            ))}
            <div style={{ marginTop: "12px", padding: "0 12px" }}>
              <StarButton href="https://cal.com/gaarth-godbole/audit-call" height={48} paddingX={32} fontSize={15}>
                Book a Call
              </StarButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
