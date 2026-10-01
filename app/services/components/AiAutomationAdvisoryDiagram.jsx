"use client";

import React, { useState } from "react";
import { ArrowDown } from "lucide-react";

const enterpriseSignals = [
  "Business Processes",
  "Data & Applications",
  "Infrastructure",
  "Governance",
];

export default function AiAutomationAdvisoryDiagram() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Y centers for 4 cards in 280px height:
  // Card height = 44px, total = 176px. Remaining space = 104px. 3 gaps = 34.67px.
  // Center positions: y = 22, 100.67, 179.33, 258
  const yTargets = [22, 100.67, 179.33, 258];

  return (
    <div className="w-full py-6">
      {/* ─── DESKTOP & TABLET DIAGRAM (md and up) ─── */}
      <div className="hidden md:flex flex-col items-center max-w-4xl mx-auto px-4">
        
        {/* Top Diagram Title */}
        <h3 className="text-lg lg:text-xl font-bold text-[#080357] tracking-tight mb-8 text-center">
          From Enterprise Signals to a Prioritized Roadmap
        </h3>

        <div className="w-full flex items-center justify-center gap-2 lg:gap-3">
          
          {/* ─── 1. LEFT: 4 Enterprise Signals Feeder Cards ─── */}
          <div className="w-[175px] lg:w-[195px] h-[280px] flex flex-col justify-between flex-shrink-0">
            {enterpriseSignals.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`flex items-center justify-center h-11 px-3 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                    isHovered
                      ? "border-[#080357] shadow-md -translate-y-0.5 bg-white text-[#080357]"
                      : "border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] text-[#1e293b] hover:border-[#080357]/40"
                  }`}
                  style={{
                    backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                    backgroundSize: "5px 5px",
                  }}
                >
                  <span className="text-xs lg:text-sm font-semibold tracking-normal text-center whitespace-nowrap">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ─── 2. CONNECTOR: 4 Converging Dashed Lines ─── */}
          <div className="flex-1 h-[280px] flex items-center justify-center relative px-1 min-w-[70px] max-w-[150px]">
            <svg
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 100 280"
            >
              {enterpriseSignals.map((_, idx) => {
                const isHovered = hoveredIdx === idx;
                const isAnyHovered = hoveredIdx !== null;
                const startY = yTargets[idx];

                return (
                  <g key={idx}>
                    {/* Subtle glow on hover */}
                    {isHovered && (
                      <path
                        d={`M 0 ${startY} L 100 140`}
                        stroke="#080357"
                        strokeWidth="3.5"
                        strokeOpacity="0.2"
                        fill="none"
                      />
                    )}
                    {/* Dashed connector line */}
                    <path
                      d={`M 0 ${startY} L 100 140`}
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
                      cy="140"
                      r="2"
                      fill="#0d1d3c"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* ─── 3. CENTER: Opportunity Assessment Card ─── */}
          <div className="w-[175px] lg:w-[195px] h-[280px] flex items-center justify-center flex-shrink-0">
            <div
              className="w-full h-[108px] rounded-2xl bg-[#0d1d3c] border border-[#1e2d4e] shadow-lg flex items-center justify-center text-center p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#2d4270] relative overflow-hidden"
              style={{
                backgroundImage: "radial-gradient(#1c315e 1px, transparent 1px)",
                backgroundSize: "6px 6px",
              }}
            >
              <div className="relative z-10">
                <h4 className="text-sm lg:text-base font-bold text-white tracking-wide leading-tight">
                  Opportunity<br />Assessment
                </h4>
              </div>
            </div>
          </div>

          {/* ─── 4. CONNECTOR: Straight Arrow Pointing Right ─── */}
          <div className="flex-1 h-[280px] flex items-center justify-center relative px-1 min-w-[60px] max-w-[130px]">
            <svg
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 100 280"
            >
              <defs>
                <marker
                  id="arrowhead-ai-roadmap"
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
                y1="140"
                x2="90"
                y2="140"
                stroke="#556987"
                strokeWidth="1.75"
                markerEnd="url(#arrowhead-ai-roadmap)"
              />
            </svg>
          </div>

          {/* ─── 5. RIGHT: Prioritized Roadmap Target Card ─── */}
          <div className="w-[175px] lg:w-[195px] h-[280px] flex items-center justify-center flex-shrink-0">
            <div
              className="w-full h-[108px] rounded-2xl border border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] flex items-center justify-center text-center p-4 transition-all duration-300 hover:border-[#080357]/40 hover:shadow-md hover:-translate-y-0.5"
              style={{
                backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                backgroundSize: "5px 5px",
              }}
            >
              <h4 className="text-sm lg:text-base font-semibold text-[#1e293b] tracking-wide leading-tight">
                Prioritized<br />Roadmap
              </h4>
            </div>
          </div>

        </div>
      </div>

      {/* ─── MOBILE RESPONSIVE DIAGRAM (screens under md) ─── */}
      <div className="flex md:hidden flex-col items-center max-w-sm mx-auto px-4">
        {/* Top: Diagram Title */}
        <h3 className="text-base font-bold text-[#080357] tracking-tight mb-5 text-center">
          From Enterprise Signals to a Prioritized Roadmap
        </h3>

        {/* 4 Feeder Chips in 2x2 Grid */}
        <div className="w-full grid grid-cols-2 gap-2">
          {enterpriseSignals.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-11 px-2.5 rounded-xl border border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] text-[#1e293b]"
              style={{
                backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                backgroundSize: "5px 5px",
              }}
            >
              <span className="text-xs font-semibold text-center leading-tight">{item}</span>
            </div>
          ))}
        </div>

        {/* Arrow Down 1 */}
        <div className="flex justify-center text-[#7e92ac] my-3">
          <ArrowDown size={20} className="animate-bounce" />
        </div>

        {/* Center: Opportunity Assessment */}
        <div
          className="w-full max-w-[240px] h-[76px] rounded-2xl bg-[#0d1d3c] border border-[#1e2d4e] shadow-md flex items-center justify-center text-center p-3 relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(#1c315e 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        >
          <h4 className="text-sm font-bold text-white tracking-wide leading-tight">
            Opportunity<br />Assessment
          </h4>
        </div>

        {/* Arrow Down 2 */}
        <div className="flex justify-center text-[#7e92ac] my-3">
          <ArrowDown size={20} />
        </div>

        {/* Bottom: Prioritized Roadmap */}
        <div
          className="w-full max-w-[240px] h-[76px] rounded-2xl border border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] flex items-center justify-center text-center p-3"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
            backgroundSize: "5px 5px",
          }}
        >
          <h4 className="text-sm font-semibold text-[#1e293b] tracking-wide leading-tight">
            Prioritized<br />Roadmap
          </h4>
        </div>
      </div>
    </div>
  );
}
