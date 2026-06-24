import React from 'react'
import Hero from './components/Hero'
import WhyNetworkTransformation from './components/WhyNetworkTransformation'
import BusinessChallenges from './components/BusinessChallenges'
import OurApproach from './components/OurApproach'
import NetworkCapabilities from './components/NetworkCapabilities'
import BusinessOutcomes from './components/BusinessOutcomes'
import WhyChooseWeRoute from './components/WhyChooseWeRoute'
import NetworkCTA from './components/NetworkCTA'
import NetworkFAQ from './components/NetworkFAQ'

const page = () => {
  return (
    <div>
        <Hero/>
        <WhyNetworkTransformation/>
        <BusinessChallenges/>
        <OurApproach/>
        <NetworkCapabilities/>
        <BusinessOutcomes/>
        <WhyChooseWeRoute/>
        <NetworkCTA/>
        <NetworkFAQ/>

      
    </div>
  )
}

export default page
