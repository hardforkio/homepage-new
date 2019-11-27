import * as R from 'ramda'

import { Locale } from './i18n-locales'

export interface Localized<T> {
  locale: Locale
  value: T
}

export type TranslationCollection<T> = readonly Localized<T>[]

export const hasTranslation = <T>(locale: Locale) =>
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
  R.pipe<TranslationCollection<T>, Localized<T> | undefined, T | undefined>(
    R.find(R.propEq('locale', locale)),
    R.ifElse(R.isNil, R.identity, R.prop('value')),
  )

export const upsertTranslation = <T>(locale: Locale, value: T) =>
  R.pipe<
    TranslationCollection<T>,
    TranslationCollection<T>,
    TranslationCollection<T>
  >(
    R.ifElse(
      hasTranslation(locale),
      updateTranslation(locale, value),
      addTranslation(locale, value),
    ),
    removeEmptyTranslations,
  )

export const getTranslationDefaultHead = (locale: Locale) =>
  R.ifElse(
    hasTranslation(locale),
    getTranslation(locale),
    R.pipe(R.head, R.prop('value')),
  )

export const isTranslationCollection = R.both(
  R.is(Array),
  R.all(R.has('locale')),
)

export const translate: (locale: Locale) => (currentNode: any) => any = (
  locale: Locale,
) =>
  R.cond([
    [
      isTranslationCollection,
      R.pipe(
        R.ifElse(
          hasTranslation(locale),
          getTranslation(locale),
          R.pipe(R.head, R.prop('value')),
        ),
        R.defaultTo(''),
      ),
    ],
    [
      R.either(R.is(Array), R.is(Object)),
      R.map((node: any) => translate(locale)(node)),
    ],
    [R.T, R.identity],
  ])
