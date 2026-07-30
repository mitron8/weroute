"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CircuitBackground from "./CircuitBackground";

// =========================================
// MAGNETIC BUTTON COMPONENT
// =========================================
function MagneticButton({ children, href }) {
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
        relative inline-flex items-center justify-center
        overflow-hidden rounded-full border border-[#050849]/5 bg-[#050849] px-10 py-5
        text-base font-bold tracking-tight text-white
        transition-colors duration-300 hover:bg-[#4c658a]
      "
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

// =========================================
// TEXT REVEAL COMPONENT
// =========================================
const TextReveal = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-3 mb-2 overflow-hidden"
          style={{ display: "inline-block" }}
        >
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.08,
            }}
            style={{ display: "inline-block", willChange: "transform" }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </div>
  );
};


// =========================================
// MAIN HERO COMPONENT (LIGHT THEME)
// =========================================
export default function SolutionsHero() {
  // Cursor tracking for subtle background glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-white overflow-hidden">
      
      {/* Subtle Background Typography */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="text-center whitespace-nowrap opacity-[0.015]">
          <span className="text-[16rem] font-bold tracking-tighter text-[#050849]">WEROUTE</span>
        </div>
      </div>

      {/* --- GRID CONTENT: TEXT + LOTTIE ANIMATION --- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-7">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="clay-badge-light inline-block rounded-full border border-[#050849]/10 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849] shadow-sm">
              Enterprise Solutions
            </span>
          </motion.div>

          {/* H1 (STAGGERED REVEAL) */}
          <h1 className="text-3xl font-normal leading-[1.2] tracking-[-0.02em] text-[#050849] sm:text-4xl lg:text-5xl xl:text-[46px]">
            <TextReveal text="Enterprise Technology Solutions Built Around" className="mb-2 justify-center lg:justify-start" />
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block bg-gradient-to-r from-[#050849] to-[#4c658a] bg-clip-text text-transparent font-medium"
            >
              Business Outcomes
            </motion.span>
          </h1>

          {/* INTRO PARAGRAPHS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-6 max-w-xl"
          >
            <p className="text-lg font-light leading-relaxed text-[#4c658a]">
              We are trusted by enterprises for IT consulting, managed technology services, and digital transformation services that deliver exponential outcomes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4c658a]/70">
              WeRoute is an enterprise technology solutions partner that helps organisations modernise infrastructure, strengthen security, and scale operations globally.
            </p>
          </motion.div>

          {/* MAGNETIC CTA & SOCIAL PROOF */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-start sm:gap-8"
          >
            <MagneticButton href="#solutions">
              Explore Solutions
            </MagneticButton>

            <div className="flex items-center justify-center gap-4 border-t border-[#050849]/10 pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00d2ff] opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00d2ff]"></span>
              </span>
              <p className="text-sm font-medium tracking-wide text-[#4c658a] max-w-[200px] text-left">
                Trusted across <span className="text-[#050849] font-bold">40+</span> enterprise engagements
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Lottie Animation Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex items-center justify-center w-full"
        >
          <div className="w-full max-w-[480px] aspect-square flex items-center justify-center">
            <DotLottieReact
              src="https://lottie.host/63b96167-8c9b-4a52-b72b-a0f7d5b58e26/kaDB6VgG3v.lottie"
              loop
              autoplay
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

      </div>

      {/* Fade overlay at the bottom for smooth transition to next section */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[#f7f9fc] via-[#f7f9fc]/80 to-transparent pointer-events-none" />
      
    </section>
  );
}