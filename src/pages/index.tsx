import type { GetStaticProps, NextPage } from 'next'
import AboutSection from '../components/pageSections/AboutSection'
import ContactsSections from '../components/pageSections/ContactsSections'
import ExperienceAndEducationSection from '../components/pageSections/ExperienceAndEducationSection'
import HomeSection from '../components/pageSections/HomeSection'
import MyPortfolioSection from '../components/pageSections/MyPortfolioSection'
import { CodeLocalesNameType } from '../locales'

interface IndexProps {
  lang: CodeLocalesNameType
  defaultLang: CodeLocalesNameType
}

const Home: NextPage<IndexProps> = ({ lang, defaultLang }) => {
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

export const getStaticProps: GetStaticProps = ({ locale, defaultLocale }) => {
  return {
    props: { lang: locale, defaultLang: defaultLocale }, // will be passed to the page component as props
  }
}

export default Home
