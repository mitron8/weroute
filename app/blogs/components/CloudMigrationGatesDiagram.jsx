"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Database, Layers, DollarSign, FileCheck, Server } from "lucide-react";

export default function CloudMigrationGatesDiagram() {
  const [activeGate, setActiveGate] = useState(null);

  const gates = [
    {
      gate: "01",
      name: "Application Disposition",
      framework: "The 7 Rs Framework",
      icon: Server,
      desc: "Classify every single application: Retire zombies (<5% CPU), Retain blockers, Rehost, Relocate, Repurchase, Replatform, or Refactor.",
      rule: "Decide per application, never per estate. Retire first, refactor last.",
      color: "border-slate-200 bg-slate-50/60 text-slate-900"
    },
    {
      gate: "02",
      name: "Dependency Mapping",
      framework: "Traffic & Process Telemetry",
      icon: Layers,
      desc: "Observe real network flows, active listening ports, and periodic batch jobs. Cluster interrelated applications into cohesive Move Groups.",
      rule: "Undocumented dependencies cause 80%+ of cutover outages.",
      color: "border-blue-200 bg-blue-50/60 text-blue-900"
    },
    {
      gate: "03",
      name: "Governed Landing Zone",
      framework: "AWS Control Tower / Azure CAF",
      icon: ShieldCheck,
      desc: "Establish multi-account structures, zero-trust IAM identity, network routing, preventive guardrails, and mandatory tagging standards.",
      rule: "Build the landing zone before the first migration wave lands.",
      color: "border-indigo-200 bg-indigo-50/60 text-indigo-900"
    },
    {
      gate: "04",
      name: "Data Gravity & Sequencing",
      framework: "Latency & Egress Control",
      icon: Database,
      desc: "Align data stores with application consumers. Move heavy databases in the same wave to prevent cross-WAN query latency and surprise egress bills.",
      rule: "Splitting an app from its data spikes latency & egress costs.",
      color: "border-cyan-200 bg-cyan-50/60 text-cyan-900"
    },
    {
      gate: "05",
      name: "Target-State Cost Model",
      framework: "Pre-Migration Unit Economics",
      icon: DollarSign,
      desc: "Model compute, storage, licensing, egress, and support in advance. Treat the baseline as an acceptance gate for wave completion.",
      rule: "A wave is complete only when actual spend matches the model.",
      color: "border-emerald-200 bg-emerald-50/60 text-emerald-900"
    },
    {
      gate: "06",
      name: "Compliance & Audit",
      framework: "Shared Responsibility Matrix",
      icon: FileCheck,
      desc: "Map regulatory frameworks (BFSI residency, HIPAA, PCI DSS) to chosen cloud regions, encryption keys, and continuous access logging.",
      rule: "Verify regulator obligations before provisioning target services.",
      color: "border-purple-200 bg-purple-50/60 text-purple-900"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200/90 bg-[#fbfcfd] p-5 sm:p-7 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 font-mono">
            Pre-Migration Governance
          </span>
          <h4 className="text-base sm:text-lg font-bold text-[#050849]">
            The 6 Planning Decision Gates Before Workloads Move
          </h4>
        </div>
        <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[11px] font-semibold text-blue-700">
          Zero-Outage Methodology
        </span>
      </div>

      {/* Grid of 6 Gates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {gates.map((g, idx) => {
          const Icon = g.icon;
          const isSelected = activeGate === idx;

          return (
            <div
              key={g.gate}
              onClick={() => setActiveGate(idx)}
              className={`rounded-xl border p-4 transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? "border-[#050849] bg-white shadow-md ring-2 ring-blue-500/20"
                  : `${g.color} hover:bg-white hover:shadow-2xs`
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                    Gate {g.gate}
                  </span>
                  <div className="p-1.5 rounded-md bg-white border border-slate-200 text-blue-700">
                    <Icon size={14} />
                  </div>
                </div>

                <h5 className="text-sm font-bold text-[#050849] leading-snug">{g.name}</h5>
                <span className="text-[11px] font-semibold text-blue-700 block mb-2">{g.framework}</span>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {g.desc}
                </p>
              </div>

              <div className="mt-4 rounded-lg bg-white/90 border border-slate-200/80 p-2 text-[10px] text-slate-800">
                <span className="font-bold text-[#050849]">Gate Rule:</span> {g.rule}
              </div>
            </div>
          );
        })}
      </div>

      {/* Principle Banner */}
      <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50/70 p-3.5 text-xs text-[#050849] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
          <span><strong>Migration Discipline:</strong> Treat each gate as mandatory. A workload does not advance to staging or cutover until its gate criteria pass.</span>
        </div>
      </div>
    </div>
  );
}
