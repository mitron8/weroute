const fs = require('fs');
const path = 'c:/Users/Navin Sah/OneDrive/Desktop/weRoute/weroute-main/weroute-main/data/aiAutomationData.js';
let content = fs.readFileSync(path, 'utf8');

const replacement = `"ai-network-intelligence": {
  hero: {
    badge: "AI Network Operations",
    title: "AI Network Intelligence Services for Modern Enterprise Networks",
    subtitle:
      "WeRoute helps enterprises embed network AI directly into operations, turning network monitoring software and telemetry into predictive network intelligence that prevents issues before they affect users.",
    highlights: [
      "Network AI",
      "Predictive Detection",
      "Behavioral Analysis",
      "Adaptive Optimization"
    ],
    geoStatement: "WeRoute delivers AI for network operations, continuously analyzing network behavior, predicting issues, and recommending optimization before problems affect users or applications.",
    philosophy: "A network that only tells you what already broke isn’t intelligent. It’s just noisy.",
    cta: "Talk to an AI Network Intelligence Expert"
  },

  overview: {
    title: "From Reactive Troubleshooting to Predictive Optimization",
    description:
      "Traditional network monitoring software was built for simpler networks, not today's distributed, cloud-connected enterprise environments.",
    description2:
      "As traffic, devices, and telemetry keep growing, static thresholds and manual dashboards can't keep pace, leaving teams reacting to outages instead of preventing them before they affect users.",
    description3:
      "WeRoute’s AI Network Intelligence Solutions transform network operations from reactive troubleshooting to predictive optimization through behavioral analysis, pattern recognition, and continuous learning."
  },

  whyEssential: {
    title: "Why AI Network Intelligence Matters",
    description:
      "Traditional network monitoring software was built for simpler networks, not today's distributed, cloud-connected enterprise environments. As traffic, devices, and telemetry keep growing, static thresholds and manual dashboards can't keep pace, leaving teams reacting to outages instead of preventing them before they affect users.",
    points: [
      { title: "Distributed Networks", desc: "Enterprise networks now span multiple sites, clouds, and remote users, hard to monitor centrally." },
      { title: "Cloud Connectivity", desc: "Hybrid and multi-cloud connections add complexity that traditional network tools weren't designed for." },
      { title: "Telemetry Growth", desc: "Networks generate more telemetry than manual teams can realistically review in real time." },
      { title: "User Experience", desc: "Performance issues often surface as user complaints before monitoring tools catch the root cause." },
      { title: "Operational Complexity", desc: "More devices, protocols, and connections make manual network troubleshooting slower and less reliable." }
    ]
  },

  challenges: {
    title: "Business Challenges We Solve",
    items: [
      { title: "Performance Degradation", desc: "Gradual performance decline often goes unnoticed until it becomes a full outage." },
      { title: "Slow Root-Cause Analysis", desc: "Manual network root cause analysis takes hours, which teams don't have during an incident." },
      { title: "Alert Fatigue", desc: "Too many low-value alerts bury the few that actually need attention." },
      { title: "Capacity Planning", desc: "Without predictive insight, capacity planning becomes reactive guesswork instead of a proactive process." },
      { title: "Reactive Operations", desc: "Teams spend more time responding to issues than preventing them in the first place." }
    ]
  },

  whatIs: {
    title: "What Is AI Network Intelligence?",
    content: [
      "AI network intelligence, sometimes referred to as AI network monitoring, continuously analyzes network behavior, comparing real-time telemetry against learned baselines to detect anomalies, predict issues, and recommend optimization.",
      "Rather than waiting for a threshold breach, it identifies subtle patterns that signal a problem is forming, which is the foundation of modern AI network management."
    ]
  },

  capabilities: {
    title: "How WeRoute Delivers AI Network Intelligence",
    items: [
      { title: "Behavioral Intelligence", description: "We at WeRoute build behavioral baselines for your network, powering network anomaly detection that tells normal variation apart from a genuine problem." },
      { title: "Predictive Detection", description: "Predictive network monitoring flags early warning signs, giving teams time to act before users are affected." },
      { title: "Contextual Root-Cause Analysis", description: "AI correlates signals across devices and layers, cutting network root cause analysis time from hours to minutes." },
      { title: "Adaptive Optimization", description: "Recommendations adapt continuously as network conditions change, instead of relying on static, one-time tuning." },
      { title: "Operational Simplification", description: "Fewer, higher-quality alerts support intelligent network operations, so teams spend less time triaging noise." }
    ]
  },

  useCases: {
    title: "Where AI Network Intelligence Creates Value",
    items: [
      { title: "Enterprise Campus Networks", description: "Large campus networks with many connected devices benefit from continuous behavioral monitoring." },
      { title: "Hybrid Cloud Networks", description: "Hybrid cloud environments gain unified visibility across on-premises and cloud-connected infrastructure." },
      { title: "SD-WAN Environments", description: "SD-WAN deployments benefit from AI that understands dynamic, software-defined traffic patterns." },
      { title: "Large Distributed Enterprises", description: "Enterprises with multiple sites gain centralized intelligence instead of fragmented, site-by-site monitoring." },
      { title: "Mission-Critical Applications", description: "Applications where downtime is costly benefit most from predictive, before-the-fact detection." }
    ]
  },

  outcomes: {
    title: "Business Outcomes",
    items: [
      { title: "Reduced Downtime", description: "Issues get caught and addressed before they escalate into full network outages." },
      { title: "Faster Root-Cause Identification", description: "AI correlation cuts the time it takes to find the actual source of an issue." },
      { title: "Better User Experience", description: "Fewer disruptions mean employees and customers experience a more reliable network." },
      { title: "Lower Operational Costs", description: "Less manual troubleshooting means network teams spend their time on higher-value work." },
      { title: "Improved Network Planning", description: "Predictive insight into usage trends supports smarter, better-timed capacity decisions." },
      { title: "Increased Operational Intelligence", description: "Teams gain a clearer, continuously updated picture of how the network actually behaves." }
    ]
  },

  whyWeroute: {
    title: "Why Choose WeRoute",
    description: "WeRoute's approach to network automation intelligence combines behavioral baselining with contextual, adaptive response, built around your existing network, not a generic overlay.",
    points: [
      { title: "Enterprise AI Expertise", description: "Deep experience applying AI network intelligence across large, complex enterprise environments means recommendations reflect real-world scale." },
      { title: "Architecture-Led Intelligence", description: "AI is designed around your existing network architecture, not deployed as a generic, one-size-fits-all overlay." },
      { title: "Vendor-Agnostic Integration", description: "WeRoute integrates with your existing network monitoring software and tools rather than forcing a vendor switch." },
      { title: "Operational Excellence", description: "A track record of reliable enterprise network deployments backs every AI network intelligence engagement." },
      { title: "Long-Term AI Maturity", description: "WeRoute supports ongoing tuning and refinement, so network intelligence keeps improving well past initial rollout." }
    ]
  },

  strategyFit: {
    title: "AI Network Intelligence Within Your AI Strategy",
    description: "AI network intelligence is one part of a broader enterprise AI strategy, connecting directly to observability, automation, and AIOps as networks and operations scale together.",
    items: [
      "AI-Driven Observability",
      "Automation & AIOps",
      "AI/ML Model Deployment",
      "Network & Connectivity Solutions",
      "Cloud & DevOps"
    ]
  },

  faq: [
    { question: "What is AI Network Intelligence?", answer: "AI network intelligence uses AI to continuously analyze network behavior, detect anomalies, and predict issues before they affect users or applications." },
    { question: "How does AI improve network operations?", answer: "AI improves network operations by correlating signals across the network, reducing alert noise, and speeding up root cause identification." },
    { question: "How is AI Network Intelligence different from traditional monitoring?", answer: "Traditional monitoring reacts to threshold breaches. AI network intelligence learns normal behavior and flags subtle deviations before they become full outages." },
    { question: "Can AI predict network failures?", answer: "AI can identify early warning patterns that often precede failures, giving teams time to intervene before an outage occurs." },
    { question: "How does AI reduce operational overhead?", answer: "AI reduces operational overhead by filtering out low-value alerts and correlating related signals into a single, actionable issue." },
    { question: "How does AI improve capacity planning?", answer: "AI improves capacity planning by identifying usage trends and forecasting demand, rather than relying on manual, historical guesswork." },
    { question: "What are the benefits of predictive network analytics?", answer: "Predictive network analytics, sometimes called predictive networking, helps teams catch performance issues early, plan capacity more accurately, and reduce the cost of reactive troubleshooting." }
  ],

  cta: {
    title: "Build Enterprise Networks That Think Ahead",
    description: "Talk to WeRoute about bringing AI network intelligence into your operations, before small issues become major outages.",
    button: "Talk to an AI Network Intelligence Expert"
  }
}`;

const regex = /"ai-network-intelligence":\s*{[\s\S]*?},\n"ai-driven-observability"/m;
content = content.replace(regex, replacement + ',\n"ai-driven-observability"');
fs.writeFileSync(path, content);
console.log('Successfully updated aiAutomationData.js');
