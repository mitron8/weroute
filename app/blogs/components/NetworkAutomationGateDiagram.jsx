"use client";

import React from "react";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";

export default function NetworkAutomationGateDiagram() {
  const steps = [
    { num: "1", title: "Render", desc: "Build config from template and data" },
    { num: "2", title: "Diff", desc: "Compare with running config" },
    { num: "3", title: "Back up", desc: "Save running config" },
    { num: "4", title: "Apply", desc: "One device or pair first" },
    { num: "5", title: "Verify", desc: "Reachability and routing" }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="mb-5 text-center">
        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700">
          Network Change Gating & Verification Pipeline
        </h4>
        <p className="mt-1 text-xs text-[#050849]/60">
          Strict pre-flight diffing, atomic backup, and automated rollback verification
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {/* Top 5 Steps Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 items-stretch">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-center">
              <div className="w-full flex flex-col justify-center items-center text-center rounded-xl border border-slate-200 bg-slate-50/70 p-3 min-h-[92px]">
                <div className="text-xs font-bold text-[#050849] flex items-center gap-1">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700">
                    {step.num}
                  </span>
                  <span>{step.title}</span>
                </div>
                <p className="mt-1 text-[11px] text-[#050849]/70 leading-tight">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#050849]/40 pointer-events-none">
                  <ArrowRight size={13} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Verification Outcomes Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/80 p-3 text-center">
            <div className="text-xs font-bold text-emerald-900 flex items-center justify-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>Checks pass</span>
            </div>
            <p className="text-xs text-emerald-950 mt-0.5">
              Keep it, next wave
            </p>
          </div>

          <div className="rounded-xl border border-amber-300 bg-amber-50/80 p-3 text-center">
            <div className="text-xs font-bold text-amber-900 flex items-center justify-center gap-1.5">
              <RotateCcw size={13} />
              <span>Checks fail</span>
            </div>
            <p className="text-xs text-amber-950 mt-0.5">
              Restore the backup automatically
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center text-xs text-[#050849]/80 font-medium">
          Network changes get a stricter gate because a bad change can cut the path automation uses to reach the device
        </div>
      </div>
    </div>
  );
}
