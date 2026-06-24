"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question:
      "What is network observability and why does it matter?",
    answer:
      "Network observability is the ability to see performance, security, and health data across your entire network in real time. It matters because problems caught early cost far less than problems discovered after users complain.",
  },
  {
    question:
      "How does SD-WAN improve enterprise network performance?",
    answer:
      "SD-WAN improves performance by intelligently routing traffic across multiple connection types based on real-time conditions, reducing latency for cloud applications and removing dependency on a single expensive circuit.",
  },
  {
    question:
      "What is the difference between Network as a Service and traditional network ownership?",
    answer:
      "Network as a Service shifts infrastructure management to a provider like WeRoute, so enterprises pay for outcomes and uptime rather than owning, maintaining, and upgrading hardware themselves.",
  },
  {
    question:
      "What does network observability actually measure?",
    answer:
      "Network observability measures performance, latency, traffic patterns, and security signals across every connected site at once. It is different from basic monitoring because it shows why something is happening, not just that something happened.",
  },
  {
    question:
      "Is SD-WAN secure enough for enterprise environments?",
    answer:
      "SD-WAN is secure when security is designed into the architecture from the start, including segmentation and Zero Trust principles. SD-WAN deployed without that design layer creates new gaps, not fewer ones.",
  },
];

export default function NetworkFAQ() {
  const [active, setActive] = useState(0);

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

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className="
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
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
              Frequently Asked Questions
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
              Questions
              <br />

              Enterprises
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
                Ask Most
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-xl
              text-lg
              leading-9
              text-[#052440]/60
            "
          >
            Answers to the most common questions about
            enterprise networking, SD-WAN, observability,
            managed networking, and modern infrastructure.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-24 space-y-5">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-[#052440]/10
                  bg-white
                  shadow-[0_15px_50px_rgba(5,36,64,0.05)]
                "
              >
                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    p-8
                    text-left
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold
                      leading-relaxed
                      tracking-[-0.03em]
                      text-[#052440]
                    "
                  >
                    {faq.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#080357]
                      text-white
                    "
                  >
                    {open ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div
                        className="
                          border-t
                          border-[#052440]/10
                          px-8
                          py-8
                        "
                      >
                        <p
                          className="
                            max-w-4xl
                            text-base
                            leading-8
                            text-[#052440]/65
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div
          className="
            mt-20
            rounded-[40px]
            border
            border-[#052440]/10
            bg-white
            p-10
            shadow-[0_15px_50px_rgba(5,36,64,0.04)]
          "
        >
          <p
            className="
              max-w-4xl
              text-2xl
              font-semibold
              leading-relaxed
              tracking-[-0.03em]
              text-[#080357]
            "
          >
            Every enterprise environment is different.
            If your networking requirements are unique,
            our architects can help design a solution
            tailored to your operational goals.
          </p>
        </div>
      </div>
    </section>
  );
}