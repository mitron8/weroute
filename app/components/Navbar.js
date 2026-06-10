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
  X,
  
} from "lucide-react";
import Link from "next/link";

import Logo from "./Logo";

const MENU = {
  "Who We Are": {
    type: "grid",

    badge: "COMPANY",

    title:
      "Technology consulting built for complex enterprise environments.",

    desc:
      "Explore WeRoute's identity, mission, delivery style, and consulting-first approach.",

    items: [
      {
        icon: <FileText size={18} />,
        title: "Company Overview",
        desc:
          "Enterprise technology consulting and implementation partner.",
          href:"/company-overview"
      },

      {
        icon: <HelpCircle size={18} />,
        title: "Our Mission",
        desc:
          "Reliable, secure, and future-ready IT solutions.",
          href:"/our-mission"
      },

      {
        icon: <Network size={18} />,
        title: "Our Vision",
        desc:
          "Simplifying complex IT environments worldwide.",
          href:"/our-vision"
      },

      {
        icon: <Activity size={18} />,
        title: "Consulting Approach",
        desc:
          "Assessment-first strategy before execution.",
          href:"/consulting-approch"
      },

      {
        icon: <Shield size={18} />,
        title: "Governance",
        desc:
          "Scalability, structure, and measurable outcomes.",
          href:"/governance"
      },
    ],
  },

  "Why WeRoute": {
    type: "grid",

    badge: "WHY CHOOSE US",

    title:
      "Architecture, execution, and security working together.",

    desc:
      "WeRoute combines consulting, implementation, and managed operations into one accountable delivery model.",

    items: [
      {
        icon: <Activity size={18} />,
        title: "Enterprise Delivery",
        desc:
          "Structured governance and SLA-driven execution.",
          href:"/enterprise-delivery"
          
      },

      {
        icon: <Code2 size={18} />,
        title: "Vendor-Agnostic",
        desc:
          "Technology chosen for outcomes, not lock-in.",
          
          
      },

      {
        icon: <Shield size={18} />,
        title: "Secure by Design",
        desc:
          "Security and compliance embedded from day one.",
          href:"/secure-design"
          
      },

      {
        icon: <Wifi size={18} />,
        title: "Operational Clarity",
        desc:
          "Visibility, monitoring, and optimization.",
          href:"/enterprise-delivery"
          
      },

      {
        icon: <Cloud size={18} />,
        title: "Scalable Systems",
        desc:
          "Built for growth, performance, and resilience.",
          href:"/scalable-systems"
          
      },
    ],
  },

  Services: {
    type: "list",

    groups: [
      {
        icon: <Headphones size={18} />,

        title: "Managed Services",

        desc:
          "Run, monitor, secure, and optimize critical IT environments.",

        features: [
          "Managed Data Center Services",
          "Managed Cloud and Hybrid Environments",
          "Network and Infrastructure Observability",
          "Managed Cybersecurity",
          "SOC Operations",
        ],
      },

      {
        icon: <Activity size={18} />,

        title: "Consulting & Advisory Services",

        desc:
          "Strategic guidance for architecture and modernization.",

        features: [
          "IT Strategy and Optimization",
          "Cloud Readiness",
          "Technology Roadmaps",
          "AI and Automation Advisory",
        ],
      },

      {
        icon: <Code2 size={18} />,

        title: "Software & AI Development",

        desc:
          "Custom applications, AI services, and deployment pipelines.",

        features: [
          "AI and ML Development Services",
          "Custom Software Development",
          "Mobile Application Development",
          "Model Deployment and MLOps",
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

        desc:
          "Secure and scalable enterprise connectivity.",

        features: [
          "AI Network Solution",
          "Network Observability",
          "SD-WAN / SD-LAN / SDN",
          "Network as a Service",
        ],
      },

      {
        icon: <Shield size={18} />,

        title: "Cybersecurity Solutions",

        desc:
          "Security controls, operations, and risk management.",

        features: [
          "Endpoint and Cloud Security",
          "SOC / SIEM / SOAR",
          "Zero Trust Architecture",
          "Identity and Access",
        ],
      },
    ],
  },

  Capabilities: {
    type: "grid",

    badge: "CAPABILITIES",

    title:
      "Interconnected capabilities for enterprise transformation.",

    desc:
      "A capability model across networks, cloud, cybersecurity, software, and AI.",

    items: [
      {
        icon: <Wifi size={18} />,
        title: "Network Observability",
        desc:
          "Real-time visibility and root-cause analysis.",
      },

      {
        icon: <Code2 size={18} />,
        title: "Infrastructure as Code",
        desc:
          "Repeatable infrastructure using automation.",
      },

      {
        icon: <Shield size={18} />,
        title: "Security Operations",
        desc:
          "SIEM, SOAR, detection, and response workflows.",
      },

      {
        icon: <Cloud size={18} />,
        title: "Cloud Optimization",
        desc:
          "Cost, governance, uptime, and compliance.",
      },

      {
        icon: <FileText size={18} />,
        title: "Documentation",
        desc:
          "Clear architecture and operational knowledge.",
      },

      {
        icon: <HelpCircle size={18} />,
        title: "Help Center",
        desc:
          "Support workflows and operational enablement.",
      },
    ],
  },
};

const NAV_ITEMS = [
  "Who We Are",
  "Why WeRoute",
  "Services",
  "Solutions",
  "Capabilities",
];

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [activeSub, setActiveSub] = useState(0);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[999] w-full border-b border-white/10 bg-[#080357]/95 backdrop-blur-xl">

      <div className="mx-auto flex h-[88px] max-w-[1500px] items-center justify-between px-8">

        {/* LOGO */}
        <a
          href="/"
          className="flex shrink-0 items-center"
        >
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
              key={item}
              className="relative"
              onMouseEnter={() => {
                setActive(item);
                setActiveSub(0);
              }}
            >
              <button
                className={`relative rounded-xl px-5 py-3 text-[15px] font-semibold transition-all duration-300 ${
                  active === item
                    ? "bg-white/10 text-white"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {item}

                {active === item && (
                  <span className="absolute bottom-1 left-1/2 h-[2px] w-[38px] -translate-x-1/2 rounded-full bg-white" />
                )}
              </button>
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
                          <div
                            key={i}
                            className="group flex gap-5"
                          >

                            <span className="text-[24px] font-bold text-white/20 transition-colors duration-300 group-hover:text-[#6ea6ff]">
                              {String(i + 1).padStart(2, "0")}
                            </span>

                            <span className="text-[18px] font-medium leading-8 text-white/80 transition-colors duration-300 group-hover:text-white">
                              {feature}
                            </span>

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
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            text-white
            xl:hidden
          "
        >

          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}

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
        className={`
          overflow-hidden
          border-t border-white/10
          bg-[#041120]/98
          backdrop-blur-2xl
          transition-all
          duration-500
          xl:hidden
          ${
            mobileOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div className="px-6 py-6">

          <div className="flex flex-col gap-2">

            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  px-5
                  py-4
                  text-left
                  text-[15px]
                  font-semibold
                  text-white/80
                  transition-all
                  duration-300
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                {item}
              </button>
            ))}

          </div>

          {/* MOBILE CTA */}
          <div className="mt-6 flex flex-col gap-3">

            <button
              className="
                rounded-2xl
                bg-white
                px-6
                py-4
                text-sm
                font-semibold
                text-black
              "
            >
              Get Started
            </button>

            <button
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                px-6
                py-4
                text-sm
                font-medium
                text-white
              "
            >
              Contact
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}