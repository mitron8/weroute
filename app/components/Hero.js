"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const WORDS = [
  "Scalability",
  "Intelligence",
  "Resilience",
  "Innovation"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#fafafa]
        text-[#050849]
        pt-20
      "
    >
      {/* SUBTLE GRAIN / NOISE */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')" }} 
      />

      <div className="relative z-10 w-full h-[100vh] flex flex-col justify-center items-center px-6 lg:px-12 text-center overflow-hidden">
        
        <div className="flex flex-col items-center justify-center max-w-6xl w-full">
          
          {/* THE INTERACTIVE SENTENCE */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[36px] sm:text-[50px] md:text-[70px] lg:text-[90px] leading-[1.2] md:leading-[1.1] font-medium tracking-tight text-[#050849] flex flex-wrap justify-center items-center gap-x-3 gap-y-4 md:gap-x-6"
          >
            <span>We</span>
            <span>Engineer</span>
            
            {/* INLINE ANIMATED BADGE */}
            <span className="relative overflow-hidden h-[50px] sm:h-[65px] md:h-[90px] lg:h-[110px] w-[200px] sm:w-[280px] md:w-[400px] lg:w-[500px] bg-[#050849]/5 rounded-full flex items-center justify-center border border-[#050849]/10 shadow-inner">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={WORDS[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute text-[#050849]/60 italic font-light whitespace-nowrap text-[32px] sm:text-[45px] md:text-[65px] lg:text-[85px] tracking-tight pb-1 md:pb-2"
                >
                  {WORDS[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            
            <span>At</span>
            <span>Scale.</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 md:mt-12 max-w-2xl text-sm md:text-lg leading-relaxed text-[#050849]/60 font-medium"
          >
            We build secure, scalable, and intelligent digital infrastructure for modern enterprises ready for the future.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 md:mt-12"
          >
            <a
              href="#contact"
              className="
                group
                flex
                items-center
                gap-6
                rounded-full
                bg-[#050849]
                pl-8
                pr-3
                py-3
                text-sm
                font-bold
                uppercase
                tracking-[0.1em]
                text-white
                shadow-[0_20px_40px_rgba(5,8,73,0.15)]
                transition-all
                duration-500
                hover:bg-black
                hover:text-white
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
                hover:-translate-y-1
              "
            >
              Start Project
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 group-hover:bg-white/30 group-hover:translate-x-1">
                <ArrowRight size={18} />
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}