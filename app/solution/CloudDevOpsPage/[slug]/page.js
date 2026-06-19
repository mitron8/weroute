import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import WhyEssentialSection from "./components/WhyEssentialSection";
import WhatIsSection from "./components/WhatIsSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import UseCasesSection from "./components/UseCasesSection";
import OutcomesSection from "./components/OutcomesSection";
import WhyWerouteSection from "./components/WhyWerouteSection";
import StrategyFitSection from "./components/StrategyFitSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

import { cloudDevOpsData } from "@/data/cloudDevOpsData";

export default async function Page({ params }) {
  const { slug } = await params;

  console.log("Current Slug:", slug);
  console.log("Available Keys:", Object.keys(cloudDevOpsData));

  const solution = cloudDevOpsData[slug];

  if (!solution) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f9fc]">
        <h1 className="text-3xl font-bold text-[#052440]">
          Solution Not Found
        </h1>

        <p className="mt-4 text-[#052440]/60">
          Requested slug: {slug}
        </p>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h3 className="font-bold mb-3">Available Slugs:</h3>

          <ul className="space-y-2">
            {Object.keys(cloudDevOpsData).map((key) => (
              <li key={key}>{key}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#f7f9fc] pt-32 pb-28">
      <div className="mx-auto max-w-7xl px-6">

        <HeroSection data={solution.hero} />

        <OverviewSection data={solution.overview} />

        <WhyEssentialSection
          whyEssential={solution.whyEssential}
          challenges={solution.challenges}
        />

        <WhatIsSection data={solution.whatIs} />

        <CapabilitiesSection data={solution.capabilities} />

        <UseCasesSection data={solution.useCases} />

        <OutcomesSection data={solution.outcomes} />

        <WhyWerouteSection data={solution.whyWeroute} />

        <StrategyFitSection data={solution.strategyFit} />

        <FAQSection data={solution.faq} />

        <CTASection data={solution.cta} />

      </div>
    </main>
  );
}