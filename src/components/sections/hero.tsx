"use client";

import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 240;
/** How many frames ahead/behind the playhead to keep warm */
const LOOKAHEAD = 14;
const LOOKBEHIND = 6;
const MAX_IN_FLIGHT = 6;

function frameSrc(index0: number) {
  const n = String(index0 + 1).padStart(3, "0");
  return `/assets/hero-frames/ezgif-frame-${n}.webp`;
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<(HTMLImageElement | undefined)[]>([]);
  const loadingRef = useRef<Set<number>>(new Set());
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const lastDrawnRef = useRef<number>(-1);
  const animIdRef = useRef<number>(0);
  const needsDrawRef = useRef(false);
  const scrubActiveRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // #region agent log
    const perfStart = performance.now();
    let loadedCount = 0;
    let drawCount = 0;
    let scrollHandlerCount = 0;
    let lastFpsSample = performance.now();
    let framesSinceSample = 0;
    let peakCached = 0;
    const dbg = (message: string, data: Record<string, unknown>, hypothesisId: string) => {
      if (!new URLSearchParams(window.location.search).has("debugperf")) return;
      fetch("http://127.0.0.1:7486/ingest/020ac0d2-1f6c-4307-8fbd-75c6be112920", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "4a5856" },
        body: JSON.stringify({
          sessionId: "4a5856",
          location: "hero.tsx",
          message,
          data,
          timestamp: Date.now(),
          hypothesisId,
          runId: "post-fix",
        }),
      }).catch(() => {});
    };
    dbg(
      "hero_mount",
      {
        totalFrames: TOTAL_FRAMES,
        strategy: "windowed-webp",
        dpr: window.devicePixelRatio,
        mem:
          (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory
            ?.usedJSHeapSize ?? null,
      },
      "A"
    );
    // #endregion

    function countCached() {
      let n = 0;
      for (let i = 0; i < TOTAL_FRAMES; i++) if (imagesRef.current[i]?.complete) n++;
      return n;
    }

    function evictOutsideWindow(center: number) {
      const lo = Math.max(0, Math.floor(center) - LOOKBEHIND - 4);
      const hi = Math.min(TOTAL_FRAMES - 1, Math.ceil(center) + LOOKAHEAD + 4);
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (i >= lo && i <= hi) continue;
        if (!imagesRef.current[i]) continue;
        // Drop decoded bitmap reference; HTTP cache keeps bytes for re-fetch
        imagesRef.current[i] = undefined;
        loadingRef.current.delete(i);
      }
    }

    function ensureFrame(index: number, priority: "high" | "low" = "low") {
      if (index < 0 || index >= TOTAL_FRAMES) return;
      if (imagesRef.current[index]?.complete) return;
      if (loadingRef.current.has(index)) return;
      if (loadingRef.current.size >= MAX_IN_FLIGHT && priority !== "high") return;

      loadingRef.current.add(index);
      const img = new Image();
      img.decoding = "async";
      img.fetchPriority = priority;
      const t0 = performance.now();
      img.onload = () => {
        imagesRef.current[index] = img;
        loadingRef.current.delete(index);
        loadedCount += 1;
        peakCached = Math.max(peakCached, countCached());
        needsDrawRef.current = true;
        kickRenderLoop();
        // #region agent log
        if (
          loadedCount === 1 ||
          loadedCount === 10 ||
          loadedCount === 30 ||
          loadedCount % 50 === 0
        ) {
          dbg(
            "frames_loaded_milestone",
            {
              loadedCount,
              cachedNow: countCached(),
              peakCached,
              elapsedMs: Math.round(performance.now() - perfStart),
              lastDecodeMs: Math.round(performance.now() - t0),
              mem:
                (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory
                  ?.usedJSHeapSize ?? null,
            },
            "A"
          );
        }
        // #endregion
      };
      img.onerror = () => {
        loadingRef.current.delete(index);
      };
      img.src = frameSrc(index);
    }

    function warmWindow(center: number) {
      const c = Math.round(center);
      ensureFrame(c, "high");
      // Prefer ahead of playhead (scroll direction typically increases)
      for (let d = 1; d <= LOOKAHEAD; d++) {
        ensureFrame(c + d, d <= 3 ? "high" : "low");
        if (d <= LOOKBEHIND) ensureFrame(c - d, "low");
      }
      evictOutsideWindow(center);
    }

    function nearestReadyFrame(index: number): HTMLImageElement | undefined {
      const exact = imagesRef.current[index];
      if (exact?.complete) return exact;
      for (let d = 1; d <= LOOKAHEAD; d++) {
        const a = imagesRef.current[index - d];
        if (a?.complete) return a;
        const b = imagesRef.current[index + d];
        if (b?.complete) return b;
      }
      return imagesRef.current[0];
    }

    function drawFrame(index: number) {
      if (!canvas || !ctx) return;
      const img = nearestReadyFrame(index);
      if (!img || !img.complete) return;

      const width = canvas.width;
      const height = canvas.height;
      if (width === 0 || height === 0) return;

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
      lastDrawnRef.current = index;
    }

    function resizeCanvas() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      needsDrawRef.current = true;
      kickRenderLoop();
    }

    function updateScrub() {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const scrollableDistance = heroRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const rawProgress = -rect.top / scrollableDistance;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      // Defer canvas scrub + frame network until the user actually scrolls the hero.
      // Keeps the lightweight poster as the early paint / LCP candidate.
      if (!scrubActiveRef.current) {
        if (progress <= 0.002 && Math.abs(rect.top) < 8) return;
        scrubActiveRef.current = true;
        ensureFrame(0, "high");
        for (let i = 1; i <= 4; i++) ensureFrame(i, "low");
        if (canvas) canvas.style.opacity = "1";
        // #region agent log
        dbg("scrub_activated", { progress: Number(progress.toFixed(3)), elapsedMs: Math.round(performance.now() - perfStart) }, "A");
        // #endregion
      }

      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
      warmWindow(targetFrameRef.current);
      needsDrawRef.current = true;
      kickRenderLoop();
      // #region agent log
      scrollHandlerCount += 1;
      if (scrollHandlerCount === 1 || scrollHandlerCount % 30 === 0) {
        dbg(
          "scroll_scrub",
          {
            scrollHandlerCount,
            progress: Number(progress.toFixed(3)),
            targetFrame: Number(targetFrameRef.current.toFixed(1)),
            loadedCount,
            cachedNow: countCached(),
            inFlight: loadingRef.current.size,
          },
          "B"
        );
      }
      // #endregion
    }

    function renderLoop() {
      animIdRef.current = 0;
      framesSinceSample += 1;
      const diff = targetFrameRef.current - currentFrameRef.current;
      let keepGoing = false;

      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current += diff * 0.35;
        keepGoing = true;
        needsDrawRef.current = true;
      }

      if (needsDrawRef.current) {
        const frameToDraw = Math.min(
          Math.max(Math.round(currentFrameRef.current), 0),
          TOTAL_FRAMES - 1
        );
        if (frameToDraw !== lastDrawnRef.current || keepGoing) {
          drawFrame(frameToDraw);
          drawCount += 1;
        }
        needsDrawRef.current = keepGoing;
      }

      // #region agent log
      const now = performance.now();
      if (now - lastFpsSample >= 1000) {
        dbg(
          "raf_fps_sample",
          {
            fps: framesSinceSample,
            drawsLastSec: drawCount,
            loadedCount,
            cachedNow: countCached(),
            peakCached,
            currentFrame: Number(currentFrameRef.current.toFixed(1)),
            looping: keepGoing,
            mem:
              (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory
                ?.usedJSHeapSize ?? null,
          },
          "B"
        );
        framesSinceSample = 0;
        drawCount = 0;
        lastFpsSample = now;
      }
      // #endregion

      if (keepGoing || needsDrawRef.current || loadingRef.current.size > 0) {
        animIdRef.current = requestAnimationFrame(renderLoop);
      }
    }

    function kickRenderLoop() {
      if (!animIdRef.current) {
        animIdRef.current = requestAnimationFrame(renderLoop);
      }
    }

    // Do NOT prefetch scrub frames on mount — poster handles first paint / LCP.
    // Frame loading starts on first hero scroll (see updateScrub).
    if (canvas) canvas.style.opacity = "0";

    // #region agent log
    dbg("first_frame_deferred", { strategy: "poster-lcp-defer-canvas", poster: "ezgif-frame-001-poster.webp" }, "A");
    const firstCheck = window.setInterval(() => {
      if (imagesRef.current[0]?.complete) {
        dbg(
          "first_frame_ready",
          {
            elapsedMs: Math.round(performance.now() - perfStart),
            w: imagesRef.current[0]!.naturalWidth,
            h: imagesRef.current[0]!.naturalHeight,
            src: "webp-1600",
          },
          "A"
        );
        window.clearInterval(firstCheck);
      }
    }, 50);
    // #endregion

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("scroll", updateScrub, { passive: true });
    updateScrub();
    // No rAF until scrub activates

    return () => {
      window.clearInterval(firstCheck);
      window.removeEventListener("scroll", updateScrub);
      window.removeEventListener("resize", resizeCanvas);
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div className="hero-media">
        {/* Static poster prevents blank canvas before first frame paints (CLS + LCP) */}
        <img
          src="/assets/hero-frames/ezgif-frame-001-poster.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          width={1280}
          height={720}
          className="hero-video hero-poster"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <canvas
          ref={canvasRef}
          className="hero-video"
          style={{ position: "relative", zIndex: 1, opacity: 0, transition: "opacity 120ms linear" }}
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
