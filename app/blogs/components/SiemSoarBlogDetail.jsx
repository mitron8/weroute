"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  Shield,
  Check,
  ChevronRight,
  Share2,
  Award
} from "lucide-react";
import SiemSoarArchitectureDiagram from "./SiemSoarArchitectureDiagram";
import MitreAttackGridDiagram from "./MitreAttackGridDiagram";
import SoarWorkflowDiagram from "./SoarWorkflowDiagram";
import BlogFaqAccordion from "./BlogFaqAccordion";

export default function SiemSoarBlogDetail({ blog }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="relative min-h-screen bg-[#f8fafc] text-[#050849] pt-28 pb-20 selection:bg-blue-600 selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[400px] w-[750px] bg-gradient-to-b from-blue-500/8 via-cyan-500/4 to-transparent blur-3xl" />
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

        {/* HEADER BADGES (Verbatim from Page 1) */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
            <Shield size={12} />
            Web Content | SEO + GEO Optimised (Blog)
          </span>
          <span className="inline-flex items-center rounded-full bg-[#050849] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            BLOG | SECURITY OPERATIONS
          </span>
        </div>

        {/* H1 HEADLINE (Verbatim from Page 1) */}
        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-[38px] lg:leading-tight font-extrabold tracking-tight text-[#050849]">
          How We Implemented SIEM and SOAR for a Large Enterprise: Cutting Incident Response Time by Up to 75%
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
                <span>Share Case Study</span>
              </>
            )}
          </button>
        </div>

        {/* EXECUTIVE INTRO (Verbatim from Page 1) */}
        <div className="mt-6 space-y-3.5 text-base sm:text-[17px] leading-relaxed text-[#050849]/85 font-normal">
          <p>
            A large enterprise needed one security operations platform for its servers, databases and network infrastructure. Each system kept its own logs, and the volume of alerts kept rising. Analysts handled incidents by hand, so response was slow.
          </p>
          <p>
            This SIEM implementation case study shows how we solved those problems. We combined Google Chronicle SIEM, SOAR automation and Trend Micro XDR, with detections aligned to MITRE ATT&CK. The platform reduced incident response time by up to 75%.
          </p>
          <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50/70 p-3.5 text-sm text-[#050849]">
            WeRoute is an enterprise technology services company and Cisco partner. Its cybersecurity practice covers managed SOC services, threat detection and response, and incident handling.
          </div>
        </div>

        {/* AT A GLANCE (Verbatim from Page 1) */}
        <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
              <Award size={15} />
              AT A GLANCE
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Verified Production Outcome
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="font-bold text-[#050849]/60 block text-[11px] uppercase">Client:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                A large enterprise with servers, databases and network infrastructure
              </p>
            </div>
            <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/80">
              <span className="font-bold text-amber-800/80 block text-[11px] uppercase">Problem:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                No central visibility, manual response, rising alert volume, weak correlation
              </p>
            </div>
            <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-200/80">
              <span className="font-bold text-blue-800/80 block text-[11px] uppercase">Stack:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Google Chronicle SIEM, SOAR automation, Trend Micro XDR
              </p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <span className="font-bold text-emerald-800/80 block text-[11px] uppercase">Result:</span>
              <p className="mt-1 font-bold text-emerald-700 text-sm leading-snug">
                Incident response time reduced by up to 75%
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 1: Why do large enterprises struggle with security visibility and alert overload? (Verbatim Page 1 & 2) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Why do large enterprises struggle with security visibility and alert overload?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            The client ran a complex, hybrid IT environment. Each system wrote logs in its own format. A firewall log, a database audit log and an operating system event log can describe one incident in three different ways. That mismatch sat behind four problems.
          </p>

          <ul className="mt-4 space-y-2.5 pl-2 text-[15px] text-[#050849]/90">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>No central visibility.</strong> Logs lived in separate systems. No one could follow a single event across servers, databases and network devices.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Manual response.</strong> Analysts handled incidents by hand. Every manual step delayed containment.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Rising alert volume.</strong> The number of security alerts kept increasing, and manual review does not scale with it.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Limited correlation.</strong> Related events from different systems were never linked. Without links, a multi-stage attack looks like unrelated events.</span>
            </li>
          </ul>

          <p className="mt-5 text-[16px] leading-relaxed text-[#050849]/85">
            These problems feed each other. Poor visibility makes correlation hard, and weak correlation produces more alerts. More alerts push analysts toward manual shortcuts, which slows response. Alert overload also hides real incidents. When most alerts are routine, the one that matters is easy to miss.
          </p>

          {/* IBM Benchmark (Verbatim from Page 2) */}
          <div className="my-6 rounded-2xl bg-gradient-to-br from-[#050849] to-[#0a1164] p-5 text-white shadow-md">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-300">
              Industry Benchmark • IBM 2026 Cost of a Data Breach Report
            </span>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              Time drives the cost of an incident. IBM's 2026 Cost of a Data Breach report puts the average time to identify and contain a breach at 247 days. Organizations that used security AI and automation extensively cut that lifecycle by 65 days and saved $1.93 million per breach.
            </p>
            <div className="mt-3.5 flex items-center gap-6 border-t border-white/15 pt-3">
              <div>
                <span className="text-xl font-bold text-emerald-400">65 Days</span>
                <span className="text-xs text-white/70 ml-2">Lifecycle cut</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div>
                <span className="text-xl font-bold text-emerald-400">$1.93M</span>
                <span className="text-xs text-white/70 ml-2">Saved per breach</span>
              </div>
            </div>
          </div>

          <p className="text-[16px] leading-relaxed text-[#050849]/85">
            Automated incident response closes part of that gap. It removes the wait between a detection and the first action. To reduce incident response time, remove the manual handoffs first.
          </p>
        </section>

        {/* SECTION 2: What is a SIEM and SOAR stack, and where does XDR fit? (Verbatim Page 2) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What is a SIEM and SOAR stack, and where does XDR fit?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            A SIEM and SOAR stack pairs a SIEM for detection with a SOAR platform for automated response. Many enterprises add XDR at the endpoint. Each tool has a separate job.
          </p>

          <ul className="mt-4 space-y-2.5 pl-2 text-[15px] text-[#050849]/90">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>SIEM</strong> collects logs from across the environment and correlates them. It detects suspicious activity and gives analysts one place to investigate.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>SOAR</strong> runs predefined playbooks after a detection. It enriches the alert, notifies the team and takes containment actions.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>XDR</strong> correlates telemetry from endpoint, email, network and cloud layers. It includes built-in response actions.</span>
            </li>
          </ul>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            The three tools form one chain. The SIEM and XDR detect threats, and SOAR responds to them. SOAR can only act on what the other two report, so detection quality sets the ceiling for automation.
          </p>

          {/* Sub-section: XDR vs SIEM: what is the difference? (Verbatim Page 2) */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-[#050849] px-4 py-3 text-white">
              <h3 className="text-sm font-bold tracking-wide">
                XDR vs SIEM: what is the difference?
              </h3>
            </div>
            
            <div className="p-4 bg-slate-50/50 border-b border-slate-100 text-xs text-[#050849]/80 leading-relaxed">
              The XDR vs SIEM question comes up in most platform reviews. The two tools solve different problems, as the comparison below shows.
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/70 font-bold text-[#050849]">
                    <th className="p-3 w-1/4">Area</th>
                    <th className="p-3 w-3/8">SIEM</th>
                    <th className="p-3 w-3/8">XDR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/70">
                    <td className="p-3 font-bold text-[#050849]">Data scope</td>
                    <td className="p-3 text-[#050849]/80">Logs from almost any source</td>
                    <td className="p-3 text-[#050849]/80">Curated security telemetry</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <td className="p-3 font-bold text-[#050849]">Main focus</td>
                    <td className="p-3 text-[#050849]/80">Investigation, compliance and rule-based detection</td>
                    <td className="p-3 text-[#050849]/80">Real-time detection and response</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <td className="p-3 font-bold text-[#050849]">Response</td>
                    <td className="p-3 text-[#050849]/80">Typically raises alerts for analysts</td>
                    <td className="p-3 text-[#050849]/80">Built-in actions such as host isolation</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <td className="p-3 font-bold text-[#050849]">Role in the stack</td>
                    <td className="p-3 text-[#050849]/80">Breadth across the environment</td>
                    <td className="p-3 text-[#050849]/80">Depth at the endpoint</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3.5 bg-slate-50/60 border-t border-slate-100 text-xs text-[#050849]/85 space-y-1.5 leading-relaxed">
              <p>
                Most enterprises need both. The SIEM provides breadth, XDR provides depth at the endpoint, and SOAR links both to automated response.
              </p>
              <p>
                Common SIEM SOAR use cases include brute force detection with an automatic account lock and malicious IP blocking.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: How did we design the SIEM and SOAR implementation? (Verbatim Page 3) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How did we design the SIEM and SOAR implementation?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Hybrid environments add a collection problem. Logs come from on-premises servers and databases, from network devices and from cloud services. The SIEM has to ingest all of them continuously, or blind spots return.
          </p>
          <p className="mt-2 text-[15px] font-semibold text-[#050849]">
            The SIEM and SOAR implementation had five parts.
          </p>

          {/* DIAGRAM 1: End-to-End Implementation Architecture */}
          <SiemSoarArchitectureDiagram />

          {/* 5-Part Breakdown Details (Verbatim from Page 3) */}
          <ol className="mt-5 space-y-3 pl-1 text-[15px] text-[#050849]/90">
            <li className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
              <strong>1. Log ingestion.</strong> Google Chronicle SIEM received logs from servers, databases and network devices. It maps incoming logs to a common schema, the Unified Data Model, so one rule can read events from many sources. Google renamed the product Google Security Operations in April 2024. This post keeps the Chronicle name used on the project.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
              <strong>2. Detection engineering.</strong> We built real-time detection use cases aligned with MITRE ATT&CK. A sound use case defines the event pattern, the threshold and the severity before it goes live.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
              <strong>3. Endpoint protection.</strong> Trend Micro XDR, now part of TrendAI Vision One, covered endpoints and servers with behavioural threat detection. It watches process and system behaviour, which catches activity that signature scanning misses.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
              <strong>4. SOAR workflows.</strong> We designed automated workflows for faster incident response. Each workflow takes a detection as its trigger and runs a fixed set of steps.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
              <strong>5. Dashboards and reporting.</strong> Custom dashboards gave real-time monitoring and insights across the platform.
            </li>
          </ol>
        </section>

        {/* SECTION 4: How do MITRE ATT&CK detection use cases work in practice? (Verbatim Page 3 & 4) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How do MITRE ATT&CK detection use cases work in practice?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            MITRE ATT&CK is a public knowledge base of attacker tactics and techniques. Mapping each detection to a technique shows where coverage exists and where gaps remain.
          </p>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Google Chronicle SIEM writes detection rules in YARA-L. Google built the language for writing detections. A rule can correlate events from several sources.
          </p>

          {/* 4 Steps (Verbatim from Page 4) */}
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#050849] mb-2">
              A detection moves through four steps.
            </h4>
            <ol className="space-y-1.5 text-xs text-[#050849]/85 pl-1">
              <li>1. The SIEM receives the event and normalizes it.</li>
              <li>2. A rule matches the event pattern and creates an alert.</li>
              <li>3. The alert carries a severity and its ATT&CK technique.</li>
              <li>4. SOAR picks up the alert and runs the playbook.</li>
            </ol>
          </div>

          <p className="mt-4 text-[15px] font-semibold text-[#050849]">
            We built MITRE ATT&CK detection use cases across five areas.
          </p>

          {/* DIAGRAM 2: MITRE ATT&CK Grid Diagram */}
          <MitreAttackGridDiagram />

          <h4 className="mt-6 text-base font-bold text-[#050849]">
            Five examples show how the logic works.
          </h4>
          <ul className="mt-3 space-y-2 text-[15px] text-[#050849]/85 pl-1">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Brute force attack detection.</strong> Many failed logins against one account, or from one source, raise an alert. The SOAR playbook then locks the account.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Privilege escalation.</strong> A standard account that gains administrative rights triggers an alert.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Web shell detection.</strong> Unusual files and process activity on a web server raise an alert. Attackers use web shells to keep access after the first breach.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>DNS spoofing.</strong> DNS responses that point a known domain to an unexpected address get flagged.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Schema change monitoring.</strong> Database structure changes made outside approved work get flagged.</span>
            </li>
          </ul>

          <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/85">
            Tuning matters as much as coverage. Analysts stop trusting a rule that fires too often. Each detection needs a tested threshold and a review cycle, so alerts stay few enough to act on.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-[#050849]/85">
            Zero-day exploit indicators work differently. No signature exists yet, so these detections look for unusual behaviour. Coverage is never final, because new techniques appear and each one needs a detection or a documented gap.
          </p>
        </section>

        {/* SECTION 5: Which incident responses did we automate? (Verbatim Page 4 & 5) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Which incident responses did we automate?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            SOAR automation handles the repeatable steps, and analysts keep the judgment calls. We automated four responses, each tied to a detection use case from the previous section.
          </p>

          <ul className="mt-3.5 space-y-2 text-[15px] text-[#050849]/85 pl-1">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Account lock for brute force attempts.</strong> The workflow locks the targeted account once the detection fires.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Ransomware containment.</strong> The affected endpoint is isolated, which stops the infected machine from reaching other systems. Analysts can restore its access once they clear it.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Malicious IP and domain blocking.</strong> The address or domain is blocked as soon as it is flagged.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Alert enrichment and notification.</strong> The workflow adds context to the alert and notifies the team.</span>
            </li>
          </ul>

          {/* DIAGRAM 3: Automated Incident Response Flow */}
          <SoarWorkflowDiagram />

          <p className="mt-5 text-[15px] leading-relaxed text-[#050849]/85">
            Enrichment matters more than it looks. An alert with no context costs an analyst time in manual lookups. A workflow typically adds the user, the asset and the source address before anyone opens the alert.
          </p>

          {/* Brute force playbook sequence (Verbatim Page 5) */}
          <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/50 p-4">
            <h4 className="font-bold text-xs text-blue-900 uppercase tracking-wide mb-2">
              A typical brute force playbook runs in this order.
            </h4>
            <ol className="space-y-1.5 text-xs text-blue-950 pl-1">
              <li>1. The detection fires after repeated failed logins.</li>
              <li>2. The workflow adds user, asset and source context.</li>
              <li>3. It locks the account and notifies the SOC.</li>
              <li>4. It records each action for review.</li>
            </ol>
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/85">
            Playbooks have three advantages over manual runbooks. They run the same way every time and act within seconds. They also log every step, so analysts and auditors have a clear record.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-[#050849]/85">
            Automated incident response matters most for ransomware containment. Each minute of delay gives ransomware more time to spread.
          </p>
        </section>

        {/* SECTION 6: What changed after the SIEM and SOAR implementation? (Verbatim Page 5 & 6) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What changed after the SIEM and SOAR implementation?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            The client saw four outcomes.
          </p>

          <ul className="mt-3.5 space-y-2.5 pl-2 text-[15px] text-[#050849]/90">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
              <span><strong>Faster response.</strong> Incident response time fell by up to 75%, because detections now trigger workflows without waiting for manual handling.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Better visibility.</strong> Threat visibility improved across systems, since logs from every monitored system now sit in one platform.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span><strong>Less manual effort.</strong> Automation took over repeatable tasks such as account locks, IP blocks and alert enrichment.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-600 shrink-0" />
              <span><strong>Stronger posture.</strong> Overall security posture improved as operations moved from reactive to proactive.</span>
            </li>
          </ul>

          <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/85">
            We quote the 75% figure as a ceiling. Teams often track incident response time as mean time to respond.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-[#050849]/85">
            To reduce incident response time, the platform combined three changes: central visibility, correlated detections and automated playbooks. The business value in this SIEM implementation case study comes from those layers working together. The client gets better risk management, faster decisions and security operations that scale with the enterprise.
          </p>
        </section>

        {/* SECTION 7: What should enterprises check before a SIEM and SOAR rollout? (Verbatim Page 6) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What should enterprises check before a SIEM and SOAR rollout?
          </h2>


          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Check these points before starting a SIEM and SOAR implementation.
          </p>

          <ul className="mt-3.5 space-y-2.5 pl-2 text-[15px] text-[#050849]/90">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Measure the baseline.</strong> Record mean time to detect and mean time to respond first. A baseline makes the improvement provable.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>List every log source.</strong> Detection quality depends on what feeds the SIEM. Cover every server, database and network device before writing rules.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Plan log volume and retention.</strong> A SIEM stores what it ingests. Decide how long each source must stay searchable.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Map detections to MITRE ATT&CK.</strong> The mapping shows coverage gaps before an attacker finds them.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Pick SIEM SOAR use cases by volume and risk.</strong> Start with high-volume, low-risk cases such as account locks and IP blocks.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Keep approval steps for disruptive actions.</strong> Endpoint isolation can stop a business system. Decide in advance who approves it.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Tune detections on a schedule.</strong> Environments change over time, so rules that fit today can generate noise later.</span>
            </li>
          </ul>
        </section>

        {/* SECTION 8: How does WeRoute deliver security operations for enterprises? (Verbatim Page 6 & 7) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does WeRoute deliver security operations for enterprises?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Internal link: <Link href="/services/managed-cybersecurity-soc-services" className="underline hover:text-blue-900">Managed Cybersecurity & SOC Services</Link>)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            WeRoute runs security operations for enterprises as one connected service. This is the model behind our{" "}
            <Link 
              href="/services/managed-cybersecurity-soc-services" 
              className="font-bold text-blue-700 underline hover:text-blue-900"
            >
              Managed Cybersecurity & SOC Services
            </Link>. The service covers:
          </p>

          <ul className="mt-3 space-y-1.5 pl-2 text-[15px] text-[#050849]/90">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Continuous security monitoring and event analysis</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Threat detection, investigation and incident response</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Vulnerability management</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Reporting and ongoing security improvement</span>
            </li>
          </ul>

          <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/85">
            Analysts triage each incident by severity, escalate it along a defined path and report back to stakeholders.
          </p>

          <div className="mt-4 rounded-xl bg-gradient-to-r from-[#050849] to-blue-950 p-4 text-white flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold">
              WeRoute has delivered 40+ enterprise deployments with 99.9% system reliability.
            </span>
            <Award size={24} className="text-blue-300 shrink-0 ml-3" />
          </div>
        </section>

        {/* SECTION 9: Frequently asked questions (Verbatim Page 7) */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849] mb-4">
            Frequently asked questions
          </h2>

          <BlogFaqAccordion faqs={blog.faqs} />
        </section>

        {/* SECTION 10: Plan Your SIEM and SOAR Implementation (Verbatim Page 7) */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-[#050849] p-6 sm:p-8 text-white shadow-xl relative">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Plan Your SIEM and SOAR Implementation
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Talk to WeRoute's security team about your log sources, detections and response workflows.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-md transition-transform hover:scale-102 hover:bg-blue-500 cursor-pointer"
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

        {/* SECTION 11: RELATED SERVICES (Verbatim Page 7) */}
        <section className="mt-12 border-t border-slate-200 pt-8">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
            RELATED SERVICES
          </h3>

          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/services/managed-cybersecurity-soc-services"
                className="font-bold text-blue-700 hover:text-blue-900 underline flex items-center gap-1.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>Managed Cybersecurity & SOC Services</span>
              </Link>
            </li>
            <li>
              <Link
                href="/solution/cybersecurity/endpoint-and-cloud-security-services"
                className="font-bold text-blue-700 hover:text-blue-900 underline flex items-center gap-1.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>Endpoint & Cloud Security Services</span>
              </Link>
            </li>
          </ul>
        </section>

      </div>
    </article>
  );
}
