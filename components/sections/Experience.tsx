import ExperienceCard from "../cards/ExperienceCard";
import { FaRoad } from "react-icons/fa6";
const experiences = [
  {
    period: "Sept 2024 — Present",
    company: "Viabletree",
    role: "Associate Software Engineer",
    description: [
      "Leading development of 10+ enterprise ERP modules using Next.js, TypeScript, and Ant Design.",
      "Built scalable frontend architecture reducing API response handling time by 35%.",
      "Improved UI responsiveness across 5+ enterprise dashboards by optimizing component rendering.",
    ],
    active: true,
  },
  {
    period: "Dec 2021 — Sept 2024",
    company: "Techonza Technology",
    role: "Frontend Developer",
    description: [
      "Converted 20+ Figma designs into responsive web apps using React.js and Tailwind CSS.",
      "Built reusable component library of 30+ components, reducing development time by 40%.",
      "Integrated 15+ REST APIs with backend teams to deliver production-grade SaaS products.",
    ],
    active: false,
  },
  {
    period: "Jun 2021 — Nov 2021",
    company: "Freelance Projects",
    role: "Web Developer",
    description: [
      "Delivered 10+ freelance projects including business websites, dashboards, and landing pages.",
      "Improved page load speed by 50% through performance optimization and lazy loading techniques.",
      "Achieved top Google rankings for 3+ client websites through SEO improvements.",
    ],
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

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
