import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainTemplate from '../components/templates/MainTemplate'
import { Settings } from 'luxon'
import { ActiveUrlProvider } from '../contexts/ActiveUrlContext'
Settings.defaultLocale = 'pt-br'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActiveUrlProvider>
      <MainTemplate>
        <Component {...pageProps} />
      </MainTemplate>
    </ActiveUrlProvider>
  )
}

export default MyApp
