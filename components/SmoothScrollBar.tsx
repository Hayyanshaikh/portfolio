// components/SmoothScroll.tsx
"use client";

import { useEffect, useRef } from "react";

export default function SmoothScrollBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateThumb = () => {
      if (!thumbRef.current) return;
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const thumbHeight =
        (window.innerHeight / document.body.scrollHeight) * 200;
      thumbRef.current.style.height = `${thumbHeight}vh`;
      thumbRef.current.style.transform = `translateY(${scrollPercent * (100 - thumbHeight)}vh)`;
    };

    window.addEventListener("scroll", updateThumb);
    updateThumb();
    return () => window.removeEventListener("scroll", updateThumb);
  }, []);

  return (
    <>
      {children}
      {/* Custom Scrollbar */}
      <div className="fixed right-2 top-0 h-screen w-[2px] bg-white/5 z-[999]">
        <div
          ref={thumbRef}
          className="w-full bg-white/30 rounded-full transition-transform duration-75"
        />
      </div>
    </>
  );
}
