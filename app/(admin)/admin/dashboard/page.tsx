import PageHeader from "@/components/admin/PageHeader";
import Button from "@/components/ui/Button";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function DashboardPage() {
  const states = [
    { label: "Projects", value: "12" },
    { label: "Visits", value: "1,234" },
    { label: "Messages", value: "5" },
    { label: "Status", value: "Operational" },
  ];
  return (
    <div className="animate-reveal space-y-8">
      <PageHeader
        title="Dashboard"
        subtitle="System Intelligence // 2026"
        action={
          <Button
            href="/"
            target="_blank"
            icon={<FaExternalLinkAlt />}
            variant="solid"
            size="sm"
          >
            Go to Website
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {states.map((stat, i) => (
          <div
            key={i}
            className="glass-card p-4 rounded-none border border-white/5 bg-surface/30"
          >
            <p className="text-[8px] font-bold uppercase tracking-widest text-muted mb-2">
              {stat.label}
            </p>
            <p className="text-lg font-bold tracking-tighter">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
