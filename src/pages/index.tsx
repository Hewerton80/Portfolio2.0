import axios from 'axios'
import type { GetStaticProps, NextPage } from 'next'
import { useCallback, useEffect } from 'react'
import AboutSection from '../components/pageSections/AboutSection'
import ContactsSections from '../components/pageSections/ContactsSections'
import ExperienceAndEducationSection from '../components/pageSections/ExperienceAndEducationSection'
import HomeSection from '../components/pageSections/HomeSection'
import MyPortfolioSection from '../components/pageSections/MyPortfolioSection'

const Home: NextPage = () => {
  const saveIpAdress = useCallback(async () => {
    let myIp = ''
    try {
      const { data: idObject } = await axios.get('https://api.ipify.org/?format=json')
      myIp = idObject.ip
    } catch (err) {
      console.log('register erro')
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/register`,
        { register: myIp }
      )
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Home
