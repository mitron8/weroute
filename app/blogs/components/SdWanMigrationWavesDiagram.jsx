"use client";

import React from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, BarChart3, Wifi, Layers } from "lucide-react";

export default function SdWanMigrationWavesDiagram() {
  const waves = [
    {
      wave: "01",
      title: "Baseline Audit",
      badge: "Pre-Pilot Metrics",
      desc: "Measure monthly circuit costs, site provisioning lead times, top SaaS response latencies, and monthly change ticket counts under current MPLS.",
      kpi: "Defines the verifiable target ROI baseline",
      color: "border-slate-200 bg-slate-50 text-slate-900"
    },
    {
      wave: "02",
      title: "Pilot Site Waves",
      badge: "Zero-Risk Coexistence",
      desc: "Deploy edge routers at 3-5 representative pilot branches alongside MPLS circuits. Validate Zero Touch Provisioning (ZTP) and dual-underlay stability.",
      kpi: "MPLS circuits remain 100% active as instant rollback",
      color: "border-blue-200 bg-blue-50/50 text-blue-900"
    },
    {
      wave: "03",
      title: "Policy & SLA Tuning",
      badge: "App-Aware Steering",
      desc: "Tune dynamic path selection probes (jitter, latency, loss). Configure tight thresholds for voice/video and broad thresholds for bulk transfers.",
      kpi: "Eliminates brownouts & verifies failover in < 1s",
      color: "border-indigo-200 bg-indigo-50/50 text-indigo-900"
    },
    {
      wave: "04",
      title: "Regional Cutover",
      badge: "Scale Deployment",
      desc: "Execute phased migration waves by geographic cluster and application priority. Use central templates to push validated configurations to all sites.",
      kpi: "Central orchestration replaces per-device CLI edits",
      color: "border-cyan-200 bg-cyan-50/50 text-cyan-900"
    },
    {
      wave: "05",
      title: "MPLS Retirement",
      badge: "Value Realization",
      desc: "Cancel expensive legacy MPLS contracts only after the soak period passes all SLA, security, and application performance targets.",
      kpi: "Locks in 40-60% recurring bandwidth cost reduction",
      color: "border-emerald-200 bg-emerald-50/50 text-emerald-900"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200/90 bg-[#fbfcfd] p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 font-mono">
            Phased Rollout Methodology
          </span>
          <h4 className="text-base sm:text-lg font-bold text-[#050849]">
            Enterprise SD-WAN Migration Lifecycle: From Pilot to MPLS Retirement
          </h4>
        </div>
        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-[11px] font-semibold text-emerald-800">
          Rollback-First Safety Model
        </span>
      </div>

      {/* Stepper Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {waves.map((w, idx) => (
          <div
            key={w.wave}
            className={`rounded-xl border p-3.5 flex flex-col justify-between ${w.color} transition-all hover:shadow-xs`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white border border-slate-200">
                  Wave {w.wave}
                </span>
                <span className="text-[10px] font-semibold text-slate-500">
                  Step {idx + 1}
                </span>
              </div>

              <h5 className="text-sm font-bold leading-snug">{w.title}</h5>
              <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700 mb-2">{w.badge}</div>

              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-2">
                {w.desc}
              </p>
            </div>

            <div className="mt-3 rounded-lg bg-white/90 border border-slate-200 p-2 text-[10px] font-medium text-slate-800 flex items-start gap-1">
              <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Target Gate:</span> {w.kpi}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Honest Business Case Checklist */}
      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3.5 text-xs text-slate-700">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
          <div className="p-2 rounded bg-slate-50">
            <strong className="block text-[#050849] font-bold">1. Bandwidth Unit Cost</strong>
            <span>Broadband costs substantially less per Mbps than dedicated MPLS.</span>
          </div>
          <div className="p-2 rounded bg-slate-50">
            <strong className="block text-[#050849] font-bold">2. Site Provisioning</strong>
            <span>ZTP shrinks new branch network setup from weeks to hours.</span>
          </div>
          <div className="p-2 rounded bg-slate-50">
            <strong className="block text-[#050849] font-bold">3. App Performance</strong>
            <span>Direct local breakout cuts round-trip latency for Microsoft 365.</span>
          </div>
          <div className="p-2 rounded bg-slate-50">
            <strong className="block text-[#050849] font-bold">4. Operational Agility</strong>
            <span>Centralized policy pushes changes across 100+ sites simultaneously.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
