"use client";

import {
  BrainCircuit,
  Network,
  Eye,
  CloudCog,
  Wifi,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "AI Network Solutions",
    description:
      "AI network solutions use predictive intelligence to catch problems before users notice them, turning your connectivity solution from reactive to genuinely proactive.",
    icon: <BrainCircuit size={30} />,
    tags: [
      "Predictive Intelligence",
      "AI Operations",
      "Network Automation",
    ],
  },
  {
    number: "02",
    title: "Software-Defined Networking",
    description:
      "WeRoute SD-WAN solutions and SDN architecture replace rigid, expensive infrastructure with software-defined control that adapts as fast as your business does.",
    icon: <Network size={30} />,
    tags: [
      "SD-WAN",
      "SDN",
      "Enterprise Connectivity",
    ],
  },
  {
    number: "03",
    title: "Network Observability and Assurance",
    description:
      "Network observability gives you the full picture, not just alerts after something breaks. See performance and health across every connected site before it costs you.",
    icon: <Eye size={30} />,
    tags: [
      "Observability",
      "Network Assurance",
      "Performance Monitoring",
    ],
  },
  {
    number: "04",
    title: "Network as a Service",
    description:
      "Our enterprise connectivity solutions shift the operational burden off your team. WeRoute manages the infrastructure so your engineers focus on what moves the business.",
    icon: <CloudCog size={30} />,
    tags: [
      "NaaS",
      "Managed SD-WAN",
      "Operational Efficiency",
    ],
  },
  {
    number: "05",
    title: "Mobility and Wireless Solutions",
    description:
      "Enterprise mobility and wireless solutions built on Wi-Fi 6 and Zero Trust Network Access principles, for a workforce that is rarely at one desk.",
    icon: <Wifi size={30} />,
    tags: [
      "Wi-Fi 6",
      "ZTNA",
      "Enterprise Mobility",
    ],
  },
];

export default function NetworkCapabilities() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f7f9fc]
        py-32
      "
    >
      {/* GRID */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(5,36,64,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,36,64,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          left-[-10%]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#080357]/5
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="max-w-4xl">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#052440]/10
              bg-white
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#052440]
            "
          >
            Network Capabilities
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-[#080357]
              md:text-6xl
              lg:text-7xl
            "
          >
            Enterprise
            <br />

            Networking
            <span
              className="
                bg-gradient-to-r
                from-[#080357]
                to-[#A7BF73]
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              Capabilities
            </span>
          </h2>

          <p
            className="
              mt-10
              max-w-3xl
              text-lg
              leading-9
              text-[#052440]/65
            "
          >
            Modern networking capabilities designed to improve
            visibility, performance, security, automation and
            operational efficiency across enterprise environments.
          </p>
        </div>

        {/* BENTO GRID */}
        <div
          className="
            mt-24
            grid
            gap-6
            lg:grid-cols-12
          "
        >
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className={`
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-[#052440]/10
                bg-white
                p-8
                shadow-[0_15px_50px_rgba(5,36,64,0.05)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_70px_rgba(5,36,64,0.08)]

                ${
                  index === 0
                    ? "lg:col-span-7 lg:min-h-[420px]"
                    : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                    ? "lg:col-span-4"
                    : index === 3
                    ? "lg:col-span-8"
                    : "lg:col-span-12"
                }
              `}
            >
              {/* Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#052440]/5
                  via-transparent
                  to-[#A7BF73]/5
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Top */}
              <div
                className="
                  relative z-10
                  flex
                  items-start
                  justify-between
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#080357]
                    text-white
                  "
                >
                  {item.icon}
                </div>

                <span
                  className="
                    text-sm
                    font-bold
                    tracking-[0.25em]
                    text-[#052440]/25
                  "
                >
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-12">
                <h3
                  className="
                    max-w-md
                    text-3xl
                    font-bold
                    leading-tight
                    tracking-[-0.03em]
                    text-[#052440]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-base
                    leading-8
                    text-[#052440]/60
                  "
                >
                  {item.description}
                </p>

                {/* Tags */}
                <div
                  className="
                    mt-10
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-[#052440]/10
                        bg-[#052440]/5
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-[#052440]/70
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="
                    group/btn
                    mt-10
                    flex
                    items-center
                    gap-3
                    font-semibold
                    text-[#080357]
                  "
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover/btn:translate-x-1
                    "
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}