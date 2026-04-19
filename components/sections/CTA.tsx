import { FaPaperPlane } from "react-icons/fa";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-12 tracking-tighter">
          Ready to <span className="text-stroke">elevate</span> your <br /> next project?
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
          I'm currently available for freelance opportunities and full-stack collaborations. Let's build something exceptional together.
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
          
          <Button
            href="mailto:contact@example.com"
            variant="outline"
            size="lg"
          >
            Email Me.
          </Button>
        </div>
      </div>
    </section>
  );
}
