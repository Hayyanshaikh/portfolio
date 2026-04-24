import { FaUser } from "react-icons/fa";
import Button from "../ui/Button";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto py-32 px-8 relative overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal order-2 lg:order-1">
          <h2 className="font-heading text-4xl font-bold uppercase mb-8">
            Who I Am?
          </h2>
          <p className="text-white leading-relaxed mb-8">
            Software Engineer specializing in React & Next.js with 4+ years of
            experience building ERP systems. I focus on scalable frontend
            architecture and performance delivering code that businesses
            actually rely on.
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-8 mt-12 w-full">
            <div className="border-l border-white/10 pl-6 group">
              <h4 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">
                4+
              </h4>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                Experience
              </p>
            </div>
            <div className="border-l border-white/10 pl-6 group">
              <h4 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">
                15+
              </h4>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                Projects
              </p>
            </div>
            {/* 2 state add kro happy client or Technologies */}
            <div className="border-l border-white/10 pl-6 group">
              <h4 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">
                3+
              </h4>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                Happy Clients
              </p>
            </div>
            <div className="border-l border-white/10 pl-6 group">
              <h4 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">
                20+
              </h4>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                Technologies
              </p>
            </div>
          </div>
          <Button className="mt-8" href="resume.pdf">
            Download Resume
          </Button>
        </div>

        <div className="reveal order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-[420px] rounded-2xl overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors z-10"></div>
            {/* Replace '/profile.jpg' with your actual image path in the public folder */}
            <img
              src="/profile.jpg"
              alt="Professional Profile"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
