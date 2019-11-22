import * as R from 'ramda'
import data from './home.json'
import { TranslationCollection, Locale, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import { Head } from '../../components/Head'

import { TeamData, TeamDataOnDisk, teamMembers } from '../team'
import { expandRelation } from '../helpers'

interface Offering {
  headline: string
  image: string
  text: string
}

export interface HomeData {
  heroHeadline: string
  heroSubheadline: string
  offerings: Offering[]
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  emailButton: string
  contactEmail: string
  head: Head
  metaTitle: string
  metaDescription: string
  team: TeamData
}

export type HomeDataOnDisk = {
  id: string
  offerings: TranslationCollection<Offering>[]
  contactEmail: string
  head: TranslationCollection<Head>
  team?: TeamDataOnDisk
} & TranslationCollection<{
  heroHeadline: string
  heroSubheadline: string
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  emailButton: string
}>

export const expandTeamMembers = R.partial(expandRelation, [
  ['team', 'members'],
  teamMembers,
])

const home: HomeDataOnDisk = data
export const getHome = (locale: Locale): HomeData => {
  const expanded = expandTeamMembers(home)
  return filterByLocale(locale)(expanded)
}
export const useHome: () => HomeData = R.pipe(useLocale, getHome)
