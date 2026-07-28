"use client";

import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 240;
const FRAME_WIDTH = 3840;
const FRAME_HEIGHT = 2160;
const FRAME_PAD = (n: number) => String(n).padStart(3, "0");
const frameUrl = (n: number) =>
  `/assets/hero-frames/ezgif-frame-${FRAME_PAD(n)}.jpg`;

/** Same full-res JPGs — only the *schedule* changes (critical path first). */
const MAX_CONCURRENT_CRITICAL = 2;
const MAX_CONCURRENT_BG = 4;
const PREFETCH_RADIUS = 20;

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | undefined)[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
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
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // #region agent log
    const __dbg = (message: string, data: Record<string, unknown>, hypothesisId: string) => {
      fetch('http://127.0.0.1:7486/ingest/020ac0d2-1f6c-4307-8fbd-75c6be112920',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'4a5856'},body:JSON.stringify({sessionId:'4a5856',location:'hero.tsx',message,data,timestamp:Date.now(),hypothesisId,runId:'post-fix'})}).catch(()=>{});
    };
    let loadedCount = 0;
    const t0 = performance.now();
    __dbg('hero_boot', {
      strategy: 'lcp-first-then-windowed-same-jpg',
      qualityUnchanged: true,
      frameW: FRAME_WIDTH,
      frameH: FRAME_HEIGHT,
    }, 'A');
    // #endregion

    function drawFrame(index: number) {
      if (!canvas || !ctx || cancelled) return;
      const img = imagesRef.current[index] || imagesRef.current[0];

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!img || !img.complete || !img.naturalWidth) return;

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
        // Identical assets — no recompression, no resize
        img.src = frameUrl(index + 1);
        img.onload = () => {
          if (cancelled) return;
          imagesRef.current[index] = img;
          loadingRef.current.delete(index);
          // #region agent log
          loadedCount++;
          if (loadedCount === 1 || loadedCount === 10 || loadedCount === 40 || loadedCount === TOTAL_FRAMES) {
            __dbg('frame_loaded', {
              loadedCount,
              index,
              ms: Math.round(performance.now() - t0),
              naturalW: img.naturalWidth,
              naturalH: img.naturalHeight,
            }, 'A');
          }
          // #endregion
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
      // #region agent log
      __dbg('bg_fill_start', { ms: Math.round(performance.now() - t0), loadedCount, mode: 'scroll-window-only' }, 'A');
      // #endregion
      // Do NOT enqueue all 240 — only scrub window (same full-res JPGs on demand)
      prioritizeAround(currentFrameRef.current);
    }

    // Critical path only: frame 0 (poster already in HTML + preload)
    enqueue(0, true);
    pumpQueue();

    // #region agent log
    const summaryTimer = window.setTimeout(() => {
      const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
      const frames = resources.filter((r) => r.name.includes("/assets/hero-frames/"));
      const transfer = frames.reduce((s, r) => s + (r.transferSize || 0), 0);
      __dbg("network_2s", {
        frameEntries: frames.length,
        frameTransferKB: Math.round(transfer / 1024),
        loadedCount,
        bgStarted: bgStartedRef.current,
        queuedRemaining: queuedRef.current.length,
      }, "A");
    }, 2000);
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) {
        __dbg("lcp", {
          startTime: Math.round(e.startTime),
          size: (e as PerformanceEntry & { size?: number }).size ?? null,
          el: (e as PerformanceEntry & { element?: Element }).element?.tagName ?? null,
        }, "B");
      }
    }).observe({ type: "largest-contentful-paint", buffered: true });
    // #endregion

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
      if (bgStartedRef.current || progress > 0.01) {
        startBackgroundFill();
        prioritizeAround(targetFrameRef.current);
      }
      if (!animId) animId = requestAnimationFrame(renderLoop);
    }

    let animId = 0;
    function renderLoop() {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.35;
        drawFrame(
          Math.min(Math.max(Math.round(currentFrameRef.current), 0), TOTAL_FRAMES - 1)
        );
        animId = requestAnimationFrame(renderLoop);
      } else {
        animId = 0;
      }
    }

    window.addEventListener("scroll", updateScrub, { passive: true });
    updateScrub();

    return () => {
      cancelled = true;
      // #region agent log
      window.clearTimeout(summaryTimer);
      // #endregion
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
