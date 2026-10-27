"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function RagArchitectureDiagram() {
  const stages = [
    { num: "1", title: "Ingest", desc: "OCR, layout, tables" },
    { num: "2", title: "Index", desc: "Chunks, vectors, metadata, ACLs" },
    { num: "3", title: "Retrieve", desc: "Hybrid search plus access filter" },
    { num: "4", title: "Re-rank", desc: "Score top candidates again" },
    { num: "5", title: "Generate", desc: "Answer with citations" }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="mb-5 text-center">
        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700">
          Production RAG Architecture & Stage Controls
        </h4>
        <p className="mt-1 text-xs text-[#050849]/60">
          A production RAG architecture has five stages, and each stage carries its own controls.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {/* Top 5 Horizontal Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 items-stretch">
          {stages.map((stage, idx) => (
            <div key={idx} className="relative flex items-center">
              <div className="w-full flex flex-col justify-center items-center text-center rounded-xl border border-slate-200/90 bg-slate-50/70 p-3 min-h-[92px]">
                <div className="text-xs font-bold text-[#050849] flex items-center gap-1">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700">
                    {stage.num}
                  </span>
                  <span>{stage.title}</span>
                </div>
                <p className="mt-1 text-[11px] text-[#050849]/70 leading-tight">
                  {stage.desc}
                </p>
              </div>

              {idx < stages.length - 1 && (
                <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#050849]/40 pointer-events-none">
                  <ArrowRight size={13} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Middle Stage Controls Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-amber-300 bg-amber-50/70 p-2.5 text-center">
            <span className="text-xs font-bold text-amber-900 block">
              Versioning and freshness
            </span>
            <span className="text-[10px] text-amber-800/80">
              Stages 1 & 2: Retire superseded chunks
            </span>
          </div>

          <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-2.5 text-center">
            <span className="text-xs font-bold text-emerald-900 block">
              Permission filter
            </span>
            <span className="text-[10px] text-emerald-800/80">
              Stage 3: Token-level ACL scoping
            </span>
          </div>

          <div className="rounded-xl border border-amber-300 bg-amber-50/70 p-2.5 text-center">
            <span className="text-xs font-bold text-amber-900 block">
              Confidence and abstention
            </span>
            <span className="text-[10px] text-amber-800/80">
              Stages 4 & 5: Abstain visibly below score
            </span>
          </div>
        </div>

        {/* Bottom Wide Audit Log Box */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3.5 text-center">
          <span className="text-xs font-bold text-blue-900 block uppercase tracking-wide">
            Audit log across all stages
          </span>
          <p className="mt-0.5 text-xs text-blue-800">
            Query, user, retrieved passages and generated output
          </p>
        </div>

        <p className="text-center text-[11px] text-[#050849]/50 font-medium">
          Each stage carries its own controls
        </p>
      </div>
    </div>
  );
}
