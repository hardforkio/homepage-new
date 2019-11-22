import avatar01Url from './avatar/01.jpg'
import avatar02Url from './avatar/02.jpg'
import avatar03Url from './avatar/03.jpg'
import avatar04Url from './avatar/04.jpg'
import avatar05Url from './avatar/05.jpg'

import { TeamMemberData } from '../../../data/team'
import { Platform } from '../SocialIcon'

const fakeMembers: TeamMemberData[] = [
  {
    uuid: '1',
    name: 'Frances Muller',
    jobTitle: 'Lead Accountability Strategist',
    avatar: avatar01Url,
    degree: 'M.Sc. Biology',
    socialMedia: [
      {
        platform: Platform.github,
        username: 'FrancessMullller34',
      },
      {
        platform: Platform.linkedIn,
        username: 'FrancessMullller34',
      },
    ],
  },
  {
    uuid: '2',
    name: 'Sarah Zieme',
    jobTitle: 'Human Factors Associate',
    avatar: avatar02Url,
    degree: 'PhD Communication Design',
    socialMedia: [
      {
        platform: Platform.github,
        username: 'hardforkio',
      },
      {
        platform: Platform.github,
        username: 'hardforkio',
      },
    ],
  },
  {
    uuid: '3',
    name: 'Mr. Danielle Pfannerstill',
    jobTitle: 'Legacy Response Assistant',
    avatar: avatar03Url,
    degree: 'M.Sc. Biology',
    socialMedia: [
      {
        platform: Platform.linkedIn,
        username: 'company/hardfork',
      },
    ],
  },
  {
    uuid: '4',
    name: 'Dino Funk',
    jobTitle: 'Chief Accountability Coordinator',
    avatar: avatar04Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },
  {
    uuid: '5',
    name: 'Jaiden Reinger III',
    jobTitle: 'Investor Identity Supervisor',
    avatar: avatar05Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },

  {
    uuid: '6',
    name: 'Dino Funk',
    jobTitle: 'Chief Accountability Coordinator',
    avatar: avatar04Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },
  {
    uuid: '7',
    name: 'Jaiden Reinger III',
    jobTitle: 'Investor Identity Supervisor',
    avatar: avatar05Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },

  {
    uuid: '8',
    name: 'Dino Funk',
    jobTitle: 'Chief Accountability Coordinator',
    avatar: avatar04Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },
  {
    uuid: '9',
    name: 'Jaiden Reinger III',
    jobTitle: 'Investor Identity Supervisor',
    avatar: avatar05Url,
    degree: 'M.Sc. Biology',
    socialMedia: [],
  },
]

export default fakeMembers
