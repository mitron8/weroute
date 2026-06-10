"use client";

import { useState } from "react";

import IntroLoader from "./components/IntroLoader";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Trust from "./components/Trust";
import WhoWeAre from "./components/WhoWeAre";
import WhyWeRoute from "./components/WhyWeRoute";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Capabilities from "./components/Capabilities";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Page() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {/* LOADER */}
      {!loadingDone && (
        <IntroLoader
          onDone={() => setLoadingDone(true)}
        />
      )}

      {/* WEBSITE */}
      <div
        className={`
          transition-opacity duration-700
          ${loadingDone ? "opacity-100" : "opacity-0"}
        `}
        style={{
          willChange: "opacity",
        }}
      >

        

        <main>

          <Hero />


          <WhoWeAre />

           <Trust />

          <WhyWeRoute />

          <Services />

          <Solutions />

          <Capabilities />

          <FinalCTA />

        </main>


      </div>
    </>
  );
}