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
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto clay-light bg-white border border-[#050849]/5 flex flex-col items-center justify-center p-16 text-center
                     min-h-[500px] relative overflow-hidden group"
        >
          {/* Subtle background pattern/gradient for the placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f7f9fc] to-white" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSg4LCAzLCA4NywgMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
          
          <div className="relative z-10 flex flex-col items-center justify-center">
             <div className="w-24 h-24 clay-badge-light bg-[#f7f9fc] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <ArrowRightLeft className="w-10 h-10 text-blue-500" />
             </div>
             
             <h3 className="text-2xl font-bold text-gray-800 mb-4">Lifecycle Diagram Placeholder</h3>
             <p className="text-[#080357]/80 font-medium max-w-lg mx-auto">
                A visual diagram illustrating WeRoute's end-to-end involvement across the full technology lifecycle will be placed here.
             </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
