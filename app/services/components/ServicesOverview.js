"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Server, Settings, Users, BrainCircuit, ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      title: "Managed Services",
      icon: <Server className="w-8 h-8 text-[#080357]" />,
      description: "Managed services keep enterprise infrastructure, cloud, and security running day to day, with proactive monitoring and continuous support that catches problems before they affect the business.",
      outcomes: "Reduced downtime, predictable IT spend, faster incident response, stronger security posture, and more internal time for strategic work.",
      link: "/services/managed-services"
    },
    {
      title: "Professional Services",
      icon: <Settings className="w-8 h-8 text-[#080357]" />,
      description: "Professional services design, deploy, and integrate enterprise technology environments, covering cloud migration, network engineering, and systems integration through structured, milestone-driven implementation.",
      outcomes: "Faster deployments, cleaner integrations, modernized legacy systems, reduced project risk, and infrastructure that is ready to scale.",
      link: "/services/professional-services"
    },
    {
      title: "Consulting & Advisory Services",
      icon: <Users className="w-8 h-8 text-[#080357]" />,
      description: "Consulting and advisory services help leadership teams make informed technology decisions through assessments, enterprise architecture planning, cybersecurity consulting, and clear strategic roadmaps for transformation.",
      outcomes: "Clearer technology strategy, validated architecture decisions, reduced project risk, better vendor choices, and a roadmap leadership can act on.",
      link: "/services/consulting-advisory"
    },
    {
      title: "Manpower & Staffing Services",
      icon: <Users className="w-8 h-8 text-[#080357]" />,
      description: "Experienced technology professionals join internal teams through staff augmentation and dedicated staffing arrangements, adding capacity exactly where projects and daily operations need it most.",
      outcomes: "Faster hiring, lower recruitment overhead, access to specialized skills, flexible scaling up or down, and continuity when internal teams are stretched thin.",
      link: "/services/staffing"
    },
    {
      title: "Software & AI Development Services",
      icon: <BrainCircuit className="w-8 h-8 text-[#080357]" />,
      description: "Enterprise software, AI applications, and intelligent automation are built and deployed around actual business requirements, spanning custom platforms, enterprise application development services, and APIs that connect existing systems.",
      outcomes: "Faster time to market, software built for real workflows, reduced manual effort, systems that scale with demand, and a foundation ready for future AI capability.",
      link: "/services/software-ai-development"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#f7f9fc] relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6">
              Services We Deliver
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Five service categories, one accountable partner. Each one is also its own dedicated page with the full detail behind it.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="clay-light bg-[#f7f9fc] border border-[#050849]/5 flex flex-col h-full p-8
                         transition-all duration-300 group hover:-translate-y-2 hover:border-[#B7F36B]/50"
            >
              <div className="w-16 h-16 bg-white flex items-center justify-center mb-6 clay-badge-light group-hover:scale-110 transition-transform duration-300 text-[#080357]">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#080357] mb-4">
                 {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-medium mb-6 flex-grow">
                 {service.description}
              </p>

              <div className="bg-[#f7f9fc] rounded-[20px] p-6 mb-8 border border-gray-100">
                 <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Outcomes</h4>
                 <p className="text-sm font-medium text-gray-700 leading-relaxed">
                    {service.outcomes}
                 </p>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100">
                 <Link 
                    href={service.link}
                    className="inline-flex items-center text-[#080357] font-bold group/link"
                 >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
