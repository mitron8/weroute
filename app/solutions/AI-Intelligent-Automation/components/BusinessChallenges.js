"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    title: "Manual Operations",
    desc: "Teams still spend hours on repetitive tasks that automation could handle reliably.",
  },
  {
    title: "Limited Predictive Insights",
    desc: "Without predictive analytics, issues are caught only after they already affect the business.",
  },
  {
    title: "Operational Silos",
    desc: "Disconnected systems and teams limit visibility across the wider organization.",
  },
  {
    title: "AI Production Readiness",
    desc: "Many AI pilots never reach production because of governance and integration gaps.",
  },
  {
    title: "Scaling Automation",
    desc: "What works for one team rarely scales cleanly across the enterprise.",
  },
  {
    title: "Fragmented AI Initiatives",
    desc: "Isolated AI projects create inconsistent value instead of coordinated enterprise impact.",
  },
];

export default function BusinessChallenges() {
  return (
    <section className="relative overflow-x-clip bg-[#f7f9fc] py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-12 lg:items-start">
          {/* LEFT CONTENT - Pinned Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <span className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              Enterprise AI Adoption
            </span>

            <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#050849] md:text-6xl">
              Business
              <br />
              Challenges
              <span className="text-[#98c93c]"> We Solve</span>
            </h2>

            <p className="mt-10 text-lg font-medium leading-relaxed text-[#4c658a]">
              Enterprise AI adoption often stalls not from a lack of ambition, but from execution gaps that keep initiatives fragmented.
            </p>
          </div>

          {/* RIGHT CONTENT - Scrolling Glassmorphism Cards */}
          <div className="lg:col-span-7 grid gap-6">
            {challenges.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="clay-light group relative overflow-hidden rounded-[32px] border border-[#050849]/5 bg-[#f7f9fc] p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/90"
              >
                {/* Background Number Watermark */}
                <span className="pointer-events-none absolute right-8 top-8 font-mono text-[60px] font-black leading-none text-[#050849]/[0.03] transition-colors group-hover:text-[#050849]/[0.06]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="relative z-10 text-2xl font-bold tracking-tight text-[#050849]">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-5 max-w-xl text-base font-medium leading-relaxed text-[#4c658a]">
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
