"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Activity,
  Cpu,
  Server,
  Bot,
  ArrowRight,
} from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    {
      title: "AI Network Intelligence",
      desc: "AI-driven visibility into network behavior that predicts issues before they affect users, reducing downtime and manual troubleshooting.",
      icon: <Activity size={24} className="text-[#050849]" />,
      tags: ["Predictive Issues", "Reduced Downtime", "Network Visibility"],
      link: "/solution/AI-Intelligent-Automation/ai-network-intelligence"
    },
    {
      title: "AI-Driven Observability",
      desc: "Predictive observability that analyzes telemetry and dependencies to detect issues early and cut through alert fatigue.",
      icon: <Brain size={24} className="text-[#050849]" />,
      tags: ["Predictive Observability", "Telemetry", "Alert Fatigue"],
      link: "/solution/AI-Intelligent-Automation/ai-driven-observability"
    },
    {
      title: "AI Software Services",
      desc: "Enterprise-grade AI applications, copilots, and agentic AI solutions built for production use, not just proof-of-concept demonstrations.",
      icon: <Cpu size={24} className="text-[#050849]" />,
      tags: ["Copilots", "Agentic AI", "Production Ready"],
      link: "/solution/AI-Intelligent-Automation/ai-software-services"
    },
    {
      title: "AI/ML Model Deployment",
      desc: "Governed MLOps and AI implementation services that move models from development into reliable, monitored production systems.",
      icon: <Server size={24} className="text-[#050849]" />,
      tags: ["MLOps", "Model Deployment", "Monitored Systems"],
      link: "/solution/AI-Intelligent-Automation/ai-ml-model-deployment"
    },
    {
      title: "Automation & AIOps",
      desc: "An enterprise automation platform paired with AIOps that correlates events, reduces alert noise, and speeds incident resolution.",
      icon: <Bot size={24} className="text-[#050849]" />,
      tags: ["Enterprise Platform", "AIOps", "Incident Resolution"],
      link: "/solution/AI-Intelligent-Automation/automation-aiops"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#050849]">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-gradient-to-b from-[#98c93c]/10 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              AI &amp; Intelligent Automation Solution Areas
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              AI &amp; Intelligent Automation <br />
              <span className="font-light text-[#4c658a]">
                Solution Areas.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {capabilities.map((item, index) => {
            const colSpan = index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-4";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`clay-light group relative overflow-hidden rounded-[32px] border border-[#050849]/5 bg-white p-8 ${colSpan}`}
              >
                {/* Top Hover Accent Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-[#98c93c] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex flex-col justify-between h-full gap-8">
                  {/* Left/Top Content */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="clay-badge-light flex h-12 w-12 items-center justify-center rounded-xl bg-white transition-colors duration-300 group-hover:bg-[#98c93c]/10">
                        {item.icon}
                      </div>
                      <span className="font-mono text-sm font-bold text-[#4c658a]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#050849]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#4c658a]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right/Bottom Content */}
                  <div className="flex flex-col justify-end gap-6 mt-auto pt-6 border-t border-[#050849]/5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="clay-badge-light rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-[#4c658a] transition-colors group-hover:text-[#050849]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={item.link}
                      className="group/btn inline-flex items-center gap-2 text-sm font-bold text-[#050849] transition-colors hover:text-[#98c93c] shrink-0"
                    >
                      <span>[Learn More]</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Full-width callout container spanning all 12 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="clay-light group relative overflow-hidden rounded-[32px] border border-[#050849]/5 bg-[#f7f9fc] p-8 lg:p-10 lg:col-span-12"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#98c93c] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="flex flex-col justify-between h-full lg:flex-row lg:items-center lg:gap-12">
              <div className="lg:max-w-3xl">
                <p className="text-base font-medium leading-relaxed text-[#050849]">
                  Ready to see how these AI capabilities fit your operations? Talk to a WeRoute AI specialist about where to start.
                </p>
              </div>

              <div className="flex flex-col justify-end gap-6 mt-6 lg:mt-0 pt-6 lg:pt-0 border-t lg:border-t-0 border-[#050849]/5 lg:border-l lg:pl-12 shrink-0">
                <a href="/contact" className="clay-badge-light group/btn inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#050849] transition-colors hover:text-[#98c93c] shrink-0 border border-[#050849]/5">
                  <span>Talk to an AI Specialist</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
