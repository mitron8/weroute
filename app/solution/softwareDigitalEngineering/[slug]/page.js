"use client";

import { use } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  CheckCircle2,
  Cpu,
  Workflow,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

import { softwareDigitalEngineeringData } from "@/data/softwareDigitalEngineeringData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function softwareDigitalEngineering({ params }) {
  const { slug } = use(params);

  const solution = softwareDigitalEngineeringData[slug];

  if (!solution) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f9fc]">
        <h1 className="text-4xl font-bold text-[#052440]">
          Solution Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="overflow-hidden bg-[#f7f9fc]">
      {/* HERO */}
      <section className="relative bg-[#f7f9fc] pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[40px] border border-[#052440]/10 bg-white/80 shadow-[0_15px_50px_rgba(5,36,64,0.04)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#080357]/[0.02] to-transparent" />

            <div className="relative z-10 grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-16">
              <div>
                <span className="inline-block rounded-full border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
                  {solution.hero.badge}
                </span>

                <h1 className="mt-8 text-4xl font-black tracking-tight text-[#052440] md:text-6xl">
                  {solution.hero.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#052440]/65">
                  {solution.hero.subtitle}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="rounded-2xl bg-[#080357] px-8 py-4 font-bold text-white transition-all hover:bg-[#0d5ea8]">
                    Explore Solution
                  </button>

                  <button className="rounded-2xl border border-[#052440]/10 bg-white px-8 py-4 font-semibold text-[#052440]">
                    Contact Expert
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={solution.hero.image}
                  alt={solution.hero.title}
                  className="w-full max-w-lg rounded-3xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW + CHALLENGES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[40px] border border-[#052440]/10 bg-white/80 shadow-[0_15px_50px_rgba(5,36,64,0.04)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-12">
              <div className="p-10 lg:col-span-5 lg:p-14">
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#052440]/40">
                  Overview
                </span>

                <h2 className="mt-6 text-4xl font-black text-[#052440]">
                  {solution.overview.title}
                </h2>

                <p className="mt-6 leading-8 text-[#052440]/65">
                  {solution.overview.description}
                </p>
              </div>

              <div className="border-t border-[#052440]/10 bg-[#f7f9fc]/50 p-10 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-14">
                <div className="flex items-center gap-4">
                  <ShieldAlert className="text-red-500" />
                  <h3 className="text-2xl font-bold text-[#052440]">
                    Challenges We Solve
                  </h3>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {solution.challenges.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 text-[#A7BF73]"
                      />
                      <span className="text-[#052440]/75">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 mb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black text-[#052440]">
              Solution Components
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {solution.solutions.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="rounded-[32px] border border-[#052440]/10 bg-[#f7f9fc] p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#080357] text-white">
                  {index === 0 ? (
                    <Cpu />
                  ) : index === 1 ? (
                    <Workflow />
                  ) : (
                    <ArrowRight />
                  )}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#052440]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#052440]/65">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BENEFITS + TECHNOLOGIES + PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[40px] border border-[#052440]/10 bg-white/80 shadow-[0_15px_50px_rgba(5,36,64,0.04)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-12">
              <div className="bg-[#052440] p-10 lg:col-span-5 lg:p-14">
                <h3 className="text-3xl font-black text-white">
                  Business Benefits
                </h3>

                <div className="mt-8 space-y-4">
                  {solution.benefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-[#A7BF73]"
                      />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 lg:col-span-7 lg:p-14">
                <h3 className="text-3xl font-black text-[#052440]">
                  Technologies
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {solution.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-[#052440]/10 bg-[#f7f9fc] px-4 py-2 text-sm font-semibold text-[#052440]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="mt-12 text-3xl font-black text-[#052440]">
                  Delivery Process
                </h3>

                <div className="mt-8 space-y-5">
                  {solution.process.map((step, index) => (
                    <div key={step} className="flex items-center gap-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#080357] font-bold text-white">
                        {index + 1}
                      </div>

                      <span className="font-medium text-[#052440]">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            viewport={{ once: true }}
            className="flex h-[500px] flex-col items-center justify-center overflow-hidden rounded-[40px] bg-gradient-to-r from-[#052440] to-[#080357] p-16 text-center"
          >
            <h2 className="text-5xl font-black text-white">
              {solution.cta.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              {solution.cta.description}
            </p>

            <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-[#A7BF73] px-8 py-4 font-bold text-[#052440] transition hover:-translate-y-1">
              {solution.cta.button}
              <MessageSquare size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}