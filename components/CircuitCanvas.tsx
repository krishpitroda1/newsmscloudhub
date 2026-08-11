"use client";

import { useEffect, useRef } from "react";

export default function CircuitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Theme Colors
    const LINE_COLOR = "rgba(255,255,255,0.22)";
    const OUTER_BORDER_COLOR = "#f3efefff"; // Cyan blue matching "The shortest path." text
    const PULSE_COLOR = "#22D3EE";
    const NODE_COLOR = "rgba(255,255,255,0.75)";
    const CLOUD_FILL_START = "#1A3FA8"; // Dark blue (matches logo left side)
    const CLOUD_FILL_END   = "#1B9FD4"; // Cyan-blue (matches logo right side)

    let dims = { w: 0, h: 0 };

    function applySize(w: number, h: number) {
      if (w <= 0 || h <= 0 || !canvas || !ctx) return;
      dims = { w, h };
      canvas.width = Math.round(w * DPR);
      canvas.height = Math.round(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    let resizeObserver: ResizeObserver | null = null;
    if (typeof window !== "undefined" && window.ResizeObserver) {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0] && entries[0].contentRect) {
          const r = entries[0].contentRect;
          applySize(r.width, r.height);
        }
      });
      resizeObserver.observe(canvas);
    } else {
      const handleResize = () => {
        if (canvas) {
          const r = canvas.getBoundingClientRect();
          applySize(r.width, r.height);
        }
      };
      window.addEventListener("resize", handleResize);
    }

    const r0 = canvas.getBoundingClientRect();
    applySize(r0.width, r0.height);

    // Cloud Silhouette Coordinates (0 - 1)
    const cloud: [number, number][] = [
      [0.18, 0.62],
      [0.14, 0.5],
      [0.2, 0.38],
      [0.3, 0.34],
      [0.34, 0.24],
      [0.48, 0.18],
      [0.62, 0.22],
      [0.7, 0.32],
      [0.82, 0.34],
      [0.9, 0.46],
      [0.86, 0.58],
      [0.88, 0.62],
      [0.18, 0.62],
    ];

    // Internal PCB Circuit Traces
    const traces: [number, number][][] = [
      [
        [0.3, 0.62],
        [0.3, 0.5],
        [0.38, 0.5],
        [0.38, 0.4],
      ],
      [
        [0.42, 0.62],
        [0.42, 0.46],
      ],
      [
        [0.5, 0.62],
        [0.5, 0.44],
        [0.58, 0.44],
        [0.58, 0.36],
      ],
      [
        [0.62, 0.62],
        [0.62, 0.48],
        [0.7, 0.48],
        [0.7, 0.4],
      ],
      [
        [0.74, 0.62],
        [0.74, 0.52],
      ],
    ];

    // Static Junction Square Markers
    const traceNodes: [number, number][] = [
      [0.38, 0.4],
      [0.42, 0.46],
      [0.58, 0.36],
      [0.7, 0.4],
      [0.74, 0.52],
    ];

    // Vertical Drip Lines (Hanging cables beneath cloud)
    const drips = [0.34, 0.5, 0.66];
    const t0 = performance.now();

    function draw(now: number) {
      if (!ctx) return;
      const { w, h } = dims;
      if (w <= 0 || h <= 0) {
        if (!reduceMotion) animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      const elapsed = reduceMotion ? 0 : Math.max(0, (now - t0) / 1000);
      const P = (pt: [number, number]) => ({ x: pt[0] * w, y: pt[1] * h });

      // Build cloud path
      ctx.beginPath();
      cloud.forEach((pt, i) => {
        const p = P(pt);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.closePath();

      // Fill cloud with blue gradient matching logo
      const cloudLeft  = cloud.reduce((min, pt) => Math.min(min, pt[0] * w), Infinity);
      const cloudRight = cloud.reduce((max, pt) => Math.max(max, pt[0] * w), -Infinity);
      const fillGrad = ctx.createLinearGradient(cloudLeft, 0, cloudRight, 0);
      fillGrad.addColorStop(0, CLOUD_FILL_START);
      fillGrad.addColorStop(1, CLOUD_FILL_END);
      ctx.fillStyle = fillGrad;
      ctx.globalAlpha = 0.88;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Draw Outer Cloud Outline in Cyan Blue (on top of fill)
      ctx.strokeStyle = OUTER_BORDER_COLOR;
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Draw Internal Traces & Traveling Pulses
      traces.forEach((path, idx) => {
        ctx.strokeStyle = LINE_COLOR;
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        path.forEach((pt, i) => {
          const p = P(pt);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();

        const total = path.length - 1;
        const tp = (((elapsed * 0.35 + idx * 0.22) % 1) + 1) % 1;
        const seg = Math.max(0, Math.min(total - 1, Math.floor(tp * total)));
        const segT = tp * total - seg;
        const a = P(path[seg]);
        const b = P(path[seg + 1] || path[seg]);
        const px = a.x + (b.x - a.x) * segT;
        const py = a.y + (b.y - a.y) * segT;

        ctx.fillStyle = PULSE_COLOR;
        ctx.beginPath();
        ctx.arc(px, py, 2.6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Junction Squares
      traceNodes.forEach((pt) => {
        const p = P(pt);
        ctx.fillStyle = NODE_COLOR;
        ctx.fillRect(p.x - 2.5, p.y - 2.5, 5, 5);
      });

      // Draw Hub Node at top antenna base
      const hub = P([0.48, 0.18]);
      ctx.fillStyle = PULSE_COLOR;
      ctx.beginPath();
      ctx.arc(hub.x, hub.y, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(34,211,238,0.35)";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(hub.x, hub.y, 4, 0, Math.PI * 2);
      ctx.stroke();

      // Draw Hanging Cable Drips
      drips.forEach((x, idx) => {
        const top = P([x, 0.62]);
        const bottom = P([x, 0.62 + 0.24]);
        ctx.strokeStyle = LINE_COLOR;
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(top.x, top.y);
        ctx.lineTo(bottom.x, bottom.y);
        ctx.stroke();

        const dp = (((elapsed * 0.5 + idx * 0.33) % 1) + 1) % 1;
        const dy = top.y + (bottom.y - top.y) * dp;

        ctx.fillStyle = PULSE_COLOR;
        ctx.beginPath();
        ctx.arc(top.x, dy, 2.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = LINE_COLOR;
        ctx.beginPath();
        ctx.arc(bottom.x, bottom.y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduceMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    }

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="cloud-anim relative aspect-square w-full max-w-[460px] mx-auto flex items-center justify-center">
      <canvas
        ref={canvasRef}
        id="cloudCanvas"
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
}
