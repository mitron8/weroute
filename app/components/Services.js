"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Briefcase,
  Wrench,
  Headphones,
  BrainCircuit,
  Users,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const serviceList = [
  {
    icon: Briefcase,
    n: "01",
    t: "Consulting & Advisory Services",
    d: "Assess technology environments, define strategy, evaluate options, identify priorities, and create practical transformation roadmaps your teams can actually execute against.",
    href: "/services/consulting-advisory",
    tags: ["Strategy", "Assessment", "Roadmapping"],
  },
  {
    icon: Wrench,
    n: "02",
    t: "Professional Services",
    d: "Design, implement, integrate, migrate, automate, and validate enterprise technology environments end to end, with documentation and handover built into delivery.",
    href: "/services/professional-services",
    tags: ["Implementation", "Migration", "Integration"],
  },
  {
    icon: Headphones,
    n: "03",
    t: "Managed Services",
    d: "Operate, monitor, secure, optimize, and continuously improve critical infrastructure and technology platforms, so internal teams can focus on higher-value work.",
    href: "/services/managed-services",
    tags: ["24x7 Operations", "Continuous SecOps", "SLA-Driven"],
  },
  {
    icon: BrainCircuit,
    n: "04",
    t: "Software & AI Development",
    d: "Design and build enterprise applications, intelligent systems, APIs, AI platforms, and production-ready digital solutions, taken from prototype through to live operation.",
    href: "/services/software-application-staffing",
    tags: ["Enterprise AI", "Custom APIs", "Modern Cloud Apps"],
  },
  {
    icon: Users,
    n: "05",
    t: "Technology Staffing Services",
    d: "Provide specialist engineers, consultants, augmented teams, and dedicated technology professionals across every domain, screened against the specific role and technology stack.",
    href: "/services/manpower-staffing-services",
    tags: ["Specialist Talent", "Team Augmentation", "Embedded Experts"],
  },
];

export default function Services() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    const amount = 420;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="relative lg:sticky lg:top-0 z-10 overflow-hidden bg-[#f7f9fc] py-16 lg:py-20 min-h-[auto] lg:min-h-screen flex flex-col justify-center text-[#052440]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-[#052440]/5 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-[#0d5ea8]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="clay-badge-light inline-flex items-center border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
              Services
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#080357] md:text-4xl lg:text-[44px] tracking-tight">
              From Strategy to Operations,{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                WeRoute Delivers End to End
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#052440]/70 font-normal">
              Enterprises engage WeRoute at any point in the technology lifecycle, from a first assessment through managed operations and AI &amp; Automation Services, often across several at once.
            </p>
          </motion.div>

          {/* Claymorphic Carousel Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous Service"
              className="clay-badge-light flex h-13 w-13 items-center justify-center border border-[#052440]/10 bg-[#f7f9fc] text-[#052440] transition-all duration-300 hover:bg-[#080357] hover:text-white cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Next Service"
              className="clay-badge-light flex h-13 w-13 items-center justify-center border border-[#052440]/10 bg-[#080357] text-white transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel of Claymorphic Cards */}
        <div
          ref={sliderRef}
          className="mt-16 flex gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {serviceList.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="clay-light group relative min-w-[340px] sm:min-w-[380px] max-w-[400px] flex flex-col justify-between bg-[#f7f9fc] border border-[#052440]/5 p-8 transition-all duration-400 hover:-translate-y-2"
              >
                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="clay-badge-light flex h-14 w-14 items-center justify-center bg-[#080357] text-white transition-transform duration-300 group-hover:scale-105">
                      <Icon size={24} />
                    </div>
                    <span className="clay-badge-light px-3 py-1 text-xs font-mono font-extrabold tracking-widest text-[#052440]/40 bg-[#f7f9fc]">
                      {s.n}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#080357]">
                    {s.t}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-[#052440]/70">
                    {s.d}
                  </p>
                </div>

                {/* Bottom Bar: Tags + Link */}
                <div className="mt-8 pt-5 border-t border-[#052440]/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="clay-badge-light text-[11px] font-medium px-3 py-1 bg-[#f7f9fc] text-[#052440]/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={s.href}
                    className="clay-badge-light flex h-10 w-10 items-center justify-center bg-[#080357] text-white transition-transform duration-300 group-hover:scale-110"
                    aria-label={`View details for ${s.t}`}
                  >
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All Services CTA with Claymorphism */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/services"
            className="clay-btn-accent group inline-flex items-center gap-3 bg-[#080357] px-9 py-4 text-sm sm:text-base font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#0E1A59]"
          >
            <span>Explore All Services</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}