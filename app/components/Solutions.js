"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Network,
  Shield,
  Cloud,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Network Solutions",
    icon: Network,
    desc: "Secure, scalable and high-performance enterprise connectivity solutions.",
  },
  {
    number: "02",
    title: "Cybersecurity",
    icon: Shield,
    desc: "Advanced threat protection and zero-trust security architecture.",
  },
  {
    number: "03",
    title: "Cloud Infrastructure",
    icon: Cloud,
    desc: "Hybrid and multi-cloud environments optimized for scale and resilience.",
  },
  {
    number: "04",
    title: "AI & Automation",
    icon: BrainCircuit,
    desc: "Intelligent automation and AI-powered operational transformation.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#f7f9fc] py-28" style={{ overflow: "clip" }}>
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* glow */}
        <div
          className="
            absolute
            left-[-10%]
            top-[10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#052440]/5
            blur-3xl
          "
        />
      </div>

      {/* content wrapper */}
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-10">
        
        {/* Animated Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#052440]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#080357]">
            Core Capabilities
          </span>

          <h2 className="mt-6 text-3xl font-normal leading-tight text-[#080357] md:text-4xl lg:text-[44px]">
            Enterprise <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] text-transparent bg-clip-text">Solutions</span>
            <br />
            Built for Scale
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#052440]/65">
            We engineer resilient, high-performance systems designed to handle complex workloads seamlessly across network, security, cloud, and AI architectures.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="flex flex-col gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="
                  group
                  relative
                  w-full
                  overflow-hidden
                  rounded-[1.8rem]
                  border
                  border-[#052440]/10
                  bg-white
                  py-5
                  shadow-[0_15px_50px_rgba(5,36,64,0.03)]
                  transition-shadow
                  hover:shadow-[0_15px_50px_rgba(5,36,64,0.08)]
                  md:h-[100px]
                  md:py-0
                "
              >
                {/* inner */}
                <div className="flex h-full flex-col justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
                  {/* left */}
                  <div className="flex min-w-0 items-center gap-4 md:gap-6">
                    {/* icon */}
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#052440]
                        text-white
                        shadow-lg
                        md:h-14
                        md:w-14
                      "
                    >
                      <Icon size={22} />
                    </div>

                    {/* number */}
                    <span
                      className="
                        hidden
                        shrink-0
                        text-[10px]
                        font-semibold
                        tracking-[0.35em]
                        text-[#052440]/30
                        md:block
                      "
                    >
                      {service.number}
                    </span>

                    {/* title */}
                    <h2
                      className="
                        whitespace-nowrap
                        text-xl
                        font-bold
                        tracking-tight
                        text-[#052440]
                        md:text-3xl
                        lg:text-4xl
                      "
                    >
                      {service.title}
                    </h2>
                  </div>

                  {/* right content */}
                  <div className="flex items-center justify-between gap-8 pl-16 md:pl-0">
                    <p
                      className="
                        max-w-sm
                        text-sm
                        leading-relaxed
                        text-[#052440]/60
                      "
                    >
                      {service.desc}
                    </p>

                    <button
                      className="
                        hidden
                        shrink-0
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-[#052440]/10
                        px-5
                        py-3
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.3em]
                        text-[#052440]
                        transition-all
                        duration-500
                        hover:bg-[#052440]
                        hover:text-white
                        md:flex
                      "
                    >
                      View Details
                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform
                          duration-500
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </button>

                    {/* mobile arrow */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#052440]/10
                        md:hidden
                      "
                    >
                      <ArrowUpRight size={18} className="text-[#052440]" />
                    </div>
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