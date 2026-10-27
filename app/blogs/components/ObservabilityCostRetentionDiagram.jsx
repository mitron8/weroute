"use client";

import React from "react";

export default function ObservabilityCostRetentionDiagram() {
  const columns = [
    {
      title: "Keep at full resolution",
      bgHeader: "bg-emerald-50 border-emerald-200 text-emerald-900",
      items: [
        "Errors, drops and latency on critical paths",
        "Traces that error or run slow",
        "Detail during changes and incidents"
      ]
    },
    {
      title: "Sample",
      bgHeader: "bg-amber-50 border-amber-200 text-amber-900",
      items: [
        "Healthy-path traces, using tail sampling",
        "Flow records on low-risk segments",
        "Routine informational logs"
      ]
    },
    {
      title: "Aggregate or drop",
      bgHeader: "bg-slate-100 border-slate-200 text-slate-800",
      items: [
        "Per-source-IP metric labels",
        "Debug-level logs",
        "Series nobody queries"
      ]
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
      {/* ─── 3 COLUMNS ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {columns.map((col, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-slate-200 bg-slate-50/40 overflow-hidden flex flex-col"
          >
            <div className={`px-4 py-2.5 border-b font-bold text-xs sm:text-[13px] text-center ${col.bgHeader}`}>
              {col.title}
            </div>
            <div className="p-4 flex-1 bg-white">
              <ul className="space-y-2 text-xs text-[#050849]/80 leading-relaxed">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* ─── FORMULA BAR ─── */}
      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-center">
        <p className="text-xs sm:text-sm font-bold text-[#050849]">
          Observability cost = volume × cardinality × retention
        </p>
        <p className="mt-1 text-xs text-slate-600">
          Sampling saves cost and loses detail. A question that needs a dropped record cannot be answered later.
        </p>
      </div>
    </div>
  );
}
