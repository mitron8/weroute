'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Hero({ data, breadcrumb = [] }) {
  const {
    badge,
    title,
    description,
    geoStatement,
    buttons = [],
  } = data;
  return (
   <section className="relative w-full bg-[#080357] text-white overflow-hidden py-24 lg:py-32 flex flex-col items-center justify-center min-h-[85vh]">
      
      {/* Subtle ambient glow behind the text using the lime green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B7F36B] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Breadcrumb Navigation */}
        {breadcrumb.length > 0 && (
          <motion.nav 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap justify-center items-center gap-y-1 text-sm text-gray-400 mb-8"
          >
            {breadcrumb.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <Link 
                  href={item.href} 
                  className="hover:text-[#A3D133] transition-colors duration-200"
                >
                  {item.title}
                </Link>
                {idx < breadcrumb.length - 1 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-600 shrink-0" />
                )}
              </div>
            ))}
          </motion.nav>
        )}

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#A3D133]/10 text-[#A3D133] border border-[#A3D133]/20 text-sm font-medium tracking-wide mb-6">
              {badge}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Geo Statement (Enterprise Context) */}
        {geoStatement && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="text-sm text-gray-500 max-w-xl mx-auto mb-10 font-light"
          >
            {geoStatement}
          </motion.p>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {buttons.map((btn, idx) => {
            const isPrimary = btn.variant === 'primary' || !btn.variant;
            return (
              <Link
                key={idx}
                href={btn.href}
                className={`w-full sm:w-auto px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                  isPrimary
                    ? 'bg-[#A3D133] text-[#070B19] hover:bg-[#8ebb29] shadow-[0_0_20px_rgba(163,209,51,0.2)] hover:shadow-[0_0_30px_rgba(163,209,51,0.4)]'
                    : 'bg-transparent text-white border border-gray-600 hover:border-gray-400'
                }`}
              >
                {btn.label}
              </Link>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}