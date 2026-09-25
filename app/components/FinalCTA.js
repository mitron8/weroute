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
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHref,
  secondaryButtonHref,
  theme = "dark",
}) {
  const b1Text = primaryButtonText || button1Text;
  const b1Href = primaryButtonHref || button1Href;
  const b2Text = secondaryButtonText !== undefined ? secondaryButtonText : button2Text;
  const b2Href = secondaryButtonHref || button2Href;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24"
    >
      {/* Subtle Section Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#080357]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Main Card with Dark Theme */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="clay-dark relative overflow-hidden rounded-[2.5rem] bg-[#080357] border border-white/10 px-6 py-12 sm:px-12 sm:py-16 md:px-16 lg:px-20 shadow-2xl text-white"
        >
          {/* Subtle decorative glows inside the dark card */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#B7F36B]/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-400/10 rounded-full blur-[90px] pointer-events-none" />
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} 
          />

          <div className="relative z-10 flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
            {/* Left Content */}
            <div className="max-w-3xl flex-1">
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <span className="clay-badge inline-flex items-center gap-2.5 border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#B7F36B] backdrop-blur-md shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#B7F36B] animate-pulse" />
                  {badgeText}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants}>
                <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-[50px] tracking-tight text-white">
                  <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                    {titleLine1}
                  </span>{" "}
                  <span className="bg-gradient-to-r from-[#B7F36B] via-[#c6f788] to-[#A7BF73] bg-clip-text text-transparent">
                    {titleLine2}
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants}>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/80 max-w-2xl font-light">
                  {description}
                </p>
              </motion.div>
            </div>

            {/* Right: Dark Theme CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row xl:flex-col gap-4 sm:items-center xl:items-stretch xl:min-w-[320px]"
            >
              {b1Text && (
                <Link
                  href={b1Href}
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-[#B7F36B] px-8 py-5 text-[#080357] font-extrabold shadow-lg shadow-[#B7F36B]/25 transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-[#080357]" />
                    <span className="text-base font-extrabold tracking-tight">
                      {b1Text}
                    </span>
                  </div>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}

              {b2Text && (
                <Link
                  href={b2Href}
                  className="clay-badge group flex items-center justify-between gap-4 border border-white/20 bg-white/10 px-8 py-5 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare size={20} className="text-[#B7F36B] transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-base font-extrabold tracking-tight">
                      {b2Text}
                    </span>
                  </div>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 text-white/70" />
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}