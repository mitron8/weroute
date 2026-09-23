"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Cog,
  Shield,
  Cloud,
  BrainCircuit,
  GitFork
} from "lucide-react";

const capabilities = [
  {
    icon: Eye,
    n: "01",
    t: "Network Observability",
    b: "Gain deeper visibility into traffic, dependencies, performance, events, and network health to accelerate troubleshooting and optimization.",
    tags: ["Telemetry", "Flow Analysis", "Health Diagnostics"],
  },
  {
    icon: Cog,
    n: "02",
    t: "Infrastructure as Code",
    b: "Standardize and automate infrastructure provisioning using governed, version-controlled engineering practices.",
    tags: ["Terraform", "Ansible", "Version Controlled"],
  },
  {
    icon: Shield,
    n: "03",
    t: "Security Operations",
    b: "Strengthen detection, investigation, response, and governance across enterprise security operations.",
    tags: ["SIEM & SOAR", "Incident Response", "Governance"],
  },
  {
    icon: Cloud,
    n: "04",
    t: "Cloud Operations",
    b: "Improve reliability, governance, visibility, scalability, and cost control across cloud and hybrid environments.",
    tags: ["Hybrid Governance", "Cost Control", "Reliability"],
  },
  {
    icon: BrainCircuit,
    n: "05",
    t: "AI Operations & Automation",
    b: "Apply intelligence and automation across infrastructure, applications, and operational workflows.",
    tags: ["AIOps", "Workflow Automation", "Self-Healing"],
  },
  {
    icon: GitFork,
    n: "06",
    t: "API & Integration Engineering",
    b: "Connect applications, data, platforms, and workflows through secure and reusable integration architectures.",
    tags: ["API Gateways", "Event Brokers", "System Mesh"],
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#0E1A59]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-[#080357]/5 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-[#0d5ea8]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="clay-badge-light inline-flex items-center border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
              Engineering Capabilities
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#080357] md:text-4xl lg:text-[44px] tracking-tight">
              Engineering Capabilities for{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                Modern Enterprise IT
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-xl text-base sm:text-lg leading-relaxed text-[#052440]/70 font-normal"
          >
            Beneath the solution categories sits the engineering work that makes them hold up in production, from network observability through infrastructure automation.
          </motion.p>
        </div>

        {/* 6 Capabilities Claymorphic Grid */}
        <div className="mt-20 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="clay-light group relative flex flex-col justify-between bg-[#f7f9fc] border border-[#052440]/5 p-8 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex items-start justify-between mb-6">
                    <div className="clay-badge-light flex h-14 w-14 items-center justify-center bg-[#080357] text-white transition-transform duration-300 group-hover:scale-105">
                      <Icon size={24} />
                    </div>

                    <span className="clay-badge-light px-3 py-1 text-xs font-mono font-extrabold tracking-widest text-[#052440]/40 bg-[#f7f9fc]">
                      {c.n}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-[#080357]">
                      {c.t}
                    </h3>

                    <p className="mt-3.5 text-base leading-relaxed text-[#052440]/70">
                      {c.b}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#052440]/10 flex flex-wrap gap-2">
                    {c.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="clay-badge-light text-[11px] font-medium px-3 py-1 bg-[#f7f9fc] text-[#052440]/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}