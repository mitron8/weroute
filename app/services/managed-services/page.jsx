import React from "react";
import ClientServicePage from "../[slug]/ClientServicePage"; // Ensure path is correct relative to this file

export const metadata = {
  title: 'Managed IT Services That Keep Business Running | WeRoute',
  description: 'WeRoute is a managed IT services partner that operates, monitors, and continuously optimizes enterprise technology environments through proactive, SLA-driven service management across infrastructure, cloud, network, and security.',
  keywords: ['Managed IT Services', 'Managed Services', 'Managed Cloud Services', 'IT Infrastructure Management', 'Managed Network Services', 'Network Observability', 'Cybersecurity Consulting', 'IT Infrastructure Services', 'Cybersecurity Solutions', 'Enterprise Security Solutions', 'Cyber Risk Management', 'Managed Infrastructure Services', 'Managed Data Center Services', 'IT Operations Services', 'Enterprise Managed Services', 'Managed Cybersecurity Services', 'Enterprise Infrastructure Services'],
};

// Hardcoded data extracted from previous managed-it-services data
const serviceData = {
  id: "managed-it-services",
  hero: {
    badge: "Managed IT Services",
    title: "Managed IT Services That Keep Business Running",
    subtitle: "Enterprise managed services from WeRoute combine IT infrastructure management, managed cloud services, and around-the-clock operations support to keep technology running reliably every day.",
    image: "https://images.unsplash.com/photo-1581092919535-7146ff1a590b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lottieUrl: "https://lottie.host/07ef338e-393b-43ec-9883-a0058dc10a00/WihGQoW3AW.lottie"
  },
  geoStatement: "WeRoute is a managed IT services partner that operates, monitors, and continuously optimizes enterprise technology environments through proactive, SLA-driven service management across infrastructure, cloud, network, and security.",
  pagePhilosophy: "Technology that runs, so business doesn't stop.",
  sections: [
    {
      id: "section-1",
      title: "Why Managed IT Services Matter",
      targetKeywords: "(Target: Managed IT Services, Enterprise Managed Services)",
      intro: "Enterprise environments have grown too complex for reactive support alone. Infrastructure spans data centers, cloud platforms, and remote offices. Any gap in monitoring becomes a gap in reliability. Managed IT services give organizations continuous operational coverage, so growth and complexity no longer come at the cost of stability.",
      items: [
        { title: "Operational Resilience", description: "Systems keep running through failures instead of stopping the business cold." },
        { title: "Infrastructure Availability", description: "Proactive monitoring catches failing components before they turn into outages." },
        { title: "Security", description: "Continuous security monitoring closes gaps before attackers ever get the chance." },
        { title: "Scalability", description: "Operations scale up or down with the business, without a full IT rebuild." },
        { title: "Cost Predictability", description: "Fixed, predictable service costs replace the surprise expense of reactive IT fixes." }
      ]
    },
    {
      id: "section-2",
      title: "What Are Managed IT Services?",
      targetKeywords: "(Target: IT Infrastructure Management, IT Operations Services)",
      intro: "Managed IT services cover the continuous operation, monitoring, maintenance, and optimization of enterprise technology environments through structured processes and proactive service management. Rather than waiting for something to break, a managed services partner takes ongoing responsibility for infrastructure health, applying governance and IT operations discipline so systems stay reliable, secure, and ready to scale.",
      items: []
    },
    {
      id: "section-3",
      title: "Why Choose WeRoute Managed Services",
      targetKeywords: "(Target: Managed IT Services, Managed Infrastructure Services)",
      intro: "",
      items: [
        { title: "Proactive Operations", description: "Problems get caught and resolved before they affect users, instead of being discovered through complaints." },
        { title: "Enterprise Operational Expertise", description: "Years of hands-on experience across infrastructure, cloud, network, and security inform every operational decision made." },
        { title: "Always-On Visibility", description: "Twenty-four seven monitoring means nothing runs unwatched, regardless of the time zone or the hour." },
        { title: "Flexible Delivery Models", description: "Engagements scale from a single managed service to full operational ownership, matching whatever the organization actually needs." },
        { title: "Continuous Improvement", description: "Service quality keeps getting refined after go-live, not just monitored and left unchanged for years.WeRoute has supported 40+ enterprise deployments with 99.9% system reliability, the same operational discipline behind every managed services engagement." }
      ]
    },
    {
      id: "section-4",
      title: "Managed Service Portfolio",
      targetKeywords: "",
      intro: "Five managed service categories, each with its own dedicated page covering the full detail behind it.",
      items: [
        { title: "(Target: Managed Data Center Services)", description: "Managed Data Centre ServicesManaged data centre services keep physical and virtual infrastructure running reliably, covering monitoring, maintenance, and operational management of critical data centre environments. Business Challenges: Aging hardware, capacity constraints, and limited visibility into physical infrastructure health. Core Capabilities: Infrastructure monitoring, hardware lifecycle management, capacity planning, and operational reporting." },
        { title: "Managed Network Services", description: "Managed network services keep enterprise connectivity running reliably, covering monitoring, configuration, and day-to-day operational management of network infrastructure across every site and region.Business Challenges: Distributed sites, inconsistent configurations, and limited visibility across the full network. Core Capabilities: Network monitoring, configuration management, performance optimization, and incident response." },
        { title: "Managed Cloud & Hybrid Environments", description: "Managed cloud services extend proactive operations across public cloud, private cloud, and hybrid environments, keeping workloads secure, available, and cost-efficient as they scale.Business Challenges: Sprawling cloud costs, inconsistent governance, and visibility gaps across multiple platforms. Core Capabilities: Cloud monitoring, cost optimization, governance, and hybrid infrastructure management." },
        { title: "Managed Cybersecurity & SOC", description: "Managed cybersecurity and SOC services provide continuous threat monitoring, detection, and response, backed by structured cyber risk management and proven security operations practices.Business Challenges: Alert fatigue, slow threat detection, and gaps in continuous security coverage. Core Capabilities: Threat detection, incident response, security monitoring, and compliance support." },
        { title: "Network Observability", description: "Network observability services correlate telemetry, metrics, and logs across the network, turning raw operational data into clear visibility and faster root cause analysis.Business Challenges: Limited visibility, slow fault isolation, and siloed monitoring tools. Core Capabilities: Telemetry collection, performance analytics, alerting, and operational reporting." }
      ]
    },
    {
      id: "section-5",
      title: "Our Managed Service Capabilities",
      targetKeywords: "(Target: IT Infrastructure Management, IT Operations Services, IT Infrastructure Services)",
      intro: "",
      items: [
        { title: "24×7 Infrastructure Monitoring", description: "Systems get watched around the clock, so issues surface before users notice them." },
        { title: "Incident & Problem Management", description: "Incidents get resolved quickly, and root causes get fixed so they do not return." },
        { title: "Change & Configuration Management", description: "Changes are tracked and controlled, so infrastructure never drifts from its intended state." },
        { title: "Performance Optimisation", description: "Systems are continuously tuned to run efficiently, not just to stay technically online." },
        { title: "Capacity Planning", description: "Growth is planned for in advance, instead of discovered during a resource crunch." },
        { title: "Security Monitoring", description: "Threats get identified and contained continuously, not just reviewed after the fact." },
        { title: "Patch Management", description: "Systems stay current and protected, without the manual overhead of tracking every update." },
        { title: "Operational Reporting", description: "Clear, regular reporting keeps stakeholders informed without digging through raw operational data." },
        { title: "SLA Management", description: "Service levels are tracked and enforced, so commitments are met, not just promised." },
        { title: "Continuous Improvement", description: "Operations keep getting refined based on real data, not left running unchanged." }
      ]
    },
    {
      id: "section-6",
      title: "Our Service Delivery Approach",
      targetKeywords: "(Target: Managed IT Services, Managed Infrastructure Services)",
      intro: "",
      items: [
        { title: "Assess", description: "WeRoute evaluates the current environment, existing operational processes, risks, and where managed services would add the most value." },
        { title: "Transition", description: "Infrastructure, tools, and processes are onboarded into WeRoute's operational model with minimal disruption to daily operations." },
        { title: "Operate", description: "Day-to-day monitoring, incident response, and operational management run continuously against clearly agreed service levels and SLAs." },
        { title: "Optimise", description: "Performance, security, and operational efficiency keep improving over time as the environment and business needs evolve." }
      ]
    },
    {
      id: "section-7",
      title: "Business Benefits",
      targetKeywords: "(Target: Enterprise Infrastructure Services)",
      intro: "",
      items: [
        { title: "Higher Infrastructure Availability", description: "Systems stay online more consistently, with fewer unplanned interruptions to business operations." },
        { title: "Reduced Operational Complexity", description: "One accountable partner replaces the coordination overhead of managing multiple internal teams." },
        { title: "Faster Incident Resolution", description: "Structured incident management cuts resolution time and limits the business impact of outages." },
        { title: "Improved Security Posture", description: "Continuous monitoring and response close security gaps faster than periodic manual reviews." },
        { title: "Better Infrastructure Visibility", description: "Clear, current data replaces guesswork about what is actually happening across the environment." },
        { title: "Predictable Service Delivery", description: "Fixed service levels and transparent reporting replace the uncertainty of reactive support." },
        { title: "Lower Operational Risk", description: "Proactive management catches problems early, before they escalate into serious business risk." },
        { title: "Greater Business Agility", description: "Internal teams focus on strategic work instead of day-to-day operational firefighting." }
      ]
    },
    {
      id: "section-8",
      title: "Industries We Support",
      targetKeywords: "",
      intro: "WeRoute delivers managed services across sectors with different regulatory, operational, and infrastructure demands.",
      items: [
        { title: "Financial Services", description: "ManufacturingHealthcare" },
        { title: "Retail", description: "TelecommunicationsGovernment Education Technology" },
        { title: "Logistics", description: "Energy & Utilities" },
        { title: "RELATED MANAGED SERVICES", description: "/services/managed-data-center-services  |  /services/managed-network-services  |  /services/managed-cloud-hybrid-services  |  /services/managed-cybersecurity-soc-services  |  /services/network-observability-services" },
        { title: "INTERNAL LINKS", description: "/solutions/network-connectivity  |  /solutions/cloud-devops  |  /solutions/cybersecurity  |  /solutions/ai-intelligent-automation  |  /solutions/software-digital-engineering" }
      ]
    },
    {
      id: "section-9",
      title: "FAQ",
      targetKeywords: "",
      intro: "",
      items: [
        { title: "What are Managed IT Services?", description: "Managed IT services are the continuous operation, monitoring, maintenance, and optimization of enterprise technology environments, delivered by an outside partner through structured processes, governance, and proactive service management." },
        { title: "What is included in Managed Infrastructure Services?", description: "Managed infrastructure services typically include monitoring, incident and problem management, change and configuration management, performance optimization, capacity planning, and regular operational reporting across servers, storage, and network infrastructure." },
        { title: "Why should organizations outsource IT operations?", description: "Outsourcing IT operations gives organizations continuous coverage and specialized expertise without the cost of building and staffing a full internal operations team, while freeing internal staff to focus on strategic work." },
        { title: "How do Managed Services improve security?", description: "Managed services apply continuous security monitoring, threat detection, and incident response instead of periodic manual reviews, closing gaps faster and reducing the window an attacker has to operate undetected." },
        { title: "What industries benefit from Managed Services?", description: "Managed services benefit any industry running critical infrastructure, including financial services, healthcare, manufacturing, retail, telecommunications, government, education, technology, logistics, and energy and utilities." },
        { title: "Can Managed Services support hybrid cloud environments?", description: "Yes. Managed cloud services extend to public cloud, private cloud, and hybrid environments, giving organizations one consistent operational model regardless of where workloads actually run." },
        { title: "How do Managed Services reduce operational costs?", description: "Managed services replace unpredictable reactive costs with fixed, predictable service pricing, while proactive monitoring reduces the frequency and severity of costly outages and emergency fixes." }
      ]
    },
    {
      id: "section-10",
      title: "Keep Your Enterprise Running at Its Best",
      targetKeywords: "",
      intro: "Partner with a team that operates, monitors, and optimizes enterprise technology continuously, so internal teams can focus on growth instead of day-to-day firefighting.",
      items: [
        { title: "Talk to Our Managed Services Experts", description: "Explore Our Solutions" }
      ]
    }
  ],
  faq: [
    { question: "What are Managed IT Services?", answer: "Managed IT services are the continuous operation, monitoring, maintenance, and optimization of enterprise technology environments, delivered by an outside partner through structured processes, governance, and proactive service management." },
    { question: "What is included in Managed Infrastructure Services?", answer: "Managed infrastructure services typically include monitoring, incident and problem management, change and configuration management, performance optimization, capacity planning, and regular operational reporting across servers, storage, and network infrastructure." },
    { question: "Why should organizations outsource IT operations?", answer: "Outsourcing IT operations gives organizations continuous coverage and specialized expertise without the cost of building and staffing a full internal operations team, while freeing internal staff to focus on strategic work." },
    { question: "How do Managed Services improve security?", answer: "Managed services apply continuous security monitoring, threat detection, and incident response instead of periodic manual reviews, closing gaps faster and reducing the window an attacker has to operate undetected." },
    { question: "What industries benefit from Managed Services?", answer: "Managed services benefit any industry running critical infrastructure, including financial services, healthcare, manufacturing, retail, telecommunications, government, education, technology, logistics, and energy and utilities." },
    { question: "Can Managed Services support hybrid cloud environments?", answer: "Yes. Managed cloud services extend to public cloud, private cloud, and hybrid environments, giving organizations one consistent operational model regardless of where workloads actually run." },
    { question: "How do Managed Services reduce operational costs?", answer: "Managed services replace unpredictable reactive costs with fixed, predictable service pricing, while proactive monitoring reduces the frequency and severity of costly outages and emergency fixes." }
  ],
  cta: {
    title: "Keep Your Enterprise Running at Its Best",
    description: "Partner with a team that operates, monitors, and optimizes enterprise technology continuously, so internal teams can focus on growth instead of day-to-day firefighting.",
    button: "Talk to Our Managed Services Experts"
  }
};

export default function ManagedServicesPage() {
  const isNewLayout = true;
  
  // Generate FAQ JSON-LD schema
  const faqLd = serviceData.faq && serviceData.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceData.faq.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  } : null;

  return (
    <main className="min-h-screen bg-[#f7f9fc] pb-28 pt-20 overflow-hidden">
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <ClientServicePage service={serviceData} isNewLayout={isNewLayout} />
    </main>
  );
}
