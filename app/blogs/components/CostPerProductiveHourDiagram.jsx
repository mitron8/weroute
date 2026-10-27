"use client";

import React from "react";

export default function CostPerProductiveHourDiagram() {
  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="mb-4 text-center">
        <h4 className="text-sm font-bold text-[#050849]">
          Hypothetical cost per productive hour (26 weeks, assumed figures)
        </h4>
        <p className="mt-1 text-xs text-[#050849]/60">
          Comparing billable rate vs. internal senior management draw
        </p>
      </div>

      <div className="mt-6 space-y-6 max-w-2xl mx-auto">
        {/* Engineer A */}
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-[#050849] mb-1.5">
            <span className="font-bold">Engineer A ($40/hr billable)</span>
            <span className="font-mono text-sm font-extrabold text-[#050849]">$77.38 / hr total</span>
          </div>
          {/* Stacked Bar */}
          <div className="flex h-10 w-full overflow-hidden rounded-xl border border-slate-300 text-xs font-bold text-white shadow-2xs">
            <div
              style={{ width: "64%" }}
              className="flex items-center justify-center bg-[#1e488f] px-2 text-center"
              title="Rate cost per productive hour: $49.52"
            >
              <span>$49.52</span>
            </div>
            <div
              style={{ width: "36%" }}
              className="flex items-center justify-center bg-[#fed7aa] text-[#7c2d12] px-2 text-center border-l border-amber-300"
              title="Internal senior time per productive hour: $27.86"
            >
              <span>$27.86</span>
            </div>
          </div>
          <div className="mt-1 flex justify-between text-[11px] text-[#050849]/60">
            <span>840 productive hours delivered</span>
            <span>10 hrs/wk senior management overhead</span>
          </div>
        </div>

        {/* Engineer B */}
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-[#050849] mb-1.5">
            <span className="font-bold">Engineer B ($60/hr billable)</span>
            <span className="font-mono text-sm font-extrabold text-emerald-800">$68.45 / hr total</span>
          </div>
          {/* Stacked Bar */}
          <div className="flex h-10 w-full overflow-hidden rounded-xl border border-slate-300 text-xs font-bold shadow-2xs">
            <div
              className="flex-1 flex items-center justify-center bg-[#1e488f] text-white px-2 text-center"
              title="Rate cost per productive hour: $63.67"
            >
              <span>$63.67</span>
            </div>
            <div
              className="w-[8%] min-w-[48px] shrink-0 flex items-center justify-center bg-[#fed7aa] text-[#7c2d12] px-1 text-[11px] text-center border-l border-amber-300"
              title="Internal senior time per productive hour: $4.78"
            >
              <span>$4.78</span>
            </div>
          </div>
          <div className="mt-1 flex justify-between text-[11px] text-[#050849]/60">
            <span>980 productive hours delivered (+140 hrs)</span>
            <span>2 hrs/wk senior management overhead</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-5 border-t border-slate-100 pt-4 text-xs font-medium text-[#050849]/80">
        <div className="flex items-center gap-2">
          <span className="h-3 w-4 rounded-xs bg-[#1e488f]" />
          <span>Rate cost per productive hour</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-4 rounded-xs bg-[#fed7aa] border border-amber-300" />
          <span>Internal senior time per productive hour</span>
        </div>
      </div>

      {/* Summary Note */}
      <div className="mt-4 rounded-lg bg-slate-50 py-2 px-3 text-center text-xs font-semibold text-[#050849]/80 border border-slate-200">
        The lower rate carries the higher cost per productive hour
      </div>
    </div>
  );
}
