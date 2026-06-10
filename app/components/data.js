import {
  IcoEye,
  IcoCog,
  IcoShield,
  IcoCloud,
  IcoLayer,
  IcoLink,
  IcoTgt,
  IcoAct,
  IcoSrv,
  IcoUsr,
  IcoZap,
  IcoWifi,
  IcoNet,
  IcoCode,
} from "./Icons";

/* WHY SECTION */
export const WHY = [
  {
    icon: <IcoLayer />,
    n: "01",
    t: "Enterprise-Grade Delivery",
    b: "Structured governance and SLA-driven execution.",
  },
  {
    icon: <IcoLink />,
    n: "02",
    t: "Vendor-Agnostic Architecture",
    b: "Technology selected for business outcomes.",
  },
  {
    icon: <IcoTgt />,
    n: "03",
    t: "Consulting + Implementation",
    b: "Single accountable technology partner.",
  },
  {
    icon: <IcoShield />,
    n: "04",
    t: "Security by Design",
    b: "Embedded security across every layer.",
  },
  {
    icon: <IcoAct />,
    n: "05",
    t: "Long-Term Partnership",
    b: "Continuous optimisation and support.",
  },
];

/* SERVICES */
export const SVCS = [
  {
    icon: <IcoSrv />,
    n: "01",
    t: "Managed Services",
    b: "Enterprise-grade IT operations and support.",
    tags: ["24/7 Monitoring", "SLA", "Operations"],
  },
  {
    icon: <IcoTgt />,
    n: "02",
    t: "Consulting & Advisory",
    b: "Architecture and strategic technology planning.",
    tags: ["Consulting", "Strategy", "Architecture"],
  },
  {
    icon: <IcoUsr />,
    n: "03",
    t: "Manpower & Staffing",
    b: "Skilled engineers and consultants on demand.",
    tags: ["Talent", "Flexible", "Deployment"],
  },
  {
    icon: <IcoZap />,
    n: "04",
    t: "Software & AI Development",
    b: "AI-driven scalable digital systems.",
    tags: ["AI", "Automation", "Software"],
  },
  {
    icon: <IcoWifi />,
    n: "05",
    t: "Network as a Service",
    b: "Managed enterprise connectivity solutions.",
    tags: ["SD-WAN", "Networking", "Cloud"],
  },
];

/* SOLUTIONS */
export const SOLS = [
  {
    icon: <IcoNet />,
    n: "01",
    t: "Network & Connectivity",
    b: "Scalable and resilient enterprise networking.",
  },
  {
    icon: <IcoCloud />,
    n: "02",
    t: "Cloud & DevOps",
    b: "Cloud automation and infrastructure optimisation.",
  },
  {
    icon: <IcoShield />,
    n: "03",
    t: "Cybersecurity",
    b: "Integrated enterprise security operations.",
  },
  {
    icon: <IcoZap />,
    n: "04",
    t: "AI & Automation",
    b: "AI-powered enterprise workflows.",
  },
  {
    icon: <IcoCode />,
    n: "05",
    t: "Software Engineering",
    b: "Scalable enterprise applications.",
  },
];

/* CAPABILITIES */
export const CAPS = [
  {
    icon: <IcoEye />,
    n: "01",
    t: "Network Observability",
    b: "Real-time monitoring and root-cause analysis.",
    tags: [
      "Visibility",
      "Monitoring",
      "Analytics",
    ],
  },
  {
    icon: <IcoCog />,
    n: "02",
    t: "Infrastructure as Code",
    b: "Automated deployments with Terraform and Ansible.",
    tags: [
      "Terraform",
      "Ansible",
      "Automation",
    ],
  },
  {
    icon: <IcoShield />,
    n: "03",
    t: "Security Operations",
    b: "Integrated SIEM and SOAR workflows.",
    tags: [
      "SIEM",
      "SOAR",
      "Security",
    ],
  },
  {
    icon: <IcoCloud />,
    n: "04",
    t: "Cloud Operations",
    b: "Multi-cloud optimisation and governance.",
    tags: [
      "Cloud",
      "Governance",
      "Performance",
    ],
  },
];


/* TRUST PARTNERS */
export const PARTNERS = [
  {
    name: "Cisco",
    abbr: "CI",
    color: "#049fd9",
  },
  {
    name: "AWS",
    abbr: "AW",
    color: "#ff9900",
  },
  {
    name: "Microsoft Azure",
    abbr: "AZ",
    color: "#0078d4",
  },
  {
    name: "Palo Alto",
    abbr: "PA",
    color: "#fa582d",
  },
  {
    name: "CrowdStrike",
    abbr: "CS",
    color: "#e01a22",
  },
  {
    name: "Fortinet",
    abbr: "FT",
    color: "#ee3124",
  },
  {
    name: "Google Cloud",
    abbr: "GC",
    color: "#4285f4",
  },
  {
    name: "VMware",
    abbr: "VM",
    color: "#607078",
  },
];


/* NAVBAR ITEMS */
export const navItems = [
  ["Who We Are", "#who"],
  ["Why WeRoute", "#why"],
  ["Services", "#services"],
  ["Solutions", "#solutions"],
  ["Capabilities", "#capabilities"],
];

export const megaMenus = {
  "Who We Are": {
    items: [
      {
        title: "Company Overview",
        desc: "Enterprise technology consulting and implementation partner.",
      },
      {
        title: "Our Mission",
        desc: "Reliable, secure, and future-ready IT solutions.",
      },
      {
        title: "Our Vision",
        desc: "Simplifying complex IT environments worldwide.",
      },
      {
        title: "Consulting Approach",
        desc: "Assessment-first strategy before execution.",
      },
    ],
  },

  "Why WeRoute": {
    items: [
      {
        title: "Enterprise Delivery",
        desc: "Structured governance and SLA-driven execution.",
      },
      {
        title: "Vendor-Agnostic",
        desc: "Technology chosen for outcomes, not lock-in.",
      },
      {
        title: "Secure by Design",
        desc: "Security embedded from day one.",
      },
      {
        title: "Operational Clarity",
        desc: "Visibility, monitoring, and optimization.",
      },
    ],
  },

  Services: {
    items: [
      {
        title: "Managed Services",
        desc: "Run and optimize enterprise IT operations.",
      },
      {
        title: "Consulting & Advisory",
        desc: "Strategic guidance for modernization.",
      },
      {
        title: "Software & AI",
        desc: "Custom AI and scalable applications.",
      },
      {
        title: "Cloud Solutions",
        desc: "Hybrid and multi-cloud infrastructure.",
      },
    ],
  },

  Solutions: {
    items: [
      {
        title: "Network & Connectivity",
        desc: "Secure and scalable enterprise connectivity.",
      },
      {
        title: "Cybersecurity",
        desc: "SOC, SIEM, Zero Trust, IAM.",
      },
      {
        title: "Cloud & DevOps",
        desc: "Automation and infrastructure optimization.",
      },
      {
        title: "AI Automation",
        desc: "AI-powered enterprise workflows.",
      },
    ],
  },

  Capabilities: {
    items: [
      {
        title: "Network Observability",
        desc: "Deep infrastructure visibility and analytics.",
      },
      {
        title: "Infrastructure as Code",
        desc: "Terraform and Ansible automation.",
      },
      {
        title: "Security Operations",
        desc: "Detection, response, and SIEM workflows.",
      },
      {
        title: "Cloud Optimization",
        desc: "Governance, uptime, and compliance.",
      },
    ],
  },
};


