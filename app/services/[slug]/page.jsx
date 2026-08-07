import React from "react";
import { servicesData } from "@/data/servicesData"; 
import ClientServicePage from "./ClientServicePage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) return { title: 'Service Not Found' };

  if (service.seo) {
    const title = service.seo.h1 || service.hero.title || service.hero.badge;
    const description = service.geoStatement || service.hero.subtitle;
    
    // Combine primary and secondary keywords
    const keywords = [
      ...(service.seo.primaryKeywords ? service.seo.primaryKeywords.split(',').map(k => k.trim()) : []),
      ...(service.seo.secondaryKeywords ? service.seo.secondaryKeywords.split(',').map(k => k.trim()) : [])
    ];

    return {
      title: `${title} | WeRoute`,
      description,
      keywords: keywords.filter(Boolean),
    };
  }

  return {
    title: `${service.hero?.title || 'Service'} | WeRoute`,
    description: service.hero?.subtitle,
  };
}

// ---------------------------------------------------------
// Main Page Component
// ---------------------------------------------------------
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  // Fallback if the slug doesn't match any data
  if (!service) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#f7f9fc]">
        <h1 className="text-3xl font-bold text-[#052440]">Service not found</h1>
      </div>
    );
  }

  // Decide which layout to use based on the presence of the `sections` array
  // The new managed services use `sections`, while the old ones use `overview`, `challenges`, etc.
  const isNewLayout = Boolean(service.sections);

  // Generate FAQ JSON-LD schema for new layouts
  const faqLd = isNewLayout && service.faq && service.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map(q => ({
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
      <ClientServicePage service={service} isNewLayout={isNewLayout} />
    </main>
  );
}