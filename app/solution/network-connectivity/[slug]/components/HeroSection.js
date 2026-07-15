"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function HeroSection({ data }) {
  const { breadcrumb, hero } = data;

  // Animation variants for the staggered entrance
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full bg-[#080357] text-white overflow-hidden py-24 lg:py-32 flex flex-col items-center justify-center min-h-[85vh]">
      
      {/* Subtle ambient glow behind the text using the lime green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B7F36B] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumbs */}
          <motion.nav variants={itemVariants} className="flex flex-wrap justify-center items-center gap-y-1 text-sm text-gray-400 mb-12">
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center">
                <Link 
                  href={item.href} 
                  className="hover:text-[#B7F36B] transition-colors duration-200"
                >
                  {item.title}
                </Link>
                {index < breadcrumb.length - 1 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-500 shrink-0" />
                )}
              </div>
            ))}
          </motion.nav>

          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#B7F36B]/40 text-[#B7F36B] text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(183,243,107,0.1)] bg-[#B7F36B]/5 backdrop-blur-sm">
              {hero.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300"
          >
            {hero.title}
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-gray-300/80 max-w-2xl mb-6 leading-relaxed"
          >
            {hero.description}
          </motion.p>

          {/* Geo Statement */}
          <motion.p 
            variants={itemVariants}
            className="text-sm text-gray-400 max-w-xl mb-10 font-light"
          >
            {hero.geoStatement}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            {hero.buttons.map((button, index) => {
              const isPrimary = button.variant === "primary" || !button.variant;
              
              return (
                <Link 
                  key={index} 
                  href={button.href}
                  className={`group relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 ${
                    isPrimary 
                      ? "text-[#052440] bg-[#B7F36B]" 
                      : "text-white border border-[#B7F36B]/40 bg-white/5 backdrop-blur-sm"
                  }`}
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isPrimary ? "group-hover:text-black" : "group-hover:text-[#052440]"
                  }`}>
                    {button.label}
                  </span>
                  
                  {/* Hover effect background fill */}
                  <div className="absolute inset-0 h-full w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                </Link>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}