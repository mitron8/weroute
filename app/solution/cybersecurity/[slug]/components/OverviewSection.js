"use client";

import { motion } from "framer-motion";

export default function OverviewSection({ data }) {
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

          {/* LEFT SIDE */}
          <div className="border-b border-[#052440]/10 p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-14">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#052440]/40">
              Overview
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-[#052440]">
              {data.title}
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-10 lg:col-span-8 lg:p-14">
            <div className="space-y-6">

              <p className="leading-8 text-[#052440]/70">
                {data.description}
              </p>

              {data.description2 && (
                <p className="leading-8 text-[#052440]/70">
                  {data.description2}
                </p>
              )}

              {data.description3 && (
                <p className="leading-8 text-[#052440]/70">
                  {data.description3}
                </p>
              )}

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}