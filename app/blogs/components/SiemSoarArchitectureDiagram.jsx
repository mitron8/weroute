"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function SiemSoarArchitectureDiagram() {
  const steps = [
    {
      title: "Log sources",
      desc: "Servers, databases, network devices",
      theme: "light",
    },
    {
      title: "Google Chronicle SIEM",
      desc: "Central log monitoring and correlation",
      theme: "dark",
    },
    {
      title: "MITRE ATT&CK aligned detections",
      desc: "Real-time detection use cases",
      theme: "light",
    },
    {
      title: "SOAR workflows",
      desc: "Automated response playbooks",
      theme: "dark",
    },
    {
      title: "Response actions",
      desc: "Lock, isolate, block, notify",
      theme: "light",
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
      
      {/* ─── 5 HORIZONTAL NODES ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative items-stretch">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex items-center">
            <div
              className={`w-full flex flex-col justify-center items-center text-center rounded-xl p-4 min-h-[105px] ${
                step.theme === "dark"
                  ? "bg-[#1b2a47] text-white"
                  : "bg-[#eef4f9] border border-slate-200 text-[#1b2a47]"
              }`}
            >
              <h5
                className={`text-sm font-bold leading-snug ${
                  step.theme === "dark" ? "text-white" : "text-[#1b2a47]"
                }`}
              >
                {step.title}
              </h5>
              <p
                className={`mt-1.5 text-xs leading-tight ${
                  step.theme === "dark" ? "text-slate-200" : "text-[#1b2a47]/75"
                }`}
              >
                {step.desc}
              </p>
            </div>

            {/* Connecting Arrow between nodes */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#1b2a47] pointer-events-none">
                <ArrowRight size={14} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ─── VERTICAL DASHED LINES FROM NODES 2 & 4 TO XDR ─── */}
      <div className="hidden lg:grid grid-cols-5 gap-3.5 h-6">
        <div /> {/* column 1 empty */}
        {/* column 2 Chronicle */}
        <div className="flex justify-center">
          <div className="w-px h-full border-l border-dashed border-[#1b2a47]" />
        </div>
        <div /> {/* column 3 empty */}
        {/* column 4 SOAR */}
        <div className="flex justify-center">
          <div className="w-px h-full border-l border-dashed border-[#1b2a47]" />
        </div>
        <div /> {/* column 5 empty */}
      </div>

      {/* ─── MIDDLE BAR: TREND MICRO XDR ─── */}
      <div className="mt-3 lg:mt-0 rounded-xl border-2 border-[#1b2a47] bg-[#eef4f9] px-5 py-3.5 text-center">
        <p className="text-sm font-bold text-[#1b2a47]">
          Trend Micro XDR: endpoint and server protection with behavioral threat detection
        </p>
      </div>

      {/* ─── BOTTOM BAR: CUSTOM DASHBOARDS ─── */}
      <div className="mt-3 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-center">
        <p className="text-sm text-[#1b2a47]">
          Custom dashboards and reporting for real-time monitoring and insights
        </p>
      </div>

    </div>
  );
}
