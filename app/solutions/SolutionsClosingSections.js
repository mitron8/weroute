"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Lightbulb,
  Building2,
  Layers,
  ShieldCheck,
  Handshake,
  MessageSquare
} from "lucide-react";

// =========================================
// MAGNETIC BUTTON COMPONENT
// =========================================
function MagneticCTAButton({ children, href }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="
        clay-light
        relative inline-flex items-center justify-center gap-3
        overflow-hidden rounded-full border border-[#050849]/5 bg-[#98c93c] px-10 py-5
        text-base font-bold tracking-tight text-[#050849] shadow-[0_10px_30px_rgba(152,201,60,0.3)]
        transition-colors duration-300 hover:bg-white
      "
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <MessageSquare size={18} />
      </span>
    </motion.a>
  );
}

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
          INDUSTRIES WE SUPPORT GRID
      ========================================= */}
      <section className="bg-[#f7f9fc] pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="clay-badge-light inline-block rounded-full border border-[#050849]/10 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849] shadow-sm">
              Industries We Support
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
            {industries.map((industry, i) => (
              <div 
                key={i} 
                className="group flex flex-col items-center justify-center rounded-2xl border border-[#050849]/5 bg-white py-8 px-4 text-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(5,8,73,0.05)] hover:-translate-y-1 cursor-pointer"
              >
                <span className="text-[15px] font-bold tracking-wide text-[#050849] transition-colors group-hover:text-[#98c93c]">
                  {industry}
                </span>
                <span className="mt-3 h-1 w-8 rounded-full bg-[#98c93c] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          WHY ENTERPRISES CHOOSE WEROUTE
      ========================================= */}
      <section className="relative bg-[#f7f9fc] py-28 lg:py-32">


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
                <span className="clay-badge-light inline-block rounded-full border border-[#050849]/10 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849] shadow-sm">
                  Cross-Solution Value
                </span>
                
                <h2 className="mt-6 text-3xl font-normal leading-tight text-[#050849] md:text-4xl lg:text-[44px]">
                  Why Enterprises Choose{" "}
                  <span className="font-medium bg-gradient-to-r from-[#050849] to-[#4c658a] bg-clip-text text-transparent">
                    WeRoute
                  </span>
                </h2>
                
                <p className="mt-6 text-lg font-light leading-relaxed text-[#4c658a]">
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
                    className="clay-light group relative overflow-hidden bg-white p-8 transition-all duration-500 hover:-translate-y-1 md:p-10"
                  >
                    <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f7f9fc] text-[#050849] transition-all duration-500 group-hover:bg-[#98c93c] group-hover:text-white">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium tracking-tight text-[#050849]">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-[#4c658a]">
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
      <section className="relative bg-[#f7f9fc] px-6 pb-16 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl relative overflow-hidden rounded-3xl bg-[#050849] shadow-xl"
        >
          {/* Animated Background Elements inside the CTA */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {/* Glowing Accent Green Blob */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[30%] -left-[10%] h-[400px] w-[400px] rounded-full bg-[#98c93c] blur-[100px]"
            />
            {/* Glowing Light Blue Blob */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-[30%] -right-[10%] h-[450px] w-[450px] rounded-full bg-white blur-[120px]"
            />

            
            {/* Inner Glassmorphism Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-6 py-8 md:px-10 md:py-10">
            
            {/* Left Content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#98c93c]/30 bg-[#98c93c]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#98c93c] backdrop-blur-md"
              >
                Start Your Journey
              </motion.span>
              
              <h2 className="mt-4 max-w-3xl text-2xl font-normal leading-tight text-white sm:text-3xl md:text-4xl lg:text-[42px]">
                Ready to Build Technology That <span className="font-medium bg-gradient-to-r from-white to-[#00d2ff] bg-clip-text text-transparent">Works?</span>
              </h2>
              
              <p className="mt-3 max-w-xl text-sm md:text-base font-light leading-relaxed text-white/70">
                Partner with WeRoute—a technology advisory services team that designs secure, scalable, and future-ready solutions aligned with your strategic goals.
              </p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <MagneticCTAButton href="#contact">
                  Talk to an Expert
                </MagneticCTAButton>
              </motion.div>
            </div>

            {/* Right Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5 flex items-center justify-center w-full"
            >
              <div className="w-full max-w-[240px] md:max-w-[270px] aspect-square flex items-center justify-center">
                <DotLottieReact
                  src="https://lottie.host/bc42f255-0c6a-458c-a02b-02f75d3c8509/1HCUwb6Dat.lottie"
                  loop
                  autoplay
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </>
  );
}