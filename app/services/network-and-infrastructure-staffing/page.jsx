import React from "react";
import ClientServicePage from "../[slug]/ClientServicePage";
import { networkInfrastructureStaffingData } from "@/data/networkInfrastructureStaffingData";

export const metadata = {
  title: "Network & Infrastructure Staffing Services | IT Infrastructure Talent | WeRoute",
  description: "WeRoute provides technically screened network and infrastructure professionals across enterprise networking, data centres, wireless, SD-WAN, hybrid connectivity, and day-to-day operations.",
  keywords: [
    "Network Engineer Staffing",
    "Network Staffing Services",
    "Infrastructure Staffing Services",
    "IT Infrastructure Staffing",
    "Enterprise Network Staffing",
    "Network Engineer Recruitment",
    "Infrastructure Engineer Staffing",
    "Network Resource Augmentation",
    "SD-WAN Engineer Staffing",
    "Wireless Engineer Staffing",
    "Data Centre Engineer Staffing",
    "Network Architect Recruitment",
    "Infrastructure Architect Staffing",
    "Network Operations Staffing",
    "LAN WAN Engineer Staffing",
    "Technology Staff Augmentation",
    "Network Consultant Staffing",
    "Infrastructure Resource Augmentation"
  ],
};

export default function NetworkInfrastructureStaffingPage() {
  const isNewLayout = true;

  // Generate FAQ JSON-LD schema
  const faqLd = networkInfrastructureStaffingData.faq && networkInfrastructureStaffingData.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": networkInfrastructureStaffingData.faq.map(q => ({
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
      <ClientServicePage service={networkInfrastructureStaffingData} isNewLayout={isNewLayout} />
    </main>
  );
}
