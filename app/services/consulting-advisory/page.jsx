import React from "react";
import ClientServicePage from "../[slug]/ClientServicePage";
import { consultingData } from "./consultingData";

export const metadata = {
  title: "Enterprise Technology Consulting & Advisory Services | WeRoute",
  description: "WeRoute provides independent enterprise technology consulting and advisory services, combining architecture expertise, risk analysis, and vendor-agnostic roadmaps to guide digital transformation.",
  keywords: [
    "Enterprise Technology Consulting",
    "Technology Advisory Services",
    "Enterprise IT Strategy",
    "Digital Transformation Consulting",
    "IT Consulting Services",
    "Vendor-Agnostic Technology Consulting",
    "Enterprise Architecture Advisory",
    "Cloud Migration Strategy",
    "AI Advisory Services",
    "IT Optimization"
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
