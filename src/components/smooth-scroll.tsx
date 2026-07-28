"use client";

import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  // #region agent log
  useEffect(() => {
    if (!new URLSearchParams(window.location.search).has("debugperf")) return;
    const t0 = performance.now();
    fetch('http://127.0.0.1:7486/ingest/020ac0d2-1f6c-4307-8fbd-75c6be112920',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'4a5856'},body:JSON.stringify({sessionId:'4a5856',location:'smooth-scroll.tsx',message:'lenis_mounted',data:{elapsedMs:Math.round(performance.now()-t0)},timestamp:Date.now(),hypothesisId:'C',runId:'post-fix'})}).catch(()=>{});
    const t = window.setTimeout(() => {
      const resources2 = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const frames2 = resources2.filter(r => r.name.includes('hero-frames') || r.name.includes('ezgif-frame'));
      const js2 = resources2.filter(r => r.name.includes('/_next/static/chunks/') || r.name.includes('.js'));
      fetch('http://127.0.0.1:7486/ingest/020ac0d2-1f6c-4307-8fbd-75c6be112920',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'4a5856'},body:JSON.stringify({sessionId:'4a5856',location:'smooth-scroll.tsx',message:'resource_snapshot_5s',data:{jsCount:js2.length,jsTransferKB:Math.round(js2.reduce((s,r)=>s+(r.transferSize||0),0)/1024),frameCount:frames2.length,frameTransferKB:Math.round(frames2.reduce((s,r)=>s+(r.transferSize||0),0)/1024),navTiming: (() => { const n = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined; return n ? { domContentLoaded: Math.round(n.domContentLoadedEventEnd), loadEvent: Math.round(n.loadEventEnd), responseEnd: Math.round(n.responseEnd) } : null })() },timestamp:Date.now(),hypothesisId:'A',runId:'post-fix'})}).catch(()=>{});
    }, 5000);
    return () => window.clearTimeout(t);
  }, []);
  // #endregion

  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
