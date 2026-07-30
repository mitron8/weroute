const fs = require('fs');

const newData = {
  hero: {
    badge: "Automation & AIOps Services",
    title: "Automation & AIOps Services",
    subtitle: "WeRoute helps enterprises replace manual, reactive IT operations with intelligent automation and AIOps, reducing noise, accelerating response, and keeping complex environments running reliably at scale.",
    geoStatement: "WeRoute is an enterprise AIOps and IT automation partner that combines intelligent event correlation, automated remediation, and operational governance to keep complex IT environments reliable at scale.",
    philosophy: "Operations should get quieter as your environment gets more complex, not louder.",
    cta: "Request Consultation"
  },

  overview: {
    title: "Why Automation & AIOps Matter",
    description: "Traditional manual IT operations cannot keep pace with modern enterprise complexity. As environments span hybrid cloud, distributed applications, and constant change, the volume of alerts and operational noise grows faster than any team can manually track, correlate, and resolve without help."
  },

  whyEssential: {
    title: "Why Automation & AIOps Matter",
    description: "Traditional manual IT operations cannot keep pace with modern enterprise complexity. As environments span hybrid cloud, distributed applications, and constant change, the volume of alerts and operational noise grows faster than any team can manually track, correlate, and resolve without help.",
    points: [
      { title: "Alert Fatigue", desc: "Thousands of daily alerts bury the few that actually signal a real problem." },
      { title: "Hybrid Complexity", desc: "Hybrid and multi-cloud environments multiply the systems that teams must monitor and correlate." },
      { title: "Slower Response", desc: "Constant alert fatigue slows response time and increases the risk of missed incidents." },
      { title: "Scarce Talent", desc: "Skilled operations talent is scarce, and manual processes do not scale with headcount." },
      { title: "Business Disruption", desc: "A single missed incident can disrupt business-critical services for hours at a time." }
    ]
  },

  whatIs: {
    title: "What Is Automation & AIOps?",
    content: [
      "Automation standardizes repetitive operational tasks so they run consistently without manual effort. AIOps applies artificial intelligence on top of that foundation, correlating events across systems, detecting anomalies, predicting issues before they escalate, and orchestrating intelligent responses across complex enterprise environments, all with governance built in.",
      "The AIOps lifecycle, from raw events through AI correlation, prioritization, and automated response."
    ]
  },

  challenges: {
    title: "Business Challenges We Solve",
    items: [
      { title: "Manual Effort", desc: "Manual operational work consumes hours that could go toward higher-value engineering." },
      { title: "Symptom Chasing", desc: "Without correlation, teams waste time chasing symptoms instead of root causes." },
      { title: "Alert Overload", desc: "Alert overload from disconnected tools drowns out the incidents that matter most." },
      { title: "Inconsistent Outcomes", desc: "Inconsistent manual processes produce inconsistent outcomes across teams and environments." },
      { title: "Unsustainable Scaling", desc: "Scaling operations by adding headcount alone becomes unsustainable as environments grow." },
      { title: "Service Request Bottlenecks", desc: "Repetitive service requests pull skilled staff away from meaningful improvement work." }
    ]
  },

  capabilities: {
    title: "How WeRoute Delivers Automation & AIOps",
    items: [
      { title: "Architecture-Led Design", description: "We design automation architecture and orchestration that connects tools, teams, and workflows into one coordinated operating model." },
      { title: "Intelligent Correlation", description: "Our AIOps performs intelligent event correlation across systems, cutting through noise to surface the incidents that actually matter." },
      { title: "Standardized Remediation", description: "We standardize remediation workflows so common issues resolve consistently, without depending on any one person's knowledge." },
      { title: "Governed Execution", description: "Every automated action operates within clear governance and guardrails, so speed never comes at the cost of control." },
      { title: "Continuous Refinement", description: "We continuously refine automation and AIOps over time, improving coverage and accuracy as your environment evolves." }
    ]
  },

  useCases: {
    title: "Where Automation & AIOps Create Value",
    items: [
      { title: "Enterprise IT Operations", desc: "Enterprise IT operations run more predictably when routine tasks are automated end to end." },
      { title: "Hybrid Cloud Platforms", desc: "Hybrid cloud platforms stay coordinated even as workloads shift across environments." },
      { title: "Network Operation Centers", desc: "Network operation centers rely on incident response automation to resolve issues faster." },
      { title: "Security Operations", desc: "Security operations benefit from faster detection and standardized, governed response workflows." },
      { title: "Digital Services", desc: "Business-critical digital services stay available through proactive, automated issue prevention." }
    ]
  },

  outcomes: {
    title: "Business Outcomes",
    items: [
      { title: "Reduced Repetition", desc: "Teams spend less time on repetitive operational work and more time on improvement." },
      { title: "Faster Resolution", desc: "Incidents get resolved faster, with automated correlation replacing manual investigation." },
      { title: "Improved Reliability", desc: "Services stay reliable as automated systems catch and resolve issues earlier." },
      { title: "Lower Alert Fatigue", desc: "Lower alert fatigue means teams respond faster to the incidents that matter." },
      { title: "Operational Efficiency", desc: "Operational efficiency increases as repetitive tasks move from people to automation." },
      { title: "Stronger Governance", desc: "Stronger governance and compliance come from consistent, auditable automated processes." }
    ]
  },

  whyWeroute: {
    title: "Why Choose WeRoute",
    description: "WeRoute builds automation and AIOps the way enterprise operations demand them: governed, resilient, and built to scale. WeRoute has delivered automation and AIOps capabilities across 40+ enterprise deployments, built on infrastructure engineered for 99.9% system reliability.",
    points: [
      { title: "Proven Platform", desc: "WeRoute brings deep enterprise automation expertise to every engagement, built on a proven AIOps platform, not theory." },
      { title: "Architecture-Led Models", desc: "We design architecture-led operating models first, so automation supports a coherent system rather than isolated fixes." },
      { title: "Governance by Default", desc: "Every automation initiative we deliver is governance-driven by default, with controls built in rather than added later." },
      { title: "Cross-Domain Integration", desc: "We integrate across domains, connecting network, cloud, security, and application operations into one coordinated view." },
      { title: "Long-Term Maturity", desc: "Our relationship continues well beyond initial rollout, building toward long-term operational maturity as your environment evolves." }
    ]
  },

  strategyFit: {
    title: "Automation & AIOps Within Your Enterprise Strategy",
    description: "Automation & AIOps support WeRoute's broader digital transformation initiatives, working alongside observability, model deployment, and cloud engineering to keep enterprise operations resilient at every layer.",
    items: [
      { title: "AI-Driven Observability", href: "#" },
      { title: "AI/ML Model Deployment", href: "#" },
      { title: "Cloud & DevOps", href: "#" },
      { title: "Network Operations", href: "#" },
      { title: "Cybersecurity Solutions", href: "#" }
    ]
  },

  faq: [
    { question: "What is AIOps?", answer: "AIOps is the application of artificial intelligence to IT operations, using machine learning to correlate events, detect anomalies, and automate responses across complex enterprise environments." },
    { question: "How does AIOps differ from traditional IT automation?", answer: "Traditional IT automation executes predefined scripts for known tasks, while AIOps adds intelligence on top, correlating signals and adapting responses to conditions that scripts alone cannot anticipate." },
    { question: "What are the benefits of enterprise automation?", answer: "Enterprise automation reduces manual workload, increases consistency across teams, and frees skilled staff to focus on higher-value work instead of repetitive operational tasks." },
    { question: "How can AIOps reduce alert fatigue?", answer: "AIOps reduces alert fatigue by correlating related alerts into a single incident and filtering out noise, so teams see the handful of signals that actually require action." },
    { question: "How does AIOps improve incident response?", answer: "AIOps improves incident response by identifying root causes faster and, where appropriate, triggering automated remediation before an issue affects users or business operations." },
    { question: "What types of processes can be automated?", answer: "Processes ranging from routine maintenance and provisioning to incident triage and remediation workflows can be automated, provided they are well defined and governed." },
    { question: "How does Automation & AIOps support digital transformation?", answer: "Automation & AIOps supports digital transformation by giving enterprises a stable, efficient operational foundation that new initiatives, platforms, and services can be built on with confidence." }
  ],

  cta: {
    title: "Build Intelligent IT Operations That Scale With Confidence",
    description: "Partner with WeRoute to automate operations, correlate events intelligently, and keep complex environments reliable at scale.",
    button: "Talk to an Automation & AIOps Expert",
    button2: "Request Consultation"
  },
  
  schema: {
    organization: {
      name: "WeRoute",
      description: "Enterprise AIOps and IT automation partner that combines intelligent event correlation, automated remediation, and operational governance.",
      areaServed: "Global",
    },
    service: {
      serviceType: [
        "Automation & AIOps Services",
        "AIOps",
        "Enterprise IT Automation",
        "IT Operations Management",
        "Intelligent Operations",
        "Event Correlation",
        "Incident Response Automation",
        "AIOps Platform",
        "AI Operations",
        "AIOps Solutions",
        "IT Process Automation",
        "Operational Automation"
      ],
    },
  },
  
  seo: {
    title: "Automation & AIOps Services | WeRoute",
    description: "WeRoute helps enterprises replace manual, reactive IT operations with intelligent automation and AIOps, reducing noise and accelerating response.",
    keywords: [
      "AIOps",
      "IT Operations Management",
      "Intelligent Operations",
      "Event Correlation",
      "Incident Response Automation",
      "AIOps Platform",
      "AI Operations",
      "AIOps Solutions",
      "IT Process Automation",
      "Operational Automation",
      "Automation & AIOps Services",
      "Enterprise Automation Services",
      "Enterprise IT Automation",
      "Intelligent IT Operations",
      "AI Operations (AIOps)",
      "Intelligent Automation Services",
      "AI Automation",
      "Business Process Automation",
      "Enterprise Automation Platform",
      "Hyperautomation",
      "Intelligent Process Automation",
      "Enterprise AI Transformation"
    ],
    canonical: "/solutions/AI-Intelligent-Automation/automation-aiops",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Automation & AIOps Services | WeRoute",
      description: "WeRoute helps enterprises replace manual, reactive IT operations with intelligent automation and AIOps.",
      url: "/solutions/AI-Intelligent-Automation/automation-aiops",
      siteName: "WeRoute",
      type: "website",
      images: [
        {
          url: "/images/og/automation-aiops.webp",
          width: 1200,
          height: 630,
          alt: "Automation & AIOps Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Automation & AIOps Services | WeRoute",
      description: "WeRoute helps enterprises replace manual, reactive IT operations with intelligent automation and AIOps.",
      images: ["/images/og/automation-aiops.webp"],
    },
  }
};

const filePath = './data/aiAutomationData.js';
let fileContent = fs.readFileSync(filePath, 'utf8');

// Replace the automation-aiops key until the end of the object/file
const startIndex = fileContent.indexOf('"automation-aiops":');
if (startIndex !== -1) {
  fileContent = fileContent.slice(0, startIndex) + `"automation-aiops": ${JSON.stringify(newData, null, 2)}\n};\n`;
  fs.writeFileSync(filePath, fileContent);
  console.log("Successfully updated automation-aiops");
} else {
  console.error("Could not find the target section to replace.");
}
