"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowDown, Server, Layers, Database, BarChart3, CheckCircle2 } from "lucide-react";

export default function TelemetryArchitectureDiagram() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const stages = [
    {
      id: "sources",
      num: "01",
      badge: "Sources",
      title: "Telemetry sources",
      desc: "Network devices, servers & cloud, applications",
      icon: Server,
    },
    {
      id: "opentelemetry",
      num: "02",
      badge: "Collection",
      title: "OpenTelemetry",
      desc: "Collectors receive SNMP, syslog, flow & OTLP data, then route it",
      icon: Layers,
    },
    {
      id: "clickhouse",
      num: "03",
      badge: "Storage",
      title: "ClickHouse",
      desc: "One columnar store for metrics, logs and traces",
      icon: Database,
    },
    {
      id: "signoz",
      num: "04",
      badge: "Visualization",
      title: "SigNoz",
      desc: "One interface for queries, dashboards and alerts",
      icon: BarChart3,
    },
  ];

  const pillars = [
    {
      title: "Instrument once",
      desc: "Vendor-neutral collection keeps the backend open",
    },
    {
      title: "Compress and query fast",
      desc: "Columnar storage keeps long retention affordable",
    },
    {
      title: "Operate it well",
      desc: "Retention, cardinality, coverage and alert hygiene",
    },
  ];

  return (
    <div className="my-10 w-full rounded-2xl border border-slate-200/90 bg-[#fbfcfd] p-5 sm:p-7 shadow-xs">
      
      {/* ─── 1. TOP PIPELINE (FLEX CONTAINER WITH DEDICATED CONNECTOR GAPS) ─── */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 lg:gap-0">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isHovered = hoveredIdx === idx;
          const isLast = idx === stages.length - 1;

          return (
            <React.Fragment key={stage.id}>
              {/* STAGE CARD */}
              <div
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex-1 rounded-xl border p-4 transition-all duration-200 min-h-[140px] flex flex-col justify-between ${
                  isHovered
                    ? "border-[#080357] bg-white shadow-md -translate-y-0.5"
                    : "border-slate-200/90 bg-white shadow-2xs hover:border-slate-300"
                }`}
                style={{
                  backgroundImage: "radial-gradient(#cbd5e1 0.7px, transparent 0.7px)",
                  backgroundSize: "6px 6px",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {stage.num} {stage.badge}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg transition-colors ${
                        isHovered ? "bg-[#080357] text-white" : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      <Icon size={14} />
                    </div>
                  </div>

                  <h5 className="text-sm font-bold text-[#080357] leading-snug">
                    {stage.title}
                  </h5>

                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>
              </div>

              {/* DEDICATED CONNECTOR ARROW (NEVER OVERLAPS THE CARD) */}
              {!isLast && (
                <>
                  {/* Desktop Right Arrow (Dedicated flex gap) */}
                  <div className="hidden lg:flex items-center justify-center w-8 shrink-0 text-slate-400">
                    <div className="h-6 w-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 shadow-2xs">
                      <ArrowRight size={12} />
                    </div>
                  </div>

                  {/* Mobile Down Arrow */}
                  <div className="flex lg:hidden items-center justify-center py-1 text-slate-400">
                    <div className="h-6 w-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 shadow-2xs">
                      <ArrowDown size={12} />
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* ─── 2. SECTION DIVIDER & SUBTITLE ─── */}
      <div className="my-6 relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>
        <div className="relative bg-[#fbfcfd] px-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Why each layer: the reasons behind the stack
          </span>
        </div>
      </div>

      {/* ─── 3. BOTTOM RATIONALE CARDS (3 BALANCED COLUMNS) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs transition-all hover:border-[#080357]/40 hover:shadow-xs"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
              <h6 className="text-xs font-bold text-[#080357]">
                {pillar.title}
              </h6>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal pl-5">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
