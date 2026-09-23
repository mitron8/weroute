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
  Briefcase
} from "lucide-react";
import { FAQAccordion } from "@/app/components/ui/FAQAccordion";

const LIFECYCLE_STAGES = [
  {
    step: "01",
    phase: "Stage 01",
    name: "Advise",
    icon: <Compass className="h-5 w-5 text-blue-600" />,
    iconBg: "bg-blue-50 border-blue-200/60 text-blue-600",
    service: "Consulting & Advisory Services",
    href: "/services/consulting-advisory",
    next: "Design"
  },
  {
    step: "02",
    phase: "Stage 02",
    name: "Design",
    icon: <Layers className="h-5 w-5 text-indigo-600" />,
    iconBg: "bg-indigo-50 border-indigo-200/60 text-indigo-600",
    service: "Architecture & Design",
    href: "/services/network-and-security-architecture-design",
    next: "Build"
  },
  {
    step: "03",
    phase: "Stage 03",
    name: "Build",
    icon: <Hammer className="h-5 w-5 text-teal-600" />,
    iconBg: "bg-teal-50 border-teal-200/60 text-teal-600",
    service: "Professional Services",
    href: "/services/professional-services",
    next: "Integrate"
  },
  {
    step: "04",
    phase: "Stage 04",
    name: "Integrate",
    icon: <Workflow className="h-5 w-5 text-cyan-600" />,
    iconBg: "bg-cyan-50 border-cyan-200/60 text-cyan-600",
    service: "Software & AI Development",
    href: "/services/software-ai-development",
    next: "Operate"
  },
  {
    step: "05",
    phase: "Stage 05",
    name: "Operate",
    icon: <Headphones className="h-5 w-5 text-blue-700" />,
    iconBg: "bg-blue-50 border-blue-200/60 text-blue-700",
    service: "Managed Services",
    href: "/services/managed-services",
    next: "Optimize"
  },
  {
    step: "06",
    phase: "Stage 06",
    name: "Optimize",
    icon: <LineChart className="h-5 w-5 text-emerald-600" />,
    iconBg: "bg-emerald-50 border-emerald-200/60 text-emerald-600",
    service: "Technology Staffing Services",
    href: "/services/staffing",
    next: "Continuous Loop"
  },
];

const METRICS = [
  {
    value: "40+",
    label: "Enterprise Projects Delivered"
  },
  {
    value: "99.9%",
    label: "System Reliability Across Managed Environments"
  },
  {
    value: "45%+",
    label: "Operational Efficiency Improvement"
  },
  {
    value: "End-to-End",
    label: "Technology Ownership"
  },
  {
    value: "50+",
    label: "Technology Engagements & Solutions Delivered"
  }
];

const STRATEGY_PILLARS = [
  {
    number: "01",
    title: "Architecture-Led Transformation",
    desc: "Every initiative starts with the architecture, not the tools being sold around it.",
    icon: <Layers className="h-6 w-6 text-[#050849]" />
  },
  {
    number: "02",
    title: "Security-First Design",
    desc: "Security is built into the foundation, not added as a final step.",
    icon: <Shield className="h-6 w-6 text-emerald-600" />
  },
  {
    number: "03",
    title: "Seamless System Integration",
    desc: "Networks, cloud, applications, and data are connected as one coherent system.",
    icon: <Workflow className="h-6 w-6 text-indigo-600" />
  },
  {
    number: "04",
    title: "Continuous Optimization & Improvement",
    desc: "Environments are monitored and refined continuously, not left alone after go-live.",
    icon: <Repeat className="h-6 w-6 text-teal-600" />
  }
];

