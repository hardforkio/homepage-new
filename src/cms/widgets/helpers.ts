import * as R from 'ramda'

import { Locale } from './i18n-locales'

export interface Localized<T> {
  locale: Locale
  value: T
}

type TranslationArray<T> = readonly Localized<T>[]

const hasTranslation = <T>(locale: Locale) =>
  R.any<Localized<T>>(R.propEq('locale', locale))

const newTranslation = <T>(locale: Locale, value: T): Localized<T> => ({
  locale,
  value,
})

const addTranslation = <T>(locale: Locale, value: T) =>
  R.append(newTranslation(locale, value))

const updateTranslation = <T>(locale: Locale, value: T) =>
  R.converge(R.adjust, [
    R.findIndex(R.propEq('locale', locale)),
    R.always(R.assoc('value', value)),
    R.identity,
  ])

const removeEmptyTranslations = R.reject(R.propEq('value', ''))

export const getTranslation = <T>(locale: Locale) =>
  R.pipe<TranslationArray<T>, Localized<T> | undefined, T | undefined>(
    R.find(R.propEq('locale', locale)),
    R.ifElse(R.isNil, R.identity, R.prop('value')),
  )

export const upsertTranslation = <T>(locale: Locale, value: T) =>
  R.pipe<TranslationArray<T>, TranslationArray<T>, TranslationArray<T>>(
    R.ifElse(
      hasTranslation(locale),
      updateTranslation(locale, value),
      addTranslation(locale, value),
    ),
    removeEmptyTranslations,
  )
