import { WithLocale } from '../../data/i18n'
import * as R from 'ramda'

import LOCALES from 'i18n-locales'

const isValidLocale = R.flip<string, string[], (a: string) => boolean>(
  R.includes,
)(LOCALES)

export const areValidLocales = R.all(isValidLocale)

type LocalizedString = readonly WithLocale<string>[]

export type Locale = 'de' | 'en' | 'es'

const hasTranslation = (locale: Locale) => R.any(R.propEq('locale', locale))

const newTranslation = <T>(locale: Locale, value: T) => ({ locale, value })

const addTranslation = <T>(locale: Locale, value: T) =>
  R.append(newTranslation(locale, value))

const updateTranslation = <T>(locale: Locale, value: T) =>
  R.converge(R.adjust, [
    R.findIndex(R.propEq('locale', locale)),
    R.always(R.assoc('value', value)),
    R.identity,
  ])

const removeEmptyTranslations = R.reject(R.propEq('value', ''))

export const getTranslation = (locale: Locale) =>
  R.pipe(
    R.find(R.propEq('locale', locale)),
    R.ifElse(R.isNil, R.identity, R.prop('value')),
  )

export const upsertTranslation = <T>(locale: Locale, value: T) =>
  R.pipe(
    R.ifElse(
      hasTranslation(locale),
      updateTranslation(locale, value),
      addTranslation(locale, value),
    ),
    removeEmptyTranslations,
  )
