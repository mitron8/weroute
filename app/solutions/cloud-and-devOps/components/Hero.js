"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        // Swapped for a cloud/server-themed high-res Unsplash image to fit the layout style
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
          {/* Badge - Derived from original italic text */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-[#B7F36B]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/65 italic">
              "Cloud transformation that ignores governance just moves the chaos somewhere new."
            </span>
          </div>

          {/* Heading - Original Content */}
          <h1 className="text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[92px] lg:leading-[0.92] lg:tracking-[-0.07em]">
            Cloud &amp; DevOps <br className="hidden sm:block" />
            Solutions Built for <br className="hidden sm:block" />
            <span className="text-[#B7F36B]">Enterprise Scale</span>
          </h1>

          {/* Supporting Text - Original Content */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl sm:leading-9">
            WeRoute delivers cloud transformation and DevOps consulting for enterprises running hybrid cloud environments, combining architecture, automation, and governance into one coordinated approach to modern cloud operations.
          </p>

          {/* Statement Box - Replaces original left-border callout */}
          <div className="mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <p className="text-sm leading-relaxed text-white/80 sm:text-base sm:leading-8 border-l-4 border-[#B7F36B] pl-4">
              WeRoute delivers Cloud &amp; DevOps Solutions spanning cloud architecture, platform engineering, infrastructure automation, and observability for enterprises running hybrid and multi-cloud environments.
            </p>
          </div>

          {/* Buttons - Original Text with Target Theme Styling */}
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="/contact"
              className="group flex items-center gap-3 rounded-2xl bg-[#B7F36B] px-8 py-4 text-sm font-semibold text-[#080357] transition-all duration-300 hover:scale-[1.03] hover:bg-[#a3e059] shadow-lg shadow-[#B7F36B]/10"
            >
              Talk to a Cloud Expert
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}