"use client";

import { motion } from 'framer-motion';
import { FAQAccordion } from '@/app/components/ui/FAQAccordion';

export default function ServicesFAQ() {
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
    <section className="relative overflow-hidden bg-[#f7f9fc] py-28 lg:py-32 border-t border-[#050849]/5">
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#050849]/[0.02] blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#98c93c]/[0.03] blur-[100px]" />
      </div>

      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              Support & Clarity
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-extrabold leading-tight text-[#080357] md:text-4xl lg:text-[44px] tracking-tight"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base md:text-lg leading-relaxed text-[#050849]/65 max-w-2xl mx-auto"
          >
            Find clarity on how our technology services are structured, delivered, and integrated into your enterprise environment.
          </motion.p>
        </div>

        <FAQAccordion items={faqs} initialOpenIndex={0} />
      </div>
    </section>
  );
}
