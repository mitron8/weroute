"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection({ data }) {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden py-20 text-[#050849]">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="clay-light relative overflow-hidden rounded-[32px] p-6 md:p-10 lg:p-14"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-[#98c93c]" />

          <div className="grid gap-12 xl:grid-cols-12 xl:items-end xl:justify-between">
            <div className="xl:col-span-8">
              <span className="clay-badge-light inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849] shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
                Next Steps
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[54px] text-[#050849]">
                {data.title}
              </h2>
            </div>

            <div className="flex flex-col justify-end xl:col-span-4 xl:pl-6">
              <p className="text-base leading-relaxed text-[#4c658a] sm:text-lg">
                {data.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 pt-2">
                <a href="/contact" className="clay-badge-light group inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-sm font-bold text-[#050849] transition-all duration-300 hover:-translate-y-0.5">
                  <span>{data.button || "Talk To An Expert"}</span>
                  <ArrowRight
                    size={18}
                    className="text-[#98c93c] transition-transform duration-300 group-hover:translate-x-1 shrink-0"
                  />
                </a>
                {(data.button2 || data.button2 === undefined) && (
                  <a href="/contact" className="inline-flex items-center justify-center rounded-xl border border-[#4c658a]/20 bg-white px-8 py-4 text-sm font-bold text-[#050849] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7f9fc]">
                    <span>{data.button2 || "Request Consultation"}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
