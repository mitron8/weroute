"use client";

import { motion } from 'framer-motion';
import { Network, Cloud, ShieldCheck, Cpu, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function SolutionsOverview() {
  const solutions = [
    {
      id: "network-connectivity",
      title: "Network and Connectivity",
      icon: <Network className="w-6 h-6 text-[#080357]" />,
      description: "Enterprise networks are the backbone of everything. We deliver managed network services and network security services that give IT teams visibility, control, and performance assurance across every site.",
      problems: [
        "Network performance bottlenecks slowing application delivery and user productivity",
        "Limited visibility into network health, traffic patterns, and site-level performance",
        "Rising operational costs from legacy MPLS and unmanaged WAN infrastructure",
        "Complex multi-site connectivity with no centralised control or policy enforcement",
        "Inconsistent user experience across branch offices, remote sites, and cloud environments"
      ],
      capabilities: [
        "SD-WAN and SD-LAN deployment and managed network services",
        "Network Observability and Assurance for real-time visibility across all sites",
        "Network as a Service (NaaS) for flexible, scalable enterprise connectivity",
        "AI-driven network intelligence and network automation services",
        "Mobility and wireless solutions for enterprise environments"
      ],
      outcome: "The result is a network that surfaces problems before users feel them, and scales without operational overhead."
    },
    {
      id: "cloud-devops",
      title: "Cloud and DevOps",
      icon: <Cloud className="w-6 h-6 text-[#080357]" />,
      description: "Moving to cloud requires more than lift-and-shift. We at WeRoute, design and deliver cloud migration services and enterprise cloud services that reduce risk, improve consistency, and accelerate your development velocity.",
      problems: [
        "Slow infrastructure provisioning blocking development and deployment cycles",
        "Operational risk and cost overruns during cloud adoption and migration",
        "Inconsistency across cloud and on-premises environments creating compliance gaps",
        "Security vulnerabilities in cloud configurations, access policies, and data handling",
        "Limited visibility into cloud application performance and infrastructure spend"
      ],
      capabilities: [
        "Cloud architecture design and cloud migration services across AWS, Azure, and Google Cloud",
        "DevOps services and platform engineering for faster, more consistent delivery",
        "Infrastructure as Code (IaC) for automated, repeatable deployments",
        "Enterprise cloud services with built-in governance and cost management",
        "Cloud Observability for performance monitoring across hybrid environments"
      ],
      outcome: "The result is cloud infrastructure that your teams can deploy faster, govern confidently, and scale without surprises."
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: <ShieldCheck className="w-6 h-6 text-[#080357]" />,
      description: "Perimeter security doesn't cut it anymore. So, we deliver cybersecurity consulting services built on zero trust architecture, where every user, device, and connection is verified before access is granted. Security is not an add-on here, it's the foundation.",
      problems: [
        "Expanding attack surfaces from cloud adoption, remote access, and third-party integrations",
        "Lack of centralised security visibility across network, endpoints, and cloud workloads",
        "Compliance pressure from regulatory frameworks across BFSI, healthcare, and government sectors",
        "Reactive incident response with no proactive threat detection or early warning capability",
        "Tool sprawl creating operational complexity, coverage gaps, and unmanageable alert volumes"
      ],
      capabilities: [
        "Zero Trust Architecture design and implementation across network and application layers",
        "Endpoint and cloud security for distributed enterprise environments",
        "Identity and Access Management (IAM) with continuous verification",
        "Managed SOC services with SIEM and SOAR integration",
        "GRC, vendor risk management, and regulatory compliance programmes"
      ],
      outcome: "The result is a security posture built for today's threat landscape, not the one from five years ago."
    },
    {
      id: "ai-intelligent-automation",
      title: "AI and Intelligent Automation",
      icon: <Cpu className="w-6 h-6 text-[#080357]" />,
      description: "Manual operations create risk and slow teams down. So, we apply intelligent automation and AI-driven observability to help enterprises detect problems earlier, resolve them faster, and run leaner. We also helps organisations evaluate, deploy, and govern enterprise AI and Generative AI initiatives alongside operational automation programmes.",
      problems: [
        "Manual, error-prone operations consuming engineering capacity and slowing response times",
        "No predictive insight into network, infrastructure, or application behaviour patterns",
        "Slow incident detection and resolution increasing mean time to recovery and business impact",
        "Operational inefficiencies across disconnected IT, network, and security teams",
        "Limited data-driven decision making at leadership and operational levels"
      ],
      capabilities: [
        "AI network intelligence for predictive monitoring and automated root cause analysis",
        "AIOps for network and infrastructure operations management",
        "Intelligent automation for IT workflows, ticketing, and incident response",
        "AI-driven observability across network, cloud, and application layers",
        "Network automation services for large, distributed enterprise environments",
        "Enterprise AI and Generative AI evaluation, deployment, and governance"
      ],
      outcome: "The result is operations teams that spend less time firefighting and more time on work that moves the business forward."
    },
    {
      id: "software-digital-engineering",
      title: "Software and Digital Engineering",
      icon: <Code2 className="w-6 h-6 text-[#080357]" />,
      description: "Software that cannot scale is a liability. We at WeRoute, deliver enterprise application development services and custom enterprise software development for organisations that need platforms built for complexity, performance, and long-term maintainability.",
      problems: [
        "Legacy systems limiting innovation, integration, and product development velocity",
        "Poor application scalability under growing user, transaction, and data loads",
        "Disconnected platforms and APIs creating operational silos and data inconsistency",
        "Slow time-to-market from manual development, testing, and deployment processes",
        "Inflexible application architectures that cannot adapt to changing business requirements"
      ],
      capabilities: [
        "Custom enterprise software development for complex, regulated environments",
        "Enterprise application development services across web, mobile, and platform layers",
        "API and platform engineering for integration and interoperability",
        "Mobile application development for enterprise user experiences",
        "Digital engineering services for legacy modernisation and transformation programmes"
      ],
      outcome: "The result is software that opens new revenue lines and removes the constraints that slow product and business teams down."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6">
              Solutions We Deliver
            </h2>
            <div className="inline-block bg-[#080357]/5 border border-[#080357]/10 rounded-full px-6 py-2">
               <p className="text-sm font-semibold text-[#080357]">
                 Trusted by enterprises in financial services, healthcare, manufacturing, retail, and technology globally.
               </p>
            </div>
          </motion.div>
        </div>

        {/* Solutions Alternating List */}
        <div className="space-y-32">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={solution.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Text Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-[16px] bg-[#f7f9fc] flex items-center justify-center shadow-[4px_4px_8px_#e5e7eb,-4px_-4px_8px_#ffffff]">
                        {solution.icon}
                     </div>
                     <h3 className="text-3xl font-bold text-[#080357]">{solution.title}</h3>
                  </div>
                  
                  <p className="text-lg text-[#080357]/80 leading-relaxed mb-8">
                    {solution.description}
                  </p>

                  <div className="mb-8">
                     <h4 className="text-sm font-bold uppercase tracking-wider text-[#080357] mb-4">Problems We Solve</h4>
                     <ul className="space-y-3">
                        {solution.problems.map((problem, i) => (
                           <li key={i} className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1">•</span>
                              <span className="text-[#080357]/80 font-medium">{problem}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="mb-8">
                     <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">Capabilities</h4>
                     <ul className="space-y-3">
                        {solution.capabilities.map((cap, i) => (
                           <li key={i} className="flex items-start">
                              <span className="text-[#080357] mr-3 mt-1">•</span>
                              <span className="text-[#080357]/80 font-medium">{cap}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="bg-[#f7f9fc] p-6 rounded-[24px] border border-white/50 shadow-[6px_6px_12px_#e5e7eb,-6px_-6px_12px_#ffffff,inset_-2px_-2px_4px_rgba(0,0,0,0.02),inset_2px_2px_4px_rgba(255,255,255,0.9)]">
                     <p className="text-[#080357] font-semibold italic">
                        "{solution.outcome}"
                     </p>
                  </div>
                </motion.div>

                {/* Diagram Placeholder Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`flex items-center justify-center h-full min-h-[400px] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="w-full aspect-square max-w-[500px] rounded-[40px] bg-[#f7f9fc] border border-white flex flex-col items-center justify-center p-8 text-center
                                  shadow-[15px_15px_30px_#e2e8f0,-15px_-15px_30px_#ffffff,inset_-4px_-4px_8px_rgba(0,0,0,0.02),inset_4px_4px_8px_rgba(255,255,255,0.8)]">
                     <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6 shadow-[inset_6px_6px_12px_#e5e7eb,inset_-6px_-6px_12px_#ffffff]">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                     </div>
                     <h4 className="text-xl font-bold text-gray-700 mb-2">Diagram Placeholder</h4>
                     <p className="text-[#080357]/80 font-medium text-sm">
                        A visual architecture or workflow diagram for {solution.title} will be placed here.
                     </p>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
