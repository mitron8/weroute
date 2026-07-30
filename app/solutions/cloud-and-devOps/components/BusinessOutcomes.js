"use client";

import { motion } from "framer-motion";

export default function BusinessOutcomes() {
  const outcomes = [
    {
      title: "Faster Deployments",
      desc: "Software and infrastructure changes ship faster, with fewer manual steps in the way.",
    },
    {
      title: "Consistent Environments",
      desc: "Every environment is provisioned the same way, removing team-to-team variation.",
    },
    {
      title: "Reduced Operational Risk",
      desc: "Standardized processes and governance lower the chance of costly configuration errors.",
    },
    {
      title: "Improved Reliability",
      desc: "Systems built on governed architecture experience fewer unexpected disruptions overall.",
    },
    {
      title: "Better Cost Visibility",
      desc: "Clear visibility into cloud spend, helps teams control costs as usage scales.",
    },
    {
      title: "Scalable Cloud Operations",
      desc: "Processes that work for a small footprint continue working as the organization grows.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#050849]">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,8,73,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,8,73,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient Top Glow in signature #98c93c */}
      <div className="pointer-events-none absolute right-[-5%] top-[-5%] -z-10 h-[500px] w-[500px] rounded-full bg-[#98c93c]/10 blur-3xl" />

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
              Outcomes
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Business <span className="text-[#98c93c]">Outcomes.</span>
            </motion.h2>
          </div>
        </div>

        {/* OUTCOMES GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="clay-light group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-[#050849]/5 bg-white p-8 transition-all duration-300"
            >
              {/* Top Accent Hover Line in #98c93c */}
              <div className="absolute inset-x-0 top-0 h-1 bg-[#98c93c] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Header: Number Badge & Step Label */}
                <div className="flex items-center justify-between">
                  <div className="clay-badge-light flex h-12 w-12 items-center justify-center rounded-xl bg-white font-mono text-sm font-bold text-[#050849] transition-colors duration-300 group-hover:bg-[#98c93c] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-widest text-[#4c658a] uppercase">
                    Outcome
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-bold tracking-tight text-[#050849]">
                  {outcome.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#4c658a]">
                  {outcome.desc}
                </p>
              </div>

              {/* Bottom Decorative Indicator Bar */}
              <div className="mt-8 flex items-center gap-1.5 border-t border-[#050849]/5 pt-4">
                <div className="h-1 w-6 rounded-full bg-[#050849]/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[#98c93c]" />
                <div className="h-1 w-1 rounded-full bg-[#050849]/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}