import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-7xl mx-auto py-32 px-8 relative overflow-hidden"
    >
      <div className="reveal" style={{ transitionDelay: "0.2s" }}>
        <div className="mb-6">
          <FaGraduationCap className="text-white/20 w-8 h-8" />
        </div>
        <h2 className="font-heading text-4xl font-bold uppercase mb-8">
          Academic Foundation.
        </h2>
        <div className="space-y-8 max-w-3xl">
          <div className="group cursor-default">
            <h4 className="text-xl font-bold uppercase group-hover:pl-2 transition-all duration-300">
              Aptech Learning, Karachi
            </h4>
            <p className="text-base text-white/70 mb-1 italic">
              Professional Diploma in Frontend Development (2021-2022)
            </p>
          </div>
          <div className="pt-6 border-t border-white/5 group cursor-default">
            <h4 className="text-xl font-bold uppercase group-hover:pl-2 transition-all duration-300">
              SM Government Arts & Commerce
            </h4>
            <p className="text-base text-white/70 mb-1 italic">
              Intermediate Certification in Commerce (2021-2023)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
