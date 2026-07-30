"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function HeroSection({ data }) {
  const { breadcrumb, hero } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full bg-[#080357] text-white overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32 border-b border-white/5">
      {/* Abstract Background Element (Right Side) */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#080357]/80 to-[#080357]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080357] via-transparent to-[#080357]" />
      </div>
      
      {/* Subtle ambient glow behind the text using the lime green */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-[#B7F36B] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      {/* Match Navbar container: max-w-[1500px] px-8 */}
      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content (Left Side) */}
          <motion.div
            className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumbs */}
            <motion.nav variants={itemVariants} className="flex flex-wrap items-center gap-y-1 text-sm text-gray-400 mb-8 font-medium">
              {breadcrumb.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Link 
                    href={item.href} 
                    className="hover:text-[#B7F36B] transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                  {index < breadcrumb.length - 1 && (
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-600 shrink-0" />
                  )}
                </div>
              ))}
            </motion.nav>

            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#B7F36B]/40 bg-[#B7F36B]/5 text-[#B7F36B] text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(183,243,107,0.1)] backdrop-blur-sm">
                {hero.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300"
            >
              {hero.title}
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300/90 max-w-3xl mb-8 leading-relaxed font-light"
            >
              {hero.description}
            </motion.p>

            {/* Geo Statement (Rendered distinctively to break up text) */}
            <motion.div 
              variants={itemVariants}
              className="mb-10 border-l-[3px] border-[#B7F36B] pl-5 py-1"
            >
              <p className="text-sm md:text-base text-gray-400 max-w-2xl font-medium leading-relaxed">
                {hero.geoStatement}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {hero.buttons.map((button, index) => {
                const isPrimary = button.variant === "primary" || !button.variant;
                
                return (
                  <Link 
                    key={index} 
                    href={button.href}
                    className={`group relative inline-flex items-center justify-center px-8 py-4 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                      isPrimary 
                        ? "text-[#080357] bg-[#B7F36B] shadow-[0_8px_20px_rgba(183,243,107,0.2)]" 
                        : "text-white border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:border-white/40"
                    }`}
                  >
                    <span className="relative z-10 transition-colors duration-300">
                      {button.label}
                    </span>
                    
                    {/* Hover effect background fill for primary */}
                    {isPrimary && (
                      <div className="absolute inset-0 h-full w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                    )}
                  </Link>
                );
              })}
            </motion.div>

          </motion.div>

          {/* Decorative Right Column to balance layout */}
          <motion.div 
            className="hidden lg:flex lg:col-span-5 xl:col-span-4 justify-end items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
             <div className="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] rounded-full border border-white/5 flex items-center justify-center shadow-[0_0_80px_rgba(183,243,107,0.02)]">
                <div className="absolute w-3/4 h-3/4 rounded-full border border-white/10 flex items-center justify-center">
                   <div className="w-1/2 h-1/2 rounded-full bg-[#B7F36B]/5 flex items-center justify-center backdrop-blur-3xl">
                      <div className="w-1/3 h-1/3 rounded-full bg-[#B7F36B]/20 blur-sm" />
                   </div>
                </div>
                {/* Orbital dots */}
                <div className="absolute top-0 right-[15%] w-3 h-3 rounded-full bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <div className="absolute bottom-[10%] left-[10%] w-4 h-4 rounded-full bg-[#B7F36B]/60 shadow-[0_0_15px_rgba(183,243,107,0.5)]" />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}