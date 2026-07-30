"use client";

import { motion } from "framer-motion";

const trustCards = [
  {
    number: "01",
    title: "Consulting-Led Security Strategy",
    description: "WeRoute leads with strategy first, designing security programs around business outcomes rather than specific products or vendors.",
  },
  {
    number: "02",
    title: "Vendor-Agnostic Expertise",
    description: "Our recommendations are shaped by what the business needs, not by ties to any single security vendor.",
  },
  {
    number: "03",
    title: "Enterprise Security Experience",
    description: "We bring hands-on experience securing complex, hybrid enterprise environments across networking, cloud, identity, and compliance.",
  },
  {
    number: "04",
    title: "Cross-Domain Integration",
    description: "Security decisions connect across network, cloud, identity, and operations instead of sitting in separate, disconnected silos.",
  },
  {
    number: "05",
    title: "Governance & Compliance Focus",
    description: "Every engagement is grounded in governance, keeping compliance and audit readiness central to the strategy.",
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    description: "We build security programs designed to mature with the business over years, not just a single project.",
  },
];

export default function WhyChooseWeRoute() {
  return (
    <section className="relative bg-[#f7f9fc] py-28 text-[#050849]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05084908_1px,transparent_1px),linear-gradient(to_bottom,#05084908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              Why Choose WeRoute
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Built Around <br />
              <span className="text-[#98c93c]">Long-Term Partnership.</span>
            </h2>
          </div>

          <p className="max-w-md text-base font-medium leading-relaxed text-[#4c658a]">
            Enterprise cybersecurity is not about deploying technology. It is about
            creating an operating foundation that supports growth, resilience,
            and continuous protection.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {trustCards.map((item, index) => {
            const isFullWidth = index === 5;

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
                    ? "lg:col-span-4"
                    : index === 3
                    ? "lg:col-span-4"
                    : index === 4
                    ? "lg:col-span-4"
                    : "lg:col-span-12"
                } ${isFullWidth ? "lg:p-10" : ""}`}
              >
                <span className="pointer-events-none absolute right-6 top-4 font-mono text-[64px] font-black leading-none text-[#050849]/[0.03] select-none group-hover:text-[#050849]/[0.06] transition-colors">
                  {item.number}
                </span>

                <div className={`relative z-10 flex flex-col justify-between h-full ${
                    isFullWidth
                      ? "lg:flex-row lg:items-center lg:justify-between lg:gap-12"
                      : "gap-8"
                  }`}>
                  <div className={isFullWidth ? "lg:max-w-xl" : ""}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f9fc] shadow-sm font-mono text-sm font-bold text-[#050849] transition-colors duration-300 group-hover:bg-[#98c93c]">
                      {item.number}
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#050849]">
                      {item.title}
                    </h3>

                    {!isFullWidth && (
                      <p className="mt-3 text-sm font-medium leading-relaxed text-[#4c658a]">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {isFullWidth && (
                     <div className="mt-4 flex-1 lg:mt-0 lg:border-l lg:border-[#050849]/5 lg:pl-12">
                       <p className="text-base font-medium leading-relaxed text-[#4c658a]">
                         {item.description}
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
              &ldquo;We believe enterprise security should be measured by
              business outcomes, not hardware inventories. Every engagement is
              built around reliability, visibility, scalability, and long-term
              enterprise resilience.&rdquo;
            </p>

            <div className="flex shrink-0 items-center gap-3">
              <div className="h-px w-8 bg-[#050849]/10 lg:hidden" />
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