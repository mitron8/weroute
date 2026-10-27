"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function SoarWorkflowDiagram() {
  const actions = [
    {
      title: "Automatic account lock",
      subtitle: "For: brute force attempts",
    },
    {
      title: "Endpoint isolation",
      subtitle: "For: ransomware containment",
    },
    {
      title: "IP and domain blocking",
      subtitle: "For: malicious IPs and domains",
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
        
        {/* ─── 1. DETECTION ─── */}
        <div className="w-full lg:w-[22%]">
          <div className="rounded-xl bg-[#1b2a47] p-5 text-center text-white flex flex-col justify-center min-h-[96px]">
            <h5 className="text-base font-bold text-white">Detection</h5>
            <p className="mt-1 text-xs text-slate-200">alert fires</p>
          </div>
        </div>

        {/* Arrow to Middle */}
        <div className="hidden lg:flex items-center justify-center text-[#1b2a47]">
          <ArrowRight size={22} />
        </div>
        <div className="flex lg:hidden items-center justify-center text-[#1b2a47] rotate-90">
          <ArrowRight size={20} />
        </div>

        {/* ─── 2. ALERT ENRICHMENT AND NOTIFICATION ─── */}
        <div className="w-full lg:w-[32%]">
          <div className="rounded-xl border-2 border-[#1b2a47] bg-[#eef4f9] p-5 text-center flex flex-col justify-center min-h-[96px]">
            <h5 className="text-sm sm:text-[15px] font-bold text-[#1b2a47] leading-snug">
              Alert enrichment and notification
            </h5>
            <p className="mt-1.5 text-xs text-slate-600">
              Context added, team notified
            </p>
          </div>
        </div>

        {/* Branching Connector Arrow (Desktop) */}
        <div className="hidden lg:flex items-center text-[#1b2a47] relative h-56 w-12 shrink-0">
          <svg
            className="w-full h-full text-[#1b2a47]"
            viewBox="0 0 48 220"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {/* Horizontal line out from middle node */}
            <path d="M 0 110 L 20 110" />
            {/* Vertical spine */}
            <path d="M 20 36 L 20 184" />
            {/* Branch 1 to top */}
            <path d="M 20 36 L 40 36" />
            {/* Branch 2 to middle */}
            <path d="M 20 110 L 40 110" />
            {/* Branch 3 to bottom */}
            <path d="M 20 184 L 40 184" />
            {/* Arrowheads */}
            <polygon points="40,32 48,36 40,40" fill="currentColor" stroke="none" />
            <polygon points="40,106 48,110 40,114" fill="currentColor" stroke="none" />
            <polygon points="40,180 48,184 40,188" fill="currentColor" stroke="none" />
          </svg>
        </div>

        {/* Mobile Arrow down */}
        <div className="flex lg:hidden items-center justify-center text-[#1b2a47] rotate-90">
          <ArrowRight size={20} />
        </div>

        {/* ─── 3. THREE RESPONSE ACTIONS ─── */}
        <div className="w-full lg:w-[38%] space-y-3.5">
          {actions.map((act, idx) => (
            <div
              key={idx}
              className="rounded-xl border-2 border-[#1b2a47] bg-white px-5 py-3.5 text-center"
            >
              <h6 className="text-sm font-bold text-[#1b2a47] leading-snug">
                {act.title}
              </h6>
              <p className="mt-1 text-xs text-slate-600">
                {act.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
