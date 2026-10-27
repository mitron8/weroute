"use client";

import React, { useState } from "react";
import { Terminal, ChevronDown, Check, Copy, Tag, CheckCircle2 } from "lucide-react";

export default function DeveloperNotesSection({ notes }) {
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  if (!notes) return null;

  const handleCopyKeywords = () => {
    const allKeywords = [
      ...(notes.primaryKeywords || []),
      ...(notes.secondaryKeywords || [])
    ].join(", ");

    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(allKeywords);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
      {/* Header bar */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between border-b border-slate-100 bg-slate-50/80 px-5 py-4 transition-colors hover:bg-slate-100/80 sm:px-6"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#050849] text-white">
            <Terminal size={15} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-[#050849]">
                Developer Notes
              </h3>
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                SEO & GEO Meta Data
              </span>
            </div>
            <p className="text-[11px] text-[#050849]/60">
              Target keywords, search intent reasoning, and schema specifications
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleCopyKeywords();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-[#050849] hover:bg-slate-50 transition-colors"
          >
            {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
            <span>{copied ? "Copied" : "Copy Keywords"}</span>
          </button>
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full text-[#050849]/60 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      {isOpen && (
        <div className="space-y-6 p-5 sm:p-6 text-xs sm:text-[13px] text-[#050849]/85">
          {/* H1 Heading */}
          <div>
            <span className="font-bold text-[#050849] block text-xs uppercase tracking-wider text-slate-500 mb-1">
              Target H1 Title
            </span>
            <div className="rounded-xl bg-slate-50 p-3 font-semibold text-[#050849] border border-slate-200/70">
              {notes.h1}
            </div>
          </div>

          {/* Primary Keywords */}
          {notes.primaryKeywords && notes.primaryKeywords.length > 0 && (
            <div>
              <span className="font-bold text-[#050849] block text-xs uppercase tracking-wider text-slate-500 mb-2">
                Primary Keywords
              </span>
              <div className="flex flex-wrap gap-1.5">
                {notes.primaryKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-2.5 py-1 font-semibold text-blue-800 border border-blue-200/60"
                  >
                    <Tag size={11} className="text-blue-600" />
                    <span>{kw}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Secondary Keywords */}
          {notes.secondaryKeywords && notes.secondaryKeywords.length > 0 && (
            <div>
              <span className="font-bold text-[#050849] block text-xs uppercase tracking-wider text-slate-500 mb-2">
                Secondary Keywords
              </span>
              <div className="flex flex-wrap gap-1.5">
                {notes.secondaryKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-[#050849]/80 border border-slate-200/60"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key SEO Findings & Reasoning */}
          {notes.keyFindings && notes.keyFindings.length > 0 && (
            <div>
              <span className="font-bold text-[#050849] block text-xs uppercase tracking-wider text-slate-500 mb-2">
                Key SEO Findings & Reasoning
              </span>
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                <ul className="space-y-2">
                  {notes.keyFindings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 size={13} className="text-blue-600 mt-0.5 shrink-0" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Schema Markup */}
          {notes.schemaMarkup && (
            <div className="rounded-xl bg-[#050849] p-4 text-white">
              <span className="font-bold text-white/70 block text-[11px] uppercase tracking-wider mb-1">
                Schema Markup Implemented
              </span>
              <p className="text-xs text-white/90 font-mono">
                {notes.schemaMarkup}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
