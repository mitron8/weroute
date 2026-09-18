import React from "react";
import AboutClient from "./AboutClient";

export const metadata = {
  title: "Enterprise Technology Company | Enterprise Technology Services | WeRoute Systems",
  description:
    "WeRoute Systems is an enterprise technology company delivering end-to-end technology engineering services, consulting, cloud, cybersecurity, AI, and managed solutions built for security and scale.",
  keywords: [
    "WeRoute Systems",
    "Enterprise Technology Company",
    "Enterprise IT Solutions Company",
    "Technology Consulting Company",
    "Enterprise Technology Services",
    "Digital Transformation Company",
    "Enterprise IT Consulting",
    "Technology Engineering Services",
    "Network Solutions Company",
    "Cybersecurity Services Company",
    "Cloud & DevOps Services",
    "AI Automation Services",
    "Software Engineering Company",
    "Enterprise Managed Services",
    "Professional IT Services",
    "Technology Consulting & Advisory"
  ],
  alternates: {
    canonical: "https://weroute.ai/about",
  },
  openGraph: {
    title: "Enterprise Technology Company | Enterprise Technology Services | WeRoute Systems",
    description:
      "Engineering Secure, Scalable Enterprise Technology. WeRoute helps enterprises design, modernize, secure, integrate, and operate technology across networking, cybersecurity, cloud, AI, automation, and digital engineering.",
    url: "https://weroute.ai/about",
    siteName: "WeRoute Systems",
    images: [
      {
        url: "/images/logo/weroute.png",
        width: 1200,
        height: 630,
        alt: "WeRoute Systems - Enterprise Technology Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Technology Company | Enterprise Technology Services | WeRoute Systems",
    description:
      "Engineering Secure, Scalable Enterprise Technology. Integrated architecture and engineering for modern enterprises.",
    images: ["/images/logo/weroute.png"],
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What industries does WeRoute support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WeRoute supports enterprises across financial services, healthcare, manufacturing, telecommunications, technology, retail, logistics, and energy & utilities, along with other industries with complex technology environments."
      }
    },
    {
      "@type": "Question",
      name: "Does WeRoute support end-to-end technology implementation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WeRoute supports the full lifecycle, from consulting, architecture, and design through implementation, integration, managed operations, and optimization."
      }
    },
    {
      "@type": "Question",
      name: "Can WeRoute integrate with existing enterprise systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Solutions are designed around your existing infrastructure, applications, APIs, cloud environments, security controls, and operational workflows."
      }
    },
    {
      "@type": "Question",
      name: "How does WeRoute approach enterprise security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Security is built in by design, covering identity and access controls, segmentation, governance, monitoring, and resilience, with Zero Trust principles applied where appropriate."
      }
    },
    {
      "@type": "Question",
      name: "Does WeRoute provide ongoing technology support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Managed Services cover ongoing monitoring, administration, incident management, optimization, observability, and operational support."
      }
    },
    {
      "@type": "Question",
      name: "What makes WeRoute vendor-agnostic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technology decisions are based on enterprise fit and long-term value rather than any single vendor relationship or product line."
      }
    },
    {
      "@type": "Question",
      name: "Does WeRoute work with existing internal IT teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WeRoute works alongside internal teams, extending capacity and expertise rather than replacing existing structures."
      }
    },
    {
      "@type": "Question",
      name: "Can WeRoute support both transformation projects and ongoing operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WeRoute supports one-time transformation initiatives as well as long-term managed operations and optimization."
      }
    },
    {
      "@type": "Question",
      name: "Does WeRoute provide AI and automation services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI and automation are part of WeRoute's core technology capabilities, alongside networking, cloud, and cybersecurity."
      }
    },
    {
      "@type": "Question",
      name: "Can WeRoute provide specialized technology professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WeRoute provides technically screened professionals across networking, cloud, cybersecurity, software, AI, and infrastructure."
      }
    }
  ]
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WeRoute Systems",
  url: "https://weroute.ai",
  logo: "https://weroute.ai/images/logo/weroute.png",
  description:
    "WeRoute is an enterprise technology company delivering end-to-end technology engineering services, consulting, cloud, cybersecurity, AI, and managed solutions.",
  knowsAbout: [
    "Enterprise Technology Services",
    "Digital Transformation",
    "Technology Consulting & Advisory",
    "Cloud & DevOps Engineering",
    "Cybersecurity & Zero Trust Architecture",
    "AI & Intelligent Automation",
    "Network Infrastructure & NaaS",
    "Custom Software Engineering"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "sales@weroute.ai",
    contactType: "sales & technical advisory"
  }
};

export default function AboutPage() {
  return (
    <>
      {/* STRUCTURED DATA / SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* STATIC PAGE CONTENT */}
      <AboutClient />
    </>
  );
}
