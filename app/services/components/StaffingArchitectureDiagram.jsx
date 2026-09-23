"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

const domains = [
  "Network",
  "Cloud",
  "Cybersecurity",
  "Software",
  "DevOps",
  "AI / ML",
  "Infrastructure",
];

export default function StaffingArchitectureDiagram() {
  return (
    <div className="w-full py-4 hidden md:block">
      {/* 3-Column Diagram on Desktop/Tablet, Hidden on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-11 gap-4 md:gap-0 items-center max-w-5xl mx-auto">
        
        {/* ─── LEFT: 7 DOMAIN CARDS ─── */}
        <div className="md:col-span-3 flex flex-col justify-between h-[368px] w-full">
          {domains.map((item, idx) => (
            <div
              key={idx}
              className="clay-badge-light flex items-center justify-center bg-white border border-[#052440]/10 h-11 px-4 rounded-xl shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#080357]/25"
            >
              <span className="text-sm sm:text-base font-bold text-[#080357] text-center">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Arrow 1 */}
        <div className="flex md:hidden justify-center text-[#7e92ac] my-2">
          <ArrowDown size={22} className="animate-bounce" />
        </div>

        {/* ─── CONNECTOR 1: 7 Lines Converging to Center (Desktop/Tablet) ─── */}
        <div className="hidden md:flex md:col-span-1 h-[368px] items-center justify-center relative">
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 100 368"
          >
            {/* 7 converging lines from left cards to center-left (y = 184) */}
            <path d="M 0 22 L 100 184" stroke="#7e92ac" strokeWidth="1.5" fill="none" />
            <path d="M 0 76 L 100 184" stroke="#7e92ac" strokeWidth="1.5" fill="none" />
            <path d="M 0 130 L 100 184" stroke="#7e92ac" strokeWidth="1.5" fill="none" />
            <path d="M 0 184 L 100 184" stroke="#7e92ac" strokeWidth="1.5" fill="none" />
            <path d="M 0 238 L 100 184" stroke="#7e92ac" strokeWidth="1.5" fill="none" />
            <path d="M 0 292 L 100 184" stroke="#7e92ac" strokeWidth="1.5" fill="none" />
            <path d="M 0 346 L 100 184" stroke="#7e92ac" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* ─── CENTER: WeRoute Technology Talent Platform ─── */}
        <div className="md:col-span-3 flex items-center justify-center h-[368px] w-full">
          <div className="w-full rounded-2xl bg-[#192b58] text-white p-7 sm:p-9 shadow-lg border border-white/10 transition-all duration-300 hover:bg-[#0E1A59] hover:scale-[1.02] flex flex-col items-center justify-center text-center">
            <h4 className="text-base sm:text-lg lg:text-xl font-extrabold leading-snug tracking-tight">
              WeRoute Technology
              <span className="block mt-0.5">Talent Platform</span>
            </h4>
          </div>
        </div>

        {/* Mobile Arrow 2 */}
        <div className="flex md:hidden justify-center text-[#7e92ac] my-2">
          <ArrowDown size={22} className="animate-bounce" />
        </div>

        {/* ─── CONNECTOR 2: Straight Horizontal Arrow (Desktop/Tablet) ─── */}
        <div className="hidden md:flex md:col-span-1 h-[368px] items-center justify-center relative">
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 100 368"
          >
            <defs>
              <marker
                id="arrowhead-staffing"
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 8 3.5, 0 7" fill="#556987" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="184"
              x2="92"
              y2="184"
              stroke="#556987"
              strokeWidth="1.75"
              markerEnd="url(#arrowhead-staffing)"
            />
          </svg>
        </div>

        {/* ─── RIGHT: Enterprise-Ready Technology Teams ─── */}
        <div className="md:col-span-3 flex items-center justify-center h-[368px] w-full">
          <div className="w-full rounded-2xl bg-[#f7f9fc] border border-[#052440]/10 p-7 sm:p-9 shadow-sm transition-all duration-300 hover:border-[#080357]/20 flex flex-col items-center justify-center text-center">
            <h4 className="text-base sm:text-lg lg:text-xl font-extrabold text-[#080357] leading-snug tracking-tight">
              Enterprise-Ready
              <span className="block mt-0.5">Technology Teams</span>
            </h4>
          </div>
        </div>

      </div>
    </div>
  );
}
