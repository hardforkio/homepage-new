import * as R from 'ramda'

import { findDefaultingToHead } from '../utils/helpers'
import { CMSData, Locale } from './types'

export const extractSingleTranslation: <T = any, S = {}>(
  locale: Locale,
) => (data: CMSData<T, S>) => T & S = (locale: Locale) =>
  R.converge(R.merge, [
    R.pipe(
      R.prop('translations'),
      findDefaultingToHead<any>(R.propEq('locale', locale)),
      R.prop('value'),
    ),
    R.omit(['translations']),
  ])

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
