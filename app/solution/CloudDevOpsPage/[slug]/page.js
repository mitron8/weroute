import { notFound } from "next/navigation";
import { cloudDevOpsData } from '@/data/cloudDevOpsData';

// Import all UI Components from network-connectivity to match theme and layout
import HeroSection from "../../network-connectivity/[slug]/components/HeroSection";
import PhilosophySection from "../../network-connectivity/[slug]/components/PhilosophySection";
import WhatIsSection from "../../network-connectivity/[slug]/components/WhatIsSection";
import WhyNetworkingSection from "../../network-connectivity/[slug]/components/WhyNetworkingSection";
import BusinessChallengesSection from "../../network-connectivity/[slug]/components/BusinessChallengesSection";
import CapabilitiesSection from "../../network-connectivity/[slug]/components/CapabilitiesSection";
import UseCasesSection from "../../network-connectivity/[slug]/components/UseCasesSection";
import OutcomesSection from "../../network-connectivity/[slug]/components/OutcomesSection";
import WhyChooseSection from "../../network-connectivity/[slug]/components/WhyChooseSection";
import FAQSection from "../../network-connectivity/[slug]/components/FAQSection";
import RelatedSolutionsSection from "../../network-connectivity/[slug]/components/RelatedSolutionsSection";
import FinalCtaSection from "../../network-connectivity/[slug]/components/FinalCtaSection";

// 1. Dynamic SEO Metadata Generation
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = cloudDevOpsData[slug];
  
  if (!data) return { title: 'Page Not Found | WeRoute' };
  
  return {
    title: data.seo?.title || 'Cloud & DevOps | WeRoute',
    description: data.seo?.description,
    keywords: data.seo?.keywords?.join(', '),
    alternates: { canonical: data.seo?.canonical },
    openGraph: data.seo?.openGraph,
    twitter: data.seo?.twitter,
  };
}

// 2. Main Page Component
export default async function Page({ params }) {
  const { slug } = await params;
  const solution = cloudDevOpsData[slug];

  if (!solution) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f9fc]">
        <h1 className="text-3xl font-bold text-[#052440]">Solution Not Found</h1>
        <p className="mt-4 text-[#052440]/60">Requested slug: {slug}</p>
      </div>
    );
  }

  // Find the dynamic 'why' section key (e.g. whyNetworking, whyPlatformEngineering)
  const whyKey = Object.keys(solution).find(key => key.startsWith('why') && key !== 'whyChoose');
  const whyData = whyKey ? solution[whyKey] : null;

  return (
    <>
      {solution.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(solution.schema) }}
        />
      )}

      {/* Main Page Layout with White Theme */}
      <main className="bg-[#f7f9fc] flex flex-col min-h-screen">
        <HeroSection data={solution} />
        {solution.philosophy && <PhilosophySection data={solution.philosophy} />}
        {solution.whatIs && <WhatIsSection data={solution.whatIs} />}
        {whyData && <WhyNetworkingSection data={whyData} />}
        {solution.businessChallenges && <BusinessChallengesSection data={solution.businessChallenges} />}
        {solution.capabilities && <CapabilitiesSection data={solution.capabilities} />}
        {solution.useCases && <UseCasesSection data={solution.useCases} />}
        {solution.outcomes && <OutcomesSection data={solution.outcomes} />}
        {solution.whyChoose && <WhyChooseSection data={solution.whyChoose} />}
        
        {solution.relatedSolutions && <RelatedSolutionsSection data={solution.relatedSolutions} />}
        {solution.finalCta && <FinalCtaSection data={solution.finalCta} />}
        {solution.faq && <FAQSection data={solution.faq} />}
      </main>
    </>
  );
}