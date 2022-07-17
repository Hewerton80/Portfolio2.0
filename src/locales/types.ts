import URSLocales from '../../UTSLocales.json'

export type CodeLocalesType = typeof URSLocales

interface ITexts {
  hi: string
}

export type TextWithLocaleType<Type> = {
  [Property in keyof Type]: ITexts
}

export type ITextsNames = keyof ITexts

export type CodeLocalesNameType = keyof typeof URSLocales
