"use client";

import React, { useState } from "react";
import { ArrowDown } from "lucide-react";

const capabilities = [
  { id: "gen-ai", label: "Generative AI" },
  { id: "rag-systems", label: "RAG Systems" },
  { id: "conversational-ai", label: "Conversational AI" },
  { id: "doc-processing", label: "Document Processing" },
  { id: "predictive-ml", label: "Predictive ML" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "ai-agents", label: "AI Agents" },
];

export default function EnterpriseAiPlatformDiagram() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isCenterHovered, setIsCenterHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  // Vertical centers for 7 cards in 420px height (h-44px cards, 18.67px gaps)
  // Card 0: 0..44 => 22
  // Card 1: 62.67..106.67 => 84.67
  // Card 2: 125.33..169.33 => 147.33
  // Card 3: 188..232 => 210 (perfect center!)
  // Card 4: 250.67..294.67 => 272.67
  // Card 5: 313.33..357.33 => 335.33
  // Card 6: 376..420 => 398
  const leftY = [22, 84.67, 147.33, 210, 272.67, 335.33, 398];

  return (
    <div className="w-full py-6">
      {/* ─── DESKTOP & TABLET DIAGRAM (md and up) ─── */}
      <div className="hidden md:flex items-center justify-center max-w-5xl mx-auto px-4 select-none">
        
        {/* ─── 1. LEFT: 7 AI & ML Capability Cards ─── */}
        <div className="w-[230px] lg:w-[260px] h-[420px] flex flex-col justify-between flex-shrink-0">
          {capabilities.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex items-center justify-center h-[44px] px-4 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
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
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* ─── 2. CONNECTOR 1: 7 Converging Lines with Arrow ─── */}
        <div className="w-[90px] lg:w-[130px] h-[420px] flex items-center justify-center relative flex-shrink-0">
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 100 420"
          >
            {capabilities.map((_, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAnyHovered = hoveredIdx !== null;
              const startY = leftY[idx];

              return (
                <g key={idx}>
                  {/* Subtle hover glow line */}
                  {isHovered && (
                    <line
                      x1="0"
                      y1={startY}
                      x2="92"
                      y2="210"
                      stroke="#080357"
                      strokeWidth="3.5"
                      strokeOpacity="0.2"
                    />
                  )}
                  {/* Connecting line */}
                  <line
                    x1="0"
                    y1={startY}
                    x2="92"
                    y2="210"
                    stroke={isHovered ? "#080357" : isAnyHovered ? "#cbd5e1" : "#556987"}
                    strokeWidth={isHovered ? "2.2" : "1.5"}
                    className="transition-colors duration-200"
                  />
                  {/* Start anchor dot */}
                  <circle
                    cx="0"
                    cy={startY}
                    r={isHovered ? "3" : "2"}
                    fill={isHovered ? "#080357" : "#64748b"}
                  />
                </g>
              );
            })}

            {/* Converging single arrowhead pointing into the center box */}
            <polygon
              points="84 203, 98 210, 84 217"
              fill={hoveredIdx !== null || isCenterHovered ? "#080357" : "#556987"}
              className="transition-colors duration-200"
            />
          </svg>
        </div>

        {/* ─── 3. CENTER: Enterprise AI Platform (Dark Navy) ─── */}
        <div className="w-[180px] lg:w-[210px] h-[420px] flex items-center justify-center flex-shrink-0">
          <div
            onMouseEnter={() => setIsCenterHovered(true)}
            onMouseLeave={() => setIsCenterHovered(false)}
            className={`w-full h-[120px] rounded-2xl bg-[#142343] border border-[#223663] shadow-lg flex items-center justify-center text-center p-5 transition-all duration-300 cursor-pointer select-none relative overflow-hidden ${
              isCenterHovered ? "scale-[1.03] shadow-xl border-[#3b5998] bg-[#0f1f3d]" : ""
            }`}
            style={{
              backgroundImage: "radial-gradient(#1e335f 1px, transparent 1px)",
              backgroundSize: "6px 6px",
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h4 className="text-base lg:text-lg font-bold text-white tracking-wide leading-tight">
                Enterprise AI
                <span className="block mt-1">Platform</span>
              </h4>
            </div>
          </div>
        </div>

        {/* ─── 4. CONNECTOR 2: Straight Horizontal Arrow ─── */}
        <div className="w-[90px] lg:w-[130px] h-[420px] flex items-center justify-center relative flex-shrink-0">
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 100 420"
          >
            {/* Subtle glow when center or right card is hovered */}
            {(isCenterHovered || isRightHovered) && (
              <line
                x1="0"
                y1="210"
                x2="90"
                y2="210"
                stroke="#080357"
                strokeWidth="3.5"
                strokeOpacity="0.2"
              />
            )}
            <line
              x1="0"
              y1="210"
              x2="90"
              y2="210"
              stroke={isCenterHovered || isRightHovered ? "#080357" : "#556987"}
              strokeWidth={isCenterHovered || isRightHovered ? "2.2" : "1.5"}
              className="transition-colors duration-200"
            />
            {/* Arrowhead pointing into Production Business Outcomes */}
            <polygon
              points="84 203, 98 210, 84 217"
              fill={isCenterHovered || isRightHovered ? "#080357" : "#556987"}
              className="transition-colors duration-200"
            />
          </svg>
        </div>

        {/* ─── 5. RIGHT: Production Business Outcomes (Light Card) ─── */}
        <div className="w-[190px] lg:w-[220px] h-[420px] flex items-center justify-center flex-shrink-0">
          <div
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
            className={`w-full h-[120px] rounded-2xl border transition-all duration-300 cursor-pointer select-none flex items-center justify-center text-center p-5 relative overflow-hidden ${
              isRightHovered
                ? "border-[#080357] shadow-lg -translate-y-0.5 bg-white scale-[1.02]"
                : "border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] hover:border-[#080357]/40"
            }`}
            style={{
              backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
              backgroundSize: "5px 5px",
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h4 className="text-base lg:text-lg font-bold text-[#080357] tracking-wide leading-tight">
                Production
                <span className="block mt-1">Business Outcomes</span>
              </h4>
            </div>
          </div>
        </div>

      </div>

      {/* ─── MOBILE RESPONSIVE DIAGRAM (screens under md) ─── */}
      <div className="flex md:hidden flex-col items-center max-w-sm mx-auto px-4 select-none">
        
        {/* Top: 7 Capabilities Stacked */}
        <div className="w-full space-y-2.5">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center h-11 px-4 rounded-xl border border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] text-[#1e293b]"
              style={{
                backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                backgroundSize: "5px 5px",
              }}
            >
              <span className="text-xs font-semibold text-center whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Vertical Connector Arrow 1 */}
        <div className="w-full h-12 flex justify-center items-center relative my-1 text-[#556987]">
          <div className="flex flex-col items-center">
            <div className="w-[1.5px] h-6 bg-[#556987]" />
            <ArrowDown size={18} strokeWidth={2} className="text-[#556987] -mt-1" />
          </div>
        </div>

        {/* Center: Enterprise AI Platform */}
        <div
          className="w-full max-w-[240px] h-[95px] rounded-2xl bg-[#142343] border border-[#223663] shadow-md flex items-center justify-center text-center p-4 relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(#1e335f 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        >
          <h4 className="text-base font-bold text-white tracking-wide leading-tight">
            Enterprise AI
            <span className="block mt-1">Platform</span>
          </h4>
        </div>

        {/* Vertical Connector Arrow 2 */}
        <div className="w-full h-12 flex justify-center items-center relative my-1 text-[#556987]">
          <div className="flex flex-col items-center">
            <div className="w-[1.5px] h-6 bg-[#556987]" />
            <ArrowDown size={18} strokeWidth={2} className="text-[#556987] -mt-1" />
          </div>
        </div>

        {/* Bottom: Production Business Outcomes */}
        <div
          className="w-full max-w-[240px] h-[95px] rounded-2xl border border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] flex items-center justify-center text-center p-4 relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
            backgroundSize: "5px 5px",
          }}
        >
          <h4 className="text-base font-bold text-[#080357] tracking-wide leading-tight">
            Production
            <span className="block mt-1">Business Outcomes</span>
          </h4>
        </div>

      </div>
    </div>
  );
}
