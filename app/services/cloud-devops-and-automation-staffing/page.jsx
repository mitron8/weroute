import React from "react";
import ClientServicePage from "../[slug]/ClientServicePage";
import { cloudDevOpsStaffingData } from "@/data/cloudDevOpsStaffingData";

export const metadata = {
  title: "Cloud, DevOps & Automation Staffing Services | Cloud & DevOps Talent | WeRoute",
  description: "WeRoute provides technically screened cloud, DevOps, SRE, Kubernetes, and infrastructure automation professionals for enterprise engineering teams.",
  keywords: [
    "Cloud Staffing Services",
    "DevOps Staffing Services",
    "Cloud Engineer Staffing",
    "DevOps Engineer Staffing",
    "Cloud & DevOps Recruitment",
    "DevOps Staff Augmentation",
    "Cloud Technology Staffing",
    "Infrastructure Automation Staffing",
    "Cloud Engineer Recruitment",
    "DevOps Engineer Recruitment",
    "Platform Engineer Staffing",
    "Site Reliability Engineer Staffing",
    "Cloud Architect Recruitment",
    "Automation Engineer Staffing",
    "Kubernetes Engineer Staffing",
    "CI/CD Engineer Staffing",
    "Infrastructure Engineer Staffing",
    "Platform Engineering Staffing"
  ],
};

export default function CloudDevOpsStaffingPage() {
  const isNewLayout = true;

  // Generate FAQ JSON-LD schema (FAQPage)
  const faqLd = cloudDevOpsStaffingData.faq && cloudDevOpsStaffingData.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cloudDevOpsStaffingData.faq.map(q => ({
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
      <ClientServicePage service={cloudDevOpsStaffingData} isNewLayout={isNewLayout} />
    </main>
  );
}
