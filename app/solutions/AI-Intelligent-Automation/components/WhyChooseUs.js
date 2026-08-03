"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Architecture-Led AI Strategy",
    desc: "WeRoute designs AI strategy and AI advisory services around your existing architecture and operating model, not a generic AI consulting firm playbook.",
  },
  {
    title: "Enterprise AI Expertise",
    desc: "Deep enterprise AI and agentic AI consulting experience across networking, cloud, and operations means recommendations reflect what works at real scale.",
  },
  {
    title: "Vendor-Agnostic Frameworks",
    desc: "AI and automation decisions are shaped by your goals and environment, not tied to a single vendor platform.",
  },
  {
    title: "Responsible AI Governance",
    desc: "Best practices of AI governance and responsible AI consulting are built into every engagement, not treated as an afterthought.",
  },
  {
    title: "Long-Term Operational Maturity",
    desc: "WeRoute supports ongoing AI maturity assessment and continuous improvement well beyond initial deployment, not just the first rollout.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#050849]">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <span className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              Why Choose WeRoute
            </span>
            <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
              Enterprise AI <br />
              <span className="text-[#98c93c]">Done Right.</span>
            </h2>
          </div>

          <div className="lg:w-2/3 grid gap-6">
            {reasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="clay-light flex gap-5 rounded-[24px] border border-[#050849]/5 bg-[#f7f9fc] p-6 sm:p-8 hover:-translate-y-1 transition-transform"
              >
                <div className="shrink-0 mt-1 text-[#98c93c]">
                  <CheckCircle2 size={24} className="fill-[#98c93c]/20" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#050849]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#4c658a]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Within Your Technology Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="clay-light mt-20 relative overflow-hidden rounded-[32px] border border-[#050849]/5 bg-[#050849] p-10 lg:p-14 text-white text-center"
        >
           <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[200px] w-[600px] rounded-full bg-[#98c93c]/20 blur-[80px] pointer-events-none" />
           <div className="relative z-10 max-w-4xl mx-auto">
             <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#98c93c]">AI Within Your Technology Strategy</h3>
             <p className="text-lg sm:text-xl font-medium leading-relaxed text-white/90">
               AI and intelligent automation are core to building intelligent enterprise solutions that connect to your wider technology strategy, supporting network operations, cloud infrastructure, and application development as they scale.
             </p>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
