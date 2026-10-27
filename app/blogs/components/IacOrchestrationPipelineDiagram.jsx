"use client";

import React from "react";
import { ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";

export default function IacOrchestrationPipelineDiagram() {
  const steps = [
    { title: "Git commit", desc: "Code and module version", dark: true },
    { title: "Plan and policy", desc: "Terraform plan, policy as code", dark: false },
    { title: "Review", desc: "Plan is the change record", dark: false },
    { title: "Terraform apply", desc: "Provision infrastructure", dark: false },
    { title: "Ansible", desc: "Configure and verify", dark: false }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="mb-5 text-center">
        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700">
          Combined Terraform & Ansible CI/CD Orchestration Pattern
        </h4>
        <p className="mt-1 text-xs text-[#050849]/60">
          Terraform provisions, Ansible configures, CI/CD orchestrates both
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3.5">
        {/* Top 5 Steps Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 items-stretch">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-center">
              <div
                className={`w-full flex flex-col justify-center items-center text-center rounded-xl p-3 min-h-[92px] ${
                  step.dark
                    ? "bg-[#050849] text-white"
                    : "border border-slate-200 bg-slate-50 text-[#050849]"
                }`}
              >
                <div className="text-xs font-bold">{step.title}</div>
                <p
                  className={`mt-1 text-[11px] leading-tight ${
                    step.dark ? "text-slate-300" : "text-[#050849]/70"
                  }`}
                >
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#050849]/40 pointer-events-none">
                  <ArrowRight size={13} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Middle Green Validation Banner */}
        <div className="rounded-xl border border-emerald-300 bg-emerald-50/80 p-3 text-center">
          <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
            Validate
          </div>
          <p className="text-xs text-emerald-950 mt-0.5">
            Post-apply checks confirm the intended state before the run is marked complete
          </p>
        </div>

        {/* Bottom Scheduled Drift Check Banner */}
        <div className="rounded-xl border border-amber-300 bg-amber-50/80 p-3 text-center">
          <div className="text-xs font-bold text-amber-900 uppercase tracking-wide">
            Scheduled drift check
          </div>
          <p className="text-xs text-amber-950 mt-0.5">
            Refresh-only plan compares live infrastructure with state. Differences go to a person to keep or revert.
          </p>
        </div>
      </div>
    </div>
  );
}
