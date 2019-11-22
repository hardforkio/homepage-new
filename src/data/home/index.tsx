import * as R from 'ramda'
import data from './home.json'
import { TranslationCollection, Locale, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
interface Offering {
  headline: string
  image: string
  text: string
}

export interface HomeData {
  title: string
  heading: string
  offerings: Offering[]
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  emailButton: string
  contactEmail: string
  metaTitle: string
  metaDescription: string
}

export type HomeDataOnDisk = {
  id: string
  offerings: TranslationCollection<Offering>[]
  contactEmail: string
} & TranslationCollection<{
  title: string
  heading: string
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  emailButton: string
  metaTitle: string
  metaDescription: string
}>

const home: HomeDataOnDisk = data
export const getHome = (locale: Locale): HomeData =>
  filterByLocale(locale)(home)
export const useHome: () => HomeData = R.pipe(useLocale, getHome)
