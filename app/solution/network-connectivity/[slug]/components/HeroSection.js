"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
    <section className="relative w-full bg-white text-gray-900 overflow-hidden pt-24 pb-24 lg:pt-28 lg:pb-36 border-b border-gray-100">
      {/* Abstract Background Element (Right Side) */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/80 to-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>
      
      {/* Subtle ambient glow behind the text using primary color */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-[#080357] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      {/* Match Navbar container: max-w-[1500px] px-8 */}
      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content (Left Side) */}
          <motion.div
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumbs */}
            <motion.nav variants={itemVariants} className="flex flex-wrap items-center gap-y-1 text-sm text-gray-500 mb-8 font-medium">
              {breadcrumb.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Link 
                    href={item.href} 
                    className="hover:text-[#080357] transition-colors duration-200 text-gray-600"
                  >
                    {item.title}
                  </Link>
                  {index < breadcrumb.length - 1 && (
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400 shrink-0" />
                  )}
                </div>
              ))}
            </motion.nav>

            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-1.5 border border-[#080357]/10 bg-[#080357]/5 text-[#080357] text-xs font-bold uppercase tracking-wider backdrop-blur-sm rounded-full">
                {hero.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[56px] font-extrabold tracking-tight leading-[1.15] mb-6 text-[#080357]"
            >
              {hero.title}
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 max-w-3xl mb-8 leading-relaxed font-normal"
            >
              {hero.description}
            </motion.p>

            {/* Geo Statement (Rendered distinctively to break up text) */}
            <motion.div 
              variants={itemVariants}
              className="mb-10 border-l-[3px] border-[#080357] pl-5 py-1"
            >
              <p className="text-sm md:text-base text-gray-500 max-w-2xl font-medium leading-relaxed">
                {hero.geoStatement}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              {hero.buttons.map((button, index) => {
                const isPrimary = button.variant === "primary" || !button.variant;
                
                return (
                  <Link 
                    key={index} 
                    href={button.href}
                    className={`group relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                      isPrimary 
                        ? "text-white bg-[#080357] shadow-lg shadow-[#080357]/20 hover:shadow-xl hover:shadow-[#080357]/30" 
                        : "text-[#080357] border-2 border-[#080357]/10 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="relative z-10 transition-colors duration-300">
                      {button.label}
                    </span>
                    
                    {/* Hover effect background fill for primary */}
                    {isPrimary && (
                      <div className="absolute inset-0 h-full w-full bg-[#10078a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                    )}
                  </Link>
                );
              })}
            </motion.div>

          </motion.div>

          {/* Decorative Right Column to balance layout */}
          <motion.div 
            className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-center lg:pr-8 xl:pr-16 items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {hero.lottieSrc ? (
              <div className="w-full max-w-[500px] aspect-square flex items-center justify-center">
                <DotLottieReact
                  src={hero.lottieSrc}
                  loop
                  autoplay
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
            ) : (
               <div className="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 shadow-inner">
                  <div className="absolute w-3/4 h-3/4 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
                     <div className="w-1/2 h-1/2 rounded-full bg-[#080357]/5 flex items-center justify-center">
                        <div className="w-1/3 h-1/3 rounded-full bg-[#080357]/10 blur-sm" />
                     </div>
                  </div>
                  {/* Orbital dots */}
                  <div className="absolute top-0 right-[15%] w-3 h-3 rounded-full bg-[#080357]/20 shadow-[0_0_10px_rgba(8,3,87,0.1)]" />
                  <div className="absolute bottom-[10%] left-[10%] w-4 h-4 rounded-full bg-[#080357]/60 shadow-[0_0_15px_rgba(8,3,87,0.2)]" />
               </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}