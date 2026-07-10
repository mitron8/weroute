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

export default function BusinessOutcomes() {
  const outcomes = [
    { title: "Faster Deployments", desc: "Software and infrastructure changes ship faster, with fewer manual steps in the way." },
    { title: "Consistent Environments", desc: "Every environment is provisioned the same way, removing team-to-team variation." },
    { title: "Reduced Operational Risk", desc: "Standardized processes and governance lower the chance of costly configuration errors." },
    { title: "Improved Reliability", desc: "Systems built on governed architecture experience fewer unexpected disruptions overall." },
    { title: "Better Cost Visibility", desc: "Clear visibility into cloud spend, helps teams control costs as usage scales." },
    { title: "Scalable Cloud Operations", desc: "Processes that work for a small footprint continue working as the organization grows." },
  ];

  return (
    <section className="py-20 px-6 bg-[#080357] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Outcomes</h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <motion.div key={i} variants={fadeInUp} className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-[#B7F36B] mb-3">{outcome.title}</h3>
              <p className="text-gray-300">{outcome.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}