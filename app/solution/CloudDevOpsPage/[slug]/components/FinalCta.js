'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCta({ data }) {
  if (!data) return null;

  return (
    <section className="relative py-20 px-6 lg:px-8 bg-[#070B19] overflow-hidden flex items-center justify-center border-t border-gray-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1a2350] rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold mb-6 text-white text-balance"
        >
          {data.heading}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          {data.supportingText}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {data.buttons.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              className={`px-8 py-4 rounded-md font-medium transition-all duration-300 text-center ${
                btn.variant === 'primary'
                  ? 'bg-[#A3D133] text-[#070B19] hover:bg-[#8ebb29] shadow-[0_0_20px_rgba(163,209,51,0.2)]'
                  : 'bg-[#121936] text-white border border-gray-700 hover:border-[#A3D133] hover:text-[#A3D133]'
              }`}
            >
              {btn.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}