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
  AlertOctagon,
  Sliders,
  CheckCircle2,
  Lock,
  UserCheck
} from "lucide-react";
import SocOperatingModelDiagram from "./SocOperatingModelDiagram";
import SocDeliveryPhasesDiagram from "./SocDeliveryPhasesDiagram";
import BlogFaqAccordion from "./BlogFaqAccordion";

export default function ModernSocBlogDetail({ blog }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const attckMappingData = [
    {
      category: "Identity and access",
      detections: [
        { detection: "Brute-force login attempts", tactic: "Credential Access", technique: "T1110 Brute Force" },
        { detection: "Unauthorized RDP access", tactic: "Lateral Movement", technique: "T1021.001 Remote Desktop Protocol" },
        { detection: "VPN authentication anomalies", tactic: "Initial Access, Persistence", technique: "T1133 External Remote Services" },
        { detection: "Suspicious administrative behavior", tactic: "Initial Access, Persistence, Privilege Escalation, Defense Evasion", technique: "T1078 Valid Accounts" }
      ]
    },
    {
      category: "Endpoint and server",
      detections: [
        { detection: "Privilege escalation", tactic: "Privilege Escalation", technique: "T1068 Exploitation for Privilege Escalation; T1548 Abuse Elevation Control Mechanism" },
        { detection: "Suspicious process activity", tactic: "Execution", technique: "T1059 Command and Scripting Interpreter" },
        { detection: "Unauthorized software installation", tactic: "Varies by method", technique: "Mapped per installation method" }
      ]
    },
    {
      category: "Network",
      detections: [
        { detection: "Port scanning", tactic: "Discovery", technique: "T1046 Network Service Discovery" },
        { detection: "DNS spoofing", tactic: "Credential Access, Collection", technique: "T1557 Adversary-in-the-Middle (closest match)" },
        { detection: "Communication with known-malicious domains", tactic: "Command and Control", technique: "T1071 Application Layer Protocol" },
        { detection: "Unusual traffic patterns", tactic: "Varies by cause", technique: "Command and Control, Exfiltration or Impact" }
      ]
    },
    {
      category: "Application and database",
      detections: [
        { detection: "Unauthorized database access", tactic: "Collection", technique: "T1213.006 Databases" },
        { detection: "Schema modification tracking", tactic: "Impact", technique: "T1565.001 Stored Data Manipulation (closest match)" },
        { detection: "API misuse and abuse", tactic: "Initial Access", technique: "T1190 Exploit Public-Facing Application (closest match)" }
      ]
    },
    {
      category: "Advanced threats",
      detections: [
        { detection: "Web shell detection", tactic: "Persistence", technique: "T1505.003 Web Shell" },
        { detection: "Reverse shell activity", tactic: "Execution, Command and Control", technique: "T1059 Command and Scripting Interpreter; T1071 Application Layer Protocol" },
        { detection: "Zero-day exploit indicators", tactic: "Initial Access, Privilege Escalation", technique: "T1190 Exploit Public-Facing Application; T1068 Exploitation for Privilege Escalation" }
      ]
    }
  ];

  return (
    <article className="relative min-h-screen bg-[#f8fafc] text-[#050849] pt-28 pb-20 selection:bg-blue-600 selection:text-white">
      {/* Background Glows */}
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
          <span className="text-blue-700">Security Operations</span>
        </nav>

        {/* HEADER BADGES */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
            <Shield size={12} />
            Web Content | SEO + GEO Optimised (Blog)
          </span>
          <span className="inline-flex items-center rounded-full bg-[#050849] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            BLOG | SECURITY OPERATIONS
          </span>
        </div>

        {/* H1 (Verbatim) */}
        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-tight font-extrabold tracking-tight text-[#050849]">
          From Alert Fatigue to Automated Response: Building a Modern SOC
        </h1>

        {/* AUTHOR & META BAR */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-y border-slate-200 py-3 text-xs font-medium text-[#050849]/70">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 font-bold text-white text-[11px]">
                WR
              </div>
              <div>
                <span className="font-bold text-[#050849]">{blog.author}</span>
                <span className="text-[11px] text-[#050849]/60 ml-2 hidden sm:inline">Cisco Partner</span>
              </div>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={13} className="text-blue-600" />
              <span>{blog.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={13} className="text-blue-600" />
              <span>{blog.readTime}</span>
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

        {/* INTRO PARAGRAPHS (Verbatim from page 1) */}
        <div className="mt-6 space-y-3.5 text-base sm:text-[17px] leading-relaxed text-[#050849]/85 font-normal">
          <p>
            Triage sets the pace of a SOC. Analysts can only respond as fast as they can sort the alerts in front of them. Response time improves when the operating model changes, and a new console on top of the old model does not change it.
          </p>
          <p>
            This guide sets out what a modern SOC requires and how WeRoute delivered one for a large enterprise. The client reduced incident response time by up to 75%. The platform work is covered in our{" "}
            <Link 
              href="/blogs/how-we-implemented-siem-and-soar-large-enterprise" 
              className="font-bold text-blue-700 underline hover:text-blue-900"
            >
              SIEM and SOAR case study
            </Link>.
          </p>
          <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50/70 p-3.5 text-sm text-[#050849]">
            <strong>WeRoute</strong> is an enterprise technology services company and Cisco partner. Its security operations work covers monitoring, detection engineering, response automation and ongoing tuning.
          </div>
        </div>

        {/* AT A GLANCE (Verbatim from page 1) */}
        <div className="my-8 rounded-2xl border border-[#050849]/12 bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
              <Award size={15} />
              AT A GLANCE
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Validated Operating Model
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-800/80 block text-[11px] uppercase">Problem</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Alerts spread across consoles, manual triage, no prioritization
              </p>
            </div>
            <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100">
              <span className="font-bold text-blue-800/80 block text-[11px] uppercase">Model</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Visibility, detection engineering, ATT&CK measurement, automation, tuning
              </p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="font-bold text-[#050849]/60 block text-[11px] uppercase">Delivery</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Six phases, from baseline audit to managed operations
              </p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <span className="font-bold text-emerald-800/80 block text-[11px] uppercase">Result</span>
              <p className="mt-1 font-bold text-emerald-700 text-sm leading-snug">
                Incident response time reduced by up to 75%
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 1: What causes alert fatigue in a SOC? (Verbatim page 1 & 2) */}
        <section className="mt-10 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What causes alert fatigue in a SOC?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Alert fatigue has five causes, and each one traces back to how the SOC operates.
          </p>

          <div className="mt-4 space-y-2.5">
            {[
              {
                title: "Scattered alerts.",
                desc: "Endpoint, network, cloud and identity consoles each raise their own alerts. One incident can appear three times in three places and look like three unrelated events."
              },
              {
                title: "Manual triage.",
                desc: "SOC alert triage often means opening a ticket, pivoting across five tools, copying indicators into a search bar and checking threat intelligence by hand. Every repeated step costs minutes during a live intrusion."
              },
              {
                title: "Noise that hides real threats.",
                desc: "When most alerts are routine, the genuine detection gets closed with the rest. Alert fatigue is a security risk before it is a morale problem."
              },
              {
                title: "Tool sprawl.",
                desc: "Each new product adds an alert stream and a console. That adds to the correlation burden the product was bought to reduce."
              },
              {
                title: "No prioritization.",
                desc: "Without ranking, every alert looks equally urgent, and analysts spend the same effort on all of them. Alert prioritization is the missing capability."
              }
            ].map((cause, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                <div className="text-sm">
                  <strong className="text-[#050849] font-bold">{cause.title}</strong>{" "}
                  <span className="text-[#050849]/80">{cause.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Omdia Survey Callout (Verbatim page 2) */}
          <div className="my-6 rounded-2xl bg-gradient-to-br from-[#050849] to-[#0a1164] p-5 text-white shadow-md">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-300">
              Industry Research • Microsoft / Omdia SOC Survey (300 Professionals)
            </span>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              Survey data supports this. A Microsoft-commissioned Omdia survey of 300 SOC professionals at mid-market and enterprise organisations found an average of <strong>10.9 consoles per SOC</strong>. It estimated that <strong>46% of alerts are false positives</strong> and <strong>42% go uninvestigated</strong>. It also found that <strong>66% of SOCs lose 20% of their week</strong> to aggregation and correlation.
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-white/15 pt-3 text-center">
              <div>
                <div className="text-lg font-bold text-amber-300">10.9</div>
                <div className="text-[10px] text-white/70">Consoles per SOC</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-300">46%</div>
                <div className="text-[10px] text-white/70">False Positives</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-300">42%</div>
                <div className="text-[10px] text-white/70">Uninvestigated</div>
              </div>
              <div>
                <div className="text-lg font-bold text-amber-300">20% Week</div>
                <div className="text-[10px] text-white/70">Lost to Correlation</div>
              </div>
            </div>
          </div>

          <p className="text-[16px] leading-relaxed text-[#050849]/85">
            Ranking is, what makes volume workable. A SOC that ranks alerts by risk can work through a large queue in order. A SOC that doesn't, has to treat every alert as equal.
          </p>

          <div className="mt-5 rounded-xl border border-red-200 bg-red-50/40 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-900">
              Five signs show that a SOC has an alert fatigue problem:
            </h4>
            <ul className="mt-2.5 space-y-1.5 text-xs text-red-950/90 pl-1">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                <span>A growing backlog of alerts that nobody has investigated.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                <span>Rising time spent on SOC alert triage for each alert.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                <span>Low-severity alerts closed without review.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                <span>The same incident investigated more than once.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                <span>Analysts pivoting across several consoles to confirm one event.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 2: What does a modern SOC require? (Verbatim page 2 & 3) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What does a modern SOC require?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            A modern SOC is a security operations center organised around a defined operating model. The model has five parts.
          </p>

          {/* DIAGRAM 1: SOC OPERATING MODEL */}
          <SocOperatingModelDiagram />

          <div className="space-y-3">
            {[
              {
                num: "1. Centralized visibility.",
                desc: "Server, database, endpoint and network telemetry land in one place. A SOC cannot detect what it does not ingest, so log-source coverage is the foundation."
              },
              {
                num: "2. Detection engineering as a discipline.",
                desc: "Teams write, version, test, tune and retire detections like code. Vendor default rule packs are not accepted as shipped."
              },
              {
                num: "3. A framework to measure against.",
                desc: "MITRE ATT&CK turns \"are we secure?\" into a stated coverage percentage with named blind spots."
              },
              {
                num: "4. Automation of the deterministic.",
                desc: "Enrichment, indicator lookup, asset and user context and defined containment run automatically. This is SOC automation in practice. Machines take the repeatable steps and analysts keep the judgment calls. A step is a candidate for automation when its inputs are known, its logic is fixed and its result is predictable."
              },
              {
                num: "5. Continuous tuning.",
                desc: "The team reviews false-positive rate and coverage on a fixed cadence. A SOC needs ongoing operation after it goes live."
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                <h4 className="font-bold text-xs sm:text-sm text-[#050849]">{item.num}</h4>
                <p className="mt-1 text-xs sm:text-[13px] text-[#050849]/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/85">
            These five parts form the SOC operating model. Removing one weakens the others. Detections need visibility to read from. Automation needs tuned detections to act on. Tuning needs a framework to show what changed.
          </p>
        </section>

        {/* SECTION 3: How does detection engineering reduce alert fatigue? (Verbatim page 3) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does detection engineering reduce alert fatigue?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Detection engineering applies software practices to detections. A detection is production logic, so it needs an owner, a version history and a test before it goes live.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              {
                step: "Build",
                desc: "Start from a threat model and the log sources that exist. Write the rule around attacker behaviour so it survives a change of tooling."
              },
              {
                step: "Test",
                desc: "Check each rule against known-bad and known-good activity before release. Replay recorded attack data or run a simulation, so the test uses real behaviour. Peer review the logic."
              },
              {
                step: "Tune",
                desc: "Add exceptions for known-benign behaviour and set thresholds from observed baselines. This is the core of false positive reduction."
              },
              {
                step: "Measure",
                desc: "Track the false-positive rate for each rule. Rules that stay noisy get fixed or retired."
              },
              {
                step: "Retire",
                desc: "Remove detections that no longer match the environment."
              }
            ].map((st, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                <span className="font-bold text-xs uppercase tracking-wider text-blue-700">• {st.step}</span>
                <p className="mt-1 text-xs text-[#050849]/80 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/85">
            Tuning is how a SOC can reduce alert fatigue at the source. A rule that fires too often trains analysts to ignore it. Fewer, better detections give analysts a queue they can finish. Each detection should name its data source, its ATT&CK technique, its owner and its response path. The full lifecycle, with a worked example, is in our guide to MITRE ATT&CK-based detection engineering.
          </p>
        </section>

        {/* SECTION 4: Which detections should a modern SOC cover? (Verbatim page 3 & 4) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Which detections should a modern SOC cover?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Mapping each detection to MITRE ATT&CK makes MITRE ATT&CK coverage reviewable. A team can see which techniques have a working detection and which do not. ATT&CK groups attacker behavior into tactics, which are goals, and techniques, which are the methods used to reach them.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-[#050849]/85">
            The table shows a typical mapping across five domains:
          </p>

          {/* COMPREHENSIVE ATT&CK MAPPING TABLE */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-[#050849] text-white">
                    <th className="p-3 font-bold">Detection</th>
                    <th className="p-3 font-bold">ATT&CK tactic</th>
                    <th className="p-3 font-bold">ATT&CK technique</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {attckMappingData.map((group, gIdx) => (
                    <React.Fragment key={gIdx}>
                      <tr className="bg-slate-100/80 font-bold text-[#050849]">
                        <td colSpan={3} className="px-3 py-2 text-[11px] uppercase tracking-wider text-blue-900 bg-blue-50/70">
                          {group.category}
                        </td>
                      </tr>
                      {group.detections.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/70">
                          <td className="p-3 font-semibold text-[#050849]">{row.detection}</td>
                          <td className="p-3 text-[#050849]/80">{row.tactic}</td>
                          <td className="p-3 font-mono text-[11px] text-blue-700">{row.technique}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-xs font-medium text-[#050849]/70 italic">
            Read coverage and noise together. A technique with a detection that fires constantly is covered on paper and ignored in practice.
          </p>
        </section>

        {/* SECTION 5: How did WeRoute deliver a modern SOC? (Verbatim page 4 & 5) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How did WeRoute deliver a modern SOC?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            WeRoute delivered the SOC operating model in six phases.
          </p>

          {/* DIAGRAM 2: 6 DELIVERY PHASES */}
          <SocDeliveryPhasesDiagram />

          <div className="space-y-3">
            {[
              {
                num: "1. Assessment first.",
                desc: "We audited log sources, visibility gaps, alert volume, false-positive rate and the existing response-time baseline. The baseline is what makes the 75% result credible. A percentage needs a starting point."
              },
              {
                num: "2. Centralized SIEM.",
                desc: "Google Chronicle became the single telemetry layer. We onboarded and normalized log sources across servers, databases and network devices."
              },
              {
                num: "3. Detection engineering.",
                desc: "We wrote custom rules mapped to the ATT&CK techniques relevant to the client's threat profile. We then tuned them to suppress known-benign behavior."
              },
              {
                num: "4. XDR integration.",
                desc: "Trend Micro XDR extended detection at the endpoint. The SIEM receives high-fidelity signal from that layer."
              },
              {
                num: "5. SOAR playbooks.",
                desc: "The playbooks use named actions. They lock accounts during brute force attempts, isolate endpoints on ransomware activity and block malicious IPs and domains."
              },
              {
                num: "6. Dashboards and optimization.",
                desc: "Dashboards and continuous tuning close the delivery and lead into managed operations."
              }
            ].map((p, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                <h4 className="font-bold text-xs sm:text-sm text-[#050849]">{p.num}</h4>
                <p className="mt-1 text-xs sm:text-[13px] text-[#050849]/80 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/85">
            The order matters. Assessment comes first because every decision made later, depends on its numbers. Detection engineering follows visibility because a rule can only read data that has been ingested. Playbooks come after detections because SOC automation needs reliable triggers.
          </p>
        </section>

        {/* SECTION 6: Where should the human gate sit in automated response? (Verbatim page 5 & 6) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Where should the human gate sit in automated response?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            SOC automation should match the cost of being wrong. Two questions decide where the human gate sits. How easily can the action be reversed, and how many systems does it affect?
          </p>

          {/* HUMAN GATE DECISION MATRIX TABLE */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-[#050849] text-white">
                    <th className="p-3 font-bold">Response action</th>
                    <th className="p-3 font-bold">Reversible?</th>
                    <th className="p-3 font-bold">Systems affected</th>
                    <th className="p-3 font-bold">Gate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-[#050849]">Lock a standard user account</td>
                    <td className="p-3 text-[#050849]/80">Yes, quickly</td>
                    <td className="p-3 text-[#050849]/80">One user</td>
                    <td className="p-3">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                        Automated
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-[#050849]">Block a malicious IP or domain</td>
                    <td className="p-3 text-[#050849]/80">Yes</td>
                    <td className="p-3 text-[#050849]/80">Limited</td>
                    <td className="p-3">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                        Automated
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-[#050849]">Isolate a user endpoint (ransomware)</td>
                    <td className="p-3 text-[#050849]/80">Yes, once cleared</td>
                    <td className="p-3 text-[#050849]/80">One machine</td>
                    <td className="p-3">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                        Automated
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-amber-50/40">
                    <td className="p-3 font-bold text-[#050849]">Isolate a production server</td>
                    <td className="p-3 text-[#050849]/80">Harder, service impact</td>
                    <td className="p-3 text-[#050849]/80">Every dependent service</td>
                    <td className="p-3">
                      <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-800 border border-amber-200">
                        Analyst approval
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-amber-50/40">
                    <td className="p-3 font-bold text-[#050849]">Lock a service or privileged account</td>
                    <td className="p-3 text-[#050849]/80">Yes, may break services</td>
                    <td className="p-3 text-[#050849]/80">Dependent systems</td>
                    <td className="p-3">
                      <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-800 border border-amber-200">
                        Analyst approval
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#050849]/85">
            <p>
              An account lock affects one user, and an administrator can reverse it quickly. A false positive costs a short interruption. That makes account lockout safe to automate fully. Service and privileged accounts need more care. Locking one can stop an application, so those locks go through approval.
            </p>
            <p>
              Isolating a production server affects every user and service that depends on it. A false positive can cause an outage larger than the incident. That cost justifies a pause for approval.
            </p>
            <p>
              The pause does not need to be slow. The playbook runs enrichment first and then puts one approve-or-reject decision in front of an analyst, with the context attached. Enrichment also shortens SOC alert triage, because the analyst starts with context.
            </p>
          </div>

          {/* 4 Questions Callout */}
          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50/60 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Ask four questions before automating any action:
            </h4>
            <ul className="mt-2 space-y-1 text-xs text-blue-950 font-medium pl-1">
              <li>• Can the action be undone?</li>
              <li>• How many users and services does it affect?</li>
              <li>• How confident is the detection?</li>
              <li>• Who owns the asset?</li>
            </ul>
          </div>
        </section>

        {/* SECTION 7: What results should teams expect? (Verbatim page 6 & 7) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What results should teams expect?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            The client reduced incident response time by up to 75%. We quote that figure as a ceiling. The phase one audit recorded response times before any change, so the result is measured against a real baseline.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-emerald-200 bg-white p-3.5 shadow-2xs">
              <span className="font-bold text-xs text-emerald-800">• Faster response</span>
              <p className="text-xs text-[#050849]/80 mt-1">Playbooks act on detections without waiting for manual handling.</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-white p-3.5 shadow-2xs">
              <span className="font-bold text-xs text-blue-800">• Better visibility</span>
              <p className="text-xs text-[#050849]/80 mt-1">Threat visibility improved across systems.</p>
            </div>
            <div className="rounded-xl border border-indigo-200 bg-white p-3.5 shadow-2xs">
              <span className="font-bold text-xs text-indigo-800">• Less manual effort</span>
              <p className="text-xs text-[#050849]/80 mt-1">Automation took over the repeatable steps.</p>
            </div>
            <div className="rounded-xl border border-purple-200 bg-white p-3.5 shadow-2xs">
              <span className="font-bold text-xs text-purple-800">• Stronger posture</span>
              <p className="text-xs text-[#050849]/80 mt-1">Overall security posture improved.</p>
            </div>
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/85">
            Teams that want to reduce alert fatigue can track three measures: false-positive rate for each detection, the share of alerts investigated, and response time. All three need a baseline before the first change. Alert prioritization then shows in the data, as high-risk alerts reach an analyst first.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-[#050849]/85">
            The platform work behind these results is in our{" "}
            <Link 
              href="/blogs/how-we-implemented-siem-and-soar-large-enterprise" 
              className="font-bold text-blue-700 underline hover:text-blue-900"
            >
              SIEM and SOAR case study
            </Link>.
          </p>
        </section>

        {/* SECTION 8: How does WeRoute run security operations? (Verbatim page 7) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does WeRoute run security operations for enterprises?
          </h2>
          <div className="mt-1 text-xs font-semibold text-blue-700/80">
            Internal link: <Link href="/services/managed-cybersecurity-soc-services" className="underline hover:text-blue-900">Managed Cybersecurity & SOC Services</Link>
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            WeRoute runs a SOC as an ongoing operation. The delivery phases above lead into managed operations that cover monitoring, detection tuning and incident response. Coverage and noise are reviewed on a fixed cadence. The service is described on our{" "}
            <Link 
              href="/services/managed-cybersecurity-soc-services" 
              className="font-bold text-blue-700 underline hover:text-blue-900"
            >
              Managed Cybersecurity & SOC Services
            </Link>{" "}
            page.
          </p>

          <div className="mt-4 rounded-xl bg-gradient-to-r from-[#050849] to-blue-950 p-4 text-white flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold">
              WeRoute has delivered 40+ enterprise deployments with 99.9% system reliability.
            </span>
            <Award size={24} className="text-blue-300 shrink-0 ml-3" />
          </div>
        </section>

        {/* SECTION 9: FREQUENTLY ASKED QUESTIONS (Verbatim page 8) */}
        <section className="mt-12 scroll-mt-28">
          <div className="mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Clear Answers
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
              Frequently asked questions
            </h2>
          </div>

          <BlogFaqAccordion faqs={blog.faqs} />
        </section>

        {/* SECTION 10: PLAN A SOC THAT TRIAGES FASTER CTA (Verbatim page 8) */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-[#050849] p-6 sm:p-8 text-white shadow-xl relative">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
              Transform Your Security Operations
            </span>
            <h3 className="mt-1.5 text-2xl font-extrabold sm:text-3xl">
              Plan a SOC That Triages Faster
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Talk to WeRoute's security team about your alert volume, detection coverage and response times.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-md transition-transform hover:scale-102 hover:bg-blue-500"
              >
                <span>Talk to Our Security Team</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/managed-cybersecurity-soc-services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-semibold text-white hover:bg-white/15"
              >
                <span>Explore Managed SOC</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 11: RELATED SERVICES & READING (Verbatim page 8) */}
        <section className="mt-12 border-t border-slate-200 pt-8 space-y-8">
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED SERVICES
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/services/managed-cybersecurity-soc-services"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex items-center justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    Managed Cybersecurity & SOC Services
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-0.5">24/7 detection, response and managed defense</p>
                </div>
                <ArrowRight size={14} className="text-blue-600 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </Link>
              <Link
                href="/solution/cybersecurity/endpoint-and-cloud-security-services"
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-blue-600 hover:shadow-xs transition-all flex items-center justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#050849] group-hover:text-blue-700">
                    Endpoint & Cloud Security Services
                  </h4>
                  <p className="text-xs text-[#050849]/65 mt-0.5">XDR telemetry and behavioral endpoint defense</p>
                </div>
                <ArrowRight size={14} className="text-blue-600 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED READING
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/blogs/how-we-implemented-siem-and-soar-large-enterprise"
                className="group rounded-xl border border-blue-200 bg-blue-50/50 p-4 shadow-2xs hover:bg-blue-50 hover:border-blue-500 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-blue-700">Case Study</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#050849] group-hover:text-blue-700 mt-0.5">
                    How We Implemented SIEM and SOAR for a Large Enterprise: Cutting Incident Response Time by Up to 75%
                  </h4>
                </div>
                <ArrowRight size={14} className="text-blue-700 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </Link>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs flex items-center justify-between opacity-80">
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-500">Upcoming Guide</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#050849] mt-0.5">
                    MITRE ATT&CK-Based Detection Engineering: A Practical Enterprise Approach
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
