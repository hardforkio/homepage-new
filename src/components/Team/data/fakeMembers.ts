import avatar01Url from './avatar/01.jpg'
import avatar02Url from './avatar/02.jpg'
import avatar03Url from './avatar/03.jpg'
import avatar04Url from './avatar/04.jpg'
import avatar05Url from './avatar/05.jpg'

import { Platform, TeamMemberData } from '../../../data/team'

const fakeMembers: TeamMemberData[] = [
  {
    name: 'Frances Muller',
    jobTitle: 'Lead Accountability Strategist',
    avatar: avatar01Url,
    degree: 'M.Sc. Biology',
    socialMedia: [
      {
        platform: Platform.github,
        username: 'https://github.com/hardforkio',
      },
      {
        platform: Platform.linkedIn,
        username: 'https://www.linkedin.com/in/company/hardfork',
      },
    ],
  },
  {
    name: 'Sarah Zieme',
    jobTitle: 'Human Factors Associate',
    avatar: avatar02Url,
    degree: 'PhD Communication Design',
    socialMedia: [
      {
        platform: Platform.github,
        username: 'https://github.com/hardforkio',
      },
      {
        platform: Platform.github,
        username: 'https://github.com/hardforkio',
      },
    ],
  },
  {
    name: 'Mr. Danielle Pfannerstill',
    jobTitle: 'Legacy Response Assistant',
    avatar: avatar03Url,
    degree: 'M.Sc. Biology',
    socialMedia: [
      {
        platform: Platform.linkedIn,
        username: 'https://www.linkedin.com/in/company/hardfork',
      },
    ],
  },
  {
    name: 'Dino Funk',
    jobTitle: 'Chief Accountability Coordinator',
    avatar: avatar04Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },
  {
    name: 'Jaiden Reinger III',
    jobTitle: 'Investor Identity Supervisor',
    avatar: avatar05Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },

  {
    name: 'Dino Funk',
    jobTitle: 'Chief Accountability Coordinator',
    avatar: avatar04Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },
  {
    name: 'Jaiden Reinger III',
    jobTitle: 'Investor Identity Supervisor',
    avatar: avatar05Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },

  {
    name: 'Dino Funk',
    jobTitle: 'Chief Accountability Coordinator',
    avatar: avatar04Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },
  {
    name: 'Jaiden Reinger III',
    jobTitle: 'Investor Identity Supervisor',
    avatar: avatar05Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },
]

export default fakeMembers
