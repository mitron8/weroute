"use client"
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export default function UseCasesSection({ data }) {
  if (!data || !data.cards) return null;

  // Safe icon rendering with a security-themed fallback
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    if (!IconComponent) return <LucideIcons.Shield className="w-10 h-10 text-[#052440]" />;
    return <IconComponent className="w-10 h-10 text-[#052440]" />;
  };

  return (
    <section className="w-full bg-[#F8F9FA] py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#052440] tracking-tight"
          >
            {data.title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#B7F36B] mx-auto mt-6 rounded-full origin-left"
          />
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {data.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start group"
            >
              {/* Minimal Icon Wrapper */}
              <div className="mb-6 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:border-[#B7F36B]/50 transition-colors duration-300">
                {renderIcon(card.icon)}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#052440] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}