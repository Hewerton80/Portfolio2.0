import type { GetStaticProps, NextPage } from 'next'
import AboutSection from '../components/pageSections/AboutSection'
import ContactsSections from '../components/pageSections/ContactsSections'
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
      <ContactsSections />
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  }
}

export default Home
