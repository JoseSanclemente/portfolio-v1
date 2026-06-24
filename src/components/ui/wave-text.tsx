"use client";

import { useState, useEffect, useRef } from "react";

function getLift(distance: number): number {
  if (distance === 0) return 10;
  if (distance === 1) return 6;
  if (distance === 2) return 3;
  return 0;
}

export default function WaveText({ text }: { text: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const chars = text.split("");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerLeft = container.getBoundingClientRect().left;
    const containerWidth = container.getBoundingClientRect().width;

    const offsets = letterRefs.current.map((el) =>
      el ? el.getBoundingClientRect().left - containerLeft : 0
    );

    chars.forEach((char, i) => {
      const el = letterRefs.current[i];
      if (!el || char === " ") return;
      el.style.backgroundImage = "var(--gradient-loop)";
      el.style.backgroundSize = `${containerWidth * 2}px auto`;
      (el.style as any).webkitBackgroundClip = "text";
      el.style.backgroundClip = "text";
      (el.style as any).webkitTextFillColor = "transparent";
    });

    const duration = 4000;
    let startTime: number | null = null;
    let raf: number;

    const animate = (ts: number) => {
      if (startTime === null) startTime = ts;
      const pos =
        (((ts - startTime) % duration) / duration) * containerWidth * 2;
      chars.forEach((char, i) => {
        const el = letterRefs.current[i];
        if (el && char !== " ") {
          el.style.backgroundPositionX = `${-(offsets[i] + pos)}px`;
        }
      });
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [text]);

  return (
    <span ref={containerRef} onMouseLeave={() => setHoveredIndex(null)}>
      {chars.map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            letterRefs.current[i] = el;
          }}
          onMouseEnter={() => setHoveredIndex(i)}
          style={{
            position: "relative",
            top:
              hoveredIndex !== null
                ? `-${getLift(Math.abs(i - hoveredIndex))}px`
                : "0px",
            transition: "top 0.15s ease",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
