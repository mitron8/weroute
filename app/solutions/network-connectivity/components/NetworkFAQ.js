"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FAQItem } from "@/app/components/ui/FAQAccordion";

const faqs = [
  {
    question: "What is network observability and why does it matter?",
    answer:
      "Network observability is the ability to see performance, security, and health data across your entire network in real time. It matters because problems caught early cost far less than problems discovered after users complain.",
  },
  {
    question: "How does SD-WAN improve enterprise network performance?",
    answer:
      "SD-WAN improves performance by intelligently routing traffic across multiple connection types based on real-time conditions, reducing latency for cloud applications and removing dependency on a single expensive circuit.",
  },
  {
    question: "What is the difference between Network as a Service and traditional network ownership?",
    answer:
      "Network as a Service shifts infrastructure management to a provider like WeRoute, so enterprises pay for outcomes and uptime rather than owning, maintaining, and upgrading hardware themselves.",
  },
  {
    question: "What does network observability actually measure?",
    answer:
      "Network observability measures performance, latency, traffic patterns, and security signals across every connected site at once. It is different from basic monitoring because it shows why something is happening, not just that something happened.",
  },
  {
    question: "Is SD-WAN secure enough for enterprise environments?",
    answer:
      "SD-WAN is secure when security is designed into the architecture from the start, including segmentation and Zero Trust principles. SD-WAN deployed without that design layer creates new gaps, not fewer ones.",
  },
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
                Answers to the most common questions about
                enterprise networking, SD-WAN, observability,
                managed networking, and modern infrastructure.
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

            <div className="clay-light mt-6 rounded-[28px] border border-[#050849]/5 bg-[#f7f9fc] p-8 md:p-10">
              <p className="text-lg md:text-xl font-medium leading-relaxed text-[#050849]">
                Every enterprise environment is different.
                If your networking requirements are unique,
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