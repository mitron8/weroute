import React from "react";

export default function SecureByDesign() {
  const features = [
    {
      title: "Security Architecture",
      desc: "Build secure foundations with modern security frameworks, access controls, and infrastructure best practices.",
    },
    {
      title: "Compliance Readiness",
      desc: "Align operations with regulatory requirements, industry standards, and governance frameworks.",
    },
    {
      title: "Risk Management",
      desc: "Identify vulnerabilities early and implement controls that reduce operational and security risks.",
    },
    {
      title: "Continuous Monitoring",
      desc: "Maintain visibility across systems, threats, and compliance posture through proactive monitoring.",
    },
  ];

  const metrics = [
    { value: "99.9%", label: "System Availability" },
    { value: "24/7", label: "Threat Monitoring" },
    { value: "100%", label: "Policy Coverage" },
    { value: "Zero", label: "Compromise Tolerance" },
  ];

  const benefits = [
    "Reduce operational and cyber risks",
    "Meet regulatory compliance requirements",
    "Strengthen customer trust and confidence",
    "Improve audit readiness and governance",
    "Enable secure business growth",
    "Protect critical business assets",
  ];

  return (
    <section className="py-28 bg-[#f7f9fc]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#052440]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
            Secure by Design
          </span>

          <h2 className="mt-8 text-5xl font-black leading-none tracking-[-0.05em] md:text-6xl text-[#052440]">
            Security &<span className="text-[#0d5ea8]"> Compliance</span>
            <br />
            Embedded From Day One
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#052440]/65">
            Security should never be an afterthought. We integrate governance,
            compliance, risk management, and security controls into every stage
            of delivery, ensuring resilience, regulatory alignment, and
            long-term business protection.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-[32px] border border-[#052440]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#052440] text-white transition-colors duration-300 group-hover:bg-[#0d5ea8]">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#052440]">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-[#052440]/60">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-28 grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side - Dark Card */}
          <div>
            <div className="rounded-[40px] bg-[#052440] p-10 text-white shadow-xl shadow-[#052440]/10">
              <span className="uppercase tracking-[0.25em] text-white/50 text-sm font-semibold">
                Security Metrics
              </span>

              <div className="mt-10 grid grid-cols-2 gap-5">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
                  >
                    <div className="text-3xl font-black">{item.value}</div>
                    <div className="mt-2 text-white/60 text-sm font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-[#052440]">
              Why Security-First Matters
            </h3>

            <p className="mt-8 text-lg leading-8 text-[#052440]/65">
              Embedding security and compliance into delivery workflows reduces
              risk, improves resilience, and ensures your organization remains
              prepared for evolving regulatory and cyber security challenges.
            </p>

            <div className="mt-10 space-y-5">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0d5ea8]/10">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#0d5ea8]" />
                  </div>
                  <span className="text-[#052440] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}