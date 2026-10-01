"use client";

import React, { useState } from "react";
import { ArrowDown } from "lucide-react";

const readinessFeeds = [
  "Applications",
  "Infrastructure",
  "Data",
  "Security",
  "Operations",
  "Governance",
];

export default function CloudReadinessAssessmentDiagram() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Y centers for 6 cards in 340px height:
  // Card height = 44px, gap = 15.2px
  // y = 22, 81.2, 140.4, 199.6, 258.8, 318
  const yTargets = [22, 81.2, 140.4, 199.6, 258.8, 318];

  return (
    <div className="w-full py-6">
      {/* ─── DESKTOP & TABLET DIAGRAM (md and up) ─── */}
      <div className="hidden md:flex flex-col items-center max-w-4xl mx-auto px-4">
        
        {/* Top Diagram Title */}
        <h3 className="text-lg lg:text-xl font-bold text-[#080357] tracking-tight mb-8 text-center">
          What Feeds a Cloud Readiness Assessment
        </h3>

        <div className="w-full flex items-center justify-center">
          {/* ─── LEFT: 6 Feeder Cards ─── */}
          <div className="w-[200px] lg:w-[220px] h-[340px] flex flex-col justify-between flex-shrink-0">
            {readinessFeeds.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`flex items-center justify-center h-11 px-4 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                    isHovered
                      ? "border-[#080357] shadow-md -translate-y-0.5 bg-white text-[#080357]"
                      : "border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] text-[#1e293b] hover:border-[#080357]/40"
                  }`}
                  style={{
                    backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                    backgroundSize: "5px 5px",
                  }}
                >
                  <span className="text-sm font-semibold tracking-normal text-center whitespace-nowrap">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ─── MIDDLE: 6 Converging Dashed Lines ─── */}
          <div className="flex-1 h-[340px] flex items-center justify-center relative px-2 min-w-[160px] max-w-[320px]">
            <svg
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 100 340"
            >
              {readinessFeeds.map((_, idx) => {
                const isHovered = hoveredIdx === idx;
                const isAnyHovered = hoveredIdx !== null;
                const startY = yTargets[idx];

                return (
                  <g key={idx}>
                    {/* Subtle glow on hover */}
                    {isHovered && (
                      <path
                        d={`M 0 ${startY} L 100 170`}
                        stroke="#080357"
                        strokeWidth="3.5"
                        strokeOpacity="0.2"
                        fill="none"
                      />
                    )}
                    {/* Dashed connector line */}
                    <path
                      d={`M 0 ${startY} L 100 170`}
                      stroke={isHovered ? "#080357" : isAnyHovered ? "#cbd5e1" : "#94a3b8"}
                      strokeWidth={isHovered ? "2" : "1.5"}
                      strokeDasharray="4 4"
                      fill="none"
                      className="transition-colors duration-200"
                    />
                    {/* Start dot on right edge of feeder card */}
                    <circle
                      cx="0"
                      cy={startY}
                      r={isHovered ? "3" : "2"}
                      fill={isHovered ? "#080357" : "#94a3b8"}
                      className="transition-all duration-200"
                    />
                    {/* Converging dot on center-left of target card */}
                    <circle
                      cx="100"
                      cy="170"
                      r="2"
                      fill="#0d1d3c"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* ─── RIGHT: Cloud Readiness Assessment Target Card ─── */}
          <div className="w-[210px] lg:w-[230px] h-[340px] flex items-center justify-center flex-shrink-0">
            <div
              className="w-full h-[112px] rounded-2xl bg-[#0d1d3c] border border-[#1e2d4e] shadow-lg flex items-center justify-center text-center p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#2d4270] relative overflow-hidden"
              style={{
                backgroundImage: "radial-gradient(#1c315e 1px, transparent 1px)",
                backgroundSize: "6px 6px",
              }}
            >
              <div className="relative z-10">
                <h4 className="text-base lg:text-lg font-bold text-white tracking-wide leading-tight">
                  Cloud Readiness<br />Assessment
                </h4>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ─── MOBILE RESPONSIVE DIAGRAM (screens under md) ─── */}
      <div className="flex md:hidden flex-col items-center max-w-sm mx-auto px-4">
        <h3 className="text-base font-bold text-[#080357] tracking-tight mb-4 text-center">
          What Feeds a Cloud Readiness Assessment
        </h3>

        {/* 6 Feeder Chips */}
        <div className="w-full grid grid-cols-2 gap-2">
          {readinessFeeds.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-10 px-3 rounded-xl border border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] text-[#1e293b]"
              style={{
                backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                backgroundSize: "5px 5px",
              }}
            >
              <span className="text-xs font-semibold text-center">{item}</span>
            </div>
          ))}
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center text-[#7e92ac] my-3">
          <ArrowDown size={20} className="animate-bounce" />
        </div>

        {/* Target: Cloud Readiness Assessment */}
        <div
          className="w-full max-w-[240px] h-[82px] rounded-2xl bg-[#0d1d3c] border border-[#1e2d4e] shadow-md flex items-center justify-center text-center p-3 relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(#1c315e 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        >
          <h4 className="text-sm font-bold text-white tracking-wide leading-tight">
            Cloud Readiness<br />Assessment
          </h4>
        </div>
      </div>
    </div>
  );
}
