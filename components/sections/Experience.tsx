import ExperienceCard from "../cards/ExperienceCard";
import { FaRoad } from "react-icons/fa6";
const experiences = [
  {
    period: "Sept 2024 — Present",
    company: "Viabletree",
    role: "Associate Software Engineer",
    description:
      "Leading the development of enterprise-level ERP modules using Next.js, TypeScript, and Ant Design. Responsible for building scalable frontend architecture, optimizing performance, and integrating backend APIs for real-time business operations. Improved system efficiency and UI responsiveness across multiple enterprise dashboards.",
    active: true,
  },
  {
    period: "Dec 2021 — Sept 2024",
    company: "Techonza Technology",
    role: "Frontend Developer",
    description:
      "Converted complex Figma designs into responsive and interactive web applications using React.js and Tailwind CSS. Built reusable component libraries, integrated REST APIs, and collaborated closely with backend teams to deliver production-grade SaaS products.",
    active: false,
  },
  {
    period: "Jun 2021 — Nov 2021",
    company: "Freelance Projects",
    role: "Web Developer",
    description:
      "Worked on multiple freelance projects including business websites, dashboards, and landing pages. Focused on performance optimization, SEO improvements, and responsive UI development using modern frontend technologies.",
    active: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto py-32 px-8 relative">
      <h2 className="font-heading text-4xl font-bold uppercase mb-20 flex items-center gap-4">
        <FaRoad className="h-6 w-6" />
        Career Roadmap.
      </h2>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
