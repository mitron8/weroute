"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Cpu,
  ShieldAlert,
  Workflow,
} from "lucide-react";
import { networkSolutionsData } from "@/data/solutions";

export default function SolutionPage({ params }) {
  const { slug } = React.use(params);
  const solution = networkSolutionsData[slug];

  if (!solution) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f9fc] px-6">
        <div className="text-center">
          <h1 className="text-6xl font-black text-[#052440]/10">404</h1>
          <h2 className="mt-4 text-3xl font-bold text-[#052440]">
            Solution Not Found
          </h2>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#f7f9fc] pt-32 pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[40px] border border-[#052440]/10 bg-white/80 p-10 backdrop-blur-xl shadow-[0_15px_50px_rgba(5,36,64,0.04)] lg:p-16"
        >
          <span className="inline-block rounded-full border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
            {solution.hero.badge}
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-[#052440] md:text-6xl">
            {solution.hero.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#052440]/65">
            {solution.hero.subtitle}
          </p>
        </motion.div>

        {/* OVERVIEW + CHALLENGES */}
        <div className="mt-12 overflow-hidden rounded-[40px] border border-[#052440]/10 bg-white/80 backdrop-blur-xl shadow-[0_15px_50px_rgba(5,36,64,0.04)]">
          <div className="grid lg:grid-cols-12">

            <div className="p-10 lg:col-span-5 lg:p-14">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#052440]/40">
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
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-[#A7BF73]" />
                    <span className="text-[#052440]/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SOLUTIONS */}
        <section className="mt-20">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black text-[#052440]">
              Solution Components
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solution.solutions.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="rounded-[32px] border border-[#052440]/10 bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#080357] text-white">
                  {index === 0 ? (
                    <Cpu size={22} />
                  ) : index === 1 ? (
                    <Workflow size={22} />
                  ) : (
                    <ArrowRight size={22} />
                  )}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#052440]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#052440]/65">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENEFITS + TECHNOLOGIES */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-[40px] bg-[#052440] p-10">
              <h3 className="text-3xl font-black text-white">
                Business Benefits
              </h3>

              <div className="mt-8 space-y-5">
                {solution.benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#A7BF73]"
                    />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[40px] border border-[#052440]/10 bg-white p-10">
              <h3 className="text-3xl font-black text-[#052440]">
                Technologies
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {solution.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-[#052440]/10 bg-[#f7f9fc] px-5 py-3 text-sm font-semibold text-[#052440]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="mt-12 text-3xl font-black text-[#052440]">
                Process
              </h3>

              <div className="mt-8 space-y-4">
                {solution.process.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#080357] text-sm font-bold text-white">
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
        </section>

        {/* FAQ */}
        {solution.faq?.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-10 text-5xl font-black text-[#052440]">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {solution.faq.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-[#052440]/10 bg-white p-8"
                >
                  <h3 className="text-xl font-bold text-[#052440]">
                    {item.question}
                  </h3>

                  <p className="mt-4 leading-7 text-[#052440]/65">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-20">
          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#080357] to-[#052440] p-12 text-center lg:p-20">
            <h2 className="text-4xl font-black text-white md:text-5xl">
              {solution.cta.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              {solution.cta.description}
            </p>

            <button className="mt-10 rounded-2xl bg-[#A7BF73] px-8 py-4 font-bold text-[#052440] transition hover:-translate-y-1">
              {solution.cta.button}
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}