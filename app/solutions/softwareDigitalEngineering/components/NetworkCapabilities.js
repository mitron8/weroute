"use client";

import Link from "next/link";
import {
  Code,
  Monitor,
  Smartphone,
  Network,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Custom Software Development",
    description: "We design and build custom software tailored to how your business actually operates, rather than forcing workflows into off-the-shelf tools.",
    icon: <Code size={24} className="text-[#050849]" />,
    tags: ["Bespoke Software", "Workflow Automation", "Legacy Modernization"],
    href: "/solution/softwareDigitalEngineering/custom-software-development",
  },
  {
    number: "02",
    title: "Enterprise Applications",
    description: "We build and modernize enterprise applications that connect core business processes, data, and teams into one coherent system.",
    icon: <Monitor size={24} className="text-[#050849]" />,
    tags: ["Core Systems", "Data Integration", "Process Alignment"],
    href: "/solution/softwareDigitalEngineering/enterprise-applications",
  },
  {
    number: "03",
    title: "Mobile Application Development",
    description: "We design and engineer enterprise mobile applications that extend your systems securely to employees, customers, and partners on any device.",
    icon: <Smartphone size={24} className="text-[#050849]" />,
    tags: ["Enterprise Mobility", "Secure Endpoints", "Cross-Platform"],
    href: "/solution/softwareDigitalEngineering/mobile-application-development",
  },
  {
    number: "04",
    title: "API & Platform Engineering",
    description: "We build APIs and platform infrastructure that let your systems, partners, and products connect and scale without custom rework.",
    icon: <Network size={24} className="text-[#050849]" />,
    tags: ["API-First", "Platform Scalability", "Seamless Integration"],
    href: "/solution/softwareDigitalEngineering/api-platform-engineering",
  }
];

export default function NetworkCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05084908_1px,transparent_1px),linear-gradient(to_bottom,#05084908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="clay-badge-light inline-flex items-center gap-2 rounded-full border border-[#050849]/5 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050849]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#98c93c]" />
              Solution Areas
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#050849] sm:text-5xl lg:text-6xl">
              Software & Digital <br />
              <span className="text-[#98c93c]">Engineering Solutions.</span>
            </h2>
          </div>

          <p className="max-w-md text-base font-medium leading-relaxed text-[#4c658a]">
            We build and modernize custom software, enterprise applications, mobile products, and APIs on an architecture-first, secure-by-design foundation.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {capabilities.map((item, index) => {
            return (
              <div
                key={item.title}
                className={`clay-light group relative overflow-hidden rounded-[24px] border border-[#050849]/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                    ? "lg:col-span-5"
                    : "lg:col-span-7"
                }`}
              >
                <div className="flex flex-col justify-between h-full gap-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f9fc] shadow-sm transition-colors duration-300 group-hover:bg-[#98c93c]">
                        {item.icon}
                      </div>
                      <span className="font-mono text-sm font-bold text-[#050849]/30">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#050849]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-relaxed text-[#4c658a]">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-end gap-6 mt-auto pt-6 border-t border-[#050849]/5">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-[#f7f9fc] px-3 py-1.5 text-xs font-bold text-[#4c658a] transition-colors group-hover:bg-[#050849]/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={item.href}
                      className="group/btn inline-flex items-center gap-2 text-sm font-bold text-[#050849] transition-colors hover:text-[#98c93c] shrink-0"
                    >
                      <span>Learn More</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}