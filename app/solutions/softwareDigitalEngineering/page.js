import React from 'react'
import Hero from './components/Hero'
import WhyNetworkTransformation from './components/WhyNetworkTransformation'
import BusinessChallenges from './components/BusinessChallenges'
import OurApproach from './components/OurApproach'
import NetworkCapabilities from './components/NetworkCapabilities'
import BusinessOutcomes from './components/BusinessOutcomes'
import WhyChooseWeRoute from './components/WhyChooseWeRoute'
import NetworkCTA from './components/NetworkCTA'
import NetworkFAQ from './components/NetworkFAQ'
import Head from 'next/head'

export const metadata = {
  title: "Software & Digital Engineering Solutions | WeRoute",
  description: "WeRoute is an enterprise digital engineering partner providing software development services that design, build, and modernize custom software, enterprise applications, mobile products, and APIs on an architecture-first, secure-by-design foundation.",
  keywords: "Software & Digital Engineering Solutions, Digital Engineering Services, IT Consulting Services, Mobile Application Development, Platform Engineering, Custom Software Development, Software Development Services, Application Modernization, Digital Transformation Services, Enterprise Applications, Software Modernization Services, Cloud-Native Application Development, Legacy Application Modernization, Enterprise Software Development, Enterprise Application Development, Enterprise Mobile App Development, Enterprise Software Development Company, Enterprise Application Development Services, Software Engineering Consulting, Software Product Engineering, API Engineering",
};

const page = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are digital engineering services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital engineering services cover the design, development, and modernization of software, applications, and platforms, combining engineering discipline with a broader digital transformation strategy."
        }
      },
      {
        "@type": "Question",
        "name": "How does software engineering support digital transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Software engineering supports digital transformation by turning strategy into working systems, building the applications, APIs, and platforms that new digital initiatives actually run on."
        }
      },
      {
        "@type": "Question",
        "name": "What is enterprise application development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enterprise application development is the design and build of software specifically for large organizations, accounting for existing systems, governance requirements, and enterprise-scale usage."
        }
      },
      {
        "@type": "Question",
        "name": "Why is API-first architecture important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "API-first architecture matters because it lets systems, partners, and products connect and integrate from the start, rather than bolting on integration after an application is already built."
        }
      },
      {
        "@type": "Question",
        "name": "How can organizations modernize legacy applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations modernize legacy applications through phased approaches such as replatforming, refactoring, or rebuilding specific components, chosen based on risk, business priority, and system criticality."
        }
      },
      {
        "@type": "Question",
        "name": "What is domain-driven software design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Domain-driven software design structures a system's code and architecture around real business concepts and workflows, so the software mirrors how the business actually operates."
        }
      },
      {
        "@type": "Question",
        "name": "How does digital engineering improve scalability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital engineering improves scalability by building systems on architecture designed to handle growth in usage and complexity, rather than systems that need to be rebuilt each time demand increases."
        }
      }
    ]
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero/>
      <WhyNetworkTransformation/>
      <BusinessChallenges/>
      <OurApproach/>
      <NetworkCapabilities/>
      <BusinessOutcomes/>
      <WhyChooseWeRoute/>
      
      {/* Moved Content Block */}
      <section className="bg-[#f7f9fc] px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="clay-light rounded-[32px] border border-[#050849]/5 bg-[#f7f9fc] p-10 lg:p-14 text-center">
            <p className="text-xl font-bold leading-relaxed text-[#050849] md:text-2xl max-w-4xl mx-auto">
              Every enterprise environment is different.
              If your software engineering requirements are unique,
              our architects can help design a solution
              tailored to your operational goals.
            </p>
          </div>
        </div>
      </section>

      <NetworkCTA/>
      <NetworkFAQ/>
    </div>
  )
}

export default page
