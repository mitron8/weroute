import ServicesHero from "./components/ServicesHero";
import ServicesPhilosophy from "./components/ServicesPhilosophy";
import WhyChooseUs from "./components/WhyChooseUs";
import ServicesOverview from "./components/ServicesOverview";
import TechnologyLifecycle from "./components/TechnologyLifecycle";
import EngagementApproach from "./components/EngagementApproach";
import WaysToEngage from "./components/WaysToEngage";
import IndustriesStrip from "./components/IndustriesStrip";
import WhyWeRoute from "./components/WhyWeRoute";
import ServicesFAQ from "./components/ServicesFAQ";
import CallToAction from "./components/CallToAction";
import InternalLinks from "./components/InternalLinks";

export const metadata = {
  title: 'Enterprise Technology Services That Deliver Business Outcomes | WeRoute',
  description: 'Consulting-led technology services that design, implement, secure, operate, and optimize infrastructure, cloud, cybersecurity, AI, and software platforms.',
  keywords: 'Enterprise Technology Services, Cybersecurity Services, Cloud Services, Managed Services, Managed IT Services, Enterprise Architecture, IT Services Company, AI Development Services, Custom Software Development, IT Consulting, IT Staffing Services, IT Management Consulting, Staff Augmentation Services, Software Development Services, Intelligent Automation, Cloud Migration Services, Technology Consulting Services, Professional IT Services, Enterprise Technology Partner',
};

// Generate JSON-LD for Organization and Services
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WeRoute",
  "url": "https://weroute.com",
  "description": "Enterprise technology services partner helping organizations plan, implement, secure, operate, and continuously optimize modern technology environments.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Enterprise Technology Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Managed Services",
          "serviceType": "Managed IT Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Professional Services",
          "serviceType": "Professional IT Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consulting & Advisory Services",
          "serviceType": "IT Consulting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Manpower & Staffing Services",
          "serviceType": "IT Staffing Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software & AI Development Services",
          "serviceType": "Software Development Services"
        }
      }
    ]
  }
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Inject Organization & Service JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <ServicesHero />
      <ServicesPhilosophy />
      <WhyChooseUs />
      <ServicesOverview />
      <TechnologyLifecycle />
      <EngagementApproach />
      <WaysToEngage />
      <IndustriesStrip />
      <WhyWeRoute />
      <CallToAction />
      <InternalLinks />
      <ServicesFAQ />
    </main>
  );
}
