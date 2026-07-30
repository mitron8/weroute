"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export default function WhyEssentialSection({
  whyEssential,
  challenges,
}) {
  if (!whyEssential || !challenges) return null;

  return (
    <section className="mt-20">
      <div className="grid gap-8 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[40px] bg-[#052440] p-10 lg:p-12"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Why It Matters
          </span>

          <h2 className="mt-5 text-4xl font-black text-white">
            {whyEssential.title}
          </h2>

          <p className="mt-6 leading-8 text-white/70">
            {whyEssential.description}
          </p>

          <div className="mt-10 space-y-5">
            {whyEssential.points.map((item, i) => {
              const isObject = typeof item === 'object' && item !== null;
              return (
                <div
                  key={isObject ? item.title : item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 text-[#A7BF73] shrink-0"
                  />

                  <div className="text-white">
                    {isObject ? (
                      <>
                        <span className="font-bold block text-white">{item.title}</span>
                        <span className="text-white/70 text-sm mt-1 block">{item.desc || item.description}</span>
                      </>
                    ) : (
                      item
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[40px] border border-[#052440]/10 bg-white p-10 lg:p-12"
        >
          <div className="flex items-center gap-3">
            <ShieldAlert
              size={24}
              className="text-red-500"
            />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#052440]/40">
              Challenges
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-black text-[#052440]">
            {challenges.title}
          </h2>

          <div className="mt-10 space-y-4">
            {challenges.items.map((item, i) => {
              const isObject = typeof item === 'object' && item !== null;
              return (
                <div
                  key={isObject ? item.title : item}
                  className="rounded-2xl bg-[#f7f9fc] p-5 border border-[#052440]/5"
                >
                  <div className="text-[#052440]/75">
                    {isObject ? (
                      <>
                        <span className="font-bold block text-[#052440]">{item.title}</span>
                        <span className="text-sm mt-1 block">{item.desc || item.description}</span>
                      </>
                    ) : (
                      item
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}