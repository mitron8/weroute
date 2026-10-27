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
  Award
} from "lucide-react";
import TelemetryArchitectureDiagram from "./TelemetryArchitectureDiagram";
import ObservabilityCostRetentionDiagram from "./ObservabilityCostRetentionDiagram";
import TelemetrySignalMatrixDiagram from "./TelemetrySignalMatrixDiagram";
import BlogFaqAccordion from "./BlogFaqAccordion";

export default function NetworkObservabilityBlogDetail({ blog }) {
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
      dimension: "Core question",
      monitoring: "Is this known thing healthy?",
      observability: "Why is this happening?"
    },
    {
      dimension: "Questions defined",
      monitoring: "In advance",
      observability: "After the fact"
    },
    {
      dimension: "Typical data",
      monitoring: "Polled metrics, thresholds, up and down status",
      observability: "Metrics, logs, traces, flow data and synthetic tests, correlated"
    },
    {
      dimension: "Best at",
      monitoring: "Known failure modes",
      observability: "Unknown and intermittent problems"
    },
    {
      dimension: "Investigation",
      monitoring: "Check each tool in turn",
      observability: "Query one correlated data set"
    },
    {
      dimension: "Typical output",
      monitoring: "An alert",
      observability: "An explanation and a timeline"
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
          <span className="text-blue-700">Network Observability</span>
        </nav>

        {/* HEADER BADGES */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
            <Shield size={12} />
            Web Content | SEO + GEO Optimised (Blog)
          </span>
          <span className="inline-flex items-center rounded-full bg-[#050849] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            BLOG | NETWORK OBSERVABILITY
          </span>
        </div>

        {/* H1 HEADLINE */}
        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-[38px] lg:leading-tight font-extrabold tracking-tight text-[#050849]">
          Network Monitoring vs Network Observability: What Enterprises Actually Need
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
              <span>{blog.date || "Oct 12, 2026"}</span>
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

        {/* INTRODUCTORY BODY */}
        <div className="mt-6 space-y-3.5 text-base sm:text-[17px] leading-relaxed text-[#050849]/85 font-normal">
          <p>
            Network monitoring checks known failure modes against thresholds set in advance. Network observability lets a team ask questions it did not plan for, using telemetry detailed enough to investigate afterwards.
          </p>
          <p>
            A simple test separates the two. When a new problem appears, can your team find the cause from data already collected? If someone must deploy new instrumentation first, you have monitoring. If the data already holds the answer, you have observability.
          </p>
          <p>
            This guide compares network monitoring vs network observability for enterprise networks. It covers where monitoring fails, which telemetry to collect, how to control cost and how to choose between building and buying.
          </p>
          <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50/70 p-3.5 text-sm text-[#050849]">
            WeRoute is an enterprise technology services company and Cisco partner. Its observability work covers telemetry design, correlation and operations for enterprise networks.
          </div>
        </div>

        {/* COMPARISON TABLE: Monitoring vs Observability */}
        <section className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#050849] text-white">
                  <th className="py-3 px-4 font-bold rounded-tl-xl w-1/4">Monitoring</th>
                  <th className="py-3 px-4 font-bold rounded-tr-xl w-3/4">Observability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                    } hover:bg-slate-50`}
                  >
                    <td className="py-3.5 px-4 font-bold text-[#050849] align-top">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        {row.dimension}
                      </div>
                      <div>{row.monitoring}</div>
                    </td>
                    <td className="py-3.5 px-4 text-[#050849] font-medium align-top">
                      <div className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider mb-0.5">
                        {row.dimension}
                      </div>
                      <div>{row.observability}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* AT A GLANCE */}
        <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:p-6 shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
            AT A GLANCE
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
              <span className="font-bold text-slate-400 block text-[11px] uppercase tracking-wider">Topic</span>
              <p className="font-semibold text-[#050849] mt-1">How monitoring and observability differ on an enterprise network</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
              <span className="font-bold text-slate-400 block text-[11px] uppercase tracking-wider">Test</span>
              <p className="font-semibold text-[#050849] mt-1">Can you find the cause without deploying new instrumentation?</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs sm:col-span-2">
              <span className="font-bold text-slate-400 block text-[11px] uppercase tracking-wider">Foundation</span>
              <p className="font-semibold text-[#050849] mt-1">Metrics, logs and traces, plus flow data, device state and synthetic tests</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
              <span className="font-bold text-slate-400 block text-[11px] uppercase tracking-wider">Standard</span>
              <p className="font-semibold text-[#050849] mt-1">OpenTelemetry for vendor-neutral collection</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
              <span className="font-bold text-slate-400 block text-[11px] uppercase tracking-wider">Constraint</span>
              <p className="font-semibold text-[#050849] mt-1">Cardinality and cost</p>
            </div>
          </div>
        </div>

        {/* SECTION 1: Where does network monitoring fail? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Where does network monitoring fail?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            Network monitoring does what it was built to do. Its failures sit in the gaps between what it measures. Five patterns come up again and again.
          </p>

          <ul className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-[#050849]/85">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Green devices, slow application.</strong> Every router and switch reports healthy, and users still wait. The fault sits between components, for example in a congested path, a misrouted flow or a slow dependency.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Paths you cannot poll.</strong> In hybrid and multi-cloud networks, traffic crosses ISPs, cloud backbones and SaaS providers. You cannot run SNMP against any of them.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Encrypted and overlay traffic.</strong> Encrypted traffic still produces flow records with source, destination, volume and timing, but no payload. An IPsec tunnel can appear as a single flow. A VXLAN overlay exposes only the outer headers between tunnel endpoints. SD-WAN creates the same gap between underlay and overlay.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Intermittent degradation.</strong> A link that drops packets for ten seconds every few minutes can pass a five-minute polling cycle every time. Averages hide the problem.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Fragmented tooling.</strong> Each team uses its own tools, so no one holds the full picture. Grafana Labs' 2025 observability survey reported an average of eight observability technologies per organization.
              </div>
            </li>
          </ul>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-[15px] font-semibold text-[#050849]">
            Each failure has one cause. The question was never defined in advance, so no check exists for it.
          </div>
        </section>

        {/* SECTION 2: What telemetry does network observability need? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What telemetry does network observability need?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            An observable network starts with the three signals of general observability: metrics, logs and traces.
          </p>

          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#050849]/85">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Metrics.</strong> Numeric measurements over time, such as interface utilization, error counts and latency percentiles. They show how much and how often.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Logs.</strong> Timestamped event records, such as syslog from devices and firewalls. They show what happened on one system.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Traces.</strong> The path of one request across services, with timing for each step. They show where a request spent its time.
              </div>
            </li>
          </ul>

          <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            Network observability adds signals that come from the network itself.
          </p>

          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#050849]/85">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Flow data.</strong> NetFlow, sFlow and IPFIX records show who talked to whom, how much and when. They carry metadata only.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Device state.</strong> Interface status, routing tables, configuration, CPU and memory, collected by SNMP or streaming telemetry.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Path and latency data.</strong> Hop-by-hop paths and delay between two points.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Synthetic tests.</strong> Scripted probes that run on a schedule, covered below.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Packet capture, where justified.</strong> Full detail of one conversation. Storage cost is high, so capture on demand for a specific segment or incident.
              </div>
            </li>
          </ul>

          <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/85">
            The figure below shows what each signal answers and what it cannot answer alone. No single signal covers every question.
          </p>

          {/* DIAGRAM: Telemetry Signal Coverage Matrix */}
          <TelemetrySignalMatrixDiagram />
        </section>

        {/* SECTION 3: Why does synthetic monitoring belong in the set? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Why does synthetic monitoring belong in the set?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            Synthetic monitoring sends scripted probes, such as ping, traceroute, DNS lookups and HTTP requests, from agents placed across the network. It measures paths through ISPs, cloud backbones and SaaS providers that you do not own. It can point to a specific ISP or autonomous system as the source of a problem. It also runs when no users are active.
          </p>

          <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            Private agents cover on-premises sites and private cloud circuits. The limit is coverage. A test sees only the path it probes, so it cannot show what real users saw between runs.
          </p>
        </section>

        {/* SECTION 4: Why does OpenTelemetry matter? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Why does OpenTelemetry matter?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            OpenTelemetry is an open, vendor-neutral standard for generating and collecting telemetry. Sources send data through its protocol, OTLP. The OpenTelemetry Collector receives the data, processes it and routes it to any compatible backend.
          </p>

          <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            The Collector's contrib distribution includes receivers for SNMP metrics, syslog logs and NetFlow, sFlow and IPFIX flow data. The flow receiver is at alpha stability, so test it before production use. The result is one collection layer. Changing the backend later does not require re-instrumenting sources.
          </p>
        </section>

        {/* SECTION 5: How do you decide what to keep at full resolution? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How do you decide what to keep at full resolution?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            Telemetry costs money to collect, store and query. Observability cost has three drivers.
          </p>

          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#050849]/85">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Volume.</strong> How much data arrives.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Cardinality.</strong> The number of unique label combinations on a metric. It is the product of each label's distinct values. A metric labeled by device, interface and region stays manageable. Add an unbounded label such as user ID or request ID, and every new value creates a new series.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Retention.</strong> How long data stays queryable.
              </div>
            </li>
          </ul>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            High cardinality metrics are a common cause of surprise bills, because many metric products price per series. In Grafana Labs' 2026 observability survey, 65% of respondents called cost an important criterion when selecting tools. The survey is vendor-run.
          </p>

          {/* DIAGRAM: Sampling and Cardinality Decision Matrix */}
          <ObservabilityCostRetentionDiagram />

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            Sampling controls volume. Head sampling decides at the start of a trace, so it can discard a rare failure before anyone knows it is one. Tail sampling decides after the trace completes. It keeps every trace that errored or ran slow and samples the healthy rest. It needs more collector memory, because the collector holds traces until they finish.
          </p>

          <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            Sampling has a price. A question that needs a dropped record cannot be answered later. Set the policy for each data type.
          </p>
        </section>

        {/* SECTION 6: How does observability move operations from reactive to proactive? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does observability move operations from reactive to proactive?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85 font-medium">
            Monitoring tells a team that something broke. Observability shortens the time to learn why. Four practices drive the change.
          </p>

          <ul className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-[#050849]/85">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Correlated timelines.</strong> Metrics, logs, flow records and traces share timestamps and identifiers in one place. An engineer sees a routing change, a latency rise and the first failed requests on one timeline. Mean time to resolve (MTTR) falls because less time goes on finding the cause.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">An end to the war room.</strong> Without correlation, network, cloud and application teams join one call and compare their own tools. With one data set, the on-call engineer starts from evidence.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Baseline-driven anomaly detection.</strong> The system learns normal behavior for each link and time of day, then alerts on deviation. A static threshold fires on a busy Monday and misses a quiet link that slowly degrades. Baselines need weeks of history and periodic review.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Capacity and change validation.</strong> Compare telemetry before and after a change window to confirm the change did what was intended.
              </div>
            </li>
          </ul>

          <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/85">
            Synthetic tests add one more proactive layer. They run around the clock, so a degraded path appears before the first user complaint.
          </p>
        </section>

        {/* SECTION 7: Build, buy or managed: how should an enterprise decide? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Build, buy or managed: how should an enterprise decide?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            The build vs buy observability decision has three routes.
          </p>

          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#050849]/85">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Open source, self-hosted.</strong> There is no license fee. The cost moves to engineering labor and platform capacity: cardinality management, storage tiers, retention tuning and upgrades.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Commercial platform.</strong> Fast to start, with support included. Pricing often scales with data volume or series count, and vendor-specific agents can lock you in.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Managed service.</strong> A provider operates the platform and your team uses the results. It suits teams without platform engineers to spare.
              </div>
            </li>
          </ul>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            Judge the choice on engineering capacity and total cost of ownership. A license fee of zero says little about the cost of running a platform. Four questions help.
          </p>

          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-[#050849]/85">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Who is on call for the observability platform itself?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Who owns cardinality and retention policy?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>How much of the data and configuration can you move if you change vendors?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Does the team have time to instrument every source?</span>
            </li>
          </ul>

          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-[15px] text-[#050849]">
            Open standards keep the decision reversible. OpenTelemetry collection lets a team start on one route and move to another without re-instrumenting.
          </div>
        </section>

        {/* SECTION 8: What does WeRoute run, and why? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What does WeRoute run, and why?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            WeRoute's own stack uses OpenTelemetry for collection, ClickHouse for storage and SigNoz for queries, dashboards and alerts. WeRoute also works with the monitoring and observability tools a customer already runs.
          </p>

          {/* DIAGRAM: Telemetry Pipeline Architecture */}
          <TelemetryArchitectureDiagram />

          <ul className="mt-5 space-y-4 text-[15px] leading-relaxed text-[#050849]/85">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">OpenTelemetry.</strong> One vendor-neutral collection layer for SNMP, syslog, flow and application data. The backend can change without re-instrumentation.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">ClickHouse.</strong> A columnar database. Columnar storage compresses telemetry well. ClickHouse reports compression of roughly 15 to 20 times on observability data, which is its own figure. Long retention stays affordable. Cardinality cost shifts from ingest to query time, so schema and sort-order choices matter in a ClickHouse observability stack.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">SigNoz.</strong> Open source observability software built on OpenTelemetry. It shows metrics, logs and traces in one interface, with a query builder, PromQL, ClickHouse SQL and alerting. It uses ClickHouse as its storage engine.
              </div>
            </li>
          </ul>
        </section>

        {/* SECTION 9: What do production deployments need? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What do production deployments need?
          </h2>

          <ul className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-[#050849]/85">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Retention.</strong> Keep recent data fast and older data cheap. Incident work needs days of detail. Trend and capacity work needs months.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Storage economics.</strong> Compression and sampling set the bill. Review volume for each source monthly.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Instrumentation coverage.</strong> Correlation depends on consistent OpenTelemetry instrumentation. A gap in coverage becomes a gap in the timeline.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <div>
                <strong className="text-[#050849]">Alert hygiene.</strong> Every alert needs an owner and an action. In Grafana Labs' 2026 survey, 30% named alert fatigue as the biggest obstacle to faster incident response. The same problem affects security teams, as{" "}
                <Link
                  href="/blogs/from-alert-fatigue-to-automated-response-building-a-modern-soc"
                  className="font-bold text-blue-700 hover:text-blue-900 underline"
                >
                  our guide to building a modern SOC explains
                </Link>
                .
              </div>
            </li>
          </ul>
        </section>

        {/* SECTION 10: How does WeRoute help? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does WeRoute help?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#050849]/85">
            WeRoute designs and operates observability for enterprise networks. Our{" "}
            <Link
              href="/solution/network-connectivity/network-observability"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              Network Observability Solutions
            </Link>{" "}
            page describes the approach.{" "}
            <Link
              href="/sub-services#observability"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              Network Observability Services
            </Link>{" "}
            covers managed and professional engagements, and{" "}
            <Link
              href="/solution/CloudDevOpsPage/cloud-observability"
              className="font-bold text-blue-700 hover:text-blue-900 underline"
            >
              Cloud Observability
            </Link>{" "}
            covers the cloud side of hybrid estates.
          </p>

          <div className="mt-5 rounded-xl bg-gradient-to-r from-[#050849] to-blue-950 p-4 text-white flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold">
              WeRoute has delivered 40+ enterprise deployments with 99.9% system reliability.
            </span>
            <Award size={24} className="text-blue-300 shrink-0 ml-3" />
          </div>
        </section>

        {/* SECTION 11: Frequently asked questions */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849] mb-4">
            Frequently asked questions
          </h2>

          <BlogFaqAccordion faqs={blog.faqs} />
        </section>

        {/* SECTION 12: Plan Your Observability Roadmap */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-[#050849] p-6 sm:p-8 text-white shadow-xl relative">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Plan Your Observability Roadmap
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Talk to WeRoute's network team about your telemetry, your tooling and where monitoring falls short.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-md transition-transform hover:scale-102 hover:bg-blue-500 cursor-pointer"
              >
                <span>Talk to Our Network Team</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/solution/network-connectivity/network-observability"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-semibold text-white hover:bg-white/15"
              >
                <span>View Network Observability Solutions</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 13: RELATED SERVICES & READING */}
        <section className="mt-12 border-t border-slate-200 pt-8 space-y-8">
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED SERVICES
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/solution/network-connectivity/network-observability"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    Network Observability Solutions
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-1">Topology mapping, telemetry design & assurance</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore Solution</span>
                  <ArrowRight size={13} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link
                href="/sub-services#observability"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    Network Observability Services
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-1">Managed platform engineering & operations</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore Services</span>
                  <ArrowRight size={13} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link
                href="/solution/CloudDevOpsPage/cloud-observability"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    Cloud Observability
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-1">Telemetry correlation for hybrid cloud estates</p>
                </div>
                <div className="mt-3 flex items-center text-xs font-bold text-blue-600">
                  <span>Explore Cloud</span>
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
                href="/blogs/from-alert-fatigue-to-automated-response-building-a-modern-soc"
                className="group rounded-xl border border-blue-200 bg-blue-50/50 p-4 shadow-2xs hover:bg-blue-50 hover:border-blue-500 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-blue-700">Guide</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#050849] group-hover:text-blue-700 mt-0.5">
                    From Alert Fatigue to Automated Response: Building a Modern SOC
                  </h4>
                </div>
                <ArrowRight size={14} className="text-blue-700 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </Link>
              <Link
                href="/blogs/how-we-implemented-siem-and-soar-large-enterprise"
                className="group rounded-xl border border-blue-200 bg-blue-50/50 p-4 shadow-2xs hover:bg-blue-50 hover:border-blue-500 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-blue-700">Case Study</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#050849] group-hover:text-blue-700 mt-0.5">
                    MITRE ATT&CK-Based Detection Engineering: A Practical Enterprise Approach
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
