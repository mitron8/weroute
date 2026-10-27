"use client";

import React from "react";
import { ArrowLeftRight, UserCheck, Users, Briefcase } from "lucide-react";

export default function EngagementModelsSpectrumDiagram() {
  const models = [
    {
      title: "Staff augmentation",
      subtitle: "Individuals join your team",
      directsDailyWork: "Your managers",
      ownsDelivery: "You",
      managementLoad: "High",
      loadColor: "text-amber-700 bg-amber-50 border-amber-200",
    },
    {
      title: "Dedicated team",
      subtitle: "A formed team with its own lead",
      directsDailyWork: "Partner team lead",
      ownsDelivery: "Shared or transferred",
      managementLoad: "Medium",
      loadColor: "text-blue-700 bg-blue-50 border-blue-200",
    },
    {
      title: "Managed outcome",
      subtitle: "Partner owns scope and result",
      directsDailyWork: "The partner",
      ownsDelivery: "The partner",
      managementLoad: "Low",
      loadColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
          Accountability & Operating Comparison
        </span>
        <span className="text-[11px] text-[#050849]/60 font-medium">
          Who owns the outcome dictates the engagement
        </span>
      </div>

      {/* 3 Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {models.map((model, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-slate-50/50 p-4 transition-all hover:border-blue-400 hover:shadow-xs"
          >
            {/* Header */}
            <div className="rounded-lg bg-[#050849] p-3 text-center text-white">
              <h4 className="text-sm font-bold tracking-wide">{model.title}</h4>
              <p className="mt-0.5 text-[11px] text-slate-300">{model.subtitle}</p>
            </div>

            {/* Spec rows */}
            <div className="mt-4 space-y-2.5 text-xs">
              <div className="rounded-lg bg-white p-2.5 border border-slate-200/80">
                <span className="text-[10px] uppercase font-bold text-[#050849]/50 block">
                  Directs daily work:
                </span>
                <p className="mt-0.5 font-semibold text-[#050849]">
                  {model.directsDailyWork}
                </p>
              </div>

              <div className="rounded-lg bg-white p-2.5 border border-slate-200/80">
                <span className="text-[10px] uppercase font-bold text-[#050849]/50 block">
                  Owns delivery:
                </span>
                <p className="mt-0.5 font-semibold text-[#050849]">
                  {model.ownsDelivery}
                </p>
              </div>

              <div className="rounded-lg bg-white p-2.5 border border-slate-200/80 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-[#050849]/50">
                  Management load:
                </span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${model.loadColor}`}>
                  {model.managementLoad}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accountability Spectrum Line */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between text-xs font-bold text-[#050849]/80 mb-2">
          <span className="flex items-center gap-1.5 text-blue-800">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            You are accountable
          </span>
          <span className="flex items-center gap-1.5 text-emerald-800">
            The partner is accountable
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
          </span>
        </div>

        {/* Directional gradient bar */}
        <div className="relative h-2 w-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-white bg-blue-700 shadow-xs" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-white bg-emerald-700 shadow-xs" />
        </div>
      </div>

      {/* Amber Callout Box */}
      <div className="mt-5 rounded-xl border border-amber-300/80 bg-amber-50/80 px-4 py-2.5 text-center text-xs font-semibold text-amber-900 shadow-2xs">
        Accountability decides the model. Headcount and rate follow from it.
      </div>
    </div>
  );
}
