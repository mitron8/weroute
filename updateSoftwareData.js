const fs = require('fs');

const newData = {
  hero: {
    badge: "AI Application Development Services",
    title: "AI Application Development Services Built for Enterprise Scale",
    subtitle: "WeRoute designs, builds, and operationalizes AI-powered applications that move beyond pilots into everyday enterprise use, backed by governance, integration, and measurable outcomes.",
    geoStatement: "WeRoute is an enterprise AI software development partner that builds production-ready AI applications, from custom AI development through deployment, governance, and long-term optimization.",
    philosophy: "AI that works in production, not just in demos.",
    cta: "Request Consultation"
  },

  overview: {
    title: "Why Enterprise AI Applications Matter",
    description: "Most enterprises have experimented with AI, but few have moved it into daily operations. The gap between a promising pilot and a dependable production system is where digital transformation efforts stall, and where competitive advantage is won or lost across decision-making, automation, and customer experience."
  },

  whyEssential: {
    title: "Why Enterprise AI Applications Matter",
    description: "Most enterprises have experimented with AI, but few have moved it into daily operations. The gap between a promising pilot and a dependable production system is where digital transformation efforts stall, and where competitive advantage is won or lost across decision-making, automation, and customer experience.",
    points: [
      { title: "Digital Transformation Anchor", desc: "AI applications anchor broader digital transformation, connecting legacy systems to new intelligent workflows." },
      { title: "Intelligent Automation", desc: "Repetitive, rules-based work shifts to intelligent automation, freeing teams for higher-value decisions." },
      { title: "Reasoning Over Data", desc: "Enterprise applications increasingly need to reason over data, not just display it." },
      { title: "Faster Responses", desc: "Customers expect faster, more personalized responses, and AI-enabled applications deliver both at scale." },
      { title: "Embedded Workflows", desc: "Embedding AI into core workflows removes manual steps and shortens time to resolution." }
    ]
  },

  whatIs: {
    title: "What Are AI Software Services?",
    content: [
      "AI software services cover the design, engineering, and deployment of applications that embed AI capabilities, including generative AI, directly into enterprise workflows, decision engines, and digital platforms.",
      "Rather than isolated models, these are complete, intelligent software solutions built to integrate with existing systems and deliver measurable business value in production.",
      "The AI application lifecycle, from initial design through continuous optimization in production."
    ]
  },

  challenges: {
    title: "Business Challenges We Solve",
    items: [
      { title: "Stalled Projects", desc: "Promising AI proof-of-concept and pilots often stall, never advancing into dependable production systems." },
      { title: "Integration Issues", desc: "Connecting AI applications with existing workflows and legacy tools is harder than building the model." },
      { title: "Inconsistent Data", desc: "Inconsistent or incomplete data undermines the accuracy AI applications need to earn user trust." },
      { title: "Compliance Risks", desc: "Without governance, AI applications risk compliance gaps, bias, and unpredictable behavior at scale." },
      { title: "Scaling Standards", desc: "Scaling AI across departments requires standards most enterprises have not yet defined." }
    ]
  },

  capabilities: {
    title: "How WeRoute Delivers AI Software Services",
    items: [
      { title: "Embedded AI Design", description: "We design applications with AI embedded from the start, including generative AI development services, aligned to real needs." },
      { title: "Secure Integration", description: "Our AI integration services connect applications securely to existing enterprise systems, data sources, and cloud environments." },
      { title: "Built-In Governance", description: "We build governance into every application, covering data quality, model versioning, access control, and audit visibility." },
      { title: "Full Lifecycle Management", description: "From design through deployment and monitoring, we manage the full AI application lifecycle as one continuous process." },
      { title: "Responsible AI", description: "We integrate AI responsibly, with safeguards for bias, transparency, and accountability built into every deployed application." }
    ]
  },

  useCases: {
    title: "Where AI Software Creates Business Value",
    items: [
      { title: "Custom AI Solutions", desc: "Custom AI solutions turn core business applications intelligent, adapting to context instead of static rules." },
      { title: "AI Copilots", desc: "AI copilots support employees directly inside their existing tools and daily workflows." },
      { title: "Customer Service Automation", desc: "Customer service automation resolves routine queries instantly while routing complex cases to humans." },
      { title: "Workflow Automation", desc: "Workflow automation removes manual handoffs, cutting delays across approvals, records, and reporting." },
      { title: "Decision Support Systems", desc: "Decision support systems surface the right data at the right moment for faster calls." }
    ]
  },

  outcomes: {
    title: "Business Outcomes",
    items: [
      { title: "Faster Shipping", desc: "Teams ship new AI-powered features faster, without rebuilding core systems each time." },
      { title: "Sharper Decisions", desc: "Leaders make sharper decisions, backed by applications that reason over live data." },
      { title: "Less Repetition", desc: "Employees spend less time on repetitive tasks and more time on judgment-driven work." },
      { title: "Dependable Systems", desc: "AI moves from isolated pilots to dependable systems running in daily production." },
      { title: "Better Customer Experience", desc: "Customers experience faster, more relevant responses across every touchpoint in the relationship." },
      { title: "Sustainable Adoption", desc: "Sustainable AI adoption keeps pace with the business instead of outpacing its controls." }
    ]
  },

  whyWeroute: {
    title: "Why Choose WeRoute",
    description: "WeRoute is an AI development company that engineers AI-powered applications the way enterprise software should be built: deliberately, securely, and for the long term. WeRoute has delivered AI-enabled applications across 40+ enterprise deployments, engineered on infrastructure built for 99.9% system reliability.",
    points: [
      { title: "Enterprise AI Discipline", desc: "WeRoute brings enterprise AI development discipline to every application, treating each one as production infrastructure, not an experiment." },
      { title: "Production Architecture", desc: "We build architectures designed for production from day one, not proofs of concept retrofitted later." },
      { title: "Built-In Controls", desc: "Every application we deliver includes governance controls for data, models, and access, built in rather than added on." },
      { title: "Vendor-Agnostic Design", desc: "We design applications that work across your existing cloud, data, and AI model providers, without locking you in." },
      { title: "Continuous Improvement", desc: "Our engagement continues past launch, so applications keep improving as your data, models, and needs evolve." }
    ]
  },

  strategyFit: {
    title: "AI Software Within Your Enterprise Strategy",
    description: "AI software services connect to WeRoute's broader Enterprise AI Strategy, working alongside MLOps, automation, and cloud engineering so that intelligent applications scale as one coordinated system.",
    items: [
      { title: "AI/ML Model Deployment", href: "#" },
      { title: "Automation & AIOps", href: "#" },
      { title: "Cloud & DevOps", href: "#" },
      { title: "Digital Engineering", href: "#" },
      { title: "Enterprise AI Strategy", href: "#" }
    ]
  },

  faq: [
    { question: "What are AI Software Services?", answer: "AI software services are the design, development, and deployment of applications that embed AI capabilities into enterprise workflows and decision-making, built to run reliably in production rather than as standalone experiments." },
    { question: "How do enterprises build AI applications?", answer: "Enterprises typically start with a defined business use case, then design, integrate, and deploy an AI-enabled application on top of existing systems, with governance and monitoring built in from the start." },
    { question: "What is Enterprise AI Development?", answer: "Enterprise AI development is the process of building AI-powered software specifically for large organizations, accounting for existing infrastructure, security requirements, and the scale at which enterprise systems operate." },
    { question: "How can AI improve business applications?", answer: "AI improves business applications by adding capabilities like prediction, personalization, and automated reasoning, so software responds to context instead of following the same fixed steps every time." },
    { question: "How do organizations move AI into production?", answer: "Moving AI into production means treating a model like any other software component: testing it, integrating it with real systems, monitoring its performance, and maintaining it over time." },
    { question: "How does AI integrate with existing software?", answer: "AI typically integrates with existing software through APIs, data pipelines, and workflow connectors, allowing AI capabilities to sit inside tools that employees and customers already use." },
    { question: "How is AI governed in enterprise environments?", answer: "AI governance in an enterprise environment covers data quality, model access, bias monitoring, and audit visibility, ensuring AI applications remain compliant, secure, and predictable as they scale." }
  ],

  cta: {
    title: "Turn AI Ideas into Production Systems",
    description: "Work with WeRoute to design, build, and scale AI-enabled applications that move beyond pilots into everyday enterprise use.",
    button: "Talk to an AI Software Expert",
    button2: "Request Consultation"
  },
  
  schema: {
    organization: {
      name: "WeRoute",
      description: "Enterprise AI software development partner that builds production-ready AI applications.",
      areaServed: "Global",
    },
    service: {
      serviceType: [
        "AI Application Development Services",
        "Custom AI Development",
        "Generative AI Development Services",
        "AI Software Services",
        "Enterprise AI Solutions"
      ],
    },
  },
  
  seo: {
    title: "AI Application Development Services | Enterprise AI Software | WeRoute",
    description: "WeRoute designs and builds AI-powered applications that move beyond pilots into everyday enterprise use, backed by governance and integration.",
    keywords: [
      "Generative AI Development Services",
      "AI Application Development Services",
      "AI Integration Services",
      "Custom AI Solutions",
      "Enterprise AI",
      "Custom AI Development",
      "Generative AI",
      "Intelligent Software Solutions",
      "AI Software Development",
      "Intelligent Applications",
      "AI Copilots",
      "Enterprise AI Applications",
      "AI Development Company",
      "Enterprise AI Development",
      "AI Application Development",
      "AI Consulting and Development",
      "AI Software Services",
      "Enterprise AI Engineering",
      "Enterprise AI Software Services",
      "Enterprise AI Strategy",
      "Enterprise AI Solutions",
      "Enterprise AI Adoption",
      "AI-Powered Business Solutions",
      "Agentic AI Solutions"
    ],
    canonical: "/solutions/AI-Intelligent-Automation/ai-software-services",
    robots: { index: true, follow: true },
    openGraph: {
      title: "AI Application Development Services | WeRoute",
      description: "WeRoute designs and builds AI-powered applications that move beyond pilots into everyday enterprise use.",
      url: "/solutions/AI-Intelligent-Automation/ai-software-services",
      siteName: "WeRoute",
      type: "website",
      images: [
        {
          url: "/images/og/ai-software-services.webp",
          width: 1200,
          height: 630,
          alt: "AI Application Development Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Application Development Services | WeRoute",
      description: "WeRoute designs and builds AI-powered applications that move beyond pilots into everyday enterprise use.",
      images: ["/images/og/ai-software-services.webp"],
    },
  }
};

const filePath = './data/aiAutomationData.js';
let fileContent = fs.readFileSync(filePath, 'utf8');

const regex = /"ai-software-services":\s*\{[\s\S]*?\},\n\s*"ai-ml-model-deployment":\s*\{/;
const replacementString = `"ai-software-services": ${JSON.stringify(newData, null, 2)},\n  "ai-ml-model-deployment": {`;

if (regex.test(fileContent)) {
  fileContent = fileContent.replace(regex, replacementString);
  fs.writeFileSync(filePath, fileContent);
  console.log("Successfully updated ai-software-services");
} else {
  console.error("Could not find the target section to replace.");
}
