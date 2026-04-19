import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

type Props = {
  t: Testimonial;
  index: number;
};

const TestimonialCard = ({ t, index }: Props) => {
  return (
    <div
      className="reveal group"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <FaQuoteLeft className="w-6 h-6 mb-6 opacity-20 text-white group-hover:opacity-100 transition-opacity" />

      <p className="text-xl italic font-light leading-relaxed mb-8 text-white">
        {t.quote}
      </p>

      <h5 className="font-bold uppercase">{t.name}</h5>

      <span className="text-[9px] font-bold uppercase tracking-widest opacity-50">
        {t.title}
      </span>
    </div>
  );
};

export default TestimonialCard;
