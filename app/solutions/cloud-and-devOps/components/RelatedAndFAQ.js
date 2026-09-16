"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { FAQItem } from "@/app/components/ui/FAQAccordion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function RelatedAndFAQ() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      q: "What are Cloud & DevOps Solutions?",
      a: "Cloud & DevOps Solutions bring together cloud architecture, platform engineering, infrastructure automation, and observability into one coordinated approach for running and scaling modern cloud operations.",
    },
    {
      q: "How does DevOps improve software delivery?",
      a: "DevOps improves software delivery by standardizing tools, automating CI/CD pipelines, and giving engineering teams consistent environments. It reduces the manual steps that typically slows the releases down.",
    },
    {
      q: "What are the benefits of Infrastructure as Code?",
      a: "Infrastructure as Code reduces manual configuration errors, speeds up provisioning, and makes environments easier to govern and audit, since infrastructure is defined and version-controlled as code.",
    },
    {
      q: "How can organizations improve cloud governance?",
      a: "Organizations improve cloud governance by embedding access, compliance, and cost policies directly into infrastructure and delivery processes, rather than enforcing them manually after deployment.",
    },
    {
      q: "What is cloud observability?",
      a: "Cloud observability is the ability to understand system behavior across distributed cloud environments by analyzing logs, metrics, and traces, rather than relying on isolated monitoring alone.",
    },
    {
      q: "How do Cloud & DevOps improve operational efficiency?",
      a: "Cloud and DevOps improve operational efficiency by removing manual, repetitive work from infrastructure and delivery processes, allowing teams to focus on higher-value engineering work.",
    },
    {
      q: "How can hybrid cloud environments be managed effectively?",
      a: "Hybrid cloud environments are managed effectively through consistent architecture and governance that treats on-premises and cloud systems as one environment, instead of two disconnected ones.",
    },
  ];

  const relatedSolutions = [
    { label: "Cloud Architecture & Integration", href: "/solution/CloudDevOpsPage/cloud-architecture-integration" },
    { label: "DevOps & Platform Engineering", href: "/solution/CloudDevOpsPage/devops-platform-engineering" },
    { label: "Infrastructure as Code", href: "/solution/CloudDevOpsPage/infrastructure-as-code" },
    { label: "Cloud Observability", href: "/solution/CloudDevOpsPage/cloud-observability" },
  ];

  return (
    <section className="relative bg-[#f7f9fc] py-32">
      {/* 80px Architectural Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#4c658a0A_1px,transparent_1px),linear-gradient(90deg,#4c658a0A_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <span className="clay-badge-light inline-flex rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849]">
              Support & Clarity
            </span>

            <h2 className="mt-8 text-4xl font-normal leading-tight text-[#050849] md:text-6xl lg:text-7xl tracking-tight">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#050849] to-[#4c658a] bg-clip-text text-transparent font-medium">
                Questions
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg font-normal leading-relaxed text-[#050849]/65">
            Everything you need to know about our coordinated approach to cloud architecture, platform engineering, infrastructure automation, and observability.
          </p>
        </div>

        {/* Main Split Content: 1 Col Sidebar + 2 Col FAQ Accordion */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* Related Solutions Sidebar (4 Columns) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="clay-light rounded-[36px] p-8 sm:p-10">
              <span className="clay-badge-light inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
                Explore More
              </span>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#050849] sm:text-3xl">
                Related Cloud &amp; <br />
                <span className="text-[#98c93c]">DevOps Solutions</span>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#4c658a]">
                WeRoute&apos;s cloud and DevOps work spans four connected disciplines, each building on the others to support a complete cloud strategy.
              </p>

              <ul className="mt-8 space-y-3 border-t border-[#4c658a]/20 pt-8">
                {relatedSolutions.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-between rounded-2xl bg-white p-4 text-sm font-medium text-[#050849] shadow-sm transition-all duration-300 hover:text-[#98c93c] hover:translate-x-1"
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={18} className="text-[#4c658a] transition-colors group-hover:text-[#98c93c]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* FAQs Accordion List (7 Columns) */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.q || index}
                question={faq.q}
                answer={faq.a}
                isOpen={active === index}
                onToggle={() => setActive(active === index ? null : index)}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}