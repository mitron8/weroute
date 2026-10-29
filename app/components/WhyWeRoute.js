"use client";

import React from "react";
import Image from "next/image";
import {
  Layers,
  Scale,
  Workflow,
  ShieldCheck,
  Compass,
  Handshake,
  CheckCircle2
} from "lucide-react";

const whyPillars = [
  {
    icon: Layers,
    n: "01",
    t: "Architecture-First Thinking",
    b: "We design the technology foundation before selecting individual tools or platforms, which prevents fragmentation later.",
  },
  {
    icon: Scale,
    n: "02",
    t: "Vendor-Agnostic Decisions",
    b: "Technology choices are guided by enterprise fit, performance, security, scalability, and long-term value.",
  },
  {
    icon: Workflow,
    n: "03",
    t: "Consulting + Engineering",
    b: "Strategic thinking and hands-on technical execution are delivered through one accountable partner, not two.",
  },
  {
    icon: ShieldCheck,
    n: "04",
    t: "Security by Design",
    b: "Identity, governance, resilience, observability, and security controls are embedded from the start, not retrofitted.",
  },
  {
    icon: Compass,
    n: "05",
    t: "End-to-End Ownership",
    b: "We support the complete journey from assessment and architecture through implementation, operations, and optimization.",
  },
  {
    icon: Handshake,
    n: "06",
    t: "Long-Term Partnership",
    b: "Our focus extends beyond deployment toward continuous improvement and long-term technology maturity.",
  },
];

export default function WhyWeRoute() {
  return (
    <section
      id="why"
      className="relative z-20 rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[60px] rounded-b-none border-t border-white/20 bg-[#050238] text-white shadow-[0_-10px_28px_rgba(0,0,0,0.18)] overflow-hidden"
    >
      {/* Hardware-accelerated CSS radial ambience (zero blur, zero repaint lag) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(183,243,107,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* ───────────────────────────────────────────────────────── */}
          {/* Left Column: Sticky Narrative Anchor                      */}
          {/* ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 backdrop-blur-sm mb-5">
              <span className="h-2 w-2 rounded-full bg-[#B7F36B] shadow-[0_0_6px_#B7F36B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B7F36B]">
                Why WeRoute
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-[44px] tracking-tight">
              Why Enterprises{" "}
              <span className="bg-gradient-to-r from-white via-white to-[#B7F36B] bg-clip-text text-transparent">
                Choose WeRoute
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70 font-normal">
              Most providers sell either strategy or execution, and the gap between the two is where transformation projects stall. WeRoute covers both, which means the architecture we recommend is the architecture we build and operate.
            </p>

            {/* Architectural Trust Summary Bar */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white/80">
                <CheckCircle2 size={16} className="text-[#B7F36B] shrink-0" />
                <span>Single accountable partner across design &amp; run</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white/80">
                <CheckCircle2 size={16} className="text-[#B7F36B] shrink-0" />
                <span>100% objective, vendor-agnostic technology guidance</span>
              </div>
            </div>

            {/* Seamless Outline Illustration (No card, blends naturally with subtle opacity) */}
            <div className="relative mt-8 select-none pointer-events-none">
              {/* Atmospheric subtle ambient glow */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#B7F36B]/[0.06] blur-3xl pointer-events-none" />

              <Image
                src="/images/why-weroute-tower.png"
                alt="Telecommunications Tower & Optical Backhaul Architecture"
                width={1200}
                height={896}
                className="relative z-10 w-full h-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-85 drop-shadow-[0_0_24px_rgba(183,243,107,0.1)]"
                priority
              />
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────── */}
          {/* Right Column: Architectural Precision Ledger (No Cards)    */}
          {/* ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10 border-y border-white/10">
            {whyPillars.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.n}
                  className="group py-7 sm:py-8 transition-all duration-300 -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-2xl hover:bg-white/[0.04]"
                >
                  <div className="flex items-start gap-5 sm:gap-6">
                    {/* Index & Icon */}
                    <div className="flex flex-col items-center gap-2 shrink-0 pt-0.5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] border border-white/15 text-[#B7F36B] transition-colors duration-300 group-hover:bg-[#B7F36B]/15 group-hover:border-[#B7F36B]/40">
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-[11px] font-bold text-white/40 tracking-wider">
                        {c.n}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#B7F36B] transition-colors duration-200">
                        {c.t}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/70 font-normal">
                        {c.b}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
