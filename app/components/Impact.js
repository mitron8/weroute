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
  SlidersHorizontal
} from "lucide-react";

const metrics = [
  {
    value: "40+",
    label: "Enterprise Technology Projects",
    desc: "Delivered across networking, cloud, and security."
  },
  {
    value: "24x7",
    label: "Operational Support",
    desc: "Continuous proactive monitoring and incident management."
  },
  {
    value: "99.9%",
    label: "System Reliability",
    desc: "Across applicable managed environments."
  },
  {
    value: "50+",
    label: "Technology Engagements Delivered",
    desc: "End-to-end strategic architectures and deployments."
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
      className="relative overflow-hidden bg-[#0E1A59] py-28 text-white"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#B7F36B]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="clay-badge inline-flex items-center border border-white/10 bg-white/[0.04] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Impact
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-[44px] tracking-tight">
            Technology Outcomes That{" "}
            <span className="bg-gradient-to-r from-white via-white/95 to-[#B7F36B] bg-clip-text text-transparent">
              Move the Business Forward
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70 font-light">
            Real impact measured in velocity, operational uptime, and architectural clarity.
          </p>
        </motion.div>

        {/* 4 Stats Cards with Claymorphism */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="clay-dark relative bg-white/[0.04] border border-white/10 p-8 transition-all duration-300 hover:border-white/25 hover:-translate-y-1"
            >
              <div className="text-4xl md:text-5xl font-black tracking-tight text-white">
                {m.value}
              </div>
              <div className="mt-3 text-base font-bold text-white/90">
                {m.label}
              </div>
              <div className="mt-1 text-xs text-white/60">
                {m.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 8 Outcomes Grid in Claymorphic Tiles */}
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold text-white/90">
              Architectural &amp; Operational Value
            </h3>
            <span className="clay-badge hidden sm:inline-block text-xs font-mono tracking-widest text-white/70 uppercase px-4 py-1.5 bg-white/[0.04]">
              End-To-End Transformation
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="clay-dark group relative flex flex-col justify-between bg-white/[0.03] border border-white/10 p-7 transition-all duration-300 hover:border-white/25 hover:-translate-y-1"
                >
                  <div>
                    <div className="clay-badge flex h-12 w-12 items-center justify-center bg-white/10 text-[#B7F36B] mb-5 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#B7F36B] transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/65">
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
