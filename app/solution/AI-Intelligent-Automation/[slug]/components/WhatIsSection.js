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
          <div className="p-10 lg:col-span-8 lg:p-14">
            <div className="space-y-6">
              {data.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-8 text-[#052440]/70"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}