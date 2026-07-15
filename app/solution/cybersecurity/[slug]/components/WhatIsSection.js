"use client"

import { motion } from 'framer-motion';

export default function WhatIsSection({ data }) {
  if (!data || !data.content) return null;

  return (
    <section className="w-full bg-white py-24 md:py-32 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#052440] leading-tight tracking-tight">
                {data.title}
              </h2>
              {/* Accent line under the title */}
              <div className="w-12 h-1.5 bg-[#B7F36B] mt-6 rounded-full" />
            </motion.div>
          </div>

          {/* Right Column: Scrolling Paragraphs */}
          <div className="lg:col-span-7 space-y-8">
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
          </div>

        </div>
      </div>
    </section>
  );
}