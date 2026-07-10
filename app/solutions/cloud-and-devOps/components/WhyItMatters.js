'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function WhyItMatters() {
  const cards = [
    { title: "Multi-Cloud Adoption", desc: "Running multiple cloud providers without a unifying strategy creates duplicated effort and inconsistent standards." },
    { title: "Faster Software Delivery", desc: "Business expectations for release speed keep rising, often faster than legacy processes can support." },
    { title: "Governance Requirements", desc: "Policies for access, cost, and compliance need to scale alongside cloud adoption." },
    { title: "Security and Compliance", desc: "Security and compliance requirements grow more complex as cloud footprints expand across providers." },
    { title: "Operational Visibility", desc: "Fragmented tooling makes it difficult to see system health and performance in one place." },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#080357] mb-6">Why Cloud & DevOps Transformation Matters</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Enterprises rarely need just one piece of modern cloud operations. Multi-cloud adoption, faster delivery expectations, governance requirements, and the need for real-time visibility all arrive together, and treating them as separate initiatives usually creates more friction rather than removing it.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div key={i} variants={fadeInUp} className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#B7F36B] transition-colors shadow-sm hover:shadow-md">
              <h3 className="text-xl font-bold text-[#080357] mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}