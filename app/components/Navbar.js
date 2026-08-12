"use client";

import { useState } from "react";
import {
  ChevronRight,
  Headphones,
  Activity,
  Code2,
  Network,
  Shield,
  Wifi,
  Cloud,
  FileText,
  HelpCircle,
  Menu,
  ArrowRight,
  X,Cpu,Code
} from "lucide-react";
import Link from "next/link";

const MENU = {
  "Who We Are": {
    type: "grid",
    badge: "COMPANY",
    title: "Technology consulting built for complex enterprise environments.",
    desc: "Explore WeRoute's identity, mission, delivery style, and consulting-first approach.",
    items: [
      {
        icon: <FileText size={18} />,
        title: "Company Overview",
        desc: "Enterprise technology consulting and implementation partner.",
        href: "/company-overview",
      },
      {
        icon: <HelpCircle size={18} />,
        title: "Our Mission",
        desc: "Reliable, secure, and future-ready IT solutions.",
        href: "/our-mission",
      },
      {
        icon: <Network size={18} />,
        title: "Our Vision",
        desc: "Simplifying complex IT environments worldwide.",
        href: "/our-vision",
      },
      {
        icon: <Activity size={18} />,
        title: "Consulting Approach",
        desc: "Assessment-first strategy before execution.",
        href: "/consulting-approch",
      },
      {
        icon: <Shield size={18} />,
        title: "Governance",
        desc: "Scalability, structure, and measurable outcomes.",
        href: "/governance",
      },
    ],
  },

  "Why WeRoute": {
    type: "grid",
    badge: "WHY CHOOSE US",
    title: "Architecture, execution, and security working together.",
    desc: "WeRoute combines consulting, implementation, and managed operations into one accountable delivery model.",
    items: [
      {
        icon: <Activity size={18} />,
        title: "Enterprise Delivery",
        desc: "Structured governance and SLA-driven execution.",
        href: "/enterprise-delivery",
      },
      {
        icon: <Code2 size={18} />,
        title: "Vendor-Agnostic",
        desc: "Technology chosen for outcomes, not lock-in.",
        href: "/vendor-agnostic",
      },
      {
        icon: <Shield size={18} />,
        title: "Secure by Design",
        desc: "Security and compliance embedded from day one.",
        href: "/secure-design",
      },
      {
        icon: <Wifi size={18} />,
        title: "Operational Clarity",
        desc: "Visibility, monitoring, and optimization.",
        href: "/operational-clarity",
      },
      {
        icon: <Cloud size={18} />,
        title: "Scalable Systems",
        desc: "Built for growth, performance, and resilience.",
        href: "/scalable-systems",
      },
    ],
  },

  Services: {
    type: "list",
    groups: [
      {
        icon: <Headphones size={18} />,
        title: "Managed Services",
        href: "/services/managed-services",
        desc: "Run, monitor, secure, and optimize critical IT environments.",
        features: [
          { title: "Managed Data Centre Services", href: "/services/managed-data-centre-services" },
          { title: "Managed Network Services", href: "/services/managed-network-services" },
          { title: "Managed Cloud & Hybrid Environments", href: "/services/managed-cloud-hybrid-environment-services" },
          { title: "Managed Cybersecurity & SOC Services", href: "/services/managed-cybersecurity-soc-services" },
        ],
      },
      {
        icon: <Activity size={18} />,
        title: "Consulting & Advisory Services",
        href:"consulting-&-advisory-services",
        desc: "Strategic guidance for architecture and modernization.",
        features: [
          {
            title: "Managed Data Centre Services",
            href: "/services/managed-data-centre-services",
          },
          {
            title: "Managed Network Services",
            href: "/services/managed-network-services",
          },
          {
            title: "Managed Cloud & Hybrid Environments",
            href: "/services/managed-cloud-hybrid-environment-services",
          },
          {
            title: "Managed Cybersecurity & SOC Services",
            href: "/services/managed-cybersecurity-soc-services",
          },
        ],
      },
      {
        icon: <Code2 size={18} />,
        title: "Software & AI Development",
        href:"software-&-ai-development",
        desc: "Custom applications, AI services, and deployment pipelines.",
        features: [
          { title: "AI and ML Development Services", href: "/services/ai-ml-development" },
          { title: "Custom Software Development", href: "/services/custom-software" },
          { title: "Mobile Application Development", href: "/services/mobile-development" },
          { title: "Model Deployment and MLOps", href: "/services/mlops" },
        ],
      },
    ],
  },

Solutions: {
  type: "list",
  groups: [
    {
      icon: <Network size={18} />,
      title: "Network & Connectivity",
      href: "/solutions/network-connectivity", // <-- Added heading route
      desc: "Build resilient, intelligent, and scalable enterprise networks.",
      features: [
        { title: "AI Network Solutions", href: "/solution/network-connectivity/ai-network-solutions" },
        { title: "SD-WAN / SD-LAN / SDN", href: "/solution/network-connectivity/sd-wan-sdn-solutions" },
        { title: "Network Observability & Assurance", href: "/solution/network-connectivity/network-observability" },
        { title: "Network as a Service (NaaS)", href: "/solution/network-connectivity/network-as-a-service" },
        { title: "Mobility & Wireless Solutions", href: "/solution/network-connectivity/mobility-wireless-solutions" },
      ],
    },
    {
      icon: <Cloud size={18} />,
      title: "Cloud & DevOps",
      href: "/solutions/cloud-and-devOps", // <-- Added heading route
      desc: "Enable agility and governance across cloud and hybrid IT environments.",
      features: [
        { title: "Cloud Architecture & Integration", href: "/solution/CloudDevOpsPage/cloud-architecture-integration" },
        { title: "DevOps & Platform Engineering", href: "/solution/CloudDevOpsPage/devops-platform-engineering" },
        { title: "Infrastructure as Code (IaC)", href: "/solution/CloudDevOpsPage/infrastructure-as-code" },
        { title: "Cloud Observability", href: "/solution/CloudDevOpsPage/cloud-observability" },
      ],
    },
    {
      icon: <Shield size={18} />,
      title: "Cybersecurity",
      href: "/solutions/cybersecurity", // <-- Added heading route
      desc: "Protect users and infrastructure with enterprise-ready security architectures.",
      features: [
        { title: "Endpoint & Cloud Security", href: "/solution/cybersecurity/endpoint-and-cloud-security-services" },
        { title: "Identity & Access Management", href: "/solution/cybersecurity/identity-access-management" },
        { title: "SOC / SIEM / SOAR", href: "/solution/cybersecurity/soc-siem-soar" },
        { title: "GRC & Vendor Risk Management", href: "/solution/cybersecurity/grc-vendor-risk-management" },
        { title: "Zero Trust Architecture", href: "/solution/cybersecurity/zero-trust-architecture" },
      ],
    },
    {
      icon: <Cpu size={18} />, 
      title: "AI & Intelligent Automation",
      href: "/solutions/AI-Intelligent-Automation", // <-- Added heading route
      desc: "Apply intelligence to improve operational visibility and decision-making.",
      features: [
        { title: "AI Network Intelligence", href: "/solution/AI-Intelligent-Automation/ai-network-intelligence" },
        { title: "AI-Driven Observability", href: "/solution/AI-Intelligent-Automation/ai-driven-observability" },
        { title: "AI Software Services", href: "/solution/AI-Intelligent-Automation/ai-software-services" },
        { title: "AI/ML Model Deployment", href: "/solution/AI-Intelligent-Automation/ai-ml-model-deployment" },
        { title: "Automation & AIOps", href: "/solution/AI-Intelligent-Automation/automation-aiops" },
      ],
    },
    {
      icon: <Code size={18} />,
      title: "Software & Digital Engineering",
      href: "/solutions/softwareDigitalEngineering", // <-- Added heading route
      desc: "Design and modernize digital platforms that scale seamlessly.",
      features: [
        { title: "Custom Software Development", href: "/solution/softwareDigitalEngineering/custom-software-development" },
        { title: "Enterprise Applications", href: "/solution/softwareDigitalEngineering/enterprise-applications" },
        { title: "Mobile Application Development", href: "/solution/softwareDigitalEngineering/mobile-application-development" },
        { title: "API & Platform Engineering", href: "/solution/softwareDigitalEngineering/api-platform-engineering" },
      ],
    },
  ],
},

  Capabilities: {
    type: "grid",
    badge: "CAPABILITIES",
    title: "Interconnected capabilities for enterprise transformation.",
    desc: "A capability model across networks, cloud, cybersecurity, software, and AI.",
    items: [
      {
        icon: <Wifi size={18} />,
        title: "Network Observability",
        desc: "Real-time visibility and root-cause analysis.",
        href: "/capabilities/network-observability",
      },
      {
        icon: <Code2 size={18} />,
        title: "Infrastructure as Code",
        desc: "Repeatable infrastructure using automation.",
        href: "/capabilities/infrastructure-as-code",
      },
      {
        icon: <Shield size={18} />,
        title: "Security Operations",
        desc: "SIEM, SOAR, detection, and response workflows.",
        href: "/capabilities/security-operations",
      },
      {
        icon: <Cloud size={18} />,
        title: "Cloud Optimization",
        desc: "Cost, governance, uptime, and compliance.",
        href: "/capabilities/cloud-optimization",
      },
      {
        icon: <FileText size={18} />,
        title: "Documentation",
        desc: "Clear architecture and operational knowledge.",
        href: "/capabilities/documentation",
      },
      {
        icon: <HelpCircle size={18} />,
        title: "Help Center",
        desc: "Support workflows and operational enablement.",
        href: "/capabilities/help-center",
      },
    ],
  },
};

