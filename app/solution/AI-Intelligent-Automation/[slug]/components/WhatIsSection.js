"use client";

import { motion } from "framer-motion";

export default function WhatIsSection({ data }) {
  if (!data) return null;

  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-[40px] border border-[#052440]/10 bg-white shadow-[0_15px_50px_rgba(5,36,64,0.04)]"
      >
        <div className="grid lg:grid-cols-12">

          {/* LEFT PANEL */}
          <div className="bg-[#052440] p-10 lg:col-span-4 lg:p-14">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Understanding
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white">
              {data.title}
            </h2>
          </div>

          {/* CONTENT */}
          {/* Right Column: Scrolling Paragraphs */}
          <div className="lg:col-span-7 p-10 lg:p-14 space-y-8">
            {data.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* DIAGRAM PLACEHOLDER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-12 w-full h-64 md:h-80 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 gap-3"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              <span className="font-medium">Diagram Placeholder</span>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}