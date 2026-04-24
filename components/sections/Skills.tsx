import { LuLayers } from "react-icons/lu";
import Image from "../ui/Image";

import NextJs from "../icons/NextJs";
import ReactJs from "../icons/ReactJs";
import TypeScript from "../icons/TypeScript";
import JavaScript from "../icons/JavaScript";
import Tailwind from "../icons/Tailwind";
import ShadCN from "../icons/ShadCN";
import Html from "../icons/Html";
import Css from "../icons/Css";
import AntDesign from "../icons/AntDesign";
import Git from "../icons/Git";
import Github from "../icons/Github";
import NodeJs from "../icons/NodeJs";
import NestJs from "../icons/NestJs";
import Prisma from "../icons/Prisma";
import PostgreSQL from "../icons/PostgreSQL";
import Swagger from "../icons/Swagger";
import WordPress from "../icons/WordPress";
import JQuery from "../icons/JQuery";

type Skill = {
  icon: React.ReactNode;
  label: string;
};
const skills: Skill[] = [
  // Core Web
  { icon: <Image svg={Html} size={40} />, label: "HTML" },
  { icon: <Image svg={Css} size={40} />, label: "CSS" },
  { icon: <Image svg={JavaScript} size={40} />, label: "JavaScript" },
  { icon: <Image svg={JQuery} size={40} />, label: "jQuery" },
  { icon: <Image svg={TypeScript} size={40} />, label: "TypeScript" },

  // Frontend Frameworks
  { icon: <Image svg={ReactJs} size={40} />, label: "React.js" },
  { icon: <Image svg={NextJs} size={40} />, label: "Next.js" },

  // Styling / UI
  { icon: <Image svg={Tailwind} size={40} />, label: "Tailwind CSS" },
  { icon: <Image svg={ShadCN} size={40} />, label: "ShadCN UI" },
  { icon: <Image svg={AntDesign} size={40} />, label: "Ant Design" },

  // Backend
  { icon: <Image svg={NodeJs} size={40} />, label: "Node.js" },
  { icon: <Image svg={NestJs} size={40} />, label: "NestJS" },

  // Database / ORM
  { icon: <Image svg={Prisma} size={40} />, label: "Prisma ORM" },
  { icon: <Image svg={PostgreSQL} size={40} />, label: "PostgreSQL" },

  // Dev Tools
  { icon: <Image svg={Git} size={40} />, label: "Git" },
  { icon: <Image svg={Github} size={40} />, label: "GitHub" },

  // APIs / Docs
  { icon: <Image svg={Swagger} size={40} />, label: "Swagger" },

  // CMS
  { icon: <Image svg={WordPress} size={40} />, label: "WordPress" },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto py-32 px-8">
      <h2 className="font-heading text-4xl font-bold uppercase mb-20 flex items-center gap-4">
        <span className="text-2xl">
          <LuLayers />
        </span>
        Technological Stack.
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <div
            data-cursor="hover"
            key={index}
            className="skill-item reveal flex flex-col items-center gap-2 backdrop-blur-lg"
          >
            {skill.icon}

            <span className="text-xs font-semibold uppercase tracking-widest">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
