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

export default function OurApproach() {
  const pillars = [
    { title: "Architecture-First Design", desc: "Every engagement starts with architecture, not tooling, so cloud and DevOps decisions support where the business is heading." },
    { title: "Standardization by Design", desc: "Consistent blueprints and practices replace ad hoc configurations, reducing variation across teams, environments, and projects." },
    { title: "Security & Governance", desc: "Access, compliance, and security policies are built into the approach from the outset, not added after deployment." },
    { title: "Operational Visibility", desc: "Cloud, application, and infrastructure layers are brought into one clear view instead of fragmented, disconnected dashboards." },
    { title: "Scalability & Reliability", desc: "Foundations are designed to support growth from day one, avoiding the rework that comes from short-term decisions." },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#080357] mb-6">Our Cloud & DevOps Approach</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At WeRoute, we approach cloud transformation as one coordinated discipline rather than a collection of separate projects, aligning architecture, automation, governance, and observability from the start so cloud operations scale predictably as the business grows.
          </p>
          <div className="bg-white p-6 border-l-4 border-[#080357] shadow-sm rounded-r-lg inline-block">
            <p className="font-semibold text-[#080357]">
              WeRoute has supported 40+ enterprise deployments with 99.9% system reliability, applying that same operational discipline across every cloud and DevOps engagement.
            </p>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
          {pillars.map((pillar, i) => (
            <motion.div key={i} variants={fadeInUp} className="flex flex-col md:flex-row bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-[#080357]">{pillar.title}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}