"use client";

import { motion } from 'framer-motion';
import { Target, Layers, Settings2, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Target className="w-8 h-8 text-amber-500" />,
      title: "Consulting-Led Delivery",
      description: "Business objectives shape every engagement before any technology decision gets made, so the plan always starts with outcomes, not tools."
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-600" />,
      title: "Enterprise Execution Excellence",
      description: "Architecture expertise sits alongside hands-on engineering and day-to-day operational discipline, so plans get built the way they were designed."
    },
    {
      icon: <Settings2 className="w-8 h-8 text-[#080357]" />,
      title: "Flexible Engagement Models",
      description: "Engagements range from a focused consulting project to a fully managed operation, sized to match what the organization actually needs."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: "Long-Term Technology Partnership",
      description: "The work continues after go-live. Optimization, monitoring, and steady improvement keep delivering value long after the original project closes."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6">
              Why Organizations Choose WeRoute
            </h2>
            <p className="text-lg text-[#080357]/80 leading-relaxed font-medium">
              Differentiation matters before the services do. Before choosing a service category, most organizations want to know how a partner actually works: what gets decided first, how flexible the engagement can be, and whether the relationship holds up past the initial project.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="clay-light bg-[#f7f9fc] p-8 lg:p-10 border border-[#050849]/5
                         transition-all duration-300 group hover:-translate-y-2 hover:border-[#B7F36B]/50"
            >
              <div className="w-16 h-16 bg-white flex items-center justify-center mb-6 clay-badge-light text-[#080357]">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#080357] mb-4">{card.title}</h3>
              <p className="text-[#080357]/80 leading-relaxed font-medium">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
