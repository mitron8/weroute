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

export default function RelatedAndFAQ() {
  const faqs = [
    { q: "What are Cloud & DevOps Solutions?", a: "Cloud & DevOps Solutions bring together cloud architecture, platform engineering, infrastructure automation, and observability into one coordinated approach for running and scaling modern cloud operations." },
    { q: "How does DevOps improve software delivery?", a: "DevOps improves software delivery by standardizing tools, automating CI/CD pipelines, and giving engineering teams consistent environments. It reduces the manual steps that typically slows the releases down." },
    { q: "What are the benefits of Infrastructure as Code?", a: "Infrastructure as Code reduces manual configuration errors, speeds up provisioning, and makes environments easier to govern and audit, since infrastructure is defined and version-controlled as code." },
    { q: "How can organizations improve cloud governance?", a: "Organizations improve cloud governance by embedding access, compliance, and cost policies directly into infrastructure and delivery processes, rather than enforcing them manually after deployment." },
    { q: "What is cloud observability?", a: "Cloud observability is the ability to understand system behavior across distributed cloud environments by analyzing logs, metrics, and traces, rather than relying on isolated monitoring alone." },
    { q: "How do Cloud & DevOps improve operational efficiency?", a: "Cloud and DevOps improve operational efficiency by removing manual, repetitive work from infrastructure and delivery processes, allowing teams to focus on higher-value engineering work." },
    { q: "How can hybrid cloud environments be managed effectively?", a: "Hybrid cloud environments are managed effectively through consistent architecture and governance that treats on-premises and cloud systems as one environment, instead of two disconnected ones." },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Related Solutions Sidebar */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-1">
          <div className="bg-[#080357] text-white p-8 rounded-xl sticky top-8">
            <h3 className="text-2xl font-bold mb-4 text-[#B7F36B]">Related Cloud & DevOps Solutions</h3>
            <p className="text-gray-300 mb-6 text-sm">
              WeRoute's cloud and DevOps work spans four connected disciplines, each building on the others to support a complete cloud strategy.
            </p>
            <ul className="space-y-4">
              {['Cloud Architecture & Integration', 'DevOps & Platform Engineering', 'Infrastructure as Code', 'Cloud Observability'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="flex items-center text-gray-200 hover:text-[#B7F36B] transition-colors">
                    <span className="mr-2">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-[#080357] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp} className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-[#080357] mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}