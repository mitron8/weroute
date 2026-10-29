"use client";

import React from "react";
import { usePathname } from "next/navigation";
import BeamWordmarkFooter from "./ui/beam-wordmark-footer";

export default function Footer({ isLayout = false, className = "" }) {
  const pathname = usePathname();

  // On the homepage, the footer is rendered inside the overlapping stack with FinalCTA
  if (isLayout && pathname === "/") {
    return null;
  }

  const socials = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: "linkedin"
    },
    {
      label: "X",
      href: "https://twitter.com",
      icon: "x"
    },
    {
      label: "Email",
      href: "mailto:contact@weroute.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    }
  ];

  const columns = [
    {
      title: "Solutions",
      links: [
        { label: "Network & Connectivity", href: "/solutions/network-connectivity" },
        { label: "Cloud & DevOps", href: "/solutions/cloud-and-devOps" },
        { label: "Cybersecurity", href: "/solutions/cybersecurity" },
        { label: "AI & Automation", href: "/solutions/AI-Intelligent-Automation" },
        { label: "Digital Engineering", href: "/solutions/softwareDigitalEngineering" },
        { label: "All Solutions →", href: "/solutions" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Consulting & Advisory", href: "/services/consulting-advisory" },
        { label: "Professional Services", href: "/services/professional-services" },
        { label: "Managed Services", href: "/services/managed-services" },
        { label: "Software & AI Dev", href: "/services/software-ai-development" },
        { label: "Technology Staffing", href: "/services/manpower-staffing-services" },
        { label: "All Services →", href: "/services" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Company Overview", href: "/company-overview" },
        { label: "Our Mission", href: "/our-mission" },
        { label: "Our Vision", href: "/our-vision" },
        { label: "Why WeRoute", href: "/why-weroute" },
        { label: "Blogs & Insights", href: "/blogs" },
        { label: "Contact", href: "/contact" },
      ]
    }
  ];

  return (
    <BeamWordmarkFooter
      brand="WeRoute"
      wordmark="WEROUTE"
      company="WeRoute Technologies"
      background="#080357"
      accent="#B7F36B"
      wordTop="#2b45cf"
      wordFoot="#050238"
      socials={socials}
      columns={columns}
      cut={0.12}
      className={`relative z-20 rounded-none border-t border-white/20 shadow-[0_-10px_28px_rgba(0,0,0,0.18)] ${className}`}
    />
  );
}
