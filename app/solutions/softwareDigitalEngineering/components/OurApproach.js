"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Architecture First",
    description: "We design the architecture before writing code, so every system is built to scale and adapt from day one.",
  },
  {
    number: "02",
    title: "Domain-Driven",
    description: "We model software around real business domains, so systems reflect how the business actually operates and grows.",
  },
  {
    number: "03",
    title: "API-First",
    description: "Our API engineering puts integration first, so every application, platform, and partner system can connect without custom, one-off work.",
  },
  {
    number: "04",
    title: "Security by Design",
    description: "Security is built into every layer of development from the outset, not added on after systems reach production.",
  },
  {
    number: "05",
    title: "Continuous Modernization",
    description: "We treat software modernization services as continuous, keeping systems current instead of letting technical debt build up over time.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,8,73,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(5,8,73,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-[#f7f9fc] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#050849]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
            Our Approach
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-black leading-[0.98] tracking-tight text-[#050849] sm:text-6xl lg:text-7xl"
          >
            Our Approach to
            <br />
            Software & Digital Engineering
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg font-medium leading-relaxed text-[#4c658a] sm:text-xl"
          >
            WeRoute approaches software product engineering the way enterprise infrastructure demands: with architecture decided first, integration built in from day one, and modernization treated as an ongoing discipline, not a one-time project.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-6 grid-cols-1 sm:grid-cols-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`clay-light group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-[#050849]/5 bg-[#f7f9fc] p-8 ${
                index < 3 ? "lg:col-span-4" : "lg:col-span-6"
              } ${index === 4 ? "sm:col-span-12 lg:col-span-6" : "sm:col-span-6"}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm text-2xl font-black tracking-tight text-[#050849] transition-colors duration-300 group-hover:bg-[#98c93c]">
                    {pillar.number}
                  </span>
                  <span className="text-xs font-bold tracking-widest text-[#4c658a]/50 uppercase">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight text-[#050849]">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-relaxed text-[#4c658a]">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-1.5 pt-4 border-t border-[#050849]/5">
                <div className="h-1 w-6 rounded-full bg-[#050849]/10 transition-all duration-300 group-hover:w-12 group-hover:bg-[#98c93c]" />
                <div className="h-1 w-1 rounded-full bg-[#050849]/10 group-hover:bg-[#98c93c]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 w-full h-[400px] rounded-[32px] border-2 border-dashed border-[#050849]/20 bg-[#f7f9fc] flex flex-col items-center justify-center p-8 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm mb-4">
            <svg
              className="w-8 h-8 text-[#050849]/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#050849] mb-2">Diagram Placeholder</h3>
          <p className="text-[#4c658a] font-medium max-w-lg">
            WeRoute's layered engineering approach, connecting applications, APIs, cloud, and AI, with security built into every layer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="clay-light relative mt-16 overflow-hidden rounded-[32px] border border-[#050849]/5 bg-[#f7f9fc] p-8 sm:p-12 lg:p-14"
        >
          <div className="absolute left-0 top-0 h-full w-2 bg-[#98c93c]" />

          <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <p className="max-w-3xl text-2xl font-bold leading-relaxed tracking-tight text-[#050849] sm:text-3xl">
              &ldquo;WeRoute's layered engineering approach connects applications, APIs, cloud, and AI, with security built into every layer.&rdquo;
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <div className="h-px w-8 bg-[#050849]/20 lg:hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#4c658a]">
                Engineering Philosophy
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}