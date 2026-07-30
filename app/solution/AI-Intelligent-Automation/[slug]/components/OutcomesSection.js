"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Zap,
  ShieldCheck,
  Gauge,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const icons = [
  TrendingUp,
  Zap,
  ShieldCheck,
  Gauge,
  Clock,
  ArrowUpRight,
];

export default function OutcomesSection({ data }) {
  if (!data) return null;

  return (
    <section className="mt-24">

      <div className="text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#052440]/40">
          Business Outcomes
        </span>

        <h2 className="mt-5 text-5xl font-black text-[#052440]">
          {data.title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-[#052440]/65">
          {data.description || "Real business impact delivered through modern network architectures, intelligent operations, and optimized performance."}
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {data.items.map((item, index) => {
          const isObject = typeof item === 'object' && item !== null;
          const Icon = icons[index % icons.length];

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
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-[#052440]/10 bg-white p-8 shadow-[0_10px_30px_rgba(5,36,64,0.04)] flex flex-col"
            >

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#A7BF73]/20 text-[#052440]">
                <Icon size={22} />
              </div>

              <p className="mt-6 text-lg font-semibold leading-8 text-[#052440]">
                {isObject ? item.title : item}
              </p>
              
              {isObject && (
                <p className="mt-2 text-sm leading-6 text-[#052440]/70">
                  {item.desc || item.description}
                </p>
              )}

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}