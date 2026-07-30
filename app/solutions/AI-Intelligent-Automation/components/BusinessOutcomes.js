"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Zap, Target, Maximize, Activity } from "lucide-react";

const outcomes = [
  {
    title: "Faster Decision-Making",
    desc: "Teams act on predictive analytics instead of waiting for problems to surface.",
    icon: <Target size={20} className="text-[#050849]" />,
  },
  {
    title: "Reduced Manual Work",
    desc: "Automation handles repetitive tasks, freeing skilled teams for higher-value work.",
    icon: <Clock size={20} className="text-[#050849]" />,
  },
  {
    title: "Improved Operational Efficiency",
    desc: "Streamlined workflows reduce the operational drag that slows enterprise delivery.",
    icon: <Zap size={20} className="text-[#050849]" />,
  },
  {
    title: "Predictive Issue Resolution",
    desc: "AI identifies and addresses issues before they escalate into business impact.",
    icon: <Activity size={20} className="text-[#050849]" />,
  },
  {
    title: "Scalable Enterprise Automation",
    desc: "Automation built to scale consistently across teams, systems, and business units.",
    icon: <Maximize size={20} className="text-[#050849]" />,
  },
  {
    title: "Higher Business Agility",
    desc: "Organizations respond faster to change with intelligence built into daily operations.",
    icon: <TrendingUp size={20} className="text-[#050849]" />,
  },
];

export default function BusinessOutcomes() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#050849]">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
            Business Outcomes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
          >
            The Value of <span className="text-[#98c93c]">Intelligent Automation</span>
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="clay-light group relative overflow-hidden rounded-[32px] border border-[#050849]/5 bg-white p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[#98c93c] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="clay-badge-light flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f9fc] transition-colors duration-300 group-hover:bg-[#98c93c]/20">
                {item.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-[#050849]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4c658a]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
