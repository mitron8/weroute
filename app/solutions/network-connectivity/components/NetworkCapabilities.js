"use client";

import Link from "next/link";
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
    href: "/solution/network-connectivity/ai-network-solutions",
    description:
      "AI network solutions use predictive intelligence to catch problems before users notice them, turning your connectivity solution from reactive to genuinely proactive.",
    icon: <BrainCircuit size={24} className="text-[#050849]" />,
    tags: ["Predictive Intelligence", "AI Operations", "Network Automation"],
  },
  {
    number: "02",
    title: "SD-WAN / SD-LAN / SDN",
    href: "/solution/network-connectivity/sd-wan-sdn-solutions",
    description:
      "WeRoute SD-WAN solutions and SDN architecture replace rigid, expensive infrastructure with software-defined control that adapts as fast as your business does.",
    icon: <Network size={24} className="text-[#050849]" />,
    tags: ["SD-WAN", "SDN", "Enterprise Connectivity"],
  },
  {
    number: "03",
    title: "Network Observability & Assurance",
    href: "/solution/network-connectivity/network-observability",
    description:
      "Network observability gives you the full picture, not just alerts after something breaks. See performance and health across every connected site before it costs you.",
    icon: <Eye size={24} className="text-[#050849]" />,
    tags: ["Observability", "Network Assurance", "Performance Monitoring"],
  },
  {
    number: "04",
    title: "Network as a Service (NaaS)",
    href: "/solution/network-connectivity/network-as-a-service",
    description:
      "Our enterprise connectivity solutions shift the operational burden off your team. WeRoute manages the infrastructure so your engineers focus on what moves the business.",
    icon: <CloudCog size={24} className="text-[#050849]" />,
    tags: ["NaaS", "Managed SD-WAN", "Operational Efficiency"],
  },
  {
    number: "05",
    title: "Mobility & Wireless Solutions",
    href: "/solution/network-connectivity/mobility-wireless-solutions",
    description:
      "Enterprise mobility and wireless solutions built on Wi-Fi 6 and Zero Trust Network Access principles, for a workforce that is rarely at one desk.",
    icon: <Wifi size={24} className="text-[#050849]" />,
    tags: ["Wi-Fi 6", "ZTNA", "Enterprise Mobility"],
  },
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
              Network Capabilities
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#050849] sm:text-5xl lg:text-6xl">
              Enterprise Networking <br />
              <span className="text-[#98c93c]">Engineered to Scale.</span>
            </h2>
          </div>

          <p className="max-w-md text-base font-medium leading-relaxed text-[#4c658a]">
            Modern networking capabilities designed to improve visibility,
            performance, security, automation, and operational efficiency
            across your entire infrastructure.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {capabilities.map((item, index) => {
            const isFullWidth = index === 4;

            return (
              <div
                key={item.title}
                className={`clay-light group relative overflow-hidden rounded-[32px] border border-[#050849]/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                    ? "lg:col-span-5"
                    : index === 3
                    ? "lg:col-span-7"
                    : "lg:col-span-12"
                } ${isFullWidth ? "lg:p-10" : ""}`}
              >
                <div
                  className={`flex flex-col justify-between h-full ${
                    isFullWidth
                      ? "lg:flex-row lg:items-center lg:gap-12"
                      : "gap-8"
                  }`}
                >
                  <div className={isFullWidth ? "lg:max-w-xl" : ""}>
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

                  <div
                    className={`flex flex-col justify-end gap-6 ${
                      isFullWidth
                        ? "lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:border-l lg:border-[#050849]/5 lg:pl-12"
                        : "mt-auto pt-6 border-t border-[#050849]/5"
                    }`}
                  >
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