"use client";

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function ContactHero() {
  return (
    <section className="relative w-full bg-[#f8fafc] text-slate-900 overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Text Content (Left Side) */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-white border border-[#050849]/10 text-[#080357] text-xs font-semibold uppercase tracking-wider rounded-full mb-6 shadow-xs">
              Contact Us
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#080357] leading-[1.15] mb-6">
              Let's Build Something <span className="text-blue-600">Together.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl font-normal">
              Whether you're looking for advanced enterprise solutions, software engineering, or reliable network infrastructure, our team of experts is here to help you navigate your digital transformation journey.
            </p>

            <div className="border-l-2 border-[#080357] pl-4 py-1">
              <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-md">
                Reach out to discuss how WeRoute can tailor a solution to your business needs.
              </p>
            </div>
          </motion.div>

          {/* Form (Right Side) */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
