"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Scale,
  Workflow,
  ShieldCheck,
  Compass,
  Handshake
} from "lucide-react";

const whyPillars = [
  {
    icon: Layers,
    n: "01",
    t: "Architecture-First Thinking",
    b: "We design the technology foundation before selecting individual tools or platforms, which prevents fragmentation later.",
  },
  {
    icon: Scale,
    n: "02",
    t: "Vendor-Agnostic Decisions",
    b: "Technology choices are guided by enterprise fit, performance, security, scalability, and long-term value.",
  },
  {
    icon: Workflow,
    n: "03",
    t: "Consulting + Engineering",
    b: "Strategic thinking and hands-on technical execution are delivered through one accountable partner, not two.",
  },
  {
    icon: ShieldCheck,
    n: "04",
    t: "Security by Design",
    b: "Identity, governance, resilience, observability, and security controls are embedded from the start, not retrofitted.",
  },
  {
    icon: Compass,
    n: "05",
    t: "End-to-End Ownership",
    b: "We support the complete journey from assessment and architecture through implementation, operations, and optimization.",
  },
  {
    icon: Handshake,
    n: "06",
    t: "Long-Term Partnership",
    b: "Our focus extends beyond deployment toward continuous improvement and long-term technology maturity.",
  },
];

export default function WhyWeRoute() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#052440]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-0 h-[450px] w-[450px] rounded-full bg-[#052440]/5 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-[#0d5ea8]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="clay-badge-light inline-flex items-center border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
            Why WeRoute
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#080357] md:text-4xl lg:text-[44px] tracking-tight">
            Why Enterprises{" "}
            <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
              Choose WeRoute
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#052440]/70 font-normal">
            Most providers sell either strategy or execution, and the gap between the two is where transformation projects stall. WeRoute covers both, which means the architecture we recommend is the architecture we build and operate.
          </p>
        </motion.div>

        {/* 6 Pillars Claymorphic Bento Grid */}
        <div className="mt-20 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {whyPillars.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="clay-light group relative flex flex-col justify-between bg-[#f7f9fc] border border-[#052440]/5 p-8 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start mb-8">
                    <div className="clay-badge-light flex h-14 w-14 items-center justify-center bg-[#080357] text-white transition-transform duration-300 group-hover:scale-105">
                      <Icon size={24} />
                    </div>

                    <span className="clay-badge-light px-3 py-1 text-xs font-mono font-extrabold tracking-widest text-[#052440]/40 bg-[#f7f9fc]">
                      {c.n}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold leading-snug text-[#080357]">
                      {c.t}
                    </h3>

                    <p className="mt-3.5 text-base leading-relaxed text-[#052440]/70">
                      {c.b}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}