import { ReactNode } from 'react'
import { ActiveUrlProvider } from './ActiveUrlContext'
import { TranslateProvider } from './TranslateContext'

interface ProvidersProps {
  children: ReactNode
}

function Providers({ children }: ProvidersProps) {
  return (
    <TranslateProvider>
      <ActiveUrlProvider>{children}</ActiveUrlProvider>
    </TranslateProvider>
  )
}

export default Providers
