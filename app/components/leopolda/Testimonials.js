"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsLeopolda() {
  return (
    <section className="w-full bg-white py-32 lg:py-48 px-6 lg:px-12 flex flex-col items-center justify-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-[32px] md:text-[45px] lg:text-[55px] font-medium leading-[1.1] text-[#111] uppercase tracking-wide mb-16 lg:mb-24"
      >
        WHAT THEY SAY ABOUT US
      </motion.h2>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h3 className="text-[18px] md:text-[22px] font-semibold text-[#111] tracking-widest uppercase mb-2">
            FABIO BURCHI
          </h3>
          <p className="text-[11px] md:text-[13px] text-gray-500 tracking-[0.2em] uppercase">
            CEO & CPO | FLORENCE MARATHON
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[16px] md:text-[20px] text-gray-600 leading-relaxed font-light mb-16 max-w-3xl"
        >
          Located just steps from the city center, the venue is easily accessible by both public and
          private transport. The spaces are well suited to both stylistic and more minimalist setups. The
          staff is professional and highly supportive in both the planning and execution of events.
        </motion.p>

        {/* Arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-8 text-gray-400"
        >
          <button className="hover:text-black transition-colors duration-300">
            <ChevronLeft size={24} strokeWidth={1} />
          </button>
          <button className="hover:text-black transition-colors duration-300">
            <ChevronRight size={24} strokeWidth={1} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
