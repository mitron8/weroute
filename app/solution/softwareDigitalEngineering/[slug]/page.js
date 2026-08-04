import { notFound } from "next/navigation";
import { softwareDigitalEngineeringData } from "@/data/softwareDigitalEngineeringData";

// Import UI Components from the network-connectivity template
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
  const rawSolution = softwareDigitalEngineeringData[slug];

  if (!rawSolution || !rawSolution.seo) {
    return { title: 'Solution Not Found | WeRoute' };
  }

  const { seo } = rawSolution;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords ? seo.keywords.split(", ") : [],
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.openGraph?.title || seo.title,
      description: seo.openGraph?.description || seo.description,
      url: seo.openGraph?.url || seo.canonical,
      siteName: seo.openGraph?.siteName || "WeRoute",
      type: seo.openGraph?.type || "website",
      images: seo.openGraph?.images?.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })) || [],
    },
    twitter: {
      card: seo.twitter?.card || "summary_large_image",
      title: seo.twitter?.title || seo.title,
      description: seo.twitter?.description || seo.description,
      images: seo.twitter?.images || [],
    },
    robots: {
      index: seo.robots?.index ?? true,
      follow: seo.robots?.follow ?? true,
    }
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const rawSolution = softwareDigitalEngineeringData[slug];

  if (!rawSolution) {
    return notFound();
  }

  // Auto-generate FAQ JSON-LD Schema based on FAQ items
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (rawSolution.faq || []).map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  // Build the combined schema (if standard organization/service schema exists)
  const combinedSchema = rawSolution.schema ? [rawSolution.schema, faqSchema] : faqSchema;

  // Map the Software Digital Engineering data structure to the Network Connectivity template structure
  const solution = {
    breadcrumb: [
      { title: "Solutions", href: "/solutions" },
      { title: "Software & Digital Engineering", href: "/solutions/softwareDigitalEngineering" },
      { title: rawSolution.hero?.title || "Solution", href: `/solution/softwareDigitalEngineering/${slug}` }
    ],
    hero: {
      badge: rawSolution.hero?.badge,
      title: rawSolution.hero?.title,
      description: rawSolution.hero?.subtitle,
      geoStatement: rawSolution.hero?.geoStatement,
      lottieSrc: rawSolution.hero?.lottieSrc,
      buttons: [
        { label: rawSolution.cta?.button || "Talk to an Expert", href: "/contact", variant: "primary" }
      ]
    },
    philosophy: {
      quote: rawSolution.overview?.title
    },
    whyNetworking: {
      title: rawSolution.whyEssential?.title,
      introduction: rawSolution.whyEssential?.description,
      cards: (rawSolution.whyEssential?.points || []).map((p, i) => ({
        title: typeof p === 'string' ? p : (p.title || ""),
        description: typeof p === 'string' ? "" : (p.desc || p.description || ""),
        icon: ["Network", "Cloud", "Activity", "Search", "TrendingUp"][i % 5]
      }))
    },
    businessChallenges: {
      title: rawSolution.challenges?.title,
      subtitle: "",
      cards: (rawSolution.challenges?.items || []).map((c, i) => ({
        title: typeof c === 'string' ? c : c.title,
        description: typeof c === 'string' ? "" : (c.desc || c.description || ""),
        icon: ["Clock", "Bug", "RefreshCcw", "FileSearch", "Layers"][i % 5]
      }))
    },
    whatIs: {
      title: rawSolution.whatIs?.title,
      content: rawSolution.whatIs?.content || []
    },
    capabilities: {
      title: rawSolution.capabilities?.title,
      description: "",
      proofLine: "",
      cards: (rawSolution.capabilities?.items || []).map((c, i) => ({
        title: c.title,
        description: c.desc || c.description,
        icon: ["BarChart3", "Radar", "SearchCheck", "Gauge", "BellOff"][i % 5]
      }))
    },
    useCases: {
      title: rawSolution.useCases?.title,
      cards: (rawSolution.useCases?.items || []).map((c, i) => ({
        title: typeof c === 'string' ? c : c.title,
        description: typeof c === 'string' ? "" : (c.desc || c.description || ""),
        icon: ["Building2", "Cloud", "ShieldCheck", "TrendingUp", "Timer"][i % 5]
      }))
    },
    outcomes: {
      title: rawSolution.outcomes?.title,
      description: "",
      cards: (rawSolution.outcomes?.items || []).map((c, i) => ({
        title: typeof c === 'string' ? c : c.title,
        description: typeof c === 'string' ? "" : (c.desc || c.description || ""),
        icon: ["Zap", "Shield", "Users", "BadgeDollarSign", "Network", "LayoutDashboard"][i % 6]
      }))
    },
    whyChoose: {
      title: rawSolution.whyWeroute?.title,
      cards: (rawSolution.whyWeroute?.points || []).map((c, i) => ({
        title: typeof c === 'string' ? c : c.title,
        description: typeof c === 'string' ? "" : (c.desc || c.description || ""),
        icon: ["Users", "Briefcase", "Network", "Layers", "Settings"][i % 5]
      }))
    },
    relatedSolutions: {
      title: rawSolution.strategyFit?.title,
      intro: rawSolution.strategyFit?.description,
      links: (rawSolution.strategyFit?.items || []).map((item) => ({
        label: typeof item === 'string' ? item : (item.title || item),
        href: "#"
      }))
    },
    faq: {
      title: "Frequently Asked Questions",
      items: rawSolution.faq || []
    },
    finalCta: {
      heading: rawSolution.cta?.title,
      supportingText: rawSolution.cta?.description,
      buttons: [
        { label: rawSolution.cta?.button || "Talk to an Expert", href: "/contact", variant: "primary" }
      ]
    }
  };

  return (
    <>
      {/* Inject JSON-LD Schema (Organization + Services) and FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <main className="bg-[#f7f9fc] flex flex-col min-h-screen">
        <HeroSection data={solution} />
        <PhilosophySection data={solution.philosophy} />
        <WhatIsSection data={solution.whatIs} />
        <WhyNetworkingSection data={solution.whyNetworking} />
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