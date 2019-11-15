import * as R from 'ramda'
import { findDefaultingToHead } from '../utils/helpers'
export type Locale = 'en' | 'de'

type WithLocale<T> = T & { locale: string }

interface TranslationCollection<T> {
  translations: WithLocale<T>[]
}
export const extractSingleTranslation: <T = any>(
  locale: Locale, //TODO: fix type signature
) => (data: TranslationCollection<T>) => T = <T extends {}>(locale: Locale) =>
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

export const filterByLocale: (locale: Locale) => (multilingual: any) => any = (
  locale: Locale,
) =>
  R.cond([
    [
      R.has('translations'),
      R.pipe(
        extractSingleTranslation(locale),
        // use excplicit arrow function to avoid maximum call stack error
        node => filterByLocale(locale)(node),
      ),
    ],
    [
      R.either(R.is(Array), R.is(Object)),
      R.map(node => filterByLocale(locale)(node)),
    ],
    [R.T, R.identity],
  ])
