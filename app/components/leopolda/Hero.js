"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Cloud
} from "lucide-react";
import Link from "next/link";

export default function HeroLeopolda() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-[960px] flex flex-col justify-between overflow-hidden bg-[#241758] text-white pt-24 lg:pt-[90px] pb-5 px-6 sm:px-8 lg:px-12 selection:bg-[#B7F36B] selection:text-[#080357]">
      
      {/* ─── Ambient Background Glows & Gradients ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep rich indigo/purple backdrop radial gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 90% 70% at 75% 40%, #3d238c 0%, #241758 55%, #180f3d 100%)"
          }}
        />

        {/* Soft cyan & green atmospheric lighting highlights */}
        <div className="absolute top-[15%] right-[15%] w-[450px] h-[450px] rounded-full bg-blue-500/15 blur-[100px] transform-gpu" />
        <div className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#B7F36B]/10 blur-[100px] transform-gpu" />
        <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-indigo-500/10 blur-[90px] transform-gpu" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex-1 flex flex-col justify-center">

        {/* ─── Top News / Announcement Pill ─── */}
        <div className="flex justify-center lg:justify-start mb-4 lg:mb-6">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link 
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-xl border border-white/20 transition-all duration-300 shadow-md shadow-black/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7F36B] shadow-[0_0_8px_#B7F36B] shrink-0 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-white/90">
                Enterprise Technology Consulting, Engineering, and Operations
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#B7F36B] group-hover:translate-x-0.5 transition-transform">
                <span>EXPLORE</span>
                <ArrowRight size={11} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ─── Main Two-Column Hero Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* ════════════════════════════════════════════════════ */}
          {/* LEFT COLUMN: Bold Typography & Sleek CTA Buttons    */}
          {/* ════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-20">

            {/* Headline with Strong Visual Anchor & Cadence */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.35rem,4.1vw,3.75rem)] font-extrabold text-white tracking-[-0.035em] leading-[1.12] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Engineering the Next Generation of{" "}
              <span className="bg-gradient-to-r from-white via-[#B7F36B] to-[#9ee24e] bg-clip-text text-transparent">
                Enterprise Technology
              </span>
            </motion.h1>

            {/* Subtitle / Narrative with Clear Hierarchical Contrast */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl mb-8 space-y-3"
            >
              <p
                className="text-base sm:text-[17px] text-white/80 font-normal leading-[1.7]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                WeRoute helps enterprises design, modernize, secure, integrate, and operate technology across networking, cloud, cybersecurity, AI, software, and automation.
              </p>
              <p
                className="text-sm sm:text-[15px] text-white/60 font-normal leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                One team takes the work from architecture through production, so strategy and delivery never sit with different vendors.
              </p>
            </motion.div>

            {/* ─── Two Sleek CTA Buttons ─── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-5"
            >
              <Link
                href="#contact"
                className="group px-7 py-3.5 rounded-full bg-white hover:bg-[#B7F36B] text-[#080357] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-black/20"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#solutions"
                className="px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-xl border border-white/20 hover:border-white/35 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
              >
                <span>Explore Solutions</span>
              </Link>
            </motion.div>

            {/* Micro-Copy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[10px] tracking-[0.16em] uppercase font-bold text-white/40 font-body"
            >
              FROM STRATEGY TO PRODUCTION WITH ONE TECHNOLOGY PARTNER
            </motion.p>

          </div>

          {/* ════════════════════════════════════════════════════ */}
          {/* RIGHT COLUMN: 3D Isometric Frosted Glass Windows    */}
          {/* ════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center perspective-[1200px] py-4 lg:py-0">

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: -18, rotateX: 12 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[480px] [transform-style:preserve-3d]"
            >

              {/* ─── BACK LAYER CARD: Analytics & Health Metrics ─── */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-2 sm:-right-4 w-[84%] rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.3)] [transform:translateZ(-50px)] transform-gpu will-change-transform"
              >
                {/* Window Traffic Lights */}
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                </div>

                {/* Performance Metric Header */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[9px] text-white/50 font-bold uppercase tracking-wider">Multi-Cloud Uptime</p>
                    <p className="text-lg font-extrabold text-white">99.9%</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-[#B7F36B] text-[11px] font-bold border border-emerald-500/30">
                    <TrendingUp size={11} />
                    <span>+12.11%</span>
                  </div>
                </div>

                {/* Frosted Bar Chart */}
                <div className="h-20 flex items-end justify-between gap-2.5 pt-2 px-2 bg-white/[0.03] rounded-xl border border-white/5">
                  {[
                    { h: "45%", active: false, label: "Legacy" },
                    { h: "60%", active: false, label: "Hybrid" },
                    { h: "75%", active: false, label: "Cloud" },
                    { h: "95%", active: true, label: "WeRoute" },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div
                        className={`w-full rounded-t transition-all ${
                          bar.active 
                            ? "bg-gradient-to-t from-blue-500 to-[#B7F36B] shadow-[0_0_15px_rgba(183,243,107,0.35)]" 
                            : "bg-white/20"
                        }`}
                        style={{ height: bar.h }}
                      />
                      <span className="text-[8px] text-white/40 font-mono">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ─── FRONT LAYER CARD: Interactive Architecture Hub ─── */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="relative z-20 w-[88%] rounded-2xl bg-white/[0.12] backdrop-blur-3xl border border-white/30 p-4 sm:p-5 shadow-[0_35px_80px_rgba(0,0,0,0.45)] [transform:translateZ(35px)] transform-gpu will-change-transform"
              >
                {/* Window Traffic Lights */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">
                    weroute-mesh-v2
                  </span>
                </div>

                {/* Sub-card 1: Active Infrastructure Node */}
                <div className="mb-2.5 p-2.5 rounded-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      <Cloud size={15} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-white leading-tight">Global SASE Fabric</p>
                      <p className="text-[9px] text-white/60">14 Regions Synced • 14.2ms</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B7F36B] shadow-[0_0_8px_#B7F36B] animate-pulse" />
                </div>

                {/* Sub-card 2: Big Visual Graphic Showcase */}
                <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                  {/* Left Pill Group */}
                  <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-white/[0.06] border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-white/60 uppercase">Security</span>
                      <ShieldCheck size={12} className="text-[#B7F36B]" />
                    </div>
                    <p className="text-xs font-extrabold text-white">Zero-Trust Active</p>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-0.5">
                      <div className="bg-[#B7F36B] h-full w-[94%] rounded-full shadow-[0_0_8px_#B7F36B]" />
                    </div>
                  </div>

                  {/* Right Media/Metric Card */}
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#B7F36B]/20 to-blue-500/20 border border-white/20 flex flex-col justify-between">
                    <span className="text-[9px] font-bold text-white/70 uppercase">FinOps</span>
                    <p className="text-sm font-black text-white">$240K <span className="text-[10px] font-normal text-white/70">saved/yr</span></p>
                    <div className="flex items-center gap-1 text-[8px] font-semibold text-[#B7F36B]">
                      <Zap size={9} />
                      <span>Auto-optimized</span>
                    </div>
                  </div>
                </div>

                {/* Sub-card 3: Action Ribbon */}
                <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-md bg-[#B7F36B]/20 border border-[#B7F36B]/30 flex items-center justify-center text-[#B7F36B]">
                      <Activity size={11} />
                    </div>
                    <span className="text-white/80 font-medium text-[10px]">AI Autonomous Healing</span>
                  </div>
                  <span className="text-[#B7F36B] font-bold text-[10px]">Active</span>
                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* ─── Bottom Logo Cloud / Social Proof ─── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 w-full max-w-[1440px] mx-auto mt-3 lg:mt-5 pt-3 border-t border-white/10 -translate-y-[2px]"
      >
        <p className="text-center text-[11px] sm:text-xs font-semibold text-white/70 mb-2.5 tracking-wide">
          Recognized and trusted by global leaders in enterprise infrastructure.
        </p>

        {/* Enterprise Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 opacity-70 hover:opacity-90 transition-opacity">
          <span className="font-extrabold tracking-widest text-xs sm:text-sm text-white font-mono">
            AWS PARTNER
          </span>
          <span className="font-black tracking-wider text-xs sm:text-sm text-white">
            Microsoft Azure
          </span>
          <span className="font-bold tracking-tight text-xs sm:text-sm text-white">
            CISCO ENTERPRISE
          </span>
          <span className="font-extrabold tracking-widest text-xs sm:text-sm text-white font-mono">
            PALO ALTO
          </span>
          <span className="font-bold tracking-tight text-xs sm:text-sm text-white">
            SPLUNK CLOUD
          </span>
          <span className="font-black tracking-wider text-xs sm:text-sm text-white font-mono">
            OKTA ZERO-TRUST
          </span>
        </div>
      </motion.div>

    </section>
  );
}
