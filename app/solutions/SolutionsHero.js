"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SolutionsHero() {
  // Animation variants for the main container (handles staggering)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Updated: Slower stagger effect for "one by one" feel
        staggerChildren: 0.4, 
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual items inside the container
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        // Updated: Longer duration for a smoother, slower glide
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], // Smooth custom cubic-bezier
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-white pb-28 pt-36 lg:pb-34 lg:pt-34"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Background Image from Unsplash (Abstract Tech/Network) */}
        <img 
          src="/solutionhero.png" 
          alt="Abstract tech background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* LIGHT GRID PATTERN Overlay 
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(5,36,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.03)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />*/}

        {/* Overlays for Readability (Fades to clear in center) 
        <div className="absolute inset-0 bg-[black]/20 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f9fc]/0  to-[black]/20" />*/}

        {/* AMBIENT GLOWS (Subtler against image) */}
        <div
          className="
            absolute
            left-[-10%]
            top-[-10%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#080357]/10
            blur-3xl
          "
        />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          {/* BADGE */}
          <motion.div variants={itemVariants} className="will-change-transform">
            <span
              className="
                inline-block
                rounded-full
                border border-[#052440]/10
                bg-white/90
                px-5 py-2.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#052440]
                shadow-lg shadow-[#052440]/5
                backdrop-blur-md
                mt-3
              "
            >
              Enterprise Solutions
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            variants={itemVariants}
            className="
              mt-4
              will-change-transform
              text-5xl
              font-black
              leading-[1.1]
              tracking-[-0.04em]
              text-[white]
              md:text-7xl
              lg:text-[80px]
            "
          >
            Technology Solutions Designed to Solve{" "}
            <span
              className="
                bg-gradient-to-r

                from-white
                to-[#A7BF73]
                
                
                bg-clip-text
                text-transparent
              "
            >
              Complex Challenges
            </span>
          </motion.h1>

          {/* INTRO PARAGRAPH (Minimized content for impact) */}
          <motion.div variants={itemVariants} className="mt-8 max-w-3xl will-change-transform">
            <p
              className="
                text-xl
                leading-relaxed
                text-[white]/80
                md:text-xl
                md:leading-[1.4]
              "
            >
              Modernize infrastructure, improve resilience, and operate securely at scale. We deliver outcome-driven, vendor-agnostic technology solutions engineered to align directly with your business goals.
            </p>
          </motion.div>

          {/* HERO CTA BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-col items-center justify-center gap-5 will-change-transform sm:flex-row"
          >
            <a
              href="#solutions"
              className="
                rounded-2xl
                bg-[#080357]
                px-10
                py-5
                text-base
                font-semibold
                text-white
                shadow-[0_10px_30px_rgba(8,3,87,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(8,3,87,0.35)]
              "
            >
              Explore Solutions
            </a>
            <a
              href="#approach"
              className="
                rounded-2xl
                border border-[#052440]/10
                bg-white/70
                px-10
                py-5
                text-base
                font-semibold
                text-[#052440]
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white
                hover:border-[#052440]/20
                hover:shadow-lg hover:shadow-[#052440]/5
              "
            >
              Our Approach
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}