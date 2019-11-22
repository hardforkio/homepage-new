import * as R from 'ramda'
import { findDefaultingToHead } from '../utils/helpers'
export const LOCALES = ['en', 'de'] as const
export type Locale = typeof LOCALES[number]

type WithLocale<T> = T & { locale: string }

export interface TranslationCollection<T> {
  translations: WithLocale<T>[]
}

type CMSData<T, S> = TranslationCollection<T> & S

export const extractSingleTranslation: <T = any, S = {}>(
  locale: Locale,
) => (data: CMSData<T, S>) => T & S = <T extends {}>(locale: Locale) =>
  R.converge(R.merge, [
    R.pipe(
      R.prop('translations'),
      findDefaultingToHead(R.propEq('locale', locale)),
      R.omit(['locale']) as (content: WithLocale<T>) => T,
    ),
    R.omit(['translations']),
  ])

export const getTranslations: <T = any>(
  data: TranslationCollection<T>,
) => WithLocale<T>[] = R.prop('translations')

export const filterByLocale: (locale: Locale) => (currentNode: any) => any = (
  locale: Locale,
) =>
  R.cond([
    [
      R.has('translations'),
      R.pipe(
        extractSingleTranslation(locale),
        // Force lazy evaluation to avoid maximum call stack error
        node => filterByLocale(locale)(node),
      ),
    ],
    [
      R.either(R.is(Array), R.is(Object)),
      R.map(node => filterByLocale(locale)(node)),
    ],
    [R.T, R.identity],
  ])
