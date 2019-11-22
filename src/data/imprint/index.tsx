import * as R from 'ramda'
import {
  Locale,
  TranslationCollection,
  extractSingleTranslation,
} from '../i18n'
import { useLocale } from '../../utils/hooks'
import data from './imprint.json'

export interface Imprint {
  headline: string
  subHeadline: string
  metaTitle: string
  metaDescription: string
  content: string
}

const imprint: TranslationCollection<Imprint> = data

export const getImprint = (locale: Locale): Imprint =>
  extractSingleTranslation<Imprint>(locale)(imprint)

export const useImprint: () => Imprint = R.pipe(useLocale, getImprint)
