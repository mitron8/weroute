"use client";

import { motion } from 'framer-motion';
import { Target, Cpu, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';

export default function WhyWeRoute() {
  const reasons = [
    {
      icon: <Target className="w-8 h-8 text-amber-500" />,
      title: "Architecture-First Delivery",
      description: "Every engagement starts with architecture decisions, not tool selection, so technology choices support where the business is actually heading."
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: "Enterprise Technology Expertise",
      description: "Deep experience across infrastructure, cloud, security, AI, and software means one team can handle the full technology stack."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" />,
      title: "Vendor-Agnostic Solutions",
      description: "WeRoute is not tied to any single vendor or product line, so recommendations reflect what actually fits, not what sells."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#080357]" />,
      title: "Integrated Multi-Disciplinary Teams",
      description: "Network, cloud, security, staffing, and software specialists work as one team, so nothing gets lost between separate handoffs."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#A7BF73]" />,
      title: "Long-Term Customer Success",
      description: "WeRoute measures success by outcomes that continue after launch, not by whether a project closed on schedule."
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
              Why WeRoute
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`clay-light bg-[#f7f9fc] p-8 lg:p-10 border border-[#050849]/5
                         transition-all duration-300 group hover:-translate-y-2 hover:border-[#B7F36B]/50
                         ${index === 3 ? 'md:col-span-2 lg:col-span-1' : ''} 
                         ${index === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="w-16 h-16 bg-white flex items-center justify-center mb-6 clay-badge-light">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-[#080357] mb-4">{reason.title}</h3>
              <p className="text-[#080357]/80 font-medium leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="clay-dark bg-[#080357] p-8 lg:p-12 text-center text-white max-w-5xl mx-auto border border-white/10"
        >
           <p className="text-lg lg:text-xl font-medium leading-relaxed">
              WeRoute has supported <span className="text-[#A7BF73] font-bold">40+ enterprise deployments</span> with <span className="text-[#A7BF73] font-bold">99.9% system reliability</span>, the same operational discipline carried across every service category on this page.
           </p>
        </motion.div>

      </div>
    </section>
  );
}
