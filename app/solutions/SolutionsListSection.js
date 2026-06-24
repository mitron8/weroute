"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Network,
  Cloud,
  ShieldCheck,
  Cpu,
  Code,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const solutionsData = [
  {
    id: "01",
    title: "Network & Connectivity",
    icon: Network,
    desc: "Enterprise networks are the backbone of everything. We deliver managed network services and network security services that give IT teams visibility, control, and performance assurance across every site.",
    link: "/solutions/network-connectivity",

    problems: [
      "Network performance bottlenecks slowing application delivery and user productivity",
      "Limited visibility into network health, traffic patterns, and site-level performance",
      "Rising operational costs from legacy MPLS and unmanaged WAN infrastructure",
      "Complex multi-site connectivity with no centralised control or policy enforcement",
      "Inconsistent user experience across branch offices, remote sites, and cloud environments",
    ],

    includes: [
      "SD-WAN and SD-LAN deployment and managed network services",
      "Network Observability and Assurance",
      "Network as a Service (NaaS)",
      "AI-driven network intelligence",
      "Mobility and wireless solutions",
    ],
  },
  {
    id: "02",
    title: "Cloud & DevOps",
    icon: Cloud,
    desc: "Moving to cloud requires more than lift-and-shift. We at WeRoute design and deliver cloud migration services and enterprise cloud services that reduce risk, improve consistency, and accelerate your development velocity.",
    link: "/solutions/cloud-devops",

    problems: [
      "Slow infrastructure provisioning blocking development and deployment cycles",
      "Operational risk and cost overruns during cloud adoption and migration",
      "Inconsistency across cloud and on-premises environments creating compliance gaps",
      "Security vulnerabilities in cloud configurations, access policies, and data handling",
      "Limited visibility into cloud application performance and infrastructure spend",
    ],

    includes: [
      "Cloud architecture design and migration services",
      "DevOps services and platform engineering",
      "Infrastructure as Code (IaC)",
      "Enterprise cloud services",
      "Cloud Observability",
    ],
  },
  {
    id: "03",
    title: "Cybersecurity",
    icon: ShieldCheck,
    desc: "Perimeter security doesn’t cut it anymore. We deliver cybersecurity consulting services built on zero trust architecture, where every user, device, and connection is verified before access is granted. Security is not an add-on here, it’s the foundation.",
    link: "/solutions/cybersecurity",

    problems: [
      "Expanding attack surfaces from cloud adoption, remote access, and third-party integrations",
      "Lack of centralised security visibility across network, endpoints, and cloud workloads",
      "Compliance pressure from regulatory frameworks across BFSI, healthcare, and government sectors",
      "Reactive incident response with no proactive threat detection or early warning capability",
      "Tool sprawl creating operational complexity, coverage gaps, and unmanageable alert volumes",
    ],

    includes: [
      "Zero Trust Architecture",
      "Endpoint and Cloud Security",
      "Identity and Access Management",
      "Managed SOC with SIEM and SOAR",
      "GRC & Vendor Risk Management",
    ],
  },
  {
    id: "04",
    title: "AI & Intelligent Automation",
    icon: Cpu,
    desc: "Manual operations create risk and slow teams down. We apply intelligent automation and AI-driven observability to help enterprises detect problems earlier, resolve them faster, and run leaner. We also help organisations evaluate, deploy, and govern enterprise AI and Generative AI initiatives.",
    link: "/solutions/ai-automation",

    problems: [
      "Manual, error-prone operations consuming engineering capacity and slowing response times",
      "No predictive insight into network, infrastructure, or application behaviour patterns",
      "Slow incident detection and resolution increasing mean time to recovery and business impact",
      "Operational inefficiencies across disconnected IT, network, and security teams",
      "Limited data-driven decision making at leadership and operational levels",
    ],

    includes: [
      "AI Network Intelligence",
      "AIOps",
      "Intelligent Automation",
      "AI-Driven Observability",
      "Network Automation Services",
      "Enterprise AI & Generative AI",
    ],
  },
  {
    id: "05",
    title: "Software & Digital Engineering",
    icon: Code,
    desc: "Software that cannot scale is a liability. We deliver enterprise application development services and custom enterprise software development for organisations that need platforms built for complexity, performance, and long-term maintainability.",
    link: "/solutions/software-engineering",

    problems: [
      "Legacy systems limiting innovation, integration, and product development velocity",
      "Poor application scalability under growing user, transaction, and data loads",
      "Disconnected platforms and APIs creating operational silos and data inconsistency",
      "Slow time-to-market from manual development, testing, and deployment processes",
      "Inflexible application architectures that cannot adapt to changing business requirements",
    ],

    includes: [
      "Custom Enterprise Software Development",
      "Enterprise Application Development",
      "API & Platform Engineering",
      "Mobile Application Development",
      "Digital Engineering Services",
    ],
  },
];

