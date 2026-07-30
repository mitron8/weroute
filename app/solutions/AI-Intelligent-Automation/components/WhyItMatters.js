"use client";

import { motion } from "framer-motion";

const cards = [
  {
    n: "01",
    title: "Operational Complexity",
    desc: "Growing infrastructure and disconnected systems make coordinated, intelligent decision-making harder at scale.",
  },
  {
    n: "02",
    title: "Growing Enterprise Data",
    desc: "Enterprises generate more data than manual teams can realistically analyze, monitor, or act on.",
  },
  {
    n: "03",
    title: "Manual Processes",
    desc: "Manual workflows slow delivery and pull skilled teams away from higher-value work.",
  },
  {
    n: "04",
    title: "Predictive Decision-Making",
    desc: "Without predictive analytics, teams react to problems instead of anticipating them.",
  },
  {
    n: "05",
    title: "Business Agility",
    desc: "Rigid, manual operations make it difficult to respond quickly to changing business conditions.",
  },
  {
    n: "06",
    title: "Scalable Automation",
    desc: "Point automations solve isolated tasks but rarely scale cleanly across the enterprise.",
  },
];

export default function WhyItMatters() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              Enterprise AI Transformation
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#050849] sm:text-5xl lg:text-6xl">
              Why AI &amp; Intelligent <br className="hidden md:block" />
              Automation
              <span className="text-[#98c93c]"> Matter</span>
            </h2>
          </div>

          <p className="max-w-md text-base font-medium leading-relaxed text-[#4c658a]">
            Enterprise data keeps growing, but most organizations still run on manual processes and disconnected AI pilots. Real enterprise AI transformation is not about buying another tool. It requires embedding AI automation and business process automation directly into how the organization operates, so that intelligence drives operational scale, not more headcount.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {cards.map((item, index) => {
            const isFullWidth = index === 5; // 6 cards total

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
                  {item.n}
                </span>

                <div
                  className={`relative z-10 flex flex-col justify-between h-full ${
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

      </div>
    </section>
  );
}
