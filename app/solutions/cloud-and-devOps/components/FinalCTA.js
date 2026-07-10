'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-[#080357] text-center relative overflow-hidden">
      {/* Background Accent Gradient */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#B7F36B] via-transparent to-transparent"></div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Build Cloud Foundations for Long-Term Growth
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Talk to WeRoute about building cloud and DevOps foundations that scale with governance built in from day one.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#B7F36B] text-[#080357] px-8 py-4 rounded font-bold hover:bg-[#a3e059] transition-colors shadow-lg">
            Talk to a Cloud Expert
          </button>
          <button className="bg-transparent border-2 border-[#B7F36B] text-[#B7F36B] px-8 py-4 rounded font-bold hover:bg-[#B7F36B] hover:text-[#080357] transition-colors shadow-lg">
            Request Consultation
          </button>
        </div>
      </motion.div>
    </section>
  );
}