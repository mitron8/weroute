"use client";

import { motion } from "framer-motion";
import { Network, Cloud, Shield, Cpu } from "lucide-react";

const STRENGTHS = [
  {
    icon: <Network size={32} />,
    title: "Strategic Architecture",
    delay: 0.1,
  },
  {
    icon: <Cloud size={32} />,
    title: "Scalable Infrastructure",
    delay: 0.2,
  },
  {
    icon: <Shield size={32} />,
    title: "Secure by Design",
    delay: 0.3,
  },
  {
    icon: <Cpu size={32} />,
    title: "Intelligent Automation",
    delay: 0.4,
  },
];

export default function StrengthsLeopolda() {
  return (
    <section className="w-full bg-[#fafafa] pb-24 lg:pb-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        
        {STRENGTHS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col items-center justify-center text-center p-12 h-[300px] clay-light bg-[#fafafa] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
          >
            {/* Icon */}
            <div className="text-[#050849] mb-8 transition-transform duration-500 group-hover:scale-110">
              {item.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-[#050849] text-[22px] font-bold leading-tight">
              {item.title}
            </h3>
            
            {/* Subtle overlay effect on hover */}
            <div className="absolute inset-0 rounded-[2rem] bg-[#050849]/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
          </motion.div>
        ))}

      </div>
    </section>
  );
}
