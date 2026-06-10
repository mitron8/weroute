"use client";

import { motion } from "framer-motion";

import NetworkGlobe from "./NetworkGlobe";

import {
  IcoCloud,
  IcoShield,
  IcoNet,
  IcoTgt,
  IcoSrv,
  IcoWifi,
  IcoZap,
} from "./Icons";

const FLOAT_CARDS = [
  {
    title: "Cloud",
    sub: "Hybrid platforms",
    Icon: IcoCloud,
    cls: "top-10 right-0",
  },
  {
    title: "Cybersecurity",
    sub: "Zero-trust posture",
    Icon: IcoShield,
    cls: "top-1/2 -left-10",
  },
  {
    title: "AI Ops",
    sub: "Intelligent automation",
    Icon: IcoZap,
    cls: "bottom-10 right-6",
  },
  {
    title: "Networks",
    sub: "Always-on visibility",
    Icon: IcoNet,
    cls: "bottom-16 left-0",
  },
];

export default function HeroCommandPanel() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 34,
        filter: "blur(14px)",
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
      }}
      transition={{
        delay: 0.4,
        duration: 0.95,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mx-auto
        flex
        w-full
        max-w-[560px]
        flex-col
        items-center
      "
    >

      {/* ORBIT CONTAINER */}
      <div
        className="
          relative
          flex
          h-[520px]
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-[36px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        "
      >

        {/* TOP BAR */}
        <div
          className="
            absolute
            left-0
            top-0
            flex
            w-full
            items-center
            justify-between
            border-b border-white/10
            px-6
            py-4
          "
        >

          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-white/40
            "
          >
            Enterprise Command Layer
          </span>

          <strong
            className="
              text-xs
              font-medium
              text-blue-300
            "
          >
            Live architecture view
          </strong>

        </div>

        {/* BACKGROUND GLOW */}
        <div
          className="
            absolute
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        {/* ORBIT RINGS */}
        <div
          className="
            absolute
            h-[420px]
            w-[420px]
            rounded-full
            border border-blue-500/10
          "
        />

        <div
          className="
            absolute
            h-[520px]
            w-[520px]
            rounded-full
            border border-white/5
          "
        />

        <div
          className="
            absolute
            h-[620px]
            w-[620px]
            rounded-full
            border border-white/[0.03]
          "
        />

        {/* GLOBE */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <NetworkGlobe size={390} />
        </motion.div>

        {/* FLOATING CARDS */}
        {FLOAT_CARDS.map(
          (
            {
              title,
              sub,
              Icon,
              cls,
            },
            i
          ) => (
            <motion.div
              key={title}
              initial={{
                opacity: 0,
                scale: 0.82,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                delay: 0.85 + i * 0.11,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                absolute
                z-20
                flex
                items-center
                gap-3
                rounded-2xl
                border border-white/10
                bg-[#081120]/80
                px-4
                py-3
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                ${cls}
              `}
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <Icon />
              </div>

              <div className="flex flex-col">

                <strong
                  className="
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {title}
                </strong>

                <span
                  className="
                    text-xs
                    text-white/45
                  "
                >
                  {sub}
                </span>

              </div>

            </motion.div>
          )
        )}

      </div>

      {/* METRIC CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 22,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.1,
          duration: 0.65,
        }}
        className="
          relative
          -mt-10
          z-30
          w-[92%]
          rounded-[28px]
          border border-white/10
          bg-[#0a1325]/90
          p-6
          backdrop-blur-2xl
          shadow-[0_20px_70px_rgba(0,0,0,0.55)]
        "
      >

        {/* TOP */}
        <div className="flex items-start gap-4">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-blue-500/10
              text-blue-400
            "
          >
            <IcoTgt />
          </div>

          <div>

            <strong
              className="
                block
                text-lg
                font-semibold
                text-white
              "
            >
              Enterprise Visibility
            </strong>

            <span
              className="
                mt-1
                block
                max-w-sm
                text-sm
                leading-6
                text-white/45
              "
            >
              Operational intelligence across
              networks, cloud, security,
              and automation.
            </span>

          </div>

        </div>

        {/* PROGRESS */}
        <div className="mt-7">

          <div className="mb-3 flex items-center justify-between">

            <span
              className="
                text-sm
                text-white/50
              "
            >
              Readiness Index
            </span>

            <strong
              className="
                text-base
                font-semibold
                text-blue-400
              "
            >
              98%
            </strong>

          </div>

          <div
            className="
              h-2
              overflow-hidden
              rounded-full
              bg-white/5
            "
          >

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "98%" }}
              transition={{
                delay: 1.3,
                duration: 1,
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-blue-500
                via-cyan-400
                to-blue-600
              "
            />

          </div>

        </div>

        {/* PILLS */}
        <div
          className="
            mt-7
            flex
            flex-wrap
            gap-3
          "
        >

          <span
            className="
              flex
              items-center
              gap-2
              rounded-full
              border border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-xs
              font-medium
              text-white/70
            "
          >
            <IcoSrv />
            Cloud Ready
          </span>

          <span
            className="
              flex
              items-center
              gap-2
              rounded-full
              border border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-xs
              font-medium
              text-white/70
            "
          >
            <IcoShield />
            Secure
          </span>

          <span
            className="
              flex
              items-center
              gap-2
              rounded-full
              border border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-xs
              font-medium
              text-white/70
            "
          >
            <IcoWifi />
            Observable
          </span>

        </div>

      </motion.div>

    </motion.div>
  );
}