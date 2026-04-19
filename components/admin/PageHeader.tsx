import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  action?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  action,
}: PageHeaderProps) {
  return (
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-xl font-bold font-heading uppercase">{title}</h1>
        <p className="text-[12px] text-muted mt-1 uppercase tracking-[0.4em]">
          {subtitle}
        </p>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
