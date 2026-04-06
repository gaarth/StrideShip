"use client";

import { ReactLenis } from 'lenis/react';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
