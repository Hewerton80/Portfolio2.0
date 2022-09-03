import axios from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import { useCallback, useEffect } from 'react'
import AboutSection from '../components/pageSections/AboutSection'
import ContactsSections from '../components/pageSections/ContactsSections'
import ExperienceAndEducationSection from '../components/pageSections/ExperienceAndEducationSection'
import HomeSection from '../components/pageSections/HomeSection'
import MyPortfolioSection from '../components/pageSections/MyPortfolioSection'

const Home: NextPage = () => {
  const saveIpAdress = useCallback(async () => {
    try {
      const response = await axios.post('/api/ip')
      console.log('response:', response.data)
    } catch (error) {
      console.log('error:', error)
    }
  }, [])

  // useEffect(() => {
  //   saveIpAdress()
  // }, [saveIpAdress])

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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/ip')
    console.log('response:', response.data)
  } catch (error) {
    console.log('error:', error)
  }
  return {
    props: {},
  }
}

export default Home
