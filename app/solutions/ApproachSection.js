"use client";

import React, { useRef, useEffect } from "react";
import CircuitBackground from "./CircuitBackground";
import { motion } from "framer-motion";
import { Target, Workflow, Unlock, TrendingUp } from "lucide-react";
import { IconHover3D } from "./IconHover3D";

const differentiators = [
  {
    icon: Target, // Kept for your data structure, though IconHover3D uses its own 3D cube
    title: "Business-Outcome Focused",
    desc: "We design every solution around your specific performance, security, scalability, and compliance goals. We achieve desired outcomes with curated technology.",
  },
  {
    icon: Workflow,
    title: "Architecture-First Thinking",
    desc: "We architect every solution to fit your current environment and build a foundation that supports long-term business growth without costly rebuilds.",
  },
  {
    icon: Unlock,
    title: "Vendor-Agnostic by Design",
    desc: "We at WeRoute, recommend technologies based on business fit, operational requirements, and long-term scalability instead of not vendor incentives or platform partnerships.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    desc: "From mid-market to large global enterprises, our solutions are built for operational maturity, high resilience, and growth without architectural rework.",
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
      <CircuitBackground />
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#050849]/[0.03] blur-[100px]" />
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
          <span className="clay-badge-light inline-block border border-[#050849]/5 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849]">
            Our Approach
          </span>
          
          <h2 className="mt-6 text-3xl font-normal leading-tight text-[#050849] md:text-4xl lg:text-[42px]">
            How WeRoute Approaches{" "}
            <span className="bg-gradient-to-r from-[#050849] to-[#4c658a] bg-clip-text text-transparent font-medium">
              Solutions
            </span>
          </h2>
          
          <p className="mt-6 text-lg leading-relaxed text-[#050849]/65">
While most technology providers deploy and move on. We at WeRoute - start with strategy. Every engagement begins with consulting to understand business outcomes, then moves to architecture design, and only then to it’s implementation.          </p>
        </motion.div>

        {/* DIFFERENTIATORS GRID (Now using IconHover3D) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-8 md:grid-cols-2"
        >
          {differentiators.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="flex w-full"
            >
              <IconHover3D
                heading={item.title}
                text={item.desc}
                // Setting height to 100% ensures cards match height in the CSS grid
                className="h-full w-full" 
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}