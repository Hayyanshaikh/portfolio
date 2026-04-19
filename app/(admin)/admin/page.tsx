export default function AdminPage() {
  return (
    <div className="space-y-8 animate-reveal">
      <div className="pt-4">
        <h1 className="text-xl font-bold font-heading">Welcome, Hayyan Ali</h1>
        <p className="text-xs text-muted mt-1 uppercase tracking-widest opacity-60">
          System Overview
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Projects", value: "12" },
          { label: "Visits", value: "1,234" },
          { label: "Messages", value: "5" },
          { label: "Status", value: "Live" },
        ].map((stat, i) => (
          <div
            key={i}
            className="glass-card p-4 rounded border border-border bg-surface/30"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1">
              {stat.label}
            </p>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
