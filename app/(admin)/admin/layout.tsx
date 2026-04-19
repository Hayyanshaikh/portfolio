"use client";

import Sidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-bg text-white relative">
      <div className="bg-container">
        <div className="bg-grid opacity-30"></div>
        <div className="orb orb-1 opacity-10"></div>
        <div className="orb orb-2 opacity-10"></div>
      </div>
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
}
