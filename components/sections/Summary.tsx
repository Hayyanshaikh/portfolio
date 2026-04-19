import { FaGraduationCap, FaUser } from "react-icons/fa";

export default function Summary() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto  py-32 px-8 relative overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-24 relative z-10">
        {/* Professional Summary */}
        <div className="reveal">
          <div className="mb-6">
            <FaUser className="text-white/20 w-8 h-8" />
          </div>
          <h2 className="font-heading text-4xl font-bold uppercase mb-8">
            Professional Summary.
          </h2>
          <p className="text-white leading-relaxed mb-8">
            Results-driven Software Engineer with over 2 years of specialized
            experience in React and Next.js. My core expertise lies in
            developing complex ERP systems that streamline business operations.
            I am proficient in modern frontend architectures, API orchestration,
            and performance tuning, consistently delivering maintainable and
            scalable code in collaborative team environments.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="border-l border-white/10 pl-6 group">
              <h4 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">
                24+
              </h4>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                Months Experience
              </p>
            </div>
            <div className="border-l border-white/10 pl-6 group">
              <h4 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">
                15+
              </h4>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                Enterprise Projects
              </p>
            </div>
          </div>
        </div>

        {/* Academic Foundation */}
        <div className="reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="mb-6">
            <FaGraduationCap className="text-white/20 w-8 h-8" />
          </div>
          <h2 className="font-heading text-2xl font-bold uppercase mb-8">
            Academic Foundation.
          </h2>
          <div className="space-y-8">
            <div className="group cursor-default">
              <h4 className="text-lg font-bold uppercase group-hover:pl-2 transition-all duration-300">
                Aptech Learning, Karachi
              </h4>
              <p className="text-sm text-white mb-1 italic">
                Professional Diploma in Frontend Development (2021-2022)
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 group cursor-default">
              <h4 className="text-lg font-bold uppercase group-hover:pl-2 transition-all duration-300">
                SM Government Arts & Commerce
              </h4>
              <p className="text-sm text-white mb-1 italic">
                Intermediate Certification in Commerce (2021-2023)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
