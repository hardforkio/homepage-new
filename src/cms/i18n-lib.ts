import * as R from 'ramda'

import { Locale } from './i18n-locales'

export const setLocales = <T extends Locale>(locales: T[]) => locales

export interface Localized<T> {
  locale: string
  value: T
}

export type TranslationCollection<T> = ReadonlyArray<Localized<T>>

const isLocalizedString = (obj: any): obj is Localized<any> =>
  R.allPass([
    R.is(Object),
    R.has('locale'),
    R.has('value'),
    R.pipe(R.keys, R.length, R.equals(2)),
  ])(obj)

export const isTranslationCollection = (
  obj: any,
): obj is TranslationCollection<any> =>
  R.allPass([
    R.is(Array),
    R.compose(R.not, R.isEmpty),
    R.all(isLocalizedString),
  ])(obj)

const newTranslation = <T>(locale: Locale, value: T): Localized<T> => ({
  locale,
  value,
})

export const uppendTranslation = <T>(locale: Locale, value: T) => (
  collection: TranslationCollection<T>,
): TranslationCollection<T> =>
  R.pipe(
    R.reject<Localized<T>, 'array'>(R.propEq<any, any>('locale', locale)), //TODO fix types
    R.ifElse(
      R.pipe(R.always(value), R.isEmpty),
      R.identity,
      R.append(newTranslation(locale, value)),
    ),
  )(collection)

// TODO: Use maybe functor to act on undefined values
export const getTranslation = <T>(locale: Locale) => (
  collection: TranslationCollection<T>,
): T | undefined =>
  R.pipe(
    R.find(R.propEq('locale', locale)),
    R.ifElse(R.isNil, R.identity, R.prop('value')),
  )(collection as any) //TODO fix types

export const findTranslation = <T>(locales: Locale[]) => (
  collection: TranslationCollection<T>,
): T | undefined =>
  R.pipe<any, any, any, T | undefined>(
    R.map((locale: Locale) => getTranslation(locale)(collection)),
    R.reject(R.isNil),
    R.head,
  )(locales)

export const translate = (locales: Locale[]) => (node: any): any =>
  R.cond([
    [isTranslationCollection, findTranslation(locales)],
    [
      R.either(R.is(Array), R.is(Object)),
      R.map(node => translate(locales)(node)),
    ],
    [R.T, R.identity],
  ])(node)

export const createTranslator = <T extends Locale>(fallbacks: T[]) => (
  locale: T,
) => translate(R.prepend(locale, fallbacks))
