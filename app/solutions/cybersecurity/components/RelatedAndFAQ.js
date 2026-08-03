"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What are enterprise cybersecurity solutions?",
    answer: "Enterprise cybersecurity solutions are architecture-led security programs that protect identity, endpoints, cloud environments, and data across an organization, combining governance, detection, and response into a single coordinated strategy.",
  },
  {
    question: "Why is cybersecurity important for modern businesses?",
    answer: "Modern businesses run on hybrid and cloud infrastructure with expanding attack surfaces, making strong cybersecurity essential to protect operations, maintain compliance, and preserve customer trust.",
  },
  {
    question: "What is Zero Trust Architecture?",
    answer: "Zero Trust Architecture is a security model that removes implicit trust from the network, requiring continuous verification of every user, device, and access request regardless of location.",
  },
  {
    question: "How does Identity & Access Management improve security?",
    answer: "Identity & Access Management strengthens security by enforcing least-privilege access, governing user permissions, and reducing the risk of credential-based attacks across enterprise systems.",
  },
  {
    question: "What is the role of SOC, SIEM, and SOAR?",
    answer: "SOC, SIEM, and SOAR work together to give security teams unified visibility, intelligent threat detection, and coordinated incident response across the enterprise.",
  },
  {
    question: "How can cybersecurity support regulatory compliance?",
    answer: "A strong cybersecurity program builds continuous governance and audit readiness into daily operations, helping organizations meet regulatory requirements without last-minute scrambling.",
  },
  {
    question: "How does cybersecurity integrate with cloud and hybrid environments?",
    answer: "Modern cybersecurity extends security architecture across cloud platforms, on-premises infrastructure, and hybrid environments, ensuring consistent protection regardless of where data and applications live.",
  },
];

export default function RelatedAndFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#f7f9fc] py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,8,73,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,8,73,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="clay-light mb-24 rounded-3xl border border-[#050849]/5 bg-[#f7f9fc] p-8 sm:p-10">
          <h3 className="text-xl font-bold tracking-tight text-[#050849] mb-6">Related Cybersecurity Solutions</h3>
          <p className="text-[#4c658a] font-medium mb-8 max-w-3xl">
            Cybersecurity connects directly to networking, cloud, automation, and managed services. A strong security architecture supports every stage of enterprise digital transformation.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Endpoint & Cloud Security", href: "/solution/cybersecurity/endpoint-and-cloud-security-services" },
              { label: "Identity & Access Management", href: "/solution/cybersecurity/identity-access-management" },
              { label: "SOC, SIEM & SOAR", href: "/solution/cybersecurity/soc-siem-soar" },
              { label: "GRC & Vendor Risk", href: "/solution/cybersecurity/grc-vendor-risk-management" },
              { label: "Zero Trust Architecture", href: "/solution/cybersecurity/zero-trust-architecture" }
            ].map(link => (
              <a href={link.href} key={link.label} className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#f7f9fc] px-5 py-2.5 text-sm font-bold text-[#050849] transition-colors hover:bg-[#98c93c]">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <span className="clay-badge-light inline-flex rounded-full border border-[#050849]/5 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#050849]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#050849] md:text-6xl lg:text-7xl">
              Questions <br />
              Enterprises
              <span className="text-[#98c93c]"> Ask Most</span>
            </h2>
          </div>

          <p className="max-w-xl text-lg font-medium leading-9 text-[#4c658a]">
            Answers to the most common questions about enterprise cybersecurity solutions, architectures, and managed security services.
          </p>
        </div>

        <div className="mt-24 space-y-5">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div key={faq.question} className="clay-light overflow-hidden rounded-[36px] border border-[#050849]/5 bg-[#f7f9fc]">
                <button
                  onClick={() => setActive(open ? null : index)}
                  className="flex w-full items-center justify-between gap-6 p-8 text-left"
                >
                  <h3 className="text-xl font-bold leading-relaxed tracking-[-0.03em] text-[#050849]">
                    {faq.question}
                  </h3>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f7f9fc] text-[#050849] transition-colors duration-300 hover:bg-[#98c93c]">
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
                      <div className="border-t border-[#050849]/5 px-8 py-8">
                        <p className="max-w-4xl text-base font-medium leading-8 text-[#4c658a]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="clay-light mt-20 rounded-[40px] border border-[#050849]/5 bg-[#f7f9fc] p-10">
          <p className="max-w-4xl text-2xl font-bold leading-relaxed tracking-[-0.03em] text-[#050849]">
            Every enterprise environment is different. If your cybersecurity requirements are unique, our architects can help design a security strategy tailored to your operational goals.
          </p>
        </div>
      </div>
    </section>
  );
}