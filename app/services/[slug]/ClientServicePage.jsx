"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Search,
  Workflow, 
  ArrowRight, 
  ArrowDown, 
  Building2, 
  Factory, 
  HeartPulse, 
  Store, 
  Antenna, 
  Landmark, 
  GraduationCap, 
  Cpu, 
  Truck, 
  Zap, 
  Briefcase, 
  Globe2, 
  MessageSquare,
  ShieldCheck,
  Activity,
  Server,
  Layers,
  Lock,
  Code2
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import FinalCTA from "@/app/components/FinalCTA";
import FAQSection from "@/app/components/ui/FAQAccordion";
import Link from "next/link";
import StaffingArchitectureDiagram from "../components/StaffingArchitectureDiagram";
import NetworkStaffingArchitectureDiagram from "../components/NetworkStaffingArchitectureDiagram";
import CybersecurityStaffingArchitectureDiagram from "../components/CybersecurityStaffingArchitectureDiagram";
import CloudDevOpsStaffingArchitectureDiagram from "../components/CloudDevOpsStaffingArchitectureDiagram";
import SoftwareStaffingArchitectureDiagram from "../components/SoftwareStaffingArchitectureDiagram";
import AiStaffingArchitectureDiagram from "../components/AiStaffingArchitectureDiagram";
import ConsultingAdvisoryDiagram from "../components/ConsultingAdvisoryDiagram";
import NetworkSecurityAssessmentDiagram from "../components/NetworkSecurityAssessmentDiagram";
import CloudReadinessAssessmentDiagram from "../components/CloudReadinessAssessmentDiagram";
import AiAutomationAdvisoryDiagram from "../components/AiAutomationAdvisoryDiagram";
import WeightedEvaluationFrameworkDiagram from "../components/WeightedEvaluationFrameworkDiagram";
import ObservabilityPlatformDiagram from "../components/ObservabilityPlatformDiagram";
import EnterpriseNetworkArchitectureDiagram from "../components/EnterpriseNetworkArchitectureDiagram";
import CloudDevOpsLifecycleDiagram from "../components/CloudDevOpsLifecycleDiagram";
import IacDeliveryLifecycleDiagram from "../components/IacDeliveryLifecycleDiagram";
import SoftwareAiPlatformDiagram from "../components/SoftwareAiPlatformDiagram";
import GovernedApiLayerDiagram from "../components/GovernedApiLayerDiagram";
import GovernedMobilePlatformDiagram from "../components/GovernedMobilePlatformDiagram";
import EnterpriseAiPlatformDiagram from "../components/EnterpriseAiPlatformDiagram";

// Safe DotLottie wrapper to suppress AbortError on fast tab switching / unmounts
const SafeDotLottie = ({ src, loop = true, autoplay = true, className = "", ...props }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) return null;

  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={autoplay}
      className={className}
      onError={(err) => {
        // AbortError is normal during component unmounting / tab switching
        if (err?.name === "AbortError" || String(err?.message || "").includes("aborted")) {
          return;
        }
        setHasError(true);
      }}
      {...props}
    />
  );
};

