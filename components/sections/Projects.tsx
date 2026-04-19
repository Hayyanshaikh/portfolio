import { FaGraduationCap, FaRobot, FaShieldAlt } from "react-icons/fa";
import ProjectCard from "../cards/ProjectCard";

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
  return (
    <section id="projects" className="max-w-7xl mx-auto py-32 px-8 relative">
      <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-24 tracking-tighter">
        Selected <br />
        Registry.
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
