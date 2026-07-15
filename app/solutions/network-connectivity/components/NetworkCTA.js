"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NetworkCTA() {
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
                Ready To Modernize
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Stop Managing <br />
                Complexity. <br />
                <span className="font-light text-white/60">
                  Start Removing It.
                </span>
              </h2>
            </div>

            {/* Right Column: Description & Action */}
            <div className="flex flex-col justify-end lg:col-span-5 lg:pl-6">
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                Partner with a team that designs network architecture around
                reliability, visibility, and growth, not just uptime reports.
              </p>

              <div className="mt-8 pt-2">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-bold text-[#080357] shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl hover:shadow-white/15"
                >
                  <span>Request Consultation</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="mt-16 grid gap-6 border-t border-white/10 pt-12 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]">
              <h3 className="font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                40+
              </h3>
              <p className="mt-2 text-sm font-medium text-white/60">
                Enterprise Projects Delivered
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]">
              <h3 className="font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                99.9%
              </h3>
              <p className="mt-2 text-sm font-medium text-white/60">
                System Reliability
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]">
              <h3 className="font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Global
              </h3>
              <p className="mt-2 text-sm font-medium text-white/60">
                Enterprise Delivery Capability
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}