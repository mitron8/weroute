"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    n: "01",
    title: "Expanding Attack Surface",
    desc: "Cloud adoption and remote work have expanded the enterprise attack surface beyond traditional network boundaries.",
  },
  {
    n: "02",
    title: "Hybrid & Cloud Security",
    desc: "Hybrid and multi-cloud environments create inconsistent security controls across infrastructure, applications, and data.",
  },
  {
    n: "03",
    title: "Compliance Requirements",
    desc: "Regulatory requirements continue to grow more complex, demanding constant audit readiness and governance.",
  },
  {
    n: "04",
    title: "Identity Protection",
    desc: "Identity has become the primary attack vector, requiring continuous verification instead of implicit trust.",
  },
  {
    n: "05",
    title: "Operational Complexity",
    desc: "Disconnected security tools create blind spots and slow down enterprise threat detection and response.",
  },
];

export default function WhyNetworkTransformation() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#050849]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05084908_1px,transparent_1px),linear-gradient(to_bottom,#05084908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
            Cybersecurity Modernization
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-[#050849] sm:text-5xl lg:text-6xl">
            Why Cybersecurity <br className="hidden md:block" />
            Transformation
            <span className="text-[#98c93c]"> Matters</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-[#4c658a] sm:text-lg sm:leading-8">
            Traditional, perimeter-based security is no longer sufficient for enterprises running hybrid infrastructure, multi-cloud platforms, and distributed teams. Attack surfaces are expanding, compliance requirements are tightening, and identity has become the new frontline of enterprise defense. Organizations need cybersecurity solutions built on architecture, not isolated tools.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {challenges.map((item, index) => {
            const isFullWidth = index === 4;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`clay-light group relative overflow-hidden rounded-[32px] border border-[#050849]/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                    ? "lg:col-span-5"
                    : index === 3
                    ? "lg:col-span-7"
                    : "lg:col-span-12"
                } ${isFullWidth ? "lg:p-10" : ""}`}
              >
                <span className="pointer-events-none absolute right-6 top-4 font-mono text-[64px] font-black leading-none text-[#050849]/[0.03] select-none group-hover:text-[#050849]/[0.06] transition-colors">
                  {item.n}
                </span>

                <div
                  className={`relative z-10 flex h-full flex-col justify-between ${
                    isFullWidth
                      ? "lg:flex-row lg:items-center lg:justify-between lg:gap-12"
                      : "gap-8"
                  }`}
                >
                  <div className={isFullWidth ? "lg:max-w-xl" : ""}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f9fc] shadow-sm font-mono text-sm font-bold text-[#050849] transition-colors duration-300 group-hover:bg-[#98c93c]">
                      {item.n}
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#050849]">
                      {item.title}
                    </h3>

                    {!isFullWidth && (
                      <p className="mt-3 text-sm font-medium leading-relaxed text-[#4c658a]">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  {isFullWidth && (
                    <div className="mt-4 flex-1 lg:mt-0 lg:border-l lg:border-[#050849]/5 lg:pl-12">
                      <p className="text-base font-medium leading-relaxed text-[#4c658a]">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
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
              &ldquo;Security should not slow the business down.{" "}
              <span className="text-[#98c93c]">
                It should be the reason the business can move faster.
              </span>
              &rdquo;
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <div className="h-px w-8 bg-[#050849]/10 lg:hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#4c658a]">
                Core Philosophy
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}