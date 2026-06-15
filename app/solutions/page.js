import React from 'react'
import SolutionsHero from './SolutionsHero'
import ApproachSection from './ApproachSection'
import SolutionsListSection from './SolutionsListSection'
import SolutionsClosingSections from './SolutionsClosingSections'

const page = () => {
  return (
    <div>
        <SolutionsHero/>
        <ApproachSection/>
        <SolutionsListSection/>
        <SolutionsClosingSections/>
      
    </div>
  )
}

export default page
