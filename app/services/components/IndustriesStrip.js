"use client";

import { motion } from 'framer-motion';
import { Landmark, HeartPulse, Factory, ShoppingBag, RadioTower, GraduationCap, Building2, Zap, MonitorSmartphone, Truck } from 'lucide-react';

export default function IndustriesStrip() {
  const industries = [
    { name: "Financial Services", icon: <Landmark className="w-6 h-6" /> },
    { name: "Healthcare", icon: <HeartPulse className="w-6 h-6" /> },
    { name: "Manufacturing", icon: <Factory className="w-6 h-6" /> },
    { name: "Retail & E-Commerce", icon: <ShoppingBag className="w-6 h-6" /> },
    { name: "Telecommunications", icon: <RadioTower className="w-6 h-6" /> },
    { name: "Education", icon: <GraduationCap className="w-6 h-6" /> },
    { name: "Government & Public Sector", icon: <Building2 className="w-6 h-6" /> },
    { name: "Energy & Utilities", icon: <Zap className="w-6 h-6" /> },
    { name: "Technology & SaaS", icon: <MonitorSmartphone className="w-6 h-6" /> },
    { name: "Logistics & Supply Chain", icon: <Truck className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-[#f7f9fc]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
               <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
               Sector Expertise
             </span>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6 tracking-tight">
               Industries We{" "}
               <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                 Support
               </span>
             </h2>
             <p className="text-lg text-[#080357]/80 leading-relaxed font-medium">
               WeRoute works across sectors with different regulatory demands, technical environments, and growth pressures, applying the same consulting-led approach to every industry it serves.
             </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.1 }}
              className="flex flex-col items-center justify-center p-8 bg-[#f7f9fc] clay-light border border-[#050849]/5
                         transition-all duration-300 group hover:-translate-y-1 hover:border-[#B7F36B]/50"
            >
              <div className="clay-badge-light flex h-14 w-14 items-center justify-center bg-[#080357] text-[#B7F36B] mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                {ind.icon}
              </div>
              <span className="text-sm font-bold text-[#080357]/80 group-hover:text-[#080357] transition-colors duration-300 text-center">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
