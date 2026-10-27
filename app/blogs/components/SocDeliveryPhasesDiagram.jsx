"use client";

import React from "react";
import { ArrowRight, CornerRightDown } from "lucide-react";

export default function SocDeliveryPhasesDiagram() {
  const row1 = [
    {
      num: 1,
      title: "Assessment",
      desc: "Audit of log sources, gaps and the response-time baseline",
      theme: "dark",
    },
    {
      num: 2,
      title: "Centralized SIEM",
      desc: "Google Chronicle as the single telemetry layer",
      theme: "light",
    },
    {
      num: 3,
      title: "Detection engineering",
      desc: "Rules mapped to ATT&CK and tuned for known-benign activity",
      theme: "light",
    },
  ];

  const row2 = [
    {
      num: 4,
      title: "XDR integration",
      desc: "Trend Micro XDR sends high-fidelity endpoint signal",
      theme: "light",
    },
    {
      num: 5,
      title: "SOAR playbooks",
      desc: "Lock accounts, isolate endpoints, block malicious IPs and domains",
      theme: "light",
    },
    {
      num: 6,
      title: "Dashboards, optimization",
      desc: "Continuous tuning, then managed operations",
      theme: "dark",
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
      {/* ─── ROW 1 (PHASES 1, 2, 3) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative items-stretch">
        {row1.map((phase, idx) => (
          <div key={phase.num} className="relative flex items-center">
            <div
              className={`w-full rounded-xl p-5 min-h-[120px] flex flex-col justify-start ${
                phase.theme === "dark"
                  ? "bg-[#1b2a47] text-white"
                  : "bg-[#eef4f9] border border-slate-200 text-[#1b2a47]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold font-mono ${
                    phase.theme === "dark"
                      ? "bg-white text-[#1b2a47]"
                      : "bg-[#1b2a47] text-white"
                  }`}
                >
                  {phase.num}
                </span>
                <h5
                  className={`text-sm font-bold ${
                    phase.theme === "dark" ? "text-white" : "text-[#1b2a47]"
                  }`}
                >
                  {phase.title}
                </h5>
              </div>
              <p
                className={`mt-2.5 text-xs leading-relaxed ${
                  phase.theme === "dark" ? "text-slate-200" : "text-[#1b2a47]/75"
                }`}
              >
                {phase.desc}
              </p>
            </div>

            {/* Connecting Arrow */}
            {idx < row1.length - 1 && (
              <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#1b2a47] pointer-events-none">
                <ArrowRight size={14} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Down connector between Row 1 and Row 2 */}
      <div className="hidden md:flex justify-end pr-16 py-2 text-[#1b2a47]">
        <div className="w-px h-6 border-l-2 border-[#1b2a47]" />
      </div>

      {/* ─── ROW 2 (PHASES 4, 5, 6) ─── */}
      <div className="mt-3 md:mt-0 grid grid-cols-1 md:grid-cols-3 gap-3 relative items-stretch">
        {row2.map((phase, idx) => (
          <div key={phase.num} className="relative flex items-center">
            <div
              className={`w-full rounded-xl p-5 min-h-[120px] flex flex-col justify-start ${
                phase.theme === "dark"
                  ? "bg-[#1b2a47] text-white"
                  : "bg-[#eef4f9] border border-slate-200 text-[#1b2a47]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold font-mono ${
                    phase.theme === "dark"
                      ? "bg-white text-[#1b2a47]"
                      : "bg-[#1b2a47] text-white"
                  }`}
                >
                  {phase.num}
                </span>
                <h5
                  className={`text-sm font-bold ${
                    phase.theme === "dark" ? "text-white" : "text-[#1b2a47]"
                  }`}
                >
                  {phase.title}
                </h5>
              </div>
              <p
                className={`mt-2.5 text-xs leading-relaxed ${
                  phase.theme === "dark" ? "text-slate-200" : "text-[#1b2a47]/75"
                }`}
              >
                {phase.desc}
              </p>
            </div>

            {/* Connecting Arrow */}
            {idx < row2.length - 1 && (
              <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#1b2a47] pointer-events-none">
                <ArrowRight size={14} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
