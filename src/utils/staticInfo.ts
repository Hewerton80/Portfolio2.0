import { CodeLocalesType } from '../locales'

const email = 'hewerton80@gmail.com'
const github = 'Hewerton80'
export const staticInfo = {
  skills: [
    {
      urlBadge:
        'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      name: 'React',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      name: 'React Native',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
      name: 'Node.js',
    },
    {
      urlBadge: 'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge',
      name: 'Express.js',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/Next.js-eeeeee?style=for-the-badge&logo=nextdotjs&logoColor=black',
      name: 'Next.js',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      name: 'CSS3',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white',
      name: 'Sass',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)',
      name: 'HTML5',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
      name: 'TypeScript',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      name: 'JavaScript',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
      name: 'PostgreSQL',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white',
      name: 'MySQL',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
      name: 'Tailwind CSS',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
      name: 'Bootstrap',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white',
      name: 'Styled Components',
    },
    {
      urlBadge:
        'https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white',
      name: 'Material UI',
    },
  ],

  experiences: [
    {
      title: 'Frontend Developer',
      employmentType: 'Full-time',
      companyName: 'Compass.uol',
      campanayUrlImg: '/images/compass.jpg',
      isCurrentWork: true,
      startDate: '2021-03-15T12:00:00.00',
      endDate: '2021-07-23T12:00:00.00',
    },
    {
      title: 'Full-stack Developer',
      employmentType: 'Full-time',
      companyName: 'Rits Tecnologia',
      isCurrentWork: false,
      startDate: '2021-07-26T12:00:00.00',
      endDate: new Date().toISOString(),
      campanayUrlImg: '/images/rits.jpg',
    },
    {
      title: 'Full-stack Developer',
      employmentType: 'Scholarship',
      companyName: 'Universidade Federal do Rio Grande do Norte',
      campanayUrlImg: '/images/ufrn.jpg',
      isCurrentWork: false,
      startDate: '2019-03-15T12:00:00.00',
      endDate: '2021-01-15T12:00:00.00',
    },
  ],
  educations: [
    {
      title: 'Ciência e Tecnologia',
      employmentType: 'Graduação',
      companyName: 'Universidade Federal do Rio Grande do Norte',
      campanayUrlImg: '/images/ufrn.jpg',
      isCurrentWork: false,
      startDate: '2016-06-15T12:00:00.00',
      endDate: '2021-06-15T12:00:00.00',
    },
  ],
  contontacts: {
    phone: '(84) 98809-1975',
    email,
    whatsappLink: 'https://web.whatsapp.com/send?phone=5584988091975',
    emailLink: `mailto:${email}`,
    linkedin: 'https://bit.ly/34C6FYg',
    github,
    githubLink: `https://github.com/${github}`,
  },
}

interface ITexts {
  title: string
  description: string
}

