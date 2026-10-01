"use client";

import React, { useState } from "react";
import { ArrowDown } from "lucide-react";

const networkNodes = [
  {
    id: "branch-offices",
    label: "Branch Offices",
    x: 360,
    y: 65,
    line: { x1: 360, y1: 174, x2: 360, y2: 90 },
  },
  {
    id: "campuses",
    label: "Campuses",
    x: 570,
    y: 200,
    line: { x1: 423, y1: 221, x2: 496, y2: 200 },
  },
  {
    id: "data-centres",
    label: "Data Centres",
    x: 490,
    y: 385,
    line: { x1: 402, y1: 291, x2: 460, y2: 360 },
  },
  {
    id: "cloud-environments",
    label: "Cloud Environments",
    x: 230,
    y: 385,
    line: { x1: 318, y1: 291, x2: 260, y2: 360 },
  },
  {
    id: "remote-users",
    label: "Remote Users",
    x: 150,
    y: 200,
    line: { x1: 297, y1: 221, x2: 224, y2: 200 },
  },
];

export default function EnterpriseNetworkArchitectureDiagram() {
  const [hoveredId, setHoveredId] = useState(null);
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  return (
    <div className="w-full py-6">
      {/* ─── DESKTOP & TABLET DIAGRAM (md and up) ─── */}
      <div className="hidden md:flex flex-col items-center max-w-4xl mx-auto px-4 select-none">
        
        {/* Top Diagram Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-[#080357] tracking-tight mb-6 text-center">
          Integrated Enterprise Network Architecture
        </h3>

        {/* Radial Canvas (720px x 480px coordinate system) */}
        <div className="relative w-[720px] h-[460px]">
          {/* SVG Connector Lines Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 720 460"
          >
            {networkNodes.map((node) => {
              const isHovered = hoveredId === node.id || isCenterHovered;
              const isAnyHovered = hoveredId !== null || isCenterHovered;

              return (
                <g key={node.id}>
                  {/* Subtle hover glow line */}
                  {isHovered && (
                    <line
                      x1={node.line.x1}
                      y1={node.line.y1}
                      x2={node.line.x2}
                      y2={node.line.y2}
                      stroke="#080357"
                      strokeWidth="4"
                      strokeOpacity="0.25"
                    />
                  )}
                  {/* Main connecting line */}
                  <line
                    x1={node.line.x1}
                    y1={node.line.y1}
                    x2={node.line.x2}
                    y2={node.line.y2}
                    stroke={isHovered ? "#080357" : isAnyHovered ? "#cbd5e1" : "#94a3b8"}
                    strokeWidth={isHovered ? "2.5" : "1.75"}
                    className="transition-colors duration-200"
                  />
                  {/* Center circle anchor dot */}
                  <circle
                    cx={node.line.x1}
                    cy={node.line.y1}
                    r={isHovered ? "3.5" : "2.5"}
                    fill={isHovered ? "#080357" : "#0d1d3c"}
                    className="transition-all duration-200"
                  />
                  {/* Target card anchor dot */}
                  <circle
                    cx={node.line.x2}
                    cy={node.line.y2}
                    r={isHovered ? "3.5" : "2.5"}
                    fill={isHovered ? "#080357" : "#64748b"}
                    className="transition-all duration-200"
                  />
                </g>
              );
            })}
          </svg>

          {/* Center Hub: Enterprise Network */}
          <div
            onMouseEnter={() => setIsCenterHovered(true)}
            onMouseLeave={() => setIsCenterHovered(false)}
            className="absolute left-[294px] top-[174px] w-[132px] h-[132px] rounded-full bg-[#0d1d3c] border-2 border-[#1e2d4e] shadow-xl flex items-center justify-center text-center p-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#385185] z-20 group"
            style={{
              backgroundImage: "radial-gradient(#1c315e 1.2px, transparent 1.2px)",
              backgroundSize: "6px 6px",
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-white tracking-wide leading-tight">
                Enterprise
              </span>
              <span className="text-sm font-bold text-white tracking-wide leading-tight">
                Network
              </span>
            </div>
            {/* Hover aura */}
            <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
          </div>

          {/* 5 Surrounding Network Nodes */}
          {networkNodes.map((node) => {
            const isHovered = hoveredId === node.id;

            return (
              <div
                key={node.id}
                onMouseEnter={() => setHoveredId(node.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  left: `${node.x - 74}px`,
                  top: `${node.y - 25}px`,
                  backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                  backgroundSize: "5px 5px",
                }}
                className={`absolute w-[148px] h-[50px] rounded-2xl border flex items-center justify-center px-3 cursor-pointer select-none transition-all duration-200 z-10 ${
                  isHovered
                    ? "border-[#080357] shadow-lg -translate-y-0.5 bg-white text-[#080357] scale-105"
                    : "border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] text-[#1e293b] hover:border-[#080357]/50"
                }`}
              >
                <span className="text-xs lg:text-sm font-semibold tracking-normal text-center whitespace-nowrap">
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom Caption */}
        <p className="text-xs lg:text-sm text-slate-500 font-medium tracking-tight text-center mt-4">
          Every environment connected through one integrated, secure network architecture
        </p>
      </div>

      {/* ─── MOBILE RESPONSIVE DIAGRAM (screens under md) ─── */}
      <div className="flex md:hidden flex-col items-center max-w-sm mx-auto px-4">
        {/* Top: Diagram Title */}
        <h3 className="text-base font-bold text-[#080357] tracking-tight mb-5 text-center leading-snug">
          Integrated Enterprise Network Architecture
        </h3>

        {/* Center: Enterprise Network Hub */}
        <div
          className="w-full max-w-[200px] h-[64px] rounded-2xl bg-[#0d1d3c] border-2 border-[#1e2d4e] shadow-lg flex items-center justify-center text-center p-3 mb-5 relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(#1c315e 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        >
          <h4 className="text-sm font-bold text-white tracking-wide leading-tight">
            Enterprise Network
          </h4>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center text-[#7e92ac] mb-4">
          <ArrowDown size={18} className="animate-bounce" />
        </div>

        {/* 5 Environment Chips */}
        <div className="w-full grid grid-cols-2 gap-2.5">
          {networkNodes.map((node, idx) => (
            <div
              key={node.id}
              className={`flex items-center justify-center h-11 px-2.5 rounded-xl border border-[#94a3b8]/50 shadow-xs bg-[#fcfdfe] text-[#1e293b] ${
                idx === networkNodes.length - 1 ? "col-span-2 max-w-[180px] mx-auto w-full" : ""
              }`}
              style={{
                backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
                backgroundSize: "5px 5px",
              }}
            >
              <span className="text-xs font-semibold text-center leading-tight">
                {node.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Caption */}
        <p className="text-xs text-slate-500 font-medium tracking-tight text-center mt-5 leading-relaxed">
          Every environment connected through one integrated, secure network architecture
        </p>
      </div>
    </div>
  );
}
