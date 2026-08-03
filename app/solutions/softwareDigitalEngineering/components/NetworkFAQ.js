"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#f7f9fc] py-32">
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
              <span className="clay-badge-light inline-block border border-[#050849]/5 bg-[#f7f9fc] px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#050849]">
                Frequently Asked Questions
              </span>
              
              <h2 className="mt-8 text-4xl font-black leading-tight tracking-[-0.04em] text-[#050849] md:text-5xl lg:text-6xl">
                Questions
                <br />
                Enterprises{" "}
                <span className="bg-gradient-to-r from-[#050849] to-[#98c93c] bg-clip-text text-transparent">
                  Ask Most
                </span>
              </h2>
              
              <p className="mt-6 text-lg font-medium leading-relaxed text-[#4c658a]">
                Answers to the most common questions about software engineering, application development, legacy modernization, and digital transformation.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-7 lg:pl-10">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <motion.div
                  layout
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`clay-light group relative overflow-hidden border border-[#050849]/5 bg-[#f7f9fc] transition-all duration-500`}
                >
                  <button
                    onClick={() => setActive(isOpen ? null : index)}
                    className="relative z-10 flex w-full items-start justify-between gap-6 px-6 py-6 text-left md:px-8 md:py-8"
                  >
                    <motion.h3
                      layout="position"
                      className={`mt-1 text-lg font-bold tracking-tight transition-colors duration-300 md:text-xl ${
                        isOpen ? "text-[#050849]" : "text-[#050849] group-hover:text-[#98c93c]"
                      }`}
                    >
                      {faq.question}
                    </motion.h3>
                    
                    <motion.div
                      layout="position"
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "border-[#98c93c] bg-[#98c93c]/10 text-[#050849]"
                          : "border-[#050849]/10 bg-transparent text-[#050849]/40 group-hover:border-[#050849]/20 group-hover:bg-white group-hover:text-[#050849]"
                      }`}
                    >
                      {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="px-6 pb-6 md:px-8 md:pb-8"
                      >
                        <div className="border-t border-[#050849]/10 pt-6">
                          <p className="text-base font-medium leading-relaxed text-[#4c658a] md:text-lg sm:text-left">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            <div className="clay-light mt-10 rounded-[32px] border border-[#050849]/5 bg-[#f7f9fc] p-10">
              <p className="text-xl font-bold leading-relaxed text-[#050849]">
                Every enterprise environment is different.
                If your software engineering requirements are unique,
                our architects can help design a solution
                tailored to your operational goals.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}