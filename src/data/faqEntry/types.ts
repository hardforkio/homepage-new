import { Head } from '../../components/Head'
import { TranslationCollection as TranslationCollectionOld } from '../types'
import { TranslationCollection } from '../../cms/i18n-lib'

export interface FAQPage {
  headline: string
  subheadline: string
  faqEntries: FAQEntry[]
  head: Head
}

export type FAQPageOnDisk = {
  id: string
  head: TranslationCollection<Head>
  faqEntries: TranslationCollectionOld<FAQEntry>[]
} & TranslationCollection<{
  headline: string
  subheadline: string
}>

export interface FAQEntry {
  question: string
  answer: string
}
