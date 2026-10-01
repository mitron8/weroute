"use client";

import React, { useState } from "react";
import { ArrowDown, RotateCw } from "lucide-react";

const lifecycleStages = [
  {
    step: 1,
    name: "ASSESS",
    desc: "Landscape, readiness, gaps",
    pos: "bottom-left",
    cx: 260,
    cy: 245,
    labelAlign: "bottom",
  },
  {
    step: 2,
    name: "ARCHITECT",
    desc: "Foundation, platform, controls",
    pos: "left",
    cx: 150,
    cy: 180,
    labelAlign: "bottom",
  },
  {
    step: 3,
    name: "BUILD",
    desc: "Environments, pipelines, platforms",
    pos: "top-left",
    cx: 260,
    cy: 115,
    labelAlign: "top",
  },
  {
    step: 4,
    name: "MIGRATE & INTEGRATE",
    desc: "Workloads, workflows, validation",
    pos: "bottom-right",
    cx: 540,
    cy: 245,
    labelAlign: "bottom",
  },
  {
    step: 5,
    name: "ENABLE",
    desc: "Documentation, training, readiness",
    pos: "right",
    cx: 650,
    cy: 180,
    labelAlign: "bottom",
  },
  {
    step: 6,
    name: "OPTIMIZE",
    desc: "Speed, reliability, efficiency",
    pos: "top-right",
    cx: 540,
    cy: 115,
    labelAlign: "top",
  },
];

