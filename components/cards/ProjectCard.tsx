import React from "react";

type Project = {
  title: string;
  description: string;
  category: string;
  badge?: string | null;
  version?: string | null;
  tags: string[];
  icon?: React.ReactNode;
};

type Props = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: Props) => {
  return (
    <div
      data-cursor="hover"
      className="glass-card p-8 flex flex-col justify-between h-full reveal"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div>
        <div className="project-visual">{project.icon}</div>

        <div className="flex justify-between items-start mb-8">
          <span className="px-3 pt-2 pb-1.5 border border-white/10 text-xs font-semibold uppercase">
            {project.category}
          </span>

          {project.badge ? (
            <span className="px-2 pt-2 pb-1.5 bg-white/10 text-xs font-semibold uppercase">
              {project.badge}
            </span>
          ) : (
            <span className="text-xs font-medium text-white/30 uppercase">
              {project.version}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold mb-6 uppercase">{project.title}</h3>

        <p
          title={project.description}
          className="text-white line-clamp-4 leading-relaxed mb-6"
        >
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-xs font-semibold uppercase text-white/40"
          >
            {tag}
            {i === project.tags.length - 1 ? null : (
              <span className="w-1 h-1 bg-white rounded-full block" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
