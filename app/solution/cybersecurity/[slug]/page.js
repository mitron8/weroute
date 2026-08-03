import { notFound } from "next/navigation";
import { cybersecurityData } from "@/data/cybersecurityData"; // Adjust this path if needed

// Import all UI Components from the network-connectivity template
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

// 1. Pre-generate static routes for all 5 security services at build time (SSG)
export async function generateStaticParams() {
  return Object.keys(cybersecurityData).map((slug) => ({
    slug: slug,
  }));
}

// 2. Dynamic SEO Metadata Generation
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = cybersecurityData[slug];

  if (!solution) {
    return { title: 'Solution Not Found | WeRoute' };
  }

  const { seo } = solution;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(", "),
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url: seo.openGraph.url,
      siteName: seo.openGraph.siteName,
      type: seo.openGraph.type,
      images: seo.openGraph.images.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
    },
    twitter: {
      card: seo.twitter.card,
      title: seo.twitter.title,
      description: seo.twitter.description,
      images: seo.twitter.images,
    },
    robots: {
      index: seo.robots.index,
      follow: seo.robots.follow,
    },
  };
}

// 3. Main Page Component
export default async function Page({ params }) {
  const { slug } = await params;
  const solution = cybersecurityData[slug];

  // 404 Fallback UI if the slug doesn't exist in our data
  if (!solution) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f9fc]">
        <h1 className="text-3xl font-bold text-[#052440]">Solution Not Found</h1>
        <p className="mt-4 text-[#052440]/60">Requested slug: {slug}</p>
        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h3 className="font-bold mb-3 text-[#052440]">Available Slugs:</h3>
          <ul className="space-y-2">
            {Object.keys(cybersecurityData).map((key) => (
              <li key={key} className="text-gray-600 font-mono text-sm">
                {key}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Inject JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solution.schema) }}
      />

      {/* Main Page Layout */}
      <main className="bg-[#f7f9fc] flex flex-col min-h-screen">
        <HeroSection data={solution} />
        <PhilosophySection data={solution.philosophy} />
        <WhatIsSection data={solution.whatIs} />
        {/* Note: Mapped to solution.whySecurity instead of solution.whyNetworking */}
        <WhyNetworkingSection data={solution.whySecurity} />
        <BusinessChallengesSection data={solution.businessChallenges} />
        <CapabilitiesSection data={solution.capabilities} />
        <UseCasesSection data={solution.useCases} />
        <OutcomesSection data={solution.outcomes} />
        <WhyChooseSection data={solution.whyChoose} />
        <RelatedSolutionsSection data={solution.relatedSolutions} />
        <FinalCtaSection data={solution.finalCta} />
        <FAQSection data={solution.faq} />
      </main>
    </>
  );
}