export default function SolutionsListSection() {
  // State to track which accordion item is open. 
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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
          className="mb-20 max-w-3xl "
        >
          <span className="inline-block rounded-full border border-[#052440]/10 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440] shadow-sm backdrop-blur-md">
            Our Core Offerings
          </span>
          <h2 className="mt-8 text-4xl font-bold leading-tight tracking-[-0.04em] text-[#052440] md:text-5xl lg:text-6xl">
            Solutions We{" "}
            <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>
        </motion.div>

        {/* SOLUTIONS LIST (ACCORDION) */}
        <div className="flex flex-col gap-6">
          {solutionsData.map((solution, index) => {
            const Icon = solution.icon;
            const isExpanded = expandedId === solution.id;

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[40px] border border-[#052440]/10 bg-white/80 shadow-[0_15px_50px_rgba(5,36,64,0.04)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(5,36,64,0.08)] cursor-pointer"
                onClick={() => toggleExpand(solution.id)}
              >
                {/* Decorative Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#080357]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                {/* ALWAYS VISIBLE HEADER */}
                <div className="relative z-10 flex items-center justify-between p-8 lg:p-10">
                  <div className="flex items-center gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#080357] text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#0d5ea8]">
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="text-sm font-bold tracking-[0.2em] text-[#052440]/40">
                        {solution.id}
                      </span>
                      <h3 className="mt-1 text-2xl font-black tracking-tight text-[#052440] md:text-3xl">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Chevron */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#052440]/5 text-[#052440] group-hover:bg-[#052440]/10"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>

                {/* EXPANDABLE CONTENT */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="grid gap-0 border-t border-[#052440]/10 lg:grid-cols-12">
                        
                        {/* LEFT COLUMN: Description & CTA */}
                        <div className="relative z-10 flex flex-col justify-between p-8 lg:col-span-5 lg:p-10">
                          <p className="text-lg leading-relaxed text-[#052440]/65">
                            {solution.desc}
                          </p>

                          <div className="mt-8 pt-8 border-t border-[#052440]/10 lg:border-none lg:pt-0 lg:mt-12">
                            <a
                              href={solution.link}
                              onClick={(e) => e.stopPropagation()} 
                              className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[#080357] transition-all hover:text-[#A7BF73]"
                            >
                              Explore Solutions
                              <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </a>
                          </div>
                        </div>

                        {/* RIGHT COLUMN: Problems & Includes */}
                        <div className="relative z-10 border-t border-[#052440]/10 bg-[#f7f9fc]/50 p-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-10">
                          <div className="grid gap-10 sm:grid-cols-2">
                            {/* Business Problems List */}
                            <div>
                              <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#052440]/40">
                                Problems We Solve
                              </h4>
                              <ul className="mt-6 space-y-4">
                                {solution.problems.map((prob, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2
                                      size={18}
                                      className="mt-0.5 shrink-0 text-[#A7BF73]"
                                    />
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
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}