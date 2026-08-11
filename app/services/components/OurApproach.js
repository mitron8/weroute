"use client";

import { motion } from 'framer-motion';
import { Target, Layers, Settings2, Scaling } from 'lucide-react';

export default function OurApproach() {
  const pillars = [
    {
      icon: <Target className="w-8 h-8 text-[#080357]" />,
      title: "Business-Outcome Focused",
      description: "We design every solution around your specific performance, security, scalability, and compliance goals. We achieve desired outcomes with curated technology."
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-600" />,
      title: "Architecture First",
      description: "We architect every solution to fit your current environment and build a foundation that supports long-term business growth without costly rebuilds."
    },
    {
      icon: <Settings2 className="w-8 h-8 text-indigo-500" />,
      title: "Vendor-Agnostic by Design",
      description: "We at WeRoute, recommend technologies based on business fit, operational requirements, and long-term scalability instead of vendor incentives or platform partnerships."
    },
    {
      icon: <Scaling className="w-8 h-8 text-emerald-600" />,
      title: "Built to Scale",
      description: "From mid-market to large global enterprises, our solutions are built for operational maturity, high resilience, and growth without architectural rework."
    }
  ];

  return (
    <section className="py-24 bg-[#f7f9fc] relative overflow-hidden">
      {/* Subtle background blob */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6">
              How WeRoute Approaches Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              While most technology providers deploy and move on. We at WeRoute - start with strategy. Every engagement begins with consulting to understand business outcomes, then moves to architecture design, and only then to its implementation.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f7f9fc] rounded-[32px] p-8 border border-white/50 transition-all duration-300 hover:-translate-y-2
                         shadow-[12px_12px_24px_#e5e7eb,-12px_-12px_24px_#ffffff,inset_-4px_-4px_8px_rgba(0,0,0,0.02),inset_4px_4px_8px_rgba(255,255,255,0.9)]"
            >
              <div className="w-16 h-16 rounded-[20px] bg-[#f7f9fc] flex items-center justify-center mb-6
                              shadow-[6px_6px_12px_#e5e7eb,-6px_-6px_12px_#ffffff]">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-[#080357] mb-4">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