export default function CloudDevOpsLifecycleDiagram() {
  const [hoveredStep, setHoveredStep] = useState(null);

  // Exact mathematically continuous Infinity Loop Path (Lemniscate)
  const infinityPath = `
    M 400 180
    C 460 230, 490 245, 540 245
    C 610 245, 650 220, 650 180
    C 650 140, 610 115, 540 115
    C 490 115, 460 130, 400 180
    C 340 230, 310 245, 260 245
    C 190 245, 150 220, 150 180
    C 150 140, 190 115, 260 115
    C 310 115, 340 130, 400 180
    Z
  `;

  return (
    <div className="w-full clay-light bg-white rounded-[3rem] p-6 sm:p-10 md:p-14 border border-[#080357]/5 overflow-hidden relative shadow-[0_20px_50px_rgba(8,3,87,0.04)] my-12">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-bl from-blue-50/70 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-gradient-to-tr from-[#B7F36B]/15 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* ─── DESKTOP INFINITY DIAGRAM (md and up) ─── */}
      <div className="hidden md:flex flex-col items-center max-w-4xl mx-auto relative z-10 select-none">
        
        {/* Top Diagram Title */}
        <h3 className="text-xl lg:text-2xl font-black text-[#080357] tracking-tight mb-2 text-center uppercase">
          Cloud &amp; DevOps Delivery Lifecycle
        </h3>
        <p className="text-xs lg:text-sm text-slate-500 font-medium text-center mb-6">
          A continuous loop from assessment through ongoing optimization
        </p>

        {/* Infinity Canvas Container (800px x 380px) */}
        <div className="relative w-full max-w-[800px] h-[380px]">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 800 360"
          >
            <defs>
              <linearGradient id="infinityRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Wide Translucent Ribbon Track */}
            <path
              d={infinityPath}
              stroke="url(#infinityRibbonGrad)"
              strokeWidth="32"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Secondary Inner Glow Track */}
            <path
              d={infinityPath}
              stroke="#7dd3fc"
              strokeWidth="20"
              strokeOpacity="0.3"
              fill="none"
            />

            {/* Cyan Center Dashed Track */}
            <path
              d={infinityPath}
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeDasharray="4 6"
              strokeOpacity="0.85"
              fill="none"
            />

            {/* 6 Stage Badges and Labels */}
            {lifecycleStages.map((stage) => {
              const isHovered = hoveredStep === stage.step;

              return (
                <g
                  key={stage.step}
                  onMouseEnter={() => setHoveredStep(stage.step)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="cursor-pointer transition-all duration-300"
                >
                  {/* Subtle hover pulse aura */}
                  {isHovered && (
                    <circle
                      cx={stage.cx}
                      cy={stage.cy}
                      r="32"
                      fill="#38bdf8"
                      fillOpacity="0.2"
                      className="animate-pulse"
                    />
                  )}

                  {/* Circle Badge Outer Ring */}
                  <circle
                    cx={stage.cx}
                    cy={stage.cy}
                    r={isHovered ? "24" : "21"}
                    fill="#0d1d3c"
                    stroke={isHovered ? "#38bdf8" : "#1e2d4e"}
                    strokeWidth={isHovered ? "2.5" : "2"}
                    className="transition-all duration-300 drop-shadow-lg"
                  />

                  {/* Stage Number */}
                  <text
                    x={stage.cx}
                    y={stage.cy + 5}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="15"
                    fontWeight="800"
                    fontFamily="inherit"
                    className="pointer-events-none select-none"
                  >
                    {stage.step}
                  </text>

                  {/* Text Labels Above or Below */}
                  {stage.labelAlign === "top" ? (
                    <g className="pointer-events-none">
                      <text
                        x={stage.cx}
                        y={stage.cy - 38}
                        textAnchor="middle"
                        fill="#080357"
                        fontSize="14"
                        fontWeight="800"
                        letterSpacing="0.05em"
                        className="transition-colors duration-200"
                      >
                        {stage.name}
                      </text>
                      <text
                        x={stage.cx}
                        y={stage.cy - 22}
                        textAnchor="middle"
                        fill="#64748b"
                        fontSize="11.5"
                        fontWeight="500"
                      >
                        {stage.desc}
                      </text>
                    </g>
                  ) : (
                    <g className="pointer-events-none">
                      <text
                        x={stage.cx}
                        y={stage.cy + 38}
                        textAnchor="middle"
                        fill="#080357"
                        fontSize="14"
                        fontWeight="800"
                        letterSpacing="0.05em"
                        className="transition-colors duration-200"
                      >
                        {stage.name}
                      </text>
                      <text
                        x={stage.cx}
                        y={stage.cy + 54}
                        textAnchor="middle"
                        fill="#64748b"
                        fontSize="11.5"
                        fontWeight="500"
                      >
                        {stage.desc}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* ─── MOBILE RESPONSIVE VIEW (screens under md) ─── */}
      <div className="flex md:hidden flex-col items-center max-w-sm mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <RotateCw size={18} className="text-[#0284c7] animate-spin-slow" />
          <h3 className="text-base sm:text-lg font-black text-[#080357] tracking-tight uppercase text-center">
            Cloud &amp; DevOps Delivery Lifecycle
          </h3>
        </div>
        <p className="text-xs text-slate-500 font-medium text-center mb-6">
          A continuous loop from assessment through ongoing optimization
        </p>

        {/* 6 Stage Cards in Sequential Loop Flow */}
        <div className="w-full flex flex-col gap-3">
          {lifecycleStages.map((stage, idx) => (
            <React.Fragment key={stage.step}>
              <div
                className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-[#94a3b8]/40 bg-[#fcfdfe] shadow-xs"
                style={{
                  backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                  backgroundSize: "5px 5px",
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0d1d3c] border border-[#1e2d4e] text-white font-extrabold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                  {stage.step}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs sm:text-sm font-black text-[#080357] tracking-wide">
                    {stage.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                    {stage.desc}
                  </p>
                </div>
              </div>

              {idx < lifecycleStages.length - 1 && (
                <div className="flex justify-center -my-1 text-[#38bdf8]">
                  <ArrowDown size={16} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Continuous Loop indicator footer */}
        <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#0284c7] bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-full">
          <RotateCw size={14} />
          <span>Loops continuously into ongoing optimization</span>
        </div>
      </div>
    </div>
  );
}
