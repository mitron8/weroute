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
  Network,
  Cpu,
  CheckCircle2
} from "lucide-react";
import NetworkModernizationPhasesDiagram from "./NetworkModernizationPhasesDiagram";
import SpineLeafVsThreeTierDiagram from "./SpineLeafVsThreeTierDiagram";
import Ipv6MigrationSequenceDiagram from "./Ipv6MigrationSequenceDiagram";
import BlogFaqAccordion from "./BlogFaqAccordion";

export default function NetworkModernizationBlogDetail({ blog }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const comparisonRows = [
    {
      dimension: "Hop count between racks",
      threeTier: "Varies with the path through access, aggregation, and core",
      spineLeaf: "Constant: exactly 1 spine hop between any pair of leaf switches"
    },
    {
      dimension: "Best traffic pattern",
      threeTier: "North-south (between users and central data center)",
      spineLeaf: "East-west (high-throughput server-to-server and microservices)"
    },
    {
      dimension: "Loop control & links",
      threeTier: "Spanning Tree Protocol (STP) blocks redundant links (50% idle)",
      spineLeaf: "ECMP routed links (100% active, non-blocking fabric bandwidth)"
    },
    {
      dimension: "Failure domain",
      threeTier: "Larger: shared aggregation tier failure impacts multiple racks",
      spineLeaf: "Smaller: leaf serves single rack; 1 spine loss is minor capacity cut"
    },
    {
      dimension: "Scaling mechanism",
      threeTier: "Vertical upgrade of costly aggregation and core switch chassis",
      spineLeaf: "Horizontal scaling: add spines for bandwidth, leaves for ports"
    },
    {
      dimension: "Ideal enterprise fit",
      threeTier: "Small sites with stable footprints and mostly north-south traffic",
      spineLeaf: "Modern data centers with virtualized, distributed, and AI workloads"
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
          <span className="text-blue-700">Network Modernization</span>
        </nav>

        {/* HEADER BADGES */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
            <Shield size={12} />
            Web Content | SEO + GEO Optimised (Blog)
          </span>
          <span className="inline-flex items-center rounded-full bg-[#050849] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            BLOG | NETWORK MODERNIZATION
          </span>
        </div>

        {/* H1 HEADLINE */}
        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-[38px] lg:leading-tight font-extrabold tracking-tight text-[#050849]">
          Legacy Network to Modern Enterprise Network: A Practical Modernization Roadmap
        </h1>

        {/* AUTHOR & META BAR */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-y border-slate-200 py-3 text-xs font-medium text-[#050849]/70">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 font-bold text-white text-[11px]">
                WR
              </div>
              <div>
                <span className="font-bold text-[#050849]">{blog.author || "WeRoute Network Practice"}</span>
                <span className="text-[11px] text-[#050849]/60 ml-2 hidden sm:inline">Cisco Partner</span>
              </div>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={13} className="text-blue-600" />
              <span>{blog.date || "Oct 16, 2026"}</span>
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
            A forklift replacement of the network usually fails. A planned sequence of phases works. Enterprise network modernization goes in order: assess, redesign the fabric, move to IPv6, then automate and validate.
          </p>
          <p>
            Two transitions are the hardest. They are the fabric redesign and the IPv6 migration. This guide describes both, drawing on WeRoute engagements that completed them without downtime.
          </p>
          <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50/70 p-3.5 text-sm text-[#050849]">
            WeRoute is an enterprise technology services company and Cisco partner. Its network work covers data center fabric design, IPv6 migration and automation for enterprises.
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
              <span className="text-slate-600">How an enterprise moves from a legacy network to a modern one</span>
            </div>
            <div className="rounded-xl bg-white p-3 border border-slate-200/80">
              <strong className="block text-[#050849] font-bold">Sequence:</strong>
              <span className="text-slate-600">Assess, redesign the fabric, migrate to IPv6, then automate and validate</span>
            </div>
            <div className="rounded-xl bg-white p-3 border border-slate-200/80">
              <strong className="block text-[#050849] font-bold">First Step:</strong>
              <span className="text-slate-600">The assessment, when budget covers only one phase</span>
            </div>
            <div className="rounded-xl bg-white p-3 border border-slate-200/80">
              <strong className="block text-[#050849] font-bold">Core Rule:</strong>
              <span className="text-slate-600">Run old and new in parallel until the new side is validated</span>
            </div>
          </div>
        </div>

        {/* SECTION 1: What does legacy network actually mean? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What does legacy network actually mean?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            A legacy network is defined by its symptoms, and a five-year-old network can show all of them. Five symptoms come up most often:
          </p>

          <div className="mt-4 grid grid-cols-1 gap-2.5">
            {[
              {
                title: "Slow provisioning",
                desc: "Every change is a manual CLI operation on each device. A new segment takes days."
              },
              {
                title: "Configuration drift",
                desc: "No two switches are configured quite the same, and no authoritative source of truth exists."
              },
              {
                title: "Wrong design for the traffic",
                desc: "Three-tier architecture was built for north-south traffic between users and a data center. Virtualized and distributed applications moved most traffic east-west, between servers."
              },
              {
                title: "Spanning-tree limits and a large blast radius",
                desc: "Spanning tree blocks redundant links to prevent loops, so paid-for capacity sits idle. A change on a shared tier can affect a large part of the network, so every change is a risk event."
              },
              {
                title: "Address exhaustion",
                desc: "NAT sprawl postpones the IPv6 decision, and the decision costs more each year. ARIN depleted its free IPv4 pool on September 24, 2015."
              }
            ].map((symptom, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-700 font-bold text-xs mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#050849]">{symptom.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{symptom.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 italic">
            Each of these symptoms maps directly to a phase in the enterprise roadmap below.
          </p>
        </section>

        {/* DIAGRAM 1: 4-PHASE ROADMAP */}
        <NetworkModernizationPhasesDiagram />

        {/* SECTION 2: Phase 1: How should you assess before you design? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Phase 1: How should you assess before you design?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Assessment produces the baseline that every later phase is judged against:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">1. Traffic pattern analysis</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Measure the east-west to north-south ratio. The ratio decides whether a fabric redesign is needed at all.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">2. Configuration and standards audit</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Collect running configurations, find the drift and list which standards are actually followed.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">3. Dependency and application mapping</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Record which applications talk to which, and over what paths. An undocumented dependency is the most likely cause of a failed cutover.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">4. Target-state requirements in measurable terms</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Set targets for latency, provisioning time and failure domain size. A target such as &ldquo;provision a segment in under an hour&rdquo; can be proven later. A target such as &ldquo;a faster network&rdquo; cannot.
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-600">
            Baseline latency and traffic data come from telemetry. Our{" "}
            <Link href="/blogs/network-monitoring-vs-network-observability" className="font-bold text-blue-700 underline">
              guide to monitoring and observability
            </Link>{" "}
            covers what to collect.
          </p>
        </section>

        {/* SECTION 3: Phase 2: Is spine-leaf better than three-tier? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Phase 2: Is spine-leaf better than three-tier?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Spine-leaf architecture suits most growing data centers. Three-tier still works in some places. In a spine-leaf fabric, every leaf switch connects to every spine switch, and servers attach to leaves. Any two leaves are exactly one spine apart. Latency becomes predictable, and capacity grows simply by adding switches.
          </p>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Three-tier remains adequate in three cases:
          </p>

          <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-5">
            <li>A small site with a stable footprint and few racks.</li>
            <li>Traffic that is still mostly north-south.</li>
            <li>Hardware with years of useful life left and no pressure on latency or provisioning time.</li>
          </ul>

          <p className="mt-2 text-xs text-slate-600 italic">
            In these cases a fabric adds cost and complexity for little return. The Phase 1 assessment shows which case applies.
          </p>

          {/* DIAGRAM 2: SPINE-LEAF VS THREE-TIER */}
          <SpineLeafVsThreeTierDiagram />

          {/* COMPARISON TABLE */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs overflow-hidden">
            <h4 className="text-sm font-bold text-[#050849] mb-3">
              Three-Tier vs Spine-Leaf Architecture Trade-offs
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[#050849]">
                    <th className="py-2.5 px-3 font-bold">Dimension</th>
                    <th className="py-2.5 px-3 font-bold text-amber-900">Three-Tier Architecture</th>
                    <th className="py-2.5 px-3 font-bold text-blue-900">Spine-Leaf Clos Fabric</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-2.5 px-3 font-semibold text-[#050849] whitespace-nowrap">{row.dimension}</td>
                      <td className="py-2.5 px-3 text-slate-600">{row.threeTier}</td>
                      <td className="py-2.5 px-3 text-slate-700 font-medium">{row.spineLeaf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Subheading: What do EVPN VXLAN overlays add? */}
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-bold text-[#050849]">
              What do EVPN VXLAN overlays add?
            </h3>
            <p className="mt-2 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
              VXLAN carries layer 2 segments across an IP network by wrapping frames in UDP packets. EVPN is the BGP-based control plane that tells each switch where every host lives. Together they separate the overlay (which holds tenant and application networks) from the underlay (which is the IP transport between switches).
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <strong className="block text-blue-700 font-bold mb-1">1. Workload Mobility</strong>
                <span className="text-slate-600">A workload keeps its IP and MAC address when moving between racks. EVPN dynamically tracks the move.</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <strong className="block text-blue-700 font-bold mb-1">2. Network Segmentation</strong>
                <span className="text-slate-600">VRFs create isolated tenant networks across the whole fabric without sprawling VLANs.</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <strong className="block text-blue-700 font-bold mb-1">3. Flood Suppression</strong>
                <span className="text-slate-600">Leaf switches suppress ARP flooding because EVPN already advertises and distributes host MAC addresses.</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <strong className="block text-blue-700 font-bold mb-1">4. Decoupled Simple Underlay</strong>
                <span className="text-slate-600">The underlay only carries IP between switches. Changing tenant networks never touches the core routing underlay.</span>
              </div>
            </div>
          </div>

          {/* Subheading: Why does BGP replace spanning tree in the underlay? */}
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-bold text-[#050849]">
              Why does BGP replace spanning tree in the underlay?
            </h3>
            <p className="mt-2 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
              Spanning tree builds one loop-free path and blocks the rest. A routed underlay uses every link. A BGP underlay is the industry standard choice for the data center control plane. RFC 7938 documents its use in data centers with over 100,000 servers and gives several reasons:
            </p>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-5">
              <li><strong>Simplicity:</strong> BGP runs over standard TCP and avoids the complex adjacency logic of link-state protocols.</li>
              <li><strong>Limited churn:</strong> Each router passes on only its best path, so a link failure is hidden once a backup path is converged.</li>
              <li><strong>Path control:</strong> Structured AS numbering and AS_PATH loop detection prevent unwanted path hunting.</li>
              <li><strong>One session type:</strong> With an eBGP underlay, the same BGP sessions can carry EVPN address families, so one protocol serves both layers.</li>
            </ul>
          </div>
        </section>

        {/* WEROUTE ENGAGEMENT CALLOUT BOX */}
        <section className="my-10 rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-[#050849] to-blue-950 p-6 sm:p-7 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />
          
          <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Award size={16} />
            <span>WEROUTE ENGAGEMENT • SPINE-LEAF FABRIC ON ARISTA</span>
          </div>

          <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-white">
            35–40% Latency Drop &amp; Under-1-Hour Provisioning
          </h3>

          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            WeRoute delivered a spine-leaf EVPN-VXLAN fabric on Arista EOS, managed through CloudVision. Average network latency fell 35 to 40% against the previous three-tier design, measured under comparable traffic. Provisioning dropped from days to under an hour. The latency gain came mainly from the fabric design, with more predictable forwarding paths and better east-west handling.
          </p>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-xs">
              <span className="block text-xl sm:text-2xl font-black text-[#B7F36B]">35-40%</span>
              <span className="text-[11px] text-white/70">Lower Latency</span>
            </div>
            <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-xs">
              <span className="block text-xl sm:text-2xl font-black text-white">&lt; 1 Hour</span>
              <span className="text-[11px] text-white/70">Segment Provisioning</span>
            </div>
            <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-xs">
              <span className="block text-xl sm:text-2xl font-black text-[#B7F36B]">70-75%</span>
              <span className="text-[11px] text-white/70">IPv6 Adoption</span>
            </div>
            <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-xs">
              <span className="block text-xl sm:text-2xl font-black text-white">Zero</span>
              <span className="text-[11px] text-white/70">Service Downtime</span>
            </div>
          </div>
        </section>

        {/* SECTION 4: Phase 3: How do you move to IPv6 without downtime? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Phase 3: How do you move to IPv6 without downtime?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Dual-stack is the pragmatic path. A big-bang cutover is a risky bet on one change window. Hosts and routers run IPv4 and IPv6 side by side, as RFC 4213 defines it. Nothing is switched off, so IPv4 stays available as a fallback.
          </p>

          <div className="my-4 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-700">
            <strong>Global Reality:</strong> The Internet Society reported that native IPv6 access to Google passed 50% for the first time on March 28, 2026. Delaying IPv6 adds translation overhead and increases NAT sprawl debt.
          </div>

          {/* DIAGRAM 3: IPV6 SEQUENCING */}
          <Ipv6MigrationSequenceDiagram />

          <div className="mt-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#050849]">
              What made zero downtime possible?
            </h3>
            <p className="mt-2 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
              This is the part most engineering teams want to see. Four practices made zero downtime possible in the WeRoute engagement:
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <strong className="block text-[#050849] font-bold">1. IPv4 stayed in place</strong>
                <span className="text-slate-600">Dual-stack added IPv6 and removed nothing. IPv4 connectivity ran throughout, serving as instantaneous fallback.</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <strong className="block text-[#050849] font-bold">2. Small, bounded steps</strong>
                <span className="text-slate-600">The sequence moved from addressing plan to core, edge and services. A fault in one step affected only a limited segment.</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <strong className="block text-[#050849] font-bold">3. Validation gates before progress</strong>
                <span className="text-slate-600">Routing, DNS, connectivity and application telemetry checks passed at each phase before the next began.</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                <strong className="block text-[#050849] font-bold">4. NAT64 and DNS64 bridge</strong>
                <span className="text-slate-600">DNS64 synthesizes an AAAA record from an A record (RFC 6147, prefix 64:ff9b::/96) so IPv6-only clients can reach IPv4-only services.</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500 italic">
              The result was 70 to 75% IPv6 adoption, defined as eligible enterprise devices enabled for IPv6.
            </p>
          </div>
        </section>

        {/* SECTION 5: Phase 4: What does automation add after the redesign? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Phase 4: What does automation add after the redesign?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Automation is the payoff of the earlier phases. Standardizing the network fabric makes it programmable.
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">Standard configuration templates</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Every device of a given role is built from one template and one data model. Configuration drift ends at the source, because a manual edit that departs from the template shows up immediately as a diff to correct.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">Automated provisioning</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                A new leaf or segment is built from the template, so a site change no longer needs a device-by-device CLI session.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">Pre-change validation</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Arista CloudVision Studios holds changes in a workspace until they are submitted, then creates a change control. Pre-deployment validation checks that the modeled state is what will be deployed.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/70 p-3 text-xs text-[#050849]">
            Provisioning in under an hour is possible only because both parts exist: templates remove the manual build, and automated validation checks the change before it reaches a live device.
          </div>
        </section>

        {/* SECTION 6: What should you do first, and how do you stay safe during migration? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What should you do first, and how do you stay safe during migration?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            When budget covers only one phase, fund the assessment. It is the cheapest phase. It stops a wrong design, such as an expensive fabric where traffic is mostly north-south. It also creates the baseline that proves ROI later.
          </p>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed font-semibold">
            Coexistence keeps the migration safe. Five rules govern each migration window:
          </p>

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <strong className="block text-[#050849] font-bold">1. Move by application group</strong>
              <span className="text-slate-600">Use the dependency map to decide which workloads move together.</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <strong className="block text-[#050849] font-bold">2. Write the rollback first</strong>
              <span className="text-slate-600">Every window has a defined and rehearsed way back before it starts.</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <strong className="block text-[#050849] font-bold">3. Freeze unrelated changes</strong>
              <span className="text-slate-600">Fewer changes in flight means fewer unknowns during cutover.</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <strong className="block text-[#050849] font-bold">4. Validate before closing</strong>
              <span className="text-slate-600">Check routing, DNS, connectivity and telemetry against Phase 1 targets.</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 sm:col-span-2">
              <strong className="block text-[#050849] font-bold">5. Retire legacy last</strong>
              <span className="text-slate-600">Remove old equipment only after a validation soak period on the new network.</span>
            </div>
          </div>
        </section>

        {/* SECTION 7: How does WeRoute help? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does WeRoute help?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            WeRoute plans and delivers enterprise network modernization, from assessment through fabric redesign, IPv6 migration and automation. Our{" "}
            <Link
              href="/services/network-integration-and-modernization"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              Enterprise Network Integration Services
            </Link>{" "}
            page describes the approach.{" "}
            <Link
              href="/services/managed-network-services"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              Managed Network Services
            </Link>{" "}
            covers day-to-day operation of the new network, and{" "}
            <Link
              href="/services/managed-data-centre-services"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              Managed Data Centre Services
            </Link>{" "}
            covers the data center infrastructure.
          </p>

          <div className="mt-5 rounded-xl bg-gradient-to-r from-[#050849] to-blue-950 p-4 text-white flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold">
              WeRoute has delivered 40+ enterprise deployments with 99.9% system reliability.
            </span>
            <Award size={24} className="text-blue-300 shrink-0 ml-3" />
          </div>
        </section>

        {/* SECTION 8: Frequently asked questions */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849] mb-4">
            Frequently asked questions
          </h2>

          <BlogFaqAccordion faqs={blog.faqs} />
        </section>

        {/* SECTION 9: Plan Your Network Modernization CTA */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-[#050849] p-6 sm:p-8 text-white shadow-xl relative">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Plan Your Network Modernization
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Talk to WeRoute's network team about your traffic patterns, your fabric and your path to IPv6.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#B7F36B] px-5 py-3 text-xs font-bold text-[#080357] shadow-md transition-transform hover:scale-102 hover:bg-white cursor-pointer"
              >
                <span>Talk to Our Network Team</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/network-integration-and-modernization"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-semibold text-white hover:bg-white/15"
              >
                <span>Explore Network Services</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: RELATED SERVICES & READING */}
        <section className="mt-12 border-t border-slate-200 pt-8 space-y-8">
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED SERVICES
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/services/network-integration-and-modernization"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    Enterprise Network Integration
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-1">Data center fabric redesign &amp; campus integration</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore Integration</span>
                  <ArrowRight size={13} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/services/managed-network-services"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    Managed Network Services
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-1">24/7 continuous operations, telemetry &amp; support</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore Managed</span>
                  <ArrowRight size={13} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/services/managed-data-centre-services"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    Managed Data Centre Services
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-1">Infrastructure hosting, fabrics, power &amp; cooling</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore Data Centre</span>
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
                href="/blogs/sd-wan-multi-site-enterprises"
                className="group rounded-xl border border-blue-200 bg-blue-50/50 p-4 shadow-2xs hover:bg-blue-50 hover:border-blue-500 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-blue-700">Guide</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#050849] group-hover:text-blue-700 mt-0.5">
                    SD-WAN for Multi-Site Enterprises: Architecture, Security and Business Value
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
