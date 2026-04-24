import { Metadata } from "next";
import React from "react";

type Experience = {
  period: string;
  company: string;
  role: string;
  description: string[];
  active: boolean;
};

type Props = {
  exp: Experience;
  index: number;
};

export const metadata: Metadata = {
  title: "Meta Title",
  description: "Meta Description",
};

const ExperienceCard = ({ exp, index }: Props) => {
  return (
    <div
      key={index}
      className="reveal flex flex-col md:flex-row gap-12 border-b border-white/5 pb-6 relative"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="md:w-1/3">
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`w-2 h-2 rounded-full ${
              exp.active
                ? "bg-green-500 shadow shadow-green-300"
                : "bg-white/20"
            }`}
          ></span>
          <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">
            {exp.period}
          </span>
        </div>
        <h3 className="text-2xl font-bold mt-4 uppercase">{exp.company}</h3>
      </div>

      <div className="md:w-2/3">
        <h4 className="text-xl font-bold uppercase mb-6 flex items-center gap-3">
          {exp.role}
        </h4>
        <ul className="list-disc list-outside ml-5 text-white/80 leading-relaxed space-y-2 mb-8">
          {exp.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
