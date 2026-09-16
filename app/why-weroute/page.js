import React from "react";
import Link from "next/link";
import {
  Activity,
  Code2,
  Shield,
  Wifi,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Lock,
  Layers,
  Zap,
  TrendingUp,
  Cpu,
  Target,
  ChevronRight
} from "lucide-react";

export const metadata = {
  title: "Why WeRoute | Architecture-First Enterprise Technology Partner",
  description:
    "Discover why leading enterprises choose WeRoute for vendor-agnostic architecture, secure-by-design systems, enterprise SLA delivery, and end-to-end operational clarity.",
};

export default function WhyWeRoutePage() {
  const metrics = [
    { value: "100%", label: "SLA-Backed Delivery", sub: "Strict milestones & accountable execution" },
    { value: "Zero", label: "Vendor Lock-in", sub: "Outcome-driven, interoperable stacks" },
    { value: "24/7", label: "Security & Operations", sub: "Proactive monitoring & SOC coverage" },
    { value: "99.99%", label: "Platform Reliability", sub: "Resilient, cloud-native architecture" },
  ];

  const pillars = [
    {
      id: "enterprise-delivery",
      badge: "PILLAR 01",
      icon: <Activity className="h-6 w-6 text-emerald-600" />,
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      title: "Enterprise Delivery",
      tagline: "Predictable, SLA-driven execution with zero scope creep.",
      desc: "We bridge the gap between high-level IT strategy and ground-level execution. With rigorous agile governance, clear milestone reviews, and automated CI/CD pipelines, our delivery is consistent, measurable, and on time.",
      highlights: [
        "Iterative sprint planning with guaranteed response SLAs",
        "Transparent stakeholder reporting & milestone dashboards",
        "Automated QA, test automation, and code peer reviews",
        "Strict change control & risk mitigation frameworks",
      ],
      detailLink: "/enterprise-delivery",
    },
    {
      id: "vendor-agnostic",
      badge: "PILLAR 02",
      icon: <Code2 className="h-6 w-6 text-blue-600" />,
      iconBg: "bg-blue-500/10 border-blue-500/20",
      title: "Vendor-Agnostic Architecture",
      tagline: "Technology selected for your outcomes, never for commission.",
      desc: "Too many enterprises find themselves trapped in proprietary ecosystems. We evaluate and recommend technologies purely based on performance, scalability, total cost of ownership, and business alignment.",
      highlights: [
        "Freedom to migrate across AWS, Azure, GCP, or on-premise",
        "Open APIs, microservices, and industry standard protocols",
        "Lower long-term licensing fees & technical debt mitigation",
        "Negotiation independence with third-party software vendors",
      ],
      detailLink: "/vendor-agnostic",
    },
    {
      id: "secure-design",
      badge: "PILLAR 03",
      icon: <Shield className="h-6 w-6 text-violet-600" />,
      iconBg: "bg-violet-500/10 border-violet-500/20",
      title: "Secure by Design",
      tagline: "Security and compliance embedded from day one.",
      desc: "Security cannot be an afterthought bolted on before deployment. We incorporate Zero Trust architecture, identity governance, vulnerability scanning, and regulatory compliance into the very fabric of every architecture.",
      highlights: [
        "Zero Trust network segmentation & least-privilege access",
        "Regulatory compliance alignment (SOC2, ISO 27001, HIPAA, GDPR)",
        "Automated DevSecOps pipelines with dependency auditing",
        "Continuous threat monitoring and vulnerability remediation",
      ],
      detailLink: "/secure-design",
    },
    {
      id: "operational-clarity",
      badge: "PILLAR 04",
      icon: <Wifi className="h-6 w-6 text-amber-600" />,
      iconBg: "bg-amber-500/10 border-amber-500/20",
      title: "Operational Clarity",
      tagline: "Full-stack visibility, telemetry, and proactive optimization.",
      desc: "Eliminate operational blind spots. We deploy unified telemetry, distributed tracing, and intelligent incident response systems that empower IT leaders with real-time insight into health, performance, and costs.",
      highlights: [
        "Unified observability dashboards across cloud & on-prem",
        "Predictive alert management that reduces alert fatigue",
        "Root cause analysis workflows that speed MTTR drastically",
        "Resource utilization optimization and cloud cost governance",
      ],
      detailLink: "/operational-clarity",
    },
    {
      id: "scalable-systems",
      badge: "PILLAR 05",
      icon: <Cloud className="h-6 w-6 text-cyan-600" />,
      iconBg: "bg-cyan-500/10 border-cyan-500/20",
      title: "Scalable Systems",
      tagline: "Engineered for elastic growth, resilience, and high throughput.",
      desc: "Whether handling millions of concurrent requests or expanding globally, our architectures scale horizontally and automatically without performance degradation or astronomical cost spikes.",
      highlights: [
        "Containerized Kubernetes & serverless workloads",
        "Multi-region failover and active-active redundancy",
        "Low-latency caching, edge computing, and global CDNs",
        "Stress-tested throughput capable of sudden traffic spikes",
      ],
      detailLink: "/scalable-systems",
    },
  ];

  const comparisons = [
    {
      feature: "Technology Selection",
      traditional: "Push proprietary partnerships & vendor quotas",
      weroute: "100% vendor-agnostic, chosen strictly for your needs",
    },
    {
      feature: "Delivery Model",
      traditional: "Fragmented handoffs between strategy & developers",
      weroute: "Unified cross-functional team accountable end-to-end",
    },
    {
      feature: "Security Integration",
      traditional: "Audited at the end, causing delays & vulnerabilities",
      weroute: "Zero Trust architecture embedded into every design phase",
    },
    {
      feature: "Governance & SLAs",
      traditional: "Vague time-and-materials with frequent scope creep",
      weroute: "Strict SLA contracts, fixed milestone tracking, full clarity",
    },
    {
      feature: "Long-Term Support",
      traditional: "Hands off after deployment with minimal knowledge transfer",
      weroute: "Continuous monitoring, managed services, and ongoing tuning",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategic Discovery",
      desc: "Comprehensive evaluation of your infrastructure, pain points, security baseline, and business targets.",
    },
    {
      step: "02",
      title: "Architecture Blueprint",
      desc: "Designing vendor-agnostic, resilient, and secure system diagrams before writing a single line of code.",
    },
    {
      step: "03",
      title: "Governed Execution",
      desc: "SLA-backed agile sprints with continuous integration, automated testing, and milestone check-ins.",
    },
    {
      step: "04",
      title: "Managed Evolution",
      desc: "24/7 observability, proactive incident management, and continuous performance and cost optimization.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#f7f9fc] text-[#052440] pt-28 pb-20 overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-[#080357]/5 blur-[120px]" />
        <div className="absolute right-[-10%] top-[40%] h-[600px] w-[600px] rounded-full bg-[#0d5ea8]/6 blur-[150px]" />
        <div className="absolute left-[20%] bottom-20 h-[450px] w-[450px] rounded-full bg-[#A7BF73]/8 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ================= HERO SECTION ================= */}
        <div className="pt-10 pb-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#050849]/10 bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#080357] shadow-sm backdrop-blur-md">
            <Shield className="h-3.5 w-3.5 text-[#0d5ea8]" />
            Why Choose WeRoute
          </div>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-[#080357] sm:text-5xl lg:text-6xl leading-[1.12]">
            Architecture, Execution & Security{" "}
            <span className="bg-gradient-to-r from-[#080357] via-[#0d5ea8] to-[#6d9e36] bg-clip-text text-transparent">
              Working as One
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#052440]/70 max-w-3xl mx-auto">
            WeRoute combines consulting-first strategy, vendor-agnostic architecture, and SLA-driven execution into a single accountable delivery model for enterprise environments.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#050849] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#050849]/15 transition-all duration-300 hover:bg-[#080357] hover:scale-105"
            >
              Consult an Architect
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#pillars"
              className="inline-flex items-center gap-2 rounded-full border border-[#050849]/15 bg-white/80 px-8 py-4 text-sm font-semibold text-[#050849] shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white hover:border-[#050849]/30"
            >
              Explore Our Pillars
            </a>
          </div>
        </div>

        {/* ================= METRICS STRIP ================= */}
        <div className="my-12 rounded-[32px] border border-[#050849]/10 bg-white/90 p-8 sm:p-12 shadow-sm backdrop-blur-md">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#050849]/10">
            {metrics.map((metric, i) => (
              <div key={metric.label} className={`${i > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#080357]">
                  {metric.value}
                </div>
                <div className="mt-2 text-base font-bold text-[#052440]">
                  {metric.label}
                </div>
                <div className="mt-1 text-xs text-[#052440]/60">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PILLARS SECTION ================= */}
        <div id="pillars" className="pt-20 pb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full border border-[#050849]/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#080357]">
              The Core Pillars
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#080357]">
              Engineered for Enterprise Demands
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#052440]/70">
              Every system we design, deploy, and manage is anchored by five fundamental delivery principles.
            </p>
          </div>

          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className="group relative rounded-[32px] border border-[#050849]/10 bg-white p-8 sm:p-12 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#050849]/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Icon & Header */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${pillar.iconBg}`}>
                        {pillar.icon}
                      </div>
                      <span className="text-xs font-extrabold tracking-[0.2em] text-[#050849]/40 uppercase">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#080357] mt-3">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#0d5ea8]">
                      {pillar.tagline}
                    </p>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#052440]/70">
                      {pillar.desc}
                    </p>

                    <div className="mt-6">
                      <Link
                        href={pillar.detailLink}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#080357] transition-all hover:text-[#0d5ea8] group-hover:translate-x-1"
                      >
                        Deep dive into {pillar.title}
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Highlights Checklist */}
                  <div className="lg:col-span-7 bg-[#f7f9fc] rounded-2xl p-6 sm:p-8 border border-[#050849]/5">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#050849]/50 mb-4">
                      What This Delivers To Your Enterprise
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pillar.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          </div>
                          <span className="text-sm font-medium leading-snug text-[#052440]/80">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= COMPARISON TABLE ================= */}
        <div className="pt-16 pb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full border border-[#050849]/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#080357]">
              The Difference
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#080357]">
              Traditional IT Vendors vs. WeRoute
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#052440]/70">
              Why leading enterprises leave rigid vendor retainers for our agile, accountable partnership.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#050849]/10 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#050849]/10 bg-[#fafafa]">
                    <th className="py-5 px-6 sm:px-8 text-xs font-bold uppercase tracking-[0.2em] text-[#050849]/50 w-1/3">
                      Core Dimension
                    </th>
                    <th className="py-5 px-6 sm:px-8 text-xs font-bold uppercase tracking-[0.2em] text-[#050849]/40 w-1/3">
                      Traditional Vendors
                    </th>
                    <th className="py-5 px-6 sm:px-8 text-xs font-bold uppercase tracking-[0.2em] text-[#080357] bg-[#050849]/5 w-1/3">
                      The WeRoute Model
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#050849]/10 text-sm">
                  {comparisons.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#f7f9fc]/50 transition-colors">
                      <td className="py-5 px-6 sm:px-8 font-bold text-[#052440]">
                        {row.feature}
                      </td>
                      <td className="py-5 px-6 sm:px-8 text-[#052440]/60">
                        {row.traditional}
                      </td>
                      <td className="py-5 px-6 sm:px-8 font-semibold text-[#080357] bg-[#050849]/[0.02]">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.weroute}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ================= DELIVERY METHODOLOGY ================= */}
        <div className="pt-8 pb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center rounded-full border border-[#050849]/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#080357]">
              Our Methodology
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#080357]">
              How We Turn Strategy Into Reality
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#052440]/70">
              A structured lifecycle that minimizes deployment risk while maximizing ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-[28px] border border-[#050849]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
              >
                <div className="text-3xl font-black text-[#0d5ea8]/30">
                  {step.step}
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#080357]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#052440]/65">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="rounded-[40px] bg-gradient-to-br from-[#080357] via-[#050849] to-[#041a33] p-10 sm:p-16 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#0d5ea8]/30 blur-[90px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#A7BF73]/20 blur-[90px]" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B7F36B]">
              Ready To Modernize?
            </span>

            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s Build Resilient Architecture Together.
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70">
              Talk directly with an enterprise architect. Discover how our vendor-agnostic, SLA-driven approach transforms your IT infrastructure and operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#B7F36B] px-8 py-4 text-sm font-bold text-[#080357] transition-all duration-300 hover:bg-white hover:scale-105"
              >
                Schedule Architecture Review
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
