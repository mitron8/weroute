import React from "react";
import ClientServicePage from "../[slug]/ClientServicePage";
import { consultingData } from "./consultingData";

export const metadata = {
  title: "Enterprise Technology Consulting & Advisory Services | WeRoute",
  description: "WeRoute combines business context, architecture expertise, and vendor-agnostic advisory to help you assess your environment, define future-state direction, and prioritize transformation investment.",
  keywords: [
    "Enterprise Technology Consulting",
    "IT Consulting Services",
    "Technology Advisory Services",
    "Enterprise IT Strategy",
    "Digital Transformation Consulting",
    "Technology Consulting Services",
    "Enterprise Technology Strategy",
    "IT Strategy Consulting",
    "Network Assessment Services",
    "Cybersecurity Assessment Services",
    "Cloud Readiness Assessment",
    "Cloud Migration Consulting",
    "AI Consulting Services",
    "Automation Advisory Services",
    "Technology Roadmap Consulting",
    "Vendor-Agnostic Technology Consulting",
    "Enterprise Architecture Advisory",
    "Technology Modernization Consulting",
    "IT Transformation Strategy"
  ],
};

export default function ConsultingAdvisoryPage() {
  const isNewLayout = true;

  // Generate FAQ JSON-LD schema
  const faqLd = consultingData.faq && consultingData.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": consultingData.faq.map(q => ({
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
      <ClientServicePage service={consultingData} isNewLayout={isNewLayout} />
    </main>
  );
}
