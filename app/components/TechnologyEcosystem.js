"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Network,
  Shield,
  Eye,
  Cpu,
  BrainCircuit,
  Layers,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const ecosystems = [
  {
    icon: Cloud,
    num: "01",
    shortTitle: "Cloud",
    title: "Cloud Platforms",
    desc: "Public, private, and hybrid cloud environments, including migration, governance, and cost management.",
    tags: ["AWS", "Azure", "GCP", "Hybrid Cloud", "FinOps"],
    image: "/images/eco-cloud.png",
  },
  {
    icon: Network,
    num: "02",
    shortTitle: "Networking",
    title: "Networking",
    desc: "Enterprise routing, switching, wireless, SD-WAN, and data centre network fabrics.",
    tags: ["SD-WAN", "Routing & Switching", "Data Centre Fabric", "Wi-Fi 6E/7"],
    image: "/images/eco-networking.png",
  },
  {
    icon: Shield,
    num: "03",
    shortTitle: "Cybersecurity",
    title: "Cybersecurity",
    desc: "Identity, endpoint, network, cloud, and data security platforms, plus governance and compliance tooling.",
    tags: ["Zero Trust", "IAM", "SOC / SIEM", "Cloud Security", "Compliance"],
    image: "/images/eco-cybersecurity.png",
  },
  {
    icon: Eye,
    num: "04",
    shortTitle: "Observability",
    title: "Observability",
    desc: "Monitoring, logging, tracing, and network observability platforms for unified operational visibility.",
    tags: ["APM", "Log Analytics", "Network Telemetry", "AIOps", "Distributed Tracing"],
    image: "/images/eco-observability.png",
  },
  {
    icon: Cpu,
    num: "05",
    shortTitle: "DevOps",
    title: "Automation & DevOps",
    desc: "Infrastructure as Code, CI/CD, configuration management, and container orchestration toolchains.",
    tags: ["Terraform", "CI/CD Pipelines", "Kubernetes", "GitOps", "Ansible"],
    image: "/images/eco-automation.png",
  },
  {
    icon: BrainCircuit,
    num: "06",
    shortTitle: "AI Platforms",
    title: "AI Platforms",
    desc: "Machine learning, generative AI, and MLOps platforms for building and running intelligent systems.",
    tags: ["LLM Orchestration", "MLOps", "Model Deployment", "Inference Pipelines"],
    image: "/images/eco-ai.png",
  },
  {
    icon: Layers,
    num: "07",
    shortTitle: "Enterprise Software",
    title: "Enterprise Software",
    desc: "Enterprise applications, APIs, integration platforms, and the data layers connecting them.",
    tags: ["API Gateways", "Event Streaming", "Microservices", "System Integration"],
    image: "/images/eco-software.png",
  },
];

// Helper to calculate circular distance so the carousel is an endless loop without empty sides
const getCircularDistance = (index, activeIndex, total) => {
  let diff = index - activeIndex;
  while (diff > total / 2) diff -= total;
  while (diff < -total / 2) diff += total;
  return diff;
};

