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
  title: 'Cloud & DevOps Solutions Built for Enterprise Scale | WeRoute',
  description: 'WeRoute delivers cloud transformation and DevOps consulting for enterprises running hybrid cloud environments, combining architecture, automation, and governance.',
  keywords: 'Cloud & DevOps Solutions, Cloud Transformation, DevOps Consulting, Hybrid Cloud, Cloud Governance',
};

export default function CloudDevOpsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
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