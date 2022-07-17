import URSLocales from '../../UTSLocales.json'

type CodeLocalesType = typeof URSLocales

interface ITexts {
  hi: string
}

type TextWithLocaleType<Type> = {
  [Property in keyof Type]: ITexts
}

export type CodeLocalesNameType = keyof typeof URSLocales

export const localeText: TextWithLocaleType<CodeLocalesType> = {
  'pt-BR': {
    hi: 'Olá',
  },
  en: {
    hi: 'Hello,',
  },
}