// Updated: Array of objects with labels and dedicated landing page links
const NAV_ITEMS = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Why WeRoute", href: "/why-weroute" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Capabilities", href: "/capabilities" },
];

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [activeSub, setActiveSub] = useState(0);
  
  // Mobile states
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActive, setMobileActive] = useState(null);

  return (
    <header className="fixed left-0 top-0 z-[999] w-full border-b border-[#050849]/5 bg-[#fafafa]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* LOGO */}
        <a href="/" className="flex shrink-0 items-center">
          <img
            className="h-7"
            src={"/images/logo/weroute.png"}
            style={{ filter: "brightness(0) saturate(100%) invert(8%) sepia(26%) saturate(6383%) hue-rotate(209deg) brightness(88%) contrast(97%)" }} // Force dark navy color
            alt="WeRoute"
          />
        </a>

        {/* NAVIGATION */}
        <nav className="relative hidden xl:flex items-center gap-2 rounded-full border border-[#050849]/10 bg-white/60 px-2 py-1.5 backdrop-blur-md shadow-sm">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                setActive(item.label);
                setActiveSub(0);
              }}
            >
              <Link
                href={item.href}
                className={`relative block rounded-full px-5 py-2 text-[14px] font-semibold transition-all duration-300 ${
                  active === item.label
                    ? "bg-[#050849]/5 text-[#050849]"
                    : "text-[#050849]/60 hover:text-[#050849] hover:bg-[#050849]/5"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}

          {/* MEGA MENU */}
          {active && (
            <div
              onMouseEnter={() => setActive(active)}
              onMouseLeave={() => {
                setActive(null);
                setActiveSub(0);
              }}
              className="absolute left-1/2 top-[60px] w-[900px] -translate-x-1/2 overflow-hidden rounded-[24px] border border-[#050849]/10 bg-white/95 shadow-[0_40px_100px_rgba(5,8,73,0.1)] backdrop-blur-3xl transition-all duration-300 animate-in fade-in zoom-in-95"
            >
              {/* GRID TYPE */}
              {MENU[active].type === "grid" ? (
                <div className="grid grid-cols-[1.2fr_300px]">
                  {/* LEFT */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 p-10">
                    {MENU[active].items.map((item, i) => (
                      <Link
                        href={item.href}
                        key={i}
                        className="group flex gap-4"
                      >
                        <div className="mt-1 text-[#050849]/40 transition-all duration-300 group-hover:scale-110 group-hover:text-[#050849]">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-[17px] font-semibold text-[#050849] transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-[14px] leading-relaxed text-[#050849]/60">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* RIGHT */}
                  <div className="border-l border-[#050849]/10 p-10 bg-[#fafafa]/50">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#050849]/40 uppercase">
                      {MENU[active].badge}
                    </span>
                    <h3 className="mt-4 text-[26px] font-bold leading-[1.2] text-[#050849]">
                      {MENU[active].title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#050849]/60">
                      {MENU[active].desc}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-[280px_1fr]">
                  {/* LEFT MENU */}
                  <div className="border-r border-[#050849]/10 p-8 bg-[#fafafa]/30">
                    <span className="mb-6 block text-[11px] font-bold tracking-[0.2em] text-[#050849]/40 uppercase">
                      {active}
                    </span>

                    <div className="space-y-1">
                      {MENU[active].groups.map((group, i) => (
                        <Link key={i} href={group.href || "#"}>
                          <button
                            onMouseEnter={() => setActiveSub(i)}
                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-300 ${
                              activeSub === i
                                ? "bg-white shadow-sm border border-[#050849]/5"
                                : "hover:bg-white/50 border border-transparent"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`transition-colors ${activeSub === i ? "text-[#050849]" : "text-[#050849]/40"}`}>
                                {group.icon}
                              </span>
                              <span className="text-[15px] font-semibold leading-tight text-[#050849]">
                                {group.title}
                              </span>
                            </div>
                            <ChevronRight
                              size={16}
                              className={`transition-all duration-300 ${
                                activeSub === i
                                  ? "translate-x-1 text-[#050849]"
                                  : "text-[#050849]/20"
                              }`}
                            />
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="p-10 bg-white">
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#050849]/10 bg-[#fafafa] text-[#050849]">
                        {MENU[active].groups[activeSub].icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#050849]/40 uppercase">
                          {active}
                        </span>
                        <h3 className="mt-1 text-[26px] font-bold leading-tight text-[#050849]">
                          {MENU[active].groups[activeSub].title}
                        </h3>
                        <p className="mt-2 text-[15px] text-[#050849]/60">
                          {MENU[active].groups[activeSub].desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8">
                      {MENU[active].groups[activeSub].features.map(
                        (feature, i) => (
                          <div key={i} className="group flex gap-4">
                            <Link
                              href={feature.href || "#"}
                              className="group flex gap-4 items-start"
                            >
                              <span className="text-[18px] font-bold text-[#050849]/20 group-hover:text-[#050849]/40 transition-colors">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="text-[15px] font-semibold leading-relaxed text-[#050849]/70 transition-colors group-hover:text-[#050849]">
                                {feature.title}
                              </span>
                            </Link>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#050849]/10 bg-white text-[#050849] xl:hidden shadow-sm"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/contact"
            className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#050849]/60 transition-colors hover:text-[#050849]"
          >
            Contact
          </Link>
          <a
            href="#contact"
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              bg-[#050849]
              pl-6
              pr-2
              py-2
              text-[12px]
              font-bold
              uppercase
              tracking-[0.1em]
              text-white
              shadow-[0_10px_20px_rgba(5,8,73,0.15)]
              transition-all
              duration-500
              hover:bg-black
              hover:-translate-y-0.5
            "
          >
            Start Project
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 group-hover:bg-white/30 group-hover:translate-x-1">
              <ArrowRight size={14} />
            </div>
          </a>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-y-auto border-t border-[#050849]/10 bg-[#fafafa]/98 backdrop-blur-2xl transition-all duration-500 xl:hidden ${
          mobileOpen ? "max-h-screen opacity-100 pb-20" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const isExpanded = mobileActive === item.label;
              const menuData = MENU[item.label];

              return (
                <div
                  key={item.label}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[#050849]/10 bg-white/50 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 px-5 py-4 text-left text-[15px] font-semibold text-[#050849]/80 transition-colors hover:text-[#050849]"
                    >
                      {item.label}
                    </Link>

                    {menuData && (
                      <button
                        onClick={() => setMobileActive(isExpanded ? null : item.label)}
                        className="flex items-center justify-center border-l border-[#050849]/10 px-5 py-4 text-[#050849]/60 transition-colors hover:text-[#050849]"
                      >
                        <ChevronRight
                          size={18}
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mega Menu Content Expansion */}
                  {isExpanded && menuData && (
                    <div className="flex flex-col gap-5 border-t border-[#050849]/5 bg-[#fafafa]/50 px-5 py-5">
                      {menuData.type === "grid" ? (
                        <div className="flex flex-col gap-5">
                          {menuData.items.map((subItem, i) => (
                            <Link
                              key={i}
                              href={subItem.href || "#"}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-start gap-4"
                            >
                              <div className="mt-0.5 text-[#050849]/50">
                                {subItem.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[15px] font-semibold text-[#050849]">
                                  {subItem.title}
                                </span>
                                <span className="text-[13px] text-[#050849]/60 mt-0.5">
                                  {subItem.desc}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col gap-6">
                          {menuData.groups.map((group, i) => (
                            <div key={i} className="flex flex-col gap-3">
                              <div className="flex items-center gap-3 text-[#050849]/60">
                                {group.icon}
                                <span className="text-[15px] font-semibold text-[#050849]">
                                  {group.title}
                                </span>
                              </div>
                              <div className="ml-2.5 flex flex-col gap-3 border-l-2 border-[#050849]/10 pl-5">
                                {group.features.map((feature, j) => (
                                  <Link
                                    key={j}
                                    href={feature.href || "#"}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[14px] font-medium text-[#050849]/70 transition-colors hover:text-[#050849]"
                                  >
                                    {feature.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* MOBILE CTA */}
          <div className="mt-8 flex flex-col gap-3">
            <button className="rounded-2xl bg-[#050849] px-6 py-4 text-[15px] font-semibold text-white shadow-lg">
              Start Project
            </button>
            <Link 
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex justify-center items-center rounded-2xl border border-[#050849]/10 bg-white px-6 py-4 text-[15px] font-semibold text-[#050849]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}