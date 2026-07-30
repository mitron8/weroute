"use client";
import FinalCTAComponent from "@/app/components/FinalCTA";

export default function NetworkCTA() {
  return (
    <FinalCTAComponent
      badgeText="Ready To Modernize"
      titleLine1="Build Digital Platforms"
      titleLine2="Ready for Tomorrow."
      description="Partner with WeRoute to design, build, and modernize software that scales with your business for years to come."
      primaryButtonText="Talk to a Digital Engineering Expert"
      secondaryButtonText="Request Consultation"
      stats={[
        ["40+", "Enterprise Projects Delivered"],
        ["99.9%", "System Reliability"],
        ["Global", "Enterprise Delivery Capability"]
      ]}
    />
  );
}