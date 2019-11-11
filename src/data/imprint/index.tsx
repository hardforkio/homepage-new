import * as R from 'ramda'
import { Locale, getTranslation, Localized } from '../i18n'
import { useLocale } from '../../utils/hooks'

export interface Imprint {
  headline: string
  subHeadline: string
  metaTitle: string
  content: string
}

const data: Localized<Imprint> = require('./imprint.json') //TODO: Emit an error at build time if there is a type error here

export const getImprint = (locale: Locale): Imprint =>
  getTranslation(locale)(data)

export const useImprint: () => Imprint = R.pipe(
  useLocale,
  getImprint,
)
