"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function NoFreezeAdoptionDiagram() {
  const steps = [
    { num: "1", title: "Inventory", desc: "Rank by risk and change rate" },
    { num: "2", title: "Import a tier", desc: "Import blocks, generated config" },
    { num: "3", title: "Plan to zero", desc: "No changes means code matches reality" },
    { num: "4", title: "Lock the tier", desc: "Changes only through pipeline" },
    { num: "5", title: "Repeat", desc: "Next tier" }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="mb-5 text-center">
        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700">
          Zero-Downtime / No-Freeze IaC Adoption Method
        </h4>
        <p className="mt-1 text-xs text-[#050849]/60">
          Adopting infrastructure as code progressively without code freezes or downtime
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {/* 5 Steps horizontally */}
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

        {/* Bottom Green Banner */}
        <div className="rounded-xl border border-emerald-300 bg-emerald-50/90 p-3.5 text-center">
          <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
            No freeze required
          </div>
          <p className="text-xs text-emerald-950 mt-0.5">
            Import adopts existing resources in place. Each tier is safe before the next begins.
          </p>
        </div>
      </div>
    </div>
  );
}
