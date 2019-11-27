import { ProjectProps } from '../../data/home'
import mockScreen from './Mock.jpg'

export const MOCK_PROJECTS: ProjectProps[] = [
  {
    slug: 'fnd',
    client: 'FND Group - 01/2018 bis 10/2019',
    clientLink: 'https://google.de',
    reference: 'Max Minze, CEO',
    image: '',
    product:
      'A digital investment platform for investments in real estate funds',
    application:
      '* Landingpage with CMS and i18n (<https://google.de>)\n* SPA with login, identity verification (IDNow) and private key management (<https://invest.fnd.group>)\n* Smart Contract for token and token distribution',
    technologies:
      '* GatsbyJS + ContentfulCMS\n* React + Typescript + Redux + Apollo Client\n* SASS / Bootstrap\n* Typescript + Apollo Server + AWS lambda + AWS serverless SQL\n* Solidity\n* SSO with JWTs\n* Testing: Jest, Tape, Truffle\n* Ramda (for FP)\n* CI/CD: CircleCI, Netlify, serverless (AWS)',
    responsibilities:
      '* Tech department as a service\n* Planning of infrastructure\n* Planning of security model\n* Choice of technologies\n* Setup and maintenance of deployment, CI, CD, kanban board, etc.\n* Management of requirements (design and product)\n* Software development',
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
    technologies:
      '* GatsbyJS + ContentfulCMS\n* React + Typescript + Redux + Apollo Client\n* SASS / Bootstrap\n* Typescript + Apollo Server + AWS lambda + AWS serverless SQL\n* Solidity\n* SSO with JWTs\n* Testing: Jest, Tape, Truffle\n* Ramda (for FP)\n* CI/CD: CircleCI, Netlify, serverless (AWS)',
    responsibilities:
      '* Tech department as a service\n* Planning of infrastructure\n* Planning of security model\n* Choice of technologies\n* Setup and maintenance of deployment, CI, CD, kanban board, etc.\n* Management of requirements (design and product)\n* Software development',
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
    technologies: 'string',
    responsibilities: 'string',
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
    technologies: 'string',
    responsibilities: 'string',
  },
]
