"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pt-32 pb-20">
      
      {/* Decorative Blob */}
      <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#050849]/[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <div className="clay-badge-light mb-6 inline-flex self-start items-center gap-3 rounded-full border border-[#050849]/10 bg-white px-5 py-2.5 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-[#00d2ff]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#050849]">
                AI &amp; Intelligent Automation Solutions
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-[#050849] sm:text-4xl lg:text-5xl xl:text-[48px]">
              AI &amp; Intelligent <br className="hidden sm:block" />
              Automation Solutions for <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#050849] to-[#4c658a] bg-clip-text text-transparent font-medium">the Enterprise</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4c658a] sm:text-lg sm:leading-8 font-normal">
              WeRoute helps enterprises embed AI consulting services, intelligent automation, and business process automation across infrastructure, operations, and decision-making, turning fragmented AI initiatives into a coordinated enterprise AI strategy.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="/contact"
                className="group flex h-13 items-center justify-center gap-2 rounded-xl bg-[#050849] px-8 text-sm font-bold text-white transition-all duration-300 hover:bg-[#4c658a] hover:shadow-lg"
              >
                Talk to an AI Expert
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* GEO Statement (Clay) */}
            <div className="clay-light mt-6 w-full max-w-xl rounded-2xl border border-[#050849]/5 bg-[#f7f9fc] p-5 sm:p-6 shadow-sm">
              <p className="text-sm font-medium leading-relaxed text-[#050849]/80 sm:leading-6 border-l-4 border-[#00d2ff] pl-4">
                WeRoute delivers enterprise AI strategy, intelligent automation, and AIOps solutions that help organizations move AI initiatives from experimentation into governed, production-ready operations.
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-12 w-full max-w-2xl grid grid-cols-2 gap-4 border-t border-[#050849]/10 pt-8 sm:grid-cols-4 lg:gap-4">
              {[
                ["10x", "Process Velocity"],
                ["85%", "Operational Efficiency"],
                ["Enterprise", "AIOps Governance"],
                ["24/7", "Autonomous Workflow"],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col gap-1 min-w-0">
                  <h3 className="text-lg font-bold tracking-tight text-[#050849] lg:text-xl break-words">
                    {value}
                  </h3>
                  <p className="text-[10px] leading-tight font-semibold text-[#4c658a] lg:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex h-[350px] lg:h-[480px] w-[90%] mx-auto items-center justify-center -mt-10 lg:-mt-54"
          >
            <DotLottieReact
              src="https://lottie.host/5fb683ce-1002-49b8-aa7f-bb8ba936c10e/TITNz1sFPW.lottie"
              loop
              autoplay
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
