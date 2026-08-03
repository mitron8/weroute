"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus, ChevronRight } from "lucide-react";

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
              Intelligent Automation FAQ
            </span>

            <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#050849] md:text-6xl lg:text-7xl">
              Frequently <br />
              Asked
              <span className="text-[#98c93c]">
                {" "}
                Questions
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-9 text-[#4c658a]">
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-5 lg:col-span-7"
          >
            {faqs.map((faq, index) => {
              const open = active === index;

              return (
                <motion.div
                  key={faq.q}
                  variants={fadeInUp}
                  className="clay-light overflow-hidden rounded-[36px] transition-all duration-300"
                >
                  <button
                    onClick={() => setActive(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 p-8 text-left sm:p-10"
                  >
                    <h3 className="text-xl font-bold leading-relaxed tracking-[-0.03em] text-[#050849]">
                      {faq.q}
                    </h3>

                    <div className="clay-badge-light flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[#050849] transition-transform duration-300">
                      {open ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-[#4c658a]/10 px-8 py-8 sm:px-10">
                          <p className="max-w-3xl text-base leading-8 text-[#4c658a]">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
