import { WithLocale } from '../../data/i18n'
import * as R from 'ramda'

type LocalizedString = readonly WithLocale<string>[]

type Locale = 'de' | 'en' | 'es'

export const getTranslation = R.curry(
  (locale: Locale, data: LocalizedString) => {},
)
export const setTranslation = R.curry(
  (locale: Locale, value: string, data: LocalizedString) => {},
)
