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
    <section className="relative overflow-hidden bg-[#080357] py-28 text-white">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient Top Glow in signature #B7F36B */}
      <div className="pointer-events-none absolute right-[-5%] top-[-5%] -z-10 h-[500px] w-[500px] rounded-full bg-[#B7F36B]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7F36B]" />
              Outcomes
            </span>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Business <span className="text-[#B7F36B]">Outcomes.</span>
            </h2>
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
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#B7F36B]/40 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20"
            >
              {/* Top Accent Hover Line in #B7F36B */}
              <div className="absolute inset-x-0 top-0 h-1 bg-[#B7F36B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Header: Number Badge & Step Label */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] font-mono text-sm font-bold text-white shadow-sm transition-colors duration-300 group-hover:border-[#B7F36B] group-hover:bg-[#B7F36B] group-hover:text-[#080357]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-widest text-white/30 uppercase">
                    Outcome
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#B7F36B]">
                  {outcome.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {outcome.desc}
                </p>
              </div>

              {/* Bottom Decorative Indicator Bar */}
              <div className="mt-8 flex items-center gap-1.5 border-t border-white/5 pt-4">
                <div className="h-1 w-6 rounded-full bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[#B7F36B]" />
                <div className="h-1 w-1 rounded-full bg-white/20 group-hover:bg-[#B7F36B]/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}