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

  if (!Lenis) return <>{children}</>;

  return (
    <Lenis root options={{ lerp: 0.05, wheelMultiplier: 1.1, smoothWheel: true }}>
      {children}
    </Lenis>
  );
}
