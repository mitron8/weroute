"use client"
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export default function OutcomesSection({ data }) {
  if (!data || !data.cards) return null;

  // Safe icon rendering with a security-themed fallback
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    if (!IconComponent) return <LucideIcons.ShieldCheck className="w-8 h-8 text-[#B7F36B]" />;
    return <IconComponent className="w-8 h-8 text-[#B7F36B]" />;
  };

  return (
    <section className="w-full bg-[#080357] relative overflow-hidden py-24 md:py-32">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B7F36B] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B7F36B] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            {data.title}
            <span className="text-[#B7F36B]">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
          >
            {data.description}
          </motion.p>
        </div>

        {/* 3x2 Symmetrical Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#B7F36B]/30 transition-all duration-300 group shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                {renderIcon(card.icon)}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}