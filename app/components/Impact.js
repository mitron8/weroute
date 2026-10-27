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
  Award,
  Sparkles
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
  },
  {
    title: "Higher Infrastructure Availability",
    desc: "Resilient design and proactive monitoring keep critical systems available and performing.",
    icon: CheckCircle2,
  },
  {
    title: "Reduced Operational Complexity",
    desc: "Fewer disconnected tools and clearer architecture mean less day-to-day operational overhead.",
    icon: Minimize2,
  },
  {
    title: "Stronger Security Posture",
    desc: "Security built into the architecture rather than layered on after deployment.",
    icon: ShieldCheck,
  },
  {
    title: "Improved Automation",
    desc: "Repetitive infrastructure and operational work automated through governed engineering practices.",
    icon: Cpu,
  },
  {
    title: "Better Enterprise Visibility",
    desc: "Unified observability across network, cloud, applications, and security operations.",
    icon: Eye,
  },
  {
    title: "Scalable Technology Foundations",
    desc: "Environments designed to grow without needing to be rebuilt each time.",
    icon: Maximize2,
  },
  {
    title: "More Predictable Operations",
    desc: "Documented, governed environments behave consistently and are easier to support.",
    icon: SlidersHorizontal,
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 sm:py-28 text-[#052440] selection:bg-[#080357] selection:text-[#B7F36B]"
    >
      {/* Background Ambience: Subtle studio gradient & soft radial glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(8, 3, 87, 0.04) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(5, 36, 64, 0.04) 0%, transparent 45%)",
          }}
        />
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Top Announcement Style Pill Badge */}
          <div className="clay-badge-light inline-flex items-center gap-2 border border-[#052440]/10 bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#080357] shadow-xs backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#080357] shrink-0 animate-pulse" />
            <span>Proven Enterprise Impact</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#080357] md:text-4xl lg:text-[44px] tracking-tight">
            Technology Outcomes That{" "}
            <span className="bg-gradient-to-r from-[#080357] via-blue-700 to-[#080357] bg-clip-text text-transparent">
              Move the Business Forward
            </span>
          </h2>
          <p className="mt-3.5 text-base md:text-lg text-[#052440]/75 font-normal max-w-2xl mx-auto leading-relaxed">
            Real impact measured in velocity, operational uptime, and architectural clarity.
          </p>
        </motion.div>

        {/* 4 Stats Cards */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const MetricIcon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="clay-light group relative flex flex-col justify-between rounded-3xl bg-white border border-[#052440]/8 p-7 sm:p-8 transition-all duration-300 hover:border-[#080357]/25 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(5,36,64,0.10)]"
              >
                <div>
                  {/* Top row: Value + Tactile Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#080357]">
                      {m.value}
                    </span>
                    <div className="clay-badge-light flex h-12 w-12 items-center justify-center rounded-2xl bg-[#080357] text-[#B7F36B] shadow-md transition-transform duration-300 group-hover:scale-105">
                      <MetricIcon size={20} />
                    </div>
                  </div>

                  {/* Accent indicator line */}
                  <div className="w-10 h-1 rounded-full bg-[#080357]/15 group-hover:w-16 group-hover:bg-[#080357] transition-all duration-300 mb-4" />

                  {/* Label */}
                  <h3 className="text-base sm:text-[17px] font-bold text-[#080357] transition-colors leading-snug">
                    {m.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-[#052440]/70 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>

                {/* Footer Micro-Badge */}
                <div className="mt-6 pt-4 border-t border-[#052440]/8 flex items-center gap-1.5 text-[11px] font-semibold text-[#080357]/65">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>{m.badge}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 8 Outcomes Grid */}
        <div className="mt-20">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">
                Enterprise Value Matrix
              </span>
              <h3 className="mt-1 text-xl md:text-2xl font-bold text-[#080357] tracking-tight">
                Architectural &amp; Operational Value
              </h3>
            </div>
            <span className="clay-badge-light inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#080357] uppercase px-4 py-1.5 rounded-full bg-white border border-[#052440]/10 shadow-2xs">
              <Sparkles size={12} className="text-blue-600" />
              <span>End-To-End Transformation</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {outcomes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="clay-light group relative flex flex-col justify-between rounded-2xl bg-white border border-[#052440]/8 p-6 sm:p-7 transition-all duration-300 hover:border-[#080357]/30 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(5,36,64,0.07)]"
                >
                  <div>
                    {/* Icon container */}
                    <div className="clay-badge-light flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50/80 border border-blue-200/60 text-[#080357] mb-4.5 transition-all duration-300 group-hover:bg-[#080357] group-hover:text-[#B7F36B] group-hover:border-[#080357]">
                      <Icon size={20} />
                    </div>

                    <h4 className="text-base sm:text-[17px] font-bold text-[#080357] group-hover:text-blue-700 transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#052440]/70 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


