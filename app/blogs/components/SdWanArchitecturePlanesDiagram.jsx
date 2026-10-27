"use client";

import React, { useState } from "react";
import { Layers, ShieldCheck, Cpu, ArrowRight, Radio, Server, Activity, Network } from "lucide-react";

export default function SdWanArchitecturePlanesDiagram() {
  const [activePlane, setActivePlane] = useState(null);

  const planes = [
    {
      id: "orchestration",
      planeNum: "01",
      name: "Orchestration Plane",
      component: "Cloud Validator / vBond",
      icon: Radio,
      badge: "Onboarding & ZTP",
      color: "border-purple-200 bg-purple-50/40 text-purple-900",
      tagColor: "bg-purple-100 text-purple-800",
      description: "Authenticates edge routers joining the network. Distributes controller addresses and enforces zero-touch identity verification.",
      responsibilities: [
        "Initial router authentication & NAT traversal",
        "Zero Touch Provisioning (ZTP) discovery",
        "Whitelist authorization of edge hardware"
      ]
    },
    {
      id: "management",
      planeNum: "02",
      name: "Management Plane",
      component: "Single Pane / vManage",
      icon: Server,
      badge: "Configuration & Ops",
      color: "border-blue-200 bg-blue-50/40 text-blue-900",
      tagColor: "bg-blue-100 text-blue-800",
      description: "Centralized policy definition, real-time telemetry dashboards, template management, and automated provisioning.",
      responsibilities: [
        "One central policy distributed to all branches",
        "Firmware upgrades & compliance auditing",
        "Telemetry aggregation & SLA alarming"
      ]
    },
    {
      id: "control",
      planeNum: "03",
      name: "Control Plane",
      component: "Controller / vSmart (OMP/BGP)",
      icon: Cpu,
      badge: "Routing Intelligence",
      color: "border-cyan-200 bg-cyan-50/40 text-cyan-900",
      tagColor: "bg-cyan-100 text-cyan-800",
      description: "Builds fabric topology and distributes routing, encryption keys, and path-selection policies without touching data packets.",
      responsibilities: [
        "Overlay Management Protocol (OMP) routing",
        "Encryption key exchange & security policies",
        "Dynamic path and SLA policy decisions"
      ]
    },
    {
      id: "data",
      planeNum: "04",
      name: "Data Plane",
      component: "Edge Routers (cEdge / vEdge)",
      icon: Network,
      badge: "Forwarding & IPsec",
      color: "border-emerald-200 bg-emerald-50/40 text-emerald-900",
      tagColor: "bg-emerald-100 text-emerald-800",
      description: "Forwards encrypted application traffic over any underlay pool: MPLS circuits, direct internet broadband, and LTE/5G links.",
      responsibilities: [
        "Encrypted IPsec overlay tunnels across underlays",
        "Real-time SLA probes (latency, loss, jitter)",
        "Application-aware path selection & breakout"
      ]
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200/90 bg-[#fbfcfd] p-5 sm:p-7 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 font-mono">
            Control &amp; Data Plane Decoupling
          </span>
          <h4 className="text-base sm:text-lg font-bold text-[#050849]">
            The 4 Functional Planes of Modern SD-WAN Architecture
          </h4>
        </div>
        <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[11px] font-semibold text-blue-700">
          Cisco Validated Design Model
        </span>
      </div>

      {/* Grid of 4 Planes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {planes.map((p, idx) => {
          const Icon = p.icon;
          const isSelected = activePlane === idx;

          return (
            <div
              key={p.id}
              onClick={() => setActivePlane(idx)}
              className={`rounded-xl border p-4 transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? "border-[#050849] bg-white shadow-md ring-2 ring-blue-500/20"
                  : `${p.color} hover:bg-white hover:shadow-2xs`
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${p.tagColor}`}>
                    Plane {p.planeNum}
                  </span>
                  <div className="p-1 rounded-md bg-white border border-slate-200 text-slate-700">
                    <Icon size={14} />
                  </div>
                </div>

                <h5 className="text-sm font-bold text-[#050849] leading-snug">{p.name}</h5>
                <span className="text-[11px] font-semibold text-blue-700 block mt-0.5">{p.component}</span>

                <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                  {p.description}
                </p>

                <ul className="mt-3 space-y-1 text-[11px] text-slate-600 border-t border-slate-200/60 pt-2">
                  {p.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="h-1 w-1 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-lg bg-white/90 border border-slate-200/80 p-2 text-[10px] font-semibold text-[#050849]">
                ✓ Transport Independent Forwarding
              </div>
            </div>
          );
        })}
      </div>

      {/* Underlay Independence Ribbon */}
      <div className="mt-5 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 p-3.5 text-xs text-[#050849]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-bold">Underlay Transport Pool:</span>
            <span>MPLS + Public Broadband + LTE/5G Cellular</span>
          </div>
          <span className="font-semibold text-blue-700">
            Encrypted IPsec overlay connects all branches with zero CLI reconfiguration
          </span>
        </div>
      </div>
    </div>
  );
}
