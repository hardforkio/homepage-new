import { TranslationCollection as TranslationCollectionOld } from '../types'
import { Head } from '../../components/Head'
import { TranslationCollection } from '../../cms/i18n-lib'

export interface Imprint {
  headline: string
  subheadline: string
  content: string
  head: Head
}

export type ImprintPageOnDisk = {
  id: string
  head: TranslationCollection<Head>
} & TranslationCollectionOld<{
  headline: string
  subheadline: string
  content: string
}>
