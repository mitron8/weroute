"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  Shield,
  Share2,
  Check,
  ChevronRight,
  Award,
  Layers,
  Cloud,
  CheckCircle2,
  DollarSign,
  TrendingDown
} from "lucide-react";
import CloudMigrationGatesDiagram from "./CloudMigrationGatesDiagram";
import CloudModernizationTriadDiagram from "./CloudModernizationTriadDiagram";
import FinopsOperatingCycleDiagram from "./FinopsOperatingCycleDiagram";
import BlogFaqAccordion from "./BlogFaqAccordion";

export default function CloudMigrationBlogDetail({ blog }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const migrationStrategiesRows = [
    {
      strategy: "Retire",
      what: "Decommission and shut down the application entirely",
      when: "Zombie workloads with <5% average CPU/memory or systems with no business owner"
    },
    {
      strategy: "Retain",
      what: "Keep it on-premises or in current hosting for now",
      when: "Data residency, strict regulatory compliance, or upcoming SaaS transition blocks the move"
    },
    {
      strategy: "Rehost",
      what: "Move it unchanged to cloud VMs (Lift and Shift)",
      when: "Rapid data center exit is required and the application architecture is proven and stable"
    },
    {
      strategy: "Relocate",
      what: "Move a platform as a whole (e.g. VMware cloud on AWS/Azure)",
      when: "The underlying hypervisor platform has a direct cloud equivalent without re-architecting"
    },
    {
      strategy: "Repurchase",
      what: "Drop custom code and replace with a commercial SaaS product",
      when: "Commodity functions (CRM, HR, ticketing) where maintaining custom code yields no competitive edge"
    },
    {
      strategy: "Replatform",
      what: "Lift, shift, and swap out a component (e.g. self-hosted DB to AWS RDS)",
      when: "Targeted managed service changes yield substantial operational and patching gains with minimal code impact"
    },
    {
      strategy: "Refactor",
      what: "Redesign the workload natively using microservices, containers & serverless",
      when: "Monolithic architecture actively chokes delivery speed, scalability, or customer-facing reliability"
    }
  ];

  return (
    <article className="relative min-h-screen bg-[#f8fafc] text-[#050849] pt-28 pb-20 selection:bg-blue-600 selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[450px] w-[800px] bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB NAVIGATION */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#050849]/60 mb-5">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
          <ChevronRight size={12} />
          <span className="text-blue-700">Cloud Migration</span>
        </nav>

        {/* HEADER BADGES */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
            <Shield size={12} />
            Web Content | SEO + GEO Optimised (Blog)
          </span>
          <span className="inline-flex items-center rounded-full bg-[#050849] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            BLOG | CLOUD MIGRATION
          </span>
        </div>

        {/* H1 HEADLINE */}
        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-[38px] lg:leading-tight font-extrabold tracking-tight text-[#050849]">
          Cloud Migration Is Not Just Moving Workloads: What Enterprises Need to Plan First
        </h1>

        {/* AUTHOR & META BAR */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-y border-slate-200 py-3 text-xs font-medium text-[#050849]/70">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 font-bold text-white text-[11px]">
                WR
              </div>
              <div>
                <span className="font-bold text-[#050849]">{blog.author || "WeRoute Cloud Practice"}</span>
                <span className="text-[11px] text-[#050849]/60 ml-2 hidden sm:inline">Cisco Partner</span>
              </div>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={13} className="text-blue-600" />
              <span>{blog.date || "Oct 21, 2026"}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={13} className="text-blue-600" />
              <span>{blog.readTime || "8 min read"}</span>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-[#050849] shadow-2xs hover:bg-slate-50 cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Share2 size={13} />
                <span>Share Guide</span>
              </>
            )}
          </button>
        </div>

        {/* INTRODUCTORY BODY (First 150 Words) */}
        <div className="mt-6 space-y-3.5 text-base sm:text-[17px] leading-relaxed text-[#050849]/85 font-normal">
          <p>
            A migration is a project and modernization is a capability. Most enterprises finish the project, declare success and then find that the cloud bill is higher than the data center it replaced. Nothing about how they operate has changed.
          </p>
          <p>
            Moving a virtual machine changes where it runs. It does not change how it scales, how it fails or how it is billed. Those behaviours come from planning, tooling and ownership.
          </p>
          <p>
            This guide covers cloud migration planning for enterprises. It explains why lift and shift disappoints, what to decide before anything moves, which three capabilities turn a migration into modernization, and how FinOps keeps the savings.
          </p>
          <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50/70 p-3.5 text-sm text-[#050849]">
            WeRoute is an enterprise technology services company and Cisco partner. Its cloud work covers migration planning, landing zone design and cloud operations for regulated and high-availability workloads.
          </div>
        </div>

        {/* AT A GLANCE CARD */}
        <div className="my-8 rounded-2xl border border-blue-200/90 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 p-5 sm:p-6 shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            AT A GLANCE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="rounded-xl bg-white p-3 border border-slate-200/80">
              <strong className="block text-[#050849] font-bold">Topic:</strong>
              <span className="text-slate-600">Cloud migration planning and modernization for enterprises</span>
            </div>
            <div className="rounded-xl bg-white p-3 border border-slate-200/80">
              <strong className="block text-[#050849] font-bold">Key Decision:</strong>
              <span className="text-slate-600">What each application needs before it moves, and who owns its cost afterward</span>
            </div>
            <div className="rounded-xl bg-white p-3 border border-slate-200/80">
              <strong className="block text-[#050849] font-bold">Plan First:</strong>
              <span className="text-slate-600">Disposition (7 Rs), dependencies, landing zone, data sequencing, cost model, compliance</span>
            </div>
            <div className="rounded-xl bg-white p-3 border border-slate-200/80">
              <strong className="block text-[#050849] font-bold">Build Next:</strong>
              <span className="text-slate-600">Infrastructure as Code, CI/CD discipline, observability and continuous FinOps</span>
            </div>
          </div>
        </div>

        {/* SECTION 1: Why does lift and shift disappoint? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Why does lift and shift disappoint?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Lift and shift moves an application with no changes. It is the fastest path, and it is a valid choice for some workloads. It also carries the old operating model into a billing model that punishes it.
          </p>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Four mechanisms explain most of the cloud migration cost surprise:
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="font-bold text-[#050849] mb-1">1. Instances Sized for Peak</h4>
              <p className="text-slate-600 leading-relaxed">
                On premises, capacity is sunk hardware cost. In the cloud, a server sized for the busiest hour of the year bills at peak rates every single hour of the year.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="font-bold text-[#050849] mb-1">2. Idle Non-Production Environments</h4>
              <p className="text-slate-600 leading-relaxed">
                Development and staging systems run around the clock, although engineering teams use them for a fraction of the working week.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="font-bold text-[#050849] mb-1">3. Orphaned Storage &amp; Snapshots</h4>
              <p className="text-slate-600 leading-relaxed">
                EBS/managed disk volumes and snapshots stay behind after the compute instance that attached them is decommissioned. They keep billing indefinitely.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="font-bold text-[#050849] mb-1">4. Unmodeled Egress Charges</h4>
              <p className="text-slate-600 leading-relaxed">
                Cloud providers bill for data leaving their network. Applications that talk to systems on premises or across multi-cloud environments generate unplanned egress bills from day one.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50/60 p-3.5 text-xs text-rose-950">
            <strong>The Delayed Shock:</strong> Migration project budgets cover initial movement. Full invoices arrive after cutover—long after the project delivery team has been disbanded. The resulting cost shock damages the credibility of future cloud modernization initiatives.
          </div>
        </section>

        {/* DIAGRAM 1: 6 GATES */}
        <CloudMigrationGatesDiagram />

        {/* SECTION 2: What should you plan before anything moves? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What should you plan before anything moves?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Cloud migration planning has six parts. Treat each as a gate. A workload does not move until its gate is passed:
          </p>

          {/* Subheading: How do you choose a strategy for each application? */}
          <div className="mt-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#050849]">
              How do you choose a strategy for each application?
            </h3>
            <p className="mt-2 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
              The 6 Rs of cloud migration started as five options in Gartner&apos;s research and grew over time. AWS now documents seven. Apply them per application, never per estate:
            </p>

            {/* COMPARISON TABLE: The 7 Rs */}
            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs overflow-hidden">
              <h4 className="text-sm font-bold text-[#050849] mb-3">
                The 7 Rs of Cloud Migration Strategy
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-[#050849]">
                      <th className="py-2.5 px-3 font-bold">Strategy</th>
                      <th className="py-2.5 px-3 font-bold">What It Means</th>
                      <th className="py-2.5 px-3 font-bold">When To Use It</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {migrationStrategiesRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-blue-700 whitespace-nowrap">{row.strategy}</td>
                        <td className="py-2.5 px-3 text-slate-700">{row.what}</td>
                        <td className="py-2.5 px-3 text-slate-600">{row.when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
              <strong>Three Core Rules:</strong> <strong>Retire first:</strong> AWS flags systems with average CPU and memory use under 5% as zombies. Moving them only adds waste. <strong>Refactor last:</strong> AWS calls refactoring the most complex option; advise it only when other options do not fit. <strong>Retain deliberately:</strong> Record compliance and residency reasons with explicit review dates.
            </div>
          </div>

          {/* Deep Dives into Gates */}
          <div className="mt-8 space-y-5">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#050849]">
                Why does dependency mapping come first?
              </h4>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                Every application talks to others. Some links are in documentation; others live in scheduled cron jobs, hard-coded IPs, or shared databases that nobody listed. A link missed during planning breaks at cutover. Use automated flow logs and process mapping to group interconnected services into cohesive <strong>Move Groups</strong>.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#050849]">
                What belongs in a landing zone?
              </h4>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                A landing zone is the governed foundation on which every workload lands (AWS Control Tower, Azure CAF). Decide account/subscription separation, IAM boundaries, network transit routing, security guardrails, and mandatory tagging before the first workload moves. Retrofitting tag standards across a live production estate is expensive and prone to outages.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#050849]">
                How do data gravity and sequencing shape the plan?
              </h4>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                Large data sets exert data gravity: applications that require low latency or high throughput cannot be split from their data stores across high-latency WAN links. Move an application and its database together in the same wave.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#050849]">
                How should you model cost before the move?
              </h4>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                Build target-state cost models per application before any move. Treat the model as an acceptance criterion: a migration wave is deemed successful only when measured production spend matches the model within an agreed tolerance.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#050849]">
                Which compliance rules apply?
              </h4>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                Regulated sectors (BFSI, healthcare) add requirements for data residency, customer encryption keys, and immutable audit logs. Verify the cloud provider&apos;s shared responsibility matrix before selecting target regions and PaaS services.
              </p>
            </div>
          </div>
        </section>

        {/* DIAGRAM 2: MODERNIZATION TRIAD */}
        <CloudModernizationTriadDiagram />

        {/* SECTION 3: Which three capabilities turn migration into modernization? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Which three capabilities turn migration into modernization?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Cloud modernization is a set of operating capabilities. Three of them decide whether the cloud delivers more than the data center did:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">1. Infrastructure as Code (IaC)</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Environments are rebuilt deterministically from version-controlled source (Terraform, OpenTofu). No one configures cloud consoles by hand. This eliminates configuration drift, enables peer-reviewed changes, and guarantees disaster recovery within minutes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">2. CI/CD and Deployment Discipline</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Elasticity requires releases that are frequent, automated, and safe. Without automated deployment pipelines, autoscaling cannot safely deploy new application instances. DORA metrics measure this discipline: deployment frequency, change lead time, change fail rate, and time to restore service.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">3. Unified Cloud Observability</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Cloud-native telemetry (distributed traces, metrics, logs, and egress flow records) must exist from day one. Our{" "}
                <Link href="/blogs/network-monitoring-vs-network-observability" className="font-bold text-blue-700 underline">
                  guide to network monitoring and observability
                </Link>{" "}
                explains the architecture.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: How does FinOps make the saving real and keep it? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does FinOps make the saving real and keep it?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            FinOps is an operating discipline. The FinOps Foundation defines it as an operational framework and cultural practice that maximizes the business value of cloud technology. Savings erode within a single quarter when no one owns them.
          </p>

          <div className="my-4 rounded-xl border border-blue-200 bg-blue-50/60 p-3.5 text-xs text-[#050849]">
            <strong>Industry Waste Benchmark:</strong> Flexera&apos;s 2026 State of the Cloud report estimates that <strong>29 percent</strong> of enterprise IaaS and PaaS spend is wasted. Cloud cost allocation and named ownership are the only durable barriers to this decay.
          </div>

          {/* DIAGRAM 3: FINOPS CYCLE */}
          <FinopsOperatingCycleDiagram />

          <div className="mt-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#050849]">
              Who owns the cost?
            </h3>
            <p className="mt-2 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
              Technical teams often skip the organizational question. Cloud cost allocation connects spend to engineering squads, and a cloud tagging strategy makes that possible. Three practices matter:
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <strong className="block text-[#050849] font-bold">1. Mandatory Tags</strong>
                <span className="text-slate-600">Application, owner, environment, and cost center enforced on every single resource at creation.</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <strong className="block text-[#050849] font-bold">2. Monthly Showback</strong>
                <span className="text-slate-600">Show each engineering team its own spend every month, paired with unit economics per transaction.</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <strong className="block text-[#050849] font-bold">3. Named Ownership</strong>
                <span className="text-slate-600">Every single cloud line-item has one accountable engineering manager. Untagged spend is reported as an audit defect.</span>
              </div>
            </div>
          </div>
        </section>

        {/* WEROUTE ENGAGEMENT CALLOUT BOX */}
        <section className="my-10 rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-[#050849] to-blue-950 p-6 sm:p-7 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />
          
          <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Award size={16} />
            <span>WEROUTE ENGAGEMENT • FINTECH CLOUD MIGRATION ON AWS</span>
          </div>

          <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-white">
            ~40% Cost Reduction &amp; 3x Scalability Realized
          </h3>

          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            One WeRoute FinTech migration ran on AWS using EC2, RDS and a VPC with CI/CD. It delivered roughly 40 percent cost reduction and 3x scalability. Three factors drive a result of this kind on that stack: capacity is sized to measured demand, autoscaling adds and removes instances with load, and automated pipelines make releases frequent enough to use that elasticity.
          </p>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-xs">
              <span className="block text-xl sm:text-2xl font-black text-[#B7F36B]">~40%</span>
              <span className="text-[11px] text-white/70">Cost Reduction</span>
            </div>
            <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-xs">
              <span className="block text-xl sm:text-2xl font-black text-white">3x</span>
              <span className="text-[11px] text-white/70">Peak Scalability</span>
            </div>
            <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-xs">
              <span className="block text-xl sm:text-2xl font-black text-[#B7F36B]">100%</span>
              <span className="text-[11px] text-white/70">IaC Provisioned</span>
            </div>
            <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-xs">
              <span className="block text-xl sm:text-2xl font-black text-white">99.9%</span>
              <span className="text-[11px] text-white/70">System Reliability</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: How does WeRoute help? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does WeRoute help?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            WeRoute plans and delivers cloud migrations for enterprises, from application assessment and landing zone design to CI/CD and cost governance. Our{" "}
            <Link
              href="/services/cloud-readiness-and-migration-strategy"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              Cloud Migration &amp; Modernization Services
            </Link>{" "}
            page describes the approach.{" "}
            <Link
              href="/services/managed-cloud-hybrid-environment-services"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              Managed Cloud Services
            </Link>{" "}
            covers continuous operation after cutover, and{" "}
            <Link
              href="/services/cloud-and-devops-implementation"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              DevOps &amp; CI/CD Services
            </Link>{" "}
            automates delivery pipelines and infrastructure testing.
          </p>

          <div className="mt-5 rounded-xl bg-gradient-to-r from-[#050849] to-blue-950 p-4 text-white flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold">
              WeRoute has delivered 40+ enterprise deployments with 99.9% system reliability.
            </span>
            <Award size={24} className="text-blue-300 shrink-0 ml-3" />
          </div>
        </section>

        {/* SECTION 6: Frequently asked questions */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849] mb-4">
            Frequently asked questions
          </h2>

          <BlogFaqAccordion faqs={blog.faqs} />
        </section>

        {/* SECTION 7: Plan Your Cloud Migration CTA */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-[#050849] p-6 sm:p-8 text-white shadow-xl relative">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Plan Your Cloud Migration
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Talk to WeRoute's cloud team about your applications, your dependencies and what to decide before the first workload moves.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#B7F36B] px-5 py-3 text-xs font-bold text-[#080357] shadow-md transition-transform hover:scale-102 hover:bg-white cursor-pointer"
              >
                <span>Talk to Our Cloud Team</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/cloud-readiness-and-migration-strategy"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-semibold text-white hover:bg-white/15"
              >
                <span>Explore Cloud Services</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: RELATED SERVICES & READING */}
        <section className="mt-12 border-t border-slate-200 pt-8 space-y-8">
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED SERVICES
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/services/cloud-readiness-and-migration-strategy"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    Cloud Migration &amp; Modernization
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-1">Landing zone architecture &amp; wave execution</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore Migration</span>
                  <ArrowRight size={13} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/services/managed-cloud-hybrid-environment-services"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    Managed Cloud Services
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-1">24/7 FinOps governance, monitoring &amp; SLA ops</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore Managed</span>
                  <ArrowRight size={13} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/services/cloud-and-devops-implementation"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    DevOps &amp; CI/CD Services
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-1">IaC pipelines, GitOps &amp; automated release controls</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore DevOps</span>
                  <ArrowRight size={13} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED READING
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/blogs/network-monitoring-vs-network-observability"
                className="group rounded-xl border border-blue-200 bg-blue-50/50 p-4 shadow-2xs hover:bg-blue-50 hover:border-blue-500 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-blue-700">Guide</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#050849] group-hover:text-blue-700 mt-0.5">
                    Network Monitoring vs Network Observability: What Enterprises Actually Need
                  </h4>
                </div>
                <ArrowRight size={14} className="text-blue-700 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </Link>
              <Link
                href="/blogs/legacy-network-to-modern-enterprise-network"
                className="group rounded-xl border border-blue-200 bg-blue-50/50 p-4 shadow-2xs hover:bg-blue-50 hover:border-blue-500 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-blue-700">Roadmap</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#050849] group-hover:text-blue-700 mt-0.5">
                    Legacy Network to Modern Enterprise Network: A Practical Modernization Roadmap
                  </h4>
                </div>
                <ArrowRight size={14} className="text-blue-700 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
