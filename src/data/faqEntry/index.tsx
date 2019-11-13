import * as R from 'ramda'
import { Locale, getTranslation, TranslationCollection } from '../i18n'
import { importData } from '../helpers'
import { useLocale } from '../../utils/hooks'

export interface FAQEntry {
  question: string
  answer: string
}

const data = importData<TranslationCollection<FAQEntry>>('./', false)

const getFAQEntries = (locale: Locale): FAQEntry[] =>
  R.map(getTranslation(locale), data)

export const useFAQEntries = (): FAQEntry[] => {
  const locale = useLocale()
  return getFAQEntries(locale)
}
