"use client";

import { useEffect, useRef } from "react";
import { StarButton } from "@/components/ui/star-button";

const TOTAL_FRAMES = 96;

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load frame 1 immediately
    const firstImg = new Image();
    firstImg.src = "/assets/hero-frames/frame_001.webp";
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      drawFrame(0);
    };

    // Preload remaining frames asynchronously
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/assets/hero-frames/frame_${String(i).padStart(3, "0")}.webp`;
      img.onload = () => {
        imagesRef.current[i - 1] = img;
        if (i === 1) drawFrame(0);
      };
    }

    function drawFrame(index: number) {
      if (!canvas || !ctx) return;
      const img = imagesRef.current[index] || imagesRef.current[0];
      if (!img || !img.complete) return;

      const width = canvas.width;
      const height = canvas.height;
      if (width === 0 || height === 0) return;

      // Cover image math
      const imgRatio = img.width / img.height;
      const canvasRatio = width / height;
      let renderW = width;
      let renderH = height;
      let x = 0;
      let y = 0;

      if (canvasRatio > imgRatio) {
        renderH = width / imgRatio;
        y = (height - renderH) / 2;
      } else {
        renderW = height * imgRatio;
        x = (width - renderW) / 2;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, x, y, renderW, renderH);
    }

    function resizeCanvas() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      drawFrame(Math.round(currentFrameRef.current));
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    function updateScrub() {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const scrollableDistance = heroRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const rawProgress = -rect.top / scrollableDistance;
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    }

    let animId: number;
    function renderLoop() {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.35;
        const frameToDraw = Math.min(
          Math.max(Math.round(currentFrameRef.current), 0),
          TOTAL_FRAMES - 1
        );
        drawFrame(frameToDraw);
      }
      animId = requestAnimationFrame(renderLoop);
    }

    window.addEventListener("scroll", updateScrub, { passive: true });
    updateScrub();
    animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("scroll", updateScrub);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div className="hero-media">
        <canvas ref={canvasRef} className="hero-video" />
      </div>

      <div className="hero-content">
        <div className="hero-inner">
          <h1 className="hero-h1">
            The AI Operator for Customs &amp; Logistics
          </h1>

          <p className="hero-p">
            Automating the manual infrastructure of global trade. We build custom automation for the manual side of logistics, making your documentation automated and your workflows faster.
          </p>

          <div className="hero-cta">
            <StarButton
              href="https://cal.com/gaarth-godbole/audit-call"
              height={54}
              paddingX={38}
              fontSize="clamp(0.875rem, 1.5vw, 1rem)"
            >
              Book a Demo
            </StarButton>
            <button
              onClick={() =>
                document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-secondary"
            >
              View Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



