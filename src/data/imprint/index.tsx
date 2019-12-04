import { Locale, TranslationCollection, filterByLocale } from '../i18n'
import data from './imprint.json'
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

const imprint: ImprintPageOnDisk = data

export const getImprint = (locale: Locale): Imprint =>
  filterByLocale(locale)(imprint)
