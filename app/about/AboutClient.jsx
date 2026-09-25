"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  ArrowRight,
  Shield,
  Network,
  Cloud,
  Cpu,
  CheckCircle2,
  Activity,
  Code2,
  Workflow,
  Layers,
  Compass,
  Hammer,
  Repeat,
  Headphones,
  LineChart,
  Users,
  ChevronRight,
  ChevronLeft,
  BrainCircuit,
  Zap,
  TrendingUp,
  Briefcase
} from "lucide-react";
import { FAQAccordion } from "@/app/components/ui/FAQAccordion";
import FinalCTA from "@/app/components/FinalCTA";

const LIFECYCLE_STAGES = [
  {
    step: "01",
    phase: "Stage 01",
    name: "Advise",
    icon: Compass,
    service: "Consulting & Advisory Services",
    href: "/services/consulting-advisory",
    next: "Design"
  },
  {
    step: "02",
    phase: "Stage 02",
    name: "Design",
    icon: Layers,
    service: "Architecture & Design",
    href: "/services/network-and-security-architecture-design",
    next: "Build"
  },
  {
    step: "03",
    phase: "Stage 03",
    name: "Build",
    icon: Hammer,
    service: "Professional Services",
    href: "/services/professional-services",
    next: "Integrate"
  },
  {
    step: "04",
    phase: "Stage 04",
    name: "Integrate",
    icon: Workflow,
    service: "Software & AI Development",
    href: "/services/software-ai-development",
    next: "Operate"
  },
  {
    step: "05",
    phase: "Stage 05",
    name: "Operate",
    icon: Headphones,
    service: "Managed Services",
    href: "/services/managed-services",
    next: "Optimize"
  },
  {
    step: "06",
    phase: "Stage 06",
    name: "Optimize",
    icon: LineChart,
    service: "Technology Staffing Services",
    href: "/services/staffing",
    next: "Continuous Loop"
  },
];

const METRICS = [
  {
    number: "01",
    value: "40+",
    label: "Enterprise Projects Delivered",
    icon: CheckCircle2
  },
  {
    number: "02",
    value: "99.9%",
    label: "System Reliability Across Managed Environments",
    icon: Activity
  },
  {
    number: "03",
    value: "45%+",
    label: "Operational Efficiency Improvement",
    icon: TrendingUp
  },
  {
    number: "04",
    value: "End-to-End",
    label: "Technology Ownership",
    icon: Workflow
  },
  {
    number: "05",
    value: "50+",
    label: "Technology Engagements & Solutions Delivered",
    icon: Layers
  }
];

const STRATEGY_PILLARS = [
  {
    number: "01",
    title: "Architecture-Led Transformation",
    desc: "Every initiative starts with the architecture, not the tools being sold around it.",
    icon: Layers
  },
  {
    number: "02",
    title: "Security-First Design",
    desc: "Security is built into the foundation, not added as a final step.",
    icon: Shield
  },
  {
    number: "03",
    title: "Seamless System Integration",
    desc: "Networks, cloud, applications, and data are connected as one coherent system.",
    icon: Workflow
  },
  {
    number: "04",
    title: "Continuous Optimization & Improvement",
    desc: "Environments are monitored and refined continuously, not left alone after go-live.",
    icon: Repeat
  }
];

const CAPABILITIES = [
  {
    title: "Architecture-Driven Engineering",
    desc: "We design technology foundations built for security, resilience, scalability, interoperability, and long-term operational sustainability, so systems hold up well beyond initial deployment.",
    icon: Layers
  },
  {
    title: "Intelligent Decision-Making",
    desc: "We connect data, observability, AI, and operational intelligence to help teams make faster, more informed decisions across every layer of the business.",
    icon: BrainCircuit
  },
  {
    title: "Operational Efficiency",
    desc: "We simplify workflows, automate repetitive work, reduce technology complexity, and improve performance across enterprise environments of every size and industry.",
    icon: Zap
  },
  {
    title: "Secure by Design",
    desc: "We embed security, governance, identity, and resilience across every layer of the technology architecture, rather than bolting it on at the end.",
    icon: Shield
  },
  {
    title: "Integrated Enterprise Systems",
    desc: "We connect networks, cloud, applications, data, APIs, and operational platforms through unified architectures instead of disconnected point solutions that are hard to maintain.",
    icon: Network
  },
  {
    title: "Built for Continuous Improvement",
    desc: "We design environments that can evolve, scale, and improve as business and technology requirements change, not just at the point of launch.",
    icon: Repeat
  }
];

