import React from "react";
import ClientServicePage from "../[slug]/ClientServicePage";
import { cybersecurityStaffingData } from "@/data/cybersecurityStaffingData";

export const metadata = {
  title: "Cybersecurity & SOC Staffing Services | IT Security Talent | WeRoute",
  description: "WeRoute provides technically screened cybersecurity professionals across SOC operations, security engineering, incident response, threat detection, IAM, cloud security, and vulnerability management.",
  keywords: [
    "Cybersecurity Staffing Services",
    "SOC Staffing Services",
    "Cybersecurity Recruitment",
    "Security Engineer Staffing",
    "Cybersecurity Staff Augmentation",
    "SOC Analyst Staffing",
    "Enterprise Security Staffing",
    "Cybersecurity Talent Solutions",
    "SOC Analyst Recruitment",
    "Security Engineer Recruitment",
    "Cybersecurity Consultant Staffing",
    "Cloud Security Engineer Staffing",
    "IAM Specialist Staffing",
    "GRC Staffing Services",
    "Incident Response Staffing",
    "Threat Hunter Staffing",
    "Vulnerability Management Staffing",
    "Security Architect Recruitment"
  ],
};

export default function CybersecurityStaffingPage() {
  const isNewLayout = true;

  // Generate FAQ JSON-LD schema (FAQPage)
  const faqLd = cybersecurityStaffingData.faq && cybersecurityStaffingData.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cybersecurityStaffingData.faq.map(q => ({
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
      <ClientServicePage service={cybersecurityStaffingData} isNewLayout={isNewLayout} />
    </main>
  );
}
