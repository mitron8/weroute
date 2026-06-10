import React from "react";

export default function OperationalClarity() {
  const features = [
    {
      title: "Real-Time Telemetry",
      desc: "Monitor system health, user traffic, and application performance with sub-second accuracy and deep tracing.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Predictive Analytics",
      desc: "Leverage historical data and machine learning to anticipate bottlenecks and anomalies before they impact users.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Centralized Logging",
      desc: "Aggregate logs from across your entire infrastructure into a single, easily searchable source of truth.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Automated Optimization",
      desc: "Continuously fine-tune resource allocation and code execution paths based on active usage patterns.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
  ];

  const metrics = [
    { value: "360°", label: "System Visibility" },
    { value: "<1s", label: "Alert Latency" },
    { value: "100%", label: "Log Retention" },
    { value: "24/7", label: "Active Monitoring" },
  ];

  const benefits = [
    "Pinpoint and resolve performance bottlenecks instantly",
    "Dramatically reduce Mean Time to Resolution (MTTR)",
    "Optimize cloud resource spending based on actual usage",
    "Align technical performance metrics with business KPIs",
    "Ensure continuous compliance and audit readiness",
    "Empower engineering teams with actionable, clear data",
  ];

  return (
    <section className="py-28 bg-[#f7f9fc]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#052440]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#052440]">
            Data-Driven Insights
          </span>

          <h2 className="mt-8 text-5xl font-black leading-none tracking-[-0.05em] md:text-6xl text-[#052440]">
            Operational <span className="text-[#0d5ea8]">Clarity</span>
            <br />
            Visibility & Optimization
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#052440]/65">
            Gain complete control over your systems with comprehensive monitoring, real-time analytics, and actionable insights. We eliminate blind spots so you can make informed decisions that enhance performance and reliability.
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
                Visibility Metrics
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
              Why Visibility Matters
            </h3>

            <p className="mt-8 text-lg leading-8 text-[#052440]/65">
              You cannot optimize what you cannot measure. Deep operational visibility transforms reactive firefighting into proactive engineering, ensuring your infrastructure runs at peak efficiency.
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