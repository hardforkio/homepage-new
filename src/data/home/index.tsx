import * as R from 'ramda'
import data from './home.json'
import { TranslationCollection, Locale, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import { Head } from '../../components/Head'

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
  projectsHeadline?: string
  head: Head
}

export type HomeDataOnDisk = {
  id: string
  offerings: TranslationCollection<Offering>[]
  contactEmail: string
  head: TranslationCollection<Head>
} & TranslationCollection<{
  heroHeadline: string
  heroSubheadline: string
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  emailButton: string
  projectsHeadline?: string
}>

const home: HomeDataOnDisk = data
export const getHome = (locale: Locale): HomeData => {
  return filterByLocale(locale)(home)
  // const filteredHome = filterByLocale(locale)(home)
  // return convertTechnologies(filteredHome)
}

export const useHome: () => HomeData = R.pipe(useLocale, getHome)
