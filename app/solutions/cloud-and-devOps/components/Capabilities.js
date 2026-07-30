"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Terminal,
  FileCode,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Cloud Architecture & Integration",
      desc: "Secure, scalable cloud foundations that unify infrastructure, applications, networking, security, and data into one governed operating model.",
      icon: <Cloud size={24} className="text-[#050849]" />,
      tags: ["Cloud Foundations", "Unified Infrastructure", "Security & Data"],
    },
    {
      title: "DevOps & Platform Engineering",
      desc: "Internal developer platforms and CI/CD practices that give engineering teams standardized, self-service tools for reliable software delivery.",
      icon: <Terminal size={24} className="text-[#050849]" />,
      tags: ["Developer Platforms", "CI/CD Practices", "Self-Service Tools"],
    },
    {
      title: "Infrastructure as Code (IaC)",
      desc: "Automated, version-controlled infrastructure provisioning that replaces manual configuration with consistent, governed environments at enterprise scale.",
      icon: <FileCode size={24} className="text-[#050849]" />,
      tags: ["Automated Provisioning", "Version-Controlled", "Enterprise Scale"],
    },
    {
      title: "Cloud Observability",
      desc: "End-to-end visibility across distributed systems, helping teams resolve issues faster and operate with greater confidence.",
      icon: <Activity size={24} className="text-[#050849]" />,
      tags: ["End-to-End Visibility", "Distributed Systems", "Rapid Resolution"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28 text-[#050849]">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05084908_1px,transparent_1px),linear-gradient(to_bottom,#05084908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

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
              Cloud &amp; DevOps Capabilities
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Cloud &amp; DevOps <br />
              <span className="font-light text-[#4c658a]">
                Capabilities.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {capabilities.map((item, index) => {
            const colSpan = index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5";

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
                      href="#"
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
            className="clay-light group relative overflow-hidden rounded-[32px] border border-[#050849]/5 bg-white p-8 lg:p-10 lg:col-span-12"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#98c93c] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="flex flex-col justify-between h-full lg:flex-row lg:items-center lg:gap-12">
              <div className="lg:max-w-3xl">
                <p className="text-base font-medium leading-relaxed text-[#050849]">
                  Not sure which capability fits your current priorities? Talk to WeRoute about building a cloud and DevOps roadmap that fits where you are today.
                </p>
              </div>

              <div className="flex flex-col justify-end gap-6 mt-6 lg:mt-0 pt-6 lg:pt-0 border-t lg:border-t-0 border-[#050849]/5 lg:border-l lg:pl-12 shrink-0">
                <button className="clay-badge-light group/btn inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#050849] transition-colors hover:text-[#98c93c] shrink-0 border border-[#050849]/5">
                  <span>Talk to WeRoute</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}