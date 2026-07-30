import React from 'react';
import Hero from './components/Hero';
import WhyItMatters from './components/WhyItMatters';
import BusinessChallenges from './components/BusinessChallenges';
import OurApproach from './components/OurApproach';
import Capabilities from './components/Capabilities';
import BusinessOutcomes from './components/BusinessOutcomes';
import WhyChooseUs from './components/WhyChooseUs';
import RelatedAndFAQ from './components/RelatedAndFAQ';
import FinalCTA from './components/FinalCTA';

export const metadata = {
  title: 'AI & Intelligent Automation Solutions for the Enterprise | WeRoute',
  description: 'WeRoute helps enterprises embed AI consulting services, intelligent automation, and business process automation across infrastructure and operations.',
  keywords: 'AI & Intelligent Automation Solutions, Enterprise AI Solutions, AI Consulting Services, Intelligent Automation Services, AI Automation, Enterprise AI Transformation, Business Process Automation, AIOps, Predictive Analytics',
};

export default function AIIntelligentAutomationPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  provider: {
                    "@type": "Organization",
                    name: "WeRoute",
                  },
                  serviceType: [
                    "AI & Intelligent Automation Solutions",
                    "Enterprise AI Solutions",
                    "AI Consulting Services",
                    "Intelligent Automation Services",
                    "AI Automation",
                    "Enterprise AI Transformation",
                    "Business Process Automation",
                    "AIOps",
                    "Predictive Analytics"
                  ],
                  areaServed: "Global",
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What are Enterprise AI Solutions?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Enterprise AI solutions are AI-powered business solutions, from automation to predictive analytics, built into an organization's existing systems and workflows to improve decision-making and operational efficiency at scale."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does AI improve business operations?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI improves business operations by automating repetitive tasks, surfacing predictive insights, and helping teams act on issues before they affect the business."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is Intelligent Automation?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Intelligent automation services combine process automation with AI capabilities like prediction and pattern recognition, allowing systems to handle more complex, adaptive workflows than traditional automation alone."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can AI support digital transformation?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI supports digital transformation by embedding intelligence into existing processes and systems, rather than requiring organizations to rebuild operations around new tools."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do organizations scale AI successfully?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Organizations scale enterprise AI adoption successfully by pairing a clear AI strategy with governance, so pilots move into production instead of stalling as isolated experiments."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is AIOps?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AIOps applies AI to IT operations, correlating events, detecting anomalies, and helping teams resolve issues faster with less manual monitoring."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can AI improve operational efficiency?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI improves operational efficiency by reducing manual work, shortening the time between detecting and resolving issues, and helping teams focus on higher-value tasks."
                      }
                    }
                  ]
                }
              ],
            }),
          }}
        />
      <Hero />
      <WhyItMatters />
      <BusinessChallenges />
      <OurApproach />
      <Capabilities />
      <BusinessOutcomes />
      <WhyChooseUs />
      <FinalCTA />
      <RelatedAndFAQ />
      
    </main>
  );
}
