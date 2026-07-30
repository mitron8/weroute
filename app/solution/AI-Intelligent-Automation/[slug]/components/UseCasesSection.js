"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function UseCasesSection({ data }) {
  if (!data) return null;

  return (
    <section className="mt-24">

      <div className="overflow-hidden rounded-[40px] bg-[#052440] p-10 lg:p-16">

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Where It Delivers Value
          </span>

          <h2 className="mt-5 text-5xl font-black text-white">
            {data.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            {data.description || "Designed for complex enterprise environments where performance, visibility, scalability, and reliability are critical."}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {data.items.map((item, index) => {
            const isObject = typeof item === 'object' && item !== null;
            return (
            <motion.div
              key={isObject ? item.title : item}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-lg font-medium text-white block">
                    {isObject ? item.title : item}
                  </span>
                  {isObject && (
                    <span className="text-sm text-white/70 mt-2 block pr-4">
                      {item.desc || item.description}
                    </span>
                  )}
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-[#A7BF73] transition group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 mt-1"
                />

              </div>
            </motion.div>
          )})}

        </div>

      </div>

    </section>
  );
}