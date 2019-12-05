import mockScreen from './Mock.jpg'
import { ProjectData } from '../../data/project/types'

export const MOCK_PROJECTS: ProjectData[] = [
  {
    slug: 'fnd',
    client: 'FND Group - 01/2018 bis 10/2019',
    clientLink: 'https://google.de',
    reference: 'Max Minze, CEO',
    image: '',
    usedTechnologies: [
      { uuid: '123', name: 'ReactJS', link: 'https://reactjs.org/' },
      {
        uuid: '1234',
        name: 'Typescript',
        link: 'https://www.typescriptlang.org/',
      },
    ],
    product:
      'A digital investment platform for investments in real estate funds',
    application:
      '* Landingpage with CMS and i18n (<https://google.de>)\n* SPA with login, identity verification (IDNow) and private key management (<https://invest.fnd.group>)\n* Smart Contract for token and token distribution',

    responsibilities:
      '* Tech department as a service\n* Planning of infrastructure\n* Planning of security model\n* Choice of technologies\n* Setup and maintenance of deployment, CI, CD, kanban board, etc.\n* Management of requirements (design and product)\n* Software development',
    head: {
      title: 'Hardfork GmbH - Software Entwicklung und Business Development',
      meta: {
        description: 'Wir entwickeln Software nach Ihren Wünschen in Berlin',
        keywords: 'Softwareentwicklung',
      },
    },
  },
  {
    slug: 'fnd',
    client: 'SatoshiPay',
    clientLink: 'stoshi',
    reference: 'string',
    image: mockScreen,
    product:
      'Micropayment "one click, zero signup" solution using Bitcoin / Blockchain (today Stellar)',
    application:
      '* Landingpage with CMS and i18n (<https://google.de>)\n* SPA with login, identity verification (IDNow) and private key management (<https://invest.fnd.group>)\n* Smart Contract for token and token distribution',
    usedTechnologies: [
      { uuid: '1234', name: 'ReactJS', link: 'https://reactjs.org/' },
      {
        uuid: '1234',
        name: 'Typescript',
        link: 'https://www.typescriptlang.org/',
      },
    ],
    responsibilities:
      '* Tech department as a service\n* Planning of infrastructure\n* Planning of security model\n* Choice of technologies\n* Setup and maintenance of deployment, CI, CD, kanban board, etc.\n* Management of requirements (design and product)\n* Software development',
    head: {
      title: 'Hardfork GmbH - Software Entwicklung und Business Development',
      meta: {
        description: 'Wir entwickeln Software nach Ihren Wünschen in Berlin',
        keywords: 'Softwareentwicklung',
      },
    },
  },
  {
    slug: 'fnd',
    client: 'FND',
    clientLink: 'fnd',
    reference: 'string',
    image: '',
    product:
      'A digital investment platform for investments in real estate funds',
    application: 'string',
    usedTechnologies: [],
    responsibilities: 'string',
    head: {
      title: 'Hardfork GmbH - Software Entwicklung und Business Development',
      meta: {
        description: 'Wir entwickeln Software nach Ihren Wünschen in Berlin',
        keywords: 'Softwareentwicklung',
      },
    },
  },
  {
    slug: 'fnd',
    client: 'SatoshiPay',
    clientLink: 'stoshi',
    reference: 'string',
    image: '',
    product:
      'Micropayment "one click, zero signup" solution using Bitcoin / Blockchain (today Stellar)',
    application: 'string',
    usedTechnologies: [],
    responsibilities: 'string',
    head: {
      title: 'Hardfork GmbH - Software Entwicklung und Business Development',
      meta: {
        description: 'Wir entwickeln Software nach Ihren Wünschen in Berlin',
        keywords: 'Softwareentwicklung',
      },
    },
  },
]
