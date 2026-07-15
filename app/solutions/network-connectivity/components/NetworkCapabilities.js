"use client";

import {
  BrainCircuit,
  Network,
  Eye,
  CloudCog,
  Wifi,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "AI Network Solutions",
    description:
      "AI network solutions use predictive intelligence to catch problems before users notice them, turning your connectivity solution from reactive to genuinely proactive.",
    icon: <BrainCircuit size={24} className="text-[#080357]" />,
    tags: [
      "Predictive Intelligence",
      "AI Operations",
      "Network Automation",
    ],
  },
  {
    number: "02",
    title: "Software-Defined Networking",
    description:
      "WeRoute SD-WAN solutions and SDN architecture replace rigid, expensive infrastructure with software-defined control that adapts as fast as your business does.",
    icon: <Network size={24} className="text-[#080357]" />,
    tags: [
      "SD-WAN",
      "SDN",
      "Enterprise Connectivity",
    ],
  },
  {
    number: "03",
    title: "Network Observability and Assurance",
    description:
      "Network observability gives you the full picture, not just alerts after something breaks. See performance and health across every connected site before it costs you.",
    icon: <Eye size={24} className="text-[#080357]" />,
    tags: [
      "Observability",
      "Network Assurance",
      "Performance Monitoring",
    ],
  },
  {
    number: "04",
    title: "Network as a Service",
    description:
      "Our enterprise connectivity solutions shift the operational burden off your team. WeRoute manages the infrastructure so your engineers focus on what moves the business.",
    icon: <CloudCog size={24} className="text-[#080357]" />,
    tags: [
      "NaaS",
      "Managed SD-WAN",
      "Operational Efficiency",
    ],
  },
  {
    number: "05",
    title: "Mobility and Wireless Solutions",
    description:
      "Enterprise mobility and wireless solutions built on Wi-Fi 6 and Zero Trust Network Access principles, for a workforce that is rarely at one desk.",
    icon: <Wifi size={24} className="text-[#080357]" />,
    tags: [
      "Wi-Fi 6",
      "ZTNA",
      "Enterprise Mobility",
    ],
  },
];

export default function NetworkCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28 text-[#080357]">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#08035708_1px,transparent_1px),linear-gradient(to_bottom,#08035708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-gradient-to-b from-[#080357]/5 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#080357]/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#080357] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#080357]" />
              Network Capabilities
            </span>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Enterprise Networking <br />
              <span className="font-light text-[#080357]/60">
                Engineered to Scale.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-[#080357]/70">
            Modern networking capabilities designed to improve visibility,
            performance, security, automation, and operational efficiency
            across your entire infrastructure.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {capabilities.map((item, index) => {
            const isFullWidth = index === 4;

            return (
              <div
                key={item.title}
                className={`
                  group relative overflow-hidden rounded-[24px] border border-[#080357]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#080357]/30 hover:shadow-xl hover:shadow-[#080357]/5
                  ${
                    index === 0
                      ? "lg:col-span-7"
                      : index === 1
                      ? "lg:col-span-5"
                      : index === 2
                      ? "lg:col-span-5"
                      : index === 3
                      ? "lg:col-span-7"
                      : "lg:col-span-12"
                  }
                  ${isFullWidth ? "lg:p-10" : ""}
                `}
              >
                {/* Top Hover Accent Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-[#080357] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div
                  className={`flex flex-col justify-between h-full ${
                    isFullWidth
                      ? "lg:flex-row lg:items-center lg:gap-12"
                      : "gap-8"
                  }`}
                >
                  {/* Left/Top Content */}
                  <div className={isFullWidth ? "lg:max-w-xl" : ""}>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#080357]/10 bg-[#080357]/[0.03] transition-colors duration-300 group-hover:border-[#080357]/20 group-hover:bg-[#080357]/[0.06]">
                        {item.icon}
                      </div>
                      <span className="font-mono text-sm font-bold text-[#080357]/30">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#080357]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#080357]/70">
                      {item.description}
                    </p>
                  </div>

                  {/* Right/Bottom Content */}
                  <div
                    className={`flex flex-col justify-end gap-6 ${
                      isFullWidth
                        ? "lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:border-l lg:border-[#080357]/10 lg:pl-12"
                        : "mt-auto pt-6 border-t border-[#080357]/5"
                    }`}
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-[#080357]/[0.04] px-3 py-1.5 text-xs font-medium text-[#080357]/80 transition-colors group-hover:bg-[#080357]/[0.08]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className="group/btn inline-flex items-center gap-2 text-sm font-bold text-[#080357] transition-colors hover:text-[#080357]/70 shrink-0">
                      <span>Learn More</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </button>
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