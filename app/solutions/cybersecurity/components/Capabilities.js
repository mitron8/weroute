"use client";

import {
  Shield,
  Key,
  Activity,
  FileCheck,
  Lock,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Endpoint & Cloud Security",
    description:
      "Unified protection across users, endpoints, and cloud workloads, built for hybrid and multi-cloud enterprise environments.",
    icon: <Shield size={24} className="text-[#050849]" />,
    tags: [
      "Endpoint Protection",
      "Cloud Workloads",
      "Hybrid Security",
    ],
  },
  {
    number: "02",
    title: "Identity & Access Management",
    description:
      "Identity-centric security built on governance and least privilege, securing access across every enterprise system and application.",
    icon: <Key size={24} className="text-[#050849]" />,
    tags: [
      "IAM",
      "Least Privilege",
      "Access Governance",
    ],
  },
  {
    number: "03",
    title: "SOC / SIEM / SOAR",
    description:
      "Centralized visibility, detection, and coordinated response through a modern, architecture-led security operations capability- built for scale.",
    icon: <Activity size={24} className="text-[#050849]" />,
    tags: [
      "Threat Detection",
      "Incident Response",
      "Security Operations",
    ],
  },
  {
    number: "04",
    title: "GRC & Vendor Risk Management",
    description:
      "Governance-driven risk management that strengthens compliance, audit readiness, and oversight across complex enterprise vendor ecosystems.",
    icon: <FileCheck size={24} className="text-[#050849]" />,
    tags: [
      "Compliance",
      "Audit Readiness",
      "Risk Management",
    ],
  },
  {
    number: "05",
    title: "Zero Trust Architecture",
    description:
      "Identity-driven, continuously verified security that replaces implicit trust with least-privilege access at true enterprise scale.",
    icon: <Lock size={24} className="text-[#050849]" />,
    tags: [
      "Continuous Verification",
      "Microsegmentation",
      "ZTA",
    ],
  },
];

export default function NetworkCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#050849]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05084908_1px,transparent_1px),linear-gradient(to_bottom,#05084908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              Cybersecurity Solutions
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Cybersecurity <br />
              <span className="text-[#98c93c]">
                Solution Areas.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base font-medium leading-relaxed text-[#4c658a]">
            Every solution area connects to a broader security strategy. Talk to a specialist to see where your organization stands.
            <br /><br />
            <strong className="font-bold text-[#050849]">WeRoute has supported 40+ enterprise network deployments with 99.9% system reliability across hybrid and multi-cloud environments.</strong>
          </p>
        </div>

        {/* DIAGRAM PLACEHOLDER */}
        <div className="mt-12 w-full h-64 md:h-80 bg-white/50 border-2 border-dashed border-[#050849]/10 rounded-2xl flex flex-col items-center justify-center text-[#4c658a] gap-3">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            <span className="font-medium">Diagram Placeholder</span>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {capabilities.map((item, index) => {
            const isFullWidth = index === 4;

            return (
              <div
                key={item.title}
                className={`clay-light group relative overflow-hidden rounded-[24px] border border-[#050849]/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                    ? "lg:col-span-5"
                    : index === 3
                    ? "lg:col-span-7"
                    : "lg:col-span-12"
                } ${isFullWidth ? "lg:p-10" : ""}`}
              >
                <div
                  className={`flex flex-col justify-between h-full ${
                    isFullWidth
                      ? "lg:flex-row lg:items-center lg:gap-12"
                      : "gap-8"
                  }`}
                >
                  <div className={isFullWidth ? "lg:max-w-xl" : ""}>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f9fc] transition-colors duration-300 group-hover:bg-[#98c93c]">
                        {item.icon}
                      </div>
                      <span className="font-mono text-sm font-bold text-[#050849]/30">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#050849]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-relaxed text-[#4c658a]">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`flex flex-col justify-end gap-6 ${
                      isFullWidth
                        ? "lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:border-l lg:border-[#050849]/5 lg:pl-12"
                        : "mt-auto pt-6 border-t border-[#050849]/5"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-[#f7f9fc] px-3 py-1.5 text-xs font-bold text-[#4c658a] transition-colors group-hover:bg-[#050849] group-hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="group/btn inline-flex items-center gap-2 text-sm font-bold text-[#050849] transition-colors shrink-0">
                      <span>Learn More</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}