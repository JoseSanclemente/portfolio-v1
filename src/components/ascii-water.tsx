"use client";
import { useEffect, useRef } from "react";

const CHARS = [" ", ".", "·", ":", "~", "≈", "≋", "▒", "▓"];
const CHAR_W = 7;
const CHAR_H = 14;
const DAMPING = 0.988;
const MOUSE_FORCE = 60;
const CLICK_FORCE = 200;
const RAIN_INTERVAL = 1200;

export default function AsciiWater() {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const el = preRef.current;
    if (!el) return;

    const probe = document.createElement("span");
    probe.style.cssText = "position:absolute;visibility:hidden;font-family:monospace;font-size:12px;line-height:14px;white-space:pre";
    probe.textContent = "x";
    document.body.appendChild(probe);
    let CW: number;
    try {
      CW = probe.getBoundingClientRect().width || CHAR_W;
    } finally {
      document.body.removeChild(probe);
    }

    let visCols = Math.ceil(window.innerWidth / CW);
    let visRows = Math.ceil(window.innerHeight / CHAR_H);
    let bufCols = visCols + 2;
    let bufRows = visRows + 2;
    let buf1 = new Float32Array(bufCols * bufRows);
    let buf2 = new Float32Array(bufCols * bufRows);
    let rafId = 0;

    function drop(x: number, y: number, radius: number, force: number) {
      const xi = Math.floor(x) + 1;
      const yi = Math.floor(y) + 1;
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (dx * dx + dy * dy <= radius * radius) {
            const nx = xi + dx;
            const ny = yi + dy;
            if (nx > 0 && nx < bufCols - 1 && ny > 0 && ny < bufRows - 1)
              buf1[nx + ny * bufCols] += force;
          }
        }
      }
    }

    function loop() {
      rafId = requestAnimationFrame(loop);
      if (!el) return;

      const frameChars: string[] = [];
      for (let y = 0; y < visRows; y++) {
        for (let x = 0; x < visCols; x++) {
          const bx = x + 1;
          const by = y + 1;
          const i = bx + by * bufCols;
          buf2[i] =
            (buf1[i - 1] + buf1[i + 1] + buf1[i - bufCols] + buf1[i + bufCols]) /
              2 -
            buf2[i];
          buf2[i] *= DAMPING;

          const xSlope = buf2[i - 1] - buf2[i + 1];
          const ySlope = buf2[i - bufCols] - buf2[i + bufCols];
          const slope = Math.abs(xSlope) + Math.abs(ySlope);
          const val = Math.min(CHARS.length - 1, Math.floor(slope / 8));
          frameChars.push(CHARS[val]);
        }
        frameChars.push("\n");
      }
      el.textContent = frameChars.join("");

      const tmp = buf1; buf1 = buf2; buf2 = tmp;

      const t = performance.now() * 0.001;
      const hue = 210 + Math.sin(t * 0.2) * 8;
      const sat = 80;
      const lit = 72 + Math.sin(t * 0.15) * 6;
      el.style.color = `hsl(${hue}, ${sat}%, ${lit}%)`;
    }

    rafId = requestAnimationFrame(loop);

    function onMouseMove(e: MouseEvent) {
      drop(e.clientX / CW, e.clientY / CHAR_H, 1, MOUSE_FORCE);
    }
    function onClick(e: MouseEvent) {
      drop(e.clientX / CW, e.clientY / CHAR_H, 2, CLICK_FORCE);
    }
    // window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);

    // const rainTimer = setInterval(() => {
    //   drop(
    //     Math.random() * (cols - 2) + 1,
    //     Math.random() * (rows - 2) + 1,
    //     Math.floor(Math.random() * 2) + 1,
    //     Math.random() * 60 + 20
    //   );
    // }, RAIN_INTERVAL);

    function onResize() {
      visCols = Math.ceil(window.innerWidth / CW);
      visRows = Math.ceil(window.innerHeight / CHAR_H);
      bufCols = visCols + 2;
      bufRows = visRows + 2;
      buf1 = new Float32Array(bufCols * bufRows);
      buf2 = new Float32Array(bufCols * bufRows);
    }

    let mounted = true;
    function onVisibility() {
      if (document.hidden) {
        if (rafId) cancelAnimationFrame(rafId);
      } else if (mounted) {
        rafId = requestAnimationFrame(loop);
      }
    }

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      mounted = false;
      cancelAnimationFrame(rafId);
      // clearInterval(rainTimer);
      // window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <pre
      ref={preRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        margin: 0,
        padding: 0,
        fontFamily: "monospace",
        fontSize: "12px",
        lineHeight: "14px",
        opacity: 0.25,
        pointerEvents: "none",
        overflow: "hidden",
        whiteSpace: "pre",
        userSelect: "none",
      }}
    />
  );
}
