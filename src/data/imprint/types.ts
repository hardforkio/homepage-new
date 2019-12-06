import { TranslationCollection as TranslationCollectionOld } from '../types'
import { Head, HeadLocalized } from '../../components/Head'

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
