import { filterByLocale } from '../i18n'
import data from './faq.json'
import { FAQPageOnDisk, FAQPage } from './types'
import { Locale } from '../../cms/i18n'

const faq: FAQPageOnDisk = data

export interface FAQEntry {
  question: string
  answer: string
}

export const getFAQPage = (locale: Locale): FAQPage =>
  filterByLocale(locale)(faq)
