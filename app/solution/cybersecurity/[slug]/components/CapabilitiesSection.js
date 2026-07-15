"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function CapabilitiesSection({ data }) {
  if (!data || !data.cards) return null;

  // Helper function for dynamic Lucide icons with a security fallback
  const renderIcon = (iconName, className) => {
    const IconComponent = LucideIcons[iconName];
    if (!IconComponent) return <LucideIcons.ShieldCheck className={className} />;
    return <IconComponent className={className} />;
  };

  return (
    <section className="w-full bg-white relative overflow-hidden">
      
      {/* Proof Line Banner (Navy) */}
      <div className="w-full bg-[#052440] py-4 border-y border-[#B7F36B]/20">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <p className="text-[#B7F36B] font-medium text-sm md:text-base tracking-wide">
            {data.proofLine}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-32">
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
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Zig-Zag Feature Rows */}
        <div className="space-y-24 md:space-y-36">
          {data.cards.map((card, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Text Content Block */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  // Order classes handle the zig-zag on desktop, but keep it stacked on mobile
                  className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col items-start`}
                >
                  <span className="text-xs font-bold tracking-widest uppercase text-[#B7F36B] bg-[#052440] px-3 py-1 rounded-md mb-6 shadow-sm">
                    {card.keyword}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#052440] mb-6 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                    {card.description}
                  </p>
                  
                  {card.button && (
                    <Link 
                      href={card.button.href}
                      className="group flex items-center gap-2 text-[#052440] font-semibold text-lg hover:text-[#B7F36B] transition-colors duration-300"
                    >
                      {card.button.label}
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  )}
                </motion.div>

                {/* Visual / Icon Block */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full aspect-square md:aspect-[4/3] rounded-3xl bg-gray-50 border border-gray-100 relative flex items-center justify-center overflow-hidden group shadow-inner`}
                >
                  {/* Subtle background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10 pointer-events-none" />
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#B7F36B] opacity-[0.05] rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700" />
                  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#052440] opacity-[0.03] rounded-full blur-3xl group-hover:opacity-5 transition-opacity duration-700" />
                  
                  {/* Floating Icon Wrapper */}
                  <div className="relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white shadow-xl flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
                     <div className="absolute inset-0 border border-[#B7F36B]/20 rounded-2xl" />
                     {renderIcon(card.icon, "w-16 h-16 md:w-20 md:h-20 text-[#052440]")}
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

        {/* Commercial Intent Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-32 max-w-4xl mx-auto text-center border-t border-gray-200 pt-16"
        >
          <p className="text-xl md:text-2xl font-semibold text-[#052440] leading-snug">
            {data.commercialIntent}
          </p>
        </motion.div>

      </div>
    </section>
  );
}