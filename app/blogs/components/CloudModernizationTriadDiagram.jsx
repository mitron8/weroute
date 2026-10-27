"use client";

import React from "react";
import { Code2, GitBranch, Activity, CheckCircle2, ArrowRight } from "lucide-react";

export default function CloudModernizationTriadDiagram() {
  const pillars = [
    {
      num: "01",
      title: "Infrastructure as Code",
      subtitle: "Terraform / OpenTofu / CDK",
      icon: Code2,
      badge: "Repeatable & Drift-Free",
      items: [
        "Every VPC, cluster, and policy version-controlled in Git",
        "Zero manual clicks or console configuration drift",
        "Deterministic rebuilds for DR in minutes, not days",
        "Automated security scans in PR approval workflows"
      ],
      role: "Builds the governed cloud environment"
    },
    {
      num: "02",
      title: "CI/CD Deployment Discipline",
      subtitle: "GitOps & Automated Pipelines",
      icon: GitBranch,
      badge: "Elastic Release Cadence",
      items: [
        "Enables true autoscaling through safe micro-releases",
        "Continuous automated unit, smoke & security tests",
        "DORA metrics tracking: lead time & change fail rate",
        "Canary cutovers with instant automated rollback"
      ],
      role: "Changes the environment safely and continuously"
    },
    {
      num: "03",
      title: "Cloud-Native Observability",
      subtitle: "OpenTelemetry & Tracing",
      icon: Activity,
      badge: "Telemetry Feedback Loop",
      items: [
        "Distributed tracing across microservices & managed DBs",
        "Correlated metrics, logs, and egress flow records",
        "Automated anomaly detection before users notice impact",
        "Direct telemetry input for FinOps cost allocation"
      ],
      role: "Proves whether changes perform and succeed"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs">
      <div className="mb-4 border-b border-slate-100 pb-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 font-mono">
          Modernization Capabilities
        </span>
        <h4 className="text-base sm:text-lg font-bold text-[#050849]">
          The Three Operating Capabilities That Turn Migration into Modernization
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map((p) => {
          const Icon = p.icon;

          return (
            <div
              key={p.num}
              className="rounded-xl border border-slate-200/90 bg-[#fbfcfd] p-4 flex flex-col justify-between transition-all hover:border-blue-500 hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                    Pillar {p.num}
                  </span>
                  <div className="p-1.5 rounded-lg bg-blue-50 text-blue-700">
                    <Icon size={14} />
                  </div>
                </div>

                <h5 className="text-sm font-bold text-[#050849] leading-snug">{p.title}</h5>
                <span className="text-[11px] text-slate-500 font-medium block mb-3">{p.subtitle}</span>

                <ul className="space-y-1.5 text-xs text-slate-700 border-t border-slate-100 pt-2.5">
                  {p.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-lg bg-blue-50/80 border border-blue-200/60 p-2 text-[10px] font-semibold text-blue-900">
                {p.role}
              </div>
            </div>
          );
        })}
      </div>

      {/* Triad Interaction Formula */}
      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-center text-xs text-slate-700">
        <span className="font-bold text-[#050849]">The Modernization Flywheel: </span>
        <span>IaC defines infrastructure in code → CI/CD deploys changes safely → Observability validates impact. Without all three, elasticity remains theoretical.</span>
      </div>
    </div>
  );
}
