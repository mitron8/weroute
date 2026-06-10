"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative
        overflow-hidden
        border-t border-white/10
        bg-[#040711]
        pt-24
        text-white
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <div
          className="
            absolute
            left-[-10%]
            top-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-10%]
            right-[-10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-cyan-500/5
            blur-3xl
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* TOP */}
        <div
          className="
            flex
            flex-col
            gap-16
            border-b border-white/10
            pb-16
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          {/* LEFT */}
          <div className="max-w-md">

            <img
            className="h-15 "
            src={"/images/logo/weroute.png"}
            alt="WeRoute"
          />

            <p
              className="
                mt-6
                text-base
                leading-7
                text-white/45
              "
            >
              Enterprise technology consulting
              specialising in networking,
              cybersecurity, cloud,
              and digital engineering.
            </p>

          </div>

          {/* BIG TEXT */}
          <div
            className="
              flex
              flex-wrap
              gap-x-5
              gap-y-3
              text-4xl
              font-black
              leading-none
              tracking-[-0.05em]
              text-white/10
              md:text-6xl
              lg:max-w-3xl
              lg:justify-end
            "
          >

            <span>Beyond</span>
            <span>Boundaries,</span>
            <span>Bridging</span>
            <span>Connectivity</span>

          </div>

        </div>

        {/* GRID */}
        <div
          className="
            grid
            gap-12
            py-16
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {/* COMPANY */}
          <div>

            <h4
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Company
            </h4>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
              "
            >

              <a
                href="#"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                Who We Are
              </a>

              <a
                href="#"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                Careers
              </a>

              <a
                href="#"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                Contact
              </a>

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h4
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Services
            </h4>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
              "
            >

              <a
                href="#"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                Managed Services
              </a>

              <a
                href="#"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                Consulting
              </a>

              <a
                href="#"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                AI Development
              </a>

            </div>

          </div>

          {/* SOLUTIONS */}
          <div>

            <h4
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Solutions
            </h4>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
              "
            >

              <a
                href="#"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                Cybersecurity
              </a>

              <a
                href="#"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                Cloud
              </a>

              <a
                href="#"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                Networking
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t border-white/10
            py-8
            text-center
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p
            className="
              text-sm
              text-white/40
            "
          >
            © 2026 WeRoute.
            All rights reserved.
          </p>

          <div
            className="
              flex
              justify-center
              gap-6
            "
          >

            <a
              href="#"
              className="
                text-sm
                text-white/40
                transition-colors duration-300
                hover:text-white
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                text-sm
                text-white/40
                transition-colors duration-300
                hover:text-white
              "
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}