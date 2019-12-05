import { Head } from '../../components/Head'
import { TranslationCollection } from '../types'

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

export interface FAQEntry {
  question: string
  answer: string
}
