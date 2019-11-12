import * as R from 'ramda'
import { Locale, getTranslation, Localized } from '../i18n'
import { useLocale } from '../../utils/hooks'
import data from './imprint.json'

export interface Imprint {
  headline: string
  subHeadline: string
  metaTitle: string
  content: string
}

const imprint: Localized<Imprint> = data

export const getImprint = (locale: Locale): Imprint =>
  getTranslation(locale)(imprint)

export const useImprint: () => Imprint = R.pipe(
  useLocale,
  getImprint,
)
