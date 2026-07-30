"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    title: "Slow Provisioning",
    desc: "Manual infrastructure setup delays projects and slows the pace of delivery.",
  },
  {
    title: "Environment Inconsistency",
    desc: "Development, staging, and production environments drift apart without a shared standard.",
  },
  {
    title: "Migration Risk",
    desc: "Cloud migrations without a clear architecture increase the risk of costly rework.",
  },
  {
    title: "Limited Visibility",
    desc: "Teams often cannot see across cloud, application, and infrastructure layers in one place.",
  },
  {
    title: "Governance & Compliance Gaps",
    desc: "Inconsistent policies across environments make compliance harder to prove and maintain.",
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
              Cloud Challenges
            </span>

            <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#050849] md:text-6xl">
              Business
              <br />
              Challenges
              <span className="text-[#98c93c]"> We Solve</span>
            </h2>

            <p className="mt-10 text-lg font-medium leading-relaxed text-[#4c658a]">
              Most cloud challenges are not caused by any single
              tool. They come from disconnected strategy across
              teams, inconsistent infrastructure, and limited
              visibility that slows innovation.
            </p>

            <div className="mt-16 border-l-4 border-[#98c93c] pl-6">
              <p className="text-2xl font-bold leading-relaxed tracking-[-0.03em] text-[#050849]">
                Successful cloud adoption is
                <br />
                built on consistency.
              </p>

              <p className="mt-4 font-medium text-[#4c658a] leading-8">
                Standardized infrastructure,
                automation, and governance
                transform complexity into
                predictable business growth.
              </p>
            </div>
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
                className="clay-light group relative overflow-hidden rounded-[32px] border border-[#050849]/5 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/90"
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