"use client";

import { motion } from "framer-motion";

const outcomes = [
  {
    value: "01",
    title: "Reduced Security Risk",
    description: "A stronger security posture reduces exposure to breaches, downtime, and reputational damage.",
  },
  {
    value: "02",
    title: "Faster Threat Response",
    description: "Coordinated detection and response shortens the time between an alert and it’s resolution.",
  },
  {
    value: "03",
    title: "Improved Compliance",
    description: "Continuous governance keeps organizations audit-ready instead of scrambling before each review cycle.",
  },
  {
    value: "04",
    title: "Better Security Visibility",
    description: "Unified visibility gives security teams a clear, accurate view of enterprise risk.",
  },
  {
    value: "05",
    title: "Simplified Operations",
    description: "Integrated security architecture reduces tool sprawl and operational overhead across teams.",
  },
  {
    value: "06",
    title: "Future-Ready Security",
    description: "A scalable security foundation adapts as the business, threats, and technology evolve.",
  },
];

export default function BusinessOutcomes() {
  return (
    <section className="relative bg-[#f7f9fc] py-28">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,8,73,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,8,73,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              Business Outcomes
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#050849] sm:text-5xl lg:text-6xl">
              Results That <br />
              Matter To <span className="text-[#98c93c]">Business.</span>
            </h2>
          </div>

          <p className="max-w-md text-base font-medium leading-relaxed text-[#4c658a]">
            Technology only matters when it improves business performance. Every
            cybersecurity engagement is designed around measurable outcomes that
            create long-term value.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="clay-light group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#050849]/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[#98c93c] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f9fc] shadow-sm font-mono text-sm font-bold text-[#050849] transition-colors duration-300 group-hover:bg-[#98c93c]">
                    {item.value}
                  </div>
                  <span className="font-mono text-xs font-bold tracking-widest text-[#4c658a] uppercase">
                    Outcome
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight text-[#050849]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-relaxed text-[#4c658a]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="clay-light relative mt-16 overflow-hidden rounded-[32px] border border-[#050849]/5 bg-white p-8 sm:p-12 lg:p-14"
        >
          <div className="absolute left-0 top-0 h-full w-2 bg-[#98c93c]" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <p className="max-w-3xl text-xl font-bold leading-relaxed tracking-tight text-[#050849] sm:text-2xl lg:text-3xl">
              &ldquo;The strongest security programs are often the least intrusive. They
              simply allow the business to operate safely without slowing it down.&rdquo;
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <div className="h-px w-8 bg-[#050849]/10 lg:hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#4c658a]">
                The Goal
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}