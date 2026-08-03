"use client"
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function WhatIsSection({ data }) {
  if (!data || !data.content) return null;

  return (
    <section className="w-full bg-[#f7f9fc] py-24 md:py-32 border-t border-gray-100">
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

            {/* DIAGRAM PLACEHOLDER OR LOTTIE */}
            {data.lottieUrl ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="mt-12 w-full h-64 md:h-80 clay-light bg-[#f7f9fc] border border-[#050849]/5 flex items-center justify-center overflow-hidden"
              >
                <DotLottieReact
                  src={data.lottieUrl}
                  loop
                  autoplay
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="mt-12 w-full h-64 md:h-80 clay-light bg-[#f7f9fc] border border-[#050849]/5 border-dashed flex flex-col items-center justify-center text-gray-400 gap-3"
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                <span className="font-medium">Diagram Placeholder</span>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}