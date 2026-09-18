"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
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
  X,
  Cpu,
  Code,
  Users,
  Briefcase,
  BrainCircuit
} from "lucide-react";
import Link from "next/link";

const MENU = {
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
        href: "/services/consulting-advisory",
        desc: "Strategic guidance for architecture and modernization.",
        features: [
          { title: "IT Strategy & Optimization", href: "/services/it-strategy-and-optimization" },
          { title: "Network & Security Assessments", href: "/services/network-and-security-assessments" },
          { title: "Cloud Readiness & Migration Strategy", href: "/services/cloud-readiness-and-migration-strategy" },
          { title: "AI & Automation Advisory", href: "/services/ai-and-automation-advisory" },
          { title: "Technology Selection & Roadmaps", href: "/services/technology-selection-and-roadmaps" },
        ],
      },
      {
        icon: <Users size={18} />,
        title: "Manpower & Staffing Services",
        href: "/services/staffing",
        desc: "Scale your capabilities with specialized IT and engineering talent.",
        features: [
          { title: "Network & Infrastructure Staffing", href: "/services/network-and-infrastructure-staffing" },
          { title: "Cybersecurity & SOC Staffing", href: "/services/cybersecurity-and-soc-staffing" },
          { title: "Cloud, DevOps & Automation Staffing", href: "/services/cloud-devops-and-automation-staffing" },
          { title: "Software & Application Staffing", href: "/services/software-and-application-staffing" },
          { title: "AI / ML & Emerging Technology Staffing", href: "/services/ai-ml-and-emerging-technology-staffing" },
        ],
      },
      {
        icon: <Briefcase size={18} />,
        title: "Professional Services",
        href: "/services/professional-services",
        desc: "End-to-end implementation and project delivery.",
        features: [
          { title: "Network Integration & Modernization", href: "/services/network-integration-and-modernization" },
          { title: "Cloud & DevOps Implementation", href: "/services/cloud-and-devops-implementation" },
          { title: "Infrastructure Automation & Standardization", href: "/services/infrastructure-automation-and-standardization" },
          { title: "Network & Security Architecture Design", href: "/services/network-and-security-architecture-design" },
          { title: "Converged Communications Deployment", href: "/services/converged-communications-deployment" },
          { title: "Mobility & Wireless Implementation", href: "/services/enterprise-mobility-and-wireless-implementation" },
        ],
      },
      {
        icon: <BrainCircuit size={18} />,
        title: "Software & AI Development Services",
        href: "/services/software-ai-development",
        desc: "Enterprise software, AI applications, and intelligent automation built for scale.",
        features: [
          { 
            title: "Model Deployment, MLOps & LLMOps Services", 
            href: "/services/model-deployment-and-mlops" 
          },
          { 
            title: "Enterprise AI & Machine Learning Development Services", 
            href: "/services/ai-ml-development-services" 
          },
          { 
            title: "Enterprise Mobile Application Development Services", 
            href: "/services/mobile-application-development" 
          },
          { 
            title: "Enterprise API Development & Integration Services", 
            href: "/services/enterprise-api-development-and-integration-services" 
          },
        ],
      },
    ],
  },

  Solutions: {
    type: "list",
    groups: [
      {
        icon: <Wifi size={18} />,
        title: "Network & Connectivity",
        href: "/solutions/network-connectivity",
        desc: "Enterprise network design, modernization, and hybrid connectivity.",
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
        href: "/solutions/cloud-and-devOps",
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
        href: "/solutions/cybersecurity",
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
        href: "/solutions/AI-Intelligent-Automation",
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
        href: "/solutions/softwareDigitalEngineering",
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

};

const NAV_ITEMS = [
  { label: "About WeRoute", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [activeSub, setActiveSub] = useState(0);
  const timeoutRef = useRef(null);
  
  // Mobile states
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActive, setMobileActive] = useState(null);

  const clearCloseTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseEnterItem = (label) => {
    clearCloseTimeout();
    if (MENU[label]) {
      setActive(label);
      setActiveSub(0);
    } else {
      setActive(null);
      setActiveSub(0);
    }
  };

  const handleMouseLeave = () => {
    clearCloseTimeout();
    timeoutRef.current = setTimeout(() => {
      setActive(null);
      setActiveSub(0);
    }, 200);
  };

  const closeMenuImmediately = () => {
    clearCloseTimeout();
    setActive(null);
    setActiveSub(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearCloseTimeout();
    };
  }, []);

  // Dark hero theme applies when on homepage AND not scrolled down
  const isHeroTheme = isHomePage && !scrolled;

  return (
    <header 
      className={`fixed left-0 top-0 z-[999] w-full transition-all duration-500 ${
        isHeroTheme
          ? "bg-transparent border-b border-white/10"
          : "border-b border-[#050849]/10 bg-white/90 backdrop-blur-xl shadow-xs"
      }`}
    >
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-6 lg:px-12">
        
        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center">
          <img
            className="h-7 transition-all duration-500"
            src={"/images/logo/weroute.png"}
            style={
              !isHeroTheme
                ? { filter: "brightness(0) saturate(100%) invert(8%) sepia(26%) saturate(6383%) hue-rotate(209deg) brightness(88%) contrast(97%)" } // Dark navy when navbar is white
                : { filter: "none" } // Original logo colors at top
            }
            alt="WeRoute"
          />
        </Link>

        {/* NAVIGATION PILL */}
        <nav 
          onMouseEnter={clearCloseTimeout}
          onMouseLeave={handleMouseLeave}
          className={`relative hidden xl:flex items-center gap-2 rounded-full px-2 py-1.5 backdrop-blur-md transition-all duration-500 ${
            isHeroTheme
              ? "border border-white/15 bg-white/[0.08] shadow-lg shadow-black/10 text-white"
              : "border border-[#050849]/10 bg-white/60 shadow-sm text-[#050849]"
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const hasMenu = Boolean(MENU[item.label]);
            const isCurrent =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href)) ||
              (item.label === "About WeRoute" &&
                [
                  "/company-overview",
                  "/our-mission",
                  "/our-vision",
                  "/consulting-approch",
                  "/governance",
                  "/why-weroute",
                  "/who-we-are",
                ].some((route) => pathname?.startsWith(route)));

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnterItem(item.label)}
              >
                <Link
                  href={item.href}
                  onClick={closeMenuImmediately}
                  className={`relative block rounded-full px-5 py-2 text-[14px] font-semibold transition-all duration-300 ${
                    isHeroTheme
                      ? active === item.label || (!active && isCurrent)
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      : active === item.label || (!active && isCurrent)
                        ? "bg-[#050849]/5 text-[#050849]"
                        : "text-[#050849]/70 hover:text-[#050849] hover:bg-[#050849]/5"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}

          {/* MEGA MENU */}
          {active && MENU[active] && (
            <div
              onMouseEnter={clearCloseTimeout}
              onMouseLeave={handleMouseLeave}
              className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[940px] z-50 before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:content-['']"
            >
              <div className="overflow-hidden rounded-[24px] border border-[#050849]/10 bg-white/98 shadow-[0_40px_100px_rgba(5,8,73,0.18)] backdrop-blur-3xl transition-all duration-300 animate-in fade-in zoom-in-95 text-[#050849]">
                {/* GRID TYPE */}
                {MENU[active].type === "grid" ? (
                  <div className="grid grid-cols-[1.2fr_300px]">
                    {/* LEFT */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 p-10">
                      {MENU[active].items.map((item, i) => (
                        <Link
                          href={item.href}
                          key={i}
                          onClick={closeMenuImmediately}
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
                  <div className="grid grid-cols-[305px_1fr]">
                    {/* LEFT MENU */}
                    <div className="border-r border-[#050849]/10 p-6 bg-[#fafafa]/30">
                      <span className="mb-5 block text-[11px] font-bold tracking-[0.2em] text-[#050849]/40 uppercase">
                        {active}
                      </span>

                      <div className="space-y-1">
                        {MENU[active].groups.map((group, i) => (
                          <Link key={i} href={group.href || "#"} onClick={closeMenuImmediately}>
                            <button
                              onMouseEnter={() => setActiveSub(i)}
                              className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left transition-all duration-300 ${
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
                                onClick={closeMenuImmediately}
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
            </div>
          )}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 xl:hidden shadow-sm ${
            isHeroTheme
              ? "border border-white/20 bg-white/10 text-white"
              : "border border-[#050849]/10 bg-white text-[#050849]"
          }`}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* RIGHT SIDE CTA */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/contact"
            className={`text-[13px] font-bold uppercase tracking-[0.1em] transition-colors ${
              isHeroTheme 
                ? "text-white/80 hover:text-white" 
                : "text-[#050849]/70 hover:text-[#050849]"
            }`}
          >
            Contact
          </Link>
          <a
            href="mailto:sales@weroute.ai"
            className={`
              group
              flex
              items-center
              gap-3
              rounded-full
              pl-6
              pr-2
              py-2
              text-[12px]
              font-bold
              uppercase
              tracking-[0.1em]
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-0.5
              ${
                isHeroTheme
                  ? "bg-white text-[#080357] hover:bg-[#B7F36B]"
                  : "bg-[#050849] text-white hover:bg-[#052440]"
              }
            `}
          >
            Start Project
            <div 
              className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-500 group-hover:translate-x-1 ${
                isHeroTheme ? "bg-[#080357]/10" : "bg-white/20"
              }`}
            >
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
                              <Link
                                href={group.href || "#"}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 text-[#050849] hover:text-[#080357] transition-colors"
                              >
                                <span className="text-[#050849]/60">{group.icon}</span>
                                <span className="text-[15px] font-semibold text-[#050849]">
                                  {group.title}
                                </span>
                              </Link>
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
            <a
              href="mailto:sales@weroute.ai"
              onClick={() => setMobileOpen(false)}
              className="flex justify-center items-center rounded-2xl bg-[#050849] px-6 py-4 text-[15px] font-semibold text-white shadow-lg"
            >
              Start Project
            </a>
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