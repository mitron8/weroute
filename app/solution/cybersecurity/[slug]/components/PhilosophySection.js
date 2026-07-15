"use client"

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react'; 

export default function PhilosophySection({ data }) {
  // 1. Log the data to your browser console to see what is actually arriving
  console.log("Philosophy Data received:", data);

  // 2. Instead of returning null, show a red error if data is missing
  if (!data || !data.quote) {
    return (
      <div className="w-full bg-red-100 p-10 text-center text-red-700 font-bold">
        Error: Philosophy data is missing or undefined! Check how you are passing the prop.
      </div>
    );
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