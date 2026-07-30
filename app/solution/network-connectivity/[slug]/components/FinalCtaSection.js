"use client";
import FinalCTAComponent from '@/app/components/FinalCTA';

export default function FinalCtaSection({ data }) {
  if (!data) return null;

  // Split heading roughly in half for titleLine1 and titleLine2
  const words = data.heading?.split(' ') || [];
  const half = Math.ceil(words.length / 2);
  const titleLine1 = words.slice(0, half).join(' ');
  const titleLine2 = words.slice(half).join(' ');

  const primaryBtn = data.buttons?.find(b => b.variant === 'primary') || data.buttons?.[0];
  const secondaryBtn = data.buttons?.find(b => b.variant === 'secondary') || data.buttons?.[1];

  return (
    <FinalCTAComponent
      badgeText="Take the Next Step"
      titleLine1={titleLine1}
      titleLine2={titleLine2}
      description={data.supportingText}
      primaryButtonText={primaryBtn?.label}
      secondaryButtonText={secondaryBtn?.label || ""}
      stats={[]}
    />
  );
}