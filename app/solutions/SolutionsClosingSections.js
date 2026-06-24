"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Building2,
  Layers,
  ShieldCheck,
  Handshake,
  MessageSquare
} from "lucide-react";

// =========================================
// DATA ARRAYS
// =========================================

const industries = [
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Government",
  "Technology"
];

const valuePillars = [
  {
    icon: Lightbulb,
    title: "Strategy Before Technology",
    desc: "We do not lead with technology. We instead begin every engagement with strategic advisory to define the right architecture before any implementation decision is made.",
  },
  {
    icon: Building2,
    title: "Enterprise Delivery Experience",
    desc: "With 40+ enterprise projects delivered and 99.9% system reliability, we bring the execution rigour required by complex regulated environments.",
  },
  {
    icon: Layers,
    title: "Integrated Expertise Across the Stack",
    desc: "Network, cloud, cybersecurity, AI, and digital engineering expertise in one team. There’re no handoffs between vendors. One accountable partner across the full technology stack.",
  },
  {
    icon: ShieldCheck,
    title: "Security and Scalability Built In",
    desc: "Zero trust architecture principles and scalability requirements are built into every solution from the first design decision, not added after deployment.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership Mindset",
    desc: "We measure success by client outcomes, not project completion. Every engagement is built for continuous optimisation and long-term technology evolution.",
  },
];

export default function SolutionsClosingSections() {
  return (
    <>
      {/* =========================================
          INDUSTRIES WE SUPPORT STRIP
      ========================================= */}
      <section className="border-y border-[#052440]/10 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <span className="shrink-0 text-sm font-bold uppercase tracking-[0.15em] text-[#052440]/50">
              Industries We Support
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-end">
              {industries.map((industry, i) => (
                <span
                  key={i}
                  className="text-[15px] font-semibold text-[#052440]"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                
                <h2 className="mt-8 text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-[#052440] md:text-5xl lg:text-6xl">
                  Why Enterprises Choose{" "}
                  <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                    WeRoute
                  </span>
                </h2>
                
                <p className="mt-6 text-lg leading-relaxed text-[#052440]/65">
                  Technology delivery is common. Technology that moves business outcomes forward requires a different kind of partner.
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
          FINAL CALL TO ACTION
      ========================================= */}
      <section className="relative bg-[#f7f9fc] px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#052440] via-[#052440] to-[#052440] shadow-[0_20px_60px_rgba(8,3,87,0.15)]"
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

          <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center md:px-12 md:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A7BF73] backdrop-blur-md">
              Start Your Journey
            </span>
            
            <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Ready to Build Technology That Works?
            </h2>
            
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Partner with WeRoute—a technology advisory services team that designs secure, scalable, and future-ready solutions aligned with your strategic goals.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* Primary Button */}
              <a
                href="#contact"
                className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#A7BF73] px-8 py-4 text-[14px] font-bold text-[#080357] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)] sm:w-auto"
              >
                Talk to an Expert
                <MessageSquare size={16} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}