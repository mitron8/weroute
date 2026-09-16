"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FAQItem } from "@/app/components/ui/FAQAccordion";

const faqData = [
  {
    question: "What is the difference between Solutions and Services at WeRoute?",
    answer: "Solutions focus on business outcomes and architectures, while Services define how we execute—through managed services, professional services, consulting, or staffing.",
  },
  {
    question: "Do your solutions depend on specific tools or vendors?",
    answer: "No. WeRoute follows a vendor-agnostic approach, ensuring flexibility, long-term viability, and alignment with your existing ecosystem.",
  },
  {
    question: "Can solutions be customized for our industry or scale?",
    answer: "Yes. All solutions are custom-designed based on industry requirements, regulatory needs, scale, and operational maturity.",
  },
  {
    question: "Do you support hybrid and multi-cloud environments?",
    answer: "Absolutely. Our solutions are designed for on-prem, cloud, hybrid, and multi-cloud environments.",
  },
  {
    question: "How do you ensure security across all solutions?",
    answer: "Security is embedded by design—across architecture, access control, monitoring, and governance—rather than added as an afterthought.",
  },
  {
    question: "Can WeRoute support long-term operations after solution deployment?",
    answer: "Yes. WeRoute offers managed services, SOC, observability, and ongoing optimization to ensure solutions continue delivering value.",
  },
];

export default function SolutionsFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-[#f7f9fc] py-28 lg:py-32">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#050849]/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* LEFT COLUMN: Sticky Header */}
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
              
              <h2 className="mt-6 text-3xl font-normal leading-tight text-[#050849] md:text-4xl lg:text-[44px]">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-[#050849] to-[#4c658a] bg-clip-text text-transparent font-medium">
                  Questions
                </span>
              </h2>
              
              <p className="mt-6 text-lg leading-relaxed text-[#050849]/65">
                Find clarity on how our solutions are structured, delivered, and integrated into your enterprise environment.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Accordion */}
          <div className="flex flex-col gap-4 lg:col-span-7 lg:pl-10">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === index}
                onToggle={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}