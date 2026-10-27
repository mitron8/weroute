"use client";

import React from "react";
import { ArrowRight, AlertTriangle, ShieldCheck, Check, Cloud, Building2, Laptop, Network } from "lucide-react";

export default function DirectBreakoutVsTromboneDiagram() {
  return (
    <div className="my-8 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 border-b border-slate-100 pb-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 font-mono">
          Traffic Path Optimization
        </span>
        <h4 className="text-base sm:text-lg font-bold text-[#050849]">
          The Traditional MPLS Trombone Effect vs Direct Internet Breakout + SASE
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* TRADITIONAL TROMBONE HAIRPIN CARD */}
        <div className="rounded-xl border border-rose-200 bg-rose-50/20 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded border border-rose-200 flex items-center gap-1">
                <AlertTriangle size={12} />
                Traditional WAN &ldquo;Trombone Detour&rdquo;
              </span>
              <span className="text-xs text-rose-700 font-medium">+120ms Latency Overhead</span>
            </div>

            {/* Visual Detour Chain */}
            <div className="mt-4 space-y-2 text-center text-xs">
              <div className="rounded-lg bg-white border border-rose-200 p-2.5 font-bold text-slate-800 shadow-2xs">
                🏢 Enterprise Branch (User accessing Microsoft 365 / Salesforce)
              </div>
              <div className="text-rose-600 font-mono text-[11px] font-bold">
                ↓ High-Cost MPLS Circuit (Detour across country)
              </div>
              <div className="rounded-lg bg-rose-100 border border-rose-300 p-2.5 font-bold text-rose-950">
                🏛 Central Data Center (Hairpin Inspection Gateway)
              </div>
              <div className="text-rose-600 font-mono text-[11px] font-bold">
                ↓ Choke-Point Security Stack (NGFW, Proxy, URL Filter)
              </div>
              <div className="rounded-lg bg-white border border-slate-200 p-2.5 font-bold text-slate-700">
                ☁️ Public Internet &amp; SaaS Cloud Destination
              </div>
            </div>

            <div className="mt-4 space-y-2 border-t border-rose-200/60 pt-3 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                <span><strong>Hairpin Latency:</strong> Packets travel hundreds of miles to a DC just to exit back to the internet.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                <span><strong>MPLS Bandwidth Burn:</strong> Video calls and SaaS traffic saturate expensive private MPLS links.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                <span><strong>Central Bottleneck:</strong> Data center firewalls become performance chokepoints during peak hours.</span>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-rose-100/70 p-2.5 text-[11px] text-rose-950 font-medium">
            <span className="font-bold">Microsoft 365 Guidance:</span> &ldquo;Network hairpins and distant egress degrade user experience. Direct local egress is recommended.&rdquo;
          </div>
        </div>

        {/* MODERN SD-WAN DIRECT BREAKOUT CARD */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/20 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                <ShieldCheck size={12} />
                Modern SD-WAN + SASE Direct Breakout
              </span>
              <span className="text-xs text-emerald-700 font-medium">Optimal Local Path</span>
            </div>

            {/* Visual Direct Path */}
            <div className="mt-4 space-y-2 text-center text-xs">
              <div className="rounded-lg bg-white border border-emerald-200 p-2.5 font-bold text-slate-800 shadow-2xs">
                🏢 Enterprise Branch (Zero Touch Provisioned Edge)
              </div>
              <div className="text-emerald-700 font-mono text-[11px] font-bold">
                ↓ Direct Internet Breakout (High-Speed Local Broadband)
              </div>
              <div className="rounded-lg bg-emerald-100 border border-emerald-300 p-2.5 font-bold text-emerald-950">
                🛡 Cloud-Delivered SASE / SSE Edge (SWG, CASB, ZTNA)
              </div>
              <div className="text-emerald-700 font-mono text-[11px] font-bold">
                ↓ Peered Direct Cloud On-Ramp
              </div>
              <div className="rounded-lg bg-[#050849] text-white p-2.5 font-bold shadow-xs">
                ☁️ SaaS &amp; Public Cloud (Sub-20ms Direct Access)
              </div>
            </div>

            <div className="mt-4 space-y-2 border-t border-emerald-200/60 pt-3 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <span><strong>Instant Egress:</strong> Cloud traffic exits locally from the branch ISP link without traversing MPLS.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <span><strong>Cloud-Delivered Security:</strong> SASE inspects traffic in the provider cloud with single corporate policy.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <span><strong>Circuit Cost Cut:</strong> Offloading SaaS frees 60-70% of MPLS capacity, slashing bandwidth bills.</span>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-emerald-100/70 p-2.5 text-[11px] text-emerald-950 font-medium">
            <span className="font-bold">Architectural Principle:</span> Inspect where traffic exits. SD-WAN routes the packet; SSE enforces zero-trust identity and threat inspection.
          </div>
        </div>

      </div>
    </div>
  );
}
