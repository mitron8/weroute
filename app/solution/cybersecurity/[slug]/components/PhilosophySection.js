"use client"

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react'; 

export default function PhilosophySection({ data }) {
  if (!data || !data.quote) {
    return null;
  }

  return (
    <section className="relative w-full bg-white py-24 md:py-36 overflow-hidden flex justify-center items-center">
      
      {/* Giant ambient watermark quote in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#052440] opacity-[0.03] pointer-events-none flex justify-center items-center">
        <Quote className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]" strokeWidth={1} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-[#052440] tracking-tight">
            &ldquo;{data.quote}&rdquo;
          </h2>
        </motion.div>
      </div>
    </section>
  );
}