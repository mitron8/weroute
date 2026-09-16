import React from "react";
import ClientServicePage from "../[slug]/ClientServicePage";
import { manpowerStaffingData } from "@/data/manpowerStaffingData";

export const metadata = {
  title: "Technology Manpower & Staffing Services | IT Staff Augmentation | WeRoute",
  description: "WeRoute provides vetted technology professionals across network, cloud, cybersecurity, software, DevOps, AI, and infrastructure through flexible engagement models.",
  keywords: [
    "Technology Staffing Services",
    "IT Staffing Services",
    "Enterprise IT Recruitment",
    "Technology Workforce Solutions",
    "IT Resource Augmentation",
    "IT Staff Augmentation Services",
    "Technology Recruitment Services",
    "Network Engineer Staffing",
    "Cybersecurity Staffing Services",
    "Cloud Engineer Recruitment",
    "DevOps Staffing",
    "Software Developer Staffing",
    "AI Engineer Staffing",
    "Contract IT Staffing",
    "Dedicated Technology Teams",
    "Enterprise Technology Recruitment",
    "Technical Recruitment Services",
    "IT Contract Staffing",
    "Technology Talent Solutions"
  ],
};

export default function ManpowerStaffingPage() {
  const isNewLayout = true;

  // Generate FAQ JSON-LD schema
  const faqLd = manpowerStaffingData.faq && manpowerStaffingData.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": manpowerStaffingData.faq.map(q => ({
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
      <ClientServicePage service={manpowerStaffingData} isNewLayout={isNewLayout} />
    </main>
  );
}
