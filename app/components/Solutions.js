"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  Cloud,
  Shield,
  BrainCircuit,
  Code2,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Network & Connectivity",
    icon: Network,
    desc: "Build resilient, intelligent, and scalable enterprise connectivity across campuses, branches, data centres, cloud, and distributed users, engineered to stay reliable as the estate grows.",
    href: "/solutions/network-connectivity",
  },
  {
    number: "02",
    title: "Cloud & DevOps",
    icon: Cloud,
    desc: "Modernize infrastructure and delivery with secure cloud platforms, automation, governance, DevOps, and platform engineering practices that hold up under real production load.",
    href: "/solutions/cloud-and-devOps",
  },
  {
    number: "03",
    title: "Cybersecurity",
    icon: Shield,
    desc: "Protect identities, applications, infrastructure, cloud, and data through architecture-led security and continuous risk reduction, with controls designed in rather than added later.",
    href: "/solutions/cybersecurity",
  },
  {
    number: "04",
    title: "AI & Intelligent Automation",
    icon: BrainCircuit,
    desc: "Apply AI, machine learning, observability, and automation to improve decision-making, operational efficiency, and enterprise intelligence across infrastructure and business workflows.",
    href: "/solutions/AI-Intelligent-Automation",
  },
  {
    number: "05",
    title: "Software & Digital Engineering",
    icon: Code2,
    desc: "Build and modernize enterprise applications, APIs, digital platforms, and software architectures designed for long-term scale and straightforward maintenance over time.",
    href: "/solutions/softwareDigitalEngineering",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative bg-[#f7f9fc] py-28" style={{ overflow: "clip" }}>
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-[#052440]/5 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-[#080357]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-10">
        {/* Animated Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl"
        >
          <span className="clay-badge-light inline-flex items-center gap-2 border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#080357]">
            Enterprise Solutions
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#080357] md:text-4xl lg:text-[44px] tracking-tight">
            Enterprise Solutions{" "}
            <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] text-transparent bg-clip-text">
              Built for Scale
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#052440]/70 font-normal">
            Five technology domains, designed to work as one system rather than five separate projects. Each is designed to connect with what you already run.
          </p>
        </motion.div>

        {/* Claymorphic Solutions List */}
        <div className="flex flex-col gap-6">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="clay-light group relative w-full bg-[#f7f9fc] border border-[#052440]/5 p-7 md:p-8 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Icon, Number, Title */}
                  <div className="flex items-center gap-5 min-w-0 lg:w-[45%]">
                    <div className="clay-badge-light flex h-14 w-14 shrink-0 items-center justify-center bg-[#080357] text-white transition-transform duration-300 group-hover:scale-105">
                      <Icon size={24} />
                    </div>

                    <span className="hidden sm:block shrink-0 text-xs font-mono font-extrabold tracking-widest text-[#052440]/40">
                      {item.number}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#080357]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Center: Description */}
                  <div className="lg:w-[42%]">
                    <p className="text-sm sm:text-base leading-relaxed text-[#052440]/70">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right: Clay Button */}
                  <div className="lg:w-[13%] flex justify-end">
                    <Link
                      href={item.href}
                      className="clay-badge-light inline-flex items-center gap-2 border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#080357] transition-all duration-300 hover:bg-[#080357] hover:text-white"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All Solutions CTA Button with Claymorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/solutions"
            className="clay-btn-accent group inline-flex items-center gap-3 bg-[#080357] px-9 py-4 text-sm sm:text-base font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#0E1A59]"
          >
            <span>Explore All Solutions</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}