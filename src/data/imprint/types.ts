import { Head, HeadLocalized } from '../head/types'
import { TranslationCollection as TranslationCollectionOld } from '../types'

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
