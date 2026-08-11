"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="clay-dark bg-gradient-to-br from-[#080357] to-[#1a0a80] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden border border-white/10"
        >
          {/* Decorative background elements inside CTA */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A7BF73]/10 blur-[100px] rounded-full pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ready to Build Technology <br className="hidden md:block"/> <span className="text-[#A7BF73]">That Moves Your Business Forward</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Work with consultants and engineers who plan, implement, secure, and optimize enterprise technology environments, from a single managed services engagement to a full enterprise technology partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <Link
                 href="/contact"
                 className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-[#080357] bg-white clay-btn-accent"
               >
                 <span className="relative z-10 flex items-center gap-2">
                   Talk to Our Experts
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </span>
               </Link>
               <Link
                 href="/solutions"
                 className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white border-2 border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
               >
                 <span className="relative z-10">
                   Explore Our Solutions
                 </span>
               </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
