"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  const isHovered = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='hover']")) {
        isHovered.current = true;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='hover']")) {
        isHovered.current = false;
      }
    };

    const animate = () => {
      circle.current.x += (mouse.current.x - circle.current.x) * 0.08;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
      }

      if (circleRef.current) {
        const scale = isHovered.current ? 2 : 1;
        circleRef.current.style.transform = `translate(${circle.current.x}px, ${circle.current.y}px) translate(-50%, -50%) scale(${scale})`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/40 rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
