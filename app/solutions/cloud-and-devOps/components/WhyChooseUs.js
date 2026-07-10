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

export default function WhyChooseUs() {
  const reasons = [
    { title: "Consulting-Led Transformation", desc: "We lead with strategy, not tooling, aligning every cloud and DevOps decision to how your business actually operates." },
    { title: "Vendor-Agnostic Design", desc: "Solutions are shaped by your environment and goals, not tied to any single cloud provider or platform." },
    { title: "Enterprise Governance Expertise", desc: "Deep experience embedding governance into cloud and DevOps engagements ensures compliance scales alongside delivery speed." },
    { title: "Cloud & Operations Experience", desc: "Hands-on experience across architecture, automation, and observability means recommendations reflect what works in production, not just in theory." },
    { title: "Long-Term Operational Maturity", desc: "Solutions are designed for how the environment will operate for years, not just for a successful initial rollout." },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#080357] mb-6">Why Choose WeRoute</h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-t-[#B7F36B]">
              <h3 className="text-xl font-bold text-[#080357] mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}