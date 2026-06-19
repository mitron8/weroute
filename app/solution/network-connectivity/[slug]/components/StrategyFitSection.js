"use client";

import { motion } from "framer-motion";
import { Network, ArrowRight } from "lucide-react";

export default function StrategyFitSection({ data }) {
  if (!data) return null;

  return (
    <section className="mt-24">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-[40px] border border-[#052440]/10 bg-white shadow-[0_15px_50px_rgba(5,36,64,0.04)]"
      >

        <div className="grid lg:grid-cols-12">

          {/* LEFT */}
          <div className="border-b border-[#052440]/10 p-10 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-16">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#080357] text-white">
              <Network size={28} />
            </div>

            <h2 className="mt-8 text-4xl font-black text-[#052440]">
              {data.title}
            </h2>

            <p className="mt-6 leading-8 text-[#052440]/65">
              {data.description}
            </p>

          </div>

          {/* RIGHT */}
          <div className="p-10 lg:col-span-7 lg:p-16">

            <div className="grid gap-5">

              {data.items.map((item) => (
                <div
                  key={item}
                  className="group flex items-center justify-between rounded-[24px] border border-[#052440]/10 bg-[#f7f9fc] p-5 transition hover:border-[#A7BF73]/50 hover:bg-white"
                >
                  <span className="font-medium text-[#052440]">
                    {item}
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-[#080357] transition group-hover:translate-x-1"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}