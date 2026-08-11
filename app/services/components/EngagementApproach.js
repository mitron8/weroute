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
      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6">
              How We Approach Every Engagement
            </h2>
            <p className="text-lg text-[#080357]/80 leading-relaxed font-medium">
              Every engagement follows the same structured path, regardless of size or service category. It keeps delivery consistent, makes progress visible, and gives leadership a clear view of what happens at each stage.
            </p>
          </motion.div>
        </div>

        <div className="relative">
           {/* Connecting line for desktop */}
           <div className="hidden lg:block absolute top-[4.5rem] left-[5%] right-[5%] h-0.5 bg-gray-200" />
           
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
                  <div className="w-16 h-16 clay-badge-light bg-white flex items-center justify-center text-xl font-bold text-[#080357] mb-6 group-hover:bg-[#080357] group-hover:text-white transition-all duration-300 relative z-10">
                     {step.number}
                  </div>
                  <div className="clay-light bg-white/80 border border-[#050849]/5 p-6 w-full h-full hover:border-[#B7F36B]/50 transition-colors duration-300 relative z-20">
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
