import React from "react";
import { FaCode, FaRocket, FaTerminal, FaLayerGroup } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi2";

const services = [
  {
    title: "Enterprise ERP Solutions",
    description:
      "Scalable ERP modules for streamlined business workflows and real-time operations.",
    icon: <FaLayerGroup className="w-8 h-8" />,
  },
  {
    title: "Full-Stack Development",
    description:
      "Production-ready SaaS applications using Next.js, Node.js, and TypeScript.",
    icon: <FaCode className="w-8 h-8" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Improving speed with code-splitting, lazy loading, and API optimization.",
    icon: <FaRocket className="w-8 h-8" />,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect conversion of Figma designs into responsive interfaces.",
    icon: <FaTerminal className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto py-32 px-8 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <h2 className="font-heading text-4xl font-bold uppercase mb-20 flex items-center gap-4">
            <span className="text-2xl">
              <HiOutlineLightBulb />
            </span>
            What I Offer.
          </h2>
        </div>

        {/* <div
          className="flex justify-end reveal"
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div> */}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="reveal group p-8 glass-card border border-white/5 hover:border-white/20 transition-all duration-500"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="mb-8 text-white/20 group-hover:text-white transition-colors duration-500">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">
              {service.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-500">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
