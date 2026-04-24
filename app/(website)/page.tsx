"use client";

import { useReveal } from "@/components/useReveal";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  useReveal();

  return (
    <>
      {/* Background elements container to prevent overflow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div
          className="bg-blur top-[-10%] right-[-5%]"
          style={{ animation: "float 10s infinite ease-in-out" }}
        />
        <div
          className="bg-blur bottom-[20%] left-[-10%]"
          style={{ animation: "float 15s infinite ease-in-out reverse" }}
        />
      </div>

      <Navbar />
      <Hero />
      <Brands />
      <About />
      {/* <Education /> */}
      <Experience />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
