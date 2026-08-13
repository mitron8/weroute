"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, ChevronDown, Workflow, ArrowRight, Sparkles, Building2, Factory, HeartPulse, Store, Antenna, Landmark, GraduationCap, Cpu, Truck, Zap, Briefcase, Globe2, MessageSquare } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import FinalCTA from "@/app/components/FinalCTA";
import Link from "next/link";

// ==========================================
// Helper: Text Formatter
// ==========================================
const renderFormattedDescription = (text, isDark = false) => {
  if (!text) return null;
  
  if (text.includes("Business Challenges:") && text.includes("Core Capabilities:")) {
    const parts = text.split(/Business Challenges:|Core Capabilities:/);
    const intro = parts[0].trim();
    const challenges = parts[1].trim();
    const capabilities = parts[2].trim();
    
    return (
      <div className="space-y-4">
        <p>{intro}</p>
        <div className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-[#f7f9fc] border border-[#080357]/5'}`}>
          <strong className={`block font-bold mb-1 text-xs uppercase tracking-wider ${isDark ? 'text-[#B7F36B]' : 'text-[#080357]'}`}>Business Challenges</strong>
          <p className={`text-sm ${isDark ? 'text-white/80' : 'text-gray-600'}`}>{challenges}</p>
        </div>
        <div className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-[#f7f9fc] border border-[#080357]/5'}`}>
          <strong className={`block font-bold mb-1 text-xs uppercase tracking-wider ${isDark ? 'text-[#B7F36B]' : 'text-[#080357]'}`}>Core Capabilities</strong>
          <p className={`text-sm ${isDark ? 'text-white/80' : 'text-gray-600'}`}>{capabilities}</p>
        </div>
      </div>
    );
  }
  
  return <p>{text}</p>;
};

// ==========================================
// 1. Carousel Section (For 6+ Items)
// ==========================================
function CarouselSection({ section }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector(".snap-start")?.clientWidth || 400;
      scrollRef.current.scrollBy({ left: amount > 0 ? cardWidth + 24 : -(cardWidth + 24), behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
        <div className="max-w-3xl">
          {section.title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6 tracking-tight"
            >
              {section.title}
            </motion.h2>
          )}
          {section.intro && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed font-light whitespace-pre-wrap"
            >
              {section.intro}
            </motion.p>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 shrink-0 hidden md:flex"
        >
          <button
            onClick={() => scrollByAmount(-1)}
            disabled={!canScrollLeft}
            className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center text-[#080357] hover:bg-gray-50 hover:border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => scrollByAmount(1)}
            disabled={!canScrollRight}
            className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center text-[#080357] hover:bg-gray-50 hover:border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>

      <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {section.items.map((item, itemIdx) => (
            <motion.div
              key={itemIdx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: itemIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
              className="snap-start shrink-0 clay-light bg-[#f7f9fc] border border-[#050849]/5 p-8 md:p-10 flex flex-col w-[85vw] md:w-[450px] lg:w-[500px] cursor-pointer"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm text-[#080357] font-bold text-xl clay-badge-light">
                {itemIdx + 1}
              </div>
              <h3 className="text-2xl font-bold text-[#080357] mb-4 leading-tight">
                {item.title.replace(/\(Target:.*?\)/, "").trim()}
              </h3>
              <div className="text-base md:text-lg text-gray-600 leading-relaxed font-light flex-grow">
                {renderFormattedDescription(item.description)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. Bento Grid Section (For 4-5 Items, or explicitly forced)
// ==========================================
function BentoGridSection({ section, theme = "light" }) {
  const isDarkTheme = theme === "dark";

  return (
    <div 
      className={`relative ${isDarkTheme ? 'py-32 bg-[#080357] my-32 overflow-hidden' : 'w-full'}`}
      style={isDarkTheme ? { width: '100vw', marginLeft: 'calc(50% - 50vw)' } : {}}
    >
      <div className={`mx-auto ${isDarkTheme ? 'max-w-7xl px-6' : 'w-full'}`}>
        <div className="max-w-4xl mx-auto text-center mb-16">
        {section.title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-extrabold mb-6 ${isDarkTheme ? 'text-white' : 'text-[#080357]'}`}
          >
            {section.title}
          </motion.h2>
        )}
        {section.intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-lg md:text-xl leading-relaxed font-light ${isDarkTheme ? 'text-white/80' : 'text-gray-600'}`}
          >
            {section.intro}
          </motion.p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {section.items.map((item, idx) => {
          
          let spanClass = "md:col-span-1";
          
          // Perfect Bento Grid Math mapping to guarantee no empty spots
          const len = section.items.length;
          
          if (len === 4) {
            // Row 1 (span-2, span-1), Row 2 (span-1, span-2)
            if (idx === 0 || idx === 3) spanClass = "md:col-span-2";
          } else if (len === 5) {
            // Row 1 (span-2, span-1), Row 2 (span-1, span-1, span-1)
            if (idx === 0) spanClass = "md:col-span-2";
          } else if (len === 6) {
            // Three rows of (span-2, span-1) / (span-1, span-2) / (span-2, span-1)
            if (idx === 0 || idx === 3 || idx === 4) spanClass = "md:col-span-2";
          } else if (len === 7) {
            // Two rows of 2 (span-2, span-1) and one row of 3 (span-1, span-1, span-1)
            if (idx === 0 || idx === 3) spanClass = "md:col-span-2";
          } else if (len === 8) {
            // One row of 2, two rows of 3
            if (idx === 0) spanClass = "md:col-span-2";
          } else if (len === 9) {
            // Three rows of 3
            spanClass = "md:col-span-1";
          } else if (len === 10) {
            // Two rows of 2, two rows of 3
            if (idx === 0 || idx === 3) spanClass = "md:col-span-2";
          } else {
            // Generic fallback
            if (idx % 4 === 0) spanClass = "md:col-span-2";
          }

          const isHighlight = isDarkTheme || spanClass === "md:col-span-2";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
              className={`${spanClass} rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center relative group overflow-hidden cursor-pointer ${
                isHighlight ? "bg-[#080357] text-white clay-dark border border-white/5 shadow-xl" : "bg-white clay-light border border-[#080357]/5"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center flex-shrink-0 ${isHighlight ? 'bg-white/10 text-[#B7F36B]' : 'bg-[#f7f9fc] text-[#080357] clay-badge-light'}`}>
                 <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${isHighlight ? "text-white" : "text-[#080357]"}`}>
                  {item.title.replace(/\(Target:.*?\)/, "").trim()}
                </h3>
                <div className={`${isHighlight ? "text-white/80" : "text-gray-600"} leading-relaxed font-light text-lg`}>
                  {renderFormattedDescription(item.description, isHighlight)}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. Process Section (For "Approach" / "Process")
// ==========================================
function ProcessSection({ section }) {
  return (
    <div 
      className="relative w-full py-24 md:py-32 my-20 bg-[#080357] overflow-hidden"
      style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B7F36B] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B7F36B] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B7F36B] mb-6">
            Delivery Model
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            {section.title}
            <span className="text-[#B7F36B]">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
          >
            {section.intro}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {section.items.map((item, idx) => {
            const total = section.items.length;
            
            // Dynamic Grid Span logic from OutcomesSection
            let spanClass = "md:col-span-12 lg:col-span-4";
            if (total === 1) spanClass = "md:col-span-12 lg:col-span-12";
            else if (total === 2) spanClass = "md:col-span-6 lg:col-span-6";
            else if (total === 3) spanClass = "md:col-span-12 lg:col-span-4";
            else if (total === 4) spanClass = "md:col-span-6 lg:col-span-6";
            else if (total === 5) {
              if (idx < 3) spanClass = "md:col-span-12 lg:col-span-4";
              else spanClass = "md:col-span-6 lg:col-span-6";
            }
            else if (total === 6) spanClass = "md:col-span-6 lg:col-span-4";

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col p-8 md:p-10 clay-dark bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#B7F36B]/30 hover:-translate-y-2 transition-all duration-300 group rounded-[2rem] ${spanClass}`}
              >
                <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 border border-white/5 text-[#B7F36B] font-black text-2xl flex-shrink-0 transform group-hover:scale-110 group-hover:bg-[#B7F36B] group-hover:text-[#080357] transition-all duration-300 shadow-lg">
                  {idx + 1}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title.replace(/\(Target:.*?\)/, "").trim()}
                </h3>
                <div className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                   {renderFormattedDescription(item.description)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. Standard Grid Section (For remaining lists)
// ==========================================
function StandardGridSection({ section }) {
  return (
    <div className="w-full">
      <div className="max-w-3xl mb-12">
        {section.title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-[#080357] mb-6"
          >
            {section.title}
          </motion.h2>
        )}
        {section.intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
          >
            {section.intro}
          </motion.p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
            className="bg-white clay-light border border-[#080357]/5 rounded-[2rem] p-8 cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-[#f7f9fc] rounded-xl flex items-center justify-center mb-6 text-[#080357]">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#080357] mb-4">
              {item.title.replace(/\(Target:.*?\)/, "").trim()}
            </h3>
            <div className="text-gray-600 font-light leading-relaxed">
              {renderFormattedDescription(item.description)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 5. Text & Graphic Split (For 0 Items)
// ==========================================
function TextGraphicSection({ section }) {
  return (
    <div className="w-full clay-light bg-white rounded-[3rem] p-10 md:p-16 border border-[#080357]/5 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-[#f7f9fc] to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#080357] mb-6 leading-tight">
            {section.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed whitespace-pre-wrap">
            {section.intro}
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center lg:justify-end">
           <div className="w-full max-w-sm aspect-square rounded-[2rem] bg-gradient-to-tr from-[#080357] to-[#0d5ea8] clay-dark p-8 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="text-center text-white relative z-10">
                 <div className="w-20 h-20 mx-auto border-4 border-white/20 rounded-full flex items-center justify-center mb-6 text-[#B7F36B]">
                    <CheckCircle2 size={40} />
                 </div>
                 <h3 className="text-2xl font-bold">Strategic Value</h3>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
}


// ==========================================
// 6. Portfolio Section (Custom Premium UI for Managed Services Portfolio)
// ==========================================
function PortfolioSection({ section }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="w-full py-24 md:py-32 my-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f9fc] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#080357] mb-6 border border-[#080357]/5">
            <Sparkles size={14} className="text-[#B7F36B]" /> Portfolio
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#080357] mb-6 tracking-tight"
          >
            {section.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
          >
            {section.intro}
          </motion.p>
        </div>

        <div className="grid gap-6">
          {section.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            
            // Clean up AI formatting
            let cleanDesc = item.description;
            let challenges = "";
            let capabilities = "";
            
            if (cleanDesc.includes("Business Challenges:") && cleanDesc.includes("Core Capabilities:")) {
              const parts = cleanDesc.split(/Business Challenges:|Core Capabilities:/);
              cleanDesc = parts[0].trim();
              challenges = parts[1].trim();
              capabilities = parts[2].trim();
            }

            // Extract title carefully so we don't end up with an empty string
            let displayTitle = item.title.replace(/\(Target:.*?\)/, "").trim();
            if (!displayTitle) {
              const match = item.title.match(/\(Target:\s*(.*?)\)/);
              displayTitle = match ? match[1] : item.title;
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className={`relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 cursor-pointer ${isOpen ? 'bg-[#080357] border-[#080357] shadow-2xl scale-[1.01]' : 'bg-white border-[#080357]/5 hover:border-[#080357]/20 clay-light'}`}
              >
                {/* Abstract background when open */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="absolute top-0 right-0 w-96 h-96 bg-[#B7F36B] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                   <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                </div>
                
                <div className="p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center relative z-10">
                  <div className="flex-shrink-0">
                    <span className={`text-5xl md:text-7xl font-black tracking-tighter transition-colors duration-500 leading-none ${isOpen ? 'text-white/10' : 'text-[#080357]/5'}`}>
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div className="flex-grow w-full">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-xl md:text-2xl font-extrabold transition-colors duration-500 leading-none ${isOpen ? 'text-white' : 'text-[#080357]'}`}>
                        {displayTitle}
                      </h3>
                      {/* Mobile arrow is hidden here, shown at end of row for consistency */}
                    </div>
                    
                    <div className={`grid transition-all duration-500 overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="min-h-0">
                        <p className="text-lg leading-relaxed font-light text-white/80 max-w-3xl mb-8">
                          {cleanDesc}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {challenges && (
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                               <div className="flex items-center gap-3 mb-3">
                                  <div className="w-8 h-8 rounded-full bg-[#B7F36B]/20 flex items-center justify-center">
                                     <div className="w-2 h-2 rounded-full bg-[#B7F36B]" />
                                  </div>
                                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#B7F36B]">Challenges</h4>
                               </div>
                               <p className="text-white/70 font-light text-sm leading-relaxed">{challenges}</p>
                            </div>
                          )}
                          {capabilities && (
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                               <div className="flex items-center gap-3 mb-3">
                                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                     <CheckCircle2 size={16} className="text-white" />
                                  </div>
                                  <h4 className="text-sm font-bold uppercase tracking-widest text-white">Capabilities</h4>
                               </div>
                               <p className="text-white/70 font-light text-sm leading-relaxed">{capabilities}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 md:ml-auto self-end md:self-center mt-4 md:mt-0">
                    <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${isOpen ? 'border-[#B7F36B] bg-[#B7F36B] text-[#080357] rotate-[-45deg]' : 'border-gray-200 text-gray-400 rotate-0'}`}>
                      <ArrowRight size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


// ==========================================
// 7. Industries Section (Custom Premium UI for Industries We Support)
// ==========================================
function IndustriesSection({ section }) {
  // Normalize the weird scraped data into a clean list of industries
  const extractIndustries = () => {
    const rawText = section.items.map(item => `${item.title} ${item.description}`).join(" ");
    
    // Ignore internal links or related services text
    if (rawText.includes("INTERNAL LINKS") || rawText.includes("RELATED")) {
      // Just hardcode the known industries if we detect the garbage data
      return [
        { name: "Financial Services", icon: <Building2 size={32} /> },
        { name: "Manufacturing", icon: <Factory size={32} /> },
        { name: "Healthcare", icon: <HeartPulse size={32} /> },
        { name: "Retail", icon: <Store size={32} /> },
        { name: "Telecommunications", icon: <Antenna size={32} /> },
        { name: "Government", icon: <Landmark size={32} /> },
        { name: "Education", icon: <GraduationCap size={32} /> },
        { name: "Technology", icon: <Cpu size={32} /> },
        { name: "Logistics", icon: <Truck size={32} /> },
        { name: "Energy & Utilities", icon: <Zap size={32} /> },
      ];
    }
    
    // Fallback if data is clean
    return section.items.map(item => ({
      name: item.title,
      icon: <Briefcase size={32} />
    }));
  };

  const industries = extractIndustries();

  return (
    <div 
      className="w-full py-24 md:py-32 my-20 bg-[#080357] relative overflow-hidden"
      style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B7F36B] rounded-full blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B7F36B] mb-6 border border-white/10 shadow-xl backdrop-blur-md">
            <Globe2 size={14} /> Global Reach
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
          >
            {section.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed font-light"
          >
            {section.intro}
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.2rem)] bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center gap-6 group hover:bg-[#B7F36B] hover:border-[#B7F36B] transition-colors duration-500 cursor-pointer backdrop-blur-sm shadow-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-[#080357] group-hover:text-[#B7F36B] transition-colors duration-500">
                {ind.icon}
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl leading-tight group-hover:text-[#080357] transition-colors duration-500">
                {ind.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


// =========================================
// MAGNETIC BUTTON COMPONENT (For Final CTA)
// =========================================
function MagneticCTAButton({ children, href }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="
        clay-light
        relative inline-flex items-center justify-center gap-3
        overflow-hidden rounded-full border border-[#080357]/5 bg-[#B7F36B] px-10 py-5
        text-base font-bold tracking-tight text-[#080357] shadow-[0_10px_30px_rgba(183,243,107,0.3)]
        transition-colors duration-300 hover:bg-[#f7f9fc]
      "
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <MessageSquare size={18} />
      </span>
    </motion.a>
  );
}


// ==========================================
// Main Client Page
// ==========================================
export default function ClientServicePage({ service, isNewLayout }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!service) return null;

  if (!isNewLayout) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-4xl">
            <span className="inline-flex mt-10 items-center gap-2 rounded-full border border-[#080357]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#080357] clay-badge-light">
              {service.hero.badge}
            </span>
            <h1 className="mt-8 text-5xl font-black leading-none tracking-[-0.05em] text-[#080357] md:text-6xl">
              {service.hero.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#080357]/65">
              {service.hero.subtitle}
            </p>
          </div>
          <div className="flex justify-center mt-20 lg:justify-end">
            <img
              src={service.hero.image}
              alt="Service"
              className="w-full max-w-md object-contain rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    );
  }

  const getDiagramForService = (id) => {
    switch (id) {
      case 'managed-data-centre-services': return '/services%20digram/infra%20stack.jpg';
      case 'managed-network-services': return '/services%20digram/network%20op.jpg';
      case 'managed-cloud-hybrid-environment-services': return '/services%20digram/cloud%20op.jpg';
      case 'managed-cybersecurity-soc-services': return '/services%20digram/managed%20soc.jpg';
      default: return '/services%20digram/slc.jpg';
    }
  };

  // Prevent consecutive carousels to improve UX
  let previousLayoutType = null;
  const renderSection = (section, index, totalSections) => {
    const isFirst = index === 0;
    const isDeliver = section.title.toLowerCase().includes("what we deliver");
    const isProcess = section.title.toLowerCase().includes("delivery approach") || section.title.toLowerCase().includes("process") || section.title.toLowerCase().includes("approach");
    const isPortfolio = section.title.toLowerCase().includes("portfolio");
    const isIndustries = section.title.toLowerCase().includes("industries");

    if (!section.items || section.items.length === 0) {
      previousLayoutType = "text";
      return <TextGraphicSection key={section.id} section={section} />;
    }
    
    if (isPortfolio) {
      previousLayoutType = "portfolio";
      return <PortfolioSection key={section.id} section={section} />;
    }
    
    if (isIndustries) {
      previousLayoutType = "industries";
      return <IndustriesSection key={section.id} section={section} />;
    }
    
    // Explicit override for "What We Deliver"
    if (isDeliver) {
      previousLayoutType = "bento";
      return <BentoGridSection key={section.id} section={section} theme="dark" />;
    }

    if (isProcess) {
      previousLayoutType = "process";
      return (
        <React.Fragment key={section.id}>
          <ProcessSection section={section} />
          {/* Diagram Placeholder */}
          <div className="flex justify-center mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-fit relative overflow-hidden rounded-[2rem] clay-dark border border-[#050849]/10 shadow-xl p-4 sm:p-6 bg-[#080357]"
            >
              <img 
                src={getDiagramForService(service.id)}
                alt="Service Delivery Approach Diagram" 
                className="max-h-[400px] w-auto object-contain rounded-xl"
              />
            </motion.div>
          </div>
        </React.Fragment>
      );
    }
    if (section.items.length === 4 || section.items.length === 5) {
      previousLayoutType = "bento";
      return <BentoGridSection key={section.id} section={section} />;
    }
    if (section.items.length > 6) {
      // If the immediate previous section was a carousel, force this one into a standard grid to avoid visual fatigue
      if (previousLayoutType === "carousel") {
        previousLayoutType = "standard";
        return <StandardGridSection key={section.id} section={section} />;
      }
      previousLayoutType = "carousel";
      return <CarouselSection key={section.id} section={section} />;
    }
    
    previousLayoutType = "standard";
    return <StandardGridSection key={section.id} section={section} />;
  };

  // --- Data Cleaning for Internal Links ---
  const cleanedSections = [];
  const relatedLinks = [];

  service.sections.forEach(section => {
    const newSection = { ...section, items: section.items ? [...section.items] : [] };
    if (newSection.items.length > 0) {
      const linkItems = newSection.items.filter(item => 
        item.title.toUpperCase().includes("RELATED") || item.title.toUpperCase().includes("INTERNAL LINKS")
      );
      
      linkItems.forEach(item => {
        const urls = item.description.split("|").map(s => s.trim()).filter(Boolean);
        urls.forEach(url => {
          let name = url.split('/').pop().replace(/-/g, ' ');
          name = name.replace(/\b\w/g, l => l.toUpperCase());
          name = name.replace(/ Services$/i, ''); // Clean up name
          if (!relatedLinks.find(r => r.href === url)) {
            relatedLinks.push({ label: name, href: url });
          }
        });
      });

      newSection.items = newSection.items.filter(item => 
        !item.title.toUpperCase().includes("RELATED") && !item.title.toUpperCase().includes("INTERNAL LINKS")
      );
    }
    cleanedSections.push(newSection);
  });

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pb-20">
      {/* 1. Hero Section */}
      <div className="relative mt-4 mb-20 md:mt-10 md:mb-32">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full max-h-[500px] bg-gradient-to-tr from-blue-100/40 via-[#B7F36B]/20 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #080357 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="grid items-center gap-16 lg:grid-cols-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: -20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.1 }}
              className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#080357] shadow-sm border border-[#080357]/5 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#B7F36B] animate-pulse" />
              {service.hero.badge}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#080357] mb-6 relative"
            >
              {service.hero.title || service.seo.h1 || service.hero.badge}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-gray-600"
            >
              {service.hero.subtitle}
            </motion.p>
            
            {/* Added CTA in the Hero Section for better conversion */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-4 rounded-full bg-[#080357] px-8 py-4 font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#B7F36B] hover:text-[#080357] hover:shadow-[0_10px_40px_rgba(183,243,107,0.3)] hover:-translate-y-1 active:scale-95"
              >
                <span>Get Started</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#080357]/10">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.85, rotate: -2 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden bg-transparent group flex items-center justify-center">
              {service.hero.lottieUrl ? (
                <div className={`w-full h-full ${service.hero.lottieScale || 'scale-100'}`}>
                  <DotLottieReact
                    src={service.hero.lottieUrl}
                    loop
                    autoplay
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <img
                  src={service.hero.image}
                  alt={service.hero.badge}
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Geo Statement & Page Philosophy Banner */}
      {(service.geoStatement || service.pagePhilosophy) && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-28 overflow-hidden rounded-[3rem] bg-white border border-[#080357]/5 p-10 md:p-16 text-[#080357] shadow-[0_20px_60px_-15px_rgba(8,3,87,0.05)] relative clay-light"
        >
          {/* Abstract light theme background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f7f9fc] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {service.geoStatement && (
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-[#f7f9fc] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#080357] mb-6 border border-[#080357]/5">
                   <Sparkles size={14} className="text-[#B7F36B]" /> Our Commitment
                </div>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light mb-8">{service.geoStatement}</p>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-4 rounded-full bg-[#080357] px-8 py-4 font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#B7F36B] hover:text-[#080357] hover:shadow-[0_10px_40px_rgba(183,243,107,0.3)] hover:-translate-y-1 active:scale-95 shadow-xl shadow-[#080357]/20"
                >
                  <span>Talk to an Expert</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#080357]/10">
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </div>
                </Link>
              </motion.div>
            )}
            {service.pagePhilosophy && (
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="lg:border-l lg:border-[#080357]/10 lg:pl-16"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-[#f7f9fc] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#080357] mb-6 border border-[#080357]/5">
                   Philosophy
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#080357]">
                  "{service.pagePhilosophy}"
                </h2>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* 3. Dynamic Sections Map */}
      <div className="mt-32 space-y-32">
        {cleanedSections
          .filter(section => section.id !== 'section-9' && section.id !== 'section-10')
          .map((section, idx) => {
            if (!section.title && !section.intro && (!section.items || section.items.length === 0)) return null;
            return (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                 {renderSection(section, idx, service.sections.length)}
              </motion.div>
            );
          })}
      </div>

      {/* 3.5 Related Solutions / Internal Links */}
      {relatedLinks.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 w-full pt-16 border-t border-[#080357]/10"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-extrabold text-[#080357] mb-12 tracking-tight"
            >
              Explore Related Solutions
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className="group flex items-center gap-3 px-6 py-3 clay-light bg-white border border-[#080357]/5 rounded-full text-[#080357] font-semibold hover:border-[#B7F36B] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#080357] group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* 4. CTA Section (Section 10) - MOVED ABOVE FAQ */}
      {service.cta && (service.cta.title || service.cta.description) && (
        <section className="relative w-full mt-32 pb-16 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-6xl relative overflow-hidden rounded-3xl bg-[#080357] shadow-xl"
          >
            {/* Animated Background Elements inside the CTA */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {/* Glowing Accent Green Blob */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[30%] -left-[10%] h-[400px] w-[400px] rounded-full bg-[#B7F36B] blur-[100px]"
              />
              {/* Glowing Light Blue Blob */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-[30%] -right-[10%] h-[450px] w-[450px] rounded-full bg-white blur-[120px]"
              />

              {/* Inner Glassmorphism Border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-6 py-8 md:px-10 md:py-10">
              
              {/* Left Content */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#B7F36B]/30 bg-[#B7F36B]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B7F36B] backdrop-blur-md"
                >
                  Start Your Journey
                </motion.span>
                
                <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-[42px] tracking-tight">
                  {service.cta.title}
                </h2>
                
                <p className="mt-6 max-w-xl text-base md:text-lg font-light leading-relaxed text-white/70">
                  {service.cta.description}
                </p>

                {service.cta.button && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-10"
                  >
                    <MagneticCTAButton href="#contact">
                      {service.cta.button}
                    </MagneticCTAButton>
                  </motion.div>
                )}
              </div>

              {/* Right Lottie Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-5 flex items-center justify-center w-full mt-10 lg:mt-0"
              >
                <div className="w-full max-w-[240px] md:max-w-[270px] aspect-square flex items-center justify-center">
                  <DotLottieReact
                    src="https://lottie.host/bc42f255-0c6a-458c-a02b-02f75d3c8509/1HCUwb6Dat.lottie"
                    loop
                    autoplay
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

            </div>
          </motion.div>
        </section>
      )}

      {/* 5. FAQ Section (Section 9) - MOVED BELOW CTA */}
      {service.faq && service.faq.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 w-full bg-[#f7f9fc] py-24 md:py-32 rounded-[3rem] border border-[#080357]/5"
        >
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-[#080357] mb-12 text-center tracking-tight"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-4">
              {service.faq.map((item, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="clay-light border border-[#080357]/5 bg-[#f7f9fc] overflow-hidden rounded-2xl"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="text-lg font-semibold text-[#080357]">
                        {item.question}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-[#B7F36B] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-gray-600 font-light leading-relaxed border-t border-gray-100 pt-4">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      )}

      </div>
    </>
  );
}
