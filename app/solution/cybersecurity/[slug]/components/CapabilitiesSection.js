"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Workflow,
  Activity,
  ArrowRight,
} from "lucide-react";

const icons = [
  BrainCircuit,
  Workflow,
  Activity,
  ArrowRight,
  BrainCircuit,
  Workflow,
];

export default function CapabilitiesSection({ data }) {
  if (!data) return null;

  return (
    <section className="mt-24">

      <div className="text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#052440]/40">
          Core Capabilities
        </span>

        <h2 className="mt-5 text-5xl font-black text-[#052440]">
          {data.title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-[#052440]/65">
          Purpose-built capabilities designed to improve visibility,
          performance, reliability, and operational efficiency.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {data.items.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-[#052440]/10 bg-white p-8 shadow-[0_10px_30px_rgba(5,36,64,0.04)]"
            >

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#080357] to-[#A7BF73]" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#080357] text-white">
                <Icon size={22} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#052440]">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-[#052440]/65">
                {item.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[#080357] font-semibold opacity-0 transition group-hover:opacity-100">
                Learn More
                <ArrowRight size={16} />
              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}