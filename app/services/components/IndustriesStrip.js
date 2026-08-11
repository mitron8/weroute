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
      <div className="mx-auto max-w-[1500px] px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6">
               Industries We Support
             </h2>
             <p className="text-lg text-gray-600 leading-relaxed font-medium">
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
              <div className="text-[#080357] group-hover:text-[#A7BF73] transition-colors duration-300 mb-4 bg-white p-4 clay-badge-light group-hover:bg-[#080357]">
                {ind.icon}
              </div>
              <span className="text-sm font-bold text-gray-600 group-hover:text-[#080357] transition-colors duration-300 text-center">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
