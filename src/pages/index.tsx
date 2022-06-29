import type { NextPage } from 'next'
import { ExperienceAndEducationSection } from '../components/pageSections'
import AboutSection from '../components/pageSections/AboutSection'
import HomeSection from '../components/pageSections/HomeSection'
import MyPortfolioSection from '../components/pageSections/MyPortfolioSection'

const Home: NextPage = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <MyPortfolioSection />
      <ExperienceAndEducationSection />
    </>
  )
}

export default Home
