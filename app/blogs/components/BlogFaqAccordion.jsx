"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function BlogFaqAccordion({ faqs }) {
  const [openIdx, setOpenIdx] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
              isOpen
                ? "border-blue-600 bg-white shadow-md ring-2 ring-blue-500/10"
                : "border-[#050849]/10 bg-white hover:border-[#050849]/25"
            }`}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="flex w-full items-center justify-between p-6 text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3 pr-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-700 font-mono text-xs font-bold shrink-0">
                  Q{idx + 1}
                </span>
                <h3 className="text-base md:text-lg font-bold text-[#050849]">
                  {faq.question}
                </h3>
              </div>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#050849]/5 text-[#050849] transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 bg-blue-600 text-white" : ""
                }`}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-[#050849]/5 px-6 pb-6 pt-2">
                <p className="text-sm md:text-base leading-relaxed text-[#050849]/80 pl-10">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
