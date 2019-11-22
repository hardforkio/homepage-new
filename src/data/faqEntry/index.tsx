import * as R from 'ramda'
import {
  Locale,
  extractSingleTranslation,
  TranslationCollection,
} from '../i18n'
import { useLocale } from '../../utils/hooks'
import data from './faq.json'
import { SEOContent } from '../../components/SEO'

export interface FAQPage {
  headline: string
  title: string
  subheadline: string
  faqEntries: FAQEntry[]
  seo: SEOContent
}

const faq: TranslationCollection<FAQPage> = data

export interface FAQEntry {
  question: string
  answer: string
}

export const getFAQPage = (locale: Locale): FAQPage =>
  extractSingleTranslation<FAQPage>(locale)(faq)

export const useFAQPage: () => FAQPage = R.pipe(useLocale, getFAQPage)

export const hasFAQEntries: (faqPage: FAQPage) => boolean = R.pipe<
  FAQPage,
  FAQEntry[],
  number,
  boolean
>(R.prop('faqEntries'), R.length, R.lte(1))
