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
    <section className="relative w-full bg-white text-gray-900 overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-36 border-b border-gray-100">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#A7BF73]/20 to-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-[#080357] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content (Left Side) */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="clay-badge-light mb-6 inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-[#f7f9fc] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#050849]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              Enterprise Services
            </motion.span>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[56px] font-extrabold tracking-tight leading-[1.15] mb-6 text-[#080357]"
            >
              Enterprise Technology Services That Deliver <span className="text-blue-600">Business Outcomes</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#080357]/80 max-w-3xl mb-8 leading-relaxed font-medium"
            >
              Consulting-led technology services that design, implement, secure, operate, and optimize infrastructure, cloud, cybersecurity, AI, and software platforms, delivered through one accountable enterprise technology partner.
            </motion.p>
            
            {/* Geo Statement */}
            <motion.div 
              variants={itemVariants}
              className="mb-10 border-l-[3px] border-[#A7BF73] pl-5 py-1"
            >
              <p className="text-sm md:text-base text-[#080357]/80 max-w-2xl font-medium leading-relaxed">
                WeRoute is an enterprise technology services partner that helps organizations plan, implement, secure, operate, and continuously optimize modern technology environments through consulting-led delivery and engineering excellence.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
               <a 
                  href="#services"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-[#080357] clay-btn-accent"
               >
                  <span className="relative z-10 transition-colors duration-300">
                     Explore Services
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-[#10078a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
               </a>
               <Link 
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 text-[#080357] border-2 border-[#080357]/10 bg-white hover:bg-gray-50"
               >
                  <span className="relative z-10 transition-colors duration-300">
                     Talk to Our Experts
                  </span>
               </Link>
            </motion.div>
          </motion.div>

          {/* Decorative Right Column */}
          <motion.div 
            className="hidden lg:flex lg:col-span-5 justify-center lg:pr-8 xl:pr-16 items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              <DotLottieReact
                src="https://lottie.host/124333a6-dce6-49c5-bddf-bd521654a3cf/3Na07qHFW6.lottie"
                loop
                autoplay
                className="w-full h-full object-contain scale-[1.25]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
