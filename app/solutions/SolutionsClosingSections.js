"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Building2,
  Layers,
  ShieldCheck,
  Handshake,
  ArrowRight,
  MessageSquare
} from "lucide-react";

const valuePillars = [
  {
    icon: Lightbulb,
    title: "Consulting-Led Solution Design",
    desc: "We don't push products. We start with strategic consulting to ensure every technical decision perfectly aligns with your specific business goals and operational needs.",
  },
  {
    icon: Building2,
    title: "Deep Enterprise & Industry Experience",
    desc: "Our team brings decades of experience architecting and managing complex, highly regulated environments across multiple global industries.",
  },
  {
    icon: Layers,
    title: "Integrated Approach",
    desc: "We break down silos, delivering unified solutions that seamlessly bridge network, cloud platforms, cybersecurity protocols, AI, and modern software.",
  },
  {
    icon: ShieldCheck,
    title: "Focus on Resilience, Security & Scalability",
    desc: "Security and scale aren't afterthoughts. They are embedded into the DNA of every architecture we design, ensuring your business is protected and prepared for growth.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership Mindset",
    desc: "We view our client relationships as strategic partnerships. We are committed to your long-term success, continuous optimization, and technological evolution.",
  },
];

export default function SolutionsClosingSections() {
  return (
    <>
      {/* =========================================
          WHY ENTERPRISES CHOOSE WEROUTE
      ========================================= */}
      <section className="relative bg-[#f7f9fc] py-28 lg:py-32">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(5,36,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            
            {/* LEFT COLUMN: Sticky Header */}
            <div className="lg:sticky lg:top-32 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block rounded-full border border-[#052440]/10 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440] shadow-sm backdrop-blur-md">
                  Cross-Solution Value
                </span>
                
                <h2 className="mt-8 text-4xl font-black leading-[1.1] tracking-[-0.04em] text-[#052440] md:text-5xl lg:text-6xl">
                  Why Enterprises Choose{" "}
                  <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                    WeRoute
                  </span>
                </h2>
                
                <p className="mt-6 text-lg leading-relaxed text-[#052440]/65">
                  Delivering technology is easy. Delivering technology that actually moves the needle for your business requires a different kind of partner.
                </p>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Scrolling Cards */}
            <div className="flex flex-col gap-6 lg:col-span-7 lg:pl-10">
              {valuePillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-[32px] border border-[#052440]/10 bg-white/80 p-8 shadow-[0_10px_30px_rgba(5,36,64,0.03)] backdrop-blur-xl transition-all duration-500 hover:border-[#080357]/20 hover:shadow-[0_15px_50px_rgba(5,36,64,0.06)] md:p-10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#052440]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f7f9fc] text-[#080357] transition-colors duration-500 group-hover:bg-[#080357] group-hover:text-white">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-[#052440]">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-[#052440]/65">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CALL TO ACTION (RESIZED & POLISHED)
      ========================================= */}
      <section className="relative bg-[#f7f9fc] px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl relative overflow-hidden rounded-[32px] bg-[#080357] shadow-[0_20px_60px_rgba(8,3,87,0.15)]"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[50%] -left-[10%] h-[500px] w-[500px] rounded-full bg-white blur-[100px]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-[50%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[#A7BF73] blur-[100px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
          </div>

          {/* Tighter padding and scaled down typography */}
          <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center md:px-12 md:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A7BF73] backdrop-blur-md">
              Start Your Journey
            </span>
            
            <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Build Technology That Works for Your Business
            </h2>
            
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Whether you are modernizing infrastructure, improving security, or scaling digital platforms, WeRoute helps you design and deliver solutions directly aligned with your strategic goals.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              {/* Primary Button */}
              <a
                href="#contact"
                className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#A7BF73] px-7 py-4 text-[14px] font-bold text-[#080357] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)] sm:w-auto"
              >
                Talk to an Expert
                <MessageSquare size={16} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
              
              {/* Secondary Button */}
              <a
                href="#consultation"
                className="group flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-[14px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
              >
                Request Consultation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}