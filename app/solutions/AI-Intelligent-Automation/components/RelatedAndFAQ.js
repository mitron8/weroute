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
      q: "What are Enterprise AI Solutions?",
      a: "Enterprise AI solutions are AI-powered business solutions, from automation to predictive analytics, built into an organization's existing systems and workflows to improve decision-making and operational efficiency at scale.",
    },
    {
      q: "How does AI improve business operations?",
      a: "AI improves business operations by automating repetitive tasks, surfacing predictive insights, and helping teams act on issues before they affect the business.",
    },
    {
      q: "What is Intelligent Automation?",
      a: "Intelligent automation services combine process automation with AI capabilities like prediction and pattern recognition, allowing systems to handle more complex, adaptive workflows than traditional automation alone.",
    },
    {
      q: "How can AI support digital transformation?",
      a: "AI supports digital transformation by embedding intelligence into existing processes and systems, rather than requiring organizations to rebuild operations around new tools.",
    },
    {
      q: "How do organizations scale AI successfully?",
      a: "Organizations scale enterprise AI adoption successfully by pairing a clear AI strategy with governance, so pilots move into production instead of stalling as isolated experiments.",
    },
    {
      q: "What is AIOps?",
      a: "AIOps applies AI to IT operations, correlating events, detecting anomalies, and helping teams resolve issues faster with less manual monitoring.",
    },
    {
      q: "How can AI improve operational efficiency?",
      a: "AI improves operational efficiency by reducing manual work, shortening the time between detecting and resolving issues, and helping teams focus on higher-value tasks.",
    },
  ];

  const relatedSolutions = [
    { label: "AI Network Intelligence", href: "/solution/AI-Intelligent-Automation/ai-network-intelligence" },
    { label: "AI-Driven Observability", href: "/solution/AI-Intelligent-Automation/ai-driven-observability" },
    { label: "AI Software Services", href: "/solution/AI-Intelligent-Automation/ai-software-services" },
    { label: "AI Cybersecurity Solutions", href: "/solution/AI-Intelligent-Automation/ai-cybersecurity-solutions" },
  ];

  return (
    <section className="relative bg-[#f7f9fc] py-32">
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
            Everything you need to know about our coordinated approach to AI strategy, intelligent automation, and AIOps solutions for the enterprise.
          </p>
        </div>

        {/* Main Split Content: 1 Col Sidebar + 2 Col FAQ Accordion */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* Related Solutions Sidebar (5 Columns) */}
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
                Related AI Automation <br />
                <span className="text-[#98c93c]">Solutions</span>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#4c658a]">
                WeRoute&apos;s AI and intelligent automation solutions connect directly to your wider technology strategy, supporting network operations, cloud infrastructure, and security.
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
