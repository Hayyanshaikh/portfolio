"use client";

import { useState } from "react";
import Link from "next/link";
import { FaTerminal } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Expertise" },
  { href: "#projects", label: "Registry" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-[200] backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-tighter uppercase flex items-center gap-3"
          >
            <FaTerminal className="w-5 h-5" />
            <span className="hidden sm:inline">Hayyan Ali</span>
            <span className="inilne sm:hidden">HA</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="hover"
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[10px] font-bold uppercase tracking-widest hover:text-gray-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              data-cursor="hover"
              onClick={(e) => handleScroll(e, "#contact")}
              className="px-6 py-2 border border-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Start Collaboration
            </Link>
          </div>

          {/* Hamburger - Sirf open hone tak dikhta hai */}
          {!isOpen && (
            <button
              className="lg:hidden text-white"
              onClick={() => setIsOpen(true)}
            >
              <HiMenuAlt3 className="w-6 h-6" />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/70 backdrop-blur-lg z-[250] flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* X Button menu ke andar */}
        <button
          className="absolute top-6 right-8 text-white"
          onClick={() => setIsOpen(false)}
        >
          <HiX className="w-6 h-6" />
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-2xl font-bold uppercase tracking-widest hover:text-gray-400 transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="px-8 py-4 border border-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          Start Collaboration
        </Link>
      </div>
    </>
  );
}
