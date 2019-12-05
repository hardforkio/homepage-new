import data from './home.json'
import { filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import { translate } from '../../cms/i18n'
import * as R from 'ramda'
import { HomeDataOnDisk, HomeData } from './types.js'
import { Locale } from '../types.js'

// FIXME: Mixes old and new translation methods
const home: HomeDataOnDisk = data
export const getHome = (locale: Locale): HomeData => {
  return R.pipe<HomeDataOnDisk, any, any>(
    filterByLocale(locale),
    translate(locale),
  )(home)
}
export const useHome: () => HomeData = R.pipe(useLocale, getHome)
