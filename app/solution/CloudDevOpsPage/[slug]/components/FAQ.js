"use client";

import FAQSectionShared from '@/app/components/ui/FAQAccordion';

export default function FAQ({ data }) {
  if (!data) return null;

  return (
    <FAQSectionShared
      data={data}
      badge="Support & Clarity"
      title={data.title || "Frequently Asked Questions"}
      subtitle="Detailed architectural and implementation answers for enterprise cloud infrastructure and DevOps."
    />
  );
}