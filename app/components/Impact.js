"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  Minimize2,
  ShieldCheck,
  Cpu,
  Eye,
  Maximize2,
  SlidersHorizontal,
  TrendingUp,
  Activity,
  Zap,
  Award
} from "lucide-react";

const metrics = [
  {
    value: "40+",
    label: "Enterprise Technology Projects",
    desc: "Delivered across networking, cloud, and security.",
    icon: TrendingUp,
    badge: "Production Proven",
  },
  {
    value: "24x7",
    label: "Operational Support",
    desc: "Continuous proactive monitoring and incident management.",
    icon: Activity,
    badge: "Continuous Coverage",
  },
  {
    value: "99.9%",
    label: "System Reliability",
    desc: "Across applicable managed environments.",
    icon: Zap,
    badge: "Enterprise SLA",
  },
  {
    value: "50+",
    label: "Technology Engagements Delivered",
    desc: "End-to-end strategic architectures and deployments.",
    icon: Award,
    badge: "Multi-Domain Delivery",
  },
];

const outcomes = [
  {
    title: "Faster Time to Value",
    desc: "Architecture and delivery planned together, so initiatives reach production sooner.",
    icon: Clock,
    num: "01",
  },
  {
    title: "Higher Infrastructure Availability",
    desc: "Resilient design and proactive monitoring keep critical systems available and performing.",
    icon: CheckCircle2,
    num: "02",
  },
  {
    title: "Reduced Operational Complexity",
    desc: "Fewer disconnected tools and clearer architecture mean less day-to-day operational overhead.",
    icon: Minimize2,
    num: "03",
  },
  {
    title: "Stronger Security Posture",
    desc: "Security built into the architecture rather than layered on after deployment.",
    icon: ShieldCheck,
    num: "04",
  },
  {
    title: "Improved Automation",
    desc: "Repetitive infrastructure and operational work automated through governed engineering practices.",
    icon: Cpu,
    num: "05",
  },
  {
    title: "Better Enterprise Visibility",
    desc: "Unified observability across network, cloud, applications, and security operations.",
    icon: Eye,
    num: "06",
  },
  {
    title: "Scalable Technology Foundations",
    desc: "Environments designed to grow without needing to be rebuilt each time.",
    icon: Maximize2,
    num: "07",
  },
  {
    title: "More Predictable Operations",
    desc: "Documented, governed environments behave consistently and are easier to support.",
    icon: SlidersHorizontal,
    num: "08",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-[#050238] py-24 sm:py-32 text-white border-y border-white/15"
    >
      {/* Hardware-accelerated CSS radial ambience (zero blur, zero repaint lag) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.14),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(183,243,107,0.07),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10">
        {/* ───────────────────────────────────────────────────────── */}
        {/* Section Header                                            */}
        {/* ───────────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 backdrop-blur-sm mb-5">
            <span className="h-2 w-2 rounded-full bg-[#B7F36B] shadow-[0_0_6px_#B7F36B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B7F36B]">
              Proven Enterprise Impact
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl tracking-tight">
            Technology Outcomes That{" "}
            <span className="bg-gradient-to-r from-white via-white to-[#B7F36B] bg-clip-text text-transparent">
              Move the Business Forward
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70 font-normal max-w-2xl mx-auto leading-relaxed">
            Real impact measured in velocity, operational uptime, and architectural clarity.
          </p>
        </div>

        {/* ───────────────────────────────────────────────────────── */}
        {/* 4 Headline Metrics: Monolithic Open Metric Bar (No Cards) */}
        {/* ───────────────────────────────────────────────────────── */}
        <div className="mt-16 sm:mt-20 pt-10 pb-12 border-y border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-white/10">
          {metrics.map((m, idx) => {
            const MetricIcon = m.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between lg:px-8 first:lg:pl-0 last:lg:pr-0 group"
              >
                <div>
                  {/* Top: Micro Badge & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#B7F36B]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B7F36B]" />
                      {m.badge}
                    </span>
                    <div className="text-white/40 group-hover:text-[#B7F36B] transition-colors duration-300">
                      <MetricIcon size={18} />
                    </div>
                  </div>

                  {/* Giant Stat Value */}
                  <div className="text-5xl sm:text-6xl font-black tracking-tight text-white font-mono group-hover:text-[#B7F36B] transition-colors duration-300">
                    {m.value}
                  </div>

                  {/* Label */}
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    {m.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-white/65 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ───────────────────────────────────────────────────────── */}
        {/* 8 Outcomes: Open Architectural Value Matrix (No Cards)    */}
        {/* ───────────────────────────────────────────────────────── */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B7F36B] uppercase block">
                Enterprise Value Matrix
              </span>
              <h3 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Architectural &amp; Operational Value
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-white/80 uppercase px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7F36B]" />
              <span>End-To-End Transformation</span>
            </div>
          </div>

          {/* 8 Outcomes: Open Blueprint Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {outcomes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between bg-[#050238] p-7 transition-colors duration-300 hover:bg-white/[0.04]"
                >
                  <div>
                    {/* Index & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/15 text-[#B7F36B] transition-colors duration-300 group-hover:bg-[#B7F36B]/15 group-hover:border-[#B7F36B]/40">
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-xs font-bold text-white/30 tracking-widest">
                        {item.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#B7F36B] transition-colors duration-200 leading-snug">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-white/65 font-normal">
                      {item.desc}
                    </p>
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
