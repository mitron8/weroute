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
      "Network performance bottlenecks slowing application delivery",
      "Limited visibility into network health and traffic patterns",
      "Rising operational costs from legacy MPLS",
      "Complex multi-site connectivity with no centralised control",
    ],
    includes: [
      "SD-WAN and SD-LAN",
      "Network Observability",
      "Network as a Service (NaaS)",
      "AI-driven intelligence",
    ],
  },
  {
    id: "02",
    title: "Cloud & DevOps",
    icon: Cloud,
    desc: "Moving to cloud requires more than lift-and-shift. We design and deliver cloud migration services and enterprise cloud services that reduce risk, improve consistency, and accelerate your development velocity.",
    link: "/solutions/cloud-and-devOps",
    problems: [
      "Slow infrastructure provisioning blocking deployments",
      "Operational risk and cost overruns during migration",
      "Inconsistency across cloud and on-premises environments",
      "Security vulnerabilities in cloud configurations",
    ],
    includes: [
      "Cloud architecture design",
      "DevOps platform engineering",
      "Infrastructure as Code (IaC)",
      "Cloud Observability",
    ],
  },
  {
    id: "03",
    title: "Cybersecurity",
    icon: ShieldCheck,
    desc: "Perimeter security doesn’t cut it anymore. We deliver cybersecurity consulting services built on zero trust architecture, where every user, device, and connection is verified before access is granted.",
    link: "/solutions/cybersecurity",
    problems: [
      "Expanding attack surfaces from cloud adoption",
      "Lack of centralised security visibility",
      "Compliance pressure from regulatory frameworks",
      "Reactive incident response with no early warning",
    ],
    includes: [
      "Zero Trust Architecture",
      "Endpoint and Cloud Security",
      "Identity & Access Management",
      "Managed SOC",
    ],
  },
  {
    id: "04",
    title: "AI & Intelligent Automation",
    icon: Cpu,
    desc: "Manual operations create risk and slow teams down. We apply intelligent automation and AI-driven observability to help enterprises detect problems earlier, resolve them faster, and run leaner.",
    link: "/solutions/AI-Intelligent-Automation",
    problems: [
      "Manual, error-prone operations slowing response times",
      "No predictive insight into infrastructure behaviour",
      "Slow incident detection and resolution",
      "Limited data-driven decision making",
    ],
    includes: [
      "AI Network Intelligence",
      "AIOps",
      "Intelligent Automation",
      "Enterprise AI initiatives",
    ],
  },
  {
    id: "05",
    title: "Software & Digital Engineering",
    icon: Code,
    desc: "Software that cannot scale is a liability. We deliver enterprise application development services for organisations that need platforms built for complexity, performance, and long-term maintainability.",
    link: "/solutions/softwareDigitalEngineering",
    problems: [
      "Legacy systems limiting product development velocity",
      "Poor application scalability under growing loads",
      "Disconnected platforms and APIs creating silos",
      "Slow time-to-market from manual deployment processes",
    ],
    includes: [
      "Custom Enterprise Software",
      "API & Platform Engineering",
      "Mobile App Development",
      "Digital Engineering Services",
    ],
  },
];

export default function SolutionsListSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="solutions" className="relative bg-[#f7f9fc] py-28 lg:py-40 overflow-hidden">
      
      {/* --- STATIC BACKGROUND TEXTURES --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Accent Green Blob */}
        <motion.div 
          animate={{ 
            x: [0, -40, 20, 0],
            y: [0, 50, -30, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#98c93c] opacity-[0.07] blur-[120px]" 
        />
        
        {/* Animated Navy Blob */}
        <motion.div 
          animate={{ 
            x: [0, 50, -20, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] bottom-[10%] h-[700px] w-[700px] rounded-full bg-[#050849] opacity-[0.03] blur-[150px]" 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <span className="clay-badge-light inline-block rounded-full border border-[#050849]/10 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849] shadow-sm">
            Our Core Offerings
          </span>
          <h2 className="mt-6 text-3xl font-normal leading-tight text-[#050849] md:text-4xl lg:text-[44px]">
            Solutions We{" "}
            <span className="font-medium bg-gradient-to-r from-[#050849] to-[#4c658a] bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>
        </motion.div>

        {/* EDITORIAL ACCORDION LIST */}
        <div className="flex flex-col gap-4">
          {solutionsData.map((solution, index) => {
            const Icon = solution.icon;
            const isExpanded = expandedId === solution.id;

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="clay-light group relative overflow-hidden mb-4 bg-[#f7f9fc] transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                onClick={() => toggleExpand(solution.id)}
              >
                {/* ALWAYS VISIBLE HEADER ROW */}
                <div className="flex items-center justify-between py-6 md:py-8 px-6 md:px-10">
                  <div className="flex items-center gap-6 md:gap-10">
                    
                    {/* Number / Icon */}
                    <div className="flex items-center gap-6">
                      <span className="hidden md:block text-sm font-bold tracking-[0.2em] text-[#4c658a]/40 transition-colors duration-500 group-hover:text-[#98c93c]">
                        {solution.id}
                      </span>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f7f9fc] border border-[#050849]/5 text-[#050849] transition-all duration-500 group-hover:bg-[#98c93c] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_10px_30px_rgba(152,201,60,0.3)]">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-medium tracking-tight text-[#050849] md:text-3xl transition-colors duration-500">
                      {solution.title}
                    </h3>
                  </div>
                  
                  {/* Expand Chevron */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#050849]/10 text-[#050849] transition-colors duration-300 group-hover:border-[#98c93c] group-hover:text-[#98c93c]"
                  >
                    <ChevronDown size={20} strokeWidth={1.5} />
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
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 md:px-10 md:pb-10 pt-2 border-t border-[#050849]/5 mt-4">
                        <div className="grid gap-12 lg:grid-cols-12 pt-8">
                          
                          {/* LEFT COLUMN: Description & CTA */}
                          <div className="lg:col-span-5 flex flex-col justify-between">
                            <p className="text-lg font-light leading-relaxed text-[#4c658a]">
                              {solution.desc}
                            </p>

                            <div className="mt-8 pt-8 lg:mt-auto">
                              <a
                                href={solution.link}
                                onClick={(e) => e.stopPropagation()} 
                                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-[#050849] transition-all hover:text-[#98c93c]"
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
                          <div className="lg:col-span-7">
                            <div className="grid gap-10 sm:grid-cols-2 rounded-3xl bg-[#f7f9fc]/80 p-8 border border-[#050849]/5 shadow-inner">
                              
                              {/* Problems List */}
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#050849]/40 mb-6">
                                  Problems We Solve
                                </h4>
                                <ul className="space-y-4">
                                  {solution.problems.map((prob, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <CheckCircle2
                                        size={18}
                                        strokeWidth={2}
                                        className="mt-0.5 shrink-0 text-[#98c93c]"
                                      />
                                      <span className="text-sm leading-relaxed text-[#4c658a]">
                                        {prob}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Capabilities */}
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#050849]/40 mb-6">
                                  Capabilities Included
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {solution.includes.map((item, i) => (
                                    <span
                                      key={i}
                                      className="inline-block rounded-full border border-[#050849]/10 bg-white px-4 py-2 text-xs font-medium text-[#4c658a] shadow-sm transition-colors hover:border-[#98c93c] hover:text-[#050849]"
                                    >
                                      {item}
                                    </span>
                                  ))}
                                </div>
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