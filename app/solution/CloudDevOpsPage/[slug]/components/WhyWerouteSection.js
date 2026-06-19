"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyWerouteSection({ data }) {
  if (!data) return null;

  return (
    <section className="mt-24">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#080357] to-[#052440]"
      >

        <div className="grid lg:grid-cols-12">

          {/* LEFT */}
          <div className="p-10 lg:col-span-5 lg:p-16">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Why WeRoute
            </span>

            <h2 className="mt-5 text-5xl font-black text-white">
              {data.title}
            </h2>

            <p className="mt-8 leading-8 text-white/70">
              {data.description}
            </p>

          </div>

          {/* RIGHT */}
          <div className="border-t border-white/10 p-10 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-16">

            <div className="grid gap-5 md:grid-cols-2">

              {data.points.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">

                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-[#A7BF73]"
                    />

                    <span className="text-white">
                      {item}
                    </span>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}