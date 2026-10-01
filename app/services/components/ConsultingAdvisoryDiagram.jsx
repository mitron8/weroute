"use client";

import React, { useState } from "react";

const defaultStrategyElements = [
  { id: "assessments", label: "Assessments" },
  { id: "architecture", label: "Architecture" },
  { id: "technology-selection", label: "Technology Selection" },
  { id: "governance", label: "Governance" },
  { id: "transformation-roadmaps", label: "Transformation Roadmaps" },
];

export default function ConsultingAdvisoryDiagram({
  rootTitle = "Business Strategy",
  items = defaultStrategyElements,
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Vertical centers for 5 cards in 340px height:
  // Card height = 48px, gap = 25px
  // y = 24, 97, 170, 243, 316
  const yTargets = [24, 97, 170, 243, 316];

  const titleWords = rootTitle.includes("\n")
    ? rootTitle.split("\n")
    : rootTitle.split(" ");

  return (
    <div className="w-full py-6">
      {/* ─── DESKTOP & TABLET DIAGRAM (md and up) ─── */}
      <div className="hidden md:flex items-center justify-center max-w-4xl mx-auto px-4">
        
        {/* LEFT: Root Strategy Card (e.g. Business Strategy / Business Priorities) */}
        <div className="w-[190px] h-[340px] flex items-center justify-center flex-shrink-0">
          <div
            className="w-full h-[106px] rounded-2xl bg-[#0d1d3c] border border-[#1e2d4e] shadow-lg flex items-center justify-center text-center p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#2d4270] relative overflow-hidden"
            style={{
              backgroundImage: "radial-gradient(#1c315e 1px, transparent 1px)",
              backgroundSize: "6px 6px",
            }}
          >
            <div className="relative z-10">
              <h4 className="text-base lg:text-lg font-bold text-white tracking-wide leading-tight">
                {titleWords[0]}<br />{titleWords.slice(1).join(" ")}
              </h4>
            </div>
          </div>
        </div>

        {/* MIDDLE: 5 Radiating Dashed Connector Lines */}
        <div className="flex-1 h-[340px] flex items-center justify-center relative px-1 min-w-[140px] max-w-[280px]">
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 100 340"
          >
            {items.map((_, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAnyHovered = hoveredIdx !== null;
              const targetY = yTargets[idx];

              return (
                <g key={idx}>
                  {/* Outer subtle glow on hover */}
                  {isHovered && (
                    <path
                      d={`M 0 170 L 100 ${targetY}`}
                      stroke="#080357"
                      strokeWidth="3.5"
                      strokeOpacity="0.2"
                      fill="none"
                    />
                  )}
                  {/* Dashed connector line */}
                  <path
                    d={`M 0 170 L 100 ${targetY}`}
                    stroke={isHovered ? "#080357" : isAnyHovered ? "#cbd5e1" : "#94a3b8"}
                    strokeWidth={isHovered ? "2" : "1.5"}
                    strokeDasharray="4 4"
                    fill="none"
                    className="transition-colors duration-200"
                  />
                  {/* Small anchor dot on right edge of left card */}
                  <circle
                    cx="0"
                    cy="170"
                    r="2"
                    fill="#0d1d3c"
                  />
                  {/* Small connector dot on left edge of right card */}
                  <circle
                    cx="100"
                    cy={targetY}
                    r={isHovered ? "3" : "2"}
                    fill={isHovered ? "#080357" : "#94a3b8"}
                    className="transition-all duration-200"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* RIGHT: 5 Execution Cards */}
        <div className="w-[260px] lg:w-[280px] h-[340px] flex flex-col justify-between flex-shrink-0">
          {items.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex items-center justify-center h-12 px-5 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
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
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── MOBILE RESPONSIVE DIAGRAM (screens under md) ─── */}
      <div className="flex md:hidden flex-col items-center max-w-sm mx-auto px-4">
        {/* Top: Root Card */}
        <div
          className="w-full max-w-[200px] h-[86px] rounded-2xl bg-[#0d1d3c] border border-[#1e2d4e] shadow-md flex items-center justify-center text-center p-3 relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(#1c315e 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        >
          <h4 className="text-base font-bold text-white tracking-wide leading-tight">
            {rootTitle}
          </h4>
        </div>

        {/* Branching Dashed Lines for Mobile */}
        <div className="w-full h-12 flex justify-center items-center relative">
          <svg className="w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
            <line x1="100" y1="0" x2="100" y2="48" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="100" cy="0" r="2.5" fill="#0d1d3c" />
            <circle cx="100" cy="48" r="2.5" fill="#94a3b8" />
          </svg>
        </div>

        {/* Stacked Cards for Mobile */}
        <div className="w-full space-y-2.5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-11 px-4 rounded-xl border border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] text-[#1e293b]"
              style={{
                backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                backgroundSize: "5px 5px",
              }}
            >
              <span className="text-sm font-semibold text-center whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
