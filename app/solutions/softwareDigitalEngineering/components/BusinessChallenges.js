"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    title: "Legacy Modernization Stalls",
    desc: "Legacy application modernization stalls when years of workarounds make change risky.",
  },
  {
    title: "Monolithic Architecture",
    desc: "Monolithic architectures make it hard to update one part without affecting everything else.",
  },
  {
    title: "Fragmented APIs",
    desc: "Fragmented APIs force teams to build custom integrations again and again.",
  },
  {
    title: "Slow Delivery Cycles",
    desc: "Slow product delivery cycles consistently let competitors ship improvements first.",
  },
  {
    title: "Performance Bottlenecks",
    desc: "Performance bottlenecks surface under real load, often long after launch.",
  },
  {
    title: "Accumulated Technical Debt",
    desc: "Accumulated technical debt quietly slows down every future release cycle.",
  },
];

export default function BusinessChallenges() {
  return (
    <section className="relative overflow-x-clip bg-[#f7f9fc] py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,8,73,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,8,73,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <span className="clay-badge-light inline-flex rounded-full border border-[#050849]/5 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#050849]">
              Enterprise Challenges
            </span>

            <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#050849] md:text-6xl">
              Business
              <br />
              Challenges
              <span className="text-[#98c93c]"> We Solve</span>
            </h2>

            <p className="mt-10 text-lg font-medium leading-9 text-[#4c658a]">
              Enterprises modernizing complex, legacy-heavy software environments run into the same recurring engineering obstacles again and again.
            </p>

            <div className="mt-16 border-l-2 border-[#98c93c] pl-6">
              <p className="text-2xl font-bold leading-relaxed tracking-[-0.03em] text-[#050849]">
                Software should scale with the business.
              </p>
              <p className="mt-4 text-[#4c658a] font-medium leading-8">
                Not hold it back.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-7">
            {challenges.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="clay-light group relative overflow-hidden rounded-[32px] border border-[#050849]/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="absolute right-8 top-8 text-[60px] font-black leading-none text-[#050849]/[0.03]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="relative z-10 text-2xl font-bold tracking-[-0.03em] text-[#050849]">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-5 max-w-xl text-base font-medium leading-8 text-[#4c658a]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}