const WHY_WEROUTE = [
  {
    title: "End-to-End Ownership",
    desc: "From advisory and architecture through implementation, integration, staffing, managed operations, and optimization, one accountable technology partner carries the work.",
    icon: CheckCircle2
  },
  {
    title: "Vendor-Agnostic Approach",
    desc: "Technology recommendations are based on enterprise fit, performance, scalability, security, interoperability, and long-term value, not vendor relationships.",
    icon: Compass
  },
  {
    title: "Architecture-First Thinking",
    desc: "We design the technology foundation before selecting or deploying individual tools, which reduces fragmentation and future rework.",
    icon: Layers
  },
  {
    title: "Cross-Domain Expertise",
    desc: "Networking, cloud, cybersecurity, AI, software, automation, and operations are considered together rather than as isolated technology silos.",
    icon: BrainCircuit
  },
  {
    title: "Enterprise-Ready Delivery",
    desc: "Governance, security, scalability, documentation, operational readiness, and long-term maintainability are built into delivery from the start.",
    icon: Shield
  }
];

const FAQ_ITEMS = [
  {
    question: "What industries does WeRoute support?",
    answer: "WeRoute supports enterprises across financial services, healthcare, manufacturing, telecommunications, technology, retail, logistics, and energy & utilities, along with other industries with complex technology environments."
  },
  {
    question: "Does WeRoute support end-to-end technology implementation?",
    answer: "Yes. WeRoute supports the full lifecycle, from consulting, architecture, and design through implementation, integration, managed operations, and optimization."
  },
  {
    question: "Can WeRoute integrate with existing enterprise systems?",
    answer: "Yes. Solutions are designed around your existing infrastructure, applications, APIs, cloud environments, security controls, and operational workflows."
  },
  {
    question: "How does WeRoute approach enterprise security?",
    answer: "Security is built in by design, covering identity and access controls, segmentation, governance, monitoring, and resilience, with Zero Trust principles applied where appropriate."
  },
  {
    question: "Does WeRoute provide ongoing technology support?",
    answer: "Yes. Managed Services cover ongoing monitoring, administration, incident management, optimization, observability, and operational support."
  },
  {
    question: "What makes WeRoute vendor-agnostic?",
    answer: "Technology decisions are based on enterprise fit and long-term value rather than any single vendor relationship or product line."
  },
  {
    question: "Does WeRoute work with existing internal IT teams?",
    answer: "Yes. WeRoute works alongside internal teams, extending capacity and expertise rather than replacing existing structures."
  },
  {
    question: "Can WeRoute support both transformation projects and ongoing operations?",
    answer: "Yes. WeRoute supports one-time transformation initiatives as well as long-term managed operations and optimization."
  },
  {
    question: "Does WeRoute provide AI and automation services?",
    answer: "Yes. AI and automation are part of WeRoute's core technology capabilities, alongside networking, cloud, and cybersecurity."
  },
  {
    question: "Can WeRoute provide specialized technology professionals?",
    answer: "Yes. WeRoute provides technically screened professionals across networking, cloud, cybersecurity, software, AI, and infrastructure."
  }
];

const INTERNAL_LINKS = [
  {
    title: "Enterprise Solutions",
    href: "/solutions"
  },
  {
    title: "Consulting & Advisory Services",
    href: "/services/consulting-advisory"
  },
  {
    title: "Professional Services",
    href: "/services/professional-services"
  },
  {
    title: "Managed Services",
    href: "/services/managed-services"
  },
  {
    title: "Software & AI Development Services",
    href: "/services/software-ai-development"
  },
  {
    title: "Technology Staffing Services",
    href: "/services/staffing"
  }
];

