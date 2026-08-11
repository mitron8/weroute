"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What technology services does WeRoute provide?",
      answer: "We at WeRoute provide managed services, professional services, consulting and advisory services, staffing and manpower support, and software and AI development, covering cloud services, cybersecurity services, and enterprise infrastructure across the full technology stack."
    },
    {
      question: "How do managed services differ from professional services?",
      answer: "Managed services are ongoing: WeRoute takes continuous responsibility for monitoring, support, and operations. Professional services are project-based, used for a defined implementation, migration, or integration with a clear start and end date. Many organizations use both, starting with a professional services engagement and moving into managed IT services once systems are live."
    },
    {
      question: "Which engagement model is right for my organization?",
      answer: "It depends on scope and timeline. A defined project with clear boundaries fits project-based delivery. Ongoing capacity gaps fit dedicated engineering teams or staff augmentation. Full operational ownership fits managed operations, and early-stage decisions fit strategic advisory."
    },
    {
      question: "Can WeRoute work alongside our internal IT teams?",
      answer: "Yes. Dedicated engineering teams and staff augmentation engagements are built specifically to work inside existing internal teams, following the client's own tools, processes, and reporting lines rather than operating as a separate outside vendor."
    },
    {
      question: "Do you support cloud and hybrid infrastructure?",
      answer: "Yes. WeRoute supports cloud services, hybrid infrastructure, and multi-cloud environments across professional services, managed services, and consulting and advisory engagements, including cloud migration and enterprise architecture planning."
    },
    {
      question: "Do you provide dedicated engineering resources?",
      answer: "Yes, through both staff augmentation and fully dedicated technology teams, depending on whether an organization needs individual specialists or a complete team working exclusively on one initiative."
    },
    {
      question: "Which industries do you serve?",
      answer: "WeRoute works across financial services, healthcare, manufacturing, retail and e-commerce, telecommunications, education, government and public sector, energy and utilities, technology and SaaS, and logistics and supply chain."
    }
  ];

  // Generate JSON-LD for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-[#f7f9fc] border-t border-gray-100">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="mx-auto max-w-[1500px] px-8">
        
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="clay-light bg-white border border-[#050849]/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-[#080357] pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-400 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-[#080357]/80 font-medium leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
