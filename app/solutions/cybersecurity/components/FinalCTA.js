"use client";
import FinalCTAComponent from "@/app/components/FinalCTA";

export default function FinalCTA() {
  return (
    <FinalCTAComponent
      badgeText="Ready To Modernize"
      titleLine1="Build a Cybersecurity"
      titleLine2="Strategy That Scales."
      description="Work with WeRoute to design a cybersecurity strategy built on architecture, governance, and long-term enterprise resilience."
      primaryButtonText="Talk to a Cybersecurity Expert"
      secondaryButtonText="Request Consultation"
      stats={[
        ["40+", "Enterprise Projects Delivered"],
        ["99.9%", "System Reliability"],
        ["Global", "Enterprise Delivery Capability"]
      ]}
    />
  );
}