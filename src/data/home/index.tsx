import * as R from 'ramda'
import data from './home.json'
import { TranslationCollection, Locale, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import { Head } from '../../components/Head'
import { TeamData, TeamDataOnDisk } from '../team'
import { translate } from '../../cms/i18n'

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

// FIXME: Mixes old and new translation methods
const home: HomeDataOnDisk = data
export const getHome = (locale: Locale): HomeData => {
  return R.pipe<HomeDataOnDisk, any, any>(
    filterByLocale(locale),
    translate(locale),
  )(home)
}
export const useHome: () => HomeData = R.pipe(useLocale, getHome)
