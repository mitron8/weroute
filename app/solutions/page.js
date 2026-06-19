import React from 'react'
import SolutionsHero from './SolutionsHero'
import ApproachSection from './ApproachSection'
import SolutionsListSection from './SolutionsListSection'
import SolutionsClosingSections from './SolutionsClosingSections'
import SolutionsFAQ from './SolutionsFAQ'

export const metadata = {
  title: "Enterprise Technology Solutions | WeRoute",
  description:
    "WeRoute delivers enterprise technology solutions across managed network services, cybersecurity consulting, cloud migration, intelligent automation, and enterprise software development.",
 openGraph: {
    title: "Enterprise Technology Solutions | WeRoute",
    description:
      "WeRoute delivers enterprise technology solutions across managed network services, cybersecurity consulting, cloud migration, intelligent automation, and enterprise software development.",
    type: "website",
  },
};


const page = () => {
 {/*   const bio =
    "WeRoute delivers outcome-driven technology solutions that help organizations modernize infrastructure, improve resilience, enhance visibility, and operate securely at scale.";

  // Key words to trigger the effect
  const triggers = [
    "outcome-driven",
    "modernize",
    "resilience",
    "visibility",
    "securely",
    "scale"
  ];*/}
  return (
    <div>
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "WeRoute",
          description:
            "Enterprise technology solutions partner specialising in managed network services, cybersecurity consulting services, cloud migration services, intelligent automation, and enterprise application development services.",
          areaServed: "Global",
        },
        {
          "@type": "Service",
          provider: {
            "@type": "Organization",
            name: "WeRoute",
          },
          serviceType: [
            "IT Consulting",
            "Managed Network Services",
            "Cybersecurity Consulting Services",
            "Cloud Migration Services",
            "Intelligent Automation",
            "Enterprise Application Development Services",
            "Digital Engineering Services",
          ],
          areaServed: "Global",
        },
      ],
    }),
  }}
/>
        <SolutionsHero/>
        {/*<div className="rounded-[2.5rem] border border-[#052440]/10 bg-white/80 p-8 shadow-[0_15px_50px_rgba(5,36,64,0.04)] backdrop-blur-xl md:p-16">
         <HyperTextParagraph
            text={bio}
            highlightWords={triggers}
            className="text-2xl font-semibold leading-[1.6] text-[#052440] md:text-4xl"
          />
        </div>*/}
    
        <ApproachSection/>
        <SolutionsListSection/>
        <SolutionsClosingSections/>
        <SolutionsFAQ/>
      
    </div>
  )
}

export default page
