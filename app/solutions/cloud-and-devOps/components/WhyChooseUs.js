"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Consulting-Led Transformation",
      desc: "We lead with strategy, not tooling, aligning every cloud and DevOps decision to how your business actually operates.",
    },
    {
      title: "Vendor-Agnostic Design",
      desc: "Solutions are shaped by your environment and goals, not tied to any single cloud provider or platform.",
    },
    {
      title: "Enterprise Governance Expertise",
      desc: "Deep experience embedding governance into cloud and DevOps engagements ensures compliance scales alongside delivery speed.",
    },
    {
      title: "Cloud & Operations Experience",
      desc: "Hands-on experience across architecture, automation, and observability means recommendations reflect what works in production, not just in theory.",
    },
    {
      title: "Long-Term Operational Maturity",
      desc: "Solutions are designed for how the environment will operate for years, not just for a successful initial rollout.",
    },
  ];

  return (
    <section className="relative bg-[#f7f9fc] py-28 text-[#050849] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4c658a0A_1px,transparent_1px),linear-gradient(to_bottom,#4c658a0A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="clay-badge-light inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              Why Choose WeRoute
            </span>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-[#050849]">
              Why Choose <br />
              <span className="font-light text-[#4c658a]">
                WeRoute.
              </span>
            </h2>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {reasons.map((item, index) => {
            const isFullWidth = index === 4;
            const numberString = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`clay-light group relative rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                    ? "lg:col-span-4"
                    : index === 3
                    ? "lg:col-span-8"
                    : "lg:col-span-12"
                } ${isFullWidth ? "lg:p-10" : ""}`}
              >
                {/* Number Badge */}
                <span className="pointer-events-none absolute right-6 top-4 font-mono text-[64px] font-black leading-none text-[#4c658a]/10 select-none group-hover:text-[#98c93c]/20 transition-colors">
                  {numberString}
                </span>

                <div
                  className={`relative z-10 flex flex-col justify-between h-full ${
                    isFullWidth
                      ? "lg:flex-row lg:items-center lg:justify-between lg:gap-12"
                      : "gap-8"
                  }`}
                >
                  <div className={isFullWidth ? "lg:max-w-xl" : ""}>
                    <div className="clay-badge-light flex h-12 w-12 items-center justify-center rounded-xl font-mono text-sm font-bold text-[#050849]">
                      {numberString}
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#050849]">
                      {item.title}
                    </h3>

                    {!isFullWidth && (
                      <p className="mt-3 text-sm leading-relaxed text-[#4c658a]">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  {isFullWidth && (
                    <div className="mt-4 flex-1 lg:mt-0 lg:border-l lg:border-[#4c658a]/20 lg:pl-12">
                      <p className="text-base leading-relaxed text-[#4c658a]">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TRUST STATEMENT BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="clay-light relative mt-16 rounded-[32px] p-8 sm:p-12 lg:p-14"
        >
          <div className="absolute left-0 top-0 h-full w-2 bg-[#98c93c] rounded-l-[32px]" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <p className="max-w-3xl text-xl font-medium leading-relaxed tracking-tight text-[#050849] sm:text-2xl lg:text-3xl">
              &ldquo;We believe cloud and DevOps transformation should be measured by
              operational resilience and delivery speed, not just a successful initial rollout. Every engagement is built around long-term maturity and architectural alignment.&rdquo;
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <div className="h-px w-8 bg-[#4c658a]/30 lg:hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#4c658a]">
                Our Commitment
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}