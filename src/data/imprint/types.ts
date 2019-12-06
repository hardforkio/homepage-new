import { TranslationCollection as TranslationCollectionOld } from '../types'
import { Head, HeadLocalized } from '../head/types'

export interface Imprint {
  headline: string
  subheadline: string
  content: string
  head: Head
}

export type ImprintPageOnDisk = {
  id: string
  head: HeadLocalized
} & TranslationCollectionOld<{
  headline: string
  subheadline: string
  content: string
}>
