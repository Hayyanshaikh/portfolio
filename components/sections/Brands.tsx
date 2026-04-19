import React from "react";

const brands = [
  "Viabletree",
  "Techonza",
  "Freelance",
  "Innovate Solutions",
  "Global Tech",
  "Digital Pulse",
  "NextGen ERP",
  "Cloud Stream",
];

export default function Brands() {
  return (
    <section className="py-20 overflow-hidden bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8 mb-10">
        <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
          Trusted by & Collaborated with
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...brands, ...brands].map((brand, index) => (
            <span
              data-cursor="hover"
              key={index}
              className="mx-12 text-4xl md:text-6xl font-heading font-bold text-white/20 hover:text-white/60 transition-colors cursor-default select-none"
            >
              {brand}.
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
