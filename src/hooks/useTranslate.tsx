import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { CodeLocalesNameType, ITextsNames, localeText } from '../locales'

function useTranslate() {
  const router = useRouter()

  const activedLocale = useMemo(() => {
    return (router.locale || router.defaultLocale) as CodeLocalesNameType
  }, [router])

  const translate = useCallback(
    (text: ITextsNames) => {
      return localeText[activedLocale][text]
    },
    [activedLocale]
  )
  return { activedLocale, translate }
}

export default useTranslate
