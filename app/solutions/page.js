import React from 'react'
import SolutionsHero from './SolutionsHero'
import ApproachSection from './ApproachSection'
import SolutionsListSection from './SolutionsListSection'
import SolutionsClosingSections from './SolutionsClosingSections'
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import HyperTextParagraph from '../components/ui/HyperTextParagraph'


const page = () => {
 {/*   const bio =
    "WeRoute delivers outcome-driven technology solutions that help organizations modernize infrastructure, improve resilience, enhance visibility, and operate securely at scale.";

  // Key words to trigger the effect
  const triggers = [
    "outcome-driven",
    "modernize",
    "resilience",
    "visibility",
    "securely",
    "scale"
  ];*/}
  return (
    <div>
        <SolutionsHero/>
        {/*<div className="rounded-[2.5rem] border border-[#052440]/10 bg-white/80 p-8 shadow-[0_15px_50px_rgba(5,36,64,0.04)] backdrop-blur-xl md:p-16">
         <HyperTextParagraph
            text={bio}
            highlightWords={triggers}
            className="text-2xl font-semibold leading-[1.6] text-[#052440] md:text-4xl"
          />
        </div>*/}
    
        <ApproachSection/>
        <SolutionsListSection/>
        <SolutionsClosingSections/>
      
    </div>
  )
}

export default page
