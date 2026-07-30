"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    title: "Evolving Cyber Threats",
    desc: "Attackers constantly adapt their methods, outpacing static defenses and outdated security playbooks.",
  },
  {
    title: "Limited Security Visibility",
    desc: "Fragmented tools leave security teams without a unified view of enterprise risk.",
  },
  {
    title: "Compliance Pressure",
    desc: "Expanding regulations require continuous evidence of governance, not periodic point-in-time audits.",
  },
  {
    title: "Slow Threat Detection",
    desc: "Delayed detection allows threats to spread further before security teams can respond.",
  },
  {
    title: "Security Tool Sprawl",
    desc: "Too many disconnected tools increase cost, complexity, and the chance of gaps.",
  },
];

export default function BusinessChallenges() {
  return (
    <section className="relative bg-[#f7f9fc] py-32 text-[#050849]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05084908_1px,transparent_1px),linear-gradient(to_bottom,#05084908_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <span className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              Enterprise Challenges
            </span>

            <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#050849] md:text-6xl">
              Business
              <br />
              Challenges
              <span className="text-[#98c93c]"> We Solve</span>
            </h2>

            <p className="mt-10 text-lg font-medium leading-9 text-[#4c658a]">
              Enterprises face a growing set of security challenges that traditional tools and fragmented strategies cannot solve alone.
            </p>

            <div className="mt-16 border-l-2 border-[#98c93c] pl-6">
              <p className="text-2xl font-bold leading-relaxed tracking-[-0.03em] text-[#050849]">
                Security should be built by design.
              </p>
              <p className="mt-4 font-medium text-[#4c658a] leading-8">
                Not layered on after deployment finishes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-6">
            {challenges.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="clay-light group relative rounded-[32px] border border-[#050849]/5 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="pointer-events-none absolute right-8 top-8 text-[60px] font-black leading-none text-[#050849]/[0.03] transition-colors group-hover:text-[#050849]/[0.06]">
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