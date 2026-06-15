"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  Cloud,
  ShieldCheck,
  Cpu,
  Code,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const solutionsData = [
  {
    id: "01",
    title: "Network & Connectivity",
    icon: Network,
    desc: "Build resilient, intelligent, and scalable enterprise networks that support modern applications, users, and hybrid environments.",
    link: "/solutions/network-connectivity",
    problems: [
      "Network performance bottlenecks",
      "Limited visibility into network health",
      "Complex multi-site connectivity",
      "Inconsistent user experience",
      "Operational inefficiencies at scale",
    ],
    includes: [
      "AI Network Solutions",
      "SD-WAN / SD-LAN / SDN",
      "Network Observability & Assurance",
      "Network as a Service (NaaS)",
      "Mobility & Wireless Solutions",
    ],
  },
  {
    id: "02",
    title: "Cloud & DevOps",
    icon: Cloud,
    desc: "Enable agility, consistency, and governance across cloud and hybrid IT environments to accelerate digital transformation.",
    link: "/solutions/cloud-devops",
    problems: [
      "Slow infrastructure provisioning",
      "Lack of consistency across environments",
      "Operational risk in cloud adoption",
      "Limited visibility into performance and cost",
      "Security gaps in cloud operations",
    ],
    includes: [
      "Cloud Architecture & Integration",
      "DevOps & Platform Engineering",
      "Infrastructure as Code (IaC)",
      "Cloud Observability",
    ],
  },
  {
    id: "03",
    title: "Cybersecurity",
    icon: ShieldCheck,
    desc: "Protect users, data, and infrastructure with proactive, enterprise-ready security architectures and zero-trust frameworks.",
    link: "/solutions/cybersecurity",
    problems: [
      "Increasing cyber threats & attack surfaces",
      "Lack of centralized security visibility",
      "Compliance and regulatory pressure",
      "Reactive incident response",
      "Tool sprawl and operational complexity",
    ],
    includes: [
      "Endpoint & Cloud Security",
      "Identity & Access Management",
      "SOC / SIEM / SOAR",
      "GRC & Vendor Risk Management",
      "Zero Trust Architecture",
    ],
  },
  {
    id: "04",
    title: "AI & Intelligent Automation",
    icon: Cpu,
    desc: "Apply intelligence and automation to improve operational visibility, efficiency, and data-driven decision-making.",
    link: "/solutions/ai-automation",
    problems: [
      "Manual, error-prone operations",
      "Lack of predictive insights",
      "Operational inefficiencies",
      "Slow incident detection and resolution",
      "Limited data-driven decision making",
    ],
    includes: [
      "AI Network Intelligence",
      "AI-Driven Observability",
      "AI Software Services",
      "AI/ML Model Deployment",
      "Automation & AIOps",
    ],
  },
  {
    id: "05",
    title: "Software & Digital Engineering",
    icon: Code,
    desc: "Design, build, and modernize digital platforms and enterprise applications that scale seamlessly with business growth.",
    link: "/solutions/software-engineering",
    problems: [
      "Legacy systems limiting innovation",
      "Poor system scalability and performance",
      "Disconnected platforms and APIs",
      "Slow time-to-market",
      "Inflexible application architectures",
    ],
    includes: [
      "Custom Software Development",
      "Enterprise Applications",
      "Mobile Application Development",
      "API & Platform Engineering",
    ],
  },
];

export default function SolutionsListSection() {
  return (
    <section id="solutions" className="relative bg-[#f7f9fc] py-28">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(5,36,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <span className="inline-block rounded-full border border-[#052440]/10 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440] shadow-sm backdrop-blur-md">
            Our Core Offerings
          </span>
          <h2 className="mt-8 text-4xl font-black leading-tight tracking-[-0.04em] text-[#052440] md:text-5xl lg:text-6xl">
            Solutions We{" "}
            <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>
        </motion.div>

        {/* SOLUTIONS LIST */}
        <div className="flex flex-col gap-12">
          {solutionsData.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[40px] border border-[#052440]/10 bg-white/80 shadow-[0_15px_50px_rgba(5,36,64,0.04)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(5,36,64,0.08)]"
              >
                {/* Decorative Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#080357]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="grid gap-0 lg:grid-cols-12">
                  
                  {/* LEFT COLUMN: Overview & CTA */}
                  <div className="relative z-10 flex flex-col justify-between p-10 lg:col-span-5 lg:p-14 lg:pr-10">
                    <div>
                      <div className="flex items-center gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#080357] text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#0d5ea8]">
                          <Icon size={24} />
                        </div>
                        <span className="text-sm font-bold tracking-[0.2em] text-[#052440]/40">
                          {solution.id}
                        </span>
                      </div>
                      
                      <h3 className="mt-8 text-3xl font-black tracking-tight text-[#052440] md:text-4xl">
                        {solution.title}
                      </h3>
                      
                      <p className="mt-6 text-lg leading-relaxed text-[#052440]/65">
                        {solution.desc}
                      </p>
                    </div>

                    <div className="mt-12 lg:mt-0 pt-8 border-t border-[#052440]/10 lg:border-none lg:pt-0">
                      <a
                        href={solution.link}
                        className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[#080357] transition-all hover:text-[#A7BF73]"
                      >
                        Explore Solutions
                        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Problems & Includes */}
                  <div className="relative z-10 border-t border-[#052440]/10 bg-[#f7f9fc]/50 p-10 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-14">
                    <div className="grid gap-12 sm:grid-cols-2">
                      
                      {/* Business Problems List */}
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#052440]/40">
                          Problems We Solve
                        </h4>
                        <ul className="mt-6 space-y-4">
                          {solution.problems.map((prob, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#A7BF73]" />
                              <span className="text-[15px] font-medium leading-relaxed text-[#052440]/80">
                                {prob}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Capabilities Included */}
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#052440]/40">
                          Capabilities Included
                        </h4>
                        <div className="mt-6 flex flex-wrap gap-2.5">
                          {solution.includes.map((item, i) => (
                            <span
                              key={i}
                              className="inline-block rounded-xl border border-[#052440]/10 bg-white px-4 py-2.5 text-sm font-semibold text-[#052440]/70 shadow-sm transition-colors hover:border-[#080357]/20 hover:text-[#080357]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
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