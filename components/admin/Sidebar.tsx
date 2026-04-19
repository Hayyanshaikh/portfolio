"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdBusiness,
  MdSchool,
  MdWork,
  MdBuild,
  MdSettings,
  MdFolderSpecial,
  MdPeople,
  MdMessage,
  MdShare,
  MdStar,
} from "react-icons/md";

const menuItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: MdDashboard },
  { name: "Brands", href: "/admin/brands", icon: MdBusiness },
  { name: "Education", href: "/admin/education", icon: MdSchool },
  { name: "Experience", href: "/admin/experience", icon: MdWork },
  { name: "Projects", href: "/admin/projects", icon: MdFolderSpecial },
  { name: "Services", href: "/admin/services", icon: MdBuild },
  { name: "Skills", href: "/admin/skills", icon: MdStar },
  { name: "Socials", href: "/admin/socials", icon: MdShare },
  { name: "Testimonials", href: "/admin/testimonials", icon: MdPeople },
  { name: "Messages", href: "/admin/messages", icon: MdMessage },
  { name: "Settings", href: "/admin/settings", icon: MdSettings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-60 bg-surface border-r border-white/5 h-screen flex flex-col">
      <div className="p-4 border-b border-white/5">
        <h1 className="text-sm font-heading font-bold tracking-widest text-white uppercase opacity-70">
          Admin
        </h1>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded transition-all duration-200 group ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              <Icon
                className={`text-lg ${isActive ? "text-white" : "text-muted group-hover:text-white"}`}
              />
              <span className="font-medium text-xs tracking-tight">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
