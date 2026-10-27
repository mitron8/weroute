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
  CheckCircle2,
  Lock,
  Wifi
} from "lucide-react";
import SdWanArchitecturePlanesDiagram from "./SdWanArchitecturePlanesDiagram";
import DirectBreakoutVsTromboneDiagram from "./DirectBreakoutVsTromboneDiagram";
import SdWanMigrationWavesDiagram from "./SdWanMigrationWavesDiagram";
import BlogFaqAccordion from "./BlogFaqAccordion";

export default function SdWanBlogDetail({ blog }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const securityOptionsRows = [
    {
      option: "On-box NGFW",
      where: "On the branch edge router appliance",
      strength: "Inspects traffic right at the branch boundary with zero additional cloud latency hop",
      limit: "Must be sized and licensed per hardware box; remote teleworkers and roaming laptops are not covered"
    },
    {
      option: "Cloud-delivered security",
      where: "In a security provider cloud (SWG or Firewall-as-a-Service)",
      strength: "One uniform security policy for all branches without appliance hardware load at sites",
      limit: "Traffic takes an extra network hop to the nearest PoP; provider regional PoP coverage is critical"
    },
    {
      option: "SASE / SSE",
      where: "Converged cloud platform uniting SWG, CASB, ZTNA & FWaaS",
      strength: "Universal identity and zero-trust policy for branches, remote workers, and multi-cloud applications",
      limit: "Requires a broader enterprise transformation program across both network and identity operations"
    }
  ];

  return (
    <article className="relative min-h-screen bg-[#f8fafc] text-[#050849] pt-28 pb-20 selection:bg-blue-600 selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[450px] w-[800px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB NAVIGATION */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#050849]/60 mb-5">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
          <ChevronRight size={12} />
          <span className="text-blue-700">SD-WAN &amp; SASE</span>
        </nav>

        {/* HEADER BADGES */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
            <Shield size={12} />
            Web Content | SEO + GEO Optimised (Blog)
          </span>
          <span className="inline-flex items-center rounded-full bg-[#050849] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            BLOG | SD-WAN
          </span>
        </div>

        {/* H1 HEADLINE */}
        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-[38px] lg:leading-tight font-extrabold tracking-tight text-[#050849]">
          SD-WAN for Multi-Site Enterprises: Architecture, Security and Business Value
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
              <span>{blog.date || "Oct 19, 2026"}</span>
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
            SD-WAN is usually sold as an MPLS cost-saving exercise. The saving is real but secondary. The decision that matters is how branch traffic reaches cloud applications and who inspects it on the way.
          </p>
          <p>
            Get that wrong and you have bought a faster path to an unprotected internet edge.
          </p>
          <p>
            This guide covers SD-WAN architecture, security and business value for multi-site enterprises. It explains why the traditional WAN broke, how SD-WAN works, where SD-WAN ends and SASE begins, and what to measure before and after.
          </p>
          <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50/70 p-3.5 text-sm text-[#050849]">
            WeRoute is an enterprise technology services company and Cisco partner. Its network work covers WAN design, SD-WAN and managed network operations for multi-site enterprises.
          </div>
        </div>

        {/* AT A GLANCE CARD */}
        <div className="my-8 rounded-2xl border border-blue-200/90 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/30 p-5 sm:p-6 shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            AT A GLANCE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="rounded-xl bg-white p-3 border border-slate-200/80">
              <strong className="block text-[#050849] font-bold">Topic:</strong>
              <span className="text-slate-600">SD-WAN architecture, security and business value for multi-site enterprises</span>
            </div>
            <div className="rounded-xl bg-white p-3 border border-slate-200/80">
              <strong className="block text-[#050849] font-bold">Key Decision:</strong>
              <span className="text-slate-600">How branch traffic reaches cloud applications, and where it is inspected</span>
            </div>
            <div className="rounded-xl bg-white p-3 border border-slate-200/80">
              <strong className="block text-[#050849] font-bold">Security Options:</strong>
              <span className="text-slate-600">On-box NGFW, cloud-delivered security, or converged SASE/SSE</span>
            </div>
            <div className="rounded-xl bg-white p-3 border border-slate-200/80">
              <strong className="block text-[#050849] font-bold">What to Measure:</strong>
              <span className="text-slate-600">Circuit cost, site provisioning time, application latency and operational effort</span>
            </div>
          </div>
        </div>

        {/* SECTION 1: Why did the traditional WAN break? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Why did the traditional WAN break?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            The traditional WAN was built on one assumption: applications lived in a central data center. Branches reached it over MPLS, and internet access ran through the same centralized hub. Three fundamental shifts broke that design:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">1. The Trombone Effect</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Cloud-bound traffic from a branch travels over MPLS to a central site, passes through the central security stack and only then exits to the internet. The return path repeats the detour. Each leg adds round-trip time, so SaaS pages load slowly.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">2. MPLS Economics and Lead Times</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Carriers provision dedicated MPLS circuits. A new site waits 60 to 90 days for a circuit, and a changed site waits for a carrier change order. Sites now open, move and close much faster than that cycle.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h4 className="text-sm font-bold text-[#050849]">3. A Shift in Traffic Destination</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Traffic once went to applications hosted in the data center. More than 70% of enterprise traffic now goes directly to SaaS platforms and public clouds.
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 italic">
            The SD-WAN vs MPLS comparison covers topology as well as price. MPLS moves traffic efficiently to a hub that most modern applications no longer use.
          </p>
        </section>

        {/* DIAGRAM 1: DIRECT BREAKOUT VS TROMBONE */}
        <DirectBreakoutVsTromboneDiagram />

        {/* SECTION 2: How does SD-WAN architecture actually work? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does SD-WAN architecture actually work?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            SD-WAN splits the control plane from the data plane. A central controller builds the topology and distributes routes and policy. Edge devices at each site forward packets according to those instructions. Cisco&apos;s design guide, for example, describes four planes: orchestration, management, control and data.
          </p>

          {/* DIAGRAM 2: 4 PLANES OF ARCHITECTURE */}
          <SdWanArchitecturePlanesDiagram />

          <div className="mt-6 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#050849]">
              How does transport independence work?
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
              The overlay is a set of encrypted tunnels, commonly IPsec, running over any underlay. MPLS, broadband and LTE or 5G form a shared pool of transports. Central policy chooses among them for each application class dynamically.
            </p>

            <h3 className="text-lg sm:text-xl font-bold text-[#050849] pt-2">
              What is application-aware routing?
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
              Application-aware routing sends each application over the best available path. It needs three things: a way to identify the application (DPI), a continuous measurement of every path, and a rule that links the two. Edge devices send synthetic probes through each tunnel and measure packet loss, latency and jitter. Policy sets thresholds: voice gets a tight threshold and bulk transfer a loose one.
            </p>

            <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-950">
              <strong className="font-bold">Real Limits of Dynamic Path Selection:</strong>
              <ul className="mt-1 space-y-1 list-disc pl-4">
                <li><strong>Measurement lag:</strong> Probes are averaged. Default settings in some platforms average the last hour of probes, so a brief brownout can pass unnoticed until timers are tuned.</li>
                <li><strong>No better path:</strong> When every available circuit degrades simultaneously, the system can only pick the least bad path or drop traffic if strict policy dictates.</li>
              </ul>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#050849] pt-2">
              What does Zero Touch Provisioning (ZTP) remove?
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
              Zero touch provisioning lets an edge device configure itself on a new site: power up, discover controller via cloud redirect, authenticate identity certificates, and download configuration. This removes manual configuration sessions by on-site network engineers. It does not remove circuit lead times, site surveys, or the template engineering.
            </p>
          </div>
        </section>

        {/* SECTION 3: Why does SD-WAN security decide whether the project succeeds? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Why does SD-WAN security decide whether the project succeeds?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Direct internet breakout sends branch traffic to the internet from the branch itself. That removes the central inspection point. Every branch becomes an internet edge. Without security at the branch, malware, data loss and policy bypass all become branch-level risks.
          </p>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Direct internet breakout is still the right design for most SaaS traffic. The answer is to place inspection where the traffic exits. Three options exist:
          </p>

          {/* SECURITY COMPARISON TABLE */}
          <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs overflow-hidden">
            <h4 className="text-sm font-bold text-[#050849] mb-3">
              Inspection Placement Trade-Offs: On-Box vs Cloud Security vs SASE
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[#050849]">
                    <th className="py-2.5 px-3 font-bold">Option</th>
                    <th className="py-2.5 px-3 font-bold">Where Inspection Runs</th>
                    <th className="py-2.5 px-3 font-bold text-emerald-900">Strength</th>
                    <th className="py-2.5 px-3 font-bold text-rose-900">Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {securityOptionsRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-2.5 px-3 font-semibold text-[#050849] whitespace-nowrap">{row.option}</td>
                      <td className="py-2.5 px-3 text-slate-600">{row.where}</td>
                      <td className="py-2.5 px-3 text-emerald-800">{row.strength}</td>
                      <td className="py-2.5 px-3 text-rose-800">{row.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SASE vs SD-WAN Boundary */}
          <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-xs sm:text-sm text-[#050849]">
            <h4 className="font-bold text-blue-900 text-sm mb-1">
              SASE vs SD-WAN: Where does one end and the other begin?
            </h4>
            <p className="leading-relaxed">
              SD-WAN is a WAN connectivity technology. It selects paths and encrypts traffic between sites. SASE is a framework that Gartner introduced in 2019 that delivers networking and security together from the cloud. SD-WAN is the network half. The security half is called SSE (Security Service Edge: SWG, CASB, ZTNA, and FWaaS).
            </p>
            <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-medium">
              <div className="bg-white p-2 rounded border border-blue-100">
                <strong>SD-WAN answers:</strong> How does traffic get from a site to its destination?
              </div>
              <div className="bg-white p-2 rounded border border-blue-100">
                <strong>SSE answers:</strong> Is this traffic, and the user behind it, authorized?
              </div>
              <div className="bg-white p-2 rounded border border-blue-100">
                <strong>SASE combines:</strong> Both disciplines under unified zero-trust policy.
              </div>
            </div>
          </div>

          {/* Segmentation across sites */}
          <div className="mt-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#050849]">
              Why does segmentation across sites matter?
            </h3>
            <p className="mt-2 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
              Segmentation keeps zones apart across the WAN. Point-of-sale systems, guest access, corporate users and IoT devices each sit in their own isolated cryptographic segment. SD-WAN carries each segment end-to-end, so a compromise at one branch stays inside its zone.
            </p>
            <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
              <strong>Regulatory Driver (BFSI &amp; Healthcare):</strong> PCI SSC guidance on cardholder data shows why. PCI DSS does not mandate segmentation, but without it, the entire enterprise network falls in scope. Purpose-built controls must enforce separation and undergo annual penetration testing.
            </div>
          </div>
        </section>

        {/* SECTION 4: Which design decisions determine whether SD-WAN works? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Which design decisions determine whether SD-WAN works?
          </h2>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h4 className="font-bold text-[#050849] text-sm mb-1">Topology Choice</h4>
              <p className="text-slate-600 leading-relaxed">
                Choose topology from traffic data: <strong>Hub-and-spoke</strong> for low tunnel load and central apps, <strong>Full mesh</strong> for any-to-any low-latency voice, or <strong>Regional hubs</strong> for geographically distributed sites.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h4 className="font-bold text-[#050849] text-sm mb-1">True Circuit Diversity</h4>
              <p className="text-slate-600 leading-relaxed">
                Two circuits from the same last-mile carrier are not redundancy. Ensure 3 kinds of diversity: different providers, separate physical conduits, and alternate access technologies (e.g., fiber + 5G).
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h4 className="font-bold text-[#050849] text-sm mb-1">Cloud On-Ramps</h4>
              <p className="text-slate-600 leading-relaxed">
                Place virtual edges inside AWS/Azure VPCs or in colocation exchange hubs (Equinix/Megaport) so branch users access IaaS without traversing enterprise data centers.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h4 className="font-bold text-[#050849] text-sm mb-1">Parallel Coexistence</h4>
              <p className="text-slate-600 leading-relaxed">
                Run SD-WAN alongside MPLS during the migration. Never cut over cold without a rollback plan and telemetry baseline.
              </p>
            </div>
          </div>
        </section>

        {/* DIAGRAM 3: SD-WAN MIGRATION WAVES */}
        <SdWanMigrationWavesDiagram />

        {/* SECTION 5: What is the business value of SD-WAN, stated honestly? */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What is the business value of SD-WAN, stated honestly?
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
            Honest business cases separate measurable returns from vendor hype:
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase text-emerald-700">Where Value Comes From</span>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                <li><strong>Bandwidth cost:</strong> Broadband costs substantially less per Mbps than MPLS.</li>
                <li><strong>Site provisioning time:</strong> Zero touch provisioning and templates shrink branch opening from months to hours.</li>
                <li><strong>Application performance:</strong> Local breakout removes the trombone detour for cloud and SaaS.</li>
                <li><strong>Operational effort:</strong> Centralized policy reduces engineer hours spent on per-device CLI changes.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase text-rose-700">What SD-WAN Cannot Fix</span>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                <li><strong>Undersized circuits:</strong> SD-WAN steers traffic; it cannot create bandwidth out of thin air.</li>
                <li><strong>Poorly coded applications:</strong> Dynamic path selection cannot fix chatty protocols or slow back-end queries.</li>
                <li><strong>Flapping physical underlays:</strong> If the local access loop is unstable, the overlay cannot compensate.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: How does WeRoute help? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does WeRoute help?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            WeRoute designs and delivers SD-WAN for multi-site enterprises, including the security and migration decisions in this guide. Our{" "}
            <Link
              href="/solution/network-connectivity/sd-wan-sdn-solutions"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              SD-WAN, SD-LAN &amp; SDN Solutions
            </Link>{" "}
            page describes the approach.{" "}
            <Link
              href="/services/managed-network-services"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              Managed Network Services
            </Link>{" "}
            covers daily operational monitoring, and{" "}
            <Link
              href="/services/managed-cybersecurity-soc-services"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              Managed Cybersecurity &amp; SOC Services
            </Link>{" "}
            covers branch and cloud edge security inspection.
          </p>

          <div className="mt-5 rounded-xl bg-gradient-to-r from-[#050849] to-blue-950 p-4 text-white flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold">
              WeRoute has delivered 40+ enterprise deployments with 99.9% system reliability.
            </span>
            <Award size={24} className="text-blue-300 shrink-0 ml-3" />
          </div>
        </section>

        {/* SECTION 7: Frequently asked questions */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849] mb-4">
            Frequently asked questions
          </h2>

          <BlogFaqAccordion faqs={blog.faqs} />
        </section>

        {/* SECTION 8: Plan Your SD-WAN Migration CTA */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-[#050849] p-6 sm:p-8 text-white shadow-xl relative">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Plan Your SD-WAN Migration
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Talk to WeRoute's network team about your sites, your cloud traffic and where security inspection should happen.
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
                href="/solution/network-connectivity/sd-wan-sdn-solutions"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-semibold text-white hover:bg-white/15"
              >
                <span>View SD-WAN Solutions</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: RELATED SERVICES & READING */}
        <section className="mt-12 border-t border-slate-200 pt-8 space-y-8">
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED SERVICES
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/solution/network-connectivity/sd-wan-sdn-solutions"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    SD-WAN, SD-LAN &amp; SDN Solutions
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-1">Multi-site overlay design &amp; transport pooling</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore Solutions</span>
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
                  <p className="text-xs text-[#050849]/65 mt-1">24/7 SLA assurance &amp; dynamic path monitoring</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore Managed</span>
                  <ArrowRight size={13} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/services/managed-cybersecurity-soc-services"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    Managed Cybersecurity &amp; SOC
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-1">Branch perimeter inspection &amp; SASE integration</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore SOC</span>
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
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
