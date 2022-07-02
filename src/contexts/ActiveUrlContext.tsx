import { createContext, useState } from 'react'

interface ActiveUrlContextProps {
  activeUrl: string
  setActiveUrl: (url: string) => void
}

export const ActiveUrlContext = createContext({ activeUrl: '' } as ActiveUrlContextProps)

export function ActiveUrlProvider({ children }: { children: React.ReactNode }) {
  const [activeUrl, setActiveUrl] = useState('')

  return (
    <ActiveUrlContext.Provider value={{ activeUrl, setActiveUrl }}>
      {children}
    </ActiveUrlContext.Provider>
  )
}
