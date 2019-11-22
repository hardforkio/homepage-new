import * as R from 'ramda'
import data from './home.json'
import { TranslationCollection, Locale, getTranslation } from '../i18n'
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

const home: TranslationCollection<HomeData> = data

export const getHome = (locale: Locale) =>
  getTranslation<HomeData>(locale)(home)

export const useHome: () => HomeData = R.pipe(useLocale, getHome)
