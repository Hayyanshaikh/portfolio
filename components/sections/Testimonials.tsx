import { BsShieldCheck } from "react-icons/bs";
import TestimonialCard from "../cards/TestimonialCard";

const testimonials = [
  {
    quote:
      '"Lakes America project was delivered with extreme precision. Hayyan\'s ability to translate complex business needs into clean code is remarkable."',
    name: "Ahmer Farooq",
    title: "Founder @ Lakes America",
  },
  {
    quote:
      '"His expertise in ERP architecture is unparalleled. He built a system for us that scales effortlessly as our user base grows."',
    name: "Haseeb Shoukat",
    title: "CEO @ Nexarce",
  },
  {
    quote:
      '"The Resume Canada platform was delivered ahead of schedule with pixel-perfect accuracy. A reliable engineer who understands deadlines."',
    name: "Dheraj Jolla",
    title: "Lead @ Resume Canada",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto py-32 px-8">
      <h2 className="font-heading text-4xl font-bold uppercase mb-20 flex items-center gap-4">
        <BsShieldCheck className="w-8 h-8" />
        Trust Manifest.
      </h2>

      <div className="grid md:grid-cols-3 gap-16">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} t={t} index={index} />
        ))}
      </div>
    </section>
  );
}
