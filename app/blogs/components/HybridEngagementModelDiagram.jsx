"use client";

import React from "react";
import { ArrowDown, ArrowLeft, Users, Briefcase } from "lucide-react";

export default function HybridEngagementModelDiagram() {
  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="mb-5 text-center">
        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700">
          Hybrid Engagement Operating Structure
        </h4>
        <p className="mt-1 text-xs text-[#050849]/60">
          Pairing a dedicated platform core team with targeted specialist augmentation
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {/* Top: Your Organization */}
        <div className="rounded-xl bg-[#050849] p-4 text-center text-white shadow-xs">
          <div className="text-sm font-bold tracking-wide">Your organization</div>
          <p className="text-xs text-slate-300 mt-0.5">Owns the outcome and the contract</p>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center text-[#050849]/50">
          <ArrowDown size={18} />
        </div>

        {/* Middle Two-Tier Split with Dedicated Central Connector */}
        <div className="flex flex-col md:flex-row items-stretch gap-3">
          
          {/* Left: Dedicated Core Team */}
          <div className="flex-1 rounded-xl border-2 border-blue-600/70 bg-blue-50/40 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider">
                <Users size={14} className="text-blue-700" />
                <span>Dedicated core team</span>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-[#050849]">Team lead</div>
                  <p className="text-[11px] text-[#050849]/70 mt-1 leading-snug">
                    Owns delivery for the whole team
                  </p>
                </div>

                <div className="rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-[#050849]">Internal process</div>
                  <p className="text-[11px] text-[#050849]/70 mt-1 leading-snug">
                    Definition of done and review rules
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-blue-200/60 text-[11px] font-medium text-blue-800">
              Builds platform, preserves context, manages standard
            </div>
          </div>

          {/* Center Connector (Desktop) */}
          <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-28 px-1 text-center">
            <span className="text-[10px] font-bold text-blue-900 bg-white border border-blue-200 px-2.5 py-1 rounded-full shadow-2xs whitespace-nowrap mb-1.5">
              work to its process
            </span>
            <div className="flex items-center text-blue-600">
              <ArrowLeft size={16} className="text-blue-700 stroke-[2.5]" />
              <div className="w-10 border-t-2 border-dashed border-blue-400" />
            </div>
          </div>

          {/* Mobile Connector */}
          <div className="flex md:hidden items-center justify-center gap-1.5 py-1 text-center">
            <span className="text-[10px] font-bold text-blue-900 bg-white border border-blue-200 px-3 py-1 rounded-full shadow-2xs">
              ↑ Specialists work to core team process
            </span>
          </div>

          {/* Right: Augmented Specialists */}
          <div className="w-full md:w-56 lg:w-64 shrink-0 rounded-xl border border-emerald-300 bg-emerald-50/50 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                <Briefcase size={14} className="text-emerald-700" />
                <span>Augmented specialists</span>
              </div>

              <div className="mt-3 space-y-1.5 text-xs">
                <div className="rounded-md bg-white px-3 py-2 border border-emerald-200 text-[#050849] font-medium shadow-2xs">
                  MLOps engineer
                </div>
                <div className="rounded-md bg-white px-3 py-2 border border-emerald-200 text-[#050849] font-medium shadow-2xs">
                  Network automation
                </div>
                <div className="rounded-md bg-white px-3 py-2 border border-emerald-200 text-[#050849] font-medium shadow-2xs">
                  Security engineer
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-md bg-emerald-100/90 px-2.5 py-1.5 text-center text-[11px] font-bold text-emerald-900">
              Fixed end date
            </div>
          </div>
        </div>

        {/* Bottom Banner: Governance for the Hybrid */}
        <div className="rounded-xl border border-amber-300 bg-amber-50/90 p-3.5 text-center shadow-2xs">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
            Governance for the hybrid
          </div>
          <p className="mt-1 text-xs font-medium text-amber-950">
            One accountable owner • One standard • Scoped access • Planned exit and handover
          </p>
        </div>

      </div>
    </div>
  );
}
