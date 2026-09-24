"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, Wrench, Headphones, BrainCircuit, Users, ArrowUpRight } from 'lucide-react';

export default function TechnologyLifecycle() {
  const lifecycleStages = [
    {
      id: 'consulting-advisory',
      number: '01',
      title: 'Consulting & Advisory',
      subtitle: 'Strategy & Architecture',
      href: '/services/consulting-advisory',
      icon: Briefcase,
      isFullHeight: true,
      pillarHeightClass: 'h-full',
      dashedHeightClass: 'h-0',
    },
    {
      id: 'professional-services',
      number: '02',
      title: 'Professional Services',
      subtitle: 'Deployment & Migration',
      href: '/services/professional-services',
      isFullHeight: false,
      pillarHeightClass: 'h-[74%]',
      dashedHeightClass: 'h-[26%]',
      icon: Wrench,
    },
    {
      id: 'managed-services',
      number: '03',
      title: 'Managed Services',
      subtitle: '24/7 Operations & Support',
      href: '/services/managed-services',
      isFullHeight: false,
      pillarHeightClass: 'h-[86%]',
      dashedHeightClass: 'h-[14%]',
      icon: Headphones,
    },
    {
      id: 'software-ai-development',
      number: '04',
      title: 'Software & AI Development',
      subtitle: 'Engineering & Automation',
      href: '/services/software-ai-development',
      icon: BrainCircuit,
      isFullHeight: true,
      pillarHeightClass: 'h-full',
      dashedHeightClass: 'h-0',
    },
    {
      id: 'staffing',
      number: '05',
      title: 'Manpower & Staffing',
      subtitle: 'Talent Augmentation',
      href: '/services/staffing',
      isFullHeight: false,
      pillarHeightClass: 'h-[60%]',
      dashedHeightClass: 'h-[40%]',
      icon: Users,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              End-to-End Lifecycle
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6 tracking-tight">
              One Partner Across the Full{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                Technology Lifecycle
              </span>
            </h2>
            <p className="text-lg text-[#080357]/80 leading-relaxed font-medium max-w-3xl mx-auto">
              From initial architecture design to 24/7 continuous operations and ongoing optimization, WeRoute provides unbroken accountability across every stage.
            </p>
          </motion.div>
        </div>

        {/* Architectural Lifecycle Diagram - Visible ONLY on Big Screens (Hidden on Mobile) */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2.5rem] bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] p-6 lg:p-8 border border-[#080357]/10 shadow-[0_20px_50px_rgba(8,3,87,0.06)]"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#B7F36B]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#080357]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col">
              
              {/* TOP BAR: WEROUTE */}
              <div className="w-full h-12 lg:h-14 bg-gradient-to-r from-[#030637] via-[#080357] to-[#030637] rounded-xl flex items-center justify-between px-6 shadow-md border border-white/10 relative z-20 overflow-hidden">
                {/* Subtle Ambient Shimmer */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                  className="absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-white/12 to-transparent skew-x-12 pointer-events-none"
                />

                <div className="flex items-center gap-2 relative z-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
                  </span>
                  <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-[#B7F36B] hidden sm:inline">
                    Live Lifecycle Architecture
                  </span>
                </div>

                <div className="font-black text-white text-base lg:text-lg tracking-[0.3em] uppercase drop-shadow-sm select-none relative z-10">
                  WEROUTE
                </div>

                <div className="flex items-center gap-2 relative z-10">
                  <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 hidden lg:inline">
                    Continuous Accountability
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
                </div>
              </div>

              {/* MIDDLE PILLARS CANVAS (Height: 380px) */}
              <div className="relative w-full h-[370px] lg:h-[400px] flex items-stretch gap-3 lg:gap-5 px-1 my-0">
                {lifecycleStages.map((stage, idx) => {
                  const Icon = stage.icon;
                  return (
                    <Link
                      key={stage.id}
                      href={stage.href}
                      className="group flex-1 flex flex-col justify-end h-full relative cursor-pointer"
                    >
                      {/* Dashed Vertical Conduit (for stages not touching the top bar) */}
                      {!stage.isFullHeight && (
                        <div
                          className={`w-full flex flex-col items-center justify-between ${stage.dashedHeightClass} transition-all relative`}
                        >
                          {/* Flowing Live Signal Pulse Packet */}
                          <motion.div
                            className="absolute w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] z-30 pointer-events-none -ml-[1px]"
                            animate={{
                              top: ['0%', '100%'],
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: idx * 0.45,
                            }}
                          />

                          {/* Top Connection Node at WEROUTE Bar */}
                          <div className="w-2.5 h-2.5 rounded-full bg-[#080357] border-2 border-white shadow-sm -mt-1 group-hover:bg-[#10b981] group-hover:scale-125 transition-all duration-300" />
                          
                          {/* Dashed Line */}
                          <div className="w-0 flex-1 border-l-2 border-dashed border-[#080357]/40 group-hover:border-[#10b981] transition-colors duration-300" />
                          
                          {/* Bottom Connection Node touching Pillar Top */}
                          <div className="w-2.5 h-2.5 rounded-full bg-[#080357] border-2 border-white shadow-sm -mb-1 z-20 group-hover:bg-[#10b981] group-hover:scale-125 transition-all duration-300" />
                        </div>
                      )}

                      {/* Main Pillar Body */}
                      <div
                        className={`w-full ${stage.pillarHeightClass} rounded-t-xl rounded-b-none border-2 border-[#080357]/80 bg-gradient-to-b from-white via-[#f8fafc] to-[#eef2f7] 
                                    flex flex-col items-center justify-between p-3 lg:p-4 relative overflow-hidden transition-all duration-300 
                                    group-hover:border-[#080357] group-hover:shadow-[0_12px_28px_rgba(8,3,87,0.14)] group-hover:-translate-y-0.5 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-[#ecfdf5]/40`}
                      >
                        {/* Live scan trace for full-height pillars */}
                        {stage.isFullHeight && (
                          <motion.div
                            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#10b981]/40 to-transparent pointer-events-none z-10"
                            animate={{ top: ['5%', '95%'], opacity: [0, 0.7, 0.7, 0] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.5 }}
                          />
                        )}

                        {/* Top Area: Number Badge with Live Radar Ping */}
                        <div className="w-full flex flex-col items-center pt-1 relative">
                          <div className="relative flex items-center justify-center">
                            {/* Live Radar Ping Ring */}
                            <motion.div
                              animate={{
                                scale: [1, 1.45, 1.45],
                                opacity: [0.65, 0, 0],
                              }}
                              transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: 'easeOut',
                                delay: idx * 0.5,
                              }}
                              className="absolute -inset-1 rounded-full border border-[#10b981]/60 pointer-events-none"
                            />

                            {/* Badge */}
                            <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-full bg-[#080357] text-white font-extrabold text-sm lg:text-base flex items-center justify-center shadow-md border-2 border-white group-hover:bg-[#050849] group-hover:border-[#10b981] group-hover:scale-110 transition-all duration-300 relative z-10">
                              {stage.number}
                            </div>
                          </div>
                        </div>

                        {/* Center Icon & Subtitle Tag */}
                        <div className="w-full flex flex-col items-center gap-2 my-auto text-center px-1">
                          <div className="w-10 h-10 rounded-xl bg-[#080357]/5 flex items-center justify-center text-[#080357] group-hover:bg-[#080357] group-hover:text-[#B7F36B] transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          
                          <span className="text-[11px] lg:text-xs font-semibold text-[#080357]/70 group-hover:text-[#080357] transition-colors leading-tight">
                            {stage.subtitle}
                          </span>

                          {/* Minimal Live Telemetry Waveform */}
                          <div className="flex items-end gap-1 h-3 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                            <motion.span
                              animate={{ height: ['25%', '85%', '35%', '65%'] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.15 }}
                              className="w-1 bg-[#10b981] rounded-full"
                            />
                            <motion.span
                              animate={{ height: ['75%', '30%', '95%', '40%'] }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.25 }}
                              className="w-1 bg-[#080357] rounded-full"
                            />
                            <motion.span
                              animate={{ height: ['35%', '70%', '20%', '80%'] }}
                              transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.1 }}
                              className="w-1 bg-[#10b981] rounded-full"
                            />
                          </div>
                        </div>

                        {/* Bottom Micro Arrow Link */}
                        <div className="w-full flex items-center justify-center pt-1 pb-0.5">
                          <span className="inline-flex items-center gap-1 text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-[#080357]/50 group-hover:text-[#080357] transition-colors">
                            Explore <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* BOTTOM BAR: ENTERPRISE TECHNOLOGY OUTCOMES */}
              <div className="w-full h-12 lg:h-14 bg-gradient-to-r from-[#030637] via-[#080357] to-[#030637] rounded-xl flex items-center justify-center px-6 shadow-md border border-white/10 relative z-20 overflow-hidden">
                {/* Subtle Ambient Shimmer */}
                <motion.div
                  animate={{ x: ['200%', '-100%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2.5 }}
                  className="absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-white/12 to-transparent -skew-x-12 pointer-events-none"
                />

                <div className="font-extrabold text-white text-xs sm:text-sm lg:text-base tracking-[0.22em] uppercase text-center drop-shadow-sm select-none relative z-10">
                  ENTERPRISE TECHNOLOGY OUTCOMES
                </div>
              </div>

              {/* LABELS BELOW BOTTOM BAR */}
              <div className="grid grid-cols-5 gap-3 lg:gap-5 w-full mt-4 px-1">
                {lifecycleStages.map((stage) => (
                  <Link
                    key={stage.id}
                    href={stage.href}
                    className="group/label text-center flex flex-col items-center justify-start p-1"
                  >
                    <span className="font-bold text-[#080357] text-xs lg:text-sm leading-snug group-hover/label:text-[#10b981] transition-colors">
                      {stage.title}
                    </span>
                  </Link>
                ))}
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
