import { FaPaperPlane } from "react-icons/fa";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-12 tracking-tighter">
          Ready to <span className="text-stroke">elevate</span> your <br /> next
          project?
        </h2>

        <div className="flex justify-center mb-8">
          <div
            data-cursor="hover"
            className="flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50 group-hover:text-white/90 transition-colors">
              Active for Freelance
            </span>
          </div>
        </div>

        <p className="text-white/60 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s build something exceptional together. <br />
          Currently accepting strategic partnerships and high-impact projects.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button
            href="#contact"
            variant="solid"
            size="lg"
            icon={<FaPaperPlane className="w-4 h-4" />}
          >
            Start a Conversation
          </Button>

          <Button href="mailto:contact@example.com" variant="outline" size="lg">
            Email Me.
          </Button>
        </div>
      </div>
    </section>
  );
}
