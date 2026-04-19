import React from "react";
import { FaPaperPlane } from "react-icons/fa";

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
          <a
            href="#contact"
            className="group relative px-12 py-5 bg-white text-black font-bold uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start a Conversation
              <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a
            href="mailto:contact@example.com"
            className="px-12 py-5 border border-white/20 hover:border-white text-white font-bold uppercase tracking-widest transition-colors active:scale-95"
          >
            Email Me.
          </a>
        </div>
      </div>
    </section>
  );
}