const CAPABILITIES = [
  {
    title: "Architecture-Driven Engineering",
    desc: "We design technology foundations built for security, resilience, scalability, interoperability, and long-term operational sustainability, so systems hold up well beyond initial deployment.",
    icon: <Layers className="h-6 w-6 text-blue-600" />
  },
  {
    title: "Intelligent Decision-Making",
    desc: "We connect data, observability, AI, and operational intelligence to help teams make faster, more informed decisions across every layer of the business.",
    icon: <BrainCircuit className="h-6 w-6 text-indigo-600" />
  },
  {
    title: "Operational Efficiency",
    desc: "We simplify workflows, automate repetitive work, reduce technology complexity, and improve performance across enterprise environments of every size and industry.",
    icon: <Zap className="h-6 w-6 text-amber-600" />
  },
  {
    title: "Secure by Design",
    desc: "We embed security, governance, identity, and resilience across every layer of the technology architecture, rather than bolting it on at the end.",
    icon: <Shield className="h-6 w-6 text-emerald-600" />
  },
  {
    title: "Integrated Enterprise Systems",
    desc: "We connect networks, cloud, applications, data, APIs, and operational platforms through unified architectures instead of disconnected point solutions that are hard to maintain.",
    icon: <Network className="h-6 w-6 text-cyan-600" />
  },
  {
    title: "Built for Continuous Improvement",
    desc: "We design environments that can evolve, scale, and improve as business and technology requirements change, not just at the point of launch.",
    icon: <Repeat className="h-6 w-6 text-teal-600" />
  }
];

