"use client";

import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 240;
const FRAME_WIDTH = 3840;
const FRAME_HEIGHT = 2160;
const FRAME_PAD = (n: number) => String(n).padStart(3, "0");
const frameUrl = (n: number) =>
  `/assets/hero-frames/ezgif-frame-${FRAME_PAD(n)}.jpg`;

const MAX_CONCURRENT = 10;

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | undefined)[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const loadingRef = useRef<Set<number>>(new Set());
  const queuedRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    const media = mediaRef.current;
    if (!canvas || !hero || !media) return;

    let cancelled = false;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    function drawFrame(index: number) {
      if (!canvas || !ctx || cancelled) return;
      const img = imagesRef.current[index] || imagesRef.current[0];

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!img || !img.complete || !img.naturalWidth) return;

      // Cover math matching scrollforhero/scroll-sequence.html (native 3840×2160)
      const canvasRatio = canvas.width / canvas.height;
      const imageRatio = FRAME_WIDTH / FRAME_HEIGHT;

      let drawWidth: number;
      let drawHeight: number;
      let offsetX: number;
      let offsetY: number;

      if (imageRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imageRatio;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imageRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }

    function pumpQueue() {
      if (cancelled) return;
      while (
        loadingRef.current.size < MAX_CONCURRENT &&
        queuedRef.current.length > 0
      ) {
        const index = queuedRef.current.shift()!;
        if (imagesRef.current[index]?.complete || loadingRef.current.has(index)) {
          continue;
        }
        loadingRef.current.add(index);
        const img = new Image();
        img.decoding = "async";
        img.src = frameUrl(index + 1);
        img.onload = () => {
          if (cancelled) return;
          imagesRef.current[index] = img;
          loadingRef.current.delete(index);
          if (index === 0) drawFrame(0);
          else if (Math.abs(index - Math.round(currentFrameRef.current)) <= 1) {
            drawFrame(Math.round(currentFrameRef.current));
          }
          pumpQueue();
        };
        img.onerror = () => {
          if (cancelled) return;
          loadingRef.current.delete(index);
          pumpQueue();
        };
      }
    }

    queuedRef.current = [0, ...Array.from({ length: TOTAL_FRAMES - 1 }, (_, i) => i + 1)];
    pumpQueue();

    function resizeCanvas() {
      if (!canvas || !media || cancelled) return;

      const rect = media.getBoundingClientRect();
      const cssW = Math.max(1, Math.round(rect.width) || window.innerWidth);
      const cssH = Math.max(1, Math.round(rect.height) || window.innerHeight);

      // Never below 2× — keeps 3840 JPGs sharp on low-DPR / zoomed displays
      const nativeDpr = window.devicePixelRatio || 1;
      const dpr = Math.min(Math.max(nativeDpr, 2), 3);

      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;

      const bw = Math.round(cssW * dpr);
      const bh = Math.round(cssH * dpr);
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }
      drawFrame(Math.round(currentFrameRef.current));
    }

    resizeCanvas();
    const raf1 = requestAnimationFrame(() => {
      resizeCanvas();
      requestAnimationFrame(resizeCanvas);
    });

    const ro = new ResizeObserver(() => resizeCanvas());
    ro.observe(media);
    window.addEventListener("resize", resizeCanvas, { passive: true });

    function updateScrub() {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const scrollableDistance = heroRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    }

    let animId: number;
    function renderLoop() {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.35;
        drawFrame(
          Math.min(Math.max(Math.round(currentFrameRef.current), 0), TOTAL_FRAMES - 1)
        );
      }
      animId = requestAnimationFrame(renderLoop);
    }

    window.addEventListener("scroll", updateScrub, { passive: true });
    updateScrub();
    animId = requestAnimationFrame(renderLoop);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      ro.disconnect();
      window.removeEventListener("scroll", updateScrub);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div ref={mediaRef} className="hero-media">
        {/* LCP poster — same cover crop as canvas */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-frames/ezgif-frame-001.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <canvas
          ref={canvasRef}
          aria-label="Scroll-driven hero sequence"
          role="img"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "block",
          }}
        />
        <div className="hero-mask" />
      </div>

      <div className="hero-content">
        <div className="hero-inner">
          <h1 className="hero-h1">
            Automating the manual infrastructure of global trade
          </h1>

          <div className="hero-cta">
            <a
              href="https://cal.com/gaarth-godbole/audit-call"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-demo-btn"
            >
              Book a Demo
            </a>
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
