"use client";

import { motion } from "framer-motion";

const trustCards = [
  {
    number: "01",
    title: "Consulting-Led Engagement",
    description:
      "We start every network engagement with strategy, not a sales pitch for hardware you may not actually need.",
  },
  {
    number: "02",
    title: "Vendor-Agnostic Design",
    description:
      "We recommend technologies based on architectural fit, operational requirements, and long-term scalability, not vendor incentives.",
  },
  {
    number: "03",
    title: "Enterprise Delivery Experience",
    description:
      "With 40+ enterprise projects delivered and 99.9% system reliability, we bring the rigour that complex networks genuinely demand.",
  },
  {
    number: "04",
    title: "Integrated Technology Expertise",
    description:
      "Network, security, and cloud expertise under one roof, so nothing falls through the cracks between vendors.",
  },
  {
    number: "05",
    title: "Long-Term Optimisation",
    description:
      "We do not disappear after deployment. The network keeps getting better long after go-live day.",
  },
];

export default function WhyChooseWeRoute() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28 text-[#080357]">
      {/* Architectural Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#08035708_1px,transparent_1px),linear-gradient(to_bottom,#08035708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient Top Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-gradient-to-b from-[#080357]/5 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#080357]/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#080357] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#080357]" />
              Why Choose WeRoute
            </span>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Built Around <br />
              <span className="font-light text-[#080357]/60">
                Long-Term Partnership.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-[#080357]/70">
            Enterprise networking is not about deploying technology. It is about
            creating an operating foundation that supports growth, resilience,
            and continuous optimisation.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {trustCards.map((item, index) => {
            const isFullWidth = index === 4;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`
                  group relative overflow-hidden rounded-[24px] border border-[#080357]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#080357]/30 hover:shadow-xl hover:shadow-[#080357]/5
                  ${
                    index === 0
                      ? "lg:col-span-7"
                      : index === 1
                      ? "lg:col-span-5"
                      : index === 2
                      ? "lg:col-span-4"
                      : index === 3
                      ? "lg:col-span-8"
                      : "lg:col-span-12"
                  }
                  ${isFullWidth ? "lg:p-10" : ""}
                `}
              >
                {/* Top Hover Accent Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-[#080357] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Subtle Background Watermark Number */}
                <span className="pointer-events-none absolute right-6 top-4 font-mono text-[64px] font-black leading-none text-[#080357]/[0.03] select-none group-hover:text-[#080357]/[0.06] transition-colors">
                  {item.number}
                </span>

                <div
                  className={`relative z-10 flex flex-col justify-between h-full ${
                    isFullWidth
                      ? "lg:flex-row lg:items-center lg:justify-between lg:gap-12"
                      : "gap-8"
                  }`}
                >
                  {/* Left / Top Section */}
                  <div className={isFullWidth ? "lg:max-w-xl" : ""}>
                    {/* Number Badge */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#080357]/10 bg-[#080357]/[0.03] font-mono text-sm font-bold text-[#080357] transition-colors duration-300 group-hover:border-[#080357]/20 group-hover:bg-[#080357] group-hover:text-white">
                      {item.number}
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#080357]">
                      {item.title}
                    </h3>

                    {/* Render description directly here if NOT full width */}
                    {!isFullWidth && (
                      <p className="mt-3 text-sm leading-relaxed text-[#080357]/70">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Right / Bottom Section (Only used for Full Width Card to balance layout) */}
                  {isFullWidth && (
                    <div className="mt-4 flex-1 lg:mt-0 lg:border-l lg:border-[#080357]/10 lg:pl-12">
                      <p className="text-base leading-relaxed text-[#080357]/70">
                        {item.description}
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
          className="relative mt-16 overflow-hidden rounded-[32px] bg-[#080357] p-8 text-white shadow-xl shadow-[#080357]/10 sm:p-12 lg:p-14"
        >
          {/* Background Ambient Glow Inside Banner */}
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-400 to-indigo-600" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <p className="max-w-3xl text-xl font-medium leading-relaxed tracking-tight text-white/90 sm:text-2xl lg:text-3xl">
              &ldquo;We believe enterprise networking should be measured by
              business outcomes, not hardware inventories. Every engagement is
              built around reliability, visibility, scalability, and long-term
              operational value.&rdquo;
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <div className="h-px w-8 bg-white/30 lg:hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                Our Commitment
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}