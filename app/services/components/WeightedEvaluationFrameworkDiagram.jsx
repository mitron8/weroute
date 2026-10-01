"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const dimensions = [
  { id: "capability", label: "Capability", pos: "top", x: 360, y: 68, line: { x1: 360, y1: 182, x2: 360, y2: 91 } },
  { id: "architecture-fit", label: "Architecture Fit", pos: "top-right", x: 525, y: 110, line: { x1: 408, y1: 202, x2: 465, y2: 133 } },
  { id: "security", label: "Security", pos: "right", x: 580, y: 250, line: { x1: 428, y1: 250, x2: 509, y2: 250 } },
  { id: "integration", label: "Integration", pos: "bottom-right", x: 525, y: 390, line: { x1: 408, y1: 298, x2: 465, y2: 367 } },
  { id: "operations", label: "Operations", pos: "bottom", x: 360, y: 432, line: { x1: 360, y1: 318, x2: 360, y2: 409 } },
  { id: "cost", label: "Cost", pos: "bottom-left", x: 195, y: 390, line: { x1: 312, y1: 298, x2: 255, y2: 367 } },
  { id: "scalability", label: "Scalability", pos: "left", x: 140, y: 250, line: { x1: 292, y1: 250, x2: 211, y2: 250 } },
  { id: "risk", label: "Risk", pos: "top-left", x: 195, y: 110, line: { x1: 312, y1: 202, x2: 255, y2: 133 } },
];

