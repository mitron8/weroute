"use client";

import React from "react";
import { ArrowRight, ArrowDown, ShieldAlert, Lock, UserCheck, Database } from "lucide-react";

export default function PermissionAwareRagDiagram() {
  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="mb-5 text-center">
        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700">
          Permission-Aware Retrieval & Zero-Trust Query Flow
        </h4>
        <p className="mt-1 text-xs text-[#050849]/60">
          Preventing context leakage and ACL bypass at retrieval time (OWASP LLM08)
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {/* Tier 1: Query & Filter Pipeline */}
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#050849]/50 block mb-2">
            Step 1: Authenticated Filter Generation & Index Scoping
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 items-stretch">
            
            <div className="relative flex flex-col justify-center items-center text-center rounded-xl bg-[#050849] text-white p-3 min-h-[85px] shadow-xs">
              <div className="text-xs font-bold">User</div>
              <p className="text-[11px] text-slate-300 mt-0.5">Signs in</p>
            </div>

            <div className="relative flex flex-col justify-center items-center text-center rounded-xl border border-slate-200 bg-slate-50 p-3 min-h-[85px]">
              <div className="text-xs font-bold text-[#050849]">Application server</div>
              <p className="text-[11px] text-[#050849]/70 mt-0.5">
                Resolves identity and groups on the server
              </p>
            </div>

            <div className="relative flex flex-col justify-center items-center text-center rounded-xl border border-slate-200 bg-slate-50 p-3 min-h-[85px]">
              <div className="text-xs font-bold text-[#050849]">Search query</div>
              <p className="text-[11px] text-[#050849]/70 mt-0.5">
                Filter: allowed groups plus the question
              </p>
            </div>

            <div className="relative flex flex-col justify-center items-center text-center rounded-xl border-2 border-blue-600 bg-blue-50/60 p-3 min-h-[85px]">
              <div className="text-xs font-bold text-blue-900">Index</div>
              <p className="text-[11px] text-blue-800/80 mt-0.5">
                Chunks carry ACL metadata
              </p>
            </div>

          </div>
        </div>

        {/* Downward indicator between tiers */}
        <div className="flex justify-end pr-8 sm:pr-12 text-blue-600">
          <ArrowDown size={18} />
        </div>

        {/* Tier 2: Generation with Grounded Citations */}
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#050849]/50 block mb-2">
            Step 2: Generation on Isolated Chunks & Immutable Audit
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 items-stretch">

            <div className="flex flex-col justify-center items-center text-center rounded-xl border border-emerald-300 bg-emerald-50/70 p-3 min-h-[85px]">
              <div className="text-xs font-bold text-emerald-900">Permitted chunks only</div>
              <p className="text-[11px] text-emerald-800/80 mt-0.5">
                Enforced after the filter
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center rounded-xl border border-slate-200 bg-slate-50 p-3 min-h-[85px]">
              <div className="text-xs font-bold text-[#050849]">Language model</div>
              <p className="text-[11px] text-[#050849]/70 mt-0.5">
                Sees only permitted text
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center rounded-xl border border-blue-300 bg-blue-50/70 p-3 min-h-[85px]">
              <div className="text-xs font-bold text-blue-900">Answer with citations</div>
              <p className="text-[11px] text-blue-800 mt-0.5">
                Logged for audit
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Security Rule Banner */}
        <div className="rounded-xl border border-amber-300 bg-amber-50/90 p-3.5 text-center">
          <div className="text-xs font-bold text-amber-900">
            Never trust a group list sent by the client.
          </div>
          <p className="text-[11px] text-amber-800 mt-0.5">
            Permission changes at the source apply only after the next index sync.
          </p>
        </div>
      </div>
    </div>
  );
}
