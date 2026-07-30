import React from 'react'
import Hero from './components/Hero'
import WhyItMatters from './components/WhyItMatters'
import BusinessChallenges from './components/BusinessChallenges'
import OurApproach from './components/OurApproach'
import Capabilities from './components/Capabilities'
import BusinessOutcomes from './components/BusinessOutcomes'
import WhyChooseUs from './components/WhyChooseUs'
import FinalCTA from './components/FinalCTA'
import RelatedAndFAQ from './components/RelatedAndFAQ'

export const metadata = {
  title: "Cybersecurity Solutions Built for Modern Enterprise Risk | WeRoute",
  description:
    "WeRoute is an enterprise cybersecurity partner providing security architecture, identity and access management, security operations, and Zero Trust consulting.",
 openGraph: {
    title: "Cybersecurity Solutions Built for Modern Enterprise Risk | WeRoute",
    description:
      "WeRoute is an enterprise cybersecurity partner providing security architecture, identity and access management, security operations, and Zero Trust consulting.",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
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
                    "Cybersecurity Solutions",
                    "Cybersecurity Consulting",
                    "Enterprise Security Solutions",
                    "Cyber Risk Management",
                    "Managed Cybersecurity Services",
                    "Enterprise Cybersecurity Services",
                    "Security Architecture Services",
                    "Endpoint & Cloud Security",
                    "Identity & Access Management",
                    "SOC",
                    "SIEM",
                    "SOAR",
                    "GRC",
                    "Zero Trust Architecture"
                  ],
                  areaServed: "Global",
                },
              ],
            }),
          }}
        />
        <Hero/>
        <WhyItMatters/>
        <BusinessChallenges/>
        <OurApproach/>
        <Capabilities/>
        <BusinessOutcomes/>
        <WhyChooseUs/>
        <FinalCTA/>
        <RelatedAndFAQ/>
    </div>
  )
}

export default page