export default function AboutClient() {
  const carouselRef = useRef(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollState = () => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const scrollPos = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(scrollPos > 12);
    setCanScrollRight(scrollPos < maxScroll - 12);

    const cards = el.querySelectorAll(".lifecycle-card");
    if (cards.length > 0) {
      let closestIdx = 0;
      let minDistance = Infinity;
      const containerLeft = el.getBoundingClientRect().left;
      cards.forEach((card, idx) => {
        const cardLeft = card.getBoundingClientRect().left;
        const distance = Math.abs(cardLeft - containerLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });
      setActiveStageIndex(closestIdx);
    }
  };

  useEffect(() => {
    checkScrollState();
    window.addEventListener("resize", checkScrollState);
    return () => window.removeEventListener("resize", checkScrollState);
  }, []);

  const scrollToStage = (index) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.querySelectorAll(".lifecycle-card");
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      setActiveStageIndex(index);
    }
  };

  const handleScrollBy = (direction) => {
    if (!carouselRef.current) return;
    const targetIdx = direction > 0
      ? Math.min(activeStageIndex + 1, LIFECYCLE_STAGES.length - 1)
      : Math.max(activeStageIndex - 1, 0);
    scrollToStage(targetIdx);
  };

  return (
    <main className="relative min-h-screen bg-[#f7f9fc] text-[#080357]">
      
      {/* ========================================================
          HERO SECTION: About WeRoute
          Engineering Secure, Scalable Enterprise Technology
      ======================================================== */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 border-b border-gray-100 bg-white">
        {/* Ambient atmospheric glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#080357]/[0.03] blur-[140px]" />
          <div className="absolute top-40 left-[-100px] h-[500px] w-[500px] rounded-full bg-[#B7F36B]/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: HERO CONTENT */}
            <div className="lg:col-span-7">
              {/* BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]"
              >
                <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
                <span>About WeRoute</span>
              </motion.div>

              {/* H1 HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-black tracking-tight text-[#080357] leading-[1.08] mb-6"
              >
                Engineering Secure, Scalable{" "}
                <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                  Enterprise Technology
                </span>
              </motion.h1>

              {/* HERO PARAGRAPH */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#080357]/80"
              >
                WeRoute helps enterprises design, modernize, secure, integrate, and operate technology across networking, cybersecurity, cloud, AI, automation, and digital engineering, built around real business outcomes instead of isolated tools.
              </motion.p>

              {/* CTAS */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="mailto:sales@weroute.ai"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#080357] px-8 py-4 text-[15px] font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#052440] hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <span>Talk to Our Technology Experts</span>
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 text-[#B7F36B]" />
                </a>

                <Link
                  href="/solutions"
                  className="clay-badge-light group inline-flex items-center gap-3 rounded-full border border-[#050849]/10 bg-white px-8 py-4 text-[15px] font-semibold text-[#080357] transition-all duration-300 hover:bg-[#f7f9fc] hover:border-[#080357]/30"
                >
                  <span>Explore Our Solutions</span>
                  <ChevronRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 text-[#080357]/60" />
                </Link>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: LOTTIE ANIMATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex items-center justify-center lg:justify-end lg:-mt-6 xl:-mt-10"
            >
              <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center pointer-events-none">
                <DotLottieReact
                  src="https://lottie.host/799676d8-2daa-4729-8a48-0f5f8f7044fc/MuhrXOY42y.lottie"
                  loop
                  autoplay
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 1: Our Story
          Where Strategy Meets Engineering
      ======================================================== */}
      <section className="relative py-24 md:py-32 bg-[#f7f9fc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Our Story</span>
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080357] tracking-tight mb-6">
              Where Strategy Meets{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                Engineering
              </span>
            </h2>

            <div className="h-1.5 w-14 bg-[#B7F36B] rounded-full" />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="clay-light flex flex-col justify-between rounded-[28px] border border-[#050849]/5 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B7F36B]/50 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#080357] text-[#B7F36B] flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#080357]">Unified Architecture</h3>
              </div>
              <p className="text-lg text-[#080357]/80 leading-relaxed font-normal">
                WeRoute was built around one belief: enterprise technology should solve business problems, not create new ones. We bring networking, cybersecurity, cloud, software, AI, and automation together through integrated architecture and engineering, rather than treating each as a separate project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="clay-light flex flex-col justify-between rounded-[28px] border border-[#050849]/5 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B7F36B]/50 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#080357] text-[#B7F36B] flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#080357]">Outcome-Driven Delivery</h3>
              </div>
              <p className="text-lg text-[#080357]/80 leading-relaxed font-normal">
                Every engagement starts with the same question: what outcome does this technology actually need to deliver? That question shapes our approach to consulting, architecture, engineering, implementation, operations, and continuous improvement, across every enterprise environment we work in.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 2: Lifecycle Ownership
          One Technology Partner. Multiple Enterprise Capabilities.
      ======================================================== */}
      <section className="relative py-24 md:py-32 bg-white border-t border-[#050849]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-12"
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>End-to-End Lifecycle</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080357] tracking-tight mb-6">
              One Technology Partner.{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                Multiple Capabilities.
              </span>
            </h2>

            <div className="h-1.5 w-14 bg-[#B7F36B] mb-8 rounded-full" />

            <div className="clay-light rounded-[32px] border border-[#050849]/5 bg-[#f7f9fc] p-8 sm:p-10">
              <p className="text-lg text-[#080357]/80 leading-relaxed font-normal">
                WeRoute supports organizations across the complete technology lifecycle, from initial assessment through architecture, implementation, integration, staffing, operations, and ongoing optimization. Rather than handing off between vendors at each stage, one team carries the work from strategy through delivery, so nothing gets lost in translation between advisory and execution.
              </p>
            </div>
          </motion.div>

          {/* SIX-STAGE LIFECYCLE DIAGRAM FLOW & CAROUSEL */}
          <div className="mt-16">
            
            {/* SECTION HEADER & CAROUSEL CONTROLS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-between gap-4 mb-8"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#080357]/70">
                  Six-Stage Lifecycle Framework
                </h3>
                <span className="clay-badge-light inline-flex items-center rounded-full border border-[#050849]/10 bg-white px-3 py-1 text-[11px] font-extrabold text-[#080357]">
                  Phase {LIFECYCLE_STAGES[activeStageIndex]?.step} of 06: {LIFECYCLE_STAGES[activeStageIndex]?.name}
                </span>
              </div>

              {/* ARROW CONTROLS */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleScrollBy(-1)}
                  disabled={!canScrollLeft}
                  aria-label="Previous stage"
                  className={`clay-badge-light flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                    canScrollLeft
                      ? "border-[#050849]/10 bg-white text-[#080357] hover:bg-[#080357] hover:text-[#B7F36B] shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
                      : "border-[#050849]/5 bg-white/40 text-[#080357]/25 cursor-not-allowed"
                  }`}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => handleScrollBy(1)}
                  disabled={!canScrollRight}
                  aria-label="Next stage"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                    canScrollRight
                      ? "border-transparent bg-[#080357] text-white shadow-md hover:bg-[#052440] hover:text-[#B7F36B] hover:scale-105 active:scale-95 cursor-pointer"
                      : "border-[#050849]/5 bg-[#080357]/20 text-white/50 cursor-not-allowed"
                  }`}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>

            <div className="space-y-8">
                
              {/* INTERACTIVE HORIZONTAL TIMELINE STEPPER TRACK (DESKTOP) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="clay-light hidden lg:block rounded-[28px] border border-[#050849]/5 bg-[#f7f9fc] p-6 shadow-sm"
              >
                <div className="relative flex items-start justify-between">
                  <div 
                    className="absolute top-6 left-6 right-6 -translate-y-1/2 h-[3px] bg-[#080357]/10 z-0 rounded-full" 
                    aria-hidden="true" 
                  />
                  <div 
                    className="absolute top-6 left-6 -translate-y-1/2 h-[3px] bg-gradient-to-r from-[#080357] via-[#080357] to-[#B7F36B] z-0 rounded-full transition-all duration-500 ease-out" 
                    style={{ 
                      width: `calc(${activeStageIndex / 5} * (100% - 48px))` 
                    }}
                    aria-hidden="true" 
                  />

                  {LIFECYCLE_STAGES.map((stg, idx) => {
                    const isActive = activeStageIndex === idx;
                    return (
                      <button
                        key={stg.step}
                        type="button"
                        onClick={() => scrollToStage(idx)}
                        className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                      >
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xs font-black transition-all duration-300 ${
                            isActive
                              ? "bg-[#080357] text-[#B7F36B] shadow-lg ring-4 ring-[#B7F36B]/40 scale-110"
                              : "clay-badge-light bg-white border border-[#050849]/10 text-[#080357] group-hover:scale-105 group-hover:border-[#080357]/30"
                          }`}
                        >
                          {stg.step}
                        </div>
                        <span className={`mt-2.5 text-xs transition-colors duration-300 ${
                          isActive ? "font-black text-[#080357]" : "font-bold text-[#080357]/70 group-hover:text-[#080357]"
                        }`}>
                          {stg.name}
                        </span>
                        {isActive && (
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* HORIZONTAL CAROUSEL TRACK */}
              <div className="relative">
                <div
                  ref={carouselRef}
                  onScroll={checkScrollState}
                  className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 hide-scrollbar scroll-smooth"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {LIFECYCLE_STAGES.map((stage, idx) => {
                    const isActive = activeStageIndex === idx;
                    const Icon = stage.icon;
                    return (
                      <div
                        key={stage.step}
                        className="lifecycle-card w-[82vw] sm:w-[320px] lg:w-[340px] flex-shrink-0 snap-start"
                      >
                        <div className={`clay-light relative flex h-full flex-col justify-between overflow-hidden rounded-[26px] border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                          isActive
                            ? "border-[#B7F36B] shadow-xl ring-2 ring-[#B7F36B]/30"
                            : "border-[#050849]/5"
                        }`}>
                          
                          {/* TOP ROW: Badge + Icon */}
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="clay-badge-light inline-flex items-center gap-1.5 rounded-full border border-[#050849]/5 bg-[#f7f9fc] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#080357]">
                                <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-[#10b981] animate-ping" : "bg-[#10b981]"}`} />
                                {stage.phase}
                              </span>

                              <div className="clay-badge-light flex h-11 w-11 items-center justify-center rounded-2xl bg-[#080357] text-[#B7F36B] shadow-sm transition-transform duration-300 group-hover:scale-105">
                                <Icon className="w-5 h-5 text-[#B7F36B]" />
                              </div>
                            </div>

                            {/* STAGE NAME */}
                            <h4 className="mt-4 text-xl sm:text-2xl font-black tracking-tight text-[#080357]">
                              {stage.name}
                            </h4>

                            {/* PARENTHETICAL SERVICE NAME */}
                            <p className="mt-1.5 text-xs sm:text-sm font-semibold text-[#080357]/70">
                              ({stage.service})
                            </p>
                          </div>

                          {/* BOTTOM ROW: CTA + Next Step Flow Indicator */}
                          <div className="mt-6 flex items-center justify-between border-t border-[#050849]/5 pt-4">
                            <Link
                              href={stage.href}
                              className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-[#080357] hover:text-[#052440] transition-colors"
                            >
                              <span>Explore</span>
                              <ArrowRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-1 text-[#080357]" />
                            </Link>

                            <span className="clay-badge-light inline-flex items-center gap-1 rounded-full border border-[#050849]/5 bg-[#f7f9fc] px-2.5 py-1 text-[10px] font-bold text-[#080357]/70">
                              {idx === 5 ? (
                                <span className="text-[#080357] font-extrabold flex items-center gap-1">
                                  <Repeat size={10} className="text-[#10b981]" /> Continuous Loop
                                </span>
                              ) : (
                                <span>Next: {stage.next} →</span>
                              )}
                            </span>
                          </div>

                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* PAGINATION DOTS / PILLS */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  {LIFECYCLE_STAGES.map((stg, i) => {
                    const isActive = activeStageIndex === i;
                    return (
                      <button
                        key={stg.step}
                        type="button"
                        onClick={() => scrollToStage(i)}
                        aria-label={`Go to stage ${stg.step} ${stg.name}`}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "w-8 bg-[#080357]"
                            : "w-2.5 bg-[#080357]/20 hover:bg-[#080357]/40"
                        }`}
                      />
                    );
                  })}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 3: Technology Impact
          Technology Impact You Can Measure
      ======================================================== */}
      <section className="relative py-20 md:py-28 bg-[#f7f9fc] border-t border-[#050849]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-12"
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Proven Impact</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080357] tracking-tight mb-6">
              Technology Impact{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                You Can Measure
              </span>
            </h2>

            <div className="h-1.5 w-14 bg-[#B7F36B] rounded-full" />
          </motion.div>

          {/* 5 IMPACT CLAY CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-5 sm:gap-6">
            {METRICS.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`clay-light group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#050849]/5 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B7F36B]/50 hover:shadow-xl ${
                    i < 3
                      ? "col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1"
                      : i === 3
                      ? "col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-1"
                      : "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="clay-badge-light flex h-12 w-12 items-center justify-center rounded-2xl bg-[#080357] text-[#B7F36B] shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-5 h-5 text-[#B7F36B]" />
                      </div>

                      <span className="text-xs font-mono font-bold tracking-wider text-[#080357]/40">
                        {metric.number}
                      </span>
                    </div>

                    <div className="mt-6 text-3xl sm:text-4xl font-black tracking-tight text-[#080357]">
                      {metric.value}
                    </div>

                    <p className="mt-2.5 text-xs sm:text-sm font-medium leading-relaxed text-[#080357]/80">
                      {metric.label}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 pt-4 border-t border-[#050849]/5">
                    <div className="h-1 w-6 rounded-full bg-[#080357]/10 transition-all duration-300 group-hover:w-12 group-hover:bg-[#B7F36B]" />
                    <div className="h-1 w-1 rounded-full bg-[#080357]/10 transition-colors duration-300 group-hover:bg-[#B7F36B]" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 4: Strategic Pillars
          Strategy with Purpose. Execution with Precision.
      ======================================================== */}
      <section className="relative py-24 md:py-32 bg-white border-t border-[#050849]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-12"
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Strategic Pillars</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080357] tracking-tight mb-6">
              Strategy with Purpose.{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                Execution with Precision.
              </span>
            </h2>

            <div className="h-1.5 w-14 bg-[#B7F36B] mb-8 rounded-full" />

            <div className="clay-light rounded-[32px] border border-[#050849]/5 bg-[#f7f9fc] p-8 sm:p-10">
              <p className="text-lg text-[#080357]/80 leading-relaxed font-normal">
                WeRoute treats technology as a driver of resilience, performance, growth, and operational efficiency, not just a cost center to manage. That means pairing strategic advisory with hands-on engineering, so recommendations are grounded in what can actually be built, secured, and operated at enterprise scale, not just what looks good in a roadmap document.
              </p>
            </div>
          </motion.div>

          {/* 4 STRATEGY CLAY CARDS */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STRATEGY_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="clay-light group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-[#050849]/5 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#B7F36B]/50 hover:shadow-xl"
                >
                  <div>
                    <div className="clay-badge-light flex h-14 w-14 items-center justify-center rounded-2xl bg-[#080357] text-[#B7F36B] mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md">
                      <Icon className="w-6 h-6 text-[#B7F36B]" />
                    </div>

                    <h3 className="text-xl font-bold leading-snug text-[#080357] mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#080357]/75 font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* STRATEGY CTAS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-14 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#080357] px-8 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#052440] hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={16} className="text-[#B7F36B]" />
            </Link>

            <a
              href="mailto:sales@weroute.ai"
              className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/10 bg-white px-8 py-4 text-sm font-bold text-[#080357] transition-all hover:bg-[#f7f9fc] hover:border-[#080357]/30"
            >
              <span>Talk to Our Technology Experts</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* ========================================================
          SECTION 5: Enterprise Capabilities
          Building High-Performance, Scalable Technology Systems
      ======================================================== */}
      <section className="relative py-24 md:py-32 bg-[#f7f9fc] border-t border-[#050849]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-12"
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Enterprise Capabilities</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080357] tracking-tight mb-6">
              Building High-Performance,{" "}
              <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                Scalable Systems
              </span>
            </h2>

            <div className="h-1.5 w-14 bg-[#B7F36B] rounded-full" />
          </motion.div>

          {/* 6 CAPABILITIES SYMMETRICAL 3x2 GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="clay-light group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#050849]/5 bg-white p-8 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B7F36B]/50 hover:shadow-xl"
                >
                  <div>
                    <div className="clay-badge-light flex h-14 w-14 items-center justify-center rounded-2xl bg-[#080357] text-[#B7F36B] mb-6 transition-transform duration-300 group-hover:scale-105 shadow-md">
                      <Icon className="w-6 h-6 text-[#B7F36B]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#080357] mb-3">
                      {cap.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] leading-relaxed text-[#080357]/75 font-normal">
                      {cap.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 6: Why WeRoute (Dark Mode)
          Built for Enterprises That Demand Reliability and Scale
      ======================================================== */}
      <section className="relative py-24 md:py-32 bg-[#080357] text-white overflow-hidden">
        {/* Clay ambient lighting in dark mode */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-[-100px] h-[500px] w-[500px] rounded-full bg-[#B7F36B]/10 blur-[140px]" />
          <div className="absolute bottom-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16"
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#B7F36B]">
              <span className="h-2 w-2 rounded-full bg-[#B7F36B] animate-pulse" />
              <span>Why WeRoute</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Built for Enterprises That Demand{" "}
              <span className="bg-gradient-to-r from-white via-white to-[#B7F36B] bg-clip-text text-transparent">
                Reliability and Scale
              </span>
            </h2>

            <div className="h-1.5 w-14 bg-[#B7F36B] mb-8 rounded-full" />

            <p className="text-lg text-white/80 leading-relaxed font-normal">
              Enterprises choose WeRoute because we take ownership of outcomes, not just individual projects. We think in architecture, not vendor catalogs, and we consider networking, cloud, cybersecurity, AI, software, and operations together rather than as separate technology silos.
            </p>
          </motion.div>

          {/* 5 WHY WEROUTE PILLARS */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {WHY_WEROUTE.map((item, idx) => {
              const colSpan =
                idx < 2
                  ? "col-span-12 lg:col-span-6"
                  : "col-span-12 sm:col-span-6 lg:col-span-4";
              const Icon = item.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`clay-dark group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B7F36B]/50 hover:bg-white/[0.08] ${colSpan}`}
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#B7F36B] mb-6 group-hover:bg-[#B7F36B]/20 transition-colors shadow-sm">
                      <Icon className="w-6 h-6 text-[#B7F36B]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-white/75 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          INTERNAL LINKS SECTION
      ======================================================== */}
      <section className="relative py-20 bg-[#f7f9fc] border-t border-[#050849]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Related Services & Solutions</span>
            </span>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INTERNAL_LINKS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  className="clay-light group flex items-center justify-between rounded-[24px] border border-[#050849]/5 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B7F36B]/50 hover:shadow-md"
                >
                  <span className="text-base font-bold text-[#080357]">
                    {item.title}
                  </span>
                  <ArrowRight size={16} className="text-[#080357] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          FINAL CTA (STANDARD SITE COMPONENT)
      ======================================================== */}
      <FinalCTA
        badgeText="Start Your Transformation"
        titleLine1="Turn Technology Complexity into"
        titleLine2="Business Advantage."
        description="Talk to WeRoute about your next technology initiative, and get a technology partner who takes ownership from strategy through delivery and beyond."
        button1Text="Schedule a Consultation"
        button1Href="/contact"
        button2Text="Talk to Our Technology Experts"
        button2Href="mailto:sales@weroute.ai"
      />

      {/* ========================================================
          SECTION 7: FREQUENTLY ASKED QUESTIONS
      ======================================================== */}
      <section className="relative py-20 md:py-28 border-t border-[#050849]/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
            
            {/* STICKY HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <span className="clay-badge-light mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#050849]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#080357]">
                <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
                <span>Common Questions</span>
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080357] tracking-tight mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-[#080357] to-[#A7BF73] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>

              <div className="h-1.5 w-14 bg-[#B7F36B] mb-6 rounded-full" />

              <p className="text-base sm:text-lg text-[#080357]/80 leading-relaxed font-normal">
                Everything you need to know about our enterprise delivery model, cross-domain capabilities, and engagement structure.
              </p>
            </motion.div>

            {/* CLAY ACCORDION LIST */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <FAQAccordion items={FAQ_ITEMS} initialOpenIndex={0} allowMultiple={false} />
            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}
