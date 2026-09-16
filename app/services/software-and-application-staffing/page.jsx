import React from "react";
import ClientServicePage from "../[slug]/ClientServicePage";
import { softwareApplicationStaffingData } from "@/data/softwareApplicationStaffingData";

export const metadata = {
  title: "Software & Application Staffing Services | Developer & Engineering Talent | WeRoute",
  description: "WeRoute provides technically screened professionals across full-stack development, backend engineering, frontend development, mobile applications, APIs, software architecture, and quality engineering.",
  keywords: [
    "Software Staffing Services",
    "Software Developer Staffing",
    "Application Development Staffing",
    "Software Engineer Staffing",
    "Software Development Recruitment",
    "IT Developer Staffing",
    "Software Staff Augmentation",
    "Enterprise Software Staffing",
    "Full Stack Developer Staffing",
    "Backend Developer Staffing",
    "Frontend Developer Staffing",
    "Mobile Developer Staffing",
    "Software Engineer Recruitment",
    "QA Engineer Staffing",
    "Software Architect Recruitment",
    "Application Developer Recruitment",
    "API Developer Staffing",
    "Product Engineering Staffing"
  ],
};

export default function SoftwareApplicationStaffingPage() {
  const isNewLayout = true;

  // Generate FAQ JSON-LD schema (FAQPage)
  const faqLd = softwareApplicationStaffingData.faq && softwareApplicationStaffingData.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": softwareApplicationStaffingData.faq.map(q => ({
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
      <ClientServicePage service={softwareApplicationStaffingData} isNewLayout={isNewLayout} />
    </main>
  );
}
