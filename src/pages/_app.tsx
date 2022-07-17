import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainTemplate from '../components/templates/MainTemplate'
import { Settings } from 'luxon'
import Head from 'next/head'
import Providers from '../contexts'
Settings.defaultLocale = 'en-US'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hewerton Adão</title>
      </Head>
      <Providers>
        <MainTemplate>
          <Component {...pageProps} />
        </MainTemplate>
      </Providers>
    </>
  )
}

export default MyApp
