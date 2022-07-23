import { CodeLocalesType, TextWithLocaleType } from '.'

const startEdutacationDate = '2016-06-29T12:00:00.00'
const startCarrerDate = '2019-03-29T12:00:00.00'
const now = new Date()
export const localeText: TextWithLocaleType<CodeLocalesType> = {
  en: {
    hi: 'Oi',
    iAm: 'Sou o',
    contacts: 'Contatos',
    aboutMeTitle: 'Sobre mim',
    aboutMeDescription: `Bom, sou um programador frontend que estuda programação a 5 anos, estou no mercado acerca de 3 anos.|
      Do back ao front, Trabalhei em diversos projetos, tais como: painéis gerenciais, plataforma de educação, marketplace, landing pages, blogs etc.|
      Tenho experiência em Javascript, typescript, Node.js, express, ReactJs, Next Js, banco de dados relacionais, bootstrap, tailwind, styled components, html, css, scss, construção de interfaces baseados em templates Figma e Adobe. No momento estudo React Native e tenho interesse em escalabilidade e práticas de testes.
      `,
    portfolioTitle: 'Portfólio',
    portifolioDescription:
      'Alguns projetos do qual eu participei, que fiz para lançar no mercado ou com fins de estudo e aprendizado.',
  },
  'pt-BR': {
    hi: 'Hi',
    iAm: "I'm",
    contacts: 'Contacts',
    aboutMeTitle: 'About me',
    aboutMeDescription: `I'm a frontend programmer who has been studying programming for 5 years, I've been in the market for about 3 years.|
      From back to front, I worked on several projects, such as: management panels, education platform, marketplace, landing pages, blogs, etc.|
      I have experience in Javascript, typescript, Node.js, express, ReactJs, Next Js, relational database, bootstrap, tailwind, styled components, html, css, scss, building interfaces based on Figma and Adobe templates. I am currently studying React Native and am interested in scalability and testing practices.
      `,
    portfolioTitle: 'Portfolio',
    portifolioDescription:
      'Some projects that I participated in, that I did to launch on the market or for study and learning purposes.',
  },
}
