import { ReactNode } from 'react'
import { ActiveUrlProvider } from './ActiveUrlContext'

interface ProvidersProps {
  children: ReactNode
}

function Providers({ children }: ProvidersProps) {
  return <ActiveUrlProvider>{children}</ActiveUrlProvider>
}

export default Providers
