"use client";

import React from "react";

export default function SocOperatingModelDiagram() {
  const parts = [
    {
      num: 1,
      title: "Centralized visibility",
      subtitle: "All telemetry lands in one place",
    },
    {
      num: 2,
      title: "Detection engineering",
      subtitle: "Detections built, tested and retired",
    },
    {
      num: 3,
      title: "MITRE ATT&CK framework",
      subtitle: "Coverage measured, blind spots named",
    },
    {
      num: 4,
      title: "Automation of the deterministic",
      subtitle: "Machines take the repeatable steps",
    },
    {
      num: 5,
      title: "Continuous tuning",
      subtitle: "False positives and coverage reviewed",
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
      {/* Top Navy Header Banner */}
      <div className="rounded-xl bg-[#1b2a47] px-5 py-3.5 text-center text-white mb-6">
        <h4 className="text-sm sm:text-base font-bold tracking-wide text-white">
          SOC operating model: five parts, each one depends on the others
        </h4>
      </div>

      {/* 5 Equal Cards in a Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {parts.map((part) => (
          <div
            key={part.num}
            className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col items-center text-center justify-between min-h-[170px]"
          >
            <div className="w-full flex flex-col items-center">
              {/* Number Circle */}
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1b2a47] text-white text-xs font-bold font-mono mb-3">
                {part.num}
              </div>

              {/* Title */}
              <h5 className="text-[13px] font-bold text-[#1b2a47] leading-snug">
                {part.title}
              </h5>
            </div>

            {/* Separator Line & Subtitle */}
            <div className="w-full mt-3 pt-3 border-t border-slate-100">
              <p className="text-xs text-slate-600 leading-tight">
                {part.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
