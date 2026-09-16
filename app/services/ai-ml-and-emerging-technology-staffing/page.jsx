import React from "react";
import ClientServicePage from "../[slug]/ClientServicePage";
import { aiMlEmergingTechnologyStaffingData } from "@/data/aiMlEmergingTechnologyStaffingData";

export const metadata = {
  title: "AI, Machine Learning & Emerging Technology Staffing | WeRoute",
  description: "WeRoute provides technically screened professionals across AI engineering, machine learning, data engineering, MLOps, Generative AI, LLM applications, RAG systems, and enterprise AI architecture.",
  keywords: [
    "AI, Machine Learning & Emerging Technology Staffing",
    "AI Staffing Services",
    "Machine Learning Staffing Services",
    "AI Engineer Staffing",
    "Machine Learning Engineer Staffing",
    "AI Recruitment Services",
    "AI Staff Augmentation",
    "Generative AI Staffing",
    "Enterprise AI Staffing",
    "AI Engineer Recruitment",
    "Machine Learning Engineer Recruitment",
    "Generative AI Engineer Staffing",
    "LLM Engineer Staffing",
    "MLOps Engineer Staffing",
    "Data Engineer Staffing",
    "Data Scientist Staffing",
    "AI Architect Recruitment",
    "AI Platform Engineer Staffing",
    "RAG Engineer Staffing",
    "Emerging Technology Staffing",
    "AI Talent Solutions"
  ],
};

export default function AiMlEmergingTechnologyStaffingPage() {
  const isNewLayout = true;

  // Generate FAQ JSON-LD schema (FAQPage)
  const faqLd = aiMlEmergingTechnologyStaffingData.faq && aiMlEmergingTechnologyStaffingData.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aiMlEmergingTechnologyStaffingData.faq.map(q => ({
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
      <ClientServicePage service={aiMlEmergingTechnologyStaffingData} isNewLayout={isNewLayout} />
    </main>
  );
}
