import * as R from 'ramda'
import { Locale, TranslationCollection, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import data from './faq.json'
import { Head } from '../../components/Head'

export interface FAQPage {
  headline: string
  subheadline: string
  faqEntries: FAQEntry[]
  head: Head
}

export type FAQPageOnDisk = {
  id: string
  head: TranslationCollection<Head>
  faqEntries: TranslationCollection<FAQEntry>[]
} & TranslationCollection<{
  headline: string
  subheadline: string
}>

const faq: FAQPageOnDisk = data

export interface FAQEntry {
  question: string
  answer: string
}

export const getFAQPage = (locale: Locale): FAQPage =>
  filterByLocale(locale)(faq)

export const useFAQPage: () => FAQPage = R.pipe(useLocale, getFAQPage)

export const hasFAQEntries: (faqPage: FAQPage) => boolean = R.pipe<
  FAQPage,
  FAQEntry[],
  number,
  boolean
>(R.prop('faqEntries'), R.length, R.lte(1))
