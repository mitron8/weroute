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

export default function Capabilities() {
  const capabilities = [
    { title: "Cloud Architecture & Integration", desc: "Secure, scalable cloud foundations that unify infrastructure, applications, networking, security, and data into one governed operating model." },
    { title: "DevOps & Platform Engineering", desc: "Internal developer platforms and CI/CD practices that give engineering teams standardized, self-service tools for reliable software delivery." },
    { title: "Infrastructure as Code (IaC)", desc: "Automated, version-controlled infrastructure provisioning that replaces manual configuration with consistent, governed environments at enterprise scale." },
    { title: "Cloud Observability", desc: "End-to-end visibility across distributed systems, helping teams resolve issues faster and operate with greater confidence." },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#080357] mb-6">Cloud & DevOps Capabilities</h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div key={i} variants={fadeInUp} className="p-8 rounded-xl border border-gray-200 group hover:border-[#B7F36B] transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#B7F36B] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <h3 className="text-2xl font-bold text-[#080357] mb-4">{cap.title}</h3>
              <p className="text-gray-600 mb-6">{cap.desc}</p>
              <a href="#" className="text-[#080357] font-bold hover:text-[#88c541] inline-flex items-center transition-colors">
                [Learn More] <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center bg-gray-50 p-8 rounded-xl">
          <p className="text-lg text-[#080357] font-medium">
            Not sure which capability fits your current priorities? Talk to WeRoute about building a cloud and DevOps roadmap that fits where you are today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}