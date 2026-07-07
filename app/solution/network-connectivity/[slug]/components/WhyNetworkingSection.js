"use client"
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export default function WhyNetworkingSection({ data }) {
  if (!data || !data.cards) return null;

  // Helper function to safely render Lucide icons from string names
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    // Fallback to a default icon if the name is typo'd in the DB
    if (!IconComponent) return <LucideIcons.CheckCircle className="w-6 h-6 text-[#B7F36B]" />;
    return <IconComponent className="w-6 h-6 text-[#B7F36B]" />;
  };

  return (
    <section className="w-full bg-[#F8F9FA] py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#052440] mb-6 tracking-tight"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            {data.introduction}
          </motion.p>
        </div>

        {/* Bento Box Grid (6 Column Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {data.cards.map((card, index) => {
            // Determine column span based on index for the 3-top, 2-bottom layout
            const isTopRow = index < 3;
            const colSpanClass = isTopRow 
              ? "lg:col-span-2 md:col-span-1" // 3 across on desktop
              : "lg:col-span-3 md:col-span-1"; // 2 across on desktop

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex flex-col bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#B7F36B]/50 transition-all duration-300 ${colSpanClass}`}
              >
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-xl bg-[#052440] flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {renderIcon(card.icon)}
                </div>

                {/* Card Content */}
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