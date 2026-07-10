'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <section className="relative bg-[#080357] text-white py-24 lg:py-32 overflow-hidden px-6">
      {/* Visual Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B7F36B] via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Cloud & DevOps Solutions Built for Enterprise Scale
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            WeRoute delivers cloud transformation and DevOps consulting for enterprises running hybrid cloud environments, combining architecture, automation, and governance into one coordinated approach to modern cloud operations.
          </p>
          <p className="text-base text-gray-400 mb-10 border-l-4 border-[#B7F36B] pl-4">
            WeRoute delivers Cloud & DevOps Solutions spanning cloud architecture, platform engineering, infrastructure automation, and observability for enterprises running hybrid and multi-cloud environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-[#B7F36B] text-[#080357] px-8 py-4 rounded font-bold hover:bg-[#a3e059] transition-colors shadow-lg">
              Talk to a Cloud Expert
            </button>
          </div>

          <motion.p variants={fadeInUp} className="text-sm font-medium tracking-wide text-[#B7F36B] uppercase italic">
            "Cloud transformation that ignores governance just moves the chaos somewhere new."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}