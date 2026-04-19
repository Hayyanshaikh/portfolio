import React from "react";
import { IconType } from "react-icons";

interface FieldGroupProps {
  title: string;
  icon: IconType;
  children: React.ReactNode;
  className?: string;
}

export default function FieldGroup({ title, icon: Icon, children, className = "" }: FieldGroupProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <div className="flex items-center gap-3 pb-2 border-b border-white/5">
        <Icon className="text-muted text-sm" />
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}
