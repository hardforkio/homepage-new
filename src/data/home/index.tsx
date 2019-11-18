import * as R from 'ramda'
import data from './home.json'
import {
  TranslationCollection,
  Locale,
  extractSingleTranslation,
} from '../i18n'
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
  contactButton: string
  contactEmail: string
  metaTitle: string
  metaDescription: string
}

const home: TranslationCollection<HomeData> = data
const getHome = (locale: Locale) =>
  extractSingleTranslation<HomeData>(locale)(home)
export const useHome: () => HomeData = R.pipe(useLocale, getHome)