export type TextWithLocaleType<Type> = {
  [Property in keyof Type]: ITexts
}
export interface Iportfolio {
  header: TextWithLocaleType<CodeLocalesType>
  techs: string[]
  imgs: string[]
  widthImages?: number
  link?: string
  github: { title: string; link: string }
  notLandscape?: boolean
}
export const portfolioInfo: Iportfolio[] = [
  {
    header: {
      'pt-BR': {
        title: 'Platafoma LoP',
        description:
          'Fui colaborador de uma plataforma voltada para área da educação, essa plataforma tem o intuito de agilizar o processo de ensino e aprendizagem na área da programação. Ideal para praticar algorítimos, a plataforma faz correções automáticas dos códigos submetidos.',
      },
      en: {
        title: 'LoP Platform',
        description:
          'I was a contributor to a platform dedicated to the area of education, this platform aims to streamline the teaching and learning process in the area of programming. Ideal for practicing algorithms, the platform automatically corrects submitted codes.',
      },
    },
    techs: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'MySQL', 'ReactJS', 'BootStrap'],
    imgs: [
      '/images/Screenshot_lop11.png',
      '/images/Screenshot_lop22.png',
      '/images/Screenshot_lop33.png',
    ],
    link: 'https://lop.natalnet.br',
    github: {
      title: 'lop-front-end',
      link: 'https://github.com/Natalnet/lop-front-end',
    },
  },
  {
    header: {
      'pt-BR': {
        title: '0L1nk - Encurtador de URL',
        description: `
        Sabe aquela URL gigante que deixa seus chats e feeds poluídos, mas você está querendo compartilhar com alguém? O 0l1nk é uma ferramenta feita para poder resolver este tipo de problema. De um jeito rápido e simples, aqui você pode encurtar-las, deixando-as fáceis de se lembrar. Também é possível colocar um apelido para seu link (EX: https://0l1nk.com/minha-url). Além disso, você pode saber o número de acessos à mesma.
            `,
      },
      en: {
        title: 'URL shortener',
        description: `
        You know that giant URL that leaves your chats and feeds polluted, but you want to share it with someone? 0l1nk is a tool designed to solve this type of problem. In a quick and simple way, here you can shorten them, making them easy to remember. It is also possible to put a nickname for your link (EX: https://0l1nk.com/minha-url). Also, you can know the number of hits to it.
            `,
      },
    },
    imgs: [
      'https://user-images.githubusercontent.com/37268237/176741685-fb72224d-a1ff-47f4-88f1-33493fa187f2.png',
    ],
    techs: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'ReactJS', 'Nextjs', 'Tailwind'],
    link: 'https://www.0l1nk.com',
    github: {
      title: '0Lynk',
      link: 'https://github.com/Hewerton80/0Lynk#readme',
    },
  },
  {
    header: {
      'pt-BR': {
        title: 'Gerenciador de tarefas',
        description: `
        Scheduler/Task Manager. Features: Create/Update/Remove Tasks,
        List tasks based on categories (Overdue, To Do Today, To Do and Done),
        Update tasks to 'Done'.`,
      },
      en: {
        title: 'Gerenciador de tarefas',
        description: `
                Agendador/Gerenciador de tarefas. Funcionalidades: Criar/Atualizar/Remover tarefas, 
                Listar tarefas com base nas categorias (Atrasadas, Para fazer hoje, Para fazer e Feitas), 
                Atualizar tarefas para 'Feitas' 
            `,
      },
    },
    imgs: [
      'https://user-images.githubusercontent.com/37268237/110219011-8321e780-7e9b-11eb-9138-065fb96003e8.gif',
    ],
    widthImages: 200,
    techs: ['React Native', 'TypeScript', 'Styled Components'],
    // link: 'https://github.com/Hewerton80/Task-Manger/blob/master/README.md',
    github: {
      title: 'Task-Manger',
      link: 'https://github.com/Hewerton80/Task-Manger/blob/master/README.md',
    },
    notLandscape: true,
  },
  {
    header: {
      'pt-BR': {
        title: 'Spotfy clone',
        description: 'Para fins de estudo, desenvolvi um "clone" do Spotfy',
      },
      en: {
        title: 'Spotfy clone',
        description: 'For study purposes, I developed a "clone" of Spotify',
      },
    },
    imgs: [
      'https://user-images.githubusercontent.com/37268237/166114575-ccc1b876-e893-460f-9ac5-c8bf4660b8ab.gif',
    ],
    techs: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'ReactJS', 'Nextjs', 'Tailwind'],
    link: 'https://spotify-clone-next-tailwind.vercel.app',
    github: {
      title: 'spotify-clone-next-tailwind',
      link: 'https://github.com/Hewerton80/spotify-clone-next-tailwind#readme',
    },
  },
  {
    header: {
      'pt-BR': {
        title: 'Conversor de moeda online',
        description: 'Calcula moedas e taxas de câmbio em tempo real',
      },
      en: {
        title: 'Online currency converter',
        description: 'Calculates currencies and exchange rates in real time',
      },
    },
    imgs: [
      'https://user-images.githubusercontent.com/37268237/164991850-04973204-acfc-44c8-a8b8-85463c7c3657.gif',
    ],
    techs: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'ReactJS', 'Nextjs', 'Tailwind'],
    link: 'https://currency-convert-front.vercel.app',
    github: {
      title: 'currency-convert',
      link: 'https://github.com/Hewerton80/currency-convert-front#readme',
    },
  },
  {
    header: {
      'pt-BR': {
        title: 'Pokedex',
        description:
          "Projeto desenvolvido para consumir a api 'pokeapi.co'. Funcionalidades: Lista pokemons e obtêm informações especificas do pokemon.",
      },
      en: {
        title: 'Online currency converter',
        description:
          "Project developed to consume the 'pokeapi.co' api. Features: List pokemons and get pokemon specific information.",
      },
    },
    techs: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'ReactJS', 'Nextjs', 'Tailwind'],
    imgs: [
      'https://user-images.githubusercontent.com/37268237/170846170-71bad836-0062-45ce-b148-c220c0632e1e.gif',
    ],
    link: 'https://pokedex-nextjs-tailwind-graphql.vercel.app/',
    github: {
      title: 'pokedex-nextjs-tailwind-graphql',
      link: 'https://github.com/Hewerton80/pokedex-nextjs-tailwind-graphql/blob/master/README.md',
    },
  },

  {
    header: {
      'pt-BR': {
        title: 'Gerador de dados fakes',
        description: 'Um sistema que gera dados fakes para testes',
      },
      en: {
        title: 'Fake data generator',
        description: 'A system that generates fake data for testing',
      },
    },
    imgs: [
      'https://user-images.githubusercontent.com/37268237/164992509-31355991-af5c-4306-afdb-6b697e035019.gif',
    ],
    techs: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'ReactJS', 'Nextjs', 'Tailwind'],
    link: 'https://fake-generator.vercel.app/',
    github: {
      title: 'fake-generator',
      link: 'https://github.com/Hewerton80/fake-generator#readme',
    },
  },
  {
    header: {
      'pt-BR': {
        title: 'My-animes',
        description: `
                Site similar ao IMD animes, utilizando a kitsu api. Ótimo para acompanhar os novos lançamentos e avaliações da comunidade otaku.
            `,
      },
      en: {
        title: 'My-animes',
        description: `
                Site similar to IMD animes, using the kitsu api. Great for keeping up with new releases and reviews from the otaku community.
            `,
      },
    },
    imgs: [
      '/images/my-animes1.png',
      '/images/my-animes2.png',
      '/images/my-animes3.png',
      '/images/my-animes4.png',
    ],
    techs: ['TypeScript', 'NextJs', 'Styled Components'],
    link: 'https://my-animes-db.vercel.app/',
    github: {
      title: 'myAnimesDB-Next.js',
      link: 'https://github.com/Hewerton80/myAnimesDB-Next.js',
    },
  },
  {
    header: {
      'pt-BR': {
        title: 'Whatsapp Clone',
        description: `
        Clone do Whatsapp web, utilizando react e styled-component.
            `,
      },
      en: {
        title: 'Whatsapp web Clone',
        description: 'Whatsapp web Clone ',
      },
    },
    imgs: [
      'https://user-images.githubusercontent.com/37268237/177004384-8b5cea94-c2bc-4fde-864f-64b6d2509bd1.jpg',
    ],
    techs: [
      'HTML',
      'CSS',
      'JavaScript',
      'Typescript',
      'ReactJS',
      'Nextjs',
      'styled-components',
    ],
    github: {
      title: 'clone-zap-frontend',
      link: 'https://github.com/Hewerton80/clone-zap-frontend/blob/master/README.md',
    },
  },
]
