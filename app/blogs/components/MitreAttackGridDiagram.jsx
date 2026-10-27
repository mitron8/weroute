"use client";

import React from "react";

export default function MitreAttackGridDiagram() {
  const cards = [
    {
      title: "Identity and access",
      items: [
        "Brute force login detection",
        "Unauthorized RDP access",
        "VPN authentication failures",
        "Suspicious admin activity",
      ],
    },
    {
      title: "Endpoint and server",
      items: [
        "Privilege escalation",
        "Suspicious process execution",
        "Unauthorized software installation",
        "Root and admin login monitoring",
      ],
    },
    {
      title: "Network",
      items: [
        "Port scanning",
        "DNS spoofing",
        "Malicious domain communication",
        "Abnormal traffic spikes",
      ],
    },
    {
      title: "Application and database",
      items: [
        "Unauthorized database access",
        "Schema change monitoring",
        "API abuse detection",
      ],
    },
    {
      title: "Advanced threats",
      items: [
        "Reverse shell activity",
        "Web shell detection",
        "Zero-day exploit indicators",
      ],
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-slate-200 overflow-hidden flex flex-col"
          >
            {/* Dark Navy Header */}
            <div className="bg-[#1b2a47] px-4 py-3">
              <h5 className="text-sm font-bold text-white tracking-wide">
                {card.title}
              </h5>
            </div>

            {/* White Body with Square Bullets */}
            <div className="bg-white p-4.5 flex-1">
              <ul className="space-y-2.5">
                {card.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start text-xs text-[#1b2a47]"
                  >
                    <span className="inline-block h-2 w-2 bg-[#2563eb] mr-2.5 mt-1 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* 6th Card: MITRE ATT&CK Anchor (Solid Navy) */}
        <div className="rounded-xl bg-[#1b2a47] p-6 text-white flex flex-col items-center justify-center text-center">
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            MITRE ATT&CK
          </h4>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xs">
            Detection use cases aligned to attacker tactics and techniques
          </p>
        </div>
      </div>
    </div>
  );
}
