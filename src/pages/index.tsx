import type { NextPage } from 'next'
import AboutSection from '../components/pageSections/AboutSection'
import ExperienceAndEducationSection from '../components/pageSections/ExperienceAndEducationSection'
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
