import Cookies from 'js-cookie'
import UTSLocales from '../../UTSLocales.json'
import { CodeLocalesNameType } from '../locales'

const codeLocales = Object.keys(UTSLocales)

export const getLocaleCodeFromCookies = (): CodeLocalesNameType => {
  const localeCode = Cookies.get('locale-code')
  if (localeCode && codeLocales.includes(localeCode)) {
    return localeCode as CodeLocalesNameType
  }
  return 'pt-BR'
}
