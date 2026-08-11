"use client";

import { motion } from 'framer-motion';
import { Briefcase, Users, LayoutDashboard, Lightbulb } from 'lucide-react';

export default function WaysToEngage() {
  const ways = [
    {
      title: "Project-Based Delivery",
      icon: <Briefcase className="w-8 h-8 text-[#A7BF73]" />,
      description: "Implementation, migration, modernization, and transformation initiatives run against a clearly defined scope and a fixed timeline."
    },
    {
      title: "Dedicated Engineering Teams",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "Experienced consultants and engineers extend internal capacity, working alongside existing teams instead of operating as an outside vendor."
    },
    {
      title: "Managed Operations",
      icon: <LayoutDashboard className="w-8 h-8 text-[#080357]" />,
      description: "Day-to-day technology operations are handed over entirely, while governance, visibility, and service accountability stay with the client."
    },
    {
      title: "Strategic Advisory",
      icon: <Lightbulb className="w-8 h-8 text-indigo-500" />,
      description: "Experienced consultants support assessments, planning, architecture reviews, and transformation strategy without taking on delivery work."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6">
              Ways to Engage With WeRoute
            </h2>
            <p className="text-lg text-[#080357]/80 leading-relaxed font-medium">
              Not every organization needs the same relationship. Some engagements are scoped and finite, others extend a team long term, and some hand over full day-to-day ownership. WeRoute supports all three.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="clay-light bg-[#f7f9fc] border border-[#050849]/5 p-8 hover:-translate-y-1 hover:border-[#B7F36B]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 clay-badge-light bg-white flex items-center justify-center mb-6">
                {way.icon}
              </div>
              <h3 className="text-xl font-bold text-[#080357] mb-4">{way.title}</h3>
              <p className="text-[#080357]/80 font-medium leading-relaxed">
                {way.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
