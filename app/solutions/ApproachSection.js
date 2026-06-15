"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Workflow, Unlock, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Business-Outcome Focused",
    desc: "We start with your business challenges—performance, security, scalability, compliance, and agility—and design solutions around measurable outcomes.",
  },
  {
    icon: Workflow,
    title: "Architecture-First Thinking",
    desc: "Every solution is architected to fit your existing environment seamlessly while establishing a resilient foundation that prepares you for future growth.",
  },
  {
    icon: Unlock,
    title: "Vendor-Agnostic by Design",
    desc: "WeRoute solutions are not tied to specific platforms or products, giving you absolute flexibility, architectural longevity, and freedom of choice.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    desc: "From mid-enterprise to large global environments, our solutions are intelligently designed for massive growth, high resilience, and operational maturity.",
  },
];

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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#f7f9fc] py-28"
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(5,36,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Soft Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#080357]/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-[#052440]/10 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440] shadow-sm backdrop-blur-md">
            Our Differentiator
          </span>
          
          <h2 className="mt-8 text-4xl font-black leading-tight tracking-[-0.04em] text-[#052440] md:text-5xl">
            How WeRoute Approaches{" "}
            <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <p className="mt-6 text-lg leading-relaxed text-[#052440]/65">
            We don't just deploy tools; we engineer ecosystems. Our methodology ensures every technological implementation directly serves your strategic vision.
          </p>
        </motion.div>

        {/* DIFFERENTIATORS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-8 md:grid-cols-2"
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-[32px] border border-[#052440]/10 bg-white/80 p-10 shadow-[0_10px_40px_rgba(5,36,64,0.03)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#080357]/20 hover:shadow-[0_20px_60px_rgba(5,36,64,0.08)]"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#052440]/[0.02] via-transparent to-[#A7BF73]/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#080357] text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#0d5ea8]">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="mt-8 text-2xl font-bold tracking-tight text-[#052440]">
                    {item.title}
                  </h3>
                  
                  <p className="mt-4 text-base leading-8 text-[#052440]/65">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}