export default function WeightedEvaluationFrameworkDiagram() {
  const [hoveredId, setHoveredId] = useState(null);
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  return (
    <div className="w-full clay-light bg-white rounded-[3rem] p-6 sm:p-10 md:p-14 border border-[#080357]/5 overflow-hidden relative shadow-[0_20px_50px_rgba(8,3,87,0.04)] my-12">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-bl from-blue-50/70 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-gradient-to-tr from-[#B7F36B]/15 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* ─── DESKTOP RADIAL DIAGRAM (md and up) ─── */}
      <div className="hidden md:flex flex-col items-center max-w-4xl mx-auto relative z-10">
        {/* Top Diagram Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-[#080357] tracking-tight mb-2 text-center">
          Weighted Evaluation Framework
        </h3>
        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-6">
          Multi-Dimensional Decision Architecture
        </p>

        {/* Radial Canvas Container (720px x 500px coordinate system) */}
        <div className="relative w-[720px] h-[500px] select-none">
          {/* SVG Connector Lines Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 720 500"
          >
            {dimensions.map((dim) => {
              const isHovered = hoveredId === dim.id || isCenterHovered;
              const isAnyHovered = hoveredId !== null || isCenterHovered;

              return (
                <g key={dim.id}>
                  {/* Subtle hover glow line */}
                  {isHovered && (
                    <line
                      x1={dim.line.x1}
                      y1={dim.line.y1}
                      x2={dim.line.x2}
                      y2={dim.line.y2}
                      stroke="#080357"
                      strokeWidth="4"
                      strokeOpacity="0.25"
                    />
                  )}
                  {/* Main connecting line */}
                  <line
                    x1={dim.line.x1}
                    y1={dim.line.y1}
                    x2={dim.line.x2}
                    y2={dim.line.y2}
                    stroke={isHovered ? "#080357" : isAnyHovered ? "#cbd5e1" : "#94a3b8"}
                    strokeWidth={isHovered ? "2.5" : "1.5"}
                    strokeDasharray={isHovered ? "none" : "none"}
                    className="transition-colors duration-200"
                  />
                  {/* Anchor dot on center circle */}
                  <circle
                    cx={dim.line.x1}
                    cy={dim.line.y1}
                    r={isHovered ? "3.5" : "2.5"}
                    fill={isHovered ? "#080357" : "#64748b"}
                    className="transition-all duration-200"
                  />
                  {/* Anchor dot on target card */}
                  <circle
                    cx={dim.line.x2}
                    cy={dim.line.y2}
                    r={isHovered ? "3.5" : "2.5"}
                    fill={isHovered ? "#080357" : "#64748b"}
                    className="transition-all duration-200"
                  />
                </g>
              );
            })}
          </svg>

          {/* Center Hub: Technology Decision */}
          <div
            onMouseEnter={() => setIsCenterHovered(true)}
            onMouseLeave={() => setIsCenterHovered(false)}
            className="absolute left-[292px] top-[182px] w-[136px] h-[136px] rounded-full bg-[#0d1d3c] border-2 border-[#1e2d4e] shadow-xl flex items-center justify-center text-center p-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#385185] z-20 group"
            style={{
              backgroundImage: "radial-gradient(#1c315e 1.2px, transparent 1.2px)",
              backgroundSize: "6px 6px",
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-white tracking-wide leading-tight">
                Technology
              </span>
              <span className="text-sm font-bold text-white tracking-wide leading-tight">
                Decision
              </span>
            </div>
            {/* Subtle glow pulse on hover */}
            <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
          </div>

          {/* 8 Satellite Dimension Cards */}
          {dimensions.map((dim) => {
            const isHovered = hoveredId === dim.id;

            return (
              <div
                key={dim.id}
                onMouseEnter={() => setHoveredId(dim.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  left: `${dim.x - 71}px`,
                  top: `${dim.y - 23}px`,
                  backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                  backgroundSize: "5px 5px",
                }}
                className={`absolute w-[142px] h-[46px] rounded-xl border flex items-center justify-center px-3 cursor-pointer select-none transition-all duration-200 z-10 ${
                  isHovered
                    ? "border-[#080357] shadow-lg -translate-y-0.5 bg-white text-[#080357] scale-105"
                    : "border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] text-[#1e293b] hover:border-[#080357]/50"
                }`}
              >
                <span className="text-xs lg:text-sm font-semibold tracking-normal text-center whitespace-nowrap">
                  {dim.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom Caption as requested */}
        <p className="text-xs lg:text-sm text-slate-500 font-medium tracking-tight text-center mt-6">
          Every option is scored against the same weighted dimensions, tied to organizational priorities
        </p>
      </div>

      {/* ─── MOBILE RESPONSIVE DIAGRAM (screens under md) ─── */}
      <div className="flex md:hidden flex-col items-center max-w-sm mx-auto relative z-10">
        {/* Top Diagram Title */}
        <h3 className="text-lg font-bold text-[#080357] tracking-tight mb-1 text-center">
          Weighted Evaluation Framework
        </h3>
        <p className="text-[11px] text-slate-400 font-medium uppercase tracking-widest mb-6 text-center">
          Multi-Dimensional Decision Architecture
        </p>

        {/* Center Hub: Technology Decision */}
        <div
          className="w-full max-w-[200px] h-[64px] rounded-2xl bg-[#0d1d3c] border-2 border-[#1e2d4e] shadow-lg flex items-center justify-center text-center p-3 mb-6 relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(#1c315e 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        >
          <h4 className="text-sm font-bold text-white tracking-wide leading-tight">
            Technology Decision
          </h4>
        </div>

        {/* 8 Dimension Cards in 2 Columns */}
        <div className="w-full grid grid-cols-2 gap-2.5">
          {dimensions.map((dim) => (
            <div
              key={dim.id}
              className="flex items-center justify-center h-11 px-2.5 rounded-xl border border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] text-[#1e293b]"
              style={{
                backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                backgroundSize: "5px 5px",
              }}
            >
              <span className="text-xs font-semibold text-center leading-tight">
                {dim.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Caption */}
        <p className="text-xs text-slate-500 font-medium tracking-tight text-center mt-6 leading-relaxed">
          Every option is scored against the same weighted dimensions, tied to organizational priorities
        </p>
      </div>
    </div>
  );
}
