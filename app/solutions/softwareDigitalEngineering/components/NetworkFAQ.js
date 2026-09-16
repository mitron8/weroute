"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FAQItem } from "@/app/components/ui/FAQAccordion";

const faqs = [
  {
    question: "What are digital engineering services?",
    answer: "Digital engineering services cover the design, development, and modernization of software, applications, and platforms, combining engineering discipline with a broader digital transformation strategy.",
  },
  {
    question: "How does software engineering support digital transformation?",
    answer: "Software engineering supports digital transformation by turning strategy into working systems, building the applications, APIs, and platforms that new digital initiatives actually run on.",
  },
  {
    question: "What is enterprise application development?",
    answer: "Enterprise application development is the design and build of software specifically for large organizations, accounting for existing systems, governance requirements, and enterprise-scale usage.",
  },
  {
    question: "Why is API-first architecture important?",
    answer: "API-first architecture matters because it lets systems, partners, and products connect and integrate from the start, rather than bolting on integration after an application is already built.",
  },
  {
    question: "How can organizations modernize legacy applications?",
    answer: "Organizations modernize legacy applications through phased approaches such as replatforming, refactoring, or rebuilding specific components, chosen based on risk, business priority, and system criticality.",
  },
  {
    question: "What is domain-driven software design?",
    answer: "Domain-driven software design structures a system's code and architecture around real business concepts and workflows, so the software mirrors how the business actually operates.",
  },
  {
    question: "How does digital engineering improve scalability?",
    answer: "Digital engineering improves scalability by building systems on architecture designed to handle growth in usage and complexity, rather than systems that need to be rebuilt each time demand increases.",
  }
];

export default function NetworkFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-28 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,8,73,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,8,73,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="clay-badge-light inline-block border border-[#050849]/5 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849]">
                Support & Clarity
              </span>
              
              <h2 className="mt-8 text-4xl font-normal leading-tight text-[#050849] md:text-5xl lg:text-6xl tracking-tight">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-[#050849] to-[#4c658a] bg-clip-text text-transparent font-medium">
                  Questions
                </span>
              </h2>
              
              <p className="mt-6 text-lg font-normal leading-relaxed text-[#050849]/65">
                Answers to the most common questions about software engineering, application development, legacy modernization, and digital transformation.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-7 lg:pl-10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
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