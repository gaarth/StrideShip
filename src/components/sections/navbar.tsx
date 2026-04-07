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
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
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
            backgroundColor: scrolled ? "rgba(6,11,20,0.8)" : "transparent",
            backdropFilter: scrolled ? "blur(32px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(32px)" : "none",
            boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.5)" : "none",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <motion.button layout
              style={{ background: "none", border: "none", color: "#F1F5F9", fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)", letterSpacing: "-0.02em", cursor: "pointer", flexShrink: 0 }}>
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
