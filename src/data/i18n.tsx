import * as R from 'ramda'
import { findDefaultingToHead } from '../utils/helpers'
export type Locale = 'en' | 'de'

type WithLocale<T> = T & { locale: string }

export interface TranslationCollection<T> {
  translations: WithLocale<T>[]
}
export const getTranslation: <T = any>(
  locale: Locale,
) => (data: TranslationCollection<T>) => T = <T extends {}>(locale: Locale) =>
  R.pipe(
    R.prop('translations'),
    findDefaultingToHead(R.propEq('locale', locale)),
    R.omit(['locale']) as (content: WithLocale<T>) => T,
  )

export const getTranslations: <T = any>(
  data: TranslationCollection<T>,
) => WithLocale<T>[] = R.prop('translations')

export const getTranslationRecursively: (
  locale: Locale,
) => (multilingual: any) => any = (locale: Locale) =>
  R.cond([
    [
      R.has('translations'),
      R.pipe(
        getTranslation(locale),
        // use excplicit arrow function to avoid maximum call stack error
        node => getTranslationRecursively(locale)(node),
      ),
    ],
    [
      R.either(R.is(Array), R.is(Object)),
      R.map(node => getTranslationRecursively(locale)(node)),
    ],
    [R.T, R.identity],
  ])
