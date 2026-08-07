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
    <section className="mt-16">

      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#052440]/40">
          Core Capabilities
        </span>

        <h2 className="mt-2 text-4xl font-black text-[#052440]">
          {data.title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-[#052440]/65">
          Purpose-built capabilities designed to improve visibility,
          performance, reliability, and operational efficiency.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

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
                delay: index * 0.05,
              }}
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-2xl border border-[#052440]/10 bg-white p-6 shadow-sm"
            >

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#080357] to-[#A7BF73]" />

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#080357] text-white">
                <Icon size={18} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#052440]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#052440]/65">
                {item.description}
              </p>



            </motion.div>
          );
        })}

      </div>

    </section>
  );
}