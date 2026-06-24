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
    const CW = probe.getBoundingClientRect().width || CHAR_W;
    document.body.removeChild(probe);

    let cols = Math.ceil(window.innerWidth / CW);
    let rows = Math.ceil(window.innerHeight / CHAR_H);
    let buf1 = new Float32Array(cols * rows);
    let buf2 = new Float32Array(cols * rows);
    let rafId = 0;

    function drop(x: number, y: number, radius: number, force: number) {
      const xi = Math.floor(x);
      const yi = Math.floor(y);
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (dx * dx + dy * dy <= radius * radius) {
            const nx = xi + dx;
            const ny = yi + dy;
            if (nx > 0 && nx < cols - 1 && ny > 0 && ny < rows - 1)
              buf1[nx + ny * cols] += force;
          }
        }
      }
    }

    function loop() {
      rafId = requestAnimationFrame(loop);
      if (!el) return;

      let frame = "";
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = x + y * cols;
          if (x === 0 || x === cols - 1 || y === 0 || y === rows - 1) {
            buf2[i] = 0;
            frame += CHARS[0];
          } else {
            buf2[i] =
              (buf1[i - 1] + buf1[i + 1] + buf1[i - cols] + buf1[i + cols]) /
                2 -
              buf2[i];
            buf2[i] *= DAMPING;

            const xSlope = buf2[i - 1] - buf2[i + 1];
            const ySlope = buf2[i - cols] - buf2[i + cols];
            const slope = Math.abs(xSlope) + Math.abs(ySlope);
            const val = Math.min(CHARS.length - 1, Math.floor(slope / 8));
            frame += CHARS[val];
          }
        }
        frame += "\n";
      }
      el.textContent = frame;

      const tmp = buf1;
      buf1 = buf2;
      buf2 = tmp;

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
      cols = Math.ceil(window.innerWidth / CW);
      rows = Math.ceil(window.innerHeight / CHAR_H);
      buf1 = new Float32Array(cols * rows);
      buf2 = new Float32Array(cols * rows);
    }

    function onVisibility() {
      if (document.hidden) cancelAnimationFrame(rafId);
      else rafId = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
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
