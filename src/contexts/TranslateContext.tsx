import { createContext, useCallback, useEffect, useState } from 'react'
import { CodeLocalesNameType, ITextsNames, localeText } from '../locales'
import UTSLocales from '../../UTSLocales.json'

const codeLocales = Object.keys(UTSLocales)

interface TranslateContextProps {
  activedLocale: CodeLocalesNameType
  setActivedLocale: (locale: CodeLocalesNameType) => void
  translate: (text: ITextsNames) => string
}

export const TranslateContext = createContext({} as TranslateContextProps)

export function TranslateProvider({ children }: { children: React.ReactNode }) {
  const [activedLocale, setActivedLocale] = useState<CodeLocalesNameType>('pt-BR')

  useEffect(() => {
    localStorage.setItem('locale-code', activedLocale)
  }, [activedLocale])

  useEffect(() => {
    const localeCodeLocalStorage = localStorage.getItem('locale-code')
    if (localeCodeLocalStorage && codeLocales.includes(localeCodeLocalStorage)) {
      setActivedLocale(localeCodeLocalStorage as CodeLocalesNameType)
    }
  }, [])

  const translate = useCallback(
    (text: ITextsNames) => {
      return localeText[activedLocale][text]
    },
    [activedLocale]
  )

  return (
    <TranslateContext.Provider value={{ activedLocale, setActivedLocale, translate }}>
      {children}
    </TranslateContext.Provider>
  )
}
