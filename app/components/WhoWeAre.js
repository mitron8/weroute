"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, ShieldCheck } from "lucide-react";

export default function WhoWeAre() {
  return (
    <div className="relative bg-[#f7f9fc]">
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. ABOUT WEROUTE (Clean, Light Background)                    */}
      {/* Pins at the top on desktop so Section 2 slides over it         */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section
        id="who"
        className="relative lg:sticky lg:top-0 z-10 bg-[#f7f9fc] text-[#052440] py-16 lg:py-20 min-h-[auto] lg:min-h-screen flex flex-col justify-center overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <span className="clay-badge-light inline-block border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
                About WeRoute
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#080357] md:text-4xl lg:text-[42px] tracking-tight">
                Technology Built Around{" "}
                <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                  Your Business Goals
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#052440]/75 font-normal">
                WeRoute is an enterprise technology consulting and engineering company. We help organizations design, implement, integrate, secure, and operate modern technology environments, starting from the business objective rather than a product catalog. That means the architecture comes first, the tooling follows, and the same team stays accountable from the first assessment through to day-to-day operations.
              </p>
            </motion.div>

            {/* Right Column: 3 Pillars */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {[
                {
                  n: "01",
                  t: "Consulting-Led, Outcome-Driven",
                  d: "We begin with the business objective before making any technology decisions, so the architecture serves the outcome.",
                },
                {
                  n: "02",
                  t: "Vendor-Agnostic by Design",
                  d: "Architectures are based on enterprise requirements, scalability, security, interoperability, and long-term value, not vendor incentives.",
                },
                {
                  n: "03",
                  t: "End-to-End Accountability",
                  d: "One technology partner across advisory, design, engineering, implementation, operations, and optimization, with nothing handed off mid-project.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="clay-light group relative bg-[#f7f9fc] border border-[#052440]/5 p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_20px_rgba(5,36,64,0.1)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="clay-badge-light flex h-12 w-12 shrink-0 items-center justify-center bg-[#080357] text-white text-sm font-extrabold">
                      {item.n}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#080357]">
                        {item.t}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#052440]/70">
                        {item.d}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. GUIDING PRINCIPLES: VISION, MISSION & VALUES                */}
      {/* DARK, SILKY SMOOTH SLIDE-OVER OVERLAP (CLEAN SHADOW, ZERO LAG) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section
        id="principles"
        className="relative z-20 rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[60px] border-t border-white/20 bg-[#050238] text-white shadow-[0_-10px_28px_rgba(0,0,0,0.18)] overflow-hidden"
      >
        {/* Hardware-accelerated CSS radial ambience (zero blur, zero repaint lag) */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(183,243,107,0.08),transparent_50%)]" />

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 pt-20 pb-24 sm:pt-28 sm:pb-32">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 backdrop-blur-sm mb-4">
              <span className="h-2 w-2 rounded-full bg-[#B7F36B] shadow-[0_0_6px_#B7F36B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B7F36B]">
                Guiding Principles
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Vision, Mission &amp; Values
            </h2>
          </div>

          {/* Editorial Stream (Non-Card Layout) */}
          <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {/* 01 // VISION */}
            <div className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
              <div className="md:col-span-4 lg:col-span-3 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/15 text-[#B7F36B]">
                  <Eye size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#B7F36B] uppercase block">
                    01 // Principle
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    Vision
                  </h3>
                </div>
              </div>

              <div className="md:col-span-8 lg:col-span-9">
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-white/95">
                  Simplify enterprise technology complexity through{" "}
                  <span className="text-[#B7F36B] font-semibold">secure</span>,{" "}
                  <span className="text-[#B7F36B] font-semibold">scalable</span>, and{" "}
                  <span className="text-[#B7F36B] font-semibold">intelligent</span> architectures.
                </p>
              </div>
            </div>

            {/* 02 // MISSION */}
            <div className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
              <div className="md:col-span-4 lg:col-span-3 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/15 text-blue-400">
                  <Target size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-blue-400 uppercase block">
                    02 // Principle
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    Mission
                  </h3>
                </div>
              </div>

              <div className="md:col-span-8 lg:col-span-9">
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-white/95">
                  Deliver technology ecosystems that improve{" "}
                  <span className="text-blue-300 font-semibold">resilience</span>,{" "}
                  <span className="text-blue-300 font-semibold">performance</span>,{" "}
                  <span className="text-blue-300 font-semibold">efficiency</span>, and{" "}
                  <span className="text-blue-300 font-semibold">business agility</span>.
                </p>
              </div>
            </div>

            {/* 03 // VALUES */}
            <div className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
              <div className="md:col-span-4 lg:col-span-3 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/15 text-purple-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-purple-400 uppercase block">
                    03 // Principle
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    Values
                  </h3>
                </div>
              </div>

              <div className="md:col-span-8 lg:col-span-9">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {[
                    "Integrity",
                    "Engineering Excellence",
                    "Accountability",
                    "Partnership",
                    "Continuous Improvement",
                  ].map((value) => (
                    <div
                      key={value}
                      className="group/val flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 transition-all duration-200 hover:border-[#B7F36B]/60 hover:bg-white/[0.1] hover:scale-[1.02]"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#B7F36B] opacity-70 group-hover/val:opacity-100 group-hover/val:shadow-[0_0_6px_#B7F36B] transition-all" />
                      <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
