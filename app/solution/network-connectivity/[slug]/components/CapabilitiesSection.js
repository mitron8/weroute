"use client"
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CapabilitiesSection({ data }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  if (!data || !data.cards) return null;

  const renderIcon = (iconName, className) => {
    const IconComponent = LucideIcons[iconName];
    if (!IconComponent) return <LucideIcons.CheckCircle className={className} />;
    return <IconComponent className={className} />;
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.snap-start')?.clientWidth || 400;
      scrollRef.current.scrollBy({ left: amount > 0 ? cardWidth + 24 : -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#f7f9fc] relative overflow-hidden">
      

      <div className="container mx-auto px-6 py-16 md:py-20 max-w-7xl">
        
        {/* Section Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-3xl">
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

          {/* Navigation Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 shrink-0"
          >
            <button 
              onClick={() => scrollByAmount(-1)}
              disabled={!canScrollLeft}
              className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center text-[#052440] hover:bg-gray-50 hover:border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous capability"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button 
              onClick={() => scrollByAmount(1)}
              disabled={!canScrollRight}
              className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center text-[#052440] hover:bg-gray-50 hover:border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next capability"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </motion.div>
        </div>

        {/* CSS Scroll Snap Carousel */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data.cards.map((card, index) => {
              return (
                <div 
                  key={index} 
                  className="snap-start shrink-0 w-[85vw] md:w-[600px] lg:w-[850px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center clay-light border border-[#050849]/5 bg-[#f7f9fc] p-8 md:p-12"
                >
                  
                  {/* Text Content Block */}
                  <div className="flex flex-col items-start order-2 md:order-1">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B7F36B] bg-[#052440] px-3 py-1 rounded-md mb-6 shadow-sm">
                      {card.keyword}
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#052440] mb-4 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed font-light">
                      {card.description}
                    </p>
                    

                  </div>

                  {/* Visual / Icon Block */}
                  <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl bg-white border border-gray-100 relative flex items-center justify-center shadow-sm group order-1 md:order-2 overflow-hidden">
                    {/* Subtle background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f7f9fc]/50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#B7F36B] opacity-[0.08] rounded-full blur-3xl group-hover:opacity-15 transition-opacity duration-700" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#052440] opacity-[0.05] rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700" />
                    
                    {/* Floating Icon Wrapper */}
                    <div className="relative z-20 w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-white shadow-[0_10px_30px_rgba(5,36,64,0.06)] flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
                       <div className="absolute inset-0 border border-[#052440]/5 rounded-2xl" />
                       {renderIcon(card.icon, "w-14 h-14 md:w-16 md:h-16 text-[#052440]")}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Commercial Intent Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 max-w-4xl mx-auto text-center border-t border-gray-200 pt-12"
        >
          <p className="text-xl md:text-2xl font-semibold text-[#052440] leading-snug">
            {data.commercialIntent}
          </p>
        </motion.div>

      </div>
    </section>
  );
}