import * as R from 'ramda'

import { Locale } from './i18n-locales'

export interface Localized<T> {
  locale: Locale
  value: T
}

export type TranslationCollection<T> = readonly Localized<T>[]

// TODO: typeguard property types
const isLocalized = (obj: any): obj is Localized<any> =>
  R.allPass([
    R.is(Object),
    R.has('locale'),
    R.has('value'),
    R.pipe(R.keys, R.length, R.equals(2)),
  ])(obj)

export const isTranslationCollection = (
  obj: any,
): obj is TranslationCollection<any> =>
  R.allPass([R.is(Array), R.compose(R.not, R.isEmpty), R.all(isLocalized)])(obj)

export const hasTranslation = <T>(locale: Locale | null) =>
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

const getTranslation = <T>(locale: Locale | null) =>
  R.pipe<TranslationCollection<T>, Localized<T>, T>(
    R.find(R.propEq('locale', locale)),
    R.prop('value'),
  )

export const getTranslationDefault = (
  locale: Locale,
  defaultLocale: Locale | null = null,
) =>
  R.cond([
    [hasTranslation(locale), getTranslation(locale)],
    [hasTranslation(defaultLocale), getTranslation(defaultLocale)],
    [R.T, R.always(undefined)],
  ])

export const translate = (locale: Locale, defaultLocale: Locale = 'en') => (
  node: any,
): any =>
  R.cond([
    [isTranslationCollection, getTranslationDefault(locale, defaultLocale)],
    [
      R.either(R.is(Array), R.is(Object)),
      R.map(node => translate(locale, defaultLocale)(node)),
    ],
    [R.T, R.identity],
  ])(node)
