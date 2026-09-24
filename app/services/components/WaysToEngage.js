"use client";

import { motion } from 'framer-motion';
import { Briefcase, Users, LayoutDashboard, Lightbulb } from 'lucide-react';

export default function WaysToEngage() {
  const ways = [
    {
      title: "Project-Based Delivery",
      icon: Briefcase,
      description: "Implementation, migration, modernization, and transformation initiatives run against a clearly defined scope and a fixed timeline."
    },
    {
      title: "Dedicated Engineering Teams",
      icon: Users,
      description: "Experienced consultants and engineers extend internal capacity, working alongside existing teams instead of operating as an outside vendor."
    },
    {
      title: "Managed Operations",
      icon: LayoutDashboard,
      description: "Day-to-day technology operations are handed over entirely, while governance, visibility, and service accountability stay with the client."
    },
    {
      title: "Strategic Advisory",
      icon: Lightbulb,
      description: "Experienced consultants support assessments, planning, architecture reviews, and transformation strategy without taking on delivery work."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              Engagement Models
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6 tracking-tight">
              Ways to Engage With{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                WeRoute
              </span>
            </h2>
            <p className="text-lg text-[#080357]/80 leading-relaxed font-medium">
              Not every organization needs the same relationship. Some engagements are scoped and finite, others extend a team long term, and some hand over full day-to-day ownership. WeRoute supports all three.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="clay-light bg-[#f7f9fc] border border-[#050849]/5 p-8 hover:-translate-y-1 hover:border-[#B7F36B]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="clay-badge-light flex h-14 w-14 items-center justify-center bg-[#080357] text-[#B7F36B] mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#080357] mb-3">{way.title}</h3>
                  <p className="text-[#080357]/80 text-sm leading-relaxed font-medium">
                    {way.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
