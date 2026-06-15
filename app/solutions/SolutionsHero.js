"use client";

import React from "react";
import { motion } from "framer-motion";
import WavePath from "./WavePath";

export default function SolutionsHero() {
  // Staggered animation variants for a luxurious reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35, 
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for text and buttons
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Dedicated animation for the "Lens" reveal
  const lensRevealVariants = {
    hidden: { opacity: 0, y: "100%", scale: 0.95, rotate: -5 },
    visible: {
      opacity: 1,
      y: "40%", // Positioned so only the top semi-circle is visible
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 1.5, 
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      // Updated: Background dark (Deep Slate/Blue)
      className="relative overflow-hidden bg-[#052440] pb-32 pt-40 lg:pb-36 lg:pt-48 flex flex-col justify-between"
    >
      {/* --- BACKGROUND ELEMENTS & LENS SHAPE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* --- CAMERA LENS SHAPE (Semi-circle from bottom) --- */}
        <motion.div
          variants={lensRevealVariants}
          initial="hidden"
          animate="visible"
          className="will-change-transform absolute left-1/2 bottom-0 h-[49vw] w-[100vw] -translate-x-1/2 flex items-start justify-center rounded-t-full border-[1.5vw] border-white/3 bg-gradient-to-br from-[#080357]/90 via-[#052440] to-transparent shadow-[0_-5vw_10vw_rgba(0,0,0,0.4)] blur-sm"
        >
          {/* Concentric rings/layers to simulate depth and reflection */}
          <div className="mt-[8vw] h-[90%] w-[90%] rounded-t-full border border-white/5 bg-[radial-gradient(ellipse_at_top,transparent_30%,black_100%)] opacity-30" />
          <div className="absolute top-[8vw] h-[80%] w-[80%] rounded-t-full border border-white/10 bg-gradient-to-t from-transparent via-[#0d5ea8]/10 to-transparent" />
          
          {/* Central 'Reflection' Accent */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[12vw] h-[30%] w-[40%] rounded-[100%] bg-[radial-gradient(closest-side,#A7BF73_0%,transparent_100%)] opacity-30 blur-2xl"
          />
        </motion.div>
        
        {/* Deep background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#080357_100%,transparent_10%)] opacity-50" />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          {/* BADGE (Updated for contrast) */}
          <motion.div variants={itemVariants} className="will-change-transform">
            <span
              className="
                inline-block
                rounded-full
                border border-white/10
                bg-white/5
                px-5 py-2.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#A7BF73]
                backdrop-blur-md
                mb-8
              "
            >
              Enterprise Solutions
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="
              text-balance
              text-4xl
              font-light
              leading-[1.05]
              tracking-[-0.05em]
              text-white
              md:text-[52px]
              lg:text-[52px]
              will-change-transform
            "
          >
            Technology Solutions Designed to Solve{" "}
            <br className="hidden md:block" />
            <span
              className="
                inline-block
                bg-gradient-to-r
                from-white
                to-[#A7BF73]
                bg-clip-text
                text-transparent
                h-16
              "
            >
              Complex Challenges
            </span>
          </motion.h1>

          {/* INTRO PARAGRAPH (Visual Hierarchy: White/70) */}
          <motion.div variants={itemVariants} className="mt-8 max-w-2xl will-change-transform">
            <p
              className="
                text-balance
                text-xl
                font-light
                leading-relaxed
                text-white/70
                md:text-[18px]
                md:leading-[1.4]
              "
            >
              Modernize infrastructure, improve resilience, and operate securely at scale. We deliver outcome-driven, vendor-agnostic
              <br/> technology solutions engineered to align directly with your business goals.
            </p>
          </motion.div>

          {/* HERO CTA BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center justify-center gap-5 will-change-transform sm:flex-row w-full sm:w-auto"
          >
            <a
              href="#solutions"
              className="
                w-full sm:w-auto
                rounded-2xl
                bg-[#A7BF73]
                px-10
                py-5
                text-base
                font-bold
                tracking-tight
                text-[#052440]
                shadow-[0_10px_30px_rgba(167,191,115,0.15)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(167,191,115,0.25)]
                hover:bg-white
              "
            >
              Explore Solutions
            </a>
            <a
              href="#approach"
              className="
                w-full sm:w-auto
                rounded-2xl
                border border-white/10
                bg-white/5
                px-10
                py-5
                text-base
                font-semibold
                tracking-tight
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/10
                hover:border-white/20
                hover:shadow-lg
              "
            >
              Our Approach
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Fade overlay at the bottom for smooth transition to next section */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#052440] to-transparent pointer-events-none" />
      
    </section>
  );
}