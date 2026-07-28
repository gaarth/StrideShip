"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Defer Lenis until after first paint / idle so it doesn't compete with LCP JS.
 * Native scroll works until Lenis mounts — no visual change once active.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [Lenis, setLenis] = useState<null | typeof import("lenis/react").ReactLenis>(null);

  useEffect(() => {
    let cancelled = false;
    const mount = () => {
      import("lenis/react").then((mod) => {
        if (!cancelled) setLenis(() => mod.ReactLenis);
      });
    };
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(mount, { timeout: 1200 });
      return () => {
        cancelled = true;
        w.cancelIdleCallback?.(id);
      };
    }
    const t = w.setTimeout(mount, 200);
    return () => {
      cancelled = true;
      w.clearTimeout(t);
    };
  }, []);

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7486/ingest/020ac0d2-1f6c-4307-8fbd-75c6be112920',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'4a5856'},body:JSON.stringify({sessionId:'4a5856',location:'smooth-scroll.tsx',message:'lenis_deferred_state',data:{mounted:!!Lenis},timestamp:Date.now(),hypothesisId:'B',runId:'post-fix'})}).catch(()=>{});
  }, [Lenis]);
  // #endregion

  if (!Lenis) return <>{children}</>;

  return (
    <Lenis root options={{ lerp: 0.05, wheelMultiplier: 1.1, smoothWheel: true }}>
      {children}
    </Lenis>
  );
}
