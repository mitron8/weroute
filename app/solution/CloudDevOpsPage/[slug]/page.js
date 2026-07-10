import { cloudDevOpsData } from '@/data/cloudDevOpsData'; // Adjust the import path to your data file
import { notFound } from 'next/navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import WhySection from './components/WhySection';
import WhatIs from './components/WhatIs';
import Capabilities from './components/Capabilities';
import UseCases from './components/UseCases';
import Outcomes from './components/Outcomes';
import WhyChoose from './components/WhyChoose';
import FAQ from './components/FAQ';
import FinalCta from './components/FinalCta';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = cloudDevOpsData[slug];
  if (!data) return { title: 'Page Not Found | WeRoute' };
  
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords.join(', '),
    alternates: { canonical: data.seo.canonical },
  };
}

export default async function DynamicServicePage({ params }) {
  const { slug } = await params;
  const data = cloudDevOpsData[slug];

  if (!data) notFound();

  // Handle dynamic keys
  const whyData = data.whyNetworking || data.whyPlatformEngineering;

  return (
    <main className="bg-[#070B19] text-white min-h-screen font-sans selection:bg-[#A3D133] selection:text-[#070B19]">
      <Hero data={data.hero} />
      <Philosophy data={data.philosophy} />
      <WhySection data={whyData} />
      <WhatIs data={data.whatIs} />
      <Capabilities data={data.capabilities} />
      <UseCases data={data.useCases} />
      <Outcomes data={data.outcomes} />
      <WhyChoose data={data.whyChoose} />
      <FAQ data={data.faq} />
      <FinalCta data={data.finalCta} />
    </main>
  );
}