"use client";

import React, { useState } from "react";
import { Search, Network, Globe, CheckCircle2, ArrowRight } from "lucide-react";

export default function NetworkModernizationPhasesDiagram() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const phases = [
    {
      num: "01",
      badge: "Discovery",
      title: "Assess & Baseline",
      icon: Search,
      deliverables: [
        "East-west vs north-south traffic ratio",
        "Configuration drift & standards audit",
        "Application dependency mapping",
        "Target latency & provisioning KPIs"
      ],
      rule: "Baseline latency & traffic data proven before design"
    },
    {
      num: "02",
      badge: "Architecture",
      title: "Spine-Leaf Fabric Redesign",
      icon: Network,
      deliverables: [
        "Predictable 1-hop leaf-to-leaf latency",
        "EVPN-VXLAN overlay for tenant mobility",
        "BGP routed underlay replacing STP",
        "Non-blocking bandwidth expansion"
      ],
      rule: "Run old and new in parallel with defined cutover points"
    },
    {
      num: "03",
      badge: "Transition",
      title: "Zero-Downtime IPv6 Migration",
      icon: Globe,
      deliverables: [
        "Dual-stack coexistence (RFC 4213)",
        "Addressing plan before touching hardware",
        "Sequential gate: Core → Edge → Services",
        "NAT64 / DNS64 for IPv4-only targets"
      ],
      rule: "IPv4 kept in place as an instantaneous fallback"
    },
    {
      num: "04",
      badge: "Governance",
      title: "Automation & Validation",
      icon: CheckCircle2,
      deliverables: [
        "Role-based configuration templates",
        "Zero-drift source of truth models",
        "Pre-deployment workspace validation",
        "Provisioning drops from days to < 1 hour"
      ],
      rule: "Templates remove manual build; validation stops errors"
    }
  ];

  return (
    <div className="my-8 w-full rounded-2xl border border-slate-200/90 bg-[#fbfcfd] p-5 sm:p-7 shadow-xs">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 font-mono">
            Architecture Blueprint • 4-Phase Lifecycle
          </span>
          <h4 className="text-base sm:text-lg font-bold text-[#050849] mt-0.5">
            Enterprise Network Modernization Roadmap
          </h4>
        </div>
        <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-semibold text-blue-700">
          Zero-Downtime Methodology
        </span>
      </div>

      {/* 4 Phases Flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {phases.map((phase, idx) => {
          const Icon = phase.icon;
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={phase.num}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`rounded-xl border p-4 transition-all duration-200 flex flex-col justify-between ${
                isHovered
                  ? "border-[#050849] bg-white shadow-md -translate-y-1"
                  : "border-slate-200/90 bg-white shadow-2xs hover:border-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Phase {phase.num}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg transition-colors ${
                      isHovered ? "bg-[#050849] text-white" : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    <Icon size={14} />
                  </div>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 mb-1">
                  {phase.badge}
                </div>
                <h5 className="text-sm font-bold text-[#050849] leading-snug mb-3">
                  {phase.title}
                </h5>

                <ul className="space-y-1.5 text-xs text-[#050849]/80 border-t border-slate-100 pt-2.5">
                  {phase.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-600 shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-lg bg-slate-50 border border-slate-200/60 p-2 text-[10px] text-slate-600 font-medium">
                <span className="font-bold text-[#050849]">Gate Rule:</span> {phase.rule}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-xl border border-blue-200/80 bg-blue-50/60 p-3.5 flex items-center justify-between gap-3 text-xs text-[#050849]">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-bold">Golden Modernization Rule:</span>
          <span>Never attempt a forklift replacement. Fund phase-by-phase with validated rollback at each gate.</span>
        </div>
      </div>
    </div>
  );
}
