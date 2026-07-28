"use client";

import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 240;
const FRAME_WIDTH = 3840;
const FRAME_HEIGHT = 2160;
const FRAME_PAD = (n: number) => String(n).padStart(3, "0");
const frameUrl = (n: number) =>
  `/assets/hero-frames/ezgif-frame-${FRAME_PAD(n)}.jpg`;

/** Same full-res JPGs — only the load schedule changes (critical path first). */
const MAX_CONCURRENT_CRITICAL = 2;
const MAX_CONCURRENT_BG = 4;
const PREFETCH_RADIUS = 24;

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | undefined)[]>([]);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const lastDrawnRef = useRef(-1);
  const loadingRef = useRef<Set<number>>(new Set());
  const queuedRef = useRef<number[]>([]);
  const maxConcurrentRef = useRef(MAX_CONCURRENT_CRITICAL);
  const bgStartedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    const media = mediaRef.current;
    if (!canvas || !hero || !media) return;

    let cancelled = false;
    // alpha:true so the poster image shows through until the first frame paints (no black flash)
    const rawCtx = canvas.getContext("2d", { alpha: true });
    if (!rawCtx) return;
    const ctx = rawCtx;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    /** Find nearest loaded frame so we never paint black mid-scrub. */
    function resolveImage(index: number): HTMLImageElement | undefined {
      const exact = imagesRef.current[index];
      if (exact?.complete && exact.naturalWidth) return exact;

      for (let d = 1; d <= PREFETCH_RADIUS; d++) {
        const ahead = imagesRef.current[index + d];
        if (ahead?.complete && ahead.naturalWidth) return ahead;
        const behind = imagesRef.current[index - d];
        if (behind?.complete && behind.naturalWidth) return behind;
      }

      const first = imagesRef.current[0];
      if (first?.complete && first.naturalWidth) return first;
      return undefined;
    }

    function drawFrame(index: number) {
      if (!canvas || !ctx || cancelled) return;

      const img = resolveImage(index);
      // Never clear to black without a drawable frame — keeps poster/last frame visible
      if (!img) return;

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
      lastDrawnRef.current = index;
    }

    function enqueue(index: number, priority = false) {
      if (index < 0 || index >= TOTAL_FRAMES) return;
      if (imagesRef.current[index]?.complete || loadingRef.current.has(index)) return;
      if (queuedRef.current.includes(index)) {
        if (priority) {
          queuedRef.current = queuedRef.current.filter((i) => i !== index);
          queuedRef.current.unshift(index);
        }
        return;
      }
      if (priority) queuedRef.current.unshift(index);
      else queuedRef.current.push(index);
    }

    function pumpQueue() {
      if (cancelled) return;
      while (
        loadingRef.current.size < maxConcurrentRef.current &&
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

          const current = Math.round(currentFrameRef.current);
          if (index === 0 || Math.abs(index - current) <= 1) {
            drawFrame(current);
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

    function prioritizeAround(center: number) {
      const c = Math.round(center);
      queuedRef.current = queuedRef.current.filter(
        (i) => Math.abs(i - c) <= PREFETCH_RADIUS + 8 || i === 0
      );
      for (let d = 0; d <= PREFETCH_RADIUS; d++) {
        enqueue(c + d, true);
        if (d > 0) enqueue(c - d, true);
      }
      pumpQueue();
    }

    function startBackgroundFill() {
      if (cancelled || bgStartedRef.current) return;
      bgStartedRef.current = true;
      maxConcurrentRef.current = MAX_CONCURRENT_BG;
      prioritizeAround(currentFrameRef.current);
    }

    // Critical path: frame 0 only (poster already in HTML + preload)
    enqueue(0, true);
    pumpQueue();

    // Warm a small forward window after idle so first scroll feels filled-in
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId = 0;
    let idleTimeout = 0;
    const warmNearby = () => {
      if (cancelled || bgStartedRef.current) return;
      for (let i = 1; i <= 12; i++) enqueue(i, false);
      pumpQueue();
    };
    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(warmNearby, { timeout: 1200 });
    } else {
      idleTimeout = window.setTimeout(warmNearby, 600);
    }

    function resizeCanvas() {
      if (!canvas || !media || cancelled) return;

      const rect = media.getBoundingClientRect();
      const cssW = Math.max(1, Math.round(rect.width) || window.innerWidth);
      const cssH = Math.max(1, Math.round(rect.height) || window.innerHeight);
      const nativeDpr = window.devicePixelRatio || 1;
      const dpr = Math.min(Math.max(nativeDpr, 2), 3);

      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;

      const bw = Math.round(cssW * dpr);
      const bh = Math.round(cssH * dpr);
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        // Re-draw after resize (canvas clear is inherent to size change)
        drawFrame(Math.round(currentFrameRef.current));
      }
    }

    resizeCanvas();
    const raf1 = requestAnimationFrame(() => {
      resizeCanvas();
      requestAnimationFrame(resizeCanvas);
    });

    const ro = new ResizeObserver(() => resizeCanvas());
    ro.observe(media);
    window.addEventListener("resize", resizeCanvas, { passive: true });

    let animId = 0;

    function renderLoop() {
      const prev = Math.round(currentFrameRef.current);
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.35;
        const next = Math.min(
          Math.max(Math.round(currentFrameRef.current), 0),
          TOTAL_FRAMES - 1
        );
        // Only paint when the displayed frame index changes
        if (next !== prev || next !== lastDrawnRef.current) {
          drawFrame(next);
        }
        animId = requestAnimationFrame(renderLoop);
      } else {
        const final = Math.min(
          Math.max(Math.round(targetFrameRef.current), 0),
          TOTAL_FRAMES - 1
        );
        if (final !== lastDrawnRef.current) drawFrame(final);
        animId = 0;
      }
    }

    function updateScrub() {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const scrollableDistance = heroRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
      if (bgStartedRef.current || progress > 0.01) {
        startBackgroundFill();
        prioritizeAround(targetFrameRef.current);
      }
      if (!animId) animId = requestAnimationFrame(renderLoop);
    }

    window.addEventListener("scroll", updateScrub, { passive: true });
    updateScrub();

    return () => {
      cancelled = true;
      if (idleId && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(idleId);
      }
      if (idleTimeout) window.clearTimeout(idleTimeout);
      cancelAnimationFrame(raf1);
      ro.disconnect();
      window.removeEventListener("scroll", updateScrub);
      window.removeEventListener("resize", resizeCanvas);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div ref={mediaRef} className="hero-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-frames/ezgif-frame-001.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          width={FRAME_WIDTH}
          height={FRAME_HEIGHT}
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
            // Transparent until first paint so poster shows through (no black flash)
            backgroundColor: "transparent",
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
