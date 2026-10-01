"use client";

import React, { useState } from "react";
import { ArrowDown, CornerDownLeft } from "lucide-react";

const iacStages = [
  {
    step: 1,
    name: "ASSESS",
    desc: "Manual processes, dependencies",
    col: 0,
    row: 0,
    x: 20,
    y: 15,
  },
  {
    step: 2,
    name: "STANDARDIZE",
    desc: "Repositories, conventions, modules",
    col: 1,
    row: 0,
    x: 300,
    y: 15,
  },
  {
    step: 3,
    name: "AUTOMATE",
    desc: "Terraform, Ansible, pipelines",
    col: 2,
    row: 0,
    x: 580,
    y: 15,
  },
  {
    step: 4,
    name: "VALIDATE",
    desc: "Repeatability, security, rollback",
    col: 2,
    row: 1,
    x: 580,
    y: 185,
  },
  {
    step: 5,
    name: "INTEGRATE",
    desc: "Version control, CI/CD, monitoring",
    col: 1,
    row: 1,
    x: 300,
    y: 185,
  },
  {
    step: 6,
    name: "ENABLE",
    desc: "Documentation, training, ownership",
    col: 0,
    row: 1,
    x: 20,
    y: 185,
  },
];

export default function IacDeliveryLifecycleDiagram() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div className="w-full clay-light bg-white rounded-[3rem] p-6 sm:p-10 md:p-14 border border-[#080357]/5 overflow-hidden relative shadow-[0_20px_50px_rgba(8,3,87,0.04)] my-12">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-bl from-cyan-50/70 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-gradient-to-tr from-[#B7F36B]/15 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* ─── DESKTOP S-CURVE DIAGRAM (md and up) ─── */}
      <div className="hidden md:flex flex-col items-center max-w-5xl mx-auto relative z-10 select-none">
        
        {/* Top Diagram Title */}
        <h3 className="text-xl lg:text-2xl font-black text-[#080357] tracking-tight mb-2 text-center">
          INFRASTRUCTURE AS CODE DELIVERY LIFECYCLE
        </h3>
        <p className="text-xs lg:text-sm text-slate-500 font-medium text-center mb-8">
          Six stages from manual process to fully enabled automation
        </p>

        {/* Coordinate Canvas: 820px x 310px */}
        <div className="relative w-[820px] h-[310px]">
          {/* SVG Connector Lines Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 820 310"
          >
            {/* 1 -> 2 (Horizontal) */}
            <line
              x1="240"
              y1="65"
              x2="300"
              y2="65"
              stroke="#06b6d4"
              strokeWidth="2.5"
            />
            {/* 2 -> 3 (Horizontal) */}
            <line
              x1="520"
              y1="65"
              x2="580"
              y2="65"
              stroke="#06b6d4"
              strokeWidth="2.5"
            />
            {/* 3 -> 4 (Vertical Down) */}
            <line
              x1="690"
              y1="115"
              x2="690"
              y2="185"
              stroke="#06b6d4"
              strokeWidth="2.5"
            />
            {/* 4 -> 5 (Horizontal Right to Left) */}
            <line
              x1="580"
              y1="235"
              x2="520"
              y2="235"
              stroke="#06b6d4"
              strokeWidth="2.5"
            />
            {/* 5 -> 6 (Horizontal Right to Left) */}
            <line
              x1="300"
              y1="235"
              x2="240"
              y2="235"
              stroke="#06b6d4"
              strokeWidth="2.5"
            />
          </svg>

          {/* 6 Stage Blueprint Cards */}
          {iacStages.map((stage) => {
            const isHovered = hoveredStep === stage.step;

            return (
              <div
                key={stage.step}
                onMouseEnter={() => setHoveredStep(stage.step)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{
                  left: `${stage.x}px`,
                  top: `${stage.y}px`,
                  backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                  backgroundSize: "5px 5px",
                }}
                className={`absolute w-[220px] h-[100px] rounded-2xl border bg-[#fcfdfe] p-3 flex flex-col justify-center cursor-pointer transition-all duration-300 z-10 ${
                  isHovered
                    ? "border-[#080357] shadow-xl -translate-y-1 bg-white scale-[1.02]"
                    : "border-[#1e293b]/50 shadow-xs hover:border-[#080357]/60"
                }`}
              >
                {/* Hardware Terminal Notch Pins (Left Edge) */}
                <span className="absolute -left-2 top-[34px] w-2 h-[2px] bg-[#1e293b]/60" />
                <span className="absolute -left-2 top-[49px] w-2 h-[2px] bg-[#06b6d4]" />
                <span className="absolute -left-2 top-[64px] w-2 h-[2px] bg-[#1e293b]/60" />

                {/* Hardware Terminal Notch Pins (Right Edge) */}
                <span className="absolute -right-2 top-[34px] w-2 h-[2px] bg-[#1e293b]/60" />
                <span className="absolute -right-2 top-[49px] w-2 h-[2px] bg-[#06b6d4]" />
                <span className="absolute -right-2 top-[64px] w-2 h-[2px] bg-[#1e293b]/60" />

                {/* Number Badge (Top-Left) */}
                <div className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full bg-[#0d1d3c] border border-[#1e2d4e] flex items-center justify-center text-white text-xs font-black shadow-sm">
                  {stage.step}
                </div>

                {/* Stage Title and Subtitle */}
                <div className="flex flex-col items-center justify-center text-center px-4">
                  <h4 className="text-sm font-black text-[#080357] tracking-wider mb-1">
                    {stage.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-snug">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Caption */}
        <p className="text-xs lg:text-sm text-slate-500 font-medium tracking-tight text-center mt-6 italic">
          Each engagement moves left to right, then down and back, building toward full ownership
        </p>
      </div>

      {/* ─── MOBILE RESPONSIVE S-FLOW (screens under md) ─── */}
      <div className="flex md:hidden flex-col items-center max-w-sm mx-auto relative z-10">
        <h3 className="text-base font-black text-[#080357] tracking-tight text-center mb-1">
          INFRASTRUCTURE AS CODE DELIVERY LIFECYCLE
        </h3>
        <p className="text-xs text-slate-500 font-medium text-center mb-6">
          Six stages from manual process to fully enabled automation
        </p>

        {/* Mobile Vertical Flow with Connectors */}
        <div className="w-full flex flex-col gap-3">
          {iacStages.map((stage, idx) => (
            <React.Fragment key={stage.step}>
              <div
                className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-[#1e293b]/40 bg-[#fcfdfe] shadow-xs relative"
                style={{
                  backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                  backgroundSize: "5px 5px",
                }}
              >
                <div className="w-9 h-9 rounded-full bg-[#0d1d3c] border border-[#1e2d4e] text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0 shadow-md">
                  {stage.step}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs sm:text-sm font-black text-[#080357] tracking-wider">
                    {stage.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                    {stage.desc}
                  </p>
                </div>
              </div>

              {idx < iacStages.length - 1 && (
                <div className="flex justify-center -my-1 text-[#06b6d4]">
                  <ArrowDown size={16} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Caption */}
        <p className="text-xs text-slate-500 font-medium tracking-tight text-center mt-6 italic">
          Each engagement moves left to right, then down and back, building toward full ownership
        </p>
      </div>
    </div>
  );
}
