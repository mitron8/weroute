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

export default function BusinessChallenges() {
  const cards = [
    { title: "Slow Provisioning", desc: "Manual infrastructure setup delays projects and slows the pace of delivery." },
    { title: "Environment Inconsistency", desc: "Development, staging, and production environments drift apart without a shared standard." },
    { title: "Migration Risk", desc: "Cloud migrations without a clear architecture increase the risk of costly rework." },
    { title: "Limited Visibility", desc: "Teams often cannot see across cloud, application, and infrastructure layers in one place." },
    { title: "Governance & Compliance Gaps", desc: "Inconsistent policies across environments make compliance harder to prove and maintain." },
  ];

  return (
    <section className="py-20 px-6 bg-[#080357] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Challenges We Solve</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Most cloud challenges are not caused by any single tool. They come from disconnected strategy across teams.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div key={i} variants={fadeInUp} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#B7F36B]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#B7F36B] mb-4">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}