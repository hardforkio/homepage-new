import * as R from 'ramda'
import data from './team.json'
import { Locale, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'

// import { importData } from '../helpers'
// const memberData = importData('./member/', true)
// console.log(memberData)

export enum Platform {
  github = 'github',
  linkedIn = 'linkedIn',
}

export interface SocialMediaData {
  platform: Platform
  username: string
}

export interface TeamMemberData {
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

const getTeam: (locale: Locale) => TeamData = (locale: Locale) =>
  filterByLocale(locale)(data)
export const useTeam: () => TeamData = R.pipe(useLocale, getTeam)
