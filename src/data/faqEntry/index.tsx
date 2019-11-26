import * as R from 'ramda'
import { Locale, TranslationCollection, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import data from './faq.json'

export interface FAQPage {
  headline: string
  subheadline: string
  metaTitle: string
  faqEntries: FAQEntry[]
}

export type FAQPageOnDisk = {
  faqEntries: TranslationCollection<FAQEntry>[]
} & TranslationCollection<{
  headline: string
  subheadline: string
  metaTitle: string
}>

const faq: FAQPageOnDisk = data

export interface FAQEntry {
  question: string
  answer: string
}

const getFAQPage = (locale: Locale): FAQPage => filterByLocale(locale)(faq)

export const useFAQPage: () => FAQPage = R.pipe(useLocale, getFAQPage)

export const hasFAQEntries: (faqPage: FAQPage) => boolean = R.pipe<
  FAQPage,
  FAQEntry[],
  number,
  boolean
>(R.prop('faqEntries'), R.length, R.lte(1))
