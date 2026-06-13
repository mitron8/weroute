"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Smooth deceleration curve
    },
  },
};

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#f7f9fc] py-32 text-[#080357]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(5,36,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* ANIMATED GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#080357]/5 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* MAIN CARD */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-[40px] border border-[#052440]/10 bg-white/90 px-8 py-20 shadow-[0_20px_80px_rgba(5,36,64,0.06)] backdrop-blur-2xl md:px-16 lg:px-24"
        >
          {/* TOP SECTION */}
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT CONTENT */}
            <div className="max-w-3xl">
              {/* BADGE */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#052440]/10 bg-[#080357]/5 px-5 py-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#080357] text-white shadow-sm">
                    <Sparkles size={15} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#080357]">
                    Start Your Transformation
                  </span>
                </div>
              </motion.div>

              {/* HEADING */}
              <motion.div variants={itemVariants}>
                <h2 className="mt-7 text-5xl font-black leading-[1.1] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                    Build Smarter,
                  </span>
                  <br />
                  <span className="text-[#080357]">Scale Faster.</span>
                </h2>
              </motion.div>

              {/* TEXT */}
              <motion.div variants={itemVariants}>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#052440]/65 md:text-xl">
                  From cloud infrastructure and cybersecurity to AI-powered
                  automation, WeRoute helps enterprises modernize operations
                  with scalable and resilient technology ecosystems.
                </p>
              </motion.div>
            </div>

            {/* RIGHT CONTENT (BUTTONS) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-5 lg:min-w-[340px]"
            >
              {/* PRIMARY BUTTON */}
              <a
                href="#contact"
                className="group flex items-center justify-between rounded-3xl bg-gradient-to-br from-[#080357] to-[#A7BF73] px-8 py-6 text-white shadow-[0_15px_40px_rgba(8,3,87,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(8,3,87,0.35)]"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                    Consultation
                  </div>
                  <div className="mt-2 text-xl font-bold tracking-tight">
                    Talk to an Expert
                  </div>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:bg-white/20 group-hover:translate-x-1">
                  <ArrowRight size={22} />
                </div>
              </a>

              {/* SECONDARY BUTTON */}
              <a
                href="#services"
                className="group flex items-center justify-between rounded-3xl border border-[#052440]/10 bg-white px-8 py-6 transition-all duration-300 hover:border-[#080357]/20 hover:bg-[#080357]/[0.02]"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#080357]/50">
                    Solutions
                  </div>
                  <div className="mt-2 text-xl font-bold tracking-tight text-[#080357]">
                    Explore Services
                  </div>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#052440]/10 text-[#080357] transition-all duration-300 group-hover:border-[#080357]/30 group-hover:bg-[#080357]/5 group-hover:translate-x-1">
                  <ArrowRight size={22} />
                </div>
              </a>
            </motion.div>
          </div>

          {/* STATS SECTION */}
          <motion.div
            variants={containerVariants}
            className="mt-2 grid gap-6 border-t border-[#052440]/10 pt-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              ["150+", "Enterprise Clients"],
              ["99.99%", "Infrastructure Uptime"],
              ["24/7", "Operational Support"],
              ["40+", "Technology Experts"],
            ].map(([num, label], index) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="group rounded-3xl border border-[#052440]/5 bg-[#f7f9fc]/50 p-8 transition-colors hover:bg-[#f7f9fc]"
              >
                <div className="text-4xl font-black tracking-[-0.04em] text-[#080357] md:text-5xl">
                  {num}
                </div>
                <div className="mt-3 text-sm font-semibold text-[#080357]/60">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}