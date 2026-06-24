"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        // Swapped for a highly relevant, high-res Unsplash image (Abstract Network/Earth)
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080357] via-[#052440]/90 to-[#052440]/40" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px] opacity-40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-[#B7F36B]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/65">
              Enterprise Networking Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[92px] lg:leading-[0.92] lg:tracking-[-0.07em]">
            Networks Built <br className="hidden sm:block" />
            to Move Your <br className="hidden sm:block" />
            <span className="text-[#B7F36B]">Business Forward</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl sm:leading-9">
            We design enterprise network solutions that turn connectivity from a
            constant headache into a competitive advantage, built for the way
            your business actually operates today.
          </p>

          {/* GEO Statement */}
          <div className="mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <p className="text-sm leading-relaxed text-white/80 sm:text-base sm:leading-8">
              WeRoute delivers enterprise networking, SD-WAN solutions, and
              network observability for organisations operating at global scale.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="/contact"
              className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-gray-100 shadow-lg shadow-white/5"
            >
              Talk to an Expert
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Metrics */}
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {[
              ["99.9%", "System Reliability"],
              ["40+", "Enterprise Projects"],
              ["Global", "Delivery Reach"],
              ["24/7", "Network Visibility"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col gap-2">
                <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {value}
                </h3>
                <p className="text-sm font-medium text-white/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}