import { createContext, Fragment, useCallback, useEffect, useState } from 'react'
import { CodeLocalesNameType, ITextsNames, localeText } from '../locales'
import UTSLocales from '../../UTSLocales.json'
import Cookies from 'js-cookie'
import { getLocaleCodeFromCookies } from '../utils/cookies'

const codeLocales = Object.keys(UTSLocales)

interface TranslateContextProps {
  activedLocale: CodeLocalesNameType
  setActivedLocale: (locale: CodeLocalesNameType) => void
  translate: (text: ITextsNames) => string
}

export const TranslateContext = createContext({} as TranslateContextProps)

export function TranslateProvider({ children }: { children: React.ReactNode }) {
  const [activedLocale, setActivedLocale] = useState<CodeLocalesNameType>(
    getLocaleCodeFromCookies()
  )
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    Cookies.set('locale-code', activedLocale)
  }, [activedLocale])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const translate = useCallback(
    (text: ITextsNames) => {
      return localeText[activedLocale][text]
    },
    [activedLocale]
  )

  return (
    <TranslateContext.Provider value={{ activedLocale, setActivedLocale, translate }}>
      {isMounted && children}
    </TranslateContext.Provider>
  )
}
