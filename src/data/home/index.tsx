import * as R from 'ramda'
import data from './home.json'
import { TranslationCollection, Locale, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import { SEOContent } from '../../components/SEO/index.js'
interface Offering {
  headline: string
  image: string
  text: string
}

export interface HomeData {
  title: string
  pageTitle: string
  heading: string
  offerings: Offering[]
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  emailButton: string
  contactEmail: string
  seo: SEOContent
}

export type HomeDataOnDisk = {
  id: string
  offerings: TranslationCollection<Offering>[]
  contactEmail: string
} & TranslationCollection<{
  title: string
  pageTitle: string
  heading: string
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  emailButton: string
  seo: SEOContent
}>

const home: HomeDataOnDisk = data
export const getHome = (locale: Locale): HomeData =>
  filterByLocale(locale)(home)
export const useHome: () => HomeData = R.pipe(useLocale, getHome)
