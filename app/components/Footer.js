"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from "./Logo";
import { Phone, MapPin, Globe, Building2 } from 'lucide-react';
import WaterRippleCanvas from './WaterRippleCanvas';

export default function Footer() {
  const footerRef = useRef(null);
  
  return (
    <footer
      id="footer"
      ref={footerRef}
      className="
        relative
        overflow-hidden
        border-t border-white/10
        bg-[#080357]
        pt-24
        text-white
      "
    >
      {/* REACTIVE WATER RIPPLE CANVAS */}
      <WaterRippleCanvas />

      {/* Background elements preserved under the wave */}
      <div className="absolute inset-0 pointer-events-none z-0">

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

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-7xl px-6"
      >

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
            lg:grid-cols-4
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

              <Link
                href="/about"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                About Us
              </Link>

              <Link
                href="/blogs"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                Blogs & Insights
              </Link>

              <Link
                href="/contact"
                className="
                  text-white/45
                  transition-colors duration-300
                  hover:text-white
                "
              >
                Contact
              </Link>

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

          {/* CONTACT INFO */}
          <div>

            <h4
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Contact
            </h4>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-6
              "
            >
              
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 text-[#B7F36B]">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/45 mb-1">Phone</span>
                  <span className="text-white/80 text-sm">8097486432</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 text-[#B7F36B]">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/45 mb-1">Head Office</span>
                  <span className="text-white/80 text-sm">Bangalore, India</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 text-[#B7F36B]">
                  <Globe size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/45 mb-1">Global Presence</span>
                  <span className="text-white/80 text-sm">Washington, USA<br/>Sydney, Australia</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 text-[#B7F36B]">
                  <Building2 size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/45 mb-1">Sister Branch</span>
                  <span className="text-white/80 text-sm">Weroute Technologies Pvt Ltd<br/>Delhi, NCR</span>
                </div>
              </div>

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

      </motion.div>
    </footer>
  );
}