"use client";
import { useEffect, useRef } from "react";

const CHARS = ["·", ":", "~", "≈", "≋", "∿", "⌇", "▒", "▓"];
const TRAIL_CHARS = ["◦", "○", "◎", "●"];
const TRAIL_THRESHOLD = 0.18;
const CLICK_CHARS = ["·", "~", "*", "✶"];
const CLICK_WAVE_SPEED = 10;
const CLICK_WAVE_RING = 2.5;
const CLICK_WAVE_TTL = 2.5;
const CHAR_W = 7;
const CHAR_H = 14;
const FPS_TARGET = 30;
const FRAME_INTERVAL = 1000 / FPS_TARGET;

export default function AsciiWater() {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const el = preRef.current;
    if (!el) return;

    let cols = Math.ceil(window.innerWidth / CHAR_W) + 1;
    let rows = Math.ceil(window.innerHeight / CHAR_H) + 1;
    let rafId = 0;
    let lastTime = 0;
    const TRAIL_MAX = 15;
    const trail: Array<{ col: number; row: number; time: number }> = [];

    function onMouseMove(e: MouseEvent) {
      trail.push({
        col: e.clientX / CHAR_W,
        row: e.clientY / CHAR_H,
        time: performance.now() * 0.001,
      });
      if (trail.length > TRAIL_MAX) trail.shift();
    }
    window.addEventListener("mousemove", onMouseMove);

    const clicks: Array<{ col: number; row: number; time: number }> = [];
    function onClick(e: MouseEvent) {
      clicks.push({
        col: e.clientX / CHAR_W,
        row: e.clientY / CHAR_H,
        time: performance.now() * 0.001,
      });
    }
    window.addEventListener("click", onClick);

    function buildGrid(t: number): string {
      const cx = cols / 2;
      const cy = rows / 2;
      for (let i = clicks.length - 1; i >= 0; i--) {
        if (t - clicks[i].time > CLICK_WAVE_TTL) clicks.splice(i, 1);
      }

      const rowArr: string[] = [];
      for (let r = 0; r < rows; r++) {
        let row = "";
        for (let c = 0; c < cols; c++) {
          const h =
            Math.sin(c * 0.08 + r * 0.06 + t * 0.8) * 0.5 +
            Math.sin(c * 0.05 + r * 0.1 + t * 0.5) * 0.3 +
            Math.sin(c * 0.12 + r * 0.04 + t * 1.1) * 0.2 +
            Math.sin(
              Math.sqrt((c - cx) ** 2 * 0.01 + (r - cy) ** 2 * 0.03) - t * 0.3,
            ) *
              0.15;
          const waveIdx = Math.max(
            0,
            Math.min(
              CHARS.length - 1,
              Math.floor(((h + 1) / 2) * (CHARS.length - 1)),
            ),
          );

          let trailStrength = 0;
          for (let i = 0; i < trail.length; i++) {
            const pt = trail[i];
            const age = t - pt.time;
            if (age > 1.2) continue;
            const dc = c - pt.col;
            const dr = r - pt.row;
            const dist = Math.sqrt(dc * dc + dr * dr);
            trailStrength +=
              Math.abs(Math.sin(dist * 0.6 - t * 3.5)) *
              Math.exp(-dist * 0.25) *
              Math.exp(-age * 2.5) *
              0.55;
          }

          let clickWaveStrength = 0;
          for (let i = 0; i < clicks.length; i++) {
            const ck = clicks[i];
            const age = t - ck.time;
            const dc = c - ck.col;
            const dr = r - ck.row;
            const dist = Math.sqrt(dc * dc + dr * dr);
            const waveFront = age * CLICK_WAVE_SPEED;
            const distFromFront = dist - waveFront;
            if (Math.abs(distFromFront) < CLICK_WAVE_RING) {
              const inRingT = 1 - Math.abs(distFromFront) / CLICK_WAVE_RING;
              const decay = 1 - age / CLICK_WAVE_TTL;
              clickWaveStrength += inRingT * decay;
            }
          }

          if (clickWaveStrength > 0.15) {
            const cIdx = Math.min(
              CLICK_CHARS.length - 1,
              Math.floor((clickWaveStrength / 0.7) * CLICK_CHARS.length),
            );
            row += CLICK_CHARS[cIdx];
          } else if (trailStrength >= TRAIL_THRESHOLD) {
            const tIdx = Math.min(
              TRAIL_CHARS.length - 1,
              Math.floor((trailStrength / 0.8) * TRAIL_CHARS.length),
            );
            row += TRAIL_CHARS[tIdx];
          } else {
            row += CHARS[waveIdx];
          }
        }
        rowArr.push(row);
      }
      return rowArr.join("\n");
    }

    function loop(now: number) {
      rafId = requestAnimationFrame(loop);
      if (now - lastTime < FRAME_INTERVAL) return;
      if (!el) return;
      lastTime = now;

      const t = now * 0.001;
      el.textContent = buildGrid(t);

      const hue = 220 + Math.sin(t * 0.2) * 12;
      const sat = 60 + Math.sin(t * 0.1) * 10;
      const lit = 45 + Math.sin(t * 0.15) * 8;
      el.style.color = `hsl(${hue}, ${sat}%, ${lit}%)`;
    }

    rafId = requestAnimationFrame(loop);

    let resizeTimer = 0;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        cols = Math.ceil(window.innerWidth / CHAR_W) + 1;
        rows = Math.ceil(window.innerHeight / CHAR_H) + 1;
      }, 300);
    }

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(loop);
      }
    }

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
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
        opacity: 0.15,
        pointerEvents: "none",
        overflow: "hidden",
        whiteSpace: "pre",
        userSelect: "none",
      }}
    />
  );
}
