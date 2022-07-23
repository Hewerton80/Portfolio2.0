import { DateTime } from 'luxon'

export const staticInfo = {
  portfolio: [
    {
      title: 'Whatsapp Clone',
      description: `
      Clone do Whatsapp web, utilizando react e styled-component.
          `,
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
  ],
  experiences: [
    {
      title: 'Frontend Developer',
      employmentType: 'Full-time',
      companyName: 'Rits Tecnologia',
      isCurrentWork: true,
      startDate: '2021-07-26T12:00:00.00',
      endDate: DateTime.now().toISO(),
      campanayUrlImg:
        'https://media-exp1.licdn.com/dms/image/C4D0BAQHr82VdoHECSg/company-logo_100_100/0/1650283345676?e=1664409600&v=beta&t=sb0keGJngce-TFx78ib3-AzwFrnA9-iEEIvy_XUa8xg',
    },
    {
      title: 'Full-stack Developer',
      employmentType: 'Full-time',
      companyName: 'Compass.uol',
      campanayUrlImg:
        'https://media-exp1.licdn.com/dms/image/C4E0BAQEcxcfEAg0vNw/company-logo_100_100/0/1553710506973?e=1664409600&v=beta&t=OuEvcWiatQcNx8uUzZyD6PIXbKWZLr-kVMABm3-5ve8',
      isCurrentWork: false,
      startDate: '2021-03-15T12:00:00.00',
      endDate: '2021-07-23T12:00:00.00',
    },
    {
      title: 'Full-stack Developer',
      employmentType: 'Scholarship',
      companyName: 'Universidade Federal do Rio Grande do Norte',
      campanayUrlImg:
        'https://media-exp1.licdn.com/dms/image/C560BAQFe04mqmRZy0g/company-logo_100_100/0/1568064674419?e=1664409600&v=beta&t=zs4YhFUYF0h9IYZKW3hYocGAhP3JYLzPgxvtZxZE3kA',
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
      campanayUrlImg:
        'https://media-exp1.licdn.com/dms/image/C560BAQFe04mqmRZy0g/company-logo_100_100/0/1568064674419?e=1664409600&v=beta&t=zs4YhFUYF0h9IYZKW3hYocGAhP3JYLzPgxvtZxZE3kA',
      isCurrentWork: false,
      startDate: '2016-06-15T12:00:00.00',
      endDate: '2021-06-15T12:00:00.00',
    },
  ],
}
