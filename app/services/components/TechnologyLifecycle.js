"use client";

import { motion } from 'framer-motion';
import { ArrowRightLeft } from 'lucide-react';

export default function TechnologyLifecycle() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#080357] mb-6">
              One Partner Across the Full Technology Lifecycle
            </h2>
          </motion.div>
        </div>

        {/* Diagram Placeholder */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-fit mx-auto clay-light bg-white border border-[#050849]/5 p-4 sm:p-6
                       relative overflow-hidden group rounded-[2rem]"
          >
            <img 
              src="/services%20digram/slc.jpg" 
              alt="Technology Lifecycle Diagram" 
              className="max-h-[400px] w-auto object-contain rounded-xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
