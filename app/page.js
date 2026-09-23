"use client";

import { useState } from "react";

import IntroLoader from "./components/IntroLoader";
import HeroLeopolda from "./components/leopolda/Hero";
import Trust from "./components/Trust";
import WhoWeAre from "./components/WhoWeAre";
import Solutions from "./components/Solutions";
import Services from "./components/Services";
import WhyWeRoute from "./components/WhyWeRoute";
import Capabilities from "./components/Capabilities";
import TechnologyEcosystem from "./components/TechnologyEcosystem";
import Impact from "./components/Impact";
import TimeToValueArchitecture from "./components/TimeToValueArchitecture";
import HomepageFAQ from "./components/HomepageFAQ";
import FinalCTA from "./components/FinalCTA";

export default function Page() {
  const [loadingDone, setLoadingDone] = useState(false);

  const organizationAndServiceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://weroute.com/#organization",
        "name": "WeRoute",
        "url": "https://weroute.com",
        "logo": "https://weroute.com/favicon.ico",
        "description":
          "WeRoute is an enterprise technology consulting, engineering, and operations company helping organizations design, modernize, secure, integrate, and operate modern technology environments.",
      },
      {
        "@type": "Service",
        "serviceType": "Enterprise Technology Consulting and Solutions",
        "provider": {
          "@type": "Organization",
          "name": "WeRoute",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Enterprise Technology Solutions and Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Network & Connectivity",
                "description":
                  "Build resilient, intelligent, and scalable enterprise connectivity across campuses, branches, data centres, cloud, and distributed users.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud & DevOps",
                "description":
                  "Modernize infrastructure and delivery with secure cloud platforms, automation, governance, DevOps, and platform engineering practices.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cybersecurity",
                "description":
                  "Protect identities, applications, infrastructure, cloud, and data through architecture-led security and continuous risk reduction.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI & Intelligent Automation",
                "description":
                  "Apply AI, machine learning, observability, and automation to improve decision-making, operational efficiency, and enterprise intelligence.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Software & Digital Engineering",
                "description":
                  "Build and modernize enterprise applications, APIs, digital platforms, and software architectures designed for long-term scale.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Consulting & Advisory Services",
                "description":
                  "Assess technology environments, define strategy, evaluate options, identify priorities, and create practical transformation roadmaps.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Services",
                "description":
                  "Design, implement, integrate, migrate, automate, and validate enterprise technology environments end to end.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Managed Services",
                "description":
                  "Operate, monitor, secure, optimize, and continuously improve critical infrastructure and technology platforms.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Software & AI Development",
                "description":
                  "Design and build enterprise applications, intelligent systems, APIs, AI platforms, and production-ready digital solutions.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technology Staffing Services",
                "description":
                  "Provide specialist engineers, consultants, augmented teams, and dedicated technology professionals across every domain.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationAndServiceSchema),
        }}
      />

      {/* LOADER */}
      {!loadingDone && (
        <IntroLoader onDone={() => setLoadingDone(true)} />
      )}

      {/* WEBSITE */}
      <div
        className={`
          transition-opacity duration-500 ease-out
          ${loadingDone ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <main>
          {/* HERO SECTION */}
          <HeroLeopolda />

          {/* SECTION 1: TRUSTED ACROSS ENTERPRISE TECHNOLOGY ECOSYSTEMS */}
          <Trust />

          {/* SECTION 2 & 3: ABOUT WEROUTE + VISION, MISSION & VALUES */}
          <WhoWeAre />

          {/* SECTION 4: ENTERPRISE SOLUTIONS */}
          <Solutions />

          {/* SECTION 5: SERVICES */}
          <Services />

          {/* SECTION 6: WHY WEROUTE */}
          <WhyWeRoute />

          {/* SECTION 7: ENGINEERING CAPABILITIES */}
          <Capabilities />

          {/* SECTION 8: TECHNOLOGY ECOSYSTEM */}
          <TechnologyEcosystem />

          {/* SECTION 9: IMPACT */}
          <Impact />

          {/* SECTION 10: DESIGNED FOR FASTER TIME TO VALUE */}
          <TimeToValueArchitecture />

          {/* SECTION 11: FREQUENTLY ASKED QUESTIONS */}
          <HomepageFAQ />

          {/* FINAL CTA: START YOUR TRANSFORMATION */}
          <FinalCTA />
        </main>
      </div>
    </>
  );
}