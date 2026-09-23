"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const currentEstate = [
  "Legacy Infrastructure",
  "Hybrid Environment",
  "Cloud Platforms",
];

const werouteArchitecture = [
  "Network Fabric",
  "Security Layer",
  "Observability",
  "Automation",
  "AI Operations",
];

const outcomes = [
  "Connected Environments",
  "Unified Visibility",
  "Automated Operations",
  "Stronger Security",
  "Reduced Complexity",
];

export default function TimeToValueArchitecture() {
  return (
    <section
      id="time-to-value"
      className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#052440]"
      aria-label="WeRoute enterprise architecture connecting legacy, hybrid, and cloud environments through network, security, observability, automation, and AI operations layers."
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#080357]/5 blur-3xl" />
        <div className="absolute left-[-10%] bottom-[15%] h-[420px] w-[420px] rounded-full bg-[#052440]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="clay-badge-light inline-flex items-center border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
            Architecture Blueprint
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#080357] md:text-4xl lg:text-[44px] tracking-tight">
            Designed for{" "}
            <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
              Faster Time to Value
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#052440]/70 font-normal">
            Most enterprise estates grow in layers, with legacy systems, hybrid environments, and cloud platforms accumulating alongside each other. WeRoute connects them through a single architecture rather than another point solution.
          </p>
        </motion.div>

        {/* Conceptual Architecture Diagram Container in Claymorphism */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="clay-light mt-16 bg-[#f7f9fc] border border-[#052440]/5 p-6 sm:p-10 lg:p-14 rounded-[32px] hidden md:block"
        >
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#052440]/10">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#052440]/50 font-bold">
                Architectural Flow
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#080357] mt-1">
                From Fragmented Layers to One Unified Production Architecture
              </h3>
            </div>
            <div className="clay-badge-light flex items-center gap-2 text-xs font-bold text-[#080357] bg-[#f7f9fc] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Continuous Execution Flow</span>
            </div>
          </div>

          {/* 3-Column Architectural Flow Diagram */}
          <div className="relative mx-auto max-w-5xl py-4">
            <div className="grid grid-cols-1 md:grid-cols-11 gap-6 md:gap-0 items-center">
              
              {/* ─── COLUMN 1: CURRENT ESTATE ─── */}
              <div className="md:col-span-3 flex flex-col items-center">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#556987] mb-8 text-center">
                  CURRENT ESTATE
                </h4>
                <div className="flex flex-col justify-between w-full h-[320px] py-1">
                  {currentEstate.map((item, idx) => (
                    <div
                      key={idx}
                      className="clay-badge-light flex items-center justify-center bg-white border border-[#052440]/10 px-5 py-4 rounded-xl shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#080357] text-center">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Connector 1 */}
              <div className="flex md:hidden justify-center text-[#556987] -my-2">
                <ArrowDown size={22} className="animate-bounce" />
              </div>

              {/* Desktop Connector 1: Converging SVG lines into Observability */}
              <div className="hidden md:flex md:col-span-1 h-[320px] mt-12 items-center justify-center relative">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 320">
                  {/* Top: Legacy Infrastructure -> Observability */}
                  <path d="M 0 35 L 100 160" stroke="#7e92ac" strokeWidth="1.5" fill="none" />
                  {/* Middle: Hybrid Environment -> Observability */}
                  <path d="M 0 160 L 100 160" stroke="#7e92ac" strokeWidth="1.5" fill="none" />
                  {/* Bottom: Cloud Platforms -> Observability */}
                  <path d="M 0 285 L 100 160" stroke="#7e92ac" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              {/* ─── COLUMN 2: WEROUTE ARCHITECTURE ─── */}
              <div className="md:col-span-3 flex flex-col items-center">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#556987] mb-8 text-center">
                  WEROUTE ARCHITECTURE
                </h4>
                <div className="flex flex-col justify-between w-full h-[320px] gap-2.5">
                  {werouteArchitecture.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center bg-[#192b58] text-white px-5 py-3.5 rounded-xl shadow-md border border-white/10 transition-all duration-300 hover:bg-[#0E1A59] hover:scale-[1.02]"
                    >
                      <span className="text-sm sm:text-base font-bold text-center">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Connector 2 */}
              <div className="flex md:hidden justify-center text-[#556987] -my-2">
                <ArrowDown size={22} className="animate-bounce" />
              </div>

              {/* Desktop Connector 2: Straight arrow from Observability -> Automated Operations */}
              <div className="hidden md:flex md:col-span-1 h-[320px] mt-12 items-center justify-center relative">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 320">
                  <defs>
                    <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
                      <polygon points="0 0, 8 3.5, 0 7" fill="#556987" />
                    </marker>
                  </defs>
                  <line x1="0" y1="160" x2="92" y2="160" stroke="#556987" strokeWidth="1.75" markerEnd="url(#arrowhead)" />
                </svg>
              </div>

              {/* ─── COLUMN 3: OUTCOMES ─── */}
              <div className="md:col-span-3 flex flex-col items-center">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#556987] mb-8 text-center">
                  OUTCOMES
                </h4>
                <div className="flex flex-col justify-between w-full h-[320px] gap-2.5">
                  {outcomes.map((item, idx) => (
                    <div
                      key={idx}
                      className="clay-badge-light flex items-center justify-center bg-white border border-[#052440]/10 px-5 py-3.5 rounded-xl shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#080357]/20"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#080357] text-center">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
