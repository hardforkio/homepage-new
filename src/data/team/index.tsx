import * as R from 'ramda'
import data from './team.json'
import { Locale, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import { expandRelation, importAll } from '../helpers'

export enum Platform {
  github = 'github',
  linkedIn = 'linkedIn',
}

export interface SocialMediaData {
  platform: Platform
  username: string
}

export interface TeamMemberData {
  uuid: string
  name: string
  jobTitle: string
  degree: string
  avatar: string
  socialMedia: SocialMediaData[]
}

export interface TeamData {
  header: string
  subheader: string
  footer: string
  members: TeamMemberData[]
}

const teamMembers = importAll<TeamMemberData>(
  require.context('./member/', true, /\.json$/),
)

export const expandTeamMembers = R.partial(expandRelation, [
  ['members'],
  teamMembers,
])

const getTeam: (locale: Locale) => TeamData = (locale: Locale) => {
  const expanded = expandTeamMembers(data)
  return filterByLocale(locale)(expanded)
}

export const useTeam: () => TeamData = R.pipe(useLocale, getTeam)
