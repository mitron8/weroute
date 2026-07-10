'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero({ data }) {
  return (
    <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Minimalist glowing background effect matching logo accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1a2350] rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#A3D133]/10 text-[#A3D133] border border-[#A3D133]/20 text-sm font-medium tracking-wide mb-6">
            {data.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {data.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex justify-center gap-4"
        >
          {data.buttons.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                btn.variant === 'primary'
                  ? 'bg-[#A3D133] text-[#070B19] hover:bg-[#8ebb29] shadow-[0_0_20px_rgba(163,209,51,0.2)] hover:shadow-[0_0_30px_rgba(163,209,51,0.4)]'
                  : 'bg-transparent text-white border border-gray-600 hover:border-gray-400'
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