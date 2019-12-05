import { TranslationCollection } from '../types'
import { Head } from '../../components/Head'

export interface Imprint {
  headline: string
  subheadline: string
  content: string
  head: Head
}

export type ImprintPageOnDisk = {
  id: string
  head: TranslationCollection<Head>
} & TranslationCollection<{
  headline: string
  subheadline: string
  content: string
}>
