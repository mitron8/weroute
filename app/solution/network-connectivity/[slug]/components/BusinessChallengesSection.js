"use client"
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export default function BusinessChallengesSection({ data }) {
  if (!data || !data.cards) return null;

  // Helper function for dynamic Lucide icons
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    if (!IconComponent) return <LucideIcons.CheckCircle className="w-8 h-8 text-[#052440]" />;
    return <IconComponent className="w-8 h-8 text-[#052440]" />;
  };

  const getGridSpan = (total, index) => {
    if (total === 1) return "md:col-span-12 lg:col-span-12";
    if (total === 2) return "md:col-span-6 lg:col-span-6";
    if (total === 3) return "md:col-span-12 lg:col-span-4";
    if (total === 4) return "md:col-span-6 lg:col-span-6";
    if (total === 5) {
      if (index < 3) return "md:col-span-12 lg:col-span-4";
      return "md:col-span-6 lg:col-span-6";
    }
    if (total === 6) return "md:col-span-6 lg:col-span-4";
    return "md:col-span-12 lg:col-span-4";
  };

  return (
    <section className="w-full bg-[#f7f9fc] py-24 md:py-32 overflow-hidden">
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

        {/* Dynamic 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {data.cards.map((card, index) => {
            const colSpanClass = getGridSpan(data.cards.length, index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 clay-light bg-white border border-[#050849]/5 hover:border-[#B7F36B]/50 hover:-translate-y-1 transition-all duration-300 group ${colSpanClass}`}
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