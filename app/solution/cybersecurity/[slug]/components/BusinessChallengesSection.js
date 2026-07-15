"use client"
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export default function BusinessChallengesSection({ data }) {
  if (!data || !data.cards) return null;

  // Helper function for dynamic Lucide icons with a security fallback
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    if (!IconComponent) return <LucideIcons.ShieldAlert className="w-8 h-8 text-[#052440]" />;
    return <IconComponent className="w-8 h-8 text-[#052440]" />;
  };

  return (
    <section className="w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#052440] mb-6 tracking-tight"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-light border-l-4 border-[#B7F36B] pl-4"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* Staggered Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:pb-12">
          {data.cards.map((card, index) => {
            // Apply a downward shift to the middle column on desktop for a staggered look
            const isMiddleColumn = index % 3 === 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group
                  ${isMiddleColumn ? 'lg:translate-y-12' : ''} 
                `}
              >
                {/* Animated Left Border Highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#B7F36B] rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                {/* Icon Wrapper */}
                <div className="mb-6 p-4 bg-[#F8F9FA] inline-block rounded-xl group-hover:bg-[#052440]/5 transition-colors duration-300">
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
            );
          })}
        </div>

      </div>
    </section>
  );
}