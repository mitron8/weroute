"use client";

import React from "react";
import { DollarSign, TrendingDown, Repeat, ShieldCheck, Tag, Zap, Database, Clock } from "lucide-react";

export default function FinopsOperatingCycleDiagram() {
  const phases = [
    {
      num: "01",
      name: "Inform",
      badge: "Visibility & Allocation",
      icon: Tag,
      color: "border-blue-200 bg-blue-50/40 text-blue-900",
      actions: [
        "Enforce mandatory tagging (App, Owner, Env, Cost Center)",
        "Automated monthly showback reports to engineering leads",
        "Forecast cloud expenditure against business growth metrics",
        "Track unit economics per transaction or active user"
      ]
    },
    {
      num: "02",
      name: "Optimize",
      badge: "Rates & Utilization",
      icon: TrendingDown,
      color: "border-emerald-200 bg-emerald-50/40 text-emerald-900",
      actions: [
        "Right-size compute & database instances to measured load",
        "Commitment pricing (Reserved & Savings Plans: up to 72% off)",
        "Automated autoscaling elasticity instead of peak sizing",
        "Storage lifecycle tiering & non-production shutdown schedules"
      ]
    },
    {
      num: "03",
      name: "Operate",
      badge: "Governance & Culture",
      icon: Repeat,
      color: "border-indigo-200 bg-indigo-50/40 text-indigo-900",
      actions: [
        "Every single cloud line-item assigned to one named owner",
        "Monthly audit of untagged resources and orphaned volumes",
        "Finance, engineering, and product collaborate continuously",
        "Incorporate unit cost targets into engineering sprint goals"
      ]
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200/90 bg-[#fbfcfd] p-5 sm:p-7 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 font-mono">
            Cloud Cost Governance
          </span>
          <h4 className="text-base sm:text-lg font-bold text-[#050849]">
            The Continuous FinOps Operating Cycle: Inform → Optimize → Operate
          </h4>
        </div>
        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-[11px] font-semibold text-emerald-800">
          FinOps Foundation Standard
        </span>
      </div>

      {/* 3 Phases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {phases.map((p) => {
          const Icon = p.icon;

          return (
            <div
              key={p.num}
              className={`rounded-xl border p-4 flex flex-col justify-between ${p.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                    Phase {p.num}
                  </span>
                  <div className="p-1.5 rounded-md bg-white border border-slate-200 text-blue-700">
                    <Icon size={14} />
                  </div>
                </div>

                <h5 className="text-sm font-bold text-[#050849] leading-snug">{p.name}</h5>
                <span className="text-[11px] font-semibold text-blue-700 block mb-2">{p.badge}</span>

                <ul className="space-y-1.5 text-xs text-slate-700 border-t border-slate-200/60 pt-2.5">
                  {p.actions.map((act, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-600 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-lg bg-white/90 border border-slate-200 p-2 text-[10px] font-bold text-center text-[#050849]">
                Continuous Feedback Loop
              </div>
            </div>
          );
        })}
      </div>

      {/* Key Levers Grid */}
      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
          Proven Levers to Eliminate the 29% Industry Cloud Spend Waste (Flexera 2026)
        </h5>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
          <div className="p-2 rounded bg-slate-50 border border-slate-100">
            <span className="font-bold text-[#050849] block">Right-Sizing</span>
            <span className="text-[10px] text-slate-500">Match CPU to load</span>
          </div>
          <div className="p-2 rounded bg-slate-50 border border-slate-100">
            <span className="font-bold text-[#050849] block">Savings Plans</span>
            <span className="text-[10px] text-slate-500">Up to 72% discount</span>
          </div>
          <div className="p-2 rounded bg-slate-50 border border-slate-100">
            <span className="font-bold text-[#050849] block">Autoscaling</span>
            <span className="text-[10px] text-slate-500">Elastic sizing</span>
          </div>
          <div className="p-2 rounded bg-slate-50 border border-slate-100">
            <span className="font-bold text-[#050849] block">Storage Tiering</span>
            <span className="text-[10px] text-slate-500">Move cold data</span>
          </div>
          <div className="p-2 rounded bg-slate-50 border border-slate-100">
            <span className="font-bold text-[#050849] block">Dev Shutdowns</span>
            <span className="text-[10px] text-slate-500">Off-hours savings</span>
          </div>
          <div className="p-2 rounded bg-slate-50 border border-slate-100">
            <span className="font-bold text-[#050849] block">Architecture</span>
            <span className="text-[10px] text-slate-500">Serverless &amp; PaaS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
