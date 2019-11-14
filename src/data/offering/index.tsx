import * as R from 'ramda'
import { Locale, getTranslation, TranslationCollection } from '../i18n'
import { importData } from '../helpers'
import { useLocale } from '../../utils/hooks'

export interface Offering {
  headline: string
  image: string
  text: string
}

const data = importData<TranslationCollection<Offering>>('./', false)

const getOfferings = (locale: Locale): Offering[] =>
  R.map(getTranslation(locale), data)

export const useOfferings = (): Offering[] => {
  const locale = useLocale()
  return getOfferings(locale)
}