// ==========================================
// Helper: Text Formatter
// ==========================================
const renderFormattedDescription = (text, isDark = false) => {
  if (!text) return null;
  
  const hasChallenges = text.includes("Business Challenges:") || text.includes("Common triggers:");
  const hasCapabilities = text.includes("Core Capabilities:") || text.includes("Example Roles:") || text.includes("Core deliverables:");

  if (hasChallenges && hasCapabilities) {
    const parts = text.split(/Business Challenges:|Core Capabilities:|Example Roles:|Common triggers:|Core deliverables:/);
    const intro = parts[0].trim();
    const challenges = parts[1].trim();
    const capabilities = parts[2].trim();
    const isRoles = text.includes("Example Roles:");
    const isChallenges = text.includes("Business Challenges:");
    
    return (
      <div className="space-y-4">
        <p className="leading-relaxed">{intro}</p>
        <div className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-[#f7f9fc] border border-[#080357]/5'}`}>
          <strong className={`block font-bold mb-1 text-xs uppercase tracking-wider ${isDark ? 'text-[#B7F36B]' : 'text-[#080357]'}`}>
            {isChallenges ? "Business Challenges" : "Common Triggers"}
          </strong>
          <p className={`text-sm ${isDark ? 'text-white/80' : 'text-gray-600'}`}>{challenges}</p>
        </div>
        <div className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-[#f7f9fc] border border-[#080357]/5'}`}>
          <strong className={`block font-bold mb-1 text-xs uppercase tracking-wider ${isDark ? 'text-[#B7F36B]' : 'text-[#080357]'}`}>
            {isRoles ? "Example Roles" : "Core Capabilities"}
          </strong>
          <p className={`text-sm ${isDark ? 'text-white/80' : 'text-gray-600'}`}>{capabilities}</p>
        </div>
      </div>
    );
  }

  // Handle structured text with bullets or key focus areas
  if (text.includes("\n") || text.includes("•")) {
    const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
    const regularLines = [];
    const bulletLines = [];
    let heading = null;

    lines.forEach(l => {
      if (l.startsWith("•") || l.startsWith("-")) {
        bulletLines.push(l.replace(/^[•\-]\s*/, ""));
      } else if (l.endsWith(":") || l.toLowerCase().includes("focus areas") || l.toLowerCase().includes("deliverables") || l.toLowerCase().includes("includes")) {
        heading = l;
      } else {
        regularLines.push(l);
      }
    });

    if (bulletLines.length > 0) {
      return (
        <div className="space-y-3">
          {regularLines.map((p, i) => (
            <p key={i} className={`leading-relaxed text-sm md:text-base ${isDark ? 'text-white/90' : 'text-gray-600'}`}>{p}</p>
          ))}
          {heading && (
            <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mt-2 px-2.5 py-1 rounded-md ${isDark ? 'bg-white/10 text-[#B7F36B]' : 'bg-[#080357]/5 text-[#080357]'}`}>
              <span>{heading}</span>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {bulletLines.map((bullet, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDark ? 'bg-[#B7F36B]' : 'bg-[#080357]'}`} />
                <span className={`text-xs md:text-sm font-medium ${isDark ? 'text-white/95' : 'text-gray-700'}`}>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  
  return <p className={`leading-relaxed ${isDark ? 'text-white/90' : 'text-gray-600'}`}>{text}</p>;
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
            <>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6 tracking-tight"
              >
                {section.title}
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "3rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="h-1.5 bg-[#B7F36B] mb-8 rounded-full" 
              />
            </>
          )}
          {section.intro && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-light"
            >
              {section.intro}
            </motion.p>
          )}
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-4 self-end md:self-auto mb-4 md:mb-0">
          <button 
            onClick={() => scrollByAmount(-1)}
            className="p-3 md:p-4 rounded-full bg-white border border-[#050849]/10 text-[#080357] hover:bg-[#080357] hover:text-white transition-all shadow-sm hover:shadow-md clay-badge-light"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="md:w-7 md:h-7" />
          </button>
          <button 
            onClick={() => scrollByAmount(1)}
            className="p-3 md:p-4 rounded-full bg-[#080357] text-white hover:bg-[#052440] transition-all shadow-sm hover:shadow-md clay-badge-dark"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="md:w-7 md:h-7" />
          </button>
        </div>
      </div>

      <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
        <div
          ref={scrollRef}
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
              className="group snap-start shrink-0 clay-light bg-white border border-[#050849]/5 p-8 md:p-10 flex flex-col w-[85vw] md:w-[450px] lg:w-[500px] cursor-pointer hover:shadow-xl hover:border-[#B7F36B]/50 transition-all duration-300 relative overflow-hidden rounded-[2rem]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#B7F36B]/5 rounded-full blur-3xl -z-10 group-hover:bg-[#B7F36B]/20 transition-all duration-300" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7f9fc] shadow-sm text-[#080357] font-bold text-xl clay-badge-light group-hover:bg-[#B7F36B]/20 transition-colors">
                {itemIdx + 1}
              </div>
              <h3 className="text-2xl font-bold text-[#080357] mb-4 leading-tight group-hover:text-[#052440] transition-colors">
                {(item.title || "").replace(/\(Target:.*?\)/, "").trim()}
              </h3>
              <div className="text-base md:text-lg text-gray-600 leading-relaxed font-light flex-grow">
                {renderFormattedDescription(item.description)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {(section.outro || section.footer) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-4xl"
        >
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
            {section.outro || section.footer}
          </p>
        </motion.div>
      )}
    </div>
  );
}

// ==========================================
// 1.5 What We Deliver Section (Balanced, Proportionate Enterprise Delivery Grid)
// ==========================================
function WhatWeDeliverSection({ section }) {
  if (!section || !section.items || section.items.length === 0) return null;

  const total = section.items.length;

  let gridColsClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  if (total === 4) {
    gridColsClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl";
  } else if (total === 2) {
    gridColsClass = "grid-cols-1 md:grid-cols-2 max-w-4xl";
  } else if (total === 8) {
    gridColsClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl";
  }

  return (
    <div id={section.id || "what-we-deliver"} className="w-full py-16 md:py-20 my-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f9fc] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#080357] mb-4 border border-[#080357]/5">
          <CheckCircle2 size={13} className="text-[#080357]" /> What We Deliver
        </span>
        {section.title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#080357] tracking-tight mb-4"
          >
            {section.title}
          </motion.h2>
        )}
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "3.5rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1.5 bg-[#B7F36B] mb-6 rounded-full" 
        />
        {section.intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-600 leading-relaxed font-light"
          >
            {section.intro}
          </motion.p>
        )}
      </div>

      {/* Balanced Uniform Grid */}
      <div className={`grid ${gridColsClass} gap-6 mx-auto`}>
        {section.items.map((item, idx) => {
          const cleanTitle = (item.title || "").replace(/\(Target:.*?\)/, "").trim();

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="clay-light group bg-white border border-[#080357]/8 rounded-[1.75rem] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-[#080357]/25 hover:shadow-[0_20px_40px_rgba(8,3,87,0.06)]"
            >
              {/* Subtle top-right ambient hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B7F36B]/25 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header row with step index and subtle badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#080357]/5 text-[#080357] border border-[#080357]/5 flex items-center justify-center font-black text-sm group-hover:bg-[#080357] group-hover:text-white transition-all duration-300">
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#f7f9fc] border border-[#080357]/5 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                    <CheckCircle2 size={15} />
                  </div>
                </div>

                {/* Deliverable Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#080357] mb-3 group-hover:text-blue-950 transition-colors leading-snug">
                  {cleanTitle}
                </h3>

                {/* Deliverable Description */}
                <div className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                  {renderFormattedDescription(item.description)}
                </div>
              </div>

              {/* Bottom Subtle Indicator Bar */}
              <div className="mt-6 pt-4 border-t border-[#080357]/5 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 group-hover:text-[#080357] transition-colors">
                  Enterprise Deliverable
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#080357]/20 group-hover:bg-[#B7F36B] transition-colors" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Outro / Footer if exists */}
      {(section.outro || section.footer) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-4xl"
        >
          <p className="text-base text-slate-600 leading-relaxed font-light">
            {section.outro || section.footer}
          </p>
        </motion.div>
      )}
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
      className={`relative ${isDarkTheme ? 'py-20 md:py-24 bg-[#080357] my-20 overflow-hidden' : 'w-full'}`}
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
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className={`group ${spanClass} min-h-[200px] rounded-[1.75rem] p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden cursor-pointer transition-all duration-300 ${
                isHighlight ? "bg-[#080357] text-white clay-dark border border-white/5 shadow-xl hover:border-[#B7F36B]/40" : "bg-white clay-light border border-[#080357]/5 hover:shadow-xl hover:border-[#B7F36B]/50"
              }`}
            >
              <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl -z-10 transition-all duration-300 ${isHighlight ? 'bg-[#B7F36B]/5 group-hover:bg-[#B7F36B]/15' : 'bg-[#B7F36B]/5 group-hover:bg-[#B7F36B]/20'}`} />
              <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center flex-shrink-0 transition-colors ${isHighlight ? 'bg-white/10 text-[#B7F36B] group-hover:bg-[#B7F36B]/20' : 'bg-[#f7f9fc] text-[#080357] clay-badge-light group-hover:bg-[#B7F36B]/20 group-hover:text-[#080357]'}`}>
                 <CheckCircle2 size={20} />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2.5 transition-colors ${isHighlight ? "text-white" : "text-[#080357] group-hover:text-[#052440]"}`}>
                  {(item.title || "").replace(/\(Target:.*?\)/, "").trim()}
                </h3>
                <div className={`${isHighlight ? "text-white/80" : "text-gray-600"} leading-relaxed font-light text-sm sm:text-base`}>
                  {renderFormattedDescription(item.description, isHighlight)}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {(section.outro || section.footer) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 max-w-4xl mx-auto text-center"
        >
          <p className={`text-base md:text-lg leading-relaxed font-light ${isDarkTheme ? 'text-white/80' : 'text-gray-600'}`}>
            {section.outro || section.footer}
          </p>
        </motion.div>
      )}
      </div>
    </div>
  );
}

// ==========================================
// 3. Process Section (For "Approach" / "Process")
// ==========================================
function ProcessSection({ section }) {
  const total = section.items.length;
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(total > 4);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Determine active index based on scroll position
      const card = scrollRef.current.querySelector(".process-card");
      if (card) {
        const cardWidth = card.clientWidth + 24;
        const currentIdx = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(Math.max(0, currentIdx), total - 1));
      }
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [total]);

  const scrollToIndex = (idx) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll(".process-card");
      if (cards && cards[idx]) {
        cards[idx].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        setActiveIndex(idx);
      }
    }
  };

  const scrollByDirection = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".process-card");
      const scrollAmount = card ? (card.clientWidth + 24) * 2 : 400;
      scrollRef.current.scrollBy({
        left: direction > 0 ? scrollAmount : -scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div 
      className="relative w-full py-24 md:py-32 my-20 bg-[#080357] overflow-hidden"
      style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B7F36B] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B7F36B] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
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

        {/* Step Progression Timeline Indicator - Clickable to scroll directly to any card */}
        {total > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-6xl mx-auto mb-14 p-4 sm:p-5 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {section.items.map((item, idx) => {
              const cleanTitle = (item.title || "").replace(/^[0-9]+\.\s*/, "").replace(/\(Target:.*?\)/, "").trim();
              const isSelected = activeIndex === idx;
              return (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 group">
                  <button
                    type="button"
                    onClick={() => scrollToIndex(idx)}
                    className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-[#B7F36B]/20 border border-[#B7F36B] shadow-md -translate-y-0.5"
                        : "bg-white/5 border border-white/10 hover:border-[#B7F36B]/60 hover:bg-white/10"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shadow-sm flex-shrink-0 transition-colors ${
                      isSelected
                        ? "bg-[#B7F36B] text-[#080357]"
                        : "bg-white/10 text-white"
                    }`}>
                      {idx + 1}
                    </span>
                    <span className={`text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                      isSelected ? "text-[#B7F36B]" : "text-white group-hover:text-[#B7F36B]"
                    }`}>
                      {cleanTitle}
                    </span>
                  </button>
                  {idx < total - 1 && (
                    <ArrowRight size={14} className="text-[#B7F36B]/50 hidden lg:inline-block flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ─── CAROUSEL / BALANCED 4-CARD CONTAINER ─── */}
        {total <= 4 ? (
          <div className={`grid grid-cols-1 md:grid-cols-2 ${total === 3 ? 'lg:grid-cols-3' : total === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-4'} gap-6 md:gap-8`}>
            {section.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col p-8 clay-dark bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#B7F36B]/50 hover:-translate-y-2 transition-all duration-300 group rounded-[2.5rem] shadow-xl"
              >
                <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 border border-white/10 text-[#B7F36B] font-black text-2xl flex-shrink-0 transform group-hover:scale-110 group-hover:bg-[#B7F36B] group-hover:text-[#080357] transition-all duration-300 shadow-lg">
                  {idx + 1}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#B7F36B] transition-colors">
                  {(item.title || "").replace(/\(Target:.*?\)/, "").trim()}
                </h3>
                <div className="text-white/95 text-base leading-relaxed font-normal flex-grow">
                   {renderFormattedDescription(item.description, true)}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative w-full">
            {/* Carousel Controls Header */}
            <div className="flex items-center justify-between mb-6 px-1">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#B7F36B] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                Showing 4 Stages per view • Stage {activeIndex + 1} of {total}
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => scrollByDirection(-1)}
                  disabled={!canScrollLeft}
                  aria-label="Previous stage"
                  className={`p-2.5 sm:p-3 rounded-full border transition-all duration-300 ${
                    canScrollLeft
                      ? "bg-white/10 border-white/20 text-white hover:bg-[#B7F36B] hover:text-[#080357] hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                      : "bg-white/5 border-white/5 text-white/30 cursor-not-allowed"
                  }`}
                >
                  <ChevronLeft size={20} className="sm:w-5 sm:h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByDirection(1)}
                  disabled={!canScrollRight}
                  aria-label="Next stage"
                  className={`p-2.5 sm:p-3 rounded-full border transition-all duration-300 ${
                    canScrollRight
                      ? "bg-white/10 border-white/20 text-white hover:bg-[#B7F36B] hover:text-[#080357] hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                      : "bg-white/5 border-white/5 text-white/30 cursor-not-allowed"
                  }`}
                >
                  <ChevronRight size={20} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Carousel Track: Exactly 4 cards visible side-by-side on desktop */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbar scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {section.items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="process-card snap-start shrink-0 flex-shrink-0 w-[85vw] sm:w-[320px] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex flex-col p-7 sm:p-8 clay-dark bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#B7F36B]/50 hover:-translate-y-2 transition-all duration-300 group rounded-[2.5rem] shadow-xl select-none"
                >
                  <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 border border-white/10 text-[#B7F36B] font-black text-2xl flex-shrink-0 transform group-hover:scale-110 group-hover:bg-[#B7F36B] group-hover:text-[#080357] transition-all duration-300 shadow-lg">
                    {idx + 1}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#B7F36B] transition-colors leading-tight">
                    {(item.title || "").replace(/\(Target:.*?\)/, "").trim()}
                  </h3>
                  <div className="text-white/95 text-sm sm:text-base leading-relaxed font-normal flex-grow">
                     {renderFormattedDescription(item.description, true)}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Progress Dots */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {section.items.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToIndex(dotIdx)}
                  aria-label={`Go to stage ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === dotIdx
                      ? "w-8 bg-[#B7F36B]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {(section.outro || section.footer) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-14 max-w-4xl mx-auto text-center"
          >
            <p className="text-base md:text-lg leading-relaxed font-light text-white/80">
              {section.outro || section.footer}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 3.4 Capabilities Section (Previous Points Design with "Know More" Toggle)
// ==========================================
function CapabilitiesSection({ section }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  const rawItems = section.items || [];
  const PREVIEW_LIMIT = 8;
  const hasMore = rawItems.length > PREVIEW_LIMIT;
  const visibleItems = isExpanded ? rawItems : rawItems.slice(0, PREVIEW_LIMIT);
  const remainingCount = rawItems.length - PREVIEW_LIMIT;

  return (
    <div ref={sectionRef} id={section.id || "capabilities"} className="w-full scroll-mt-24">
      <div className="max-w-3xl mb-12">
        {section.title && (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-[#080357] mb-6"
            >
              {section.title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "3rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-1.5 bg-[#B7F36B] mb-8 rounded-full" 
            />
          </>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {visibleItems.map((item, idx) => {
          const title = (item.title || item.description || "").replace(/\(Target:.*?\)/, "").trim();
          const desc = item.title && item.description && item.description.trim() !== item.title.trim() ? item.description.trim() : "";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: (idx % 8) * 0.04 }}
              className="flex items-start gap-4 group"
            >
              <div className="mt-1 w-6 h-6 rounded-full bg-[#B7F36B]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B7F36B] transition-colors">
                <CheckCircle2 size={14} className="text-[#080357]" />
              </div>
              <div className="flex-grow">
                <p className="text-gray-700 leading-relaxed font-medium group-hover:text-[#080357] transition-colors">
                  {title}
                </p>
                {desc && (
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed font-light">
                    {desc}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {hasMore && !isExpanded && (
        <div className="mt-10 flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => setIsExpanded(true)}
            type="button"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#080357] px-7 py-3.5 text-xs md:text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#052440] hover:scale-105 active:scale-95 transition-all"
          >
            <span>Know More ({remainingCount} more)</span>
            <ChevronDown size={16} className="text-[#B7F36B] transition-transform group-hover:translate-y-0.5" />
          </button>
          <span className="text-xs text-gray-500 font-medium">
            Showing {PREVIEW_LIMIT} of {rawItems.length} capabilities
          </span>
        </div>
      )}

      {isExpanded && rawItems.length > PREVIEW_LIMIT && (
        <div className="mt-10 flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => {
              setIsExpanded(false);
              sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            type="button"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white border border-[#080357]/20 px-7 py-3.5 text-xs md:text-sm font-bold uppercase tracking-wider text-[#080357] shadow-sm hover:bg-[#f7f9fc] hover:border-[#080357]/40 active:scale-95 transition-all"
          >
            <span>Show Less</span>
            <ChevronUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
          <span className="text-xs text-gray-500 font-medium">
            All {rawItems.length} capabilities displayed
          </span>
        </div>
      )}

      {(section.outro || section.footer) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 max-w-4xl"
        >
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
            {section.outro || section.footer}
          </p>
        </motion.div>
      )}
    </div>
  );
}

// ==========================================
// 3.5 Checklist Section (For items with no descriptions)
// ==========================================
function ChecklistSection({ section }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);
  const items = section.items || [];
  const PREVIEW_LIMIT = 10;
  const hasMore = items.length > PREVIEW_LIMIT;
  const visibleItems = isExpanded ? items : items.slice(0, PREVIEW_LIMIT);

  return (
    <div ref={sectionRef} className="w-full scroll-mt-24">
      <div className="max-w-3xl mb-12">
        {section.title && (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-[#080357] mb-6"
            >
              {section.title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "3rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-1.5 bg-[#B7F36B] mb-8 rounded-full" 
            />
          </>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {visibleItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: (idx % 10) * 0.04 }}
            className="flex items-start gap-4 group"
          >
            <div className="mt-1 w-6 h-6 rounded-full bg-[#B7F36B]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B7F36B] transition-colors">
              <CheckCircle2 size={14} className="text-[#080357]" />
            </div>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-[#080357] transition-colors">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>

      {hasMore && !isExpanded && (
        <div className="mt-10 flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => setIsExpanded(true)}
            type="button"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#080357] px-7 py-3 text-xs md:text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#052440] hover:scale-105 transition-all"
          >
            <span>Learn More ({items.length - PREVIEW_LIMIT} more)</span>
            <ChevronDown size={16} className="text-[#B7F36B]" />
          </button>
        </div>
      )}

      {isExpanded && items.length > PREVIEW_LIMIT && (
        <div className="mt-10 flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => {
              setIsExpanded(false);
              sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            type="button"
            className="inline-flex items-center gap-2.5 rounded-full bg-white border border-[#080357]/20 px-7 py-3 text-xs md:text-sm font-bold uppercase tracking-wider text-[#080357] shadow-sm hover:bg-[#f7f9fc] transition-all"
          >
            <span>Show Less</span>
            <ChevronUp size={16} />
          </button>
        </div>
      )}

      {(section.outro || section.footer) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 max-w-4xl"
        >
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
            {section.outro || section.footer}
          </p>
        </motion.div>
      )}
    </div>
  );
}

// ==========================================
// 3.6 Deliverables Section
// ==========================================
function DeliverablesSection({ section }) {
  const groups = [];
  
  if (section.groups && Array.isArray(section.groups)) {
    groups.push(...section.groups);
  } else if (section.items && section.items.some(item => item.category && Array.isArray(item.deliverables))) {
    section.items.forEach(item => {
      if (item.category) {
        groups.push({
          category: item.category,
          deliverables: Array.isArray(item.deliverables) ? item.deliverables : []
        });
      }
    });
  } else {
    let currentGroup = null;
    section.items.forEach(item => {
      if (item.category && item.deliverables) {
        groups.push(item);
        return;
      }

      const title = (item.title || "").trim();
      if (!title) return;

      const isKnownCategory = [
        "Executive Deliverables",
        "Assessment & Analysis",
        "Architecture & Technology",
        "Governance & Cost",
        "Roadmap & Implementation"
      ].some(cat => title.toLowerCase() === cat.toLowerCase());

      const isCategory = isKnownCategory || (
        title.split(' ').length <= 3 && 
        !title.includes('Document') && 
        !title.includes('Framework') && 
        !title.includes('Matrix') && 
        !title.includes('Scorecard') && 
        !title.includes('Assessment') && 
        !title.includes('Register') && 
        !title.includes('Plan') && 
        !title.includes('Report') && 
        !title.includes('Summary') &&
        !title.includes('Roadmap') &&
        !title.includes('Presentation') &&
        !title.includes('Review') &&
        !title.includes('Analysis') &&
        !title.includes('Recommendations') &&
        !title.includes('Options')
      );
      
      if (isCategory) {
        currentGroup = { category: title, deliverables: [] };
        groups.push(currentGroup);
      } else {
        if (currentGroup) {
          currentGroup.deliverables.push(title);
        } else {
          currentGroup = { category: title, deliverables: [] };
          groups.push(currentGroup);
        }
      }
    });
  }

  // Filter out empty groups that were just single items matching isCategory (e.g., if parsing failed)
  const hasDeliverables = groups.some(g => g.deliverables && g.deliverables.length > 0);

  return (
    <div className="w-full">
      <div className="max-w-3xl mb-12">
        {section.title && (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-[#080357] mb-6"
            >
              {section.title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "3rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-1.5 bg-[#B7F36B] mb-8 rounded-full" 
            />
          </>
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

      {!hasDeliverables ? (
        // Fallback to simple grid if grouping failed
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.items.map((item, idx) => (
            <motion.div key={idx} className="clay-light bg-white border border-[#080357]/5 p-6 rounded-2xl flex items-center gap-3 shadow-sm hover:border-[#B7F36B] hover:-translate-y-1 transition-all duration-300">
              <CheckCircle2 size={20} className="text-[#B7F36B] flex-shrink-0" />
              <span className="text-[#080357] font-semibold">{item.title}</span>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.filter(g => g.category || g.deliverables.length > 0).map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="clay-light bg-white border border-[#080357]/10 p-8 rounded-3xl hover:border-[#B7F36B]/50 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#080357] mb-6 flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-[#B7F36B]/20 flex items-center justify-center text-[#080357]">
                    <Layers size={16} />
                 </div>
                 {group.category}
              </h3>
              <ul className="space-y-4">
                {group.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#B7F36B] mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-medium leading-relaxed text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      )}
      {(section.outro || section.footer) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 max-w-4xl"
        >
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
            {section.outro || section.footer}
          </p>
        </motion.div>
      )}
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
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-[#080357] mb-6"
            >
              {section.title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "3rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-1.5 bg-[#B7F36B] mb-8 rounded-full" 
            />
          </>
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
            className="group bg-white clay-light border border-[#080357]/5 rounded-[2rem] p-8 cursor-pointer shadow-sm hover:shadow-xl hover:border-[#B7F36B]/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B7F36B]/10 rounded-full blur-3xl -z-10 group-hover:bg-[#B7F36B]/20 transition-all duration-300" />
            <div className="w-12 h-12 bg-[#f7f9fc] rounded-xl flex items-center justify-center mb-6 text-[#080357] group-hover:bg-[#B7F36B]/20 group-hover:text-[#080357] transition-colors">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#080357] mb-4 group-hover:text-[#052440] transition-colors">
              {(item.title || "").replace(/\(Target:.*?\)/, "").trim()}
            </h3>
            <div className="text-gray-600 font-light leading-relaxed">
              {renderFormattedDescription(item.description)}
            </div>
          </motion.div>
        ))}
      </div>
      {(section.outro || section.footer) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 max-w-4xl"
        >
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
            {section.outro || section.footer}
          </p>
        </motion.div>
      )}
    </div>
  );
}

// ==========================================
// 5. Redesigned What Are Section (Enterprise Architecture & Scope with Claymorphism)
// ==========================================
function WhatAreSection({ section, service }) {
  const defaultPillars = [
    { title: "SLA-Guaranteed", subtitle: "99.99% Uptime", icon: "shield", color: "blue" },
    { title: "24/7 Telemetry", subtitle: "Observability", icon: "activity", color: "emerald" },
    { title: "Vendor Agnostic", subtitle: "Zero Lock-in", icon: "layers", color: "purple" }
  ];

  const defaultFeatures = [
    { title: "Continuous Lifecycle Governance", subtitle: "Provisioning & optimization", tag: "Active", icon: "server", color: "navy" },
    { title: "Automated Incident Response", subtitle: "< 4 min MTTR & triage", tag: "< 4m", icon: "zap", color: "blue" },
    { title: "Zero-Trust Compliance", subtitle: "SOC 2 & ISO 27001 enforced", tag: "Enforced", icon: "shield", color: "emerald" }
  ];

  const pillars = section.pillars && section.pillars.length > 0 ? section.pillars : defaultPillars;
  const features = section.features && section.features.length > 0 ? section.features : defaultFeatures;
  const consoleTitle = section.consoleTitle || "weroute-scope-manifest";
  const consoleTag = section.consoleTag || "v2.4";

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case "code": return <Code2 size={16} />;
      case "activity": return <Activity size={16} />;
      case "layers": return <Layers size={16} />;
      case "zap": return <Zap size={16} />;
      case "server": return <Server size={16} />;
      default: return <ShieldCheck size={16} />;
    }
  };

  const getPillarColors = (color) => {
    switch (color) {
      case "emerald": return "bg-emerald-50 text-emerald-600";
      case "purple": return "bg-purple-50 text-purple-600";
      default: return "bg-blue-50 text-blue-600";
    }
  };

  const getFeatureIcon = (iconName, color) => {
    let bgClass = "bg-[#080357] text-[#B7F36B]";
    if (color === "blue") bgClass = "bg-blue-600 text-white";
    if (color === "emerald") bgClass = "bg-emerald-600 text-white";
    if (color === "purple") bgClass = "bg-purple-600 text-white";

    let iconComp = <Server size={18} />;
    if (iconName === "zap") iconComp = <Zap size={18} />;
    if (iconName === "shield") iconComp = <ShieldCheck size={18} />;
    if (iconName === "code") iconComp = <Code2 size={18} />;

    return (
      <div className={`w-10 h-10 rounded-xl ${bgClass} flex items-center justify-center flex-shrink-0 shadow-sm`}>
        {iconComp}
      </div>
    );
  };

  const isStaffing = consoleTitle === "weroute-staffing-talent-mesh.manifest";
  const isNetworkStaffing = consoleTitle === "weroute-network-talent-mesh.manifest";
  const isCybersecurityStaffing = consoleTitle === "weroute-cybersecurity-talent-mesh.manifest";
  const isCloudDevOpsStaffing = consoleTitle === "weroute-cloud-devops-talent.manifest";
  const isSoftwareStaffing = consoleTitle === "weroute-software-talent-mesh.manifest";
  const isAiStaffing = consoleTitle === "weroute-ai-talent-mesh.manifest";
  const isConsulting = 
    consoleTitle === "weroute-consulting-advisory.manifest" || 
    service?.id === "enterprise-technology-consulting-and-advisory" ||
    (section?.title && section.title.toLowerCase().includes("technology consulting & advisory"));
  const isItStrategy =
    consoleTitle === "weroute-it-strategy-optimization.manifest" ||
    service?.id === "it-strategy-and-optimization" ||
    (section?.title && section.title.toLowerCase().includes("it strategy & optimization"));
  const isNetworkSecurityAssessments =
    consoleTitle === "weroute-network-security-assessments.manifest" ||
    service?.id === "network-and-security-assessments" ||
    (section?.title && section.title.toLowerCase().includes("network & security assessment"));
  const isCloudReadiness =
    consoleTitle === "weroute-cloud-readiness.manifest" ||
    service?.id === "cloud-readiness-and-migration-strategy" ||
    (section?.title && section.title.toLowerCase().includes("cloud readiness"));
  const isAiAutomationAdvisory =
    consoleTitle === "weroute-ai-automation-advisory.manifest" ||
    service?.id === "ai-and-automation-advisory" ||
    (section?.title && section.title.toLowerCase().includes("ai & automation advisory"));
  const isProfessionalServices =
    consoleTitle === "weroute-professional-services.manifest" ||
    service?.id === "enterprise-professional-services" ||
    (section?.title && section.title.toLowerCase().includes("enterprise professional services"));
  const isNetworkIntegration =
    consoleTitle === "weroute-network-integration.manifest" ||
    service?.id === "network-integration-and-modernization" ||
    (section?.title && section.title.toLowerCase().includes("network integration services"));
  const isSoftwareAiDevelopment =
    consoleTitle === "weroute-software-ai-mesh.manifest" ||
    service?.id === "software-ai-development" ||
    (section?.title && section.title.toLowerCase().includes("software & ai development"));
  const isEnterpriseApiIntegration =
    consoleTitle === "weroute-api-mesh.manifest" ||
    service?.id === "enterprise-api-development-and-integration-services" ||
    (section?.title && section.title.toLowerCase().includes("enterprise api & integration"));
  const isMobileAppDevelopment =
    consoleTitle === "weroute-mobile-platform.manifest" ||
    service?.id === "mobile-application-development" ||
    service?.id === "enterprise-mobile-application-development-services" ||
    (section?.title && section.title.toLowerCase().includes("mobile application development"));
  const isEnterpriseAiMlDevelopment =
    consoleTitle === "weroute-ai-platform.manifest" ||
    service?.id === "ai-ml-development-services" ||
    (section?.title && section.title.toLowerCase().includes("ai & machine learning development"));
  const hasCustomDiagram = isStaffing || isNetworkStaffing || isCybersecurityStaffing || isCloudDevOpsStaffing || isSoftwareStaffing || isAiStaffing || isConsulting || isItStrategy || isNetworkSecurityAssessments || isCloudReadiness || isAiAutomationAdvisory || isProfessionalServices || isNetworkIntegration || isSoftwareAiDevelopment || isEnterpriseApiIntegration || isMobileAppDevelopment || isEnterpriseAiMlDevelopment;

  return (
    <div className="w-full clay-light bg-white rounded-[3rem] p-8 sm:p-12 md:p-16 border border-[#080357]/5 overflow-hidden relative shadow-[0_20px_50px_rgba(8,3,87,0.04)]">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-gradient-to-bl from-blue-50/70 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-[#B7F36B]/15 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {hasCustomDiagram ? (
        <div className="flex flex-col gap-10 relative z-10">
          {/* Scope & Definition Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <div className="clay-badge-light inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#080357] mb-6 border border-[#080357]/5">
              <Workflow size={13} className="text-[#080357]" />
              <span>Service Scope &amp; Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#080357] mb-6 tracking-tight leading-[1.12]">
              {section.title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
              {section.intro}
            </p>
          </motion.div>

          {/* Exact Architecture Diagram as requested */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8 border-t border-[#080357]/10 w-full"
          >
            {isEnterpriseAiMlDevelopment ? (
              <EnterpriseAiPlatformDiagram />
            ) : isMobileAppDevelopment ? (
              <GovernedMobilePlatformDiagram />
            ) : isEnterpriseApiIntegration ? (
              <GovernedApiLayerDiagram />
            ) : isSoftwareAiDevelopment ? (
              <SoftwareAiPlatformDiagram />
            ) : isNetworkIntegration ? (
              <EnterpriseNetworkArchitectureDiagram />
            ) : isProfessionalServices ? (
              <ObservabilityPlatformDiagram />
            ) : isAiAutomationAdvisory ? (
              <AiAutomationAdvisoryDiagram />
            ) : isCloudReadiness ? (
              <CloudReadinessAssessmentDiagram />
            ) : isNetworkSecurityAssessments ? (
              <NetworkSecurityAssessmentDiagram />
            ) : isItStrategy ? (
              <ConsultingAdvisoryDiagram
                rootTitle="Business Priorities"
                items={[
                  { id: "technology-assessment", label: "Technology Assessment" },
                  { id: "rationalization", label: "Rationalization" },
                  { id: "governance", label: "Governance" },
                  { id: "investment-prioritization", label: "Investment Prioritization" },
                  { id: "modernization-roadmap", label: "Modernization Roadmap" },
                ]}
              />
            ) : isConsulting ? (
              <ConsultingAdvisoryDiagram />
            ) : isAiStaffing ? (
              <AiStaffingArchitectureDiagram />
            ) : isSoftwareStaffing ? (
              <SoftwareStaffingArchitectureDiagram />
            ) : isCloudDevOpsStaffing ? (
              <CloudDevOpsStaffingArchitectureDiagram />
            ) : isCybersecurityStaffing ? (
              <CybersecurityStaffingArchitectureDiagram />
            ) : isNetworkStaffing ? (
              <NetworkStaffingArchitectureDiagram />
            ) : (
              <StaffingArchitectureDiagram />
            )}
          </motion.div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Column: Scope & Definition Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="clay-badge-light inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#080357] mb-6 border border-[#080357]/5">
              <Workflow size={13} className="text-[#080357]" />
              <span>Service Scope &amp; Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#080357] mb-6 tracking-tight leading-[1.12]">
              {section.title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-8">
              {section.intro}
            </p>

            {/* 3 Claymorphic Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full pt-4 border-t border-[#080357]/10">
              {pillars.map((pillar, pIdx) => (
                <div key={pIdx} className="clay-soft-light flex items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#080357]/5">
                  <div className={`w-8 h-8 rounded-xl ${getPillarColors(pillar.color)} flex items-center justify-center flex-shrink-0`}>
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#080357] truncate">{pillar.title}</p>
                    <p className="text-[10px] text-slate-500 truncate">{pillar.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Architecture Console Card with Claymorphism */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 20 }} 
            whileInView={{ opacity: 1, scale: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="clay-light w-full max-w-md rounded-[2.5rem] bg-white border border-[#080357]/5 overflow-hidden">
              
              {/* macOS Titlebar */}
              <div className="px-5 py-3.5 bg-[#f7f8fc]/80 border-b border-[#080357]/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-slate-500">
                  {consoleTitle}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Console Body */}
              <div className="p-6 space-y-3.5 bg-white">
                {features.map((feat, fIdx) => (
                  <div key={fIdx} className="clay-soft-light p-3.5 rounded-2xl bg-[#fafbff] border border-[#080357]/5 flex items-center justify-between hover:bg-white transition-all group">
                    <div className="flex items-center gap-3">
                      {getFeatureIcon(feat.icon, feat.color)}
                      <div>
                        <p className="text-xs font-bold text-[#080357] group-hover:text-blue-900 transition-colors">
                          {feat.title}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {feat.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                      {feat.tag}
                    </span>
                  </div>
                ))}

                {/* Bottom Quick Callout */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-medium border-t border-[#080357]/5">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <CheckCircle2 size={13} />
                    Enterprise-Grade Delivery
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">
                    {consoleTag}
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      )}
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
            <Briefcase size={14} className="text-[#080357]" /> Portfolio
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
            const isRoles = cleanDesc.includes("Example Roles:");
            const isChallenges = cleanDesc.includes("Business Challenges:");

            if (cleanDesc.includes("Business Challenges:") && (cleanDesc.includes("Core Capabilities:") || cleanDesc.includes("Example Roles:"))) {
              const parts = cleanDesc.split(/Business Challenges:|Core Capabilities:|Example Roles:/);
              cleanDesc = parts[0].trim();
              challenges = parts[1].trim();
              capabilities = parts[2].trim();
            } else if (cleanDesc.includes("Common triggers:") && cleanDesc.includes("Core deliverables:")) {
              const parts = cleanDesc.split(/Common triggers:|Core deliverables:/);
              cleanDesc = parts[0].trim();
              challenges = parts[1].trim();
              capabilities = parts[2].trim();
            }

            // Extract title carefully so we don't end up with an empty string
            let displayTitle = (item.title || "").replace(/\(Target:.*?\)/, "").trim();
            if (!displayTitle) {
              const match = (item.title || "").match(/\(Target:\s*(.*?)\)/);
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
                        <p className="text-lg leading-relaxed font-light text-white/90 max-w-3xl mb-8">
                          {cleanDesc}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {challenges && (
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                               <div className="flex items-center gap-3 mb-3">
                                  <div className="w-8 h-8 rounded-full bg-[#B7F36B]/20 flex items-center justify-center">
                                     <div className="w-2 h-2 rounded-full bg-[#B7F36B]" />
                                  </div>
                                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#B7F36B]">
                                    {isChallenges ? "Business Challenges" : "Common Triggers"}
                                  </h4>
                               </div>
                               <p className="text-white/80 font-light text-sm leading-relaxed">{challenges}</p>
                            </div>
                          )}
                          {capabilities && (
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                               <div className="flex items-center gap-3 mb-3">
                                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                     <CheckCircle2 size={16} className="text-white" />
                                  </div>
                                  <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                                    {isRoles ? "Example Roles" : "Core Capabilities"}
                                  </h4>
                               </div>
                               <p className="text-white/80 font-light text-sm leading-relaxed">{capabilities}</p>
                            </div>
                          )}
                        </div>

                        {item.link && (
                          <div className="mt-8">
                            <Link
                              href={item.link}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 rounded-full bg-[#B7F36B] px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#080357] transition-all hover:bg-white hover:shadow-lg"
                            >
                              <span>Explore {displayTitle}</span>
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        )}
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
  const getIndustryIcon = (name) => {
    const n = (name || "").toLowerCase();
    if (n.includes("finan") || n.includes("bank")) return <Building2 size={32} />;
    if (n.includes("health") || n.includes("life")) return <HeartPulse size={32} />;
    if (n.includes("manufac") || n.includes("indust")) return <Factory size={32} />;
    if (n.includes("retail") || n.includes("commerce")) return <Store size={32} />;
    if (n.includes("telecom")) return <Antenna size={32} />;
    if (n.includes("gov") || n.includes("public")) return <Landmark size={32} />;
    if (n.includes("edu")) return <GraduationCap size={32} />;
    if (n.includes("tech") || n.includes("saas")) return <Cpu size={32} />;
    if (n.includes("logist") || n.includes("supply")) return <Truck size={32} />;
    if (n.includes("energy") || n.includes("util")) return <Zap size={32} />;
    return <Briefcase size={32} />;
  };

  const extractIndustries = () => {
    const rawText = section.items.map(item => `${item.title || ""} ${item.description}`).join(" ");
    
    // Ignore internal links or related services text
    if (rawText.includes("INTERNAL LINKS") || rawText.includes("RELATED") || section.items.length === 0) {
      return [
        { name: "Financial Services", icon: <Building2 size={32} /> },
        { name: "Manufacturing", icon: <Factory size={32} /> },
        { name: "Healthcare & Life Sciences", icon: <HeartPulse size={32} /> },
        { name: "Retail & E-Commerce", icon: <Store size={32} /> },
        { name: "Telecommunications", icon: <Antenna size={32} /> },
        { name: "Government & Public Sector", icon: <Landmark size={32} /> },
        { name: "Education & EdTech", icon: <GraduationCap size={32} /> },
        { name: "Technology & SaaS", icon: <Cpu size={32} /> },
        { name: "Logistics & Supply Chain", icon: <Truck size={32} /> },
        { name: "Energy & Utilities", icon: <Zap size={32} /> },
      ];
    }
    
    return section.items.map(item => ({
      name: item.title,
      icon: getIndustryIcon(item.title)
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
        relative inline-flex items-center justify-center gap-2.5
        overflow-hidden rounded-full border border-[#080357]/5 bg-[#B7F36B] px-7 py-3.5
        text-sm md:text-[15px] font-bold tracking-tight text-[#080357] shadow-[0_8px_25px_rgba(183,243,107,0.35)]
        transition-colors duration-300 hover:bg-[#f7f9fc] active:scale-95
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

  // Prevent consecutive carousels to improve UX
  let previousLayoutType = null;
  const renderSection = (section, index, totalSections) => {
    const isFirst = index === 0;
    const isDeliver = (section.title || "").toLowerCase().includes("what we deliver");
    const isProcess = (section.title || "").toLowerCase().includes("delivery approach") || (section.title || "").toLowerCase().includes("process") || (section.title || "").toLowerCase().includes("approach");
    const isPortfolio = (section.title || "").toLowerCase().includes("portfolio");
    const isIndustries = (section.title || "").toLowerCase().includes("industries");
    const isCapabilities = (section.title || "").toLowerCase().includes("capabilit") || (section.id || "").toLowerCase().includes("capabilit");
    const isChecklist = section.items && section.items.length > 5 && section.items.every(item => !item.description || item.description.trim() === "");
    const isDeliverables = (section.title || "").toLowerCase().includes("deliverables");
    const isWhatAre = (section.title || "").toLowerCase().includes("what are");

    // Deliverables section must be checked before empty items fallback
    if (isDeliverables) {
      previousLayoutType = "deliverables";
      return <DeliverablesSection key={section.id} section={section} />;
    }

    // Dedicated Redesigned Capabilities Section with "Know More" Toggle
    if (isCapabilities) {
      previousLayoutType = "capabilities";
      return <CapabilitiesSection key={section.id} section={section} />;
    }

    if (isWhatAre || !section.items || section.items.length === 0) {
      previousLayoutType = "what-are";
      return <WhatAreSection key={section.id} section={section} service={service} />;
    }
    
    if (isPortfolio) {
      previousLayoutType = "portfolio";
      return <PortfolioSection key={section.id} section={section} />;
    }
    
    if (isChecklist) {
      previousLayoutType = "checklist";
      return <ChecklistSection key={section.id} section={section} />;
    }
    
    if (isIndustries) {
      previousLayoutType = "industries";
      return <IndustriesSection key={section.id} section={section} />;
    }
    
    // Explicit override for "What We Deliver"
    if (isDeliver) {
      previousLayoutType = "deliver";
      const isTechSelection = service?.id === "technology-selection-and-roadmaps";
      return (
        <React.Fragment key={section.id}>
          <WhatWeDeliverSection section={section} />
          {isTechSelection && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full my-12"
            >
              <WeightedEvaluationFrameworkDiagram />
            </motion.div>
          )}
        </React.Fragment>
      );
    }

    if (isProcess) {
      previousLayoutType = "process";
      const isCloudDevOps = service?.id === "cloud-and-devops-implementation";
      const isIacAutomation = service?.id === "infrastructure-automation-and-standardization";
      return (
        <React.Fragment key={section.id}>
          <ProcessSection section={section} />
          {isCloudDevOps && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full my-12"
            >
              <CloudDevOpsLifecycleDiagram />
            </motion.div>
          )}
          {isIacAutomation && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full my-12"
            >
              <IacDeliveryLifecycleDiagram />
            </motion.div>
          )}
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

  // --- Data Cleaning for Internal Links & FAQ ---
  const cleanedSections = [];
  const relatedLinks = [];
  let extractedFaq = service.faq && service.faq.length > 0 ? service.faq : null;

  service.sections.forEach(section => {
    const isFaqSection = section.title && (
      section.title.trim().toLowerCase() === "faq" ||
      section.title.toLowerCase().includes("frequently asked questions")
    );

    if (isFaqSection) {
      if (!extractedFaq && section.items && section.items.length > 0) {
        extractedFaq = section.items.map(i => ({
          question: i.title || i.question,
          answer: i.description || i.answer
        }));
      }
      return; // Do NOT push to cleanedSections so it doesn't render twice!
    }

    const newSection = { ...section, items: section.items ? [...section.items] : [] };
    if (newSection.items.length > 0) {
      const linkItems = newSection.items.filter(item => 
        item.title && (item.title.toUpperCase().includes("RELATED") || item.title.toUpperCase().includes("INTERNAL LINKS"))
      );
      
      linkItems.forEach(item => {
        const parts = item.description.split("|").map(s => s.trim()).filter(Boolean);
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          if (part.startsWith("/")) {
            const label = (i > 0 && !parts[i - 1].startsWith("/"))
              ? parts[i - 1]
              : part.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/ Services$/i, '');
            if (!relatedLinks.find(r => r.href === part)) {
              relatedLinks.push({ label, href: part });
            }
          }
        }
      });

      newSection.items = newSection.items.filter(item => 
        !(item.title && (item.title.toUpperCase().includes("RELATED") || item.title.toUpperCase().includes("INTERNAL LINKS")))
      );
    }
    // Only push the section if it's not the internal links section itself
    if (!(newSection.title && newSection.title.toUpperCase().includes("INTERNAL LINKS"))) {
        cleanedSections.push(newSection);
    }
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
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <Link
                href={service.hero?.ctaHref || "#contact"}
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#080357] px-6 py-3 text-sm md:text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#B7F36B] hover:text-[#080357] hover:shadow-[0_8px_25px_rgba(183,243,107,0.35)] hover:-translate-y-0.5 active:scale-95 shadow-md shadow-[#080357]/15"
              >
                <span className="leading-snug">{service.hero?.ctaText || "Get Started"}</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#080357]/15 flex-shrink-0">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </div>
              </Link>
              {service.hero?.secondaryCtaText && (
                <Link
                  href={service.hero?.secondaryCtaHref || "#section-5"}
                  className="inline-flex items-center justify-center rounded-full border border-[#080357]/15 bg-white px-5 py-3 text-sm font-semibold text-[#080357] hover:bg-[#f7f9fc] hover:border-[#080357]/30 transition-all duration-300 clay-badge-light shadow-xs active:scale-95"
                >
                  <span>{service.hero.secondaryCtaText}</span>
                </Link>
              )}
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
                  <SafeDotLottie
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
                   <ShieldCheck size={14} className="text-[#080357]" /> Our Commitment
                </div>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light mb-8">{service.geoStatement}</p>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#080357] px-6 py-3 text-sm md:text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#B7F36B] hover:text-[#080357] hover:shadow-[0_8px_25px_rgba(183,243,107,0.35)] hover:-translate-y-0.5 active:scale-95 shadow-md shadow-[#080357]/15"
                >
                  <span>Talk to an Expert</span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#080357]/15 flex-shrink-0">
                    <ArrowRight size={14} strokeWidth={2.5} />
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
                  &quot;{service.pagePhilosophy}&quot;
                </h2>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* 3. Dynamic Sections Map */}
      <div className="mt-32 space-y-32">
        {cleanedSections
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
                  <SafeDotLottie
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

      {/* 5. FAQ Section (Section 9) - Standardized WeRoute Claymorphic Design */}
      {extractedFaq && extractedFaq.length > 0 && (
        <FAQSection
          data={extractedFaq}
          badge="Support & Clarity"
          title="Frequently Asked Questions"
          subtitle="Find clarity on how our staffing models, engagement process, and technical services are structured and delivered."
          className="mt-16 rounded-[3rem] border border-[#080357]/5"
        />
      )}

      </div>
    </>
  );
}
