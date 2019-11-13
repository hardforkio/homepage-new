import * as R from 'ramda'
import { Locale, getTranslation, TranslationCollection } from '../i18n'
import { useLocale } from '../../utils/hooks'
import data from './faq.json'

export interface FAQPage {
  headline: string
  subheadline: string
  metaTitle: string
  faqEntries: FAQEntry[]
}

const faq: TranslationCollection<FAQPage> = data

export interface FAQEntry {
  question: string
  answer: string
}

const getFAQPage = (locale: Locale): FAQPage => getTranslation(locale)(faq)

export const useFAQPage: () => FAQPage = R.pipe(useLocale, getFAQPage)
