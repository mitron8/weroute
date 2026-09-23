"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const homepageFaqs = [
  {
    q: "What does WeRoute do?",
    a: "WeRoute is an enterprise technology consulting and engineering company. We design, implement, integrate, secure, and operate technology across networking, cloud, cybersecurity, AI, software, and automation.",
  },
  {
    q: "Which enterprise technology solutions does WeRoute provide?",
    a: "Network & Connectivity, Cloud & DevOps, Cybersecurity, AI & Intelligent Automation, and Software & Digital Engineering.",
  },
  {
    q: "Does WeRoute provide both consulting and implementation?",
    a: "Yes. Strategy and hands-on engineering are delivered by the same team, so recommendations are grounded in what can actually be built.",
  },
  {
    q: "Can WeRoute manage technology environments after deployment?",
    a: "Yes. Managed Services cover monitoring, administration, incident management, optimization, and ongoing operational support.",
  },
  {
    q: "Does WeRoute work with existing enterprise infrastructure?",
    a: "Yes. Solutions are designed around your existing infrastructure, applications, APIs, cloud environments, and security controls.",
  },
  {
    q: "Is WeRoute vendor-agnostic?",
    a: "Yes. Technology decisions are based on enterprise fit, performance, security, and long-term value rather than any single vendor relationship.",
  },
  {
    q: "Does WeRoute provide cloud and cybersecurity services?",
    a: "Yes. Both are core domains, covering cloud platforms, DevOps, identity, security operations, and architecture-led risk reduction.",
  },
  {
    q: "Can WeRoute build AI and software solutions?",
    a: "Yes. WeRoute designs and builds enterprise applications, APIs, AI platforms, and production-ready intelligent systems.",
  },
  {
    q: "Does WeRoute provide technology staffing?",
    a: "Yes. Technology Staffing Services provide specialist engineers, consultants, augmented teams, and dedicated professionals.",
  },
  {
    q: "Which industries does WeRoute support?",
    a: "Financial services, healthcare, manufacturing, telecommunications, technology, retail, logistics, and energy & utilities, among others.",
  },
];

export default function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homepageFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#052440]"
    >
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[30%] h-[450px] w-[450px] rounded-full bg-[#052440]/5 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#080357]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="clay-badge-light inline-flex items-center border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
            FAQ
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#080357] md:text-4xl lg:text-[44px] tracking-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#052440]/70 font-normal">
            Clear answers about our enterprise technology consulting, engineering capabilities, delivery model, and industry engagements.
          </p>
        </motion.div>

        {/* Accordion List with Claymorphism */}
        <div className="mt-16 space-y-4">
          {homepageFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="clay-light overflow-hidden bg-[#f7f9fc] border border-[#052440]/5 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-6 sm:p-7 text-left transition-colors cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#080357]">
                    {faq.q}
                  </span>
                  <div
                    className={`clay-badge-light flex h-11 w-11 shrink-0 items-center justify-center border border-[#052440]/10 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#080357] text-white" : "bg-[#f7f9fc] text-[#080357]"
                    }`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-base leading-relaxed text-[#052440]/75 border-t border-[#052440]/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
