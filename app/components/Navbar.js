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
        desc: "Run, monitor, secure, and optimize critical IT environments.",
        features: [
          { title: "Managed Data Center Services", href: "/services/managed-data-center" },
          { title: "Managed Cloud and Hybrid Environments", href: "/services/managed-cloud-hybrid" },
          { title: "Network and Infrastructure Observability", href: "/services/network-infrastructure-observability" },
          { title: "Managed Cybersecurity", href: "/services/managed-cybersecurity" },
          { title: "SOC Operations", href: "/services/soc-operations" },
        ],
      },
      {
        icon: <Activity size={18} />,
        title: "Consulting & Advisory Services",
        desc: "Strategic guidance for architecture and modernization.",
        features: [
          {
            title: "Managed Data Center Services",
            href: "/services/managed-data-center",
          },
          {
            title: "Managed Cloud and Hybrid Environments",
            href: "/services/managed-cloud-hybrid-environments",
          },
          {
            title: "Network and Infrastructure Observability",
            href: "/services/network-infrastructure-observability",
          },
          {
            title: "Managed Cybersecurity",
            href: "/services/managed-cybersecurity",
          },
          {
            title: "SOC Operations",
            href: "/services/soc-operations",
          },
        ],
      },
      {
        icon: <Code2 size={18} />,
        title: "Software & AI Development",
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
      desc: "Build resilient, intelligent, and scalable enterprise networks.",
      features: [
        { title: "AI Network Solutions", href: "/solution/network-connectivity/ai-network-solutions" },
        { title: "SD-WAN / SD-LAN / SDN", href: "/solution/network-connectivity/sd-wan-sd-lan-sdn" },
        { title: "Network Observability & Assurance", href: "/solution/network-connectivity/network-observability-assurance" },
        { title: "Network as a Service (NaaS)", href: "/solution/network-connectivity/network-as-a-service" },
        { title: "Mobility & Wireless Solutions", href: "/solution/network-connectivity/mobility-wireless-solutions" },
      ],
    },
    {
      icon: <Cloud size={18} />,
      title: "Cloud & DevOps",
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
      desc: "Protect users and infrastructure with enterprise-ready security architectures.",
      features: [
        { title: "Endpoint & Cloud Security", href: "/solution/cybersecurity/endpoint-cloud-security" },
        { title: "Identity & Access Management", href: "/solution/cybersecurity/identity-access-management" },
        { title: "SOC / SIEM / SOAR", href: "/solution/cybersecurity/soc-siem-soar" },
        { title: "GRC & Vendor Risk Management", href: "/solution/cybersecurity/grc-vendor-risk" },
        { title: "Zero Trust Architecture", href: "/solution/cybersecurity/zero-trust-architecture" },
      ],
    },
    {
      icon: <Cpu size={18} />, 
      title: "AI & Intelligent Automation",
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
    <header className="fixed left-0 top-0 z-[999] w-full border-b border-white/10 bg-[#080357]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[88px] max-w-[1500px] items-center justify-between px-8">
        {/* LOGO */}
        <a href="/" className="flex shrink-0 items-center">
          <img
            className="h-8 px-15"
            src={"/images/logo/weroute.png"}
            alt="WeRoute"
          />
        </a>

        {/* NAVIGATION */}
        <nav className="relative hidden xl:flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-xl">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                setActive(item.label);
                setActiveSub(0);
              }}
            >
              {/* Updated to Link to support landing page routing */}
              <Link
                href={item.href}
                className={`relative block rounded-xl px-5 py-3 text-[15px] font-semibold transition-all duration-300 ${
                  active === item.label
                    ? "bg-white/10 text-white"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
                {active === item.label && (
                  <span className="absolute bottom-1 left-1/2 h-[2px] w-[38px] -translate-x-1/2 rounded-full bg-white" />
                )}
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
              className="absolute left-1/2 top-[88px] w-[920px] -translate-x-1/2 overflow-hidden rounded-[28px] border border-white/10 bg-[#030b18]/98 shadow-[0_40px_120px_rgba(0,0,0,0.75)] backdrop-blur-2xl transition-all duration-300 animate-in fade-in zoom-in-95"
            >
              {/* GRID TYPE */}
              {MENU[active].type === "grid" ? (
                <div className="grid grid-cols-[1.2fr_340px]">
                  {/* LEFT */}
                  <div className="grid grid-cols-2 gap-x-10 gap-y-12 p-12">
                    {MENU[active].items.map((item, i) => (
                      <Link
                        href={item.href || "#"}
                        key={i}
                        className="group flex gap-4"
                      >
                        <div className="mt-1 text-[#73a8ff] transition-transform duration-300 group-hover:scale-110">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-[21px] font-semibold text-white transition-colors duration-300 group-hover:text-[#84b6ff]">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-[15px] leading-8 text-white/45">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* RIGHT */}
                  <div className="border-l border-white/10 p-10 bg-white/[0.02]">
                    <span className="text-[12px] font-semibold tracking-[0.22em] text-[#79afff]">
                      {MENU[active].badge}
                    </span>
                    <h3 className="mt-5 text-[34px] font-bold leading-[1.15] text-white">
                      {MENU[active].title}
                    </h3>
                    <p className="mt-5 text-[16px] leading-8 text-white/45">
                      {MENU[active].desc}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-[300px_1fr]">
                  {/* LEFT MENU */}
                  <div className="border-r border-white/10 p-10">
                    <span className="mb-6 block text-[12px] font-semibold tracking-[0.22em] text-[#6ea6ff]">
                      {active.toUpperCase()}
                    </span>

                    <div className="space-y-2">
                      {MENU[active].groups.map((group, i) => (
                        <button
                          key={i}
                          onMouseEnter={() => setActiveSub(i)}
                          className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                            activeSub === i
                              ? "bg-white/10"
                              : "hover:bg-white/[0.05]"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-[#73a8ff]">
                              {group.icon}
                            </span>
                            <span className="text-[18px] font-semibold leading-tight text-white">
                              {group.title}
                            </span>
                          </div>
                          <ChevronRight
                            size={18}
                            className={`transition-transform duration-300 ${
                              activeSub === i
                                ? "translate-x-1 text-white"
                                : "text-white/60"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="p-10">
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#79afff]">
                        {MENU[active].groups[activeSub].icon}
                      </div>
                      <div>
                        <span className="text-[12px] font-semibold tracking-[0.22em] text-white/30">
                          {active.toUpperCase()}
                        </span>
                        <h3 className="mt-2 text-[34px] font-bold leading-tight text-white">
                          {MENU[active].groups[activeSub].title}
                        </h3>
                        <p className="mt-3 text-[16px] text-white/45">
                          {MENU[active].groups[activeSub].desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-x-14 gap-y-10">
                      {MENU[active].groups[activeSub].features.map(
                        (feature, i) => (
                          <div key={i} className="group flex gap-5">
                            <Link
                              href={feature.href || "#"}
                              className="group flex gap-5"
                            >
                              <span className="text-[24px] font-bold text-white/20">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="text-[18px] font-medium leading-8 text-white/80 transition-colors group-hover:text-white">
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
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white xl:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#contact"
            className="text-[16px] font-medium text-white/80 transition hover:text-white"
          >
            Contact
          </a>
          <button className="rounded-2xl border border-white/15 bg-white/[0.05] px-8 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-[1.03]">
            Get Started →
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-y-auto border-t border-white/10 bg-[#041120]/98 backdrop-blur-2xl transition-all duration-500 xl:hidden ${
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
                  className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    {/* Link to the landing page */}
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)} // close menu on navigate
                      className="flex-1 px-5 py-4 text-left text-[15px] font-semibold text-white/80 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>

                    {/* Toggle button for mega menu contents */}
                    {menuData && (
                      <button
                        onClick={() => setMobileActive(isExpanded ? null : item.label)}
                        className="flex items-center justify-center border-l border-white/10 px-5 py-4 text-white/60 transition-colors hover:text-white"
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
                    <div className="flex flex-col gap-5 border-t border-white/5 bg-white/[0.02] px-5 py-5">
                      {menuData.type === "grid" ? (
                        <div className="flex flex-col gap-4">
                          {menuData.items.map((subItem, i) => (
                            <Link
                              key={i}
                              href={subItem.href || "#"}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-start gap-3"
                            >
                              <div className="mt-0.5 text-[#73a8ff]">
                                {subItem.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-semibold text-white/90">
                                  {subItem.title}
                                </span>
                                <span className="text-xs text-white/50">
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
                              <div className="flex items-center gap-2 text-[#73a8ff]">
                                {group.icon}
                                <span className="text-sm font-semibold text-white/90">
                                  {group.title}
                                </span>
                              </div>
                              <div className="ml-2 flex flex-col gap-2.5 border-l border-white/10 pl-4">
                                {group.features.map((feature, j) => (
                                  <Link
                                    key={j}
                                    href={feature.href || "#"}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[13px] text-white/60 transition-colors hover:text-white"
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
            <button className="rounded-2xl bg-white px-6 py-4 text-[15px] font-semibold text-black">
              Get Started
            </button>
            <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-[15px] font-medium text-white">
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}