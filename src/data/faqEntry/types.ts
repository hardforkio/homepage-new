import { TranslationCollection } from '../../cms/i18n-lib'
import { Head, HeadLocalized } from '../head/types'
import { TranslationCollection as TranslationCollectionOld } from '../types'

export interface FAQPage {
  headline: string
  subheadline: string
  faqEntries: FAQEntry[]
  head: Head
}

export type FAQPageOnDisk = {
  head: HeadLocalized
  faqEntries: TranslationCollectionOld<FAQEntry>[]
} & {
  headline: TranslationCollection<string>
  subheadline: TranslationCollection<string>
}

export interface FAQEntry {
  question: string
  answer: string
}
