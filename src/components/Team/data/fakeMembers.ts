import avatar01Url from './avatar/01.jpg'
import avatar02Url from './avatar/02.jpg'
import avatar03Url from './avatar/03.jpg'
import avatar04Url from './avatar/04.jpg'
import avatar05Url from './avatar/05.jpg'

import { Platform } from '../SocialIcon'
import { TeamMemberProps } from '../index'

const fakeMembers: TeamMemberProps[] = [
  {
    name: 'Frances Muller',
    jobTitle: 'Lead Accountability Strategist',
    avatarUrl: avatar01Url,
    socialMedia: [
      {
        platform: Platform.github,
        url: 'https://github.com/hardforkio',
      },
      {
        platform: Platform.linkedIn,
        url: 'https://www.linkedin.com/in/company/hardfork',
      },
    ],
  },
  {
    name: 'Sarah Zieme',
    jobTitle: 'Human Factors Associate',
    avatarUrl: avatar02Url,
    socialMedia: [
      {
        platform: Platform.github,
        url: 'https://github.com/hardforkio',
      },
      {
        platform: Platform.github,
        url: 'https://github.com/hardforkio',
      },
    ],
  },
  {
    name: 'Mr. Danielle Pfannerstill',
    jobTitle: 'Legacy Response Assistant',
    avatarUrl: avatar03Url,
    socialMedia: [
      {
        platform: Platform.linkedIn,
        url: 'https://www.linkedin.com/in/company/hardfork',
      },
    ],
  },
  {
    name: 'Dino Funk',
    jobTitle: 'Chief Accountability Coordinator',
    avatarUrl: avatar04Url,
    socialMedia: [],
  },
  {
    name: 'Jaiden Reinger III',
    jobTitle: 'Investor Identity Supervisor',
    avatarUrl: avatar05Url,
    socialMedia: [],
  },

  {
    name: 'Dino Funk',
    jobTitle: 'Chief Accountability Coordinator',
    avatarUrl: avatar04Url,
    socialMedia: [],
  },
  {
    name: 'Jaiden Reinger III',
    jobTitle: 'Investor Identity Supervisor',
    avatarUrl: avatar05Url,
    socialMedia: [],
  },

  {
    name: 'Dino Funk',
    jobTitle: 'Chief Accountability Coordinator',
    avatarUrl: avatar04Url,
    socialMedia: [],
  },
  {
    name: 'Jaiden Reinger III',
    jobTitle: 'Investor Identity Supervisor',
    avatarUrl: avatar05Url,
    socialMedia: [],
  },
]

export default fakeMembers
