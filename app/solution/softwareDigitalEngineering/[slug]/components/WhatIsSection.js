"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function WhatIsSection({ data }) {
  const [imgError, setImgError] = useState(false);
  const params = useParams();
  const slug = params?.slug;
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
          <div className="lg:col-span-7 space-y-8 p-10 lg:p-14">
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

            {/* DIAGRAM PLACEHOLDER OR IMAGE */}
            {!imgError && slug && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="mt-12 w-full overflow-hidden rounded-2xl shadow-[0_15px_50px_rgba(5,36,64,0.08)] border border-[#052440]/10"
                suppressHydrationWarning
              >
                <img 
                  src={`/images/solution digram/${slug}.jpg`} 
                  alt={`${data.title} Diagram`}
                  className="w-full h-auto object-cover"
                  onError={() => setImgError(true)}
                  suppressHydrationWarning
                />
              </motion.div>
            )}
          </div>

        </div>
      </motion.div>
    </section>
  );
}