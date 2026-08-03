"use client";
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export default function WhyChooseSection({ data }) {
  if (!data || !data.cards) return null;

  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    if (!IconComponent) return <LucideIcons.CheckCircle className="w-8 h-8 text-[#B7F36B]" />;
    return <IconComponent className="w-8 h-8 text-[#B7F36B]" />;
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
    <section className="w-full bg-[#f7f9fc] py-24 md:py-32 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#052440] tracking-tight"
          >
            {data.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {data.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-white p-8 clay-light border border-[#050849]/5 hover:border-[#B7F36B]/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden ${getGridSpan(data.cards.length, index)}`}
            >
              {/* Top Border Highlight on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#B7F36B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="mb-6 w-14 h-14 rounded-xl bg-[#052440] flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
                {renderIcon(card.icon)}
              </div>
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