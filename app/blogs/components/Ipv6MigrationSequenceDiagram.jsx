"use client";

import React from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Database, Globe2 } from "lucide-react";

export default function Ipv6MigrationSequenceDiagram() {
  const steps = [
    {
      step: "01",
      title: "Addressing Plan",
      subtitle: "Prefix Allocation & IPAM",
      desc: "Reserve /48 enterprise prefix, establish standard /64 subnetting scheme, and register DNS zone templates before touching any live device.",
      validation: "IPAM allocation plan verified & peer registered",
      color: "border-blue-200 bg-blue-50/50 text-blue-900"
    },
    {
      step: "02",
      title: "Core Fabric",
      subtitle: "Backbone & Spine Dual-Stack",
      desc: "Enable IPv6 on core spines and aggregation routers. Run IPv4 and IPv6 side by side (RFC 4213). Verify BGP multiprotocol routing adjacencies.",
      validation: "Core routing table converged & MTU 1500+ verified",
      color: "border-cyan-200 bg-cyan-50/50 text-cyan-900"
    },
    {
      step: "03",
      title: "Edge & Access",
      subtitle: "Perimeter & Leaf Switches",
      desc: "Extend dual-stack routing to leaf switches, campus edge gateways, and firewall security policies with parity ACL inspection.",
      validation: "Perimeter filtering parity & neighbor discovery secured",
      color: "border-indigo-200 bg-indigo-50/50 text-indigo-900"
    },
    {
      step: "04",
      title: "Application Services",
      subtitle: "Dual-Stack DNS & NAT64/DNS64",
      desc: "Publish AAAA DNS records for enterprise services. Implement DNS64 & NAT64 (RFC 6147) prefix 64:ff9b::/96 for legacy IPv4-only external destinations.",
      validation: "End-to-end client reachability & fallback verified",
      color: "border-emerald-200 bg-emerald-50/50 text-emerald-900"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200/90 bg-[#fbfcfd] p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 font-mono">
            Zero-Downtime Migration Architecture
          </span>
          <h4 className="text-base sm:text-lg font-bold text-[#050849]">
            The 4-Step Dual-Stack IPv6 Validation Sequence
          </h4>
        </div>
        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-[11px] font-semibold text-emerald-800">
          RFC 4213 & RFC 6147 Compliant
        </span>
      </div>

      {/* Sequential Horizontal Stepper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((s, idx) => (
          <div
            key={s.step}
            className={`rounded-xl border p-4 flex flex-col justify-between ${s.color} transition-all hover:shadow-xs`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/80 border border-slate-200/80">
                  Step {s.step}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Gate {idx + 1}
                </span>
              </div>

              <h5 className="text-sm font-bold leading-snug">{s.title}</h5>
              <div className="text-[11px] font-medium text-slate-600 mb-2">{s.subtitle}</div>

              <p className="text-xs text-slate-700 leading-relaxed border-t border-slate-200/60 pt-2">
                {s.desc}
              </p>
            </div>

            <div className="mt-4 rounded-lg bg-white/90 border border-slate-200/80 p-2 text-[10px] font-medium text-slate-800 flex items-start gap-1.5 shadow-2xs">
              <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Validation Gate:</span> {s.validation}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Mechanisms Banner */}
      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3.5 text-xs text-slate-700">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <div className="p-2 rounded bg-slate-50">
            <strong className="block text-[#050849] font-bold">1. IPv4 Fallback Intact</strong>
            <span>Dual-stack removes nothing. IPv4 remains ready for immediate rollback.</span>
          </div>
          <div className="p-2 rounded bg-slate-50">
            <strong className="block text-[#050849] font-bold">2. NAT64 & DNS64 Bridge</strong>
            <span>IPv6-only endpoints resolve IPv4-only endpoints seamlessly via RFC 6147.</span>
          </div>
          <div className="p-2 rounded bg-slate-50">
            <strong className="block text-[#050849] font-bold">3. 70-75% Adoption</strong>
            <span>Measured by enabled eligible enterprise devices with zero downtime.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
