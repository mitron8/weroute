"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Risk-Based Security Design",
    description: "Security decisions are grounded in actual business risk, prioritizing what matters most to the organization first.",
  },
  {
    number: "02",
    title: "Architecture-First Strategy",
    description: "Every solution begins with architecture, ensuring security scales with the business instead of becoming a constraint.",
  },
  {
    number: "03",
    title: "Integrated Security Controls",
    description: "Endpoint, identity, cloud, and network controls work together instead of operating as disconnected point solutions.",
  },
  {
    number: "04",
    title: "Centralized Governance",
    description: "A single governance framework brings consistency to policy, risk, and compliance across the entire enterprise.",
  },
  {
    number: "05",
    title: "Security by Design",
    description: "Security is built into infrastructure and processes from the start, not layered on after deployment finishes.",
  }
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05084908_1px,transparent_1px),linear-gradient(to_bottom,#05084908_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#050849]"
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
            Our Cybersecurity
            <br />
            Approach
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg font-medium leading-relaxed text-[#4c658a] sm:text-xl"
          >
            We take an architecture-first approach to cybersecurity, designing security programs around business risk rather than individual tools. Every engagement starts with governance and ends with measurable, sustainable protection across the enterprise.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="clay-light group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#050849]/5 bg-white p-8 transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7f9fc] text-2xl font-black tracking-tight text-[#050849] transition-colors duration-300 group-hover:bg-[#98c93c]">
                    {pillar.number}
                  </span>

                  <span className="text-xs font-bold tracking-widest text-[#4c658a] uppercase">
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
                <div className="h-1 w-6 rounded-full bg-[#050849]/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[#98c93c]" />
                <div className="h-1 w-1 rounded-full bg-[#050849]/20" />
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

          <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <p className="max-w-3xl text-2xl font-bold leading-relaxed tracking-tight text-[#050849] sm:text-3xl">
              &ldquo;Great security programs are not built by buying more tools.
              They are built by aligning security with business risk from the very beginning.&rdquo;
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <div className="h-px w-8 bg-[#050849]/10 lg:hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#4c658a]">
                WeRoute Philosophy
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}