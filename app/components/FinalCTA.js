"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FinalCTA({
  badgeText = "Start Your Transformation",
  titleLine1 = "Build Smarter,",
  titleLine2 = "Scale Faster.",
  description = "WeRoute helps enterprises modernize network, cloud, cybersecurity, AI, software, and operations through architecture-led strategy and engineering. Start with a conversation about where your estate is today.",
  button1Text = "Schedule a Consultation",
  button1Href = "#contact",
  button2Text = "Talk to an Expert",
  button2Href = "#contact",
}) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 text-[#080357]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#080357]/5 blur-[110px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Main Card with Claymorphism */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="clay-light relative overflow-hidden bg-[#f7f9fc] border border-[#050849]/5 px-6 py-12 sm:px-12 sm:py-16 md:px-16 lg:px-20"
        >
          <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
            {/* Left Content */}
            <div className="max-w-3xl flex-1">
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <span className="clay-badge-light inline-flex items-center gap-2.5 border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
                  <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
                  {badgeText}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants}>
                <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-[50px] tracking-tight">
                  <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                    {titleLine1}
                  </span>{" "}
                  <span className="text-[#080357]">
                    {titleLine2}
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants}>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#052440]/70 max-w-2xl font-normal">
                  {description}
                </p>
              </motion.div>
            </div>

            {/* Right: Exactly Two Claymorphic Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row xl:flex-col gap-4 sm:items-center xl:items-stretch xl:min-w-[320px]"
            >
              <Link
                href={button1Href}
                className="clay-btn-accent group flex items-center justify-between gap-4 bg-[#080357] px-8 py-5 text-white transition-all duration-300 hover:bg-[#0E1A59]"
              >
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-[#A7BF73]" />
                  <span className="text-base font-extrabold tracking-tight">
                    {button1Text}
                  </span>
                </div>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={button2Href}
                className="clay-badge-light group flex items-center justify-between gap-4 border border-[#052440]/15 bg-[#f7f9fc] px-8 py-5 text-[#080357] transition-all duration-300 hover:bg-[#080357] hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare size={20} className="text-[#080357] group-hover:text-white transition-colors" />
                  <span className="text-base font-extrabold tracking-tight">
                    {button2Text}
                  </span>
                </div>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}