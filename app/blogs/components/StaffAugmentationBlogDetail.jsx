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
  Users,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import EngagementModelsSpectrumDiagram from "./EngagementModelsSpectrumDiagram";
import CostPerProductiveHourDiagram from "./CostPerProductiveHourDiagram";
import HybridEngagementModelDiagram from "./HybridEngagementModelDiagram";
import BlogFaqAccordion from "./BlogFaqAccordion";
import DeveloperNotesSection from "./DeveloperNotesSection";

export default function StaffAugmentationBlogDetail({ blog }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const decisionMatrix = [
    { factor: "Scope", situation: "Fixed scope with written acceptance criteria", model: "Managed outcome" },
    { factor: "Scope", situation: "Scope will change as the roadmap evolves", model: "Dedicated team" },
    { factor: "Management capacity", situation: "A lead has spare hours to direct the work", model: "Staff augmentation" },
    { factor: "Management capacity", situation: "Senior engineers have no spare hours", model: "Dedicated team or managed outcome" },
    { factor: "Duration", situation: "The need lasts under six months", model: "Staff augmentation" },
    { factor: "Duration", situation: "The need lasts 12 months or longer", model: "Dedicated team" },
    { factor: "Knowledge retention", situation: "Your staff must keep the knowledge", model: "Staff augmentation" },
    { factor: "Knowledge retention", situation: "A partner handover can carry the knowledge", model: "Dedicated team" },
    { factor: "Speed", situation: "A named role must contribute within weeks", model: "Staff augmentation" },
    { factor: "Speed", situation: "A capability must be built from zero", model: "Dedicated team" },
  ];

  return (
    <article className="relative min-h-screen bg-[#f8fafc] text-[#050849] pt-28 pb-20 selection:bg-blue-600 selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[450px] w-[800px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#050849]/60 mb-5">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
          <ChevronRight size={12} />
          <span className="text-blue-700">Engagement Models</span>
        </nav>

        {/* HEADER BADGES */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
            <Shield size={12} />
            Web Content | SEO + GEO Optimised (Blog)
          </span>
          <span className="inline-flex items-center rounded-full bg-[#050849] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            BLOG | ENGAGEMENT MODELS
          </span>
        </div>

        {/* TITLE */}
        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-[#050849] leading-tight sm:leading-snug">
          Staff Augmentation vs Dedicated Technology Teams: Which Model Fits Your Project?
        </h1>

        {/* META BAR */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-y border-slate-200/80 py-3 text-xs text-[#050849]/70">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#050849]">WeRoute Technology Services Practice</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={13} className="text-blue-600" />
              <span>{blog?.date || "Oct 20, 2026"}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={13} className="text-blue-600" />
              <span>{blog?.readTime || "7 min read"}</span>
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

        {/* EXECUTIVE INTRO */}
        <div className="mt-6 space-y-3.5 text-base sm:text-[17px] leading-relaxed text-[#050849]/85 font-normal">
          <p>
            Choosing an engagement model is a question about who owns the outcome. Price comes second. The cheapest model is the wrong model whenever the answer to that first question is unclear.
          </p>
          <p>
            The staff augmentation vs dedicated team decision sets your delivery risk, your management load and what you keep when the contract ends. This guide defines the three main models, gives a five-factor decision framework and puts numbers on the hidden costs. It then covers governance and the cases where a hybrid works best.
          </p>
          <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50/70 p-3.5 text-sm text-[#050849]">
            WeRoute is an enterprise technology services company and Cisco partner. It provides specialist engineers and delivery teams across network, security, cloud and AI programs.
          </div>
        </div>

        {/* AT A GLANCE */}
        <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
              <Award size={15} />
              AT A GLANCE
            </span>
            <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              Decision Framework
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="font-bold text-[#050849]/60 block text-[11px] uppercase">Topic:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Staff augmentation, dedicated teams and managed delivery
              </p>
            </div>
            <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-200/80">
              <span className="font-bold text-blue-800/80 block text-[11px] uppercase">Deciding variable:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Who is accountable for the outcome
              </p>
            </div>
            <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/80">
              <span className="font-bold text-amber-800/80 block text-[11px] uppercase">Decision factors:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Scope clarity, management capacity, duration, knowledge retention and speed
              </p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <span className="font-bold text-emerald-800/80 block text-[11px] uppercase">Governance:</span>
              <p className="mt-1 font-bold text-emerald-800 leading-snug">
                Acceptance criteria, access control, IP terms and knowledge transfer
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 1: What are the three engagement models? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What are the three engagement models?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: staff augmentation vs managed services, staff augmentation vs outsourcing, dedicated team model)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Most technology engagements fall into three models. They differ in one respect: who is accountable for the result.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">Staff augmentation</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#050849]/80">
                Individuals join your team. They work to your process and report into your management. You own delivery. Staff augmentation suits a team that has a clear plan and lacks hands or one specific skill. IT staff augmentation of this kind is common for network, cloud and security roles.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">Dedicated team model</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#050849]/80">
                A partner forms a team with its own lead and its own internal process. The team aligns to your goals and works only on your account. Delivery ownership is shared or transferred. In software work, this is usually called a dedicated development team.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">Managed outcome or project delivery</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#050849]/80">
                The partner owns the scope, the timeline and the result. You pay for the deliverable. You accept or reject it against agreed criteria.
              </p>
            </div>
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            In staff augmentation vs managed services, the difference is who answers when the result is wrong. In staff augmentation vs outsourcing, the difference is where management sits. Augmented staff report to your managers. Outsourced work reports to the vendor&apos;s managers.
          </p>

          {/* Table: Model / Who directs daily work / Who owns delivery */}
          <div className="my-6 overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#050849] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">Model</th>
                    <th className="p-3.5 font-bold">Who directs daily work</th>
                    <th className="p-3.5 font-bold">Who owns delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-[#050849]/85">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3.5 font-bold text-[#050849]">Staff augmentation</td>
                    <td className="p-3.5">Your managers</td>
                    <td className="p-3.5 font-semibold text-blue-700">You</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3.5 font-bold text-[#050849]">Dedicated team</td>
                    <td className="p-3.5">The partner&apos;s team lead, aligned to your goals</td>
                    <td className="p-3.5 font-semibold text-indigo-700">Shared or transferred to the partner</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3.5 font-bold text-[#050849]">Managed outcome</td>
                    <td className="p-3.5">The partner</td>
                    <td className="p-3.5 font-semibold text-emerald-700">The partner, for scope, timeline and result</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-[16px] leading-relaxed text-[#050849]/85">
            Accountability is the organizing variable. Headcount and hourly rate follow from it. A model that shifts accountability to the partner usually costs more per hour and takes less of your management time.
          </p>

          {/* Diagram 1: Spectrum */}
          <EngagementModelsSpectrumDiagram />
        </section>

        {/* SECTION 2: Staff augmentation vs dedicated team: how do you decide? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Staff augmentation vs dedicated team: how do you decide?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: staff augmentation vs dedicated team, staff augmentation pros and cons)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Five factors decide the model. Score each one for your project.
          </p>

          <ol className="mt-4 space-y-3 pl-2 text-[15px] sm:text-[16px] text-[#050849]/90">
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 mt-0.5">
                1
              </span>
              <span><strong>Clarity of scope.</strong> Clear scope with written acceptance criteria supports managed delivery. Scope that changes with the roadmap suits a dedicated team. Task-level gaps suit augmentation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 mt-0.5">
                2
              </span>
              <span><strong>Internal management capacity.</strong> Augmentation consumes senior engineers&apos; time. Each augmented engineer needs task direction, code review and help when blocked.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 mt-0.5">
                3
              </span>
              <span><strong>Duration.</strong> A dedicated team takes time to form, so its cost spreads well over a long engagement. Short needs favor augmentation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 mt-0.5">
                4
              </span>
              <span><strong>Knowledge retention.</strong> Each model handles the exit differently. Augmented staff leave knowledge in your repositories only if you require it. A dedicated team holds context until a handover moves it to you.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 mt-0.5">
                5
              </span>
              <span><strong>Speed.</strong> Measure time to productive contribution. A candidate who starts in one week and needs ten weeks to ramp up is slower than one who starts in three weeks and contributes at once.</span>
            </li>
          </ol>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Count which model each answer favors. The table maps common situations to a model.
          </p>

          {/* Decision Matrix Table */}
          <div className="my-6 overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#050849] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">Factor</th>
                    <th className="p-3.5 font-bold">Situation</th>
                    <th className="p-3.5 font-bold">Recommended model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-[#050849]/85">
                  {decisionMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80">
                      <td className="p-3.5 font-semibold text-[#050849]">{row.factor}</td>
                      <td className="p-3.5">{row.situation}</td>
                      <td className="p-3.5 font-bold text-blue-700">{row.model}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 3: What are the staff augmentation pros and cons? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What are the staff augmentation pros and cons?
          </h2>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Staff augmentation pros and cons center on speed and management load.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4">
              <div className="text-sm font-bold text-emerald-900 mb-2">Advantages (Pros)</div>
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span><strong>Speed to start:</strong> IT staff augmentation places engineers in a team that already has a process.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span><strong>Full control:</strong> You set priorities, standards and tooling.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-4">
              <div className="text-sm font-bold text-amber-900 mb-2">Trade-offs (Cons)</div>
              <ul className="space-y-2 text-xs sm:text-sm text-amber-950">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <span><strong>You own delivery:</strong> A late or wrong result is your risk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <span><strong>Management load:</strong> Senior engineers spend hours on direction and review.</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            A dedicated team model reverses this profile. It lowers your management load and builds shared context over time. It needs a longer commitment and a named owner for delivery.
          </p>
        </section>

        {/* SECTION 4: What are the hidden costs of staff augmentation and outsourcing? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What are the hidden costs of staff augmentation and outsourcing?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: hidden costs of outsourcing, knowledge transfer in outsourcing)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            The hidden costs of outsourcing and augmentation sit outside the rate card. Five sources account for most of them.
          </p>

          <ul className="mt-4 space-y-2.5 pl-2 text-[15px] sm:text-[16px] text-[#050849]/90">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Onboarding and ramp-up.</strong> New engineers need access, context and coaching from existing staff. Output stays low until they reach full speed. Brooks described this effect in 1975. Adding people to a late project adds training and communication cost. He later called the rule an outrageous oversimplification. The direction still holds.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Management overhead.</strong> In augmentation, you supply the management. Every augmented engineer draws on senior time for direction and review.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Context loss at rotation.</strong> When a person leaves, undocumented decisions leave too. Decision records, runbooks and an overlap period limit the loss.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Integration friction.</strong> Tooling access, security clearance and code review capacity all slow the first weeks. Review capacity is the usual bottleneck.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Rework.</strong> Work that misses the standard is done twice.</span>
            </li>
          </ul>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            These costs explain why the lowest rate often produces the highest total cost. A worked example shows the effect.
          </p>

          {/* Worked Example Box */}
          <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
            <h3 className="text-base font-bold text-[#050849]">
              Worked example (hypothetical)
            </h3>
            <p className="mt-1 text-xs text-[#050849]/70">
              This example uses assumed figures only. It compares two engineers on a 26-week engagement at 40 hours a week. Internal senior time is valued at $90 an hour.
            </p>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#050849]/90">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                <span><strong>Engineer A at $40 an hour.</strong> Ramp-up takes 10 weeks at half output. A needs 10 hours a week of senior time. Rate cost is $41,600 and senior time adds $23,400, so the total is $65,000. Productive hours are 840. Cost per productive hour is $77.38.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                <span><strong>Engineer B at $60 an hour.</strong> Ramp-up takes 3 weeks at half output. B needs 2 hours a week of senior time. Rate cost is $62,400 and senior time adds $4,680, so the total is $67,080. Productive hours are 980. Cost per productive hour is $68.45.</span>
              </li>
            </ul>

            <div className="mt-3 font-semibold text-xs sm:text-sm text-blue-900 bg-blue-50/80 p-3 rounded-lg border border-blue-200/60">
              The lower-rate engineer costs about $9 more per productive hour and delivers 140 fewer productive hours.
            </div>
          </div>

          {/* Diagram 2: Cost Per Productive Hour */}
          <CostPerProductiveHourDiagram />
        </section>

        {/* SECTION 5: What governance does each model need? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What governance does each model need?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: knowledge transfer in outsourcing, dedicated team model)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Five controls apply to every model.
          </p>

          <div className="mt-6 space-y-5">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">Define done</h3>
              <p className="mt-1 text-sm text-[#050849]/80 leading-relaxed">
                Write acceptance criteria and quality standards before work starts. State the code review rules, the test coverage target and the security scan requirements.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">Set cadence, escalation and single points of accountability</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-[#050849]/80">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Cadence:</strong> Hold a weekly delivery review and a monthly steering review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Escalation path:</strong> Name who to contact at each level and the time limit for a response.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Single accountable owner:</strong> Name one owner on each side. Shared ownership with no name attached means no ownership.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">Control security and access</h3>
              <p className="mt-1 text-sm text-[#050849]/80 leading-relaxed">
                Access for external contributors is the least discussed control and the most consequential one. It matters most in regulated sectors, where auditors review who can reach production systems.
              </p>
              <p className="mt-2 text-sm text-[#050849]/80 leading-relaxed">
                NIST SP 800-53 Rev. 5 control PS-7 sets a baseline. External providers must follow your security policies. Roles and requirements are documented. You are notified when external staff who hold credentials transfer or leave. ISO/IEC 27001 also includes controls for supplier relationships.
              </p>
              <ul className="mt-2.5 space-y-1 text-xs sm:text-sm text-[#050849]/80">
                <li>• <strong>Least privilege:</strong> Grant only the access the role needs.</li>
                <li>• <strong>Named accounts:</strong> Issue one account per person and share none.</li>
                <li>• <strong>Time-bound access:</strong> Set an expiry date and renew it on request.</li>
                <li>• <strong>Same-day removal:</strong> Revoke access on the day a person rotates out.</li>
                <li>• <strong>Logging:</strong> Review external account activity on a schedule.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">State IP ownership and legal terms in the contract</h3>
              <p className="mt-1 text-sm text-[#050849]/80 leading-relaxed">
                Put ownership in writing. In the US, code written by an independent contractor stays with the contractor until a signed written assignment transfers it. Other countries apply different rules, so have counsel confirm the terms for your jurisdiction.
              </p>
              <ul className="mt-2 space-y-1 text-xs sm:text-sm text-[#050849]/80">
                <li>• <strong>Code stewardship:</strong> Keep repositories in your organization&apos;s accounts and require all commits there.</li>
                <li>• <strong>Third-party components:</strong> Require a list of the open-source licenses in use.</li>
                <li>• <strong>Employment status:</strong> Engaging individuals directly as contractors raises classification questions. The IRS common-law test weighs behavioral control, financial control and the type of relationship.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">Start knowledge transfer on day one</h3>
              <p className="mt-1 text-sm text-[#050849]/80 leading-relaxed">
                Knowledge transfer in outsourcing works only when it runs from the first week. Waiting until the exit leaves the partner&apos;s team no time and your team no context.
              </p>
              <ul className="mt-2 space-y-1 text-xs sm:text-sm text-[#050849]/80">
                <li>• <strong>Document as you build:</strong> Keep decision records, runbooks and architecture notes in your repository.</li>
                <li>• <strong>Overlap at rotation:</strong> Require a handover period in which the outgoing and incoming engineers work together.</li>
                <li>• <strong>Accept the handover:</strong> Treat a signed handover checklist as a deliverable. Knowledge transfer in outsourcing ends only when your team accepts it.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: When do specialist skills change the answer? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            When do specialist skills change the answer?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: capacity vs capability, hybrid engagement model, dedicated development team)
          </div>

          <h3 className="mt-5 text-lg font-bold text-[#050849]">
            Why are specialist skills hard to hire and keep?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Cloud, security, network automation, MLOps and data engineering all take years to build and are in demand everywhere. ISC2&apos;s 2024 workforce study shows the pattern for security. 90% of respondents report skills gaps. 64% say skills gaps hurt their organization more than a shortage of headcount. Organizations with a critical or significant skills gap report material breaches at 22%, against 17% overall. 26% struggle to retain in-demand skills.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            Capacity vs capability: which gap do you have?
          </h3>
          <ul className="mt-2 space-y-2 pl-2 text-[15px] sm:text-[16px] text-[#050849]/90">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Capacity gap:</strong> You know how to do the work and lack hands. Staff augmentation fits.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
              <span><strong>Capability gap:</strong> You lack the skill itself. You cannot direct what you cannot evaluate, so augmentation puts the risk on you. A dedicated team or a managed outcome fits.</span>
            </li>
          </ul>
          <p className="mt-2 font-medium text-sm text-blue-900">
            Capacity vs capability is the first question to answer for any specialist role.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            When is a hybrid engagement model correct?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            A hybrid engagement model combines a dedicated core team with augmented specialists. A dedicated development team builds the platform. One MLOps engineer or network automation specialist joins for six months to cover a narrow skill.
          </p>
          <ul className="mt-2.5 space-y-1.5 pl-2 text-sm text-[#050849]/90">
            <li>• <strong>One owner:</strong> The core team lead owns delivery for the specialists too.</li>
            <li>• <strong>One standard:</strong> Specialists work to the core team&apos;s definition of done.</li>
            <li>• <strong>Scoped access:</strong> Give specialists access only to the systems their task needs.</li>
            <li>• <strong>Planned exit:</strong> Set an end date and a knowledge transfer deliverable at the start.</li>
          </ul>

          {/* Diagram 3: Hybrid Engagement Model */}
          <HybridEngagementModelDiagram />
        </section>

        {/* SECTION 7: How does WeRoute help? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does WeRoute help?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Internal link: <Link href="/services/technology-manpower-staffing-services" className="underline hover:text-blue-900">Technology Manpower & Staffing Services</Link>)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            WeRoute offers staff augmentation, dedicated technology teams and project-based delivery, and helps teams choose between them. Our{" "}
            <Link href="/services/technology-manpower-staffing-services" className="font-bold text-blue-700 underline hover:text-blue-900">
              Technology Manpower & Staffing Services
            </Link>{" "}
            page describes the engagement models and role coverage. Specialist pages cover Network & Infrastructure Staffing, Cybersecurity & SOC Staffing and Cloud, DevOps & Automation Staffing.
          </p>

          <div className="mt-5 rounded-xl bg-[#050849] p-4 text-white flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold">
              WeRoute has delivered 40+ enterprise deployments with 99.9% system reliability.
            </span>
            <Award size={22} className="text-blue-300 shrink-0 ml-3" />
          </div>
        </section>

        {/* SECTION 8: Frequently Asked Questions */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849] mb-4">
            Frequently asked questions
          </h2>
          <BlogFaqAccordion faqs={blog?.faqs} />
        </section>

        {/* SECTION 9: CTA */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-[#050849] p-6 sm:p-8 text-white shadow-xl relative">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Choose the Right Engagement Model
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Talk to WeRoute about the model that fits your project.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#B7F36B] px-5 py-3 text-xs font-bold text-[#080357] shadow-md transition-all hover:bg-white cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: RELATED SERVICES & READING */}
        <section className="mt-12 border-t border-slate-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED SERVICES
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/services/technology-manpower-staffing-services" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Technology Manpower & Staffing Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-and-devops-implementation" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Cloud, DevOps & Automation Staffing</span>
                </Link>
              </li>
              <li>
                <Link href="/services/managed-cybersecurity-soc-services" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Cybersecurity & SOC Staffing</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED READING
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/blogs/cloud-migration-planning-workloads" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Cloud Migration Is Not Just Moving Workloads: What Enterprises Need to Plan First</span>
                </Link>
              </li>
              <li>
                <Link href="/blogs/terraform-and-ansible-enterprise-infrastructure" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Terraform and Ansible: Building Repeatable Enterprise Infrastructure</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 11: DEVELOPER NOTES */}
        <DeveloperNotesSection notes={blog?.developerNotes} />

      </div>
    </article>
  );
}
