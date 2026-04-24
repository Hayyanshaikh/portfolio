"use client";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import {
  FaGraduationCap,
  FaRobot,
  FaShieldAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import ProjectCard from "../cards/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const projects = [
  {
    icon: <FaGraduationCap className="w-12 h-12 text-white/20" />,
    category: "Learning Management",
    version: "v0.1",
    title: "SkillGro Platform",
    description:
      "SkillGro is a high-performance Learning Management System (LMS) designed for industry professionals to curate and deliver elite educational content. The architecture utilizes Next.js for server-side optimization and features a robust tracking engine that monitors student progression in real-time. It includes a comprehensive dashboard for course management, secure video streaming integration, and a seamless checkout experience.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    badge: null,
  },
  {
    icon: <FaRobot className="w-12 h-12 text-white/20" />,
    category: "SaaS / Enterprise",
    version: null,
    title: "My School ERP",
    description:
      "A sophisticated School Management ERP engineered with Next.js and TypeScript to automate educational administration. The system features a custom integration with the ChatGPT API to generate automated academic reports, student performance insights, and administrative summaries. It handles complex data structures including multi-tier grading systems, fee management, and teacher-student scheduling within a unified secure cloud environment.",
    tags: ["TypeScript", "AI Integration", "Full Stack"],
    badge: "Development",
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 text-white/20" />,
    category: "Fintech / Logic",
    version: "v1.02",
    title: "Fundex Solutions",
    description:
      "Fundex is a secure financial transaction portal designed for enterprise-level payment processing. The application focuses on data integrity and high-concurrency handling, providing real-time auditing dashboards for financial managers. It implements advanced security protocols for transaction logging and uses a scalable backend architecture to support rapid business growth and international payment standards.",
    tags: ["Node.js", "Security", "Real-time Data"],
    badge: null,
  },
];

export default function Projects() {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <section id="projects" className="max-w-7xl mx-auto py-32 px-8 relative">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-24 tracking-tighter">
          Selected <br />
          Projects.
        </h2>

        <div className="gap-4 justify-end hidden md:flex">
          <button
            onClick={() => swiperRef?.slidePrev()}
            className="projects-prev w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            onClick={() => swiperRef?.slideNext()}
            className="projects-next w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        speed={1200}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="projects-swiper !pb-16"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="h-auto">
            <ProjectCard project={project} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-4 mt-8 justify-center md:hidden">
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="projects-prev w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <FaChevronLeft className="text-white" />
        </button>
        <button
          onClick={() => swiperRef?.slideNext()}
          className="projects-next w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>
    </section>
  );
}
