import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/hayyanshaikh",
    icon: <FaGithub className="text-xl" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/hayyan-shaikh",
    icon: <FaLinkedinIn className="text-xl" />,
    label: "LinkedIn",
  },
  {
    href: "https://api.whatsapp.com/send/?phone=923172271459",
    icon: <FaWhatsapp className="text-xl" />,
    label: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <footer className="py-20 px-8 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-6">
          <span className="text-white text-[10px] font-bold uppercase tracking-widest">
            © 2026 Hayyan Ali
          </span>
          <span className="w-1 h-1 bg-white/20 rounded-full"></span>
          <span className="text-white text-[10px] font-bold uppercase tracking-widest italic">
            Engineered with Next.js 15
          </span>
        </div>

        <div className="flex gap-12">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              aria-label={social.label}
              data-cursor="hover"
              className="text-white hover:text-white transition-all transform hover:scale-125"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
