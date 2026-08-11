"use client";

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function ContactHero() {
  return (
    <section className="relative w-full bg-[#f7f9fc] text-gray-900 overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40 border-b border-gray-100">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-50/50 to-[#f7f9fc]" />
      </div>
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#080357] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600 opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content (Left Side) */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-[#f7f9fc] clay-badge-light text-[#080357] text-xs font-bold uppercase tracking-wider rounded-full">
                Contact Us
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-[#080357]">
              Let's Build Something <span className="text-blue-600">Together.</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
              Whether you're looking for advanced enterprise solutions, software engineering, or reliable network infrastructure, our team of experts is here to help you navigate your digital transformation journey.
            </p>

            <div className="border-l-[3px] border-[#080357] pl-5 py-1 mb-8">
              <p className="text-base text-gray-500 max-w-lg font-medium leading-relaxed">
                Reach out to discuss how WeRoute can tailor a solution to your business needs.
              </p>
            </div>
          </motion.div>

          {/* Form (Right Side) */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-full max-w-2xl relative">
              {/* Subtle accent behind form */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#080357]/10 to-blue-400/10 rounded-3xl transform translate-x-3 translate-y-3 -z-10" />
              <ContactForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
