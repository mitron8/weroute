"use client";

import { motion } from 'framer-motion';

export default function ServicesPhilosophy() {
  return (
    <section className="py-24 bg-[#f7f9fc] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
           >
              <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
                <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
                Delivery Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6 tracking-tight">
                 How WeRoute Delivers{" "}
                 <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                   Services
                 </span>
              </h2>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="prose prose-lg prose-blue mx-auto text-[#080357]/80 font-medium leading-relaxed"
           >
              <p className="mb-6">
                 Most enterprises work with a patchwork of vendors: one firm for infrastructure, another for security, a third for staffing, and an internal team left to hold it all together. WeRoute was built around a different idea.
              </p>
              <p className="mb-6">
                 A single technology partner should be able to plan the strategy, build the platform, secure the environment, run daily operations, and keep improving all of it as the business changes. That is what end-to-end technology solutions actually mean in practice. It doesn't mean a slide with five logos, but one accountable team across the full journey.
              </p>
              <p>
                 Clients bring us in early during planning or later once systems are already live, and either way the model stays the same: deep expertise, business-first decisions, and long-term ownership.
              </p>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 clay-light bg-white p-8 border border-[#050849]/5 max-w-2xl mx-auto flex items-center justify-center gap-3.5"
           >
              <span className="h-2.5 w-2.5 rounded-full bg-[#B7F36B] shadow-[0_0_8px_#B7F36B] shrink-0" />
              <h3 className="text-xl md:text-2xl font-extrabold text-[#080357] tracking-tight">
                 One partner, every stage, zero handoffs.
              </h3>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
