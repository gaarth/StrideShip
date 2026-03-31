import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { Positioning } from "@/components/sections/positioning";
import { WhoWeHelp } from "@/components/sections/who-we-help";
import { BeforeAfter } from "@/components/sections/before-after";
import { UseCases } from "@/components/sections/use-cases";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      {/* 
        Locked screen gradient for a global blue wash effect.
        By setting fixed, it acts as a permanent ambient light behind the glassy cards.
      */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: -1,
          background: "radial-gradient(ellipse at 50% 40%, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%)",
        }}
      />
      
      {/* Core dark background */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: -2,
          backgroundColor: "#05070A",
        }}
      />
      
      <Navbar />
      <Hero />
      <Problem />
      <Capabilities />
      <Process />
      <Positioning />
      <WhoWeHelp />
      <BeforeAfter />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  );
}
