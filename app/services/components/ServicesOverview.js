"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Headphones, Wrench, Briefcase, Users, BrainCircuit, ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      title: "Managed Services",
      icon: Headphones,
      description: "Managed services keep enterprise infrastructure, cloud, and security running day to day, with proactive monitoring and continuous support that catches problems before they affect the business.",
      outcomes: "Reduced downtime, predictable IT spend, faster incident response, stronger security posture, and more internal time for strategic work.",
      link: "/services/managed-services",
      className: "md:col-span-1 lg:col-span-2"
    },
    {
      title: "Professional Services",
      icon: Wrench,
      description: "Professional services design, deploy, and integrate enterprise technology environments, covering cloud migration, network engineering, and systems integration through structured, milestone-driven implementation.",
      outcomes: "Faster deployments, cleaner integrations, modernized legacy systems, reduced project risk, and infrastructure that is ready to scale.",
      link: "/services/professional-services",
      className: "md:col-span-1 lg:col-span-2"
    },
    {
      title: "Consulting & Advisory Services",
      icon: Briefcase,
      description: "Consulting and advisory services help leadership teams make informed technology decisions through assessments, enterprise architecture planning, cybersecurity consulting, and clear strategic roadmaps for transformation.",
      outcomes: "Clearer technology strategy, validated architecture decisions, reduced project risk, better vendor choices, and a roadmap leadership can act on.",
      link: "/services/consulting-advisory",
      className: "md:col-span-2 lg:col-span-2"
    },
    {
      title: "Manpower & Staffing Services",
      icon: Users,
      description: "Experienced technology professionals join internal teams through staff augmentation and dedicated staffing arrangements, adding capacity exactly where projects and daily operations need it most.",
      outcomes: "Faster hiring, lower recruitment overhead, access to specialized skills, flexible scaling up or down, and continuity when internal teams are stretched thin.",
      link: "/services/staffing",
      className: "md:col-span-1 lg:col-span-3"
    },
    {
      title: "Software & AI Development Services",
      icon: BrainCircuit,
      description: "Enterprise software, AI applications, and intelligent automation are built and deployed around actual business requirements, spanning custom platforms, enterprise application development services, and APIs that connect existing systems.",
      outcomes: "Faster time to market, software built for real workflows, reduced manual effort, systems that scale with demand, and a foundation ready for future AI capability.",
      link: "/services/software-ai-development",
      className: "md:col-span-1 lg:col-span-3"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#f7f9fc] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              Core Offerings
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6 tracking-tight">
              Services We{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                Deliver
              </span>
            </h2>
            <p className="text-lg text-[#080357]/80 leading-relaxed font-medium">
              Five service categories, one accountable partner. Each one is also its own dedicated page with the full detail behind it.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`clay-light bg-[#f7f9fc] border border-[#050849]/5 flex flex-col h-full p-8
                           transition-all duration-300 group hover:-translate-y-2 hover:border-[#B7F36B]/50 ${service.className}`}
              >
                <div className="clay-badge-light flex h-14 w-14 items-center justify-center bg-[#080357] text-[#B7F36B] mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#080357] mb-4">
                   {service.title}
                </h3>
                
                <p className="text-[#080357]/80 leading-relaxed font-medium mb-6 flex-grow">
                   {service.description}
                </p>

                <div className="bg-white rounded-2xl p-5 mb-8 border border-[#050849]/5 clay-soft-light">
                   <h4 className="text-xs font-bold uppercase tracking-wider text-[#080357] mb-2 flex items-center gap-2">
                     <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                     Outcomes
                   </h4>
                   <p className="text-sm font-medium text-[#052440]/75 leading-relaxed">
                      {service.outcomes}
                   </p>
                </div>

                <div className="mt-auto pt-4 border-t border-[#050849]/10">
                   <Link 
                      href={service.link}
                      className="inline-flex items-center text-[#080357] font-bold group/link hover:text-blue-600 transition-colors"
                   >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
