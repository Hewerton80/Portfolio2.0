import URSLocales from '../../UTSLocales.json'

export type CodeLocalesType = typeof URSLocales

interface ITexts {
  hi: string
  iAm: string
  contacts: string
  experience: string
  aboutMeTitle: string
  aboutMeDescription: string
  portfolioTitle: string
  portifolioDescription: string
  employments: string
  education: string
  phone: string
}

export type TextWithLocaleType<Type> = {
  [Property in keyof Type]: ITexts
}

export type ITextsNames = keyof ITexts

export type typeURSLocalesNames = keyof CodeLocalesType

export type CodeLocalesNameType = keyof typeof URSLocales
