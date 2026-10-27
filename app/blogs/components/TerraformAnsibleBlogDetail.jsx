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
  Terminal,
  Server,
  Layers,
  Cpu,
  CheckCircle2
} from "lucide-react";
import IacOrchestrationPipelineDiagram from "./IacOrchestrationPipelineDiagram";
import NetworkAutomationGateDiagram from "./NetworkAutomationGateDiagram";
import NoFreezeAdoptionDiagram from "./NoFreezeAdoptionDiagram";
import BlogFaqAccordion from "./BlogFaqAccordion";
import DeveloperNotesSection from "./DeveloperNotesSection";

export default function TerraformAnsibleBlogDetail({ blog }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toolComparisonRows = [
    {
      question: "Main job",
      terraform: "Provision infrastructure that does not exist yet",
      ansible: "Configure systems that already exist"
    },
    {
      question: "Model",
      terraform: "Declarative: describe the end state",
      ansible: "Procedural tasks that check state and change only what differs"
    },
    {
      question: "Tracks state",
      terraform: "Yes, in a state file",
      ansible: "No state file. It checks the live system on each run"
    },
    {
      question: "Connects with",
      terraform: "Provider APIs",
      ansible: "SSH or device APIs, with no agent"
    },
    {
      question: "Strongest at",
      terraform: "Networks, compute, storage and managed services",
      ansible: "Packages, files, services and device configuration"
    }
  ];

  return (
    <article className="relative min-h-screen bg-[#f8fafc] text-[#050849] pt-28 pb-20 selection:bg-blue-600 selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[450px] w-[800px] bg-gradient-to-b from-blue-500/10 via-slate-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#050849]/60 mb-5">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
          <ChevronRight size={12} />
          <span className="text-blue-700">Infrastructure as Code</span>
        </nav>

        {/* HEADER BADGES */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
            <Shield size={12} />
            Web Content | SEO + GEO Optimised (Blog)
          </span>
          <span className="inline-flex items-center rounded-full bg-[#050849] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            BLOG | INFRASTRUCTURE AS CODE
          </span>
        </div>

        {/* TITLE */}
        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-[#050849] leading-tight sm:leading-snug">
          Terraform and Ansible: Building Repeatable Enterprise Infrastructure
        </h1>

        {/* META BAR */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-y border-slate-200/80 py-3 text-xs text-[#050849]/70">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#050849]">WeRoute Infrastructure & Automation Practice</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={13} className="text-blue-600" />
              <span>{blog?.date || "Oct 25, 2026"}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={13} className="text-blue-600" />
              <span>{blog?.readTime || "8 min read"}</span>
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
            Terraform and Ansible do different jobs. Terraform builds infrastructure. Ansible configures it. Teams that force one tool to do both jobs create the most common and most expensive infrastructure as code mistake in the enterprise.
          </p>
          <p>
            Running both well is mostly an operations problem. State files, secrets and drift cause far more outages than syntax errors do.
          </p>
          <p>
            This guide covers how to run Terraform and Ansible together at enterprise scale. It explains where each tool fits and which practices prevent outages. It also shows how the same discipline extends to network devices and how to adopt it without a freeze.
          </p>
          <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50/70 p-3.5 text-sm text-[#050849]">
            WeRoute is an enterprise technology services company and Cisco partner. Its automation work covers cloud, data center and network infrastructure for enterprises.
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
              Operations Blueprint
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="font-bold text-[#050849]/60 block text-[11px] uppercase">Topic:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Terraform and Ansible for repeatable enterprise infrastructure
              </p>
            </div>
            <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-200/80">
              <span className="font-bold text-blue-800/80 block text-[11px] uppercase">Core pattern:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Terraform provisions, Ansible configures, CI/CD orchestrates both
              </p>
            </div>
            <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/80">
              <span className="font-bold text-amber-800/80 block text-[11px] uppercase">Main risks:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Shared state, secrets in state files and unmanaged drift
              </p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <span className="font-bold text-emerald-800/80 block text-[11px] uppercase">Distinctive angle:</span>
              <p className="mt-1 font-bold text-emerald-800 leading-snug">
                The same practice applied to switches, routers and firewalls
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 1: How do Terraform and Ansible differ, and when should you use each? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How do Terraform and Ansible differ, and when should you use each?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: terraform vs ansible, infrastructure as code)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Settle the Terraform vs Ansible question first. Infrastructure as code covers two separate activities. Provisioning creates resources such as networks, virtual machines and databases. Configuration sets up what runs on them. The right tool depends on which activity you are doing.
          </p>

          {/* Comparison Table */}
          <div className="my-6 overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#050849] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">Question</th>
                    <th className="p-3.5 font-bold">Terraform</th>
                    <th className="p-3.5 font-bold">Ansible</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-[#050849]/85">
                  {toolComparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80">
                      <td className="p-3.5 font-bold text-[#050849]">{row.question}</td>
                      <td className="p-3.5 font-medium text-blue-800">{row.terraform}</td>
                      <td className="p-3.5 font-medium text-emerald-800">{row.ansible}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            Where is each tool the wrong choice?
          </h3>
          <ul className="mt-2.5 space-y-2 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Terraform for in-guest configuration:</strong> Provisioners can run commands, but Terraform keeps no model of the server afterward. Package versions and file contents drift with no plan showing it.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Ansible for large cloud provisioning:</strong> It can create cloud resources. It keeps no record of what it created, so it cannot plan a change or show what a run would delete.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Ansible as a shell script runner:</strong> A playbook full of raw commands has no idempotency and no check mode.</span>
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            What does the combined pattern look like?
          </h3>
          <ol className="mt-2.5 space-y-2 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">1. Terraform provisions.</span>
              <span>It creates the network, instances and managed services, and exports their addresses as outputs.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">2. Inventory hands off.</span>
              <span>Those outputs, or cloud tags, feed Ansible&apos;s inventory.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">3. Ansible configures.</span>
              <span>It brings each host to the intended state and verifies it.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">4. CI/CD orchestrates.</span>
              <span>The pipeline runs plan, policy checks, review, apply and configuration in order, and records each run.</span>
            </li>
          </ol>

          {/* Diagram 1: IaC Orchestration Pipeline */}
          <IacOrchestrationPipelineDiagram />
        </section>

        {/* SECTION 2: What causes Terraform outages in production? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What causes Terraform outages in production?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: terraform state, terraform remote state, terraform modules, terraform drift detection)
          </div>

          <h3 className="mt-5 text-lg font-bold text-[#050849]">
            Why does Terraform state need a remote backend?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Terraform state links each resource in your configuration to a real object. The default is a local terraform.tfstate file. HashiCorp warns that losing it loses the workspace state. A shared local file also lets two engineers apply at once with different views of the world.
          </p>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            The fix is Terraform remote state: a remote backend with locking.
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Remote storage:</strong> The team shares one state with controlled access.</li>
            <li>• <strong>State locking:</strong> Backends that support it block a second apply while one is running.</li>
            <li>• <strong>Encryption:</strong> State can hold secret values, so encrypt it at rest and restrict access.</li>
          </ul>
          <div className="mt-3 rounded-lg bg-amber-50 p-3 text-xs text-amber-900 border border-amber-200">
            Keep state and the .terraform directory out of Git. The directory can contain backend credentials.
          </div>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            How do you separate environments without copied directories?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Copied directories give you three codebases that diverge. HashiCorp documents CLI workspaces as a way to run several instances of one configuration. It also warns that workspaces are unsuitable when deployments need separate credentials or access controls.
          </p>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            A common enterprise pattern separates concerns:
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>One module, many environments:</strong> Each environment has a thin root configuration that calls the same versioned modules with different inputs.</li>
            <li>• <strong>Separate state per environment:</strong> Production state lives in its own backend with its own credentials.</li>
            <li>• <strong>Promotion by version:</strong> Dev tests module version 1.4. Production adopts 1.4 after approval.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            How should you design Terraform modules?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Terraform modules should model a real concept, such as a standard network or a database tier. HashiCorp advises against thin wrappers around a single resource type. It also recommends a flat module tree over deep nesting.
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Version every module:</strong> Callers pin a version, so a module change never lands unannounced.</li>
            <li>• <strong>Publish to an internal registry:</strong> Teams find approved modules in one place. A private registry or a Git tag works.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            Why is plan review the change-control gate?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Terraform plan shows what an apply would change before anything happens. Risk-averse enterprises accept IaC because of this step. The plan becomes the change record.
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Save the plan:</strong> Use the -out option and apply that exact file, so the reviewed change is the applied change. Treat the file as sensitive, because it holds values in cleartext.</li>
            <li>• <strong>Automate the check:</strong> The -detailed-exitcode flag returns 2 when changes exist, which lets a pipeline route them to review.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            How does drift happen, and how do you detect it?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Drift is a change made outside the Terraform workflow. It happens even in mature teams. An engineer fixes an incident at 2 a.m. in the cloud console, and no one updates the code.
          </p>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Detection needs a schedule:
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Refresh-only plans:</strong> Running plan with -refresh-only compares live objects with state without proposing changes.</li>
            <li>• <strong>Scheduled checks:</strong> HCP Terraform health assessments run about every 24 hours. A nightly pipeline job gives the same result elsewhere.</li>
            <li>• <strong>Resolution:</strong> Either update the code to keep the change, or apply to revert it.</li>
          </ul>
          <p className="mt-2 font-medium text-xs sm:text-sm text-blue-900">
            Terraform drift detection only reports attributes that appear in your configuration. Set the attributes that matter explicitly.
          </p>
        </section>

        {/* SECTION 3: How does Ansible stay reliable in large estates? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does Ansible stay reliable in large estates?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: ansible playbook, ansible idempotency, ansible dynamic inventory)
          </div>

          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">Agentless execution</h3>
              <p className="mt-1 text-sm text-[#050849]/80 leading-relaxed">
                Ansible connects over SSH with existing credentials and needs no agent on managed systems. This lowers adoption friction in network and legacy estates, where installing software is often restricted.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">Idempotency</h3>
              <p className="mt-1 text-sm text-[#050849]/80 leading-relaxed">
                Ansible idempotency means repeating a task gives the same result as running it once. A playbook leaves a system alone when it already matches the described state. Idempotency separates a playbook from a shell script. Use purpose-built modules instead of raw commands, and run check mode before changes.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">Dynamic inventory</h3>
              <p className="mt-1 text-sm text-[#050849]/80 leading-relaxed">
                Ansible dynamic inventory solves a cloud problem. Hosts appear and disappear, and a static file goes stale. Ansible recommends inventory plugins over scripts, and they build the host list from the cloud provider&apos;s API.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <h3 className="text-base font-bold text-[#050849]">Roles</h3>
              <p className="mt-1 text-sm text-[#050849]/80 leading-relaxed">
                A role packages tasks, variables and handlers as a reusable unit. A well-structured Ansible playbook mostly calls roles, so a new team can take it over without a rewrite.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: How does network automation extend infrastructure as code? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does network automation extend infrastructure as code?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: network automation, network automation with ansible)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            Most IaC content stops at cloud servers. Applying the same practice to switches, routers and firewalls is harder. It is also where WeRoute&apos;s experience is most distinctive.
          </p>

          <h3 className="mt-5 text-lg font-bold text-[#050849]">
            How does Ansible manage network devices?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Network automation with Ansible works differently from server automation. Most network devices cannot run Python, so modules run on the control node. Ansible connects through network_cli, netconf or httpapi. Collections cover Arista EOS, Cisco IOS, IOS XR and NX-OS, and Juniper Junos, among others.
          </p>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Network resource modules manage one resource at a time, such as interfaces or VLANs. They support several states:
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Gathered and rendered:</strong> Gathered reads the current configuration from the device. Rendered builds device-native configuration from your data without contacting the device.</li>
            <li>• <strong>Merged, replaced and overridden:</strong> Each applies your data with a different scope. Ansible warns that overridden can remove access to the device.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            How does templating end drift on network devices?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Standardized device configuration comes from one template and one data model per device role. Any manual edit appears as a diff against the template and gets corrected. This is the mechanism that ended configuration drift in the data center fabric described in our modernization roadmap.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            Why do network changes need a stricter gate?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            A bad network change can cut the path that automation uses to reach the device. The gate must be stricter for that reason.
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Render and review offline:</strong> Generate the configuration and diff it against the running one before touching a device.</li>
            <li>• <strong>Back up first:</strong> Save the running configuration before each change.</li>
            <li>• <strong>Apply in small waves:</strong> Start with one device or pair.</li>
            <li>• <strong>Verify, then keep or roll back:</strong> Check reachability and routing after the change. Restore the backup automatically if checks fail.</li>
          </ul>

          {/* Diagram 2: Network Gate */}
          <NetworkAutomationGateDiagram />

          <p className="mt-3 text-sm font-medium text-blue-900">
            Together these practices made sub-hour provisioning possible in the data center. The architecture is in our modernization roadmap.
          </p>
        </section>

        {/* SECTION 5: How do you run infrastructure as code at enterprise scale? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How do you run infrastructure as code at enterprise scale?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: policy as code, infrastructure as code best practices, terraform ci/cd pipeline, terraform secrets management)
          </div>

          <h3 className="mt-5 text-lg font-bold text-[#050849]">
            How should you handle secrets?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Terraform secrets management starts with one fact. Terraform stores secret values in state and plan files. The sensitive flag hides a value from output. It does not remove it from state. Name the pattern, and apply it everywhere.
          </p>
          <ul className="mt-2.5 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Reference, do not embed:</strong> Keep secrets in a secrets manager. Pass a reference or fetch the value at run time.</li>
            <li>• <strong>Keep values out of state:</strong> Terraform 1.10 and later support ephemeral values. Terraform 1.11 adds write-only arguments, which pass a value to a resource without storing it.</li>
            <li>• <strong>Protect what remains:</strong> Encrypt state at rest and limit access to it.</li>
            <li>• <strong>Use Ansible Vault:</strong> Encrypt variables that hold passwords, and prefer SSH keys over passwords.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            What does policy as code add?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Policy as code turns compliance rules into checks that run on every plan. Sentinel and Open Policy Agent (Rego) both evaluate a plan against rules held in version control. A failed policy can stop the run. Typical rules block public storage and require tags.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            What does a good pipeline look like?
          </h3>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Plan on pull request:</strong> Post the plan summary to the pull request.</li>
            <li>• <strong>Apply on merge:</strong> Merge to the main branch triggers the apply.</li>
            <li>• <strong>Approval gate:</strong> For production, require a named approver before apply. This is a design choice. HashiCorp&apos;s standard tutorial relies on pull request review alone.</li>
            <li>• <strong>Single path:</strong> Only the pipeline can write to production.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            Who owns what?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            A workable Terraform CI/CD pipeline needs clear ownership:
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Platform team:</strong> Writes and versions the shared modules.</li>
            <li>• <strong>Application teams:</strong> Consume modules and own their inputs.</li>
          </ul>
          <p className="mt-2 text-sm text-[#050849]/80">
            A platform team avoids becoming a ticket queue when application teams self-serve approved modules. It reviews module changes and leaves individual deployments to the application teams.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            How do you move from manual to IaC without a freeze?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Adopt in steps. No freeze is needed, because import brings existing resources under management without recreating them.
          </p>
          <ol className="mt-3 space-y-2 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">1. Inventory.</span>
              <span>List resources and rank them by risk and change rate.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">2. Import a tier.</span>
              <span>Use import blocks. Terraform can generate the matching resource configuration.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">3. Plan to zero.</span>
              <span>Run plan until it shows no changes. That confirms code matches reality.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">4. Lock the tier.</span>
              <span>Remove manual write access for imported resources. Changes now go through the pipeline.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">5. Repeat.</span>
              <span>Move to the next tier.</span>
            </li>
          </ol>

          {/* Diagram 3: No Freeze Adoption */}
          <NoFreezeAdoptionDiagram />

          <p className="mt-2 text-sm text-[#050849]/80 font-medium">
            This approach follows infrastructure as code best practices.
          </p>
        </section>

        {/* SECTION 6: How does WeRoute help? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does WeRoute help?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Internal link: <Link href="/services/enterprise-network-integration-services" className="underline hover:text-blue-900">Enterprise Network Integration Services</Link>)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            WeRoute designs and delivers infrastructure automation, from Terraform and Ansible pipelines to network device templating. Our{" "}
            <Link href="/services/enterprise-network-integration-services" className="font-bold text-blue-700 underline hover:text-blue-900">
              Enterprise Network Integration Services
            </Link>{" "}
            page describes the approach. Managed Network Services covers daily operation.
          </p>

          <div className="mt-5 rounded-xl bg-[#050849] p-4 text-white flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold">
              WeRoute has delivered 40+ enterprise deployments with 99.9% system reliability.
            </span>
            <Award size={22} className="text-blue-300 shrink-0 ml-3" />
          </div>
        </section>

        {/* SECTION 7: Frequently Asked Questions */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849] mb-4">
            Frequently asked questions
          </h2>
          <BlogFaqAccordion faqs={blog?.faqs} />
        </section>

        {/* SECTION 8: CTA */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-[#050849] p-6 sm:p-8 text-white shadow-xl relative">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Plan Your Infrastructure Automation
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Talk to WeRoute&apos;s automation team about your estate and a path to IaC that needs no freeze.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#B7F36B] px-5 py-3 text-xs font-bold text-[#080357] shadow-md transition-all hover:bg-white cursor-pointer"
              >
                <span>Talk to Our Automation Team</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: RELATED SERVICES & READING */}
        <section className="mt-12 border-t border-slate-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED SERVICES
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/services/enterprise-network-integration-services" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Enterprise Network Integration Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services/managed-network-monitoring-services" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Managed Network Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-readiness-and-migration-strategy" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Cloud Migration & Modernization Services</span>
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
                <Link href="/blogs/legacy-network-to-modern-enterprise-network" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Legacy Network to Modern Enterprise Network: A Practical Modernization Roadmap</span>
                </Link>
              </li>
              <li>
                <Link href="/blogs/cloud-migration-planning-workloads" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Cloud Migration Is Not Just Moving Workloads: What Enterprises Need to Plan First</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 10: DEVELOPER NOTES */}
        <DeveloperNotesSection notes={blog?.developerNotes} />

      </div>
    </article>
  );
}
