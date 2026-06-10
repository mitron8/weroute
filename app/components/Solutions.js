"use client";

import React, { useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

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
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[260vh] bg-[#f7f9fc]"
      style={{ overflow: "clip" }}
    >

      {/* background */}
      <div className="absolute inset-0">

        {/* grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(5,36,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.03)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

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

      {/* sticky */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* content */}
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 md:gap-5 md:px-10">

          {services.map((service, index) => {
            const start = index * 0.18;

            const end = start + 0.2;

            // width animation
            const width = useTransform(
              scrollYProgress,
              [start, end],
              ["16%", "100%"]
            );

            // fade
            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.6, 1]
            );

            // smooth scale
            const scale = useTransform(
              scrollYProgress,
              [start, end],
              [0.94, 1]
            );

            // content reveal
            const contentOpacity = useTransform(
              scrollYProgress,
              [start + 0.08, end],
              [0, 1]
            );

            const contentX = useTransform(
              scrollYProgress,
              [start + 0.08, end],
              [20, 0]
            );

            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                style={{
                  width,
                  opacity,
                  scale,
                }}
                className="
                  will-change-transform
                  relative
                  h-[100px]
                  overflow-hidden
                  rounded-[1.8rem]
                  border
                  border-[#052440]/10
                  bg-white
                  shadow-[0_15px_50px_rgba(5,36,64,0.05)]
                "
              >

                {/* inner */}
                <div className="flex h-full items-center justify-between px-4 md:px-8">

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
                        text-lg
                        font-bold
                        tracking-tight
                        text-[#052440]
                        md:text-4xl
                      "
                    >
                      {service.title}
                    </h2>

                  </div>

                  {/* right content */}
                  <motion.div
                    style={{
                      opacity: contentOpacity,
                      x: contentX,
                    }}
                    className="hidden items-center gap-8 md:flex"
                  >

                    <p
                      className="
                        max-w-sm
                        text-sm
                        leading-relaxed
                        text-[#052440]/50
                      "
                    >
                      {service.desc}
                    </p>

                    <button
                      className="
                        group
                        flex
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

                  </motion.div>

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

                    <ArrowUpRight
                      size={18}
                      className="text-[#052440]"
                    />

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