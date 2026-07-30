"use client";

import { motion } from "framer-motion";

const outcomes = [
  {
    value: "01",
    title: "Faster Feature Delivery",
    description: "Teams ship new features and products faster, without waiting on fragile legacy systems.",
  },
  {
    value: "02",
    title: "Scalable Platforms",
    description: "Digital platforms scale smoothly as usage and business demands grow.",
  },
  {
    value: "03",
    title: "Improved Reliability",
    description: "Systems run more reliably, with fewer outages tied to aging architecture.",
  },
  {
    value: "04",
    title: "Clean Integration",
    description: "Applications, APIs, and data connect cleanly, without relying on one-off workarounds.",
  },
  {
    value: "05",
    title: "Shrinking Technical Debt",
    description: "Technical debt shrinks over time instead of quietly accumulating unchecked.",
  },
  {
    value: "06",
    title: "Long-Term Agility",
    description: "The business gains long-term agility to adapt as priorities and markets shift.",
  },
];

export default function BusinessOutcomes() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,8,73,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,8,73,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-[#f7f9fc] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              Business Outcomes
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#050849] sm:text-5xl lg:text-6xl">
              Business <br />
              <span className="text-[#98c93c]">Outcomes.</span>
            </h2>
          </div>

          <p className="max-w-md text-base font-medium leading-relaxed text-[#4c658a]">
            Technology only matters when it improves business performance. Every
            engineering engagement is designed around measurable outcomes that
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
              className="clay-light group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-[#050849]/5 bg-[#f7f9fc] p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm font-mono text-sm font-bold text-[#050849] transition-colors duration-300 group-hover:bg-[#98c93c]">
                    {item.value}
                  </div>
                  <span className="font-mono text-xs font-bold tracking-widest text-[#4c658a]/40 uppercase">
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

              <div className="mt-8 flex items-center gap-1.5 border-t border-[#050849]/5 pt-4">
                <div className="h-1 w-6 rounded-full bg-[#050849]/10 transition-all duration-300 group-hover:w-12 group-hover:bg-[#98c93c]" />
                <div className="h-1 w-1 rounded-full bg-[#050849]/10 group-hover:bg-[#98c93c]" />
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
              &ldquo;The strongest software systems act as a foundation for growth, allowing the business to move fast without breaking what already works.&rdquo;
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <div className="h-px w-8 bg-[#050849]/10 lg:hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#98c93c]">
                The Goal
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}