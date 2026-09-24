"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function ServicesHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-[960px] flex flex-col justify-center overflow-hidden bg-white text-gray-900 pt-24 lg:pt-[84px] pb-6 lg:pb-8 border-b border-gray-100">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#A7BF73]/20 to-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[550px] h-[550px] bg-[#080357] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Text Content (Left Side) */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="clay-badge-light mb-4 sm:mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#050849]"
            >
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              Enterprise Services
            </motion.span>

            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-extrabold tracking-tight leading-[1.14] mb-4 text-[#080357]"
            >
              Enterprise Technology Services That Deliver{" "}
              <span className="bg-gradient-to-r from-[#080357] via-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                Business Outcomes
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-[17px] text-[#080357]/80 max-w-2xl mb-4 leading-relaxed font-normal"
            >
              Consulting-led technology services that design, implement, secure, operate, and optimize infrastructure, cloud, cybersecurity, AI, and software platforms, delivered through one accountable enterprise technology partner.
            </motion.p>
            
            {/* Geo Statement */}
            <motion.div 
              variants={itemVariants}
              className="mb-6 border-l-[3px] border-[#A7BF73] pl-4 py-0.5"
            >
              <p className="text-xs sm:text-sm text-[#080357]/70 max-w-xl font-medium leading-relaxed">
                WeRoute is an enterprise technology services partner that helps organizations plan, implement, secure, operate, and continuously optimize modern technology environments through consulting-led delivery and engineering excellence.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3.5 w-full sm:w-auto">
               <a 
                  href="#services"
                  className="group relative inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#080357] clay-btn-accent"
               >
                  <span className="relative z-10 transition-colors duration-300">
                     Explore Services
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-[#10078a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
               </a>
               <Link 
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 text-[#080357] border-2 border-[#080357]/10 bg-white hover:bg-gray-50"
               >
                  <span className="relative z-10 transition-colors duration-300">
                     Talk to Our Experts
                  </span>
               </Link>
            </motion.div>
          </motion.div>

          {/* Decorative Right Column */}
          <motion.div 
            className="hidden lg:flex lg:col-span-5 justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[380px] xl:max-w-[440px] aspect-square flex items-center justify-center">
              <DotLottieReact
                src="https://lottie.host/124333a6-dce6-49c5-bddf-bd521654a3cf/3Na07qHFW6.lottie"
                loop
                autoplay
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
