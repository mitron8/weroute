"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function DarkTransitionLeopolda() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden relative border-t border-gray-100"
    >
      
      {/* Parallax Image Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
          alt="Abstract Data Center"
          className="w-full h-full object-cover filter grayscale"
        />
      </motion.div>
      
      {/* Text Content */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[40px] md:text-[70px] lg:text-[110px] leading-[1.1] md:leading-[0.95] tracking-wide uppercase text-white flex flex-col items-center"
        >
          <span className="font-light">ONE PARTNER,</span>
          <span className="font-medium mt-2 md:mt-0">ENDLESS SCALE.</span>
        </motion.h2>
      </div>
      
    </section>
  );
}
