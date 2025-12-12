// src/components/CursorGlow.tsx
import React, { useEffect, useRef } from "react";

const IDLE_TIMEOUT = 1200; // ms

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);

  const targetX = useRef<number>(0);
  const targetY = useRef<number>(0);
  const currentX = useRef<number>(0);
  const currentY = useRef<number>(0);
  const idleTimeout = useRef<number | null>(null);
  const rafId = useRef<number | null>(null);

  // helper: compute the rest position (top-center below navbar)
  const computeRestPosition = () => {
    const centerX = window.innerWidth / 2;
    const topY = -20; // tweak this if you want it higher/lower
    return { x: centerX, y: topY };
  };

  useEffect(() => {
    // initial rest position
    const { x, y } = computeRestPosition();
    targetX.current = x;
    targetY.current = y;
    currentX.current = x;
    currentY.current = y;

    const el = glowRef.current;
    if (el) {
      el.style.transform = `translate3d(${x - 210}px, ${y - 210}px, 0)`; // 210 = half of 420px size
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;

      // reset idle timer
      if (idleTimeout.current) {
        window.clearTimeout(idleTimeout.current);
      }
      idleTimeout.current = window.setTimeout(() => {
        const rest = computeRestPosition();
        targetX.current = rest.x;
        targetY.current = rest.y;
      }, IDLE_TIMEOUT);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // smooth animation loop
    const animate = () => {
      const lerpFactor = 0.12; // smoothing
      currentX.current += (targetX.current - currentX.current) * lerpFactor;
      currentY.current += (targetY.current - currentY.current) * lerpFactor;

      if (glowRef.current) {
        const x = currentX.current - 210;
        const y = currentY.current - 210;
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (idleTimeout.current) window.clearTimeout(idleTimeout.current);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <div className="global-glow" ref={glowRef} />;
};
