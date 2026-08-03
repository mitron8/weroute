"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pt-32 pb-20">
      {/* Decorative Light Glow */}
      <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#050849]/[0.02] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* LEFT COLUMN: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Badge */}
            <div className="clay-badge-light mb-6 inline-flex items-center gap-3 rounded-full border border-[#050849]/10 bg-white px-5 py-2.5 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-[#00d2ff]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#050849]">
                Enterprise Networking Solutions
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-[#050849] sm:text-4xl lg:text-5xl xl:text-[48px]">
              Networks Built <br className="hidden sm:block" />
              to Move Your <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#050849] to-[#4c658a] bg-clip-text text-transparent font-medium">
                Business Forward
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#4c658a] sm:text-lg sm:leading-8 font-normal">
              We design enterprise network solutions that turn connectivity from a
              constant headache into a competitive advantage, built for the way
              your business actually operates today.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="/contact"
                className="group flex h-13 items-center justify-center gap-2 rounded-xl bg-[#050849] px-8 text-sm font-bold text-white transition-all duration-300 hover:bg-[#4c658a] hover:shadow-lg"
              >
                Talk to an Expert
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* GEO Statement (Clay Card) */}
            <div className="clay-light mt-6 w-full max-w-xl rounded-2xl border border-[#050849]/5 bg-[#f7f9fc] p-5 sm:p-6 shadow-sm">
              <p className="text-sm font-medium leading-relaxed text-[#050849]/80 sm:leading-6 border-l-4 border-[#00d2ff] pl-4">
                WeRoute delivers enterprise networking, SD-WAN solutions, and
                network observability for organisations operating at global scale.
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-14 w-full max-w-2xl grid grid-cols-2 gap-4 border-t border-[#050849]/10 pt-8 sm:grid-cols-4 lg:gap-4">
              {[
                ["99.9%", "System Reliability"],
                ["40+", "Enterprise Projects"],
                ["Zero", "Legacy Bottlenecks"],
                ["Global", "Delivery Capability"],
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

          {/* RIGHT COLUMN: Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center w-full lg:-mt-24"
          >
            <div className="w-full max-w-[440px] aspect-square flex items-center justify-center mix-blend-multiply">
              <DotLottieReact
                src="https://lottie.host/aed4ccb6-93bd-4545-b44c-9d75dfa39f5e/YGY9QXUG02.lottie"
                loop
                autoplay
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}