const WHY_WEROUTE = [
  {
    title: "End-to-End Ownership",
    desc: "From advisory and architecture through implementation, integration, staffing, managed operations, and optimization, one accountable technology partner carries the work.",
    icon: <CheckCircle2 className="h-6 w-6 text-blue-400" />
  },
  {
    title: "Vendor-Agnostic Approach",
    desc: "Technology recommendations are based on enterprise fit, performance, scalability, security, interoperability, and long-term value, not vendor relationships.",
    icon: <Compass className="h-6 w-6 text-emerald-400" />
  },
  {
    title: "Architecture-First Thinking",
    desc: "We design the technology foundation before selecting or deploying individual tools, which reduces fragmentation and future rework.",
    icon: <Layers className="h-6 w-6 text-indigo-400" />
  },
  {
    title: "Cross-Domain Expertise",
    desc: "Networking, cloud, cybersecurity, AI, software, automation, and operations are considered together rather than as isolated technology silos.",
    icon: <BrainCircuit className="h-6 w-6 text-teal-400" />
  },
  {
    title: "Enterprise-Ready Delivery",
    desc: "Governance, security, scalability, documentation, operational readiness, and long-term maintainability are built into delivery from the start.",
    icon: <Shield className="h-6 w-6 text-cyan-400" />
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
    <main className="relative min-h-screen bg-[#f7f9fc] text-[#050849]">
      
      {/* ========================================================
          HERO SECTION: [ ABOUT US ]
          Engineering Secure, Scalable Enterprise Technology
      ======================================================== */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
        {/* Ambient atmospheric glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#050849]/[0.03] blur-[140px]" />
          <div className="absolute top-40 left-[-100px] h-[500px] w-[500px] rounded-full bg-[#050849]/[0.02] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: HERO CONTENT */}
            <div className="lg:col-span-7">
              {/* BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="clay-badge-light inline-flex items-center border border-[#050849]/5 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#050849]"
              >
                <span>[ ABOUT US ]</span>
              </motion.div>

              {/* H1 HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 text-4xl font-black tracking-tight text-[#050849] sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.06]"
              >
                Engineering Secure, Scalable Enterprise Technology
              </motion.h1>

              {/* HERO PARAGRAPH */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#4c658a]"
              >
                WeRoute helps enterprises design, modernize, secure, integrate, and operate technology across networking, cybersecurity, cloud, AI, automation, and digital engineering, built around real business outcomes instead of isolated tools.
              </motion.p>

              {/* CTAS */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="mt-7 flex flex-wrap items-center gap-4"
              >
                <a
                  href="mailto:sales@weroute.ai"
                  className="clay-badge-light group inline-flex items-center gap-3 rounded-full bg-[#050849] px-8 py-4 text-[15px] font-bold text-white shadow-md transition-all duration-300 hover:bg-[#080357] hover:-translate-y-0.5"
                >
                  <span>Talk to Our Technology Experts</span>
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <Link
                  href="/solutions"
                  className="clay-badge-light group inline-flex items-center gap-3 rounded-full border border-[#050849]/10 bg-white px-8 py-4 text-[15px] font-semibold text-[#050849] transition-all duration-300 hover:bg-[#f7f9fc]"
                >
                  <span>Explore Our Solutions</span>
                  <ChevronRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 text-[#050849]/60" />
                </Link>
              </motion.div>


            </div>

            {/* RIGHT COLUMN: LOTTIE ANIMATION (BORDERLESS / NO CARD) */}
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
          SECTION 1: [ OUR STORY ]
          Where Strategy Meets Engineering
      ======================================================== */}
      <section className="relative py-24 md:py-32 border-t border-[#050849]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="clay-badge-light inline-block border border-[#050849]/5 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849]">
              [ OUR STORY ]
            </span>
            
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#050849] leading-[1.08]">
              Where Strategy Meets Engineering
            </h2>


          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="clay-light flex flex-col justify-between rounded-[28px] border border-[#050849]/5 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-lg sm:text-xl text-[#050849] leading-relaxed font-normal">
                WeRoute was built around one belief: enterprise technology should solve business problems, not create new ones. We bring networking, cybersecurity, cloud, software, AI, and automation together through integrated architecture and engineering, rather than treating each as a separate project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="clay-light flex flex-col justify-between rounded-[28px] border border-[#050849]/5 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-lg sm:text-xl text-[#050849] leading-relaxed font-normal">
                Every engagement starts with the same question: what outcome does this technology actually need to deliver? That question shapes our approach to consulting, architecture, engineering, implementation, operations, and continuous improvement, across every enterprise environment we work in.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 2
          One Technology Partner. Multiple Enterprise Capabilities.
      ======================================================== */}
      <section className="relative py-24 md:py-32 border-t border-[#050849]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="clay-badge-light inline-block border border-[#050849]/5 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849]">
              [ LIFECYCLE OWNERSHIP ]
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#050849] leading-tight">
              One Technology Partner. Multiple Enterprise Capabilities.
            </h2>



            <div className="clay-light mt-8 rounded-[32px] border border-[#050849]/5 bg-white p-8 sm:p-10">
              <p className="text-lg sm:text-xl text-[#050849] leading-relaxed font-normal">
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
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#050849]/70">
                  Six-Stage Lifecycle Cards
                </h3>
                <span className="clay-badge-light inline-flex items-center rounded-full border border-[#050849]/10 bg-white px-3 py-1 text-[11px] font-extrabold text-[#050849]">
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
                      ? "border-[#050849]/10 bg-white text-[#050849] hover:bg-[#050849] hover:text-white shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
                      : "border-[#050849]/5 bg-white/40 text-[#050849]/25 cursor-not-allowed"
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
                      ? "border-transparent bg-[#050849] text-white shadow-md hover:bg-blue-900 hover:scale-105 active:scale-95 cursor-pointer"
                      : "border-[#050849]/5 bg-[#050849]/20 text-white/50 cursor-not-allowed"
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
                className="clay-light hidden lg:block rounded-[28px] border border-[#050849]/5 bg-white p-6 shadow-sm"
              >
                <div className="relative flex items-start justify-between">
                  {/* Background connector track line - centered exactly at top-6 (24px) to pass through the middle of the 48px (h-12) step boxes */}
                  <div 
                    className="absolute top-6 left-6 right-6 -translate-y-1/2 h-[3px] bg-[#050849]/10 z-0 rounded-full" 
                    aria-hidden="true" 
                  />
                  {/* Active progress indicator line */}
                  <div 
                    className="absolute top-6 left-6 -translate-y-1/2 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-600 to-[#B7F36B] z-0 rounded-full transition-all duration-500 ease-out" 
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
                              ? "bg-[#050849] text-white shadow-lg ring-4 ring-blue-600/20 scale-110"
                              : "clay-badge-light bg-white border border-[#050849]/10 text-[#050849] group-hover:scale-105 group-hover:border-[#050849]/30"
                          }`}
                        >
                          {stg.step}
                        </div>
                        <span className={`mt-2.5 text-xs transition-colors duration-300 ${
                          isActive ? "font-black text-[#050849]" : "font-bold text-[#050849]/70 group-hover:text-[#050849]"
                        }`}>
                          {stg.name}
                        </span>
                        {isActive && (
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
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
                    return (
                      <div
                        key={stage.step}
                        className="lifecycle-card w-[82vw] sm:w-[320px] lg:w-[340px] flex-shrink-0 snap-start"
                      >
                        {/* COMPACT CARD */}
                        <div className={`clay-light relative flex h-full flex-col justify-between overflow-hidden rounded-[26px] border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                          isActive
                            ? "border-blue-500/30 shadow-md ring-1 ring-blue-500/20"
                            : "border-[#050849]/5"
                        }`}>
                          
                          {/* TOP ROW: Badge + Icon */}
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="clay-badge-light inline-flex items-center gap-1.5 rounded-full border border-[#050849]/5 bg-[#f7f9fc] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#050849]">
                                <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-blue-600 animate-ping" : "bg-blue-600"}`} />
                                {stage.phase}
                              </span>

                              <div className={`clay-badge-light flex h-10 w-10 items-center justify-center rounded-2xl border transition-transform duration-300 hover:scale-105 ${stage.iconBg}`}>
                                {stage.icon}
                              </div>
                            </div>

                            {/* STAGE NAME */}
                            <h4 className="mt-4 text-xl sm:text-2xl font-black tracking-tight text-[#050849]">
                              {stage.name}
                            </h4>

                            {/* PARENTHETICAL SERVICE NAME */}
                            <p className="mt-1.5 text-xs sm:text-sm font-semibold text-[#4c658a]">
                              ({stage.service})
                            </p>
                          </div>

                          {/* BOTTOM ROW: CTA + Next Step Flow Indicator */}
                          <div className="mt-6 flex items-center justify-between border-t border-[#050849]/5 pt-4">
                            <Link
                              href={stage.href}
                              className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                            >
                              <span>Explore</span>
                              <ArrowRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                            </Link>

                            <span className="clay-badge-light inline-flex items-center gap-1 rounded-full border border-[#050849]/5 bg-[#f7f9fc] px-2.5 py-1 text-[10px] font-bold text-[#4c658a]">
                              {idx === 5 ? (
                                <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                                  <Repeat size={10} /> Continuous Loop
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
                            ? "w-8 bg-[#050849]"
                            : "w-2.5 bg-[#050849]/20 hover:bg-[#050849]/40"
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
          SECTION 3
          Technology Impact You Can Measure (Compact Cards)
      ======================================================== */}
      <section className="relative py-16 md:py-24 border-t border-[#050849]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="clay-badge-light inline-block border border-[#050849]/5 bg-[#f7f9fc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849]">
              [ TECHNOLOGY IMPACT ]
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#050849]">
              Technology Impact You Can Measure
            </h2>
          </motion.div>

          {/* 5 COMPACT METRIC CARDS */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {METRICS.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`clay-light group relative flex flex-col justify-between rounded-[22px] border border-[#050849]/5 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${
                  i === 4 ? "col-span-2 md:col-span-1" : "col-span-1"
                }`}
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#050849]">
                    {metric.value}
                  </div>

                  <p className="mt-2 text-xs sm:text-sm font-medium leading-snug text-[#4c658a]">
                    {metric.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 4: [ OUR STRATEGY ]
          Strategy with Purpose. Execution with Precision.
      ======================================================== */}
      <section className="relative py-24 md:py-32 border-t border-[#050849]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="clay-badge-light inline-block border border-[#050849]/5 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849]">
              [ OUR STRATEGY ]
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#050849] leading-tight">
              Strategy with Purpose. Execution with Precision.
            </h2>



            <div className="clay-light mt-8 rounded-[32px] border border-[#050849]/5 bg-white p-8 sm:p-10">
              <p className="text-lg sm:text-xl text-[#050849] leading-relaxed font-normal">
                WeRoute treats technology as a driver of resilience, performance, growth, and operational efficiency, not just a cost center to manage. That means pairing strategic advisory with hands-on engineering, so recommendations are grounded in what can actually be built, secured, and operated at enterprise scale, not just what looks good in a roadmap document.
              </p>
            </div>
          </motion.div>

          {/* 4 STRATEGY CLAY CARDS */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STRATEGY_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="clay-light group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-[#050849]/5 bg-white p-8 transition-all duration-500 hover:-translate-y-2"
              >
                <div>
                  <div className="clay-badge-light flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f9fc] text-[#050849]">
                    {pillar.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-snug text-[#050849]">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4c658a] font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
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
              className="clay-badge-light inline-flex items-center gap-2 rounded-full bg-[#050849] px-8 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#080357] hover:-translate-y-0.5"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="mailto:sales@weroute.ai"
              className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/10 bg-white px-8 py-4 text-sm font-bold text-[#050849] transition-all hover:bg-[#f7f9fc]"
            >
              <span>Talk to Our Technology Experts</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* ========================================================
          SECTION 5: [ OUR CAPABILITIES ]
          Building High-Performance, Scalable Technology Systems (Bento Grid)
      ======================================================== */}
      <section className="relative py-24 md:py-32 border-t border-[#050849]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="clay-badge-light inline-block border border-[#050849]/5 bg-[#f7f9fc] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849]">
              [ OUR CAPABILITIES ]
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#050849] leading-tight">
              Building High-Performance, Scalable Technology Systems
            </h2>


          </motion.div>

          {/* 6 CAPABILITIES SYMMETRICAL 3x2 GRID */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CAPABILITIES.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="clay-light group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#050849]/5 bg-[#f7f9fc] p-8 sm:p-9 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="clay-badge-light flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#050849] shadow-sm">
                    {cap.icon}
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-bold text-[#050849]">
                    {cap.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#4c658a] font-normal">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 6: [ WHY WEROUTE ]
          Built for Enterprises That Demand Reliability and Scale (Bento Grid)
      ======================================================== */}
      <section className="relative py-24 md:py-32 bg-[#050849] text-white overflow-hidden">
        {/* Clay ambient lighting in dark mode */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute bottom-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="clay-badge inline-flex items-center gap-2 border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              [ WHY WEROUTE ]
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Built for Enterprises That Demand Reliability and Scale
            </h2>



            <p className="mt-6 text-lg text-white/75 leading-relaxed font-normal">
              Enterprises choose WeRoute because we take ownership of outcomes, not just individual projects. We think in architecture, not vendor catalogs, and we consider networking, cloud, cybersecurity, AI, software, and operations together rather than as separate technology silos.
            </p>
          </motion.div>

          {/* 5 WHY WEROUTE PILLARS - BALANCED BENTO GRID */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6">
            {WHY_WEROUTE.map((item, idx) => {
              const colSpan =
                idx < 2
                  ? "col-span-12 lg:col-span-6"
                  : "col-span-12 sm:col-span-6 lg:col-span-4";

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`clay-dark group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#080d58]/60 p-8 sm:p-9 transition-all duration-500 hover:-translate-y-1.5 hover:bg-[#080d58] ${colSpan}`}
                >
                  <div>
                    <div className="clay-badge flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white shadow-sm">
                      {item.icon}
                    </div>

                    <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-white/70 leading-relaxed font-normal">
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
          INTERNAL LINKS (ABOVE CTA)
      ======================================================== */}
      <section className="relative py-20 border-t border-[#050849]/5 bg-[#f7f9fc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <span className="clay-badge-light inline-block border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#050849]">
              INTERNAL LINKS
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
                  className="clay-light group flex items-center justify-between rounded-[24px] border border-[#050849]/5 bg-white p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-base font-bold text-[#050849]">
                    {item.title}
                  </span>
                  <ArrowRight size={16} className="text-[#050849] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          FINAL CTA (COMPACT & SLEEK)
          Turn Technology Complexity into Business Advantage
      ======================================================== */}
      <section className="relative py-14 md:py-18 bg-[#050849] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute bottom-[-80px] -left-24 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="clay-light relative mx-auto overflow-hidden rounded-[28px] border border-white/10 bg-[#080d58]/70 p-8 sm:p-12 backdrop-blur-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
              Turn Technology Complexity into Business Advantage
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Talk to WeRoute about your next technology initiative, and get a technology partner who takes ownership from strategy through delivery and beyond.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="mailto:sales@weroute.ai"
                className="clay-badge group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#050849] shadow-md transition-all duration-300 hover:bg-[#f7f9fc] hover:-translate-y-0.5"
              >
                <span>Talk to Our Technology Experts</span>
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/solutions"
                className="clay-badge inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
              >
                <span>Explore Our Solutions</span>
                <ChevronRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: FREQUENTLY ASKED QUESTIONS (BELOW CTA)
      ======================================================== */}
      <section className="relative py-20 md:py-28 border-t border-[#050849]/5 bg-[#f7f9fc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
            
            {/* STICKY HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <span className="clay-badge-light inline-block border border-[#050849]/5 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#050849]">
                [ FREQUENTLY ASKED QUESTIONS ]
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#050849]">
                Frequently Asked Questions
              </h2>
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
