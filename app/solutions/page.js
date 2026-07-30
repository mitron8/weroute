import React from 'react'
import SolutionsHero from './SolutionsHero'
import ApproachSection from './ApproachSection'
import SolutionsListSection from './SolutionsListSection'
import SolutionsClosingSections from './SolutionsClosingSections'
import SolutionsFAQ from './SolutionsFAQ'
import CircuitBackground from './CircuitBackground'

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
  return (
    <div className="relative min-h-screen bg-[#f7f9fc]">

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
      <ApproachSection/>
      <SolutionsListSection/>
      
      <SolutionsClosingSections/>
      <SolutionsFAQ/>
      
    </div>
  )
}

export default page
