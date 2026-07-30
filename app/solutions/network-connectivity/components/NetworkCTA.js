"use client";
import FinalCTAComponent from "@/app/components/FinalCTA";

export default function NetworkCTA() {
  return (
    <FinalCTAComponent
      badgeText="Ready To Modernize"
      titleLine1="Stop Managing Complexity."
      titleLine2="Start Removing It."
      description="Partner with a team that designs network architecture around reliability, visibility, and growth, not just uptime reports."
      primaryButtonText="Request Consultation"
      secondaryButtonText=""
      stats={[
        ["40+", "Enterprise Projects Delivered"],
        ["99.9%", "System Reliability"],
        ["Global", "Enterprise Delivery Capability"]
      ]}
    />
  );
}