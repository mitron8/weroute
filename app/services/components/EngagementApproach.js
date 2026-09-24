"use client";

import { motion } from 'framer-motion';

export default function EngagementApproach() {
  const steps = [
    {
      number: "1",
      title: "Discover",
      description: "WeRoute starts by understanding business objectives, the current technical environment, existing risks, and what the transformation actually needs to achieve."
    },
    {
      number: "2",
      title: "Design",
      description: "Architecture, governance models, an implementation strategy, and a delivery roadmap get built around the objectives uncovered in discovery."
    },
    {
      number: "3",
      title: "Deliver",
      description: "Consultants, architects, and engineering specialists execute the project, keeping the original scope, timeline, and business goals in view throughout."
    },
    {
      number: "4",
      title: "Operate",
      description: "Once systems are live, WeRoute provides operational support, monitoring, managed services, and day-to-day administration to keep everything running."
    },
    {
      number: "5",
      title: "Optimize",
      description: "Security, automation, performance, and operational efficiency keep improving well after launch, since the work does not stop at go-live."
    }
  ];

  return (
    <section className="py-24 bg-[#f7f9fc] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              Engagement Framework
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6 tracking-tight">
              How We Approach Every{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                Engagement
              </span>
            </h2>
            <p className="text-lg text-[#080357]/80 leading-relaxed font-medium">
              Every engagement follows the same structured path, regardless of size or service category. It keeps delivery consistent, makes progress visible, and gives leadership a clear view of what happens at each stage.
            </p>
          </motion.div>
        </div>

        <div className="relative">
           <div className="grid lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Badge Row with Center-Aligned Connector Line */}
                  <div className="relative flex items-center justify-center w-full mb-6">
                    {/* Connecting line to the next step across their exact vertical center */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute left-1/2 w-full top-1/2 -translate-y-1/2 h-0.5 bg-[#080357]/20 z-0" />
                    )}

                    {/* Circular Number Badge */}
                    <div className="w-16 h-16 clay-badge-light bg-[#080357] text-[#B7F36B] flex items-center justify-center text-xl font-extrabold transition-transform duration-300 relative z-10 group-hover:scale-110 shadow-md">
                       {step.number}
                    </div>
                  </div>

                  <div className="clay-light bg-white border border-[#050849]/5 p-6 w-full h-full hover:border-[#B7F36B]/50 hover:-translate-y-1 transition-all duration-300 relative z-20">
                     <h3 className="text-xl font-bold text-[#080357] mb-3">{step.title}</h3>
                     <p className="text-[#080357]/80 text-sm leading-relaxed font-medium">
                        {step.description}
                     </p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
