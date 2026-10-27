"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ data }) {
  if (!data) return null;

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-[40px] border border-[#052440]/10 bg-white shadow-[0_15px_50px_rgba(5,36,64,0.04)]"
      >
        <div className="grid lg:grid-cols-12">

          {/* LEFT CONTENT */}
          <div className="p-10 lg:col-span-7 lg:p-16">

            <span className="inline-flex rounded-full border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
              {data.badge}
            </span>

            <h1 className="mt-8 text-5xl font-black tracking-tight text-[#052440] md:text-6xl">
              {data.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#052440]/65">
              {data.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-[#080357] px-8 py-4 font-semibold text-white transition hover:-translate-y-1 inline-block"
              >
                {data.cta || "Talk To An Expert"}
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-[#052440]/10 px-8 py-4 font-semibold text-[#052440] transition hover:bg-[#f7f9fc] inline-block"
              >
                Request Consultation
              </Link>
            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="border-t border-[#052440]/10 bg-[#052440] p-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-16">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Key Outcomes
            </span>

            <div className="mt-8 space-y-5">

              {(data.highlights || [
                "Improved Network Reliability",
                "Faster Issue Resolution",
                "Operational Efficiency",
                "Enhanced User Experience",
              ]).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#A7BF73]"
                  />

                  <span className="text-white">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-[#A7BF73]">
                <ArrowRight size={18} />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {data.geoStatement ? "Enterprise AI" : "Enterprise Ready"}
                </span>
              </div>

              <p className="mt-4 text-white/70 leading-7">
                {data.geoStatement || "Designed for distributed enterprise environments, hybrid infrastructure, cloud transformation, and modern network operations."}
              </p>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}