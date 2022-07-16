import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainTemplate from '../components/templates/MainTemplate'
import { Settings } from 'luxon'
import { ActiveUrlProvider } from '../contexts/ActiveUrlContext'
import Head from 'next/head'
Settings.defaultLocale = 'en-US'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hewerton Adão</title>
      </Head>
      <ActiveUrlProvider>
        <MainTemplate>
          <Component {...pageProps} />
        </MainTemplate>
      </ActiveUrlProvider>
    </>
  )
}

export default MyApp