export default function TechnologyEcosystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(460);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartXRef = useRef(0);

  // Responsive card width calculation
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (mobile) {
        setCardWidth(Math.min(window.innerWidth - 48, 340));
      } else if (window.innerWidth < 1024) {
        setCardWidth(390);
      } else {
        setCardWidth(450);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay timer with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ecosystems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? ecosystems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ecosystems.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const gap = isMobile ? 18 : 26;

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-[#f7f9fc] py-28 text-[#052440]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[15%] h-[450px] w-[450px] rounded-full bg-[#052440]/5 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-[#080357]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Claymorphic Badge */}
          <span className="clay-badge-light inline-flex items-center border border-[#052440]/10 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#052440]">
            Technology Ecosystem
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#080357] md:text-4xl lg:text-[44px] tracking-tight">
            Platforms &amp; Technologies{" "}
            <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
              We Work With
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#052440]/70 font-normal">
            WeRoute engineers across the platform categories enterprise teams already depend on, selecting technology by fit rather than by vendor relationship.
          </p>
        </motion.div>

        {/* Top Interactive Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ecosystems.map((eco, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={eco.num}
                onClick={() => setActiveIndex(idx)}
                className={`clay-badge-light relative flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#080357] text-[#B7F36B] shadow-md border-transparent scale-105"
                    : "bg-white text-[#052440]/70 hover:text-[#080357] border-[#052440]/10 hover:border-[#080357]/20"
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">{eco.num}</span>
                <span>{eco.shortTitle}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Infinite Loop 3D Stage Carousel */}
        <div
          className="relative mt-12 w-full h-[540px] sm:h-[570px] md:h-[590px] overflow-hidden flex items-center justify-center py-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {ecosystems.map((eco, index) => {
            const IconComponent = eco.icon;
            const diff = getCircularDistance(index, activeIndex, ecosystems.length);
            const isActive = diff === 0;
            const isVisible = isMobile ? Math.abs(diff) <= 1 : Math.abs(diff) <= 2;

            // Compute depth visual styling based on distance from center
            const xPos = diff * (cardWidth + gap);
            const scale = isActive ? 1 : Math.abs(diff) === 1 ? 0.92 : 0.84;
            const opacity = isActive ? 1 : Math.abs(diff) === 1 ? (isMobile ? 0.4 : 0.6) : isMobile ? 0 : 0.25;
            const zIndex = isActive ? 30 : Math.abs(diff) === 1 ? 20 : 10;

            return (
              <motion.div
                key={eco.num}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{
                  x: xPos,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 26,
                  mass: 0.8,
                }}
                style={{
                  position: "absolute",
                  width: `${cardWidth}px`,
                  pointerEvents: isVisible ? "auto" : "none",
                }}
                className={`clay-light group flex flex-col justify-between overflow-hidden bg-[#f7f9fc] border p-6 sm:p-7 md:p-8 transition-shadow duration-300 rounded-[28px] ${
                  isActive
                    ? "border-[#080357]/20 shadow-[0_22px_45px_rgba(5,36,64,0.13)] ring-2 ring-[#080357]/10"
                    : "border-[#052440]/5 shadow-sm hover:opacity-85 cursor-pointer"
                }`}
              >
                <div>
                  {/* Visual Image Banner with Floating Badges */}
                  <div className="relative h-44 sm:h-48 md:h-52 w-full overflow-hidden rounded-2xl mb-6 bg-white border border-[#052440]/5 shadow-xs">
                    <img
                      src={eco.image}
                      alt={eco.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" />

                    {/* Floating Icon Badge */}
                    <div className="absolute top-3 left-3">
                      <div className="clay-badge-light flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center bg-[#080357] text-[#B7F36B] shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                        <IconComponent size={20} />
                      </div>
                    </div>

                    {/* Floating Number Pill */}
                    <div className="absolute top-3 right-3">
                      <span className="clay-badge-light px-3 py-1 text-xs font-mono font-bold tracking-wider text-[#080357] bg-white/95 backdrop-blur-md border border-[#052440]/10 shadow-sm">
                        {eco.num}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#080357] mb-2 sm:mb-3">
                    {eco.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base leading-relaxed text-[#052440]/75">
                    {eco.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="relative z-10 mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-[#052440]/10">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {eco.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="clay-badge-light inline-block bg-white border border-[#052440]/10 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs font-medium text-[#052440]/80 shadow-xs hover:border-[#080357]/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Navigation Footer */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
          {/* Slide Indicator & Dots */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#052440]/70">
              0{activeIndex + 1} <span className="opacity-40">/</span> 0{ecosystems.length}
            </span>

            <div className="flex items-center gap-1.5 ml-2">
              {ecosystems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-8 bg-[#080357]"
                      : "w-2 bg-[#052440]/20 hover:bg-[#052440]/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Controls: Prev, Next & Autoplay Pause/Play */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Play Autoplay" : "Pause Autoplay"}
              className="clay-badge-light flex h-11 w-11 items-center justify-center border border-[#052440]/10 bg-white text-[#052440]/70 hover:text-[#080357] transition-all hover:scale-105 cursor-pointer shadow-sm"
              title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
            >
              {isPaused ? <Play size={16} className="ml-0.5" /> : <Pause size={16} />}
            </button>

            <button
              onClick={handlePrev}
              aria-label="Previous Ecosystem"
              className="clay-badge-light flex h-12 w-12 items-center justify-center border border-[#052440]/10 bg-white text-[#080357] transition-all hover:bg-[#080357] hover:text-white hover:scale-105 cursor-pointer shadow-sm"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Ecosystem"
              className="clay-badge-light flex h-12 w-12 items-center justify-center border border-transparent bg-[#080357] text-white transition-all hover:bg-[#0E1A59] hover:scale-105 cursor-pointer shadow-md"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
