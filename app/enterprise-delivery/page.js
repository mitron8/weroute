import React from "react";

export default function EnterpriseDelivery() {
  const features = [
    {
      title: "Agile Execution",
      desc: "Deliver value faster through iterative development, sprint planning, and continuous integration pipelines.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "SLA Commitments",
      desc: "Guarantee operational excellence with strict service level agreements, guaranteed response times, and metrics tracking.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Quality Assurance",
      desc: "Maintain highest standards with rigorous automated testing, manual QA protocols, and peer code reviews.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Structured Governance",
      desc: "Ensure project alignment with transparent reporting, dedicated project management, and active stakeholder collaboration.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
  ];

  const metrics = [
    { value: "100%", label: "On-Time Delivery" },
    { value: "24/7", label: "Support SLAs" },
    { value: "Zero", label: "Scope Creep" },
    { value: "360°", label: "Transparency" },
  ];

  const benefits = [
    "Predictable release schedules and transparent budgeting",
    "Strict adherence to enterprise Service Level Agreements (SLAs)",
    "Comprehensive progress tracking and daily communication",
    "Rigorous quality control and automated CI/CD pipelines",
    "Dedicated project management and risk mitigation",
    "Continuous feedback loops to ensure business alignment",
  ];

  return (
    <section className="py-28 bg-[#f7f9fc]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#052440]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#052440]">
            Operational Excellence
          </span>

          <h2 className="mt-8 text-5xl font-black leading-none tracking-[-0.05em] md:text-6xl text-[#052440]">
            Enterprise <span className="text-[#0d5ea8]">Delivery</span>
            <br />
            Structured for Success
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#052440]/65">
            Complex projects require reliable execution. We combine agile methodologies with enterprise-grade governance to deliver software on time, on budget, and to your exact specifications.
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
                {item.icon}
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
                Delivery Metrics
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
              Why Governance Matters
            </h3>

            <p className="mt-8 text-lg leading-8 text-[#052440]/65">
              Without structure, even the best engineering teams fail. Our SLA-driven framework removes unpredictability from software development, giving stakeholders complete visibility and confidence at every milestone.
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