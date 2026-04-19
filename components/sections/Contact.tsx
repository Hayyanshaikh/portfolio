"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import Button from "../ui/Button";

const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: "Professional Gateway",
    href: "mailto:hayyanshaikh55@gmail.com",
    display: "hayyanshaikh55@gmail.com",
    className: "border-b border-white hover:text-white transition-all",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Direct Communication",
    href: "tel:+923172271459",
    display: "+92 317 2271459",
    className: "hover:text-white transition-all",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 p-5 text-[10px] font-bold tracking-widest focus:outline-none focus:border-white transition-all";

  return (
    <section id="contact" className="max-w-7xl mx-auto py-40 px-8 ">
      <div className="grid lg:grid-cols-2 gap-32">
        {/* Left Side */}
        <div className="reveal">
          <h2 className="font-heading text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.8] mb-12">
            Talk <br />
            Now.
          </h2>

          <div className="space-y-12">
            {contactLinks.map((item) => (
              <div key={item.label} className="group">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-4 flex items-center gap-2">
                  {item.icon} {item.label}
                </span>
                <Link
                  href={item.href}
                  data-cursor="hover"
                  className={`text-2xl font-bold flex items-center gap-4 w-fit ${item.className}`}
                >
                  {item.display}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="p-1 border border-white/5 bg-white/5 backdrop-blur-sm">
            <div className="space-y-6 bg-black p-10">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="NAME / ORGANIZATION"
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ELECTRONIC MAIL"
                  className={inputClass}
                />
              </div>

              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="PROJECT CATEGORY (e.g. ERP, WEB, AI)"
                className={inputClass}
              />

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="BRIEF PROJECT SCOPE"
                className={`${inputClass} resize-none`}
              />

              <Button
                size="full"
                variant="solid"
                onClick={handleSubmit}
                icon={<FaPaperPlane className="h-4 w-4" />}
                data-cursor="hover"
              >
                Submit Briefing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
