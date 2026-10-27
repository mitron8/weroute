"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function DocumentIngestionPipelineDiagram() {
  const steps = [
    { title: "Source files", desc: "Catalogues, PDFs, scans" },
    { title: "OCR and layout", desc: "Text, headings, tables" },
    { title: "Table handling", desc: "Keep structure, repeat headers" },
    { title: "Chunk and enrich", desc: "Section path, version, ACL" },
    { title: "Embed and index", desc: "Vectors plus keywords" }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="mb-5 text-center">
        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700">
          Document Ingestion & Preparation Pipeline
        </h4>
        <p className="mt-1 text-xs text-[#050849]/60">
          From unstructured legacy files to structured, ACL-aware hybrid indices
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3.5">
        {/* Top 5 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 items-stretch">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-center">
              <div className="w-full flex flex-col justify-center items-center text-center rounded-xl border border-slate-200 bg-slate-50/70 p-3 min-h-[95px]">
                <div className="text-xs font-bold text-[#050849]">
                  {step.title}
                </div>
                <p className="mt-1 text-[11px] text-[#050849]/70 leading-tight">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#050849]/40 pointer-events-none">
                  <ArrowRight size={13} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Middle Banner: Version Control */}
        <div className="rounded-xl border border-amber-300 bg-amber-50/80 p-3 text-center">
          <div className="text-xs font-bold text-amber-900 uppercase tracking-wide">
            Version control
          </div>
          <p className="text-xs text-amber-950 mt-0.5">
            A new revision retires the old version before the index serves answers
          </p>
        </div>

        {/* Bottom Banner: Re-ingest on a schedule */}
        <div className="rounded-xl border border-emerald-300 bg-emerald-50/80 p-3 text-center">
          <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
            Re-ingest on a schedule
          </div>
          <p className="text-xs text-emerald-950 mt-0.5">
            Check sources for changes, and sync permissions with the content
          </p>
        </div>
      </div>
    </div>
  );
}
