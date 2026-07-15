"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080357] py-28 text-white">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Ambient Blue/Indigo Glows */}
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12 lg:p-16"
        >
          {/* Top Accent Line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 opacity-75" />

          {/* Main Content Split Layout */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:justify-between">
            {/* Left Column: Badge & Heading */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Cloud Foundations
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Build Cloud <br />
                Foundations for <br />
                <span className="font-light text-white/60">
                  Long-Term Growth
                </span>
              </h2>
            </div>

            {/* Right Column: Description & Action Buttons */}
            <div className="flex flex-col justify-end lg:col-span-5 lg:pl-6">
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                Talk to WeRoute about building cloud and DevOps foundations that scale with governance built in from day one.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 pt-2">
                <button className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-bold text-[#080357] shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl hover:shadow-white/15">
                  <span>Talk to a Cloud Expert</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
                <button className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1] hover:border-white/30">
                  <span>Request Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}