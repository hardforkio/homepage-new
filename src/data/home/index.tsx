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
  pageTitle: string
  heading: string
  offerings: Offering[]
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  emailButton: string
  contactEmail: string
  head: Head
}

export type HomeDataOnDisk = {
  id: string
  offerings: TranslationCollection<Offering>[]
  contactEmail: string
  head: TranslationCollection<Head>
} & TranslationCollection<{
  pageTitle: string
  heading: string
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  emailButton: string
}>

const home: HomeDataOnDisk = data
export const getHome = (locale: Locale): HomeData =>
  filterByLocale(locale)(home)
export const useHome: () => HomeData = R.pipe(useLocale, getHome)
