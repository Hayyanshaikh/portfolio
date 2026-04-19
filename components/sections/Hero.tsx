import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 max-w-7xl mx-auto pt-20">
      <div className="hero-title-anim w-full">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-12 h-px bg-white/20"></span>
          <span className="text-[11px] font-bold tracking-[0.5em] text-white uppercase">
            Software Engineer // Frontend Focused
          </span>
        </div>

        <h1 className="font-heading text-5xl md:text-8xl lg:text-[8vw] font-bold leading-[0.85] tracking-tighter uppercase mb-12">
          BUILDING <span className="text-stroke">SCALABLE</span> <br />
          DIGITAL ECOSYSTEMS.
        </h1>

        <div className="grid md:grid-cols-2 gap-16 items-end">
          <p className="text-white text-lg font-light leading-relaxed max-w-lg">
            I architect high-performance digital solutions and scalable ERP
            systems using Next.js and TypeScript, focused on translating complex
            business logic into seamless user experiences.
          </p>

          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  data-cursor="hover"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              Open for strategic partnerships 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
