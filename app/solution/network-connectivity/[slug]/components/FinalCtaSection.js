"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCtaSection({ data }) {
  if (!data) return null;

  return (
    <section className="relative w-full bg-[#080357] py-24 md:py-32 overflow-hidden text-center flex flex-col items-center justify-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B7F36B] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          {data.heading}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-300 mb-10 font-light"
        >
          {data.supportingText}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {data.buttons.map((button, index) => (
            <Link 
              key={index} 
              href={button.href}
              className={`group relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95
                ${button.variant === 'primary' 
                  ? 'text-[#052440] bg-[#B7F36B]' 
                  : 'text-white bg-transparent border border-gray-500 hover:border-white'
                }
              `}
            >
              <span className={`relative z-10 transition-colors duration-300 ${button.variant === 'primary' ? 'group-hover:text-black' : 'group-hover:text-white'}`}>
                {button.label}
              </span>
              {button.variant === 'primary' && (
                <div className="absolute inset-0 h-full w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              )}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}