"use client";

import { motion } from "framer-motion";
import { Eye, Target, ShieldCheck } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section
      id="who"
      className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#052440]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-0 h-[450px] w-[450px] rounded-full bg-[#052440]/5 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#080357]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* SECTION 2: ABOUT WEROUTE */}
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            {/* Claymorphic Badge */}
            <span className="clay-badge-light inline-block border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
              About WeRoute
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#080357] md:text-4xl lg:text-[44px] tracking-tight">
              Technology Built Around{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                Your Business Goals
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-relaxed text-[#052440]/75 font-normal">
              WeRoute is an enterprise technology consulting and engineering company. We help organizations design, implement, integrate, secure, and operate modern technology environments, starting from the business objective rather than a product catalog. That means the architecture comes first, the tooling follows, and the same team stays accountable from the first assessment through to day-to-day operations.
            </p>
          </motion.div>

          {/* Right Column: 3 Claymorphic Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {[
              {
                n: "01",
                t: "Consulting-Led, Outcome-Driven",
                d: "We begin with the business objective before making any technology decisions, so the architecture serves the outcome.",
              },
              {
                n: "02",
                t: "Vendor-Agnostic by Design",
                d: "Architectures are based on enterprise requirements, scalability, security, interoperability, and long-term value, not vendor incentives.",
              },
              {
                n: "03",
                t: "End-to-End Accountability",
                d: "One technology partner across advisory, design, engineering, implementation, operations, and optimization, with nothing handed off mid-project.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="clay-light group relative bg-[#f7f9fc] border border-[#052440]/5 p-7 transition-[box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_20px_rgba(5,36,64,0.1)]"
              >
                <div className="flex items-start gap-5">
                  <div className="clay-badge-light flex h-13 w-13 shrink-0 items-center justify-center bg-[#080357] text-white text-base font-extrabold">
                    {item.n}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#080357]">
                      {item.t}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#052440]/70">
                      {item.d}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: VISION, MISSION & VALUES (Claymorphic Compact Cards) */}
        <div className="mt-24 pt-16 border-t border-[#052440]/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 text-center"
          >
            <span className="clay-badge-light inline-block border border-[#052440]/10 bg-[#f7f9fc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#052440] mb-3">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#080357] tracking-tight">
              Vision, Mission &amp; Values
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              className="clay-light group relative bg-[#f7f9fc] border border-[#052440]/5 p-8 transition-[box-shadow,border-color] duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="clay-badge-light flex h-12 w-12 items-center justify-center bg-[#080357] text-white">
                  <Eye size={22} />
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#052440]/60">
                  Vision
                </h3>
              </div>
              <p className="text-base font-semibold leading-relaxed text-[#080357]">
                Simplify enterprise technology complexity through secure, scalable, and intelligent architectures.
              </p>
            </motion.div>

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="clay-light group relative bg-[#f7f9fc] border border-[#052440]/5 p-8 transition-[box-shadow,border-color] duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="clay-badge-light flex h-12 w-12 items-center justify-center bg-[#080357] text-white">
                  <Target size={22} />
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#052440]/60">
                  Mission
                </h3>
              </div>
              <p className="text-base font-semibold leading-relaxed text-[#080357]">
                Deliver technology ecosystems that improve resilience, performance, efficiency, and business agility.
              </p>
            </motion.div>

            {/* VALUES */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="clay-light group relative bg-[#f7f9fc] border border-[#052440]/5 p-8 transition-[box-shadow,border-color] duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="clay-badge-light flex h-12 w-12 items-center justify-center bg-[#080357] text-white">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#052440]/60">
                  Values
                </h3>
              </div>
              <p className="text-sm font-bold leading-relaxed text-[#080357]">
                Integrity <span className="text-[#052440]/30 font-normal">|</span> Engineering Excellence <span className="text-[#052440]/30 font-normal">|</span> Accountability <span className="text-[#052440]/30 font-normal">|</span> Partnership <span className="text-[#052440]/30 font-normal">|</span> Continuous Improvement
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}