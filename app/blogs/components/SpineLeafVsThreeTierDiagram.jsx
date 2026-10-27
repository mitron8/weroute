"use client";

import React from "react";
import { ArrowDown, GitFork, RefreshCw, Layers, ShieldCheck, Zap } from "lucide-react";

export default function SpineLeafVsThreeTierDiagram() {
  return (
    <div className="my-8 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 border-b border-slate-100 pb-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 font-mono">
          Architectural Topology Comparison
        </span>
        <h4 className="text-base sm:text-lg font-bold text-[#050849]">
          Three-Tier Hierarchical vs Spine-Leaf Clos Fabric
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* THREE-TIER ARCHITECTURE CARD */}
        <div className="rounded-xl border border-amber-200/80 bg-amber-50/20 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded border border-amber-200">
                Legacy Three-Tier
              </span>
              <span className="text-xs text-amber-700 font-medium">North-South Optimized</span>
            </div>

            {/* Hierarchical Visual Stack */}
            <div className="mt-4 space-y-2 text-center text-xs">
              <div className="rounded-lg bg-amber-100 border border-amber-300/80 py-2 font-bold text-amber-950">
                Core Layer (Campus / WAN Gateway)
              </div>
              <div className="flex justify-center text-amber-400">
                <ArrowDown size={14} />
              </div>
              <div className="rounded-lg bg-amber-100 border border-amber-300/80 py-2 font-bold text-amber-950">
                Aggregation Layer (Spanning Tree Root)
              </div>
              <div className="flex justify-center text-amber-400">
                <ArrowDown size={14} />
              </div>
              <div className="rounded-lg bg-amber-100 border border-amber-300/80 py-2 font-bold text-amber-950">
                Access Layer (Top of Rack Switches)
              </div>
            </div>

            <div className="mt-4 space-y-2 border-t border-amber-200/60 pt-3 text-xs text-[#050849]/80">
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                <span><strong className="text-amber-900">Variable Hops:</strong> Packets traverse 3-5 switch hops between server racks.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                <span><strong className="text-amber-900">Spanning Tree Blocking:</strong> 50% of redundant link capacity sits idle to prevent loops.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                <span><strong className="text-amber-900">Large Blast Radius:</strong> Upgrading or failing aggregation tier impacts multiple racks.</span>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-amber-100/70 p-2.5 text-[11px] text-amber-950 font-medium">
            <span className="font-bold">Where it still fits:</span> Small sites with stable footprints, few racks, and purely north-south user-to-internet traffic.
          </div>
        </div>

        {/* SPINE-LEAF FABRIC CARD */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/20 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded border border-blue-200">
                Modern Spine-Leaf Fabric
              </span>
              <span className="text-xs text-blue-700 font-medium">East-West Optimized</span>
            </div>

            {/* Spine-Leaf Visual Fabric */}
            <div className="mt-4 space-y-2 text-center text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-[#050849] text-white py-2 font-bold shadow-xs">
                  Spine Switch 1
                </div>
                <div className="rounded-lg bg-[#050849] text-white py-2 font-bold shadow-xs">
                  Spine Switch 2
                </div>
              </div>
              <div className="py-1 text-[11px] font-mono font-bold text-blue-700 bg-blue-100/70 rounded border border-blue-200">
                ⇄ BGP Routed Underlay (ECMP Active-Active Links) ⇄
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-blue-600 text-white py-2 font-bold shadow-xs text-[11px]">
                  Leaf A (Rack 1)
                </div>
                <div className="rounded-lg bg-blue-600 text-white py-2 font-bold shadow-xs text-[11px]">
                  Leaf B (Rack 2)
                </div>
                <div className="rounded-lg bg-blue-600 text-white py-2 font-bold shadow-xs text-[11px]">
                  Leaf C (Rack 3)
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2 border-t border-blue-200/60 pt-3 text-xs text-[#050849]/80">
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span><strong className="text-blue-900">Constant Latency:</strong> Any two servers are exactly 1 spine hop apart (35-40% lower latency).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span><strong className="text-blue-900">100% Active Bandwidth:</strong> ECMP balances packets over all links without loop blocking.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span><strong className="text-blue-900">EVPN-VXLAN Mobility:</strong> Move workloads across racks while keeping IP and MAC addresses.</span>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-blue-100/70 p-2.5 text-[11px] text-blue-950 font-medium">
            <span className="font-bold">Enterprise Fit:</span> Growing data centers, private cloud clusters, and high-throughput east-west microservices.
          </div>
        </div>

      </div>
    </div>
  );
}
