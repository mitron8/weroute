import React from "react";
import ClientServicePage from "../[slug]/ClientServicePage";
import { professionalData } from "./professionalData";

export const metadata = {
  title: "Enterprise Professional Services & Technology Implementation | WeRoute",
  description: "WeRoute delivers end-to-end professional services to design, build, deploy, migrate, and modernize enterprise technology architectures across infrastructure, cloud, cybersecurity, and modern networks.",
  keywords: [
    "Professional IT Services",
    "Enterprise Professional Services",
    "IT Implementation Services",
    "Cloud Migration Services",
    "Network Modernization",
    "DevOps Implementation",
    "Infrastructure Automation",
    "Systems Integration",
    "Enterprise Architecture Deployment"
  ],
};

export default function ProfessionalServicesPage() {
  const isNewLayout = true;

  // Generate FAQ JSON-LD schema
  const faqLd = professionalData.faq && professionalData.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": professionalData.faq.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  } : null;

  return (
    <main className="min-h-screen bg-[#f7f9fc] pb-28 pt-20 overflow-hidden">
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <ClientServicePage service={professionalData} isNewLayout={isNewLayout} />
    </main>
  